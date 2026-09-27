"use server";
import { headers } from "next/headers";
import { Resend } from 'resend';
import { avaliarAntiSpam, ipDoCliente } from "@/lib/contato-anti-spam";

const resend = new Resend(process.env.RESEND_API_KEY);

// O React 19 exige essa assinatura: (prevState, formData)
export async function sendContactEmail(prevState: unknown, formData: FormData) {
  const cabecalhos = await headers();
  const antiSpam = avaliarAntiSpam({
    website: formData.get("website"),
    iniciadoEm: formData.get("iniciadoEm"),
    ip: ipDoCliente(cabecalhos),
  });

  if (antiSpam.tipo === "sucesso-silencioso") {
    return { status: "success", message: "Enviado com sucesso!" };
  }

  if (antiSpam.tipo === "rate-limit") {
    return { status: "error", message: "Tente novamente mais tarde." };
  }

  const nome = formData.get('nome') as string;
  const email = formData.get('email') as string;
  const mensagem = formData.get('mensagem') as string;

  if (!nome || !email || !mensagem) {
    return { status: "error", message: "Todos os campos são obrigatórios." };
  }

  try {
    await resend.emails.send({
      from: 'Contato Portfolio <onboarding@resend.dev>',
      to: 'cayofelipe31@gmail.com', // Coloque seu email aqui
      replyTo: email,
      subject: `Novo Contato de ${nome} - Portfólio`,
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem:\n${mensagem}`,
    });

    return { status: "success", message: "Enviado com sucesso!" };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Erro interno ao enviar o email." };
  }
}