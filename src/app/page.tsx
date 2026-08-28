import projects from '../data/projects';
import HeroCarousel from '../components/layout/HeroCarousel';
import ProcessSection from '../components/layout/ProcessSection';
import TimelineSection from '../components/layout/TimelineSection';
import ProjectList from '../components/projects/ProjectList';
import ContactSection from '../components/layout/ContactSection';

export default function Home() {

  return (
    <>
      <section className="h-dvh relative w-full flex items-end snap-start">
        <HeroCarousel hero={projects} />
        
      </section>

      <ProcessSection />

      <TimelineSection />

      <div id="projetos" className="snap-start px-6 md:px-12 py-20 md:py-28">
        <header className="mb-10">
          <h2 className="text-3xl md:text-5xl font-serif">Projetos</h2>
          <p className="text-zinc-600 mt-3 max-w-prose">
            Clique em um projeto para expandir e ver o estudo completo.
          </p>
        </header>
        <ProjectList items={projects} />
      </div>

      <ContactSection />
    </>
  );
}
