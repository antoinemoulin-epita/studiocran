'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import {
  Calendar,
  CheckCircle,
  Loader2,
  Mail,
  MessageSquare,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_EMAIL } from '@/lib/constants';
import { cn } from '@/lib/utils';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type ContactMode = 'call' | 'message';

export default function ContactPage() {
  const [mode, setMode] = useState<ContactMode>('call');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#2C769D',
            'cal-brand-emphasis': '#214459',
            'cal-border-emphasis': '#C8E1EF',
            'cal-text': '#162C3B',
            'cal-text-emphasis': '#162C3B',
            'cal-border-default': '#C8E1EF',
            'cal-border-subtle': '#E6F1F8',
            'cal-bg-emphasis': '#F3F8FC',
          },
          dark: {
            'cal-brand': '#3D92BA',
            'cal-brand-emphasis': '#6CB2D2',
            'cal-border-emphasis': '#255F7F',
            'cal-text': '#E6F1F8',
            'cal-text-emphasis': '#E6F1F8',
            'cal-border-default': '#214459',
            'cal-border-subtle': '#162C3B',
            'cal-bg-emphasis': '#0B1A24',
          },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // TODO: Remplacer par votre endpoint (API route, Formspree, Resend, etc.)
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage(
        "Une erreur est survenue. Réessayez ou contactez-nous directement par email.",
      );
    }
  };

  return (
    <section className="hero-padding">
      <div className="container space-y-12">
        {/* Header */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Parlons de votre projet
          </h1>
          <p className="text-muted-foreground text-lg">
            Choisissez ce qui vous convient le mieux. On vous répond sous 48h.
          </p>
        </div>

        {/* Mode selector */}
        <div className="mx-auto flex max-w-md overflow-hidden rounded-xl border border-[#C8E1EF] bg-[#F3F8FC] p-1.5">
          <button
            onClick={() => setMode('call')}
            className={cn(
              'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all',
              mode === 'call'
                ? 'bg-white text-[#162C3B] shadow-sm'
                : 'text-[#22506A] hover:text-[#162C3B]',
            )}
          >
            <Calendar className="h-4 w-4" />
            Réserver un appel
          </button>
          <button
            onClick={() => setMode('message')}
            className={cn(
              'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all',
              mode === 'message'
                ? 'bg-white text-[#162C3B] shadow-sm'
                : 'text-[#22506A] hover:text-[#162C3B]',
            )}
          >
            <MessageSquare className="h-4 w-4" />
            Envoyer un message
          </button>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl">
          {mode === 'call' ? (
            <div className="space-y-6">
              {/* Cal.com inline embed */}
              <div className="overflow-hidden rounded-2xl border border-[#C8E1EF]">
                <Cal
                  calLink="antoine-mln-ojoghx/30min"
                  style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                  config={{
                    layout: 'month_view',
                    theme: 'light',
                  }}
                />
              </div>
              <p className="text-muted-foreground text-center text-sm">
                30 minutes pour échanger sur votre projet, sans engagement.
              </p>
            </div>
          ) : (
            <div className="grid gap-12 md:grid-cols-5">
              {/* Left: info */}
              <div className="space-y-6 md:col-span-2">
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-semibold">
                    Un message rapide
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Décrivez-nous votre besoin en quelques mots. On vous répond
                    sous 48h avec une première analyse gratuite.
                  </p>
                </div>

                <div className="border-border space-y-4 border-t pt-6">
                  <div className="flex items-center gap-3">
                    <Mail className="text-muted-foreground h-5 w-5" />
                    <Link
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="animated-underline text-sm"
                    >
                      {CONTACT_EMAIL}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div className="md:col-span-3">
                {status === 'success' ? (
                  <div className="flex flex-col items-center gap-4 rounded-2xl border border-[#C8E1EF] bg-[#F3F8FC] p-10 text-center">
                    <CheckCircle className="h-12 w-12 text-[#2C769D]" />
                    <h2 className="font-display text-2xl font-semibold">
                      Message envoyé
                    </h2>
                    <p className="text-muted-foreground">
                      Merci ! On revient vers vous sous 48h.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setStatus('idle')}
                      className="mt-4"
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 rounded-2xl border border-[#C8E1EF] bg-[#F3F8FC] p-8"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Votre nom"
                          required
                          disabled={status === 'loading'}
                          className="bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="votre@email.fr"
                          required
                          disabled={status === 'loading'}
                          className="bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">
                        Entreprise{' '}
                        <span className="text-muted-foreground font-normal">
                          (optionnel)
                        </span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Nom de votre entreprise"
                        disabled={status === 'loading'}
                        className="bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Votre besoin</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Décrivez en quelques lignes ce que vous cherchez à améliorer ou automatiser..."
                        className="min-h-[140px] resize-none bg-white"
                        required
                        disabled={status === 'loading'}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-600">{errorMessage}</p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Envoyer
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
