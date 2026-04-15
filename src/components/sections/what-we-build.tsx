'use client';

import {
  ArrowRight,
  ClipboardList,
  FileCheck,
  FileText,
  LayoutGrid,
  MapPin,
  Receipt,
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { Reveal } from '@/components/sections/reveal';
import { Button } from '@/components/ui/button';

const bricks = [
  {
    icon: FileText,
    title: 'Devis technique',
    description:
      'Calcul matières automatique — surfaces Dibond, mètres LED, heures fab + pose. Prix à jour, marge visible, relance automatique.',
    accent: 'from-[#4F6CFF] to-[#7092FF]',
  },
  {
    icon: FileCheck,
    title: 'Suivi BAT',
    description:
      'Photomontage, historique des versions, validation client en ligne. Plus de mails qui se perdent.',
    accent: 'from-[#7092FF] to-[#99B9FF]',
  },
  {
    icon: ClipboardList,
    title: 'Ordre de fabrication',
    description:
      'Généré depuis le devis. Les bonnes cotes, les bons RAL, les bonnes quantités arrivent à l\u2019atelier sans ressaisie.',
    accent: 'from-[#2F41FC] to-[#4F6CFF]',
  },
  {
    icon: LayoutGrid,
    title: 'Planning production et pose',
    description:
      'Un planning visuel, accessible à toute l\u2019équipe. Si le chef d\u2019atelier est absent, tout le monde sait où en sont les dossiers.',
    accent: 'from-[#202DDB] to-[#4F6CFF]',
  },
  {
    icon: MapPin,
    title: 'Feuille de route poseur',
    description:
      'Adresse, plan, cotes, documents, photos avant/après. Vos poseurs ont tout sur leur téléphone.',
    accent: 'from-[#4F6CFF] to-[#2F41FC]',
  },
  {
    icon: Receipt,
    title: 'Facturation et suivi paiement',
    description:
      'Factures générées depuis le dossier, relances automatiques, comparaison prévu vs réel. Compatible facturation électronique 2026.',
    accent: 'from-[#7092FF] to-[#202DDB]',
  },
];

export function WhatWeBuild() {
  return (
    <section className="section-padding">
      <div className="container space-y-14">
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Ce qu&apos;on construit pour vous
          </h2>
          <p className="text-muted-foreground text-lg">
            Pas un logiciel générique. Des briques sur mesure, pensées pour
            votre métier d&apos;enseigniste.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bricks.map((brick, idx) => {
            const Icon = brick.icon;
            return (
              <Reveal key={brick.title} delay={idx * 0.08} as="article">
                <motion.div
                  className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient glow on hover */}
                  <div
                    className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${brick.accent} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20`}
                  />

                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-all group-hover:bg-primary/15 group-hover:shadow-[0_0_24px_-4px] group-hover:shadow-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-display relative text-lg font-semibold">
                    {brick.title}
                  </h3>

                  <p className="text-muted-foreground relative text-sm leading-relaxed">
                    {brick.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto max-w-xl space-y-6 text-center">
          <p className="text-muted-foreground text-sm italic">
            Chaque atelier est différent. On choisit ensemble les briques qui
            vous font gagner du temps dès la première semaine.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Discutons de votre atelier
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
