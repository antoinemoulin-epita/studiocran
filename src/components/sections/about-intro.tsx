import { ArrowRight, Code, Cpu, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const founders = [
  {
    name: 'Antoine Moulin',
    role: 'Front / Design / Comm',
    image: '/people/antoinemoulin.png',
  },
  {
    name: 'David Mvoula',
    role: 'Back / Archi / IA',
    image: '/people/davidmvoula.jpeg',
  },
];

const values = [
  {
    icon: Zap,
    title: 'Réactivité',
    description:
      'Petite équipe, zéro bureaucratie. On avance vite et on répond dans la journée.',
  },
  {
    icon: Code,
    title: 'Qualité',
    description:
      'Du code propre, des interfaces soignées. On livre un outil dont vous êtes fier.',
  },
  {
    icon: Cpu,
    title: 'Sur mesure',
    description:
      'Chaque projet est unique. On construit pour votre métier, pas un template générique.',
  },
];

export const AboutIntro = () => {
  return (
    <section id="studio" className="section-padding">
      <div className="container space-y-20">
        {/* Hero block — dark, impactful */}
        <div className="relative overflow-hidden rounded-2xl bg-[#141952] px-8 py-16 text-white md:px-16 md:py-24">
          {/* Subtle gradient */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-[30%] -right-[10%] h-[60%] w-[50%] rounded-full bg-[#202DDB] opacity-20 blur-[120px]" />
            <div className="absolute -bottom-[20%] -left-[10%] h-[50%] w-[40%] rounded-full bg-[#2F41FC] opacity-15 blur-[100px]" />
          </div>

          <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Deux profils.
                <br />
                Zéro intermédiaire.
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-[#99B9FF]/70">
                Studio Cran, c&apos;est deux développeurs qui construisent des
                outils sur mesure pour les ateliers d&apos;enseigne et de
                signalétique.
              </p>
            </div>

            {/* Founders */}
            <div className="flex flex-col gap-6">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {founder.name}
                    </p>
                    <p className="text-sm text-[#7092FF]">{founder.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative z-10 mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
            {[
              { value: '2', label: 'Fondateurs à temps plein' },
              { value: '0', label: 'Intermédiaire' },
              { value: '100%', label: 'Code sur mesure' },
              { value: '< 48h', label: 'Délai de réponse' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-[#BFD5FF]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[#99B9FF]/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack + CTA */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">
              On connaît le métier d&apos;enseigniste
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Du devis technique à la pose, en passant par le BAT et
              l&apos;atelier — on sait où l&apos;info se perd et où les heures
              partent.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Button size="lg" asChild>
              <Link href="/contact">
                Discutons de votre atelier
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
