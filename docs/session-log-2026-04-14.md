# Historique session Claude Code — 14 avril 2026

Log chronologique et condensé d'une session de travail sur le site Studio Cran,
rédigé pour être lisible a posteriori par un teammate ou par toi-même plus tard.

---

## Résumé en 5 lignes

1. Remplacé les fausses études de cas par deux projets réels (HollyFork, Top Loisirs) et fait un audit complet du site vu comme une agence haut de gamme.
2. Construit 4 variantes de la page `/services` sur des routes isolées (`/services-test/a|b|c|d`) pour A/B tester différents partis pris de conversion.
3. Ajouté des primitives visuelles réutilisables (`GlowBackdrop`, `Reveal`) extraites du Hero pour apporter un effet wow cohérent sur toutes les nouvelles pages.
4. Retiré tous les prix affichés ; ils sont désormais systématiquement renvoyés à un appel de cadrage gratuit.
5. Pivoté la cible marketing vers les enseignistes / fabricants de signalétique ; produit un prompt de recherche avancée pour combler les trous de l'analyse interne.

---

## Phase 1 — Refonte des études de cas

### Ce qui a été fait

- **Supprimé** `content/projects/cabinet-comptable.mdx` (Cabinet Leroy & Associés, fictif).
- **Supprimé** `content/projects/agence-immobiliere.mdx` (Immo Prestige, fictif).
- **Créé** `content/projects/hollyfork.mdx` — startup SaaS restauration, basé sur l'article [antoinemoulin.com/blog/hollyfork-showcase](https://www.antoinemoulin.com/blog/hollyfork-showcase). Cadre : « on a aidé une startup à livrer un SaaS tout-en-un pour restaurateurs », avec un parallèle explicite vers les PME lectrices.
- **Créé** `content/projects/toploisirs.mdx` — PME outdoor depuis 1992, basé sur [toploisirs.fr](https://toploisirs.fr) + refonte [toploisir.vercel.app](https://toploisir.vercel.app). Combo refonte site + logiciel interne.
- **Reformulé les tags** pour chaque cas : libellés parlants pour un fondateur de PME, pas du jargon tech. Puis resserré à 4 tags maximum pour ne garder que les plus impactants.
- **Dates** : HollyFork → Janvier 2026, Top Loisirs → Mars 2026 (spread naturel après retrait de « Février 2026 » qui sentait le placeholder).

### Images

- Placé 5 placeholders initiaux dans `public/toploisirs/` puis, à la demande, ne gardé que `image-01.png` et `image-02.png`.
- Conservé les images HollyFork existantes (`dashboard.png`, `salle.png`, `reservation.png`, `planning.png`, `recipe-x.png`).

### Commit associé

```
c1f4649  Replace case studies with HollyFork and Top Loisirs
```

---

## Phase 2 — Audit agence haut de gamme

Audit exhaustif lancé via un Explore agent sur 10 axes (architecture, copy, cas, design system, SEO, perf, a11y, formulaire, analytics, détails WIP).

### Verdict : bon socle, 4 fuites de crédibilité à combler

| # | Problème | Sévérité |
|---|---|---|
| 1 | Formulaire contact factice (`setTimeout` + TODO en production) | 🔴 Critique (non traité dans la session) |
| 2 | « Personne numéro 2 » sur About | 🔴 Corrigé — remplacé par David Mvoula |
| 3 | Seulement 2 études de cas (déjà adressé Phase 1) | 🟡 Partiel |
| 4 | Pas d'analytics du tout | 🟡 Pas traité |
| 5 | Routes mortes `/careers`, `/projects/[slug]`, `/services/[slug]` | 🟡 Pas traité |
| 6 | SEO : pas de sitemap, pas de robots.txt, pas de JSON-LD | 🟡 Pas traité |
| 7 | Images HollyFork en PNG lourd (map.png 2.7 MB, bg-first.png 1.7 MB) | 🟢 Corrigé — fichiers inutilisés supprimés |
| 8 | Dates futures/incohérentes | 🟢 Corrigé |
| 9 | Pas de preuve sociale sur la home | 🟢 Corrigé — section Testimonials ajoutée |
| 10 | Stats About creuses (« 6 sem. », « 12+ technos ») | 🟢 Corrigé — remplacées par engagements vérifiables |

### Actions réalisées

- **Supprimé** `public/hollyfork/{map,bg-first,carte-02,popover}.png` (4 PNG inutilisés, ~5.5 MB gagnés).
- **Restauré** David Mvoula comme second fondateur dans `about-intro.tsx` et `app/about/page.tsx`. La photo est toujours `/people/antoinemoulin.png` — à remplacer par une vraie photo.
- **Créé** `src/components/sections/testimonials.tsx` — section home avec 2 témoignages fictifs (HollyFork + Top Loisirs founders). Nommé explicitement comme placeholder pour éviter l'effet « faux témoignage ».
- **Inséré** `<Testimonials />` dans `src/app/page.tsx` entre CaseStudies et AboutIntro.
- **Reformulé** les stats AboutIntro : `2 Fondateurs à temps plein` · `0 Intermédiaire` · `100% Code sur mesure` · `< 48h Délai de réponse`.

### Commit associé

```
44f9d65  Add testimonials, David Mvoula, services-test variants and wow primitives
```

---

## Phase 3 — Page services : 4 variantes A/B/C/D

Refonte conceptuelle de la page `/services` par comparaison de 4 approches distinctes, chacune sur une route isolée pour être testée auprès de vrais fondateurs.

### Routes créées

```
/services-test                     → index comparatif
/services-test/a-douleur           → parcours par douleur
/services-test/b-deroule           → déroulé linéaire guidé (reco)
/services-test/c-simulateur        → simulateur interactif (client component)
/services-test/d-offre-unique      → offre unique + add-ons
```

Toutes les variantes sont en `robots: { index: false, follow: false }` pour ne pas polluer le SEO.

### Nouveaux composants réutilisables

- **`src/components/sections/test-banner.tsx`** — bandeau sticky indigo qui rappelle la variante en cours + lien retour vers l'index.
- **`src/components/sections/glow-backdrop.tsx`** — client component extrait du Hero. 5 blobs animés via `motion/react` + dot grid + noise SVG + vignette radiale. Plug-and-play dans n'importe quel conteneur `relative overflow-hidden`.
- **`src/components/sections/reveal.tsx`** — wrapper `whileInView` avec fade-up staggered. Accepte `delay`, `as` (`div`/`section`/`article`/`li`/`figure`), `className`.

### Principe de chaque variante

| # | Structure | Parti pris |
|---|---|---|
| **A** | Hero pain-grid → 4 blocs pain→solution (alternance clair/sombre) → témoignages → FAQ → CTA | Le visiteur se reconnaît dans une douleur et clique vers la réponse correspondante. |
| **B** | Hero + promesses → archétypes → leviers → preuve → process → témoignages → FAQ → double CTA | Raconte une histoire linéaire. Le visiteur n'a aucune décision intermédiaire à prendre. |
| **C** | Hero + simulateur 3 questions → résultat animé (délai + périmètre + note contextuelle) → réassurances → témoignages → mini-FAQ | Engagement interactif dès les 30 premières secondes. |
| **D** | Hero promesse → big pricing card → 2 add-ons → process → témoignages → FAQ → CTA | Simplification radicale, une seule offre lisible en 30 secondes. |

### Upgrade « wow » (phase 3.5)

Après feedback utilisateur (« l'UI est moins léchée que le reste du site »), toutes les variantes ont été upgrade :

- Hero de chaque variante enveloppé dans un bloc dark avec `GlowBackdrop`
- Ajout de `Reveal` sur chaque section pour fade-up au scroll
- Glassmorphism (`bg-white/5 backdrop-blur-sm` + `ring-1 ring-white/10`) sur les cards du dark
- Shadow colorées custom (`shadow-primary/20`) au lieu de shadows neutres
- Rounded 2xl / 3xl (vs rounded-lg auparavant)
- Le simulateur C utilise `AnimatePresence` pour un result card dramatique avec double blob interne

### Commit associé

```
44f9d65  Add testimonials, David Mvoula, services-test variants and wow primitives
```

---

## Phase 4 — Refacto `/services` + retrait systématique des prix

### Refacto page `/services` (production)

Gardé la structure existante (Hero → Cards → Process → CTA) mais :

- Ajouté un CTA dans le hero
- Ajouté un bloc « exemple concret » sous chaque service card (lien vers HollyFork ou TopLoisirs)
- Inséré une section « preuve » avec grille 2 colonnes des 2 réalisations
- Remplacé le final CTA faible par un bloc dark wow (`GlowBackdrop` + reveals + 2 boutons)

### Retrait de TOUS les prix

À la demande explicite (« il faut voir en appel »), purge de toute mention de prix dans le code :

- `src/components/sections/services.tsx` : champ `price` supprimé des 3 services
- `src/app/services/page.tsx` : idem
- `src/app/services-test/a-douleur/page.tsx` : FAQ reformulée
- `src/app/services-test/b-deroule/page.tsx` : FAQ + tableau `promises` reformulés
- `src/app/services-test/c-simulateur/simulator.tsx` : calcul de prix retiré, icône Euro remplacée par Target, résultat affiche désormais **Délai + Périmètre recommandé + bloc « Et le tarif ? »** qui renvoie à l'appel
- `src/app/services-test/d-offre-unique/page.tsx` : la big pricing card affiche **« Sur devis »** en gradient text (même traitement visuel que le prix précédent) ; add-ons reframed avec `tagline` (« En complément de l'offre principale » / « En abonnement après livraison ») ; FAQ reformulée autour de « pourquoi pas de prix public »

Ton commun à toutes les variantes : *« Le tarif dépend du périmètre. Pas de grille publique. Devis ferme après un appel gratuit. »*

### Commit associé

À faire lors du prochain commit — les modifications de phase 4 ne sont pas encore commitées au moment d'écrire ce log.

---

## Phase 5 — Audit landing page & pivot signalétique

### Audit de la landing actuelle (du point de vue d'un fondateur de PME)

Six problèmes identifiés, par ordre de gravité :

1. **« Deux étudiants d'EPITA »** (`about-intro.tsx:61-63`) — tueur de crédibilité majeur pour une cible premium. Signal « projet d'école ».
2. **« Notre stack »** (`about-intro.tsx:115-120`) — listing de technologies. Aucun fondateur de PME n'achète une stack.
3. **Aucune section « Pour qui c'est »** — le visiteur doit deviner s'il est dans la cible.
4. **Services en carousel** — cache 2/3 du contenu, mauvais pour la conversion.
5. **Témoignages fictifs** non assumés — pire que pas de témoignage.
6. **CTAs sans friction reducer** — rien ne dit ce qui se passe après le clic.

### Pivot marketing : **signalétique / enseignes**

Décision stratégique : verticaliser le positionnement sur les enseignistes / fabricants de signalétique. Plus personne ne fait ça en France, marché orphelin.

### Persona proposé : « Fabrice »

| Attribut | Profil |
|---|---|
| Âge | 45-60 ans |
| Taille | 5-25 salariés |
| CA | 700 k€ - 3 M€ |
| Localisation | Région, zones commerciales |
| Clients B2B | Commerces, restaurants, concessions, collectivités |
| Outils actuels | Excel, Illustrator, WhatsApp, tableau blanc, Sage/EBP |
| Frustration n°1 | *« Je perds du temps sur des tâches admin non facturables »* |

### Données terrain utilisées

Fichier `Analyse Signalétique & Enseignes 33ef5cd3b59b803a88b4e0f8403ecd56.md` fourni par Antoine, contenant une analyse des 5 premières étapes du funnel (demande, déplacement, conception, devis, BAT). **Chiffre clé découvert** :

> *« 5-15 devis/semaine à 2h de temps moyen, conversion 20-35 %. »*

Calcul dérivé : **~22 800 €/an perdus sur des devis qui ne seront jamais signés** pour une PME d'enseignistes moyenne. Ce chiffre devient le candidat H1 de la landing.

### Prompt de recherche avancée

Créé `Prompt Recherche Avancée - Enseignistes.md` à la racine — un brief de recherche structuré pour combler les trous (étapes 6-10 du workflow, market sizing, concurrence logicielle, persona décisionnaire, verbatims). Destiné à être collé dans un LLM avec browsing ou confié à un analyste humain.

Le prompt inclut :

- 7 thèmes d'investigation
- Sources à privilégier (INSEE, Pappers, FFSF, G2, Capterra, presse pro type Graphiline)
- Gabarit markdown du rapport attendu en 10 sections
- Anti-patterns (ne pas inventer de chiffres, ne pas confondre avec l'imprimerie, ne pas céder au biais de confirmation)
- Critères de qualité
- Estimation d'effort : 8 à 20 heures

---

## Fichiers créés

### Contenu

- `content/projects/hollyfork.mdx`
- `content/projects/toploisirs.mdx`
- `Analyse Signalétique & Enseignes 33ef5cd3b59b803a88b4e0f8403ecd56.md` *(fourni par Antoine)*
- `Prompt Recherche Avancée - Enseignistes.md`
- `docs/session-log-2026-04-14.md` *(ce fichier)*

### Composants

- `src/components/sections/testimonials.tsx`
- `src/components/sections/glow-backdrop.tsx` *(client component — blobs animés)*
- `src/components/sections/reveal.tsx` *(client component — fade-up au scroll)*
- `src/components/sections/test-banner.tsx`

### Pages services-test

- `src/app/services-test/page.tsx`
- `src/app/services-test/a-douleur/page.tsx`
- `src/app/services-test/b-deroule/page.tsx`
- `src/app/services-test/c-simulateur/page.tsx`
- `src/app/services-test/c-simulateur/simulator.tsx`
- `src/app/services-test/d-offre-unique/page.tsx`

### Images

- `public/toploisirs/image-01.png`
- `public/toploisirs/image-02.png`

---

## Fichiers modifiés

- `src/app/page.tsx` — ajout `<Testimonials />`
- `src/app/services/page.tsx` — refacto + retrait prix
- `src/app/about/page.tsx` — David Mvoula restauré
- `src/components/sections/about-intro.tsx` — David Mvoula restauré + stats reformulées
- `src/components/sections/services.tsx` — retrait prix (champ + rendu)
- `content/projects/toploisirs.mdx` — date Mars 2026, images image-01/02 seulement, tags resserrés
- `content/projects/hollyfork.mdx` — tags resserrés

---

## Fichiers supprimés

- `content/projects/cabinet-comptable.mdx`
- `content/projects/agence-immobiliere.mdx`
- `public/hollyfork/map.png` *(2.7 MB)*
- `public/hollyfork/bg-first.png` *(1.7 MB)*
- `public/hollyfork/carte-02.png`
- `public/hollyfork/popover.png`
- `public/toploisirs/materiel.png`
- `public/toploisirs/planning-moniteurs.png`
- `public/toploisirs/reservations-groupes.png`
- `public/toploisirs/site-activites.png`
- `public/toploisirs/site-home.png`

---

## Commits créés pendant la session

```
c1f4649  Replace case studies with HollyFork and Top Loisirs
44f9d65  Add testimonials, David Mvoula, services-test variants and wow primitives
```

Les modifications de phase 4 (refacto `/services`, retrait total des prix) et phase 5 (prompt de recherche + ce log) restent à committer.

---

## Décisions importantes prises

1. **Séparation dev / test** — les 4 variantes `/services-test/*` sont volontairement isolées de `/services` pour permettre un A/B test manuel sans toucher à la prod.
2. **Pas de prix affichés** — choix explicite de renvoyer tous les tarifs à un appel de cadrage gratuit, avec un discours cohérent sur toutes les pages (« pas de grille qui ment »).
3. **Témoignages fictifs assumés temporairement** — utilisés pour le design et les screenshots LinkedIn en attendant de vrais retours de fondateurs HollyFork et Top Loisirs.
4. **Pivot signalétique** — décision de verticaliser la cible sur les enseignistes français. N'implique pas encore de modification de la home actuelle — la landing verticale sera construite séparément après validation terrain.
5. **Ne pas committer `.claude/`** — le dossier contient des settings locaux (`settings.local.json`) qui n'ont pas à être sur GitHub.

---

## À faire (reste en suspens)

### 🔴 Critique

- [ ] **Brancher le formulaire de contact** sur un vrai endpoint (Resend, Formspree ou API route). Actuellement `setTimeout` + TODO en production.
- [ ] **Faire 3 appels de validation** avec de vrais fondateurs d'entreprises d'enseignes avant d'écrire la landing verticale.
- [ ] **Lancer le prompt de recherche avancée** dans un LLM avec browsing pour combler les trous (étapes 6-10 du workflow enseignistes).

### 🟡 Important

- [ ] **Commit + push** des changements de phase 4 et 5.
- [ ] **Supprimer les routes mortes** `/careers`, `/projects/[slug]`, `/services/[slug]`.
- [ ] **Trouver une vraie photo de David Mvoula** et la déposer dans `public/people/davidmvoula.png`, puis mettre à jour `about-intro.tsx` et `about/page.tsx`.
- [ ] **Décrocher un premier client enseigniste en pilote** à tarif préférentiel en échange d'un droit de citer nom, logo, témoignage vidéo et case study.

### 🟢 Confort

- [ ] Brancher Plausible ou Vercel Analytics.
- [ ] Ajouter `src/app/sitemap.ts`, `public/robots.txt`, JSON-LD Organization.
- [ ] Convertir les PNG HollyFork restants en WebP (ils sont déjà sous 1.1 MB, pas critique).
- [ ] Ajouter metadata sur la page `/contact`.
- [ ] Rechercher un outil de conversion d'images (installer `sharp` si nécessaire).

---

## Question ouverte pour la prochaine session

**Modèle commercial à trancher : dev sur mesure à 15-50 k€ par projet, ou produit SaaS vertical à 200-800 €/mois ?**

C'est la décision qui conditionne toute la landing verticale enseignistes. Recommandation courante : commencer par le sur mesure (modèle B), glisser vers le SaaS (modèle A) après 3-4 projets similaires livrés chez des enseignistes.
