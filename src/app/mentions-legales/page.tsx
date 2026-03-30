import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Studio Cran — éditeur, hébergement, données personnelles, cookies.',
};

export default function MentionsLegales() {
  return (
    <div className="hero-padding">
      <div className="container prose max-w-3xl">
        <h1 className="font-display text-3xl font-semibold md:text-4xl">
          Mentions légales
        </h1>

        <h2>Éditeur du site</h2>
        <p>
          Studio Cran
          <br />
          Email : contact@studiocran.fr
        </p>

        <h2>Hébergement</h2>
        <p>
          Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
          CA 91723, États-Unis.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus (textes, images, graphismes, logo, icônes)
          présents sur ce site sont la propriété exclusive de Studio Cran, sauf
          mention contraire. Toute reproduction, distribution, modification ou
          utilisation de ces contenus sans autorisation préalable est interdite.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les informations recueillies via le formulaire de contact sont
          destinées exclusivement à Studio Cran pour le traitement de votre
          demande. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification et de suppression de vos données. Pour exercer ce droit,
          contactez-nous à contact@studiocran.fr.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site utilise uniquement des cookies techniques nécessaires à son bon
          fonctionnement. Aucun cookie de suivi ou publicitaire n&apos;est utilisé.
        </p>
      </div>
    </div>
  );
}
