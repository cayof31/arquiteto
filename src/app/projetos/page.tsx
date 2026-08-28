import ProjectGrid from '../../components/projects/ProjectGrid';
import { projects } from '../../data/projects';

export default function ProjetosPage() {
  return (
    <section className="py-12">
      <header className="mb-8">
        <h2 className="text-4xl font-serif">Projetos</h2>
        <p className="text-zinc-600 mt-2">Seleção curada de estudos de caso e obras executadas.</p>
      </header>

      <ProjectGrid items={projects} />
    </section>
  );
}
