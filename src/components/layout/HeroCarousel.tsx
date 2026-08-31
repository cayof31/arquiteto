"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, PanInfo } from 'motion/react';
import { ArchitectureProject } from '@/types/project'
import Image from 'next/image';

interface HeroCarouselProps {
  hero: ArchitectureProject[];
}

// 2. Use as chaves { } para extrair o hero de dentro das props
export default function HeroCarousel({ hero }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. useRef guarda a memória do timer sem causar re-renderizações (Sem lag no toque)
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % hero.length);
  }, [hero.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + hero.length) % hero.length);
  }, [hero.length]);

  // 2. Função isolada para reiniciar o timer facilmente
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goToNext, 5000);
  }, [goToNext]);

  // Inicia o timer quando o componente monta
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleDragStart = () => {
    // 3. O usuário encostou? Pausa o slider instantaneamente, sem re-renderizar
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = window.innerWidth * 0.15;

    if (info.offset.x < -threshold) {
      goToNext(); // Puxou pra esquerda, vai pro próximo
    } else if (info.offset.x > threshold) {
      goToPrev(); // Puxou pra direita, volta pro anterior
    }

    // 4. Soltou o dedo (mesmo que só tenha clicado)? O slider volta a rodar sozinho
    startTimer();
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white">
      <motion.div
        className="flex h-full w-full touch-none"
        // <section className="h-dvh relative w-full flex items-end snap-start">

        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="x"
        // REMOVIDO: dragConstraints (Adeus pulo de imagem)
        dragElastic={0.2} // Devolve aquela sensação de resistência ao puxar além do limite
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {hero.map((src, i) => (
          <div key={i} className="min-w-full w-[100%] h-dvh relative flex items-center shrink-0 snap-start">
            <Image
              src={src.coverImage}
              alt={`Projeto ${i + 1}`}
              fill
              sizes="100vw"
              quality={90}
              priority
              className="object-cover select-none"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-transparent pointer-events-none h-1/2" />
            <div className='h-dvh relative w-full flex items-end snap-start p-10'>
              <div className="pb-12 px-6 md:px-12 text-white">
                <h1 className="text-4xl md:text-9xl font-serif">{src.title}</h1>
                <p className="mt-4 max-w-prose text-sm md:text-2xl">{src.description}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
        {hero.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              startTimer(); // Reinicia o contador de 5s ao clicar na bolinha
            }}
            aria-label={`Ir para a imagem ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-opacity ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
          />
        ))}
      </div>
    </div>
  );
}