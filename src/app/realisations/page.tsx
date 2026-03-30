import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAllProjects } from '@/lib/projects';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Nos réalisations',
  description:
    'Découvrez les outils sur mesure que Studio Cran a conçus pour des PME françaises.',
};

const categories = [
  { value: 'all', label: 'Tout' },
  { value: 'logiciel-sur-mesure', label: 'Logiciel sur mesure' },
  { value: 'automatisation-ia', label: 'Automatisation IA' },
  { value: 'evolution-support', label: 'Évolution & support' },
];

export default async function RealisationsPage() {
  const allProjects = await getAllProjects();

  return (
    <div className="hero-padding container flex flex-col gap-10">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        Réalisations
      </h1>

      <Tabs defaultValue="all" className="w-full">
        <ScrollArea className="pb-2" orientation="horizontal">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>

        {categories.map((category) => {
          const filteredProjects =
            category.value === 'all'
              ? allProjects
              : allProjects.filter(
                  (project) => project.category === category.value,
                );

          return (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid gap-x-6 gap-y-12 pt-12 lg:min-h-[966px] lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/realisations/${project.slug}`}
                    className={cn('group flex flex-col items-start gap-4')}
                  >
                    <div className="relative h-[290px] w-full overflow-hidden">
                      <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        fill
                        className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/3" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg">{project.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        {project.industry}
                      </p>
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
