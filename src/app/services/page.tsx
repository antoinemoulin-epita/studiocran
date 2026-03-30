import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { OurProcess } from '@/components/sections/our-process';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Logiciel sur mesure, automatisation IA, évolution & support — découvrez nos offres pour les PME.',
};

const services = [
  {
    title: 'Logiciel sur mesure',
    description:
      "Un outil pensé pour votre métier, pas un logiciel générique. Interface intuitive, connecté à ce que vous utilisez déjà. On part de votre process, on construit l'outil qui le remplace.",
    price: 'À partir de 5 000 €',
    tags: ['Application web', 'Dashboard', 'Outil interne', 'Intégration API'],
    image: '/images/projects/project-1/1.webp',
  },
  {
    title: 'Automatisation IA',
    description:
      "On automatise ce que vous faites à la main. Relances clients, traitement de données, rédaction — moins d'erreurs, plus de temps pour votre vrai métier.",
    price: 'Inclus ou en complément',
    tags: ['IA générative', 'Relances auto', 'Traitement de données', 'Chatbot'],
    image: '/images/projects/project-2/1.webp',
  },
  {
    title: 'Évolution & support',
    description:
      "Votre outil grandit avec votre entreprise. Mises à jour, nouvelles fonctionnalités, automatisations supplémentaires. On reste à vos côtés après la livraison.",
    price: 'Abonnement mensuel',
    tags: ['Maintenance', 'Nouvelles features', 'Support réactif', 'Monitoring'],
    image: '/images/projects/project-3/1.webp',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-padding container space-y-18 md:space-y-20 lg:space-y-26">
        <div className="grid gap-10 md:grid-cols-2">
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Des outils pensés pour votre métier
          </h1>
          <p className="text-muted-foreground text-lg">
            Trois offres claires, adaptées aux PME. Pas de jargon, pas de
            surprise sur la facture. On construit ce dont vous avez besoin,
            rien de plus.
          </p>
        </div>

        {/* Service cards with images — like Hive service-card */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {services.map((service) => (
            <Card key={service.title} className="border-none bg-transparent">
              <div className="group relative h-[335px] w-full overflow-hidden lg:h-[450px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/3" />
              </div>
              <CardHeader className="px-0">
                <CardTitle className="font-display text-2xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-0">
                <CardDescription className="max-w-lg text-base leading-relaxed">
                  {service.description}
                </CardDescription>
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
                <p className="text-sm font-semibold">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <OurProcess />

      {/* CTA */}
      <section className="section-padding container space-y-10">
        <h2 className="font-display text-4xl font-semibold tracking-tight">
          Un projet en tête ?
        </h2>
        <Button variant="outline" size="lg" className="gap-4 ps-1 pe-6" asChild>
          <Link href="/contact">
            <div className="flex items-center gap-1">
              <Image
                src="/people/antoinemoulin.png"
                alt="Antoine Moulin"
                width={38}
                height={38}
                className="rounded-full object-cover"
              />
              <Image
                src="/people/antoinemoulin.png"
                alt="David Mvoula"
                width={38}
                height={38}
                className="rounded-full object-cover"
              />
            </div>
            <span>Discutons ensemble</span>
          </Link>
        </Button>
      </section>
    </>
  );
}
