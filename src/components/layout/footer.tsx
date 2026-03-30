'use client';

import { Linkedin } from 'lucide-react';
import Link from 'next/link';

import Logo from '@/components/layout/logo';
import { CONTACT_EMAIL, NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="border-border border-t">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Logiciel sur mesure et automatisation IA pour les PME françaises.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
              Navigation
            </span>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="animated-underline w-fit text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
              Contact
            </span>
            <Link
              className="animated-underline w-fit text-sm"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </Link>
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="animated-underline flex w-fit items-center gap-2 text-sm"
                aria-label={link.name}
              >
                <Linkedin className="h-4 w-4" />
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-border mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Studio Cran. Tous droits réservés.
          </p>
          <Link
            href="/mentions-legales"
            className="animated-underline text-muted-foreground text-xs"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
