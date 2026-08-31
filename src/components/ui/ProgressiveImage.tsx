"use client";
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

// Carrega q=10 borrada por baixo e q=90 nítida por cima — sem cinza
export default function ProgressiveImage({ src, alt, width, height, fill, sizes, className, priority }: Props) {
  const [loaded, setLoaded] = useState(false);

  // Low quality placeholder — mesma imagem mas com q=75 e borrada
  const lowQualityProps = {
    src,
    alt,
    sizes,
    quality: 50,
    priority,
    ...(fill ? { fill: true as const } : { width: width!, height: height! }),
  };

  const highQualityProps = {
    src,
    alt,
    sizes,
    quality: 90,
    ...(fill ? { fill: true as const } : { width: width!, height: height! }),
    onLoad: () => setLoaded(true),
  };

  if (fill) {
    return (
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image {...lowQualityProps} alt={alt} className={`${className} blur-[12px] scale-105`} />
        <Image
          {...highQualityProps}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Image {...lowQualityProps} alt={alt} className={`${className} blur-[12px]`} />
      <Image
        {...highQualityProps}
        alt={alt}
        className={`${className} absolute inset-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
