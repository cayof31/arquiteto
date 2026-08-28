import type { ArchitectureProject } from '../../types/project';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ items }: { items: ArchitectureProject[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
      {items.map((p) => {
        const spanClass = (p.content?.find((b) => b.type === 'image')?.image.span ?? 'col-span-1') as 'col-span-1' | 'col-span-2';
        const colSpan = spanClass === 'col-span-2' ? 'md:col-span-8' : 'md:col-span-4';
        return (
          <div key={p.slug} className={`${colSpan}`}>
            <ProjectCard slug={p.slug} title={p.title} coverImage={p.coverImage} span={spanClass} />
          </div>
        );
      })}
    </div>
  );
}
