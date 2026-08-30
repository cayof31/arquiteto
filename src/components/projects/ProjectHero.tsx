"use client";
import Image from 'next/image';
import { motion } from 'motion/react';

type Props = {
  slug: string;
  title: string;
  location: string;
  year: number;
  coverImage: string;
};

export default function ProjectHero({ title, location, year, coverImage }: Props) {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-zinc-100">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.15 }}
      >
        <Image
          src={coverImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
      </motion.div>
      <div className="absolute left-6 bottom-6 text-white">
        <h1 className="text-5xl font-serif">{title}</h1>
        <p className="mt-2">{location} • {year}</p>
      </div>
    </div>
  );
}
