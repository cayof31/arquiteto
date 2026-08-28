import type { ArchitectureProject } from '../../types/project';
import ProjectCard from './ProjectCard';

export default function ProjectList({ items }: { items: ArchitectureProject[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      {items.map((p) => (
        <ProjectCard key={p.slug} slug={p.slug} title={p.title} coverImage={p.coverImage} />
      ))}
    </div>
  );
}
