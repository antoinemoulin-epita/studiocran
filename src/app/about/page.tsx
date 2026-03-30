import type { Metadata } from 'next';
import { ExternalLink, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Process } from '@/components/sections/process';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Le Studio',
  description:
    'Découvrez qui se cache derrière Studio Cran — deux étudiants d\'EPITA qui construisent des outils sur mesure pour les PME.',
};

const founders = [
  {
    name: 'Antoine Moulin',
    role: 'Front-end, Design & Communication',
    bio: 'Passionné par les interfaces qui ont du sens. Antoine conçoit des outils que vos équipes adoptent dès le premier jour — clairs, rapides, agréables à utiliser. Il gère aussi la relation client de A à Z.',
    image: { src: '/people/antoinemoulin.png', alt: 'Antoine Moulin', className: '' },
    linkedin: 'https://linkedin.com/in/antoinemoulin',
  },
  {
    name: 'David Mvoula',
    role: 'Back-end, Architecture & IA',
    bio: 'David construit ce qu\'on ne voit pas mais qui fait tout fonctionner : bases de données, API, intégrations, automatisations IA. Il s\'assure que votre outil est solide, rapide et évolutif.',
    image: { src: '/people/antoinemoulin.png', alt: 'David Mvoula', className: '' },
    linkedin: 'https://linkedin.com/in/davidmvoula',
  },
];

const values = [
  {
    title: 'Clarté',
    description:
      'On vous explique tout. Pas de jargon, pas de zone grise. Vous savez exactement ce qu\'on fait, pourquoi, et combien ça coûte.',
  },
  {
    title: 'Efficacité',
    description:
      'On ne fait pas de réunions inutiles. On avance vite, on livre en semaines — pas en mois.',
  },
  {
    title: 'Responsabilité',
    description:
      'On ne disparaît pas après la livraison. Votre outil évolue, et on reste là pour l\'accompagner.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-padding space-y-18 md:space-y-20 lg:space-y-26">
        <div className="container text-center">
          <h1 className="font-display mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            On pense que les PME méritent des outils{' '}
            <span className="text-[#3D92BA]">aussi bons</span> que ceux des
            startups tech.
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
          Notre histoire
        </h2>
        <div className="text-muted-foreground space-y-8 text-lg md:space-y-10">
          <p>
            On est partis d&apos;un constat simple : beaucoup de PME
            fonctionnent encore avec des tableurs bricolés, des logiciels
            génériques qui ne collent pas à leur métier, ou des process manuels
            qui font perdre un temps fou.
          </p>
          <p>
            Pendant ce temps, les startups tech ont des outils sur mesure,
            connectés, automatisés. On s&apos;est dit : pourquoi les PME
            n&apos;auraient pas droit à la même chose ?
          </p>
          <p>
            Studio Cran est né de cette idée. On conçoit des logiciels sur
            mesure pour les PME françaises — connectés à leurs outils existants,
            automatisés par l&apos;IA, livrés en quelques semaines. Pas une
            agence avec 50 personnes et des mois de délai. Juste nous deux, qui
            faisons le travail.
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
            <div key={founder.name} className="group flex flex-col gap-5">
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
            </div>
          ))}
        </div>
      </section>

      {/* Nos valeurs */}
      <Process title="Ce qu'on défend" steps={values} />

      {/* Notre mission */}
      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-[#0B1A24] px-8 py-16 text-white md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-[30%] -right-[10%] h-[60%] w-[50%] rounded-full bg-[#255F7F] opacity-20 blur-[120px]" />
              <div className="absolute -bottom-[20%] -left-[10%] h-[50%] w-[40%] rounded-full bg-[#2C769D] opacity-15 blur-[100px]" />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl space-y-8 text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Notre mission
              </h2>
              <p className="text-lg leading-relaxed text-[#98C9E1]/80">
                Donner aux PME françaises les outils que seules les startups
                tech pouvaient s&apos;offrir. Un logiciel qui épouse votre
                métier, qui automatise ce qui peut l&apos;être, et qui évolue
                avec vous. Pas plus, pas moins.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-[#3D92BA] text-white hover:bg-[#2C769D]"
              >
                <Link href="/contact">Discutons de votre projet</Link>
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
        <Button
          variant="outline"
          size="lg"
          className="gap-4 ps-1 pe-6"
          asChild
        >
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
