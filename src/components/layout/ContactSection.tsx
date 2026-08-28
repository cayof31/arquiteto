"use client";
// 1. Importe os hooks modernos do React 19
import { useActionState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Footer from './Footer';
import { sendContactEmail } from '@/app/actions/send-email'

export default function ContactSection() {
  // 2. O useActionState recebe a Server Action e o estado inicial.
  // Ele te devolve: o estado atual, a ação para plugar no form, e um booleano de loading (isPending).
  const [state, formAction, isPending] = useActionState(sendContactEmail, { 
    status: "idle", 
    message: "" 
  });
  
  // Referência para limparmos o form após o sucesso
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <section id="contato" className='min-h-screen'>
      <div className="relative w-full flex items-center justify-center snap-start bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-6 md:px-12 max-w-2xl w-full py-20"
        >
          {/* Textos mantidos iguais... */}
          <h2 className="text-4xl md:text-7xl font-serif leading-tight mb-3 text-zinc-900">
            Vamos conversar
          </h2>
          <p className="text-zinc-500 mb-10 max-w-md">
            Tem um projeto em mente? Entre em contato.
          </p>

          {/* 3. A mágica acontece aqui: action={formAction} */}
          <form ref={formRef} action={formAction} className="space-y-8">
            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Nome</label>
              <input type="text" name="nome" required className="w-full border-b border-zinc-300 pb-3 bg-transparent outline-none focus:border-zinc-900 transition-colors" placeholder="Seu nome" />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Email</label>
              <input type="email" name="email" required className="w-full border-b border-zinc-300 pb-3 bg-transparent outline-none focus:border-zinc-900 transition-colors" placeholder="seu@email.com" />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Mensagem</label>
              <textarea name="mensagem" required rows={4} className="w-full border-b border-zinc-300 pb-3 bg-transparent outline-none focus:border-zinc-900 transition-colors resize-none" placeholder="Conte sobre seu projeto..." />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isPending}
                className="px-10 py-4 bg-zinc-900 text-white uppercase text-xs tracking-widest font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {/* 4. O isPending controla a UI sozinho */}
                {isPending ? "Enviando..." : "Enviar"}
              </button>
              
              {/* Mensagens de Feedback */}
              {state.status === "success" && (
                <span className="text-sm font-medium text-green-600">{state.message}</span>
              )}
              {state.status === "error" && (
                <span className="text-sm font-medium text-red-600">{state.message}</span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
}