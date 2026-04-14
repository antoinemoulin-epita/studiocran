'use client';

import {
  ArrowRight,
  Check,
  Clock,
  RotateCcw,
  Sparkles,
  Target,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

import { GlowBackdrop } from '@/components/sections/glow-backdrop';
import { Reveal } from '@/components/sections/reveal';
import { Testimonials } from '@/components/sections/testimonials';
import { TestBanner } from '@/components/sections/test-banner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Size = 'small' | 'medium' | 'large';
type Need = 'internal-tool' | 'saas-product' | 'automation';
type Urgency = 'asap' | 'few-months' | 'flexible';

interface Answers {
  size: Size | null;
  need: Need | null;
  urgency: Urgency | null;
}

const sizeOptions: { value: Size; label: string; hint: string }[] = [
  { value: 'small', label: '1 à 10 personnes', hint: 'Petite équipe, décisions rapides' },
  { value: 'medium', label: '10 à 50 personnes', hint: 'PME structurée, processus en place' },
  { value: 'large', label: '50 personnes et plus', hint: 'PME ou ETI avec plusieurs équipes' },
];

const needOptions: { value: Need; label: string; hint: string }[] = [
  {
    value: 'internal-tool',
    label: 'Un outil interne pour mes équipes',
    hint: 'Remplacer Excel, centraliser un process, gérer des données',
  },
  {
    value: 'saas-product',
    label: 'Un produit à vendre à mes clients',
    hint: 'SaaS, application, plateforme',
  },
  {
    value: 'automation',
    label: 'Automatiser une tâche répétitive',
    hint: 'Relances, rapports, traitement de données, IA',
  },
];

const urgencyOptions: { value: Urgency; label: string; hint: string }[] = [
  { value: 'asap', label: 'Dès que possible', hint: 'J’ai besoin de livrer vite' },
  { value: 'few-months', label: 'Dans les 1 à 3 mois', hint: 'J’ai un peu de marge' },
  { value: 'flexible', label: 'Pas pressé', hint: 'Je prépare le terrain pour plus tard' },
];

function computeResult(answers: Answers) {
  if (!answers.size || !answers.need || !answers.urgency) return null;

  const baseDuration: Record<Need, [number, number]> = {
    'internal-tool': [6, 10],
    'saas-product': [8, 14],
    automation: [3, 6],
  };
  const sizeMultiplier: Record<Size, number> = {
    small: 1,
    medium: 1.1,
    large: 1.3,
  };

  const [durMin, durMax] = baseDuration[answers.need];
  const mult = sizeMultiplier[answers.size];
  const adjustedMin = Math.round(durMin * mult);
  const adjustedMax = Math.round(durMax * mult);

  const recommendation: Record<Need, string> = {
    'internal-tool':
      "Logiciel interne sur mesure — interface pensée pour vos équipes, connectée à vos outils existants.",
    'saas-product':
      "Produit SaaS clé en main — conception, développement et première version utilisable pour vos clients.",
    automation:
      "Automatisation ciblée — on identifie les bons leviers et on construit les workflows, avec de l'IA si besoin.",
  };

  const scopeNote: Record<Need, string> = {
    'internal-tool':
      "Écoute métier, conception des écrans clés, développement des parcours principaux et intégration avec vos outils existants.",
    'saas-product':
      "Conception produit, développement du premier cœur fonctionnel, déploiement et première itération avec de vrais utilisateurs.",
    automation:
      "Audit des tâches répétitives, construction des workflows, garde-fous humains et mise en production.",
  };

  const urgencyNote: Record<Urgency, string> = {
    asap:
      "Vu votre urgence, on peut démarrer la semaine prochaine et vous livrer une première version utilisable sous 4 semaines, puis itérer.",
    'few-months':
      "Délai confortable : on peut cadrer sérieusement, livrer en sprints courts et vous donner de la visibilité chaque semaine.",
    flexible:
      "On peut profiter du temps disponible pour bien cadrer, tester des parcours avec vos utilisateurs, et livrer un outil qui tient vraiment la route.",
  };

  return {
    durMin: adjustedMin,
    durMax: adjustedMax,
    title: recommendation[answers.need],
    scope: scopeNote[answers.need],
    note: urgencyNote[answers.urgency],
  };
}

const reassurances = [
  {
    title: 'Devis ferme après un appel',
    body: "L'estimation ci-dessus porte sur le délai et le périmètre. Le tarif est calculé à part, après un appel gratuit de 30 minutes où on comprend vraiment votre besoin.",
  },
  {
    title: 'Code et données chez vous',
    body: 'On vous livre le code sur votre dépôt Git. Vos données restent chez vous ou chez l’hébergeur de votre choix.',
  },
  {
    title: 'Interlocuteur unique',
    body: 'Zéro intermédiaire. Vous parlez directement aux personnes qui conçoivent et qui codent votre outil.',
  },
  {
    title: 'Réponse sous 48h, toujours',
    body: "On répond vite parce qu'on est petit. Pas de ticket perdu dans un support à trois niveaux.",
  },
];

const miniFaq = [
  {
    q: 'L’estimation est-elle engageante ?',
    a: 'Non. C’est une indication de délai et de périmètre basée sur des projets similaires. Rien n’est contractuel tant qu’on ne s’est pas parlé.',
  },
  {
    q: 'Pourquoi pas de prix affiché ?',
    a: "Parce que le tarif dépend vraiment du périmètre, du niveau d'intégration et du contexte de votre équipe. Afficher une fourchette serait malhonnête — on préfère un devis ferme après un appel de 30 minutes gratuit.",
  },
  {
    q: 'Comment se passe l’appel de cadrage ?',
    a: 'On échange 30 minutes en visio : vos enjeux, vos outils actuels, ce qui vous freine. À la fin, on sait si on peut vous aider — et si oui, on revient vers vous sous 48h avec un devis ferme et un calendrier.',
  },
];

const StepButton = ({
  active,
  label,
  hint,
  onClick,
}: {
  active: boolean;
  label: string;
  hint: string;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'group rounded-xl border p-4 text-left transition-all duration-300',
      active
        ? 'border-[#BFD5FF]/60 bg-white/10 shadow-[0_0_0_1px] shadow-[#BFD5FF]/10'
        : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/8',
    )}
  >
    <p className="font-display font-semibold text-[#BFD5FF]">{label}</p>
    <p className="mt-1 text-xs text-[#BFD5FF]/50">{hint}</p>
  </button>
);

export const Simulator = () => {
  const [answers, setAnswers] = useState<Answers>({
    size: null,
    need: null,
    urgency: null,
  });

  const result = computeResult(answers);
  const reset = () => setAnswers({ size: null, need: null, urgency: null });

  return (
    <>
      <TestBanner variant="C" name="Simulateur interactif" />

      {/* Hero + Simulator — dark wow */}
      <section className="section-padding pt-0!">
        <div className="relative m-5 overflow-hidden rounded-2xl bg-[#141952] px-4 py-20 text-white md:m-6 md:px-16 md:py-28">
          <GlowBackdrop />

          <div className="relative z-10 mx-auto max-w-4xl space-y-12">
            <div className="space-y-6 text-center">
              <Reveal>
                <Badge
                  variant="secondary"
                  className="mx-auto w-fit border-white/10 bg-white/10 text-[#BFD5FF]"
                >
                  Estimation en 30 secondes
                </Badge>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                  En combien
                  <br />
                  et en <span className="text-[#BFD5FF]">combien de temps</span>
                  <span className="text-[#BFD5FF]">&nbsp;?</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#BFD5FF]/60">
                  Trois questions rapides. On vous donne une estimation
                  honnête, sans inscription, sans engagement. Vous repartez
                  avec une idée claire de ce qu’on peut faire ensemble.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-10">
                {/* Step 1 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2F41FC] text-sm font-semibold text-white ring-2 ring-white/10">
                      1
                    </span>
                    <h2 className="font-display text-xl font-semibold">
                      Quelle est la taille de votre entreprise ?
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {sizeOptions.map((o) => (
                      <StepButton
                        key={o.value}
                        active={answers.size === o.value}
                        label={o.label}
                        hint={o.hint}
                        onClick={() =>
                          setAnswers((a) => ({ ...a, size: o.value }))
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  className={cn(
                    'mt-10 space-y-4 transition-opacity duration-500',
                    answers.size
                      ? 'opacity-100'
                      : 'pointer-events-none opacity-30',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2F41FC] text-sm font-semibold text-white ring-2 ring-white/10">
                      2
                    </span>
                    <h2 className="font-display text-xl font-semibold">
                      De quoi avez-vous besoin ?
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {needOptions.map((o) => (
                      <StepButton
                        key={o.value}
                        active={answers.need === o.value}
                        label={o.label}
                        hint={o.hint}
                        onClick={() =>
                          setAnswers((a) => ({ ...a, need: o.value }))
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  className={cn(
                    'mt-10 space-y-4 transition-opacity duration-500',
                    answers.need
                      ? 'opacity-100'
                      : 'pointer-events-none opacity-30',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2F41FC] text-sm font-semibold text-white ring-2 ring-white/10">
                      3
                    </span>
                    <h2 className="font-display text-xl font-semibold">
                      Quelle urgence ?
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {urgencyOptions.map((o) => (
                      <StepButton
                        key={o.value}
                        active={answers.urgency === o.value}
                        label={o.label}
                        hint={o.hint}
                        onClick={() =>
                          setAnswers((a) => ({ ...a, urgency: o.value }))
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Result */}
                <AnimatePresence>
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.4, 0.25, 1],
                      }}
                      className="relative mt-10 overflow-hidden rounded-2xl border border-[#BFD5FF]/30 bg-gradient-to-br from-[#2F41FC]/40 via-[#202DDB]/30 to-[#141952]/60 p-8 shadow-[0_24px_64px_-24px] shadow-[#2F41FC]/50"
                    >
                      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#4F6CFF] opacity-30 blur-[80px]" />
                      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#7092FF] opacity-25 blur-[80px]" />

                      <div className="relative flex items-start justify-between gap-6">
                        <div className="flex items-center gap-3">
                          <Sparkles className="h-5 w-5 text-[#BFD5FF]" />
                          <p className="text-xs font-semibold uppercase tracking-wider text-[#BFD5FF]">
                            Notre recommandation
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={reset}
                          className="inline-flex items-center gap-1 text-xs text-[#BFD5FF]/60 hover:text-[#BFD5FF]"
                        >
                          <RotateCcw className="h-3 w-3" />
                          Recommencer
                        </button>
                      </div>
                      <h3 className="font-display relative mt-4 text-2xl font-semibold leading-snug">
                        {result.title}
                      </h3>
                      <div className="relative mt-8 grid gap-6 sm:grid-cols-2">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-[#BFD5FF]/70" />
                            <p className="text-xs uppercase tracking-wider text-[#BFD5FF]/60">
                              Délai estimé
                            </p>
                          </div>
                          <p className="font-display mt-2 text-2xl font-semibold md:text-3xl">
                            {result.durMin} à {result.durMax} semaines
                          </p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                          <div className="flex items-center gap-3">
                            <Target className="h-5 w-5 text-[#BFD5FF]/70" />
                            <p className="text-xs uppercase tracking-wider text-[#BFD5FF]/60">
                              Périmètre recommandé
                            </p>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-[#BFD5FF]/90">
                            {result.scope}
                          </p>
                        </div>
                      </div>
                      <p className="relative mt-6 border-t border-white/10 pt-6 text-sm leading-relaxed text-[#BFD5FF]/80">
                        {result.note}
                      </p>
                      <div className="relative mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-wider text-[#BFD5FF]/60">
                          Et le tarif ?
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[#BFD5FF]/90">
                          On l’établit après un appel gratuit de 30 minutes,
                          où on comprend vraiment votre contexte. Chaque
                          projet est différent — on préfère un devis ferme à
                          une grille qui ment.
                        </p>
                      </div>
                      <div className="relative mt-6">
                        <Button
                          size="lg"
                          className="bg-[#BFD5FF] text-[#141952] hover:bg-white"
                          asChild
                        >
                          <Link href="/contact">
                            Réserver l’appel de cadrage
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reassurances */}
      <section className="section-padding bg-muted/30">
        <div className="container space-y-12">
          <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Ce que l’estimation veut dire vraiment
            </h2>
            <p className="text-muted-foreground text-lg">
              Quatre engagements qui tiennent quelle que soit la fourchette.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reassurances.map((r, idx) => (
              <Reveal
                key={r.title}
                delay={idx * 0.08}
                className="border-border bg-card flex flex-col gap-3 rounded-2xl border p-6 transition-all hover:border-primary/40 hover:shadow-[0_16px_48px_-16px] hover:shadow-primary/10"
              >
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {r.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Mini FAQ */}
      <section className="section-padding container">
        <Reveal className="mx-auto max-w-3xl space-y-10">
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight md:text-5xl">
            Les questions qu’on se pose face à un simulateur
          </h2>
          <dl className="space-y-6">
            {miniFaq.map((item) => (
              <div
                key={item.q}
                className="border-border border-b pb-6 last:border-none"
              >
                <dt className="font-display text-lg font-semibold">{item.q}</dt>
                <dd className="text-muted-foreground mt-2 leading-relaxed">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Parler à un humain maintenant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
};
