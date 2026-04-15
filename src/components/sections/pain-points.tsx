'use client';

import {
  AlertTriangle,
  Calculator,
  FileSpreadsheet,
  Phone,
} from 'lucide-react';
import { motion } from 'motion/react';

import { GlowBackdrop } from '@/components/sections/glow-backdrop';
import { Reveal } from '@/components/sections/reveal';

const pains = [
  {
    icon: FileSpreadsheet,
    title: 'Vos devis prennent des heures et 30% ne sont jamais relancés',
    verbatim:
      '« Le devis, c\u2019est 2 heures de boulot et le mec rappelle même pas. »',
    details:
      '5 à 15 devis par semaine, calcul matières à la main, prix fournisseurs pas à jour dans le tableur, taux de conversion de 20-35%.',
    stat: '~22 800 €/an',
    statLabel: 'perdus sur des devis jamais signés',
  },
  {
    icon: AlertTriangle,
    title: 'L\u2019info se perd entre le bureau et l\u2019atelier',
    verbatim:
      '« J\u2019ai commandé du RAL 7016 et il fallait du 7021. 800 balles à la poubelle. »',
    details:
      'Pochette papier + brief oral = ressaisie manuelle. Erreurs de RAL, cotes inversées, postes oubliés.',
    stat: '800-3 000 €',
    statLabel: 'par erreur de fabrication',
  },
  {
    icon: Phone,
    title: 'Vous passez votre lundi à rappeler vos poseurs',
    verbatim:
      '« J\u2019ai passé mon lundi à rappeler mes poseurs pour savoir où ils en étaient. »',
    details:
      'Planning dans la tête du chef d\u2019atelier. Poseurs briefés par SMS. Pas de feuille de route, pas de photos avant/après.',
    stat: '1 jour/sem.',
    statLabel: 'perdu en coordination téléphonique',
  },
  {
    icon: Calculator,
    title: 'Vous ne savez jamais si un chantier a été rentable',
    verbatim:
      '« On sait jamais vraiment si on a gagné de l\u2019argent sur un chantier. »',
    details:
      'Temps de fabrication jamais pointés par affaire. Temps de pose réel inconnu. Aucune comparaison prévu vs réel.',
    stat: '0%',
    statLabel: 'de visibilité sur la marge réelle',
  },
];

export function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-[#141952] text-white">
      <GlowBackdrop />

      <div className="section-padding container relative z-10 space-y-14">
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            On connaît vos problèmes
          </h2>
          <p className="text-lg text-[#BFD5FF]/60">
            Ce sont les mêmes dans tous les ateliers de 8 à 15 personnes.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {pains.map((pain, idx) => {
            const Icon = pain.icon;
            return (
              <Reveal key={pain.title} delay={idx * 0.1} as="article">
                <motion.div
                  className="group flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-[#2F41FC]/20 text-[#BFD5FF] ring-1 ring-white/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <p className="font-display text-2xl font-semibold text-[#BFD5FF]">
                        {pain.stat}
                      </p>
                      <p className="max-w-[140px] text-xs text-[#99B9FF]/50">
                        {pain.statLabel}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold leading-snug">
                    {pain.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#BFD5FF]/60">
                    {pain.details}
                  </p>

                  <blockquote className="mt-auto border-l-2 border-[#7092FF]/40 py-2 pl-4 text-sm italic text-[#BFD5FF]/70">
                    {pain.verbatim}
                  </blockquote>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
