import type { Metadata } from 'next';
import {
  ArrowRight,
  FileSpreadsheet,
  Layers,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import { GlowBackdrop } from '@/components/sections/glow-backdrop';
import { Reveal } from '@/components/sections/reveal';
import { Testimonials } from '@/components/sections/testimonials';
import { TestBanner } from '@/components/sections/test-banner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Variante A — Parcours par douleur',
  description: 'Test interne : approche pain-first.',
  robots: { index: false, follow: false },
};

const pains = [
  {
    id: 'excel',
    icon: FileSpreadsheet,
    title: 'Votre équipe passe des heures sur Excel chaque semaine',
    symptoms: [
      'Plusieurs fichiers qui ne se parlent pas',
      'Saisies en double entre le tableur et votre logiciel métier',
      'Des erreurs qui coûtent cher à rattraper',
    ],
    answerTitle: 'On remplace Excel par un outil pensé pour votre métier',
    answerBody:
      "On conçoit une interface claire, connectée à vos outils existants, où vos équipes saisissent l'information une seule fois. Fini les copier-coller, fini les fichiers divergents.",
    example:
      'HollyFork — SaaS restauration qui rassemble plan de salle, réservations, plannings et food cost dans une seule interface.',
    cta: 'Voir comment on a fait pour HollyFork',
    ctaHref: '/realisations/hollyfork',
  },
  {
    id: 'prospects',
    icon: Users,
    title: 'Vous perdez des prospects faute de les relancer à temps',
    symptoms: [
      'Les demandes arrivent de plusieurs canaux sans centralisation',
      'Les relances se font quand on y pense, souvent trop tard',
      'Personne ne sait vraiment où en est un prospect',
    ],
    answerTitle: 'On centralise vos leads et on automatise les relances',
    answerBody:
      "Un outil qui rassemble toutes vos demandes entrantes, qui les trie, et qui relance automatiquement par email ou SMS selon vos règles. Votre équipe commerciale se concentre sur ce qu'elle fait de mieux : parler à des prospects chauds.",
    example:
      'Intégration des portails web, email, formulaires, avec relances IA selon la maturité du contact.',
    cta: 'Réserver un appel pour en discuter',
    ctaHref: '/contact',
  },
  {
    id: 'outils',
    icon: Layers,
    title: 'Vous jonglez entre 4 ou 5 logiciels qui ne se parlent pas',
    symptoms: [
      'Chaque outil a sa propre vision de la vérité',
      "L'équipe perd du temps à naviguer d'un onglet à l'autre",
      'Vous pilotez au ressenti, pas aux chiffres',
    ],
    answerTitle: 'On construit l’interface qui unifie tout ça',
    answerBody:
      "On ne remplace pas forcément vos outils — on les connecte. Une interface unique qui agrège les données de vos logiciels existants et vous donne une vision claire, en temps réel, de ce qui compte vraiment.",
    example:
      'Top Loisirs — site + logiciel interne qui remplace Excel, emails et classeurs papier pour piloter plannings, groupes et matériel.',
    cta: 'Voir comment on a fait pour Top Loisirs',
    ctaHref: '/realisations/toploisirs',
  },
  {
    id: 'temps',
    icon: Zap,
    title: 'Vous faites à la main ce qu’une machine pourrait faire',
    symptoms: [
      'Devis et relances rédigés un par un',
      "Données recopiées d'un système à l'autre",
      'Rapports mensuels construits à la souris dans Excel',
    ],
    answerTitle: 'On automatise ce qui peut l’être, avec de l’IA si besoin',
    answerBody:
      "Rédaction assistée, traitement de données, génération de documents, extraction d'informations — l'IA fait ce qu'elle fait bien et votre équipe garde le contrôle sur ce qui compte.",
    example: 'Chaque automatisation est cadrée, testée et peut être désactivée à tout moment.',
    cta: 'Discutons de votre besoin',
    ctaHref: '/contact',
  },
];

const faq = [
  {
    q: 'Combien ça coûte ?',
    a: "Le tarif dépend entièrement du périmètre — il n'y a pas de grille publique. On établit un devis ferme après un premier appel de cadrage gratuit où on comprend vraiment votre besoin. Pas de surprise en cours de route.",
  },
  {
    q: 'Combien de temps pour livrer ?',
    a: 'Entre 6 et 10 semaines pour une première version utilisable en production. On livre en sprints courts, vous voyez l’avancement chaque semaine.',
  },
  {
    q: 'Ça marche avec les outils qu’on utilise déjà ?',
    a: "Oui. On commence par cartographier votre stack actuel et on conçoit l'outil pour qu'il s'y intègre. On ne vous force jamais à tout changer.",
  },
  {
    q: 'Qui possède le code et les données ?',
    a: 'Vous. Le code vous appartient entièrement, il est livré sur votre dépôt Git. Les données restent chez vous ou chez l’hébergeur de votre choix.',
  },
];

export default function VariantA() {
  return (
    <>
      <TestBanner variant="A" name="Parcours par douleur" />

      {/* Hero — dark wow */}
      <section className="section-padding pt-0!">
        <div className="relative m-5 overflow-hidden rounded-2xl bg-[#141952] px-6 py-24 text-white md:m-6 md:px-16 md:py-36">
          <GlowBackdrop />

          <div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center">
            <Reveal>
              <Badge
                variant="secondary"
                className="mx-auto w-fit border-white/10 bg-white/10 text-[#BFD5FF] hover:bg-white/15"
              >
                Pour les fondateurs de PME
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Dans quelle situation
                <br />
                <span className="text-[#BFD5FF]">vous reconnaissez-vous</span> ?
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#BFD5FF]/60">
                Pas besoin de connaître les termes techniques. Dites-nous ce qui
                vous coûte du temps chaque semaine — on vous montre comment on
                le résout.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="grid gap-3 pt-6 sm:grid-cols-2">
                {pains.map((p) => {
                  const Icon = p.icon;
                  return (
                    <a
                      key={p.id}
                      href={`#${p.id}`}
                      className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2F41FC]/20 text-[#BFD5FF] ring-1 ring-white/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-display text-sm font-semibold leading-snug">
                          {p.title}
                        </p>
                        <p className="text-xs font-medium text-[#7092FF]">
                          Voir la réponse
                          <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pain → Solution blocks */}
      {pains.map((pain, idx) => {
        const Icon = pain.icon;
        const isDark = idx % 2 === 1;
        return (
          <section
            key={pain.id}
            id={pain.id}
            className={
              isDark
                ? 'relative overflow-hidden bg-[#141952] text-white'
                : 'bg-background text-foreground'
            }
          >
            {isDark && <GlowBackdrop />}
            <div className="section-padding container relative z-10 grid gap-12 md:grid-cols-2 md:items-start">
              <Reveal className="space-y-6">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    isDark
                      ? 'bg-white/10 text-[#BFD5FF] ring-1 ring-white/10'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {pain.title}
                </h2>
                <ul className="space-y-3">
                  {pain.symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                          isDark ? 'bg-[#7092FF]' : 'bg-primary/60'
                        }`}
                      />
                      <span
                        className={
                          isDark
                            ? 'text-[#BFD5FF]/70'
                            : 'text-muted-foreground'
                        }
                      >
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                delay={0.15}
                className={`rounded-2xl p-8 backdrop-blur-sm ${
                  isDark
                    ? 'border border-white/10 bg-white/5'
                    : 'border border-border bg-card shadow-[0_8px_32px_-12px] shadow-primary/10'
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    isDark ? 'text-[#7092FF]' : 'text-primary'
                  }`}
                >
                  Notre réponse
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold">
                  {pain.answerTitle}
                </h3>
                <p
                  className={`mt-4 leading-relaxed ${
                    isDark ? 'text-[#BFD5FF]/80' : 'text-muted-foreground'
                  }`}
                >
                  {pain.answerBody}
                </p>
                <p
                  className={`mt-6 border-l-2 py-2 pl-4 text-sm italic ${
                    isDark
                      ? 'border-[#7092FF]/40 text-[#BFD5FF]/70'
                      : 'border-primary/30 text-muted-foreground'
                  }`}
                >
                  Exemple : {pain.example}
                </p>
                <Button
                  className={`mt-6 ${
                    isDark
                      ? 'bg-[#2F41FC] text-white hover:bg-[#202DDB]'
                      : ''
                  }`}
                  asChild
                >
                  <Link href={pain.ctaHref}>
                    {pain.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </section>
        );
      })}

      <Testimonials />

      {/* FAQ */}
      <section className="section-padding container">
        <Reveal className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Les questions qu’on nous pose
            </h2>
            <p className="text-muted-foreground">
              Si la vôtre n’est pas ici, posez-la directement par email.
            </p>
          </div>
          <dl className="space-y-6">
            {faq.map((item) => (
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
        </Reveal>
      </section>

      {/* Final CTA — dark wow */}
      <section className="relative overflow-hidden bg-[#141952] text-white">
        <GlowBackdrop />
        <div className="section-padding container relative z-10 space-y-8 text-center">
          <Reveal>
            <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Vous vous reconnaissez dans une de ces situations ?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto max-w-xl text-[#BFD5FF]/70">
              Un appel de 30 minutes suffit pour savoir si on peut vous aider.
              Gratuit et sans engagement.
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
      </section>
    </>
  );
}
