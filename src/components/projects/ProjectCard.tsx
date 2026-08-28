"use client";
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  slug: string;
  title: string;
  coverImage: string;
  span?: 'col-span-1' | 'col-span-2';
};

export default function ProjectCard({ slug, title, coverImage, span = 'col-span-1' }: Props) {
  return (
    <Link href={`/projetos/${slug}`} className={`group block ${span}`}>
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-zinc-100">
        <Image
          src={coverImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
    </Link>
  );
}
