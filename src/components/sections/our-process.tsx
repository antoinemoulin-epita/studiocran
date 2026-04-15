import { Process } from './process';

const processSteps = [
  {
    title: 'Écoute & cadrage',
    description:
      'On vient dans votre atelier. On regarde comment circule un dossier du devis à la pose. On identifie ce qui vous coûte du temps et de l\u2019argent.',
    image: '/dashboard/01.jpg',
  },
  {
    title: 'Conception',
    description:
      'On dessine l\u2019outil avec vous : écrans clés, parcours utilisateur, connexions avec vos outils existants. Vous validez avant qu\u2019on code quoi que ce soit.',
    image: '/dashboard/02.jpg',
  },
  {
    title: 'Développement',
    description:
      'On construit en cycles courts. Vous voyez l\u2019avancement chaque semaine et vous pouvez ajuster en cours de route.',
    image: '/dashboard/03.jpg',
  },
  {
    title: 'Livraison & formation',
    description:
      'On déploie, on forme votre équipe — y compris le chef d\u2019atelier et les poseurs. Pas de manuel de 50 pages : une demi-journée suffit.',
    image: '/dashboard/04.jpg',
  },
  {
    title: 'Évolution continue',
    description:
      'Votre outil grandit avec vous. Nouvelles fonctionnalités, automatisations supplémentaires, support réactif — on reste à vos côtés.',
  },
];

export const OurProcess = () => {
  return (
    <div id="comment-ca-marche">
      <Process title="Notre méthode" steps={processSteps} />
    </div>
  );
};
