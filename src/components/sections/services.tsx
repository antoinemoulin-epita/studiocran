'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Logiciel sur mesure',
    description:
      "Un outil pensé pour votre métier, pas un logiciel générique. Interface intuitive, connecté à ce que vous utilisez déjà. On part de votre process, on construit l'outil qui le remplace.",
    tags: ['Application web', 'Dashboard', 'Outil interne', 'Intégration API'],
    image: { src: '/dashboard/01.jpg', alt: 'Interface logiciel sur mesure' },
  },
  {
    title: 'Automatisation IA',
    description:
      "On automatise ce que vous faites à la main. Relances clients, traitement de données, rédaction — moins d'erreurs, plus de temps pour votre vrai métier.",
    tags: ['IA générative', 'Relances auto', 'Traitement de données', 'Chatbot'],
    image: { src: '/dashboard/02.jpg', alt: 'Interface automatisation IA' },
  },
  {
    title: 'Évolution & support',
    description:
      "Votre outil grandit avec votre entreprise. Mises à jour, nouvelles fonctionnalités, automatisations supplémentaires. On reste à vos côtés après la livraison.",
    tags: ['Maintenance', 'Nouvelles features', 'Support réactif', 'Monitoring'],
    image: { src: '/dashboard/03.jpg', alt: 'Suivi et évolution continue' },
  },
];

export const Services = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();
  const scrollTo = (index: number) => api?.scrollTo(index);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section id="services">
      <Carousel
        setApi={setApi}
        opts={{ align: 'center', loop: true }}
        className="section-padding w-full select-none"
      >
        <CarouselContent className="relative ml-0! cursor-grab">
          {services.map((service, index) => {
            const nextIndex = (current + 1) % services.length;
            const isReversed = index === nextIndex;

            return (
              <CarouselItem
                key={index}
                className="3xl:basis-[80%] 5xl:basis-[65%] 4xl:basis-[78%] justify-start pl-0! 2xl:basis-[86%]"
              >
                <div
                  className={cn(
                    'container flex flex-col gap-16 transition-all duration-300',
                    isReversed ? 'md:flex-row-reverse' : 'md:flex-row',
                  )}
                >
                  {/* Text Content */}
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="space-y-8 sm:max-w-md">
                      <h2 className="font-display text-4xl leading-tight font-semibold">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-square h-[335px] flex-1 overflow-hidden md:h-[500px] 2xl:h-[608px]">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 608px"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation */}
        <div className="container relative flex translate-y-6 items-center gap-12 md:-translate-y-full">
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full"
              onClick={scrollPrev}
              aria-label="Compétence précédente"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full"
              onClick={scrollNext}
              aria-label="Compétence suivante"
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                aria-label={`Aller à la compétence ${idx + 1}`}
                className={cn(
                  'relative cursor-pointer after:absolute after:-inset-2 after:content-[""]',
                  'h-[6px] w-8 rounded-full transition-all',
                  idx === current
                    ? 'bg-foreground'
                    : 'bg-muted hover:bg-muted-foreground/50',
                )}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
};
