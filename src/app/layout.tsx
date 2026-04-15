import './globals.css';

import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import Footer from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { NavigationProvider } from '@/components/providers/navigation-provider';
import { StyleGlideProvider } from '@/components/providers/styleglide-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  verification: {
    google: '5JISaMz1w3eJxvEQ-2T0M9Fks8qNaKd4r09ZPhDNIDk',
  },
  metadataBase: new URL('https://studiocran.fr'),
  title: {
    default: 'Studio Cran — Logiciel sur mesure pour enseignistes et ateliers de signalétique',
    template: '%s | Studio Cran',
  },
  description:
    'Studio Cran construit des outils sur mesure pour les ateliers d\'enseigne : devis technique, suivi BAT, ordres de fab, planning de pose, facturation. Du sur mesure, pas un logiciel générique.',
  keywords: [
    'logiciel enseigniste',
    'logiciel enseigne signalétique',
    'logiciel sur mesure',
    'outil atelier enseigne',
    'devis enseigne',
    'gestion atelier signalétique',
    'Île-de-France',
    'outil métier',
  ],
  authors: [{ name: 'Studio Cran' }],
  creator: 'Studio Cran',
  publisher: 'Studio Cran',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Studio Cran — Logiciel sur mesure pour enseignistes et ateliers de signalétique',
    description:
      'Studio Cran construit des outils sur mesure pour les ateliers d\'enseigne : devis technique, suivi BAT, ordres de fab, planning de pose, facturation.',
    siteName: 'Studio Cran',
    locale: 'fr_FR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Cran — Logiciel sur mesure pour enseignistes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Cran — Logiciel sur mesure pour enseignistes et ateliers de signalétique',
    description:
      'Studio Cran construit des outils sur mesure pour les ateliers d\'enseigne : devis technique, suivi BAT, ordres de fab, planning de pose, facturation.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col antialiased',
          inter.variable,
          spaceGrotesk.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <NavigationProvider>
            <StyleGlideProvider />
            <Navbar initialBannerVisible={false} />
            <main className="flex-1">{children}</main>
            <Footer />
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
