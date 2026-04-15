import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "On avait la vision produit et le marché, mais pas l'équipe tech. Studio Cran a livré un SaaS complet en quelques semaines — chaque module est pensé pour qu'un restaurateur débordé s'en serve sans formation. On peut enfin montrer un vrai produit à nos premiers clients et à nos investisseurs.",
    name: 'Fondateur HollyFork',
    role: 'Startup SaaS restauration',
    initials: 'HF',
  },
  {
    quote:
      "Trente ans qu'on tourne avec Excel, des emails et des classeurs papier. Studio Cran nous a refait le site et construit l'outil interne en parallèle, sans jargon, en comprenant vraiment notre métier. Nos week-ends chargés sont enfin devenus gérables.",
    name: 'Fondateur Top Loisirs',
    role: 'PME loisirs outdoor, 30 ans d’expérience',
    initials: 'TL',
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Ce qu&apos;en disent nos clients
          </h2>
          <p className="text-muted-foreground text-lg">
            Des fondateurs de PME qui étaient dans la même situation que
            vous — tableurs, process manuels, outils qui ne se parlent pas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border-border bg-card relative flex flex-col gap-6 rounded-lg border p-8"
            >
              <Quote
                className="text-primary/20 absolute top-6 right-6 h-10 w-10"
                aria-hidden
              />
              <blockquote className="text-foreground relative text-lg leading-relaxed">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 border-t border-border pt-6">
                <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
