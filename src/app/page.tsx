import Link from 'next/link';
import projects from '../data/projects';
import HeroCarousel from '../components/layout/HeroCarousel';

export default function Home() {
  const hero = projects[0];
  const heroImages = [hero.coverImage, ...hero.gallery.map(g => g.url)];

  return (
    <section className="h-screen relative w-full flex items-end">
      <HeroCarousel images={heroImages} />
      <div className="absolute inset-0 bg-black/30" />

      <div className="pb-12 px-6 md:px-12">
        <h1 className="text-white text-6xl md:text-8xl font-serif">{hero.title}</h1>
        <p className="text-white/90 mt-4 max-w-prose">{hero.description}</p>
        <div className="mt-8">
          <Link href={`/projetos/${hero.slug}`} className="inline-block px-8 py-4 bg-white text-black/90 uppercase text-sm tracking-widest font-semibold hover:bg-zinc-200 transition-colors">Explorar Obra</Link>
        </div>
      </div>
    </section>
  );
}
