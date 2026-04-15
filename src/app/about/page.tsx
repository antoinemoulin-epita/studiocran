import type { Metadata } from 'next';
import { ArrowRight, ExternalLink, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Process } from '@/components/sections/process';
import { Reveal } from '@/components/sections/reveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Le Studio',
  description:
    'Studio Cran, c\u2019est deux développeurs qui construisent des outils sur mesure pour les ateliers d\u2019enseigne et de signalétique.',
};

const founders = [
  {
    name: 'Antoine Moulin',
    role: 'Front-end, Design & Relation client',
    bio: 'Antoine conçoit des interfaces claires, que votre chef d\u2019atelier et vos poseurs adoptent dès le premier jour. Il gère la relation client de A à Z et s\u2019assure que l\u2019outil colle à votre réalité.',
    image: {
      src: '/people/antoinemoulin.png',
      alt: 'Antoine Moulin',
      className: '',
    },
    linkedin: 'https://linkedin.com/in/antoinemoulin',
  },
  {
    name: 'David Mvoula',
    role: 'Back-end, Architecture & IA',
    bio: 'David construit ce qu\u2019on ne voit pas mais qui fait tout fonctionner : bases de données, connexions entre vos outils, automatisations. Il s\u2019assure que votre outil est solide, rapide et évolutif.',
    image: {
      src: '/people/davidmvoula.jpeg',
      alt: 'David Mvoula',
      className: '',
    },
    linkedin: 'https://linkedin.com/in/davidmvoula',
  },
];

const values = [
  {
    title: 'Simplicité',
    description:
      'Votre chef d\u2019atelier doit pouvoir s\u2019en servir. Si c\u2019est compliqué, c\u2019est qu\u2019on a mal fait notre travail.',
  },
  {
    title: 'Vos données vous appartiennent',
    description:
      'Export à tout moment. CSV, PDF, ce que vous voulez. On ne vous enferme dans rien.',
  },
  {
    title: 'Zéro intermédiaire',
    description:
      'Vous parlez directement aux gens qui codent votre outil. Pas de chef de projet, pas de couche en plus.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-padding space-y-18 md:space-y-20 lg:space-y-26">
        <div className="container text-center">
          <h1 className="font-display mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            On comprend votre métier.{' '}
            <span className="text-[#4F6CFF]">On construit votre outil.</span>
          </h1>
        </div>

        <div className="bigger-container">
          <div className="relative h-[335px] w-full overflow-hidden md:h-[450px] lg:h-[600px]">
            <Image
              src="/images/about/hero.webp"
              alt="Studio Cran"
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="section-padding container grid gap-10 md:grid-cols-2">
        <h2 className="font-display text-4xl font-semibold tracking-tight">
          Pourquoi les enseignistes
        </h2>
        <div className="text-muted-foreground space-y-8 text-lg md:space-y-10">
          <p>
            La plupart des ateliers d&apos;enseigne fonctionnent avec Excel, des
            pochettes papier et des coups de fil. Les logiciels du marché sont
            soit trop génériques, soit trop lourds, soit pas adaptés à un
            atelier de 8 à 15 personnes.
          </p>
          <p>
            On a passé des heures à étudier le quotidien des enseignistes — du
            devis à la pose, en passant par le BAT, l&apos;atelier et la
            facturation. On sait où l&apos;info se perd, où les erreurs coûtent
            cher, et où les heures partent sans que personne ne s&apos;en rende
            compte.
          </p>
          <p>
            Studio Cran construit des outils sur mesure pour les ateliers
            d&apos;enseigne et de signalétique. Pas un ERP à 30 000 €. Pas un
            CRM générique. Un outil qui épouse votre façon de travailler, livré
            en quelques semaines, et qui évolue avec vous.
          </p>
        </div>
      </section>

      {/* Fondateurs */}
      <section className="section-padding container space-y-16 md:space-y-18">
        <h2 className="font-display text-4xl font-semibold tracking-tight">
          Les fondateurs
        </h2>

        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
          {founders.map((founder) => (
            <Reveal key={founder.name} as="div" className="group flex flex-col gap-5">
              <div className="relative h-[335px] w-full overflow-hidden sm:h-[392px] lg:h-[425px]">
                <Image
                  src={founder.image.src}
                  alt={founder.image.alt}
                  fill
                  className={cn(
                    'object-cover grayscale transition-all duration-500 group-hover:grayscale-0',
                    founder.image.className,
                  )}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {founder.name}
                  </h3>
                  <p className="text-muted-foreground">{founder.role}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {founder.bio}
                </p>
                <Link
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-underline inline-flex items-center gap-1.5 text-sm font-medium"
                >
                  <Linkedin className="h-4 w-4" />
                  Profil LinkedIn
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nos valeurs */}
      <Process title="Ce qu'on défend" steps={values} />

      {/* Notre engagement */}
      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-[#141952] px-8 py-16 text-white md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-[30%] -right-[10%] h-[60%] w-[50%] rounded-full bg-[#202DDB] opacity-20 blur-[120px]" />
              <div className="absolute -bottom-[20%] -left-[10%] h-[50%] w-[40%] rounded-full bg-[#2F41FC] opacity-15 blur-[100px]" />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl space-y-8 text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Notre engagement
              </h2>
              <p className="text-lg leading-relaxed text-[#99B9FF]/80">
                Construire pour votre atelier un outil qui vous fait gagner du
                temps dès la première semaine. Un outil simple, qui grandit avec
                vous, et qui vous appartient. Pas plus, pas moins.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-[#2F41FC] text-white hover:bg-[#202DDB]"
              >
                <Link href="/contact">
                  Discutons de votre atelier
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding container space-y-10">
        <h2 className="font-display text-4xl font-semibold tracking-tight">
          Envie d&apos;en savoir plus ?
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
            </div>
            <span>Discutons ensemble</span>
          </Link>
        </Button>
      </section>
    </>
  );
}
