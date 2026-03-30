'use client';

import { ArrowDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const heroImages = [
  { src: '/dashboard/d73fd5be05f72294061d22b52534435f.jpg', alt: 'Dashboard de gestion' },
  { src: '/dashboard/31b2185d8e607ec01e33e78481c84ce8.jpg', alt: 'Interface analytique' },
  { src: '/dashboard/f29ac63d46ca910d9f95c14a0f3f3f8e.jpg', alt: 'Tableau de bord métier' },
  { src: '/dashboard/04.jpg', alt: 'Outil de suivi' },
];

function HeroCard({
  image,
  className,
}: {
  image: { src: string; alt: string };
  className?: string;
}) {
  return (
    <div className={cn('group relative h-full w-full overflow-hidden', className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority
      />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/3" />
    </div>
  );
}

export function Hero() {
  return (
    <div className="section-padding pt-0!">
      <section
        className={cn(
          'relative m-5 mb-0! flex min-h-[min(100dvh,702px)] flex-col items-center justify-center overflow-hidden p-5 md:m-6 md:min-h-[min(100dvh,1032px)] md:p-6',
          'bg-[#060F16] text-white',
        )}
      >
        {/* Animated mesh gradient */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Blob 1 — large, slow drift top-right */}
          <motion.div
            className="absolute h-[600px] w-[600px] rounded-full bg-[#2C769D] opacity-25 blur-[130px]"
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
            style={{ top: '-10%', right: '-5%' }}
          />

          {/* Blob 2 — medium, opposite drift bottom-left */}
          <motion.div
            className="absolute h-[500px] w-[500px] rounded-full bg-[#255F7F] opacity-30 blur-[120px]"
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
            style={{ bottom: '-5%', left: '-10%' }}
          />

          {/* Blob 3 — accent, faster pulse center */}
          <motion.div
            className="absolute h-[400px] w-[500px] rounded-full bg-[#3D92BA] opacity-15 blur-[100px]"
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.3, 0.8, 1],
              opacity: [0.15, 0.22, 0.12, 0.15],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ top: '35%', left: '40%', transform: 'translate(-50%, -50%)' }}
          />

          {/* Blob 4 — cyan highlight, small, fast */}
          <motion.div
            className="absolute h-[300px] w-[350px] rounded-full bg-[#6CB2D2] opacity-10 blur-[90px]"
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
            style={{ top: '15%', left: '25%' }}
          />

          {/* Blob 5 — deep blue, very slow, bottom-right */}
          <motion.div
            className="absolute h-[450px] w-[450px] rounded-full bg-[#162C3B] opacity-40 blur-[100px]"
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
            style={{ bottom: '10%', right: '15%' }}
          />
        </div>

        {/* Noise texture for depth */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        {/* Vignette edges */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#060F16_100%)]" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-10 text-center">
          <div className="flex max-w-4xl flex-col items-center gap-8">
            <motion.h1
              className="font-display text-5xl leading-tight font-semibold tracking-tight md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Votre entreprise mérite un outil{' '}
              <span className="text-[#ADE8F4]">taillé pour elle</span>
            </motion.h1>

            <motion.p
              className="max-w-2xl text-lg text-[#ADE8F4]/50 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Studio Cran conçoit des outils sur mesure pour les PME — connectés
              à vos outils existants, automatisés par l&apos;IA, pensés pour
              votre métier.
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
                className="bg-[#3D92BA] text-white hover:bg-[#2C769D]"
              >
                <Link href="/contact">
                  Discutons de votre projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-[#3D92BA]/30 text-[#ADE8F4] hover:bg-[#ADE8F4]/10"
              >
                <a href="#realisations">
                  Voir nos réalisations
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Dashboard Cards - Desktop Grid (1920px+) */}
        <div className="hidden gap-6 p-6 [@media(min-width:1920px)]:grid [@media(min-width:1920px)]:grid-cols-4">
          {heroImages.map((image, index) => (
            <HeroCard
              key={index}
              image={image}
              className="h-[220px] w-[340px]"
            />
          ))}
        </div>

        {/* Dashboard Cards - Carousel (<1920px) */}
        <Carousel
          opts={{ align: 'start' }}
          className="flex w-full cursor-grab justify-center [@media(min-width:1920px)]:hidden"
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-[1/4] pl-5 first:pl-0 md:pl-6"
              >
                <HeroCard
                  image={image}
                  className="h-[200px] w-[310px] md:h-[220px] md:w-[340px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}
