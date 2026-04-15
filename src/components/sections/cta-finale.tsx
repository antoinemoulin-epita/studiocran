import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { GlowBackdrop } from '@/components/sections/glow-backdrop';
import { Reveal } from '@/components/sections/reveal';
import { Button } from '@/components/ui/button';

export function CtaFinale() {
  return (
    <section className="section-padding pt-0!">
      <div className="relative m-5 overflow-hidden rounded-2xl bg-[#141952] px-6 py-24 text-white md:m-6 md:px-16 md:py-32">
        <GlowBackdrop />
        <div className="relative z-10 mx-auto max-w-2xl space-y-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Discutons de votre atelier
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-[#BFD5FF]/70">
              Un appel de 30 minutes, gratuit, sans engagement. On écoute votre
              fonctionnement actuel et on vous dit concrètement ce qu&apos;on
              peut améliorer — et combien ça coûte.
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
                <Link href="/contact">Envoyer un message</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
