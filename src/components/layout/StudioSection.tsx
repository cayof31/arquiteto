"use client";
import Image from 'next/image';
import { motion } from 'motion/react';

export default function StudioSection() {
  return (
    <section id="studio" className="h-screen relative w-full flex items-center snap-start">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1920"
          alt="Studio"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="px-6 md:px-12 max-w-3xl text-white"
      >
        <p className="text-white/50 uppercase text-xs tracking-[0.2em] mb-3 font-medium">
          O Estúdio
        </p>
        <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
          Arquitetura como <br />experiência
        </h2>
        <p className="text-white/80 leading-relaxed text-lg max-w-2xl">
          Somos um estúdio dedicado a criar espaços que equilibram técnica, materialidade e
          sensibilidade humana. Cada projeto nasce do diálogo entre contexto, programa e
          a busca por uma beleza essencial — onde a estrutura vira linguagem e cada material
          carrega intenção.
        </p>
        <div className="grid grid-cols-3 gap-8 mt-10 text-center">
          <div>
            <p className="text-3xl font-serif text-white">15+</p>
            <p className="text-white/50 text-sm mt-1">Anos de atuação</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-white">60+</p>
            <p className="text-white/50 text-sm mt-1">Projetos realizados</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-white">8</p>
            <p className="text-white/50 text-sm mt-1">Prêmios recebidos</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
