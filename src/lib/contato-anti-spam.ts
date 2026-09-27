const TEMPO_MINIMO_MS = 3_000;
const TEMPO_MAXIMO_MS = 24 * 60 * 60 * 1000;
const LIMITE_POR_JANELA = 5;
const JANELA_MS = 60 * 60 * 1000;

export type LojaRateLimit = Map<string, number[]>;

export type LeitorCabecalhos = {
  get(name: string): string | null;
};

export type ResultadoAntiSpam =
  | { tipo: "prosseguir" }
  | { tipo: "sucesso-silencioso" }
  | { tipo: "rate-limit" };

export type AvaliarAntiSpamInput = {
  website: unknown;
  iniciadoEm: unknown;
  ip: string;
  agora?: number;
  loja?: LojaRateLimit;
};

const lojaPadrao: LojaRateLimit = new Map();

export function criarLojaRateLimit(): LojaRateLimit {
  return new Map();
}

export function ipDoCliente(cabecalhos: LeitorCabecalhos): string {
  const encaminhado = cabecalhos.get("x-forwarded-for");
  if (encaminhado) {
    const primeiro = encaminhado.split(",")[0]?.trim();
    if (primeiro) return primeiro;
  }

  const real = cabecalhos.get("x-real-ip")?.trim();
  if (real) return real;

  return "unknown";
}

function honeypotPreenchido(website: unknown): boolean {
  return typeof website === "string" && website.trim().length > 0;
}

function tempoInvalido(iniciadoEm: unknown, agora: number): boolean {
  if (iniciadoEm == null || iniciadoEm === "") return true;
  const inicio = Number(iniciadoEm);
  if (!Number.isFinite(inicio)) return true;
  const decorrido = agora - inicio;
  return decorrido < TEMPO_MINIMO_MS || decorrido > TEMPO_MAXIMO_MS;
}

function registrarEnvioSePermitido(
  ip: string,
  agora: number,
  loja: LojaRateLimit,
): boolean {
  const vigentes = (loja.get(ip) ?? []).filter((quando) => agora - quando < JANELA_MS);
  if (vigentes.length >= LIMITE_POR_JANELA) {
    loja.set(ip, vigentes);
    return false;
  }
  vigentes.push(agora);
  loja.set(ip, vigentes);
  return true;
}

export function avaliarAntiSpam(input: AvaliarAntiSpamInput): ResultadoAntiSpam {
  const agora = input.agora ?? Date.now();
  const loja = input.loja ?? lojaPadrao;

  if (honeypotPreenchido(input.website) || tempoInvalido(input.iniciadoEm, agora)) {
    return { tipo: "sucesso-silencioso" };
  }

  if (!registrarEnvioSePermitido(input.ip, agora, loja)) {
    return { tipo: "rate-limit" };
  }

  return { tipo: "prosseguir" };
}
