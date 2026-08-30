"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const milestones = [
  {
    year: '2010',
    title: 'Fundação do Estúdio',
    subtitle: 'O início de uma trajetória',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920',
    description:
      'Em 2010, nascia o Studio Vértice com a convicção de que arquitetura é mais que construir — é criar experiências que transformam lugares e pessoas.',
  },
  {
    year: '2013',
    title: 'Primeira Obra de Destaque',
    subtitle: 'Casa Brutalista na Colina',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1920',
    description:
      'O projeto que definiu nossa linguagem: concreto aparente, integração com o relevo e balanços ousados. Publicado em revistas nacionais e internacionais.',
  },
  {
    year: '2018',
    title: 'Prêmio Internacional',
    subtitle: 'Reconhecimento mundial',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920',
    description:
      'Recebemos o prêmio de Melhor Projeto Comercial pelo Pavilhão Metálico, consolidando nossa atuação no mercado institucional e corporativo.',
  },
  {
    year: '2024',
    title: 'Hoje',
    subtitle: 'Mais de 60 projetos realizados',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1920',
    description:
      'Com uma equipe multidisciplinar e projetos em quatro estados, seguimos explorando os limites entre técnica, materialidade e sensibilidade humana.',
  },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const sectionHeight = 500;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

const peekRatio = -5; // % da largura de um slide que sobra do anterior ao fim
  const finalShift = (milestones.length - 1) * 100 - peekRatio;

  const x = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    ['0%', `-${finalShift}%`, `-${finalShift}%`]
  );

  const lineWidth = useTransform(scrollYProgress, [0, 0.75, 1], ['0%', '100%', '100%']);

  return (
    <section ref={sectionRef} className="relative" style={{ height: `${sectionHeight}vh` }}>
      <div className="sticky top-0 h-dvh overflow-hidden">
        <motion.div style={{ x }} className="flex h-screen">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="min-w-full w-[102%] h-dvh relative flex items-center shrink-0 snap-start"
            >
              <div className="absolute inset-0 -z-10">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="100vw"
                  quality={90}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="pl-8 md:pl-24 max-w-9/12 text-white">
                <span className="text-4xl md:text-9xl font-serif font-bold text-white/10 block mb-3 md:mb-4 select-none">
                  {m.year}
                </span>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3 font-medium">
                  {m.subtitle}
                </p>
                <h2 className="text-2xl md:text-7xl font-serif leading-tight mb-3 md:mb-6">
                  {m.title}
                </h2>
                <p className="text-white/60 leading-relaxed max-w-xl text-sm md:text-base">{m.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-12 right-6 md:right-12 flex items-center gap-3 md:gap-4">
          <span className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-medium shrink-0">
            Percurso
          </span>
          <div className="flex-1 h-px bg-white/15 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white/60"
              style={{ width: lineWidth }}
            />
            {milestones.map((_, i) => {
              const left = `${(i / (milestones.length - 1)) * 100}%`;
              return (
                <span
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-white/30"
                  style={{ left }}
                />
              );
            })}
          </div>
          <motion.span
            className="text-white/40 text-xs shrink-0"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.65, 0.8], [1, 1, 0]) }}
          >
            →
          </motion.span>
        </div>
      </div>
    </section>
  );
}
