# Prompt de recherche avancée — Marché & Opérations des Enseignistes Français

> À coller dans un LLM avec accès web (Claude, ChatGPT avec browsing, Perplexity Pro) ou à confier à un analyste humain. Le but est de combler les trous dans notre analyse interne avant d'écrire la landing page et de figer l'offre.

---

## 🎯 Rôle

Tu es un **analyste marché senior spécialisé en B2B vertical SaaS**, avec 10 ans d'expérience dans l'étude de marchés fragmentés de PME industrielles et artisanales en France. Tu connais les méthodes de market sizing bottom-up, tu sais lire des bilans simplifiés, et tu as déjà analysé des marchés comme l'imprimerie, la menuiserie, l'ébénisterie ou la plomberie dans une logique de verticalisation logicielle.

## 🧭 Mission

Produire un rapport de recherche exploitable pour **Studio Cran**, un studio de deux fondateurs qui conçoit des logiciels sur mesure pour PME françaises et envisage de **verticaliser son offre sur les enseignistes et fabricants de signalétique**.

Le rapport doit répondre à **4 questions de décision** :

1. **Est-ce que ce marché justifie une verticalisation ?** (taille, dispersion, maturité numérique, concurrence)
2. **Quelles sont les vraies douleurs opérationnelles** que nos 5 étapes de funnel déjà analysées ne couvrent pas ?
3. **Quel est le bon modèle commercial** (dev sur mesure à 15-50 k€ par projet vs produit SaaS à 200-800 €/mois) ?
4. **Quels sont les 3-4 angles d'accroche** qui feront qu'un dirigeant d'entreprise d'enseignes clique sur « réserver un diagnostic » en 10 secondes ?

## 📂 Ce qu'on sait déjà

### Workflow analysé en interne (5 premières étapes seulement)

1. **Prise de demande** — commercial qualifie (souhait, lieu, budget, délai). Pain : beaucoup de temps perdu sur des demandes qui n'aboutissent pas.
2. **Déplacement sur site** — commercial mesure façade, vérifie contraintes (nacelle, électricité, nature du mur). Pain : déplacements longs pour dossiers qui ne deviennent pas chantier.
3. **Conception & maquette** — souvent pas de graphiste dédié. Le client envoie son logo, il est vectorisé puis placé sur photo de façade dans Illustrator ou CorelDRAW.
4. **Chiffrage & devis** — basé sur matières, temps de production, nacelle, marge. **70 % utilisent Excel ou ERP type Sage / EBP.** Devis long à faire (2h en moyenne), pas de relance auto, taux de conversion 20-35 %, volume 5-15 devis/semaine.
5. **Validation du BAT** — allers-retours fréquents avec le client (« logo plus gros », « changer police », « en bleu »). Chaque itération coûte du temps au graphiste.

### Ce qu'on ignore totalement

- **Étapes 6-10** du process (commande matière, production atelier, pose sur site, SAV, dossiers administratifs)
- **Structure économique** d'une PME d'enseigniste (CA typique, marge, répartition CA/pose/maintenance)
- **Paysage concurrentiel logiciel** (quels outils existent déjà spécifiquement pour les enseignistes en France et ailleurs ?)
- **Persona décisionnaire** (qui achète, qui utilise, qui signe ? patron seul, duo patron+dircom, ou trio ?)
- **Cycle de vente** (combien de temps pour signer un projet logiciel dans ce secteur ?)
- **Budget type** (qu'est-ce qu'un enseigniste est prêt à dépenser en logiciel / an ?)
- **Contraintes réglementaires** (DP mairie, RE2020, normes lumineuses LED, sécurité des installateurs)

---

## 🔍 Questions d'investigation (organisées par thème)

### Thème 1 — Taille et structure du marché français

- Combien d'entreprises de signalétique / enseignes existent en France ? (sources : INSEE, Infogreffe, annuaires pros type Kompass, fédérations professionnelles)
- Quel est leur code NAF / APE dominant ? (18.13Z, 32.99Z, 25.61Z, 43.99C ? À confirmer)
- Quelle est la **fédération professionnelle** de référence ? (FFSF ? SYNAFEL ? Autre ?)
- Répartition par taille : combien de micro-entreprises, de TPE (1-10), de PME (10-50), d'ETI (50+) ?
- CA médian et médian des marges nettes
- Concentration géographique ou dispersion ?
- Tendances du marché : croissance, consolidation, difficultés post-Covid, impact du télétravail sur la demande d'enseignes de bureau

### Thème 2 — Opérations post-devis (les étapes qui manquent)

Pour chaque étape ci-dessous, documenter : **qui fait quoi, avec quels outils, combien de temps, quelles erreurs coûtent cher**.

#### 2.1 Commande matière première
- Quels matériaux typiques (PVC, alu, acrylique, vinyle, LED, bois, composite aluminium) ?
- Qui gère le stock ? Comment ?
- Délais fournisseurs typiques pour les matières les plus courantes ?
- Fréquence des ruptures de stock qui bloquent un chantier ?

#### 2.2 Production atelier
- Taille typique d'un atelier (nb machines, nb personnes, surface) ?
- Machines courantes (découpe laser, CNC, plotter, imprimante grand format UV, presse thermoformage) ?
- Comment le planning atelier est-il géré au quotidien ? (tableau blanc, Excel, ERP, rien ?)
- Comment les plans techniques passent-ils du bureau d'études à l'atelier ?
- Délais moyens de production pour une enseigne type (plaque alu, caisson lumineux, lettres relief) ?

#### 2.3 Pose et installation sur site
- Taille typique d'une équipe pose (2 personnes ? 3 ?)
- Matériel spécialisé nécessaire (nacelle, échafaudage, palan, fourgon équipé) ?
- Qui coordonne les équipes pose ? Comment ?
- Comment les plans techniques et photos arrivent-ils aux poseurs sur site ?
- Part de la pose sous-traitée vs réalisée en interne ?
- Durée moyenne d'un chantier de pose ?
- Principales sources d'erreur ou de reprise sur site ?

#### 2.4 SAV / maintenance
- Part du CA qui vient de la maintenance récurrente ?
- Types d'interventions les plus fréquents (LED en panne, enseigne abîmée, changement graphique, nettoyage) ?
- Comment les interventions SAV sont-elles tracées aujourd'hui ?
- Existe-t-il des contrats de maintenance type ?

#### 2.5 Dossiers administratifs
- Déclaration préalable (DP) en mairie : quand est-elle obligatoire ? Délais types ?
- Autorisation d'urbanisme pour les enseignes extérieures : process ?
- Règlements locaux sur la publicité extérieure (RLP) : impact sur le métier ?
- Qui s'occupe des dossiers ? (patron, assistant, commercial, cabinet spécialisé)
- Combien de temps par dossier ?

### Thème 3 — Persona décisionnaire

- **Qui décide d'acheter un logiciel** dans une PME d'enseigniste ? Patron seul ? Couple fondateur ? Dircom ? Chef d'atelier ?
- Âge moyen du décideur et maturité numérique associée ?
- Comment découvrent-ils de nouveaux outils ? (LinkedIn, salons pro, recommandations, Google, presse pro ?)
- Salons pros à surveiller (CS Viscom, Dock B, autres ?)
- Médias pros à lire (Industries Graphiques, Classe Export, Graphiline, News Réso, etc. ?)
- Vocabulaire spécifique utilisé par ce persona (mots qu'il utilise pour parler de ses douleurs ; à documenter verbatim si possible)

### Thème 4 — Concurrence logicielle existante

Lister tous les outils logiciels qui visent ce marché, en France et à l'international. Pour chacun :

- Nom, éditeur, pays d'origine
- Périmètre fonctionnel (juste devis ? full ERP ? juste pose ?)
- Modèle tarifaire (SaaS mensuel ? licence ? projet ?)
- Estimation du prix typique
- Forces / faiblesses identifiables par le site ou des avis
- Positionnement (généraliste artisanal type Batappli vs spécialisé enseignes)

Candidats à investiguer au minimum (non exhaustif) :

- **Généralistes PME artisanales** : Batappli, Optim-BTP, Codial, Ciel Artisans
- **Imprimerie / signalétique internationaux** : Printavo, Shopmonkey, OnPrintShop, eProductivity Software (iWay Prime)
- **ERPs métiers** : Sage 100 avec modules custom, EBP avec personnalisation
- **Outils généralistes utilisés en contournement** : Odoo, Dolibarr, Airtable

Question clé : **existe-t-il un logiciel verticalisé spécifiquement pour enseignistes français aujourd'hui ?** Si oui → qui, combien ça coûte, que manque-t-il. Si non → c'est une validation forte de l'opportunité.

### Thème 5 — Économie d'une PME d'enseigniste

- CA médian d'une PME de 5-15 personnes dans le secteur
- Structure typique : % masse salariale, % matière, % sous-traitance pose, % admin
- Marge nette typique
- Part du temps facturable vs non-facturable chez le commercial / bureau d'études
- Combien dépense typiquement une telle entreprise en logiciel par an (tous outils confondus) ?
- Part du CA allouée à l'outillage logiciel : benchmark avec d'autres PME artisanales ?

### Thème 6 — Contraintes réglementaires et normatives

- Normes d'installation (sécurité, électricité LED, ancrage façade)
- Obligations de formation des poseurs (CACES nacelle, habilitation électrique)
- RGPD sur les photos clients et les données de chantier
- Règlementation spécifique enseignes lumineuses (impact écologique, obligations de coupure nocturne)

### Thème 7 — Angles marketing et vocabulaire

- Quels sont les 5 à 10 **verbatims typiques** d'un dirigeant d'entreprise d'enseignes qui exprime une frustration sur son outillage actuel ? (interviews, forums pro, LinkedIn, articles)
- Quels sont les 3 à 5 **chiffres chocs** disponibles publiquement sur l'inefficience opérationnelle du secteur ?
- Quels sont les **angles d'accroche** qui ont marché auprès de PME similaires (imprimerie, menuiserie) pour vendre un outil logiciel ?

---

## 📦 Livrables attendus

Le rapport final doit contenir, dans cet ordre :

1. **Executive summary** (1 page max) — réponse aux 4 questions de décision
2. **Market sizing** — taille du marché, répartition, tendances, sources chiffrées
3. **Workflow opérationnel étendu** — les étapes 6-10 documentées avec le même niveau de détail que les 5 déjà analysées
4. **Économie d'une PME d'enseigniste** — structure financière type
5. **Persona détaillé du décideur** — fiche « Fabrice » avec toutes les infos collectées
6. **Analyse concurrentielle** — tableau comparatif des outils existants, verdict sur la fenêtre d'opportunité
7. **Verbatims et vocabulaire** — banque de phrases utilisables directement dans la copy marketing, classées par thème (douleur, frustration, désir, objection)
8. **Recommandations stratégiques** — pour chacune des 4 questions de décision, une réponse argumentée avec un niveau de confiance (élevé / moyen / faible) et les données manquantes à aller chercher
9. **Sources** — bibliographie complète avec URLs et dates de consultation
10. **Annexes** — questions qui n'ont pas trouvé de réponse et qui nécessitent des interviews primaires

### Format

- Markdown structuré avec tables, listes, citations
- Chaque affirmation quantitative **doit** être sourcée (note de bas de page ou lien direct)
- Préfère les fourchettes honnêtes aux chiffres précis non sourcés
- Signale explicitement les zones où tu as dû extrapoler vs les zones où tu as une donnée directe

---

## 🔎 Sources à privilégier

### Données quantitatives
- **INSEE** — ESANE, SINE, répertoire SIRENE
- **Infogreffe** / **Pappers** — pour tirer des bilans de PME témoins
- **Fédérations professionnelles** — FFSF (Fédération Française des Signaleurs Fabricants), Synafel, Proformat Pro
- **BPI France** — études sectorielles PME
- **Xerfi** — études sectorielles (payant mais résumés gratuits)

### Données qualitatives et verbatims
- **LinkedIn** — posts et commentaires de dirigeants d'entreprises d'enseignes
- **Groupes Facebook** pro (il y en a pour tous les métiers artisanaux)
- **Forums** type Usinage.com, section impression/découpe
- **Presse pro** — Industries Graphiques, Graphiline, News Réso, Actu Grand Format, Caractère, Print6
- **Salons** — programmes et retours presse du salon **C!Print Lyon** (référence du secteur), **Viscom Paris**, **FESPA**

### Concurrence logicielle
- **G2** et **Capterra** — recherches « print management », « sign shop software », « signage ERP »
- **Product Hunt** — recherche « signage », « sign shop »
- **Sites fondateurs** directement (les éditeurs mentionnés plus haut)

### Réglementaire
- **Code de l'urbanisme** — articles sur enseignes et pré-enseignes
- **Ministère de la Transition écologique** — règles RLP
- **INRS** — sécurité des installateurs

---

## ⚠️ Anti-patterns à éviter

- ❌ **Ne pas** inventer de chiffres pour combler les trous. Si une donnée manque, écrire « donnée non trouvée — interview primaire nécessaire ».
- ❌ **Ne pas** confondre le marché de la signalétique **industrielle / sécurité / routière** (très gros contrats publics, pas notre cible) avec le marché de la **signalétique commerciale** (enseignes de boutique, façades, totems de zone commerciale — notre cible).
- ❌ **Ne pas** se contenter de sources en anglais sur des marchés US. Les usages, les structures d'entreprise, les prix et les outils sont différents en France.
- ❌ **Ne pas** oublier que « enseignistes » ≠ « imprimeurs grand format ». Il y a chevauchement mais aussi beaucoup de différences (pose, permis mairie, maintenance). Si le rapport parle plus d'imprimerie que d'enseignes, il a raté la cible.
- ❌ **Ne pas** produire de slogan marketing ou de copy. Le rapport est un document de recherche, pas une landing page. La copy c'est le livrable d'après.
- ❌ **Ne pas** céder au biais de confirmation. Si le marché est saturé ou si la douleur n'est pas si grosse, le dire clairement. On veut une décision informée, pas un rapport qui nous conforte.

---

## ✅ Critères de qualité d'un bon rapport

Un rapport excellent est un rapport qui permet à Studio Cran de :

1. Prendre la **décision go/no-go** sur la verticalisation en une lecture
2. **Écrire la landing page** directement en piochant dans les verbatims et les chiffres du rapport
3. **Préparer les 3 premiers appels de vente** en connaissant mieux le métier que 80 % des commerciaux concurrents
4. **Tarifer l'offre** avec un ancrage crédible (pas au doigt mouillé)
5. **Identifier le premier client pilote** (profil type, canaux de prospection)

Si le rapport ne permet pas ces 5 choses, il est insuffisant.

---

## 🗂️ Structure de réponse attendue (gabarit)

```markdown
# Rapport de recherche — Marché des enseignistes français

## Executive summary
- Go/no-go : [recommandation + niveau de confiance]
- Top 3 douleurs opérationnelles découvertes
- Modèle commercial recommandé (sur mesure / SaaS / hybride)
- Premier persona à cibler en priorité

## 1. Market sizing
### 1.1 Nombre d'entreprises en France
### 1.2 Répartition par taille et CA
### 1.3 Dynamique (croissance, concentration, menaces)
### 1.4 Fédérations et représentation

## 2. Workflow opérationnel complet
### 2.1 Prise de demande *(rappel données internes)*
### 2.2 Déplacement site *(rappel données internes)*
### 2.3 Conception & BAT *(rappel données internes)*
### 2.4 Devis *(rappel données internes)*
### 2.5 Validation BAT *(rappel données internes)*
### 2.6 Commande matière *(nouveau)*
### 2.7 Production atelier *(nouveau)*
### 2.8 Pose / installation *(nouveau)*
### 2.9 SAV / maintenance *(nouveau)*
### 2.10 Dossiers administratifs *(nouveau)*

## 3. Économie d'une PME d'enseigniste
### 3.1 CA typique par tranche de taille
### 3.2 Structure de coûts
### 3.3 Marge nette
### 3.4 Dépenses logicielles actuelles

## 4. Persona décisionnaire
### 4.1 Profil type
### 4.2 Process de décision d'achat
### 4.3 Canaux de découverte
### 4.4 Vocabulaire et verbatims

## 5. Analyse concurrentielle
### 5.1 Tableau des outils existants
### 5.2 Fenêtre d'opportunité
### 5.3 Risques concurrentiels

## 6. Angles marketing
### 6.1 Douleurs prioritaires
### 6.2 Chiffres chocs
### 6.3 Verbatims exploitables
### 6.4 Angles d'accroche recommandés

## 7. Contraintes réglementaires

## 8. Recommandations stratégiques
### 8.1 Go / no-go
### 8.2 Modèle commercial
### 8.3 Plan d'action (90 jours)
### 8.4 Données manquantes nécessitant interviews primaires

## 9. Sources

## 10. Annexes
```

---

## ⏱️ Estimation d'effort

Ce rapport demande entre **8 et 20 heures** de recherche sérieuse selon la qualité attendue. Si le temps est contraint, prioriser dans cet ordre : **Thème 2 (opérations) → Thème 4 (concurrence) → Thème 1 (market sizing) → Thème 7 (verbatims) → le reste**.

---

## 🏁 Instruction finale

Commence par **m'indiquer 3 à 5 questions de clarification** si tu en as avant de démarrer. Si tu n'en as pas, attaque directement le Thème 2 (workflow opérationnel étendu) qui est la zone où le retour sur investissement de la recherche est le plus fort.

Livre le rapport en **un seul fichier markdown structuré** selon le gabarit ci-dessus.
