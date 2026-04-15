import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { GlowBackdrop } from '@/components/sections/glow-backdrop';
import { OurProcess } from '@/components/sections/our-process';
import { Reveal } from '@/components/sections/reveal';
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
    'Logiciel sur mesure, automatisation IA, évolution & support — des outils pensés pour les PME et les startups, livrés en quelques semaines.',
};

const services = [
  {
    title: 'Logiciel sur mesure',
    description:
      "Un outil pensé pour votre métier, pas un logiciel générique. Interface intuitive, connecté à ce que vous utilisez déjà. On part de votre process, on construit l'outil qui le remplace.",
    tags: ['Application web', 'Dashboard', 'Outil interne', 'Intégration API'],
    image: '/dashboard/01.jpg',
    example: {
      label: 'Exemple concret',
      text: 'Top Loisirs — site refait et logiciel interne qui remplace Excel, emails et classeurs papier.',
      href: '/realisations/toploisirs',
      cta: 'Voir le cas',
    },
  },
  {
    title: 'Automatisation IA',
    description:
      "On automatise ce que vous faites à la main. Relances clients, traitement de données, rédaction — moins d'erreurs, plus de temps pour votre vrai métier.",
    tags: [
      'IA générative',
      'Relances auto',
      'Traitement de données',
      'Workflows',
    ],
    image: '/dashboard/02.jpg',
    example: {
      label: 'Exemple concret',
      text: 'Relances prospects automatiques, génération de rapports, extraction de données — gardés sous supervision humaine.',
      href: '/contact',
      cta: 'En parler',
    },
  },
  {
    title: 'Évolution & support',
    description:
      "Votre outil grandit avec votre entreprise. Mises à jour, nouvelles fonctionnalités, automatisations supplémentaires. On reste à vos côtés après la livraison.",
    tags: [
      'Maintenance',
      'Nouvelles features',
      'Support sous 48h',
      'Monitoring',
    ],
    image: '/dashboard/03.jpg',
    example: {
      label: 'Engagement concret',
      text: 'Un interlocuteur direct, une réponse sous 48h garantie, et un outil qui reste aligné avec votre activité.',
      href: '/contact',
      cta: 'Discutons-en',
    },
  },
];

const proofs = [
  {
    name: 'HollyFork',
    industry: 'SaaS restauration',
    title: 'Un produit complet livré en quelques semaines',
    href: '/realisations/hollyfork',
    image: '/hollyfork/dashboard.png',
  },
  {
    name: 'Top Loisirs',
    industry: 'Loisirs outdoor — depuis 1992',
    title: 'Site refait + logiciel interne sur mesure',
    href: '/realisations/toploisirs',
    image: '/toploisirs/image-01.png',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-padding container space-y-18 md:space-y-20 lg:space-y-26">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              Studio Cran — services
            </Badge>
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Des outils pensés pour votre métier
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Trois offres claires, adaptées aux PME et aux startups. Pas de
              jargon, pas de surprise sur la facture. On construit ce dont
              vous avez besoin — rien de plus, rien de moins.
            </p>
            <div>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Parlons de votre projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {services.map((service, idx) => (
            <Reveal
              key={service.title}
              delay={idx * 0.1}
              as="article"
              className="group"
            >
              <Card className="border-none bg-transparent">
                <div className="relative h-[335px] w-full overflow-hidden lg:h-[450px]">
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
                  <div className="border-border mt-2 border-t pt-4">
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider">
                      {service.example.label}
                    </p>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {service.example.text}
                    </p>
                    <Link
                      href={service.example.href}
                      className="text-primary mt-3 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                    >
                      {service.example.cta}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mini preuve */}
      <section className="section-padding bg-muted/30">
        <div className="container space-y-12">
          <Reveal className="max-w-2xl space-y-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Deux projets, deux contextes différents
            </h2>
            <p className="text-muted-foreground text-lg">
              Une startup SaaS en phase de lancement, une PME de 30 ans qui
              refait ses outils. Même méthode, résultats comparables.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {proofs.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 0.1}>
                <Link
                  href={p.href}
                  className="border-border bg-card group block overflow-hidden rounded-2xl border transition-all hover:border-primary/40 hover:shadow-[0_24px_64px_-24px] hover:shadow-primary/20"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141952]/60 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-2 p-7">
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                      <span className="font-semibold">{p.name}</span>
                      <span>·</span>
                      <span>{p.industry}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/realisations">
                Voir toutes les réalisations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <OurProcess />

      {/* Final CTA — dark wow */}
      <section className="section-padding pt-0!">
        <div className="relative m-5 overflow-hidden rounded-2xl bg-[#141952] px-6 py-24 text-white md:m-6 md:px-16 md:py-32">
          <GlowBackdrop />
          <div className="relative z-10 mx-auto max-w-2xl space-y-8 text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Un projet en tête ?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[#BFD5FF]/70 text-lg">
                Un appel gratuit de 30 minutes suffit pour savoir si on peut
                vous aider. Sans engagement, sans jargon.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#2F41FC] text-white hover:bg-[#202DDB]"
                  asChild
                >
                  <Link href="/contact">
                    Réserver un appel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#4F6CFF]/30 text-[#BFD5FF] hover:bg-[#BFD5FF]/10"
                  asChild
                >
                  <Link href="/contact">Envoyer un brief</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
