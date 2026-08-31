import Image from 'next/image';
import { projects } from '../../../data/projects';
import ProjectHero from '../../../components/projects/ProjectHero';
import ProgressiveImage from '../../../components/ui/ProgressiveImage';

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <div>Projeto não encontrado</div>;

  return (
    <article className="py-12">
      <header className="mb-8">
        <ProjectHero slug={project.slug} title={project.title} location={project.location} year={project.year} coverImage={project.coverImage} />
        <div className="mt-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          <div className="md:col-span-2 md:pr-10 pb-8 md:pb-0 border-b md:border-b-0 md:border-r border-zinc-200 flex flex-col justify-center py-4 md:py-6">
            <p className="max-w-prose leading-relaxed text-zinc-700 text-[15px] md:text-base">{project.description}</p>
            {project.source && (
              <p className="mt-4 text-xs text-zinc-500 italic">
                Fonte:{" "}
                <a
                  href={project.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-zinc-700 transition-colors"
                >
                  {project.source.name}
                </a>{" "}
                — conteúdo adaptado do artigo original.
              </p>
            )}
          </div>
          <aside className="bg-zinc-50 p-6 md:p-7 md:ml-2 flex flex-col justify-center">
            <h3 className="font-semibold">Ficha Técnica</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li><strong>Área:</strong> {project.technicalDetails.area} m²</li>
              <li><strong>Materiais:</strong> {project.technicalDetails.materials.join(', ')}</li>
              {project.technicalDetails.structuralChallenges && <li><strong>Desafio:</strong> {project.technicalDetails.structuralChallenges}</li>}
              {project.technicalDetails.executionTime && <li><strong>Execução:</strong> {project.technicalDetails.executionTime}</li>}
            </ul>
          </aside>
        </div>
      </header>

      {project.content && (
        <section className="mt-12 space-y-10 md:space-y-14">
          {project.content.map((block, i) => {
            if (block.type === 'paragraph') {
              return (
                <div key={i} className="flex justify-center px-6 md:px-12 py-2 md:py-4">
                  <p className="max-w-[720px] w-full text-center md:text-left leading-relaxed md:leading-7 text-zinc-700 text-[15px] md:text-base">
                    {block.text}
                  </p>
                </div>
              );
            }
            if (block.type === 'image') {
              return (
                <div key={i} className={`overflow-hidden ${block.image.span || ''}`}>
                  <ProgressiveImage
                    src={block.image.url}
                    alt={block.image.alt}
                    width={1920}
                    height={1280}
                    sizes="100vw"
                    priority={i < 3}
                    className="object-cover w-full h-auto"
                  />
                  {block.image.caption && (
                    <p className="text-sm text-zinc-500 mt-2 text-center">{block.image.caption}</p>
                  )}
                </div>
              );
            }
            if (block.type === 'image-grid') {
              const gridCols = block.columns === 3 ? 'grid-cols-3' : 'grid-cols-2';
              return (
                <div key={i} className={`grid ${gridCols} gap-4`}>
                  {block.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden">
                      <ProgressiveImage
                        src={img.url}
                        alt={img.alt}
                        width={1200}
                        height={800}
                        sizes="(max-width:768px) 100vw, 50vw"
                        priority={i < 3}
                        className="object-cover w-full h-auto"
                      />
                      {img.caption && (
                        <p className="text-sm text-zinc-500 mt-2 text-center">{img.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })}
        </section>
      )}

      {project.plans && project.plans.length > 0 && (
        <section className="mt-12 bg-zinc-900 text-white p-8 rounded-lg">
          <h3 className="text-xl font-serif mb-2">Pranchas e Plantas Técnicas</h3>
          <p className="text-sm text-zinc-400 mb-6">Plantas baixas, cortes e esquemas volumétricos do projeto.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.plans.map((plan, idx) => (
              <div key={idx} className="bg-zinc-800 p-4 rounded border border-zinc-700">
                <div className="relative aspect-video w-full overflow-hidden rounded">
                  <ProgressiveImage
                    src={plan.url}
                    alt={plan.alt}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                {plan.caption && (
                  <p className="text-sm text-zinc-300 mt-3 font-medium text-center">
                    {plan.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
