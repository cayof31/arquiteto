import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  avaliarAntiSpam,
  criarLojaRateLimit,
  ipDoCliente,
} from "./contato-anti-spam.ts";

const agora = 1_700_000_000_000;
const iniciadoOk = String(agora - 5_000);

function cabecalhos(map: Record<string, string>) {
  return {
    get(name: string) {
      return map[name.toLowerCase()] ?? null;
    },
  };
}

describe("contato-anti-spam", () => {
  describe("honeypot", () => {
    it("trata website preenchido como sucesso silencioso", () => {
      const resultado = avaliarAntiSpam({
        website: "http://spam.example",
        iniciadoEm: iniciadoOk,
        ip: "1.1.1.1",
        agora,
        loja: criarLojaRateLimit(),
      });
      assert.equal(resultado.tipo, "sucesso-silencioso");
    });

    it("não dispara honeypot quando website está vazio", () => {
      const resultado = avaliarAntiSpam({
        website: "",
        iniciadoEm: iniciadoOk,
        ip: "1.1.1.1",
        agora,
        loja: criarLojaRateLimit(),
      });
      assert.equal(resultado.tipo, "prosseguir");
    });

    it("não dispara honeypot quando website é só whitespace", () => {
      const resultado = avaliarAntiSpam({
        website: "   \t",
        iniciadoEm: iniciadoOk,
        ip: "1.1.1.1",
        agora,
        loja: criarLojaRateLimit(),
      });
      assert.equal(resultado.tipo, "prosseguir");
    });
  });

  describe("tempo mínimo", () => {
    it("trata envio em menos de 3s como sucesso silencioso", () => {
      const resultado = avaliarAntiSpam({
        website: "",
        iniciadoEm: String(agora - 2999),
        ip: "1.1.1.1",
        agora,
        loja: criarLojaRateLimit(),
      });
      assert.equal(resultado.tipo, "sucesso-silencioso");
    });

    it("trata timestamp ausente como sucesso silencioso", () => {
      const resultado = avaliarAntiSpam({
        website: "",
        iniciadoEm: null,
        ip: "1.1.1.1",
        agora,
        loja: criarLojaRateLimit(),
      });
      assert.equal(resultado.tipo, "sucesso-silencioso");
    });

    it("trata timestamp NaN como sucesso silencioso", () => {
      const resultado = avaliarAntiSpam({
        website: "",
        iniciadoEm: "abc",
        ip: "1.1.1.1",
        agora,
        loja: criarLojaRateLimit(),
      });
      assert.equal(resultado.tipo, "sucesso-silencioso");
    });

    it("trata envio depois de 24h como sucesso silencioso", () => {
      const resultado = avaliarAntiSpam({
        website: "",
        iniciadoEm: String(agora - (24 * 60 * 60 * 1000 + 1)),
        ip: "1.1.1.1",
        agora,
        loja: criarLojaRateLimit(),
      });
      assert.equal(resultado.tipo, "sucesso-silencioso");
    });

    it("aceita envio entre 3s e 24h", () => {
      const resultado = avaliarAntiSpam({
        website: "",
        iniciadoEm: String(agora - 3000),
        ip: "1.1.1.1",
        agora,
        loja: criarLojaRateLimit(),
      });
      assert.equal(resultado.tipo, "prosseguir");
    });
  });

  describe("rate limit", () => {
    it("permite 5 envios reais e bloqueia o 6º", () => {
      const loja = criarLojaRateLimit();
      const envio = () =>
        avaliarAntiSpam({
          website: "",
          iniciadoEm: iniciadoOk,
          ip: "10.0.0.1",
          agora,
          loja,
        });

      for (let i = 0; i < 5; i++) {
        assert.equal(envio().tipo, "prosseguir");
      }
      assert.equal(envio().tipo, "rate-limit");
    });

    it("libera de novo quando a janela de 1h expira", () => {
      const loja = criarLojaRateLimit();
      for (let i = 0; i < 5; i++) {
        avaliarAntiSpam({
          website: "",
          iniciadoEm: iniciadoOk,
          ip: "10.0.0.2",
          agora,
          loja,
        });
      }

      const depoisDaJanela = agora + 60 * 60 * 1000;
      const resultado = avaliarAntiSpam({
        website: "",
        iniciadoEm: String(depoisDaJanela - 5_000),
        ip: "10.0.0.2",
        agora: depoisDaJanela,
        loja,
      });
      assert.equal(resultado.tipo, "prosseguir");
    });

    it("isola o limite por IP", () => {
      const loja = criarLojaRateLimit();
      for (let i = 0; i < 5; i++) {
        avaliarAntiSpam({
          website: "",
          iniciadoEm: iniciadoOk,
          ip: "10.0.0.3",
          agora,
          loja,
        });
      }

      const outroIp = avaliarAntiSpam({
        website: "",
        iniciadoEm: iniciadoOk,
        ip: "10.0.0.4",
        agora,
        loja,
      });
      assert.equal(outroIp.tipo, "prosseguir");
    });

    it("não conta honeypot nem spam silencioso no limite", () => {
      const loja = criarLojaRateLimit();
      for (let i = 0; i < 6; i++) {
        const honeypot = avaliarAntiSpam({
          website: "bot",
          iniciadoEm: iniciadoOk,
          ip: "10.0.0.5",
          agora,
          loja,
        });
        assert.equal(honeypot.tipo, "sucesso-silencioso");
      }

      const rapido = avaliarAntiSpam({
        website: "",
        iniciadoEm: String(agora - 100),
        ip: "10.0.0.5",
        agora,
        loja,
      });
      assert.equal(rapido.tipo, "sucesso-silencioso");

      for (let i = 0; i < 5; i++) {
        const real = avaliarAntiSpam({
          website: "",
          iniciadoEm: iniciadoOk,
          ip: "10.0.0.5",
          agora,
          loja,
        });
        assert.equal(real.tipo, "prosseguir");
      }
    });
  });

  describe("ipDoCliente", () => {
    it("usa o primeiro IP de x-forwarded-for", () => {
      assert.equal(
        ipDoCliente(
          cabecalhos({
            "x-forwarded-for": "203.0.113.10, 10.0.0.1",
            "x-real-ip": "198.51.100.7",
          }),
        ),
        "203.0.113.10",
      );
    });

    it("usa x-real-ip quando não há x-forwarded-for", () => {
      assert.equal(
        ipDoCliente(cabecalhos({ "x-real-ip": "198.51.100.7" })),
        "198.51.100.7",
      );
    });

    it("usa unknown quando não há IP", () => {
      assert.equal(ipDoCliente(cabecalhos({})), "unknown");
    });
  });
});
