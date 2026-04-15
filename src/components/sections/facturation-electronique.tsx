import { ArrowRight, CalendarClock } from 'lucide-react';
import Link from 'next/link';

import { Reveal } from '@/components/sections/reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function FacturationElectronique() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-[#141952] px-8 py-16 text-white md:px-16 md:py-24">
          {/* Subtle gradient blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-[30%] -right-[10%] h-[60%] w-[50%] rounded-full bg-[#202DDB] opacity-20 blur-[120px]" />
            <div className="absolute -bottom-[20%] -left-[10%] h-[50%] w-[40%] rounded-full bg-[#2F41FC] opacity-15 blur-[100px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl space-y-8 text-center">
            <Reveal>
              <Badge
                variant="secondary"
                className="mx-auto w-fit border-white/10 bg-white/10 text-[#BFD5FF] hover:bg-white/15"
              >
                <CalendarClock className="mr-1.5 h-3.5 w-3.5" />
                Septembre 2026
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                La facturation électronique arrive.
                <br />
                <span className="text-[#BFD5FF]">Vous êtes prêt ?</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#BFD5FF]/60">
                À partir de septembre 2026, toutes les entreprises devront
                recevoir leurs factures au format électronique. En 2027, vous
                devrez aussi les émettre. Le PDF par email ne sera plus
                conforme.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mx-auto max-w-2xl text-[#BFD5FF]/80">
                L&apos;outil qu&apos;on construit pour vous intègre la
                facturation électronique dès le départ — pas besoin de changer
                de système dans 18 mois.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <Button
                size="lg"
                className="bg-[#2F41FC] text-white hover:bg-[#202DDB]"
                asChild
              >
                <Link href="/contact">
                  En parler
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
