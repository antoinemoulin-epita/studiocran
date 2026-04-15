'use client';

import { ArrowDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HeroEnseigniste() {
  return (
    <div className="section-padding pt-0!">
      <section
        className={cn(
          'relative m-5 mb-0! flex min-h-[min(100dvh,702px)] flex-col items-center justify-center overflow-hidden p-5 md:m-6 md:min-h-[min(100dvh,1032px)] md:p-6',
          'bg-[#141952] text-white',
        )}
      >
        {/* Animated mesh gradient */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute h-[700px] w-[700px] rounded-full bg-[#4F6CFF] opacity-40 blur-[140px]"
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -60, 40, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ top: '-15%', right: '-10%' }}
          />
          <motion.div
            className="absolute h-[600px] w-[600px] rounded-full bg-[#7092FF] opacity-35 blur-[130px]"
            animate={{
              x: [0, -60, 50, 0],
              y: [0, 50, -30, 0],
              scale: [1, 0.85, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ bottom: '-10%', left: '-15%' }}
          />
          <motion.div
            className="absolute h-[500px] w-[600px] rounded-full bg-[#2F41FC] opacity-30 blur-[120px]"
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.3, 0.8, 1],
              opacity: [0.3, 0.4, 0.2, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ top: '30%', left: '35%' }}
          />
          <motion.div
            className="absolute h-[350px] w-[400px] rounded-full bg-[#99B9FF] opacity-20 blur-[100px]"
            animate={{
              x: [0, -50, 60, 0],
              y: [0, 40, -50, 0],
              scale: [1, 1.4, 0.7, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ top: '10%', left: '20%' }}
          />
          <motion.div
            className="absolute h-[500px] w-[500px] rounded-full bg-[#202CB3] opacity-50 blur-[110px]"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ bottom: '5%', right: '10%' }}
          />
        </div>

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, #BFD5FF 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Noise texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="hero-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#hero-noise)" />
          </svg>
        </div>

        {/* Glow behind title */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F6CFF]/20 blur-[150px]" />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#141952_100%)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-10 text-center">
          <div className="flex max-w-4xl flex-col items-center gap-8">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#BFD5FF] backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Pour les enseignistes et ateliers de signalétique
            </motion.div>

            <motion.h1
              className="font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Vos devis prennent 2 heures.{' '}
              <span className="text-[#BFD5FF]">
                Le client ne rappelle jamais.
              </span>
            </motion.h1>

            <motion.p
              className="max-w-2xl text-lg text-[#BFD5FF]/50 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Studio Cran construit des outils sur mesure pour les ateliers
              d&apos;enseigne. Devis technique, suivi BAT, ordres de fab,
              planning de pose — tout ce qui manque entre votre Excel et votre
              atelier.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
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
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-[#4F6CFF]/30 text-[#BFD5FF] hover:bg-[#BFD5FF]/10"
              >
                <a href="#comment-ca-marche">
                  Voir comment ça marche
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Chiffre-choc */}
            <motion.div
              className="mt-4 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 md:gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {[
                { value: '~22 800 €', label: 'perdus par an sur des devis jamais signés' },
                { value: '70%', label: 'des ateliers font encore leurs devis sur Excel' },
                { value: '0', label: 'logiciel adapté aux enseignistes de 8-15 pers.' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-semibold text-[#BFD5FF] md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 max-w-[180px] text-xs text-[#99B9FF]/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
