"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const processSteps = [
  {
    id: 'briefing',
    title: 'Briefing',
    subtitle: 'Escuta e entendimento',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    content:
      'Tudo começa com uma escuta profunda. Mapeamos necessidades, desejos, restrições orçamentárias e regulatórias. O briefing é a base de tudo — é onde construímos a confiança e alinhamos expectativas antes de qualquer traço.',
  },
  {
    id: 'conceito',
    title: 'Conceito',
    subtitle: 'Partido arquitetônico',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1200',
    content:
      'A partir do briefing, nasce o conceito. Estudamos implantação, volumetria, fluxos e a relação com o entorno. É aqui que definimos a alma do projeto — a ideologia que guiará cada decisão estética e técnica.',
  },
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento',
    subtitle: 'Detalhamento técnico',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    content:
      'O conceito vira projeto executivo. Detalhamos cada elemento — estruturas, instalações, esquadrias, acabamentos. Coordenamos com engenheiros e consultores para garantir que a visão seja construível dentro do prazo e orçamento.',
  },
  {
    id: 'execucao',
    title: 'Execução',
    subtitle: 'Obra e entrega',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    content:
      'Acompanhamos a obra do primeiro ao último dia. Fiscalizamos a execução, resolvemos imprevistos em tempo real e garantimos que cada detalhe saia como projetado. A entrega não é o fim — é a materialização de tudo que construímos juntos.',
  },
];

export default function ProcessSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeStep = processSteps.find((s) => s.id === activeId) ?? processSteps[0];

  return (
    <section id="studio" className="min-h-screen w-full flex items-center snap-start bg-zinc-50">
      <div className="grid md:grid-cols-2 w-full min-h-screen">
        {/* Left — Image */}
        <div className="relative h-[50vh] md:h-screen overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={activeStep.id}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <Image
                src={activeStep.image}
                alt={activeStep.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                // quality={90}
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Etapa</p>
            <p className="text-lg font-medium">{activeStep.subtitle}</p>
          </div>
        </div>

        {/* Right — Accordion */}
        <div className="flex items-center px-6 md:px-16 py-16">
          <div className="w-full max-w-lg mx-auto">
            <p className="text-zinc-400 uppercase text-xs tracking-[0.2em] mb-2 font-medium">
              Como trabalhamos
            </p>
            <h2 className="text-3xl md:text-6xl font-serif leading-tight text-zinc-900 mb-8 md:mb-10">
              Nosso Processo
            </h2>

            <div className="space-y-0">
              {processSteps.map((step) => {
                const isOpen = activeId === step.id;
                return (
                  <div key={step.id} className="border-t border-zinc-200 last:border-b">
                    <button
                      onClick={() => setActiveId(isOpen ? null : step.id)}
                      className="w-full flex items-center justify-between py-5 text-left group"
                    >
                      <div>
                        <span className="text-zinc-900 font-medium text-lg">{step.title}</span>
                        <p className="text-zinc-400 text-sm mt-0.5">{step.subtitle}</p>
                      </div>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-zinc-400 text-xl font-light group-hover:text-zinc-900 transition-colors"
                      >
                        +
                      </motion.span>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-zinc-600 leading-relaxed pb-6 pr-4">{step.content}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
