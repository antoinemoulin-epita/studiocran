import { Process } from './process';

const processSteps = [
  {
    title: 'Écoute & cadrage',
    description:
      'On commence par comprendre votre métier, vos outils actuels et ce qui vous freine au quotidien. Pas de jargon, juste des questions concrètes.',
    image: '/dashboard/01.jpg',
  },
  {
    title: 'Conception',
    description:
      "On dessine l'outil avec vous : écrans clés, parcours utilisateur, connexions avec vos outils existants. Vous validez avant qu'on code quoi que ce soit.",
    image: '/dashboard/02.jpg',
  },
  {
    title: 'Développement',
    description:
      "On construit en sprints courts. Vous voyez l'avancement chaque semaine et vous pouvez ajuster en cours de route.",
    image: '/dashboard/03.jpg',
  },
  {
    title: 'Livraison & formation',
    description:
      "On déploie, on forme votre équipe, on s'assure que tout fonctionne. Pas de surprise le jour J.",
    image: '/dashboard/04.jpg',
  },
  {
    title: 'Évolution continue',
    description:
      'Votre outil grandit avec vous. Nouvelles fonctionnalités, automatisations supplémentaires, support réactif — on reste à vos côtés.',
  },
];

export const OurProcess = () => {
  return <Process title="Notre méthode" steps={processSteps} />;
};
