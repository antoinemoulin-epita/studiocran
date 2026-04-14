import type { Metadata } from 'next';
import {
  ArrowRight,
  Building2,
  Calendar,
  Check,
  MessageSquare,
  Rocket,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { GlowBackdrop } from '@/components/sections/glow-backdrop';
import { OurProcess } from '@/components/sections/our-process';
import { Reveal } from '@/components/sections/reveal';
import { Testimonials } from '@/components/sections/testimonials';
import { TestBanner } from '@/components/sections/test-banner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Variante B — Déroulé linéaire',
  description: 'Test interne : approche story-driven funnel.',
  robots: { index: false, follow: false },
};

const archetypes = [
  {
    icon: Building2,
    title: 'Vous dirigez une PME qui tourne mais dont les outils datent',
    body: "Votre activité est rentable, vos équipes connaissent leur métier, mais vous sentez que vous perdez du temps et des prospects à cause d'un empilement d'outils qui ne communiquent pas. Vous voulez de l'ordre, pas une révolution.",
  },
  {
    icon: Rocket,
    title: 'Vous lancez une startup et vous devez montrer un vrai produit',
    body: "Vous avez la vision, le marché, peut-être déjà des premiers clients. Mais vous n'avez pas l'équipe tech pour transformer vos maquettes en produit. Vous avez besoin d'un partenaire qui comprend le produit et sait livrer vite.",
  },
  {
    icon: Wrench,
    title: 'Vous voulez industrialiser un process que vous faites à la main',
    body: 'Une tâche récurrente vous coûte plusieurs heures par semaine, et vous savez qu’une partie pourrait être automatisée. Vous cherchez quelqu’un qui comprenne le métier avant de parler de technologie.',
  },
];

const levers = [
  {
    title: 'Logiciel sur mesure',
    description:
      "On conçoit et développe l'outil métier que vos équipes utilisent tous les jours. Interface pensée pour votre process, connexions avec vos outils existants, un seul endroit pour gérer ce qui compte.",
    result:
      'Top Loisirs remplace Excel, emails et classeurs papier par une interface unique pour plannings, groupes et matériel.',
    linkLabel: 'Voir le cas Top Loisirs',
    linkHref: '/realisations/toploisirs',
  },
  {
    title: 'Automatisation & IA',
    description:
      "On identifie ce qui peut être automatisé sans perdre la main, on construit les bons automatismes, et on ajoute de l'IA là où elle apporte vraiment un gain — rédaction, tri, extraction, relances.",
    result:
      "Des relances prospects qui partent automatiquement, des rapports générés sans intervention humaine, des équipes commerciales qui se concentrent sur les conversations qui comptent.",
    linkLabel: 'Discutons de votre besoin',
    linkHref: '/contact',
  },
  {
    title: 'Évolution & support',
    description:
      "On ne disparaît pas après la livraison. Votre outil évolue avec votre entreprise, et on reste là pour ajouter ce qui manque, corriger ce qui casse et monitorer ce qui tourne en production.",
    result:
      'Un interlocuteur direct, une réponse sous 48h, et un outil qui reste aligné avec votre activité au fil des mois.',
    linkLabel: 'En savoir plus',
    linkHref: '/contact',
  },
];

const proofs = [
  {
    name: 'HollyFork',
    industry: 'SaaS restauration',
    title: 'Un produit complet livré en quelques semaines',
    bullet: 'Dashboard, plan de salle, réservations, planning équipe, food cost.',
    href: '/realisations/hollyfork',
    image: '/hollyfork/dashboard.png',
  },
  {
    name: 'Top Loisirs',
    industry: 'Loisirs outdoor — 30 ans d’expérience',
    title: 'Site refait + logiciel interne sur mesure',
    bullet: 'Plannings moniteurs, gestion groupes, suivi matériel.',
    href: '/realisations/toploisirs',
    image: '/toploisirs/image-01.png',
  },
];

const faq = [
  {
    q: 'Combien ça coûte ?',
    a: "Le tarif dépend entièrement du périmètre — il n'y a pas de grille publique. On établit un devis ferme après un appel de cadrage gratuit où on comprend vraiment votre besoin. Pas de surprise en cours de route.",
  },
  {
    q: 'Combien de temps pour livrer ?',
    a: 'Entre 6 et 10 semaines pour la première version. On livre en sprints courts, vous voyez l’avancement chaque semaine et vous pouvez ajuster en cours de route.',
  },
  {
    q: 'Ça marche avec les outils qu’on utilise déjà ?',
    a: "Oui. On cartographie votre stack actuel avant de concevoir l'outil, et on le construit pour qu'il s'y intègre. On ne vous force jamais à tout remplacer.",
  },
  {
    q: 'Qui possède le code et les données ?',
    a: "Vous. Le code vous est livré sur votre dépôt Git. Les données restent chez vous ou chez l'hébergeur de votre choix. On ne vous enferme dans rien.",
  },
  {
    q: 'Qu’est-ce qui se passe après la livraison ?',
    a: "On reste disponible pour faire évoluer l'outil. Un forfait mensuel couvre les corrections, les petites évolutions et le monitoring. Les évolutions plus lourdes sont devisées au cas par cas.",
  },
  {
    q: 'Et si ça ne marche pas comme prévu ?',
    a: "On fait des points courts chaque semaine précisément pour ne pas attendre la livraison. Si une direction ne marche pas, on la change avant d'avoir construit dessus pendant un mois.",
  },
];

const promises = [
  'Devis ferme après un appel gratuit',
  '6 à 10 semaines pour la première version',
  'Code livré, données chez vous',
  'Réponse sous 48h, toujours',
];

export default function VariantB() {
  return (
    <>
      <TestBanner variant="B" name="Déroulé linéaire guidé" />

      {/* Hero — dark wow */}
      <section className="section-padding pt-0!">
        <div className="relative m-5 overflow-hidden rounded-2xl bg-[#141952] px-6 py-24 text-white md:m-6 md:px-16 md:py-32">
          <GlowBackdrop />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-5 md:items-center">
              <div className="space-y-6 md:col-span-3">
                <Reveal>
                  <Badge
                    variant="secondary"
                    className="w-fit border-white/10 bg-white/10 text-[#BFD5FF]"
                  >
                    Studio Cran — services
                  </Badge>
                </Reveal>
                <Reveal delay={0.1}>
                  <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                    Des outils sur mesure,
                    <br />
                    livrés en{' '}
                    <span className="text-[#BFD5FF]">quelques semaines</span>.
                  </h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="max-w-xl text-lg leading-relaxed text-[#BFD5FF]/60">
                    On conçoit et développe des logiciels métiers pour les PME
                    et les startups qui veulent des outils à la hauteur de
                    leur activité. Pas de template générique, pas de jargon,
                    pas de surprise sur la facture.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Button
                      size="lg"
                      className="bg-[#2F41FC] text-white hover:bg-[#202DDB]"
                      asChild
                    >
                      <Link href="/contact">
                        Parlons de votre projet
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#4F6CFF]/30 text-[#BFD5FF] hover:bg-[#BFD5FF]/10"
                      asChild
                    >
                      <Link href="#leviers">Voir ce qu’on fait</Link>
                    </Button>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={0.4} className="md:col-span-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7092FF]">
                    Ce qu’on promet
                  </p>
                  <div className="mt-5 space-y-4">
                    {promises.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F41FC]/30 ring-1 ring-white/10">
                          <Check className="h-3 w-3 text-[#BFD5FF]" />
                        </div>
                        <span className="text-sm text-[#BFD5FF]/90">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="section-padding bg-muted/30">
        <div className="container space-y-12">
          <Reveal className="max-w-2xl space-y-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Pour qui on travaille
            </h2>
            <p className="text-muted-foreground text-lg">
              Si vous vous reconnaissez dans une de ces situations, on est
              probablement capables de vous aider.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {archetypes.map((a, idx) => {
              const Icon = a.icon;
              return (
                <Reveal
                  key={a.title}
                  delay={idx * 0.12}
                  as="article"
                  className="border-border bg-card hover:border-primary/40 hover:shadow-primary/5 flex flex-col gap-4 rounded-2xl border p-7 transition-all hover:shadow-[0_16px_48px_-16px]"
                >
                  <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {a.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leviers — dark impact block */}
      <section
        id="leviers"
        className="relative overflow-hidden bg-[#141952] text-white"
      >
        <GlowBackdrop />
        <div className="section-padding container relative z-10 space-y-16">
          <Reveal className="max-w-2xl space-y-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Ce qu’on fait concrètement
            </h2>
            <p className="text-lg text-[#BFD5FF]/60">
              Trois leviers qu’on combine selon votre besoin. Chaque projet est
              unique — l’équilibre aussi.
            </p>
          </Reveal>
          <div className="space-y-6">
            {levers.map((l, idx) => (
              <Reveal
                key={l.title}
                delay={idx * 0.1}
                as="article"
                className="relative grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:grid-cols-5 md:gap-12"
              >
                <div className="font-display absolute top-6 right-6 text-5xl font-bold text-[#7092FF]/20">
                  0{idx + 1}
                </div>
                <div className="space-y-4 md:col-span-2">
                  <h3 className="font-display text-2xl font-semibold">
                    {l.title}
                  </h3>
                  <p className="leading-relaxed text-[#BFD5FF]/70">
                    {l.description}
                  </p>
                </div>
                <div className="space-y-4 rounded-xl border border-white/5 bg-[#202CB3]/30 p-6 md:col-span-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7092FF]">
                    Résultat concret
                  </p>
                  <p className="leading-relaxed text-[#BFD5FF]/90">
                    {l.result}
                  </p>
                  <Link
                    href={l.linkHref}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#BFD5FF] hover:text-white"
                  >
                    {l.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preuve */}
      <section className="section-padding">
        <div className="container space-y-12">
          <Reveal className="max-w-2xl space-y-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Ce qu’on a déjà livré
            </h2>
            <p className="text-muted-foreground text-lg">
              Deux projets, deux contextes très différents. Même méthode.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {proofs.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 0.12}>
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
                  <div className="space-y-3 p-7">
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                      <span className="font-semibold">{p.name}</span>
                      <span>·</span>
                      <span>{p.industry}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{p.bullet}</p>
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

      <OurProcess />
      <Testimonials />

      {/* FAQ */}
      <section className="section-padding container">
        <Reveal className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Les questions qu’on nous pose
            </h2>
            <p className="text-muted-foreground">
              Tout ce qu’un fondateur de PME se demande avant de démarrer.
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

      {/* Final double CTA — dark wow */}
      <section className="section-padding pt-0!">
        <div className="relative m-5 overflow-hidden rounded-2xl bg-[#141952] px-6 py-24 text-white md:m-6 md:px-16 md:py-32">
          <GlowBackdrop />
          <div className="relative z-10 mx-auto max-w-3xl space-y-12">
            <Reveal className="space-y-4 text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Prêt à en discuter ?
              </h2>
              <p className="text-lg text-[#BFD5FF]/60">
                Deux façons de démarrer. Choisissez celle qui vous convient.
              </p>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal
                delay={0.1}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <Calendar className="h-8 w-8 text-[#BFD5FF]" />
                <h3 className="font-display mt-4 text-xl font-semibold">
                  Réserver un appel
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#BFD5FF]/70">
                  30 minutes, en visio, gratuit et sans engagement. On comprend
                  votre besoin et on vous dit si on peut vous aider.
                </p>
                <Button
                  className="mt-6 w-full bg-[#2F41FC] text-white hover:bg-[#202DDB]"
                  asChild
                >
                  <Link href="/contact">
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Reveal>
              <Reveal
                delay={0.2}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <MessageSquare className="h-8 w-8 text-[#BFD5FF]" />
                <h3 className="font-display mt-4 text-xl font-semibold">
                  Envoyer un brief
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#BFD5FF]/70">
                  Vous préférez écrire ? Envoyez-nous quelques lignes sur
                  votre projet, on revient vers vous sous 48h avec une
                  première réaction.
                </p>
                <Button
                  className="mt-6 w-full border-[#4F6CFF]/30 bg-transparent text-[#BFD5FF] hover:bg-[#BFD5FF]/10"
                  variant="outline"
                  asChild
                >
                  <Link href="/contact">Écrire un message</Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
