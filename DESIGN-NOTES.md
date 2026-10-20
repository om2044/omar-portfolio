# Refonte du portfolio — état au 20 octobre 2026

## Version publique
- URL : https://omaraitbouhmad.pages.dev
- Dépôt : https://github.com/om2044/omar-portfolio
- Commit publié : ce1e537 (main), depuis le dossier voisin omar-portfolio-maintenance.
- Contient les six projets, les huit captures, le CV actualisé et les galeries.
- Maintenance désactivée ; forme 3D supprimée. Publication vérifiée dans le navigateur.

## Refonte data studio
- Dossier de travail : omar-portfolio.
- Accueil éditorial bleu nuit/cyan, accents bleus et corail.
- PipelineLab : trois étapes interactives Collect / Learn / Build, schéma SVG illustratif, navigation clavier et liens directs vers les projets.
- Projets en grille avec captures, filtres par domaine et fiches extensibles, galerie agrandie.
- Sections réordonnées : accueil, projets, présentation, expérience, compétences, communauté, contact.
- Animations d'arrivée, regroupement des points au changement d'étape, survols, apparition des fiches, progression de lecture.
- Pas de rotation 3D ni animation continue. Préférence de mouvement réduit respectée.
- Publication de la refonte autorisée par le propriétaire le 20 octobre 2026 ; cette version remplace la version intermédiaire après succès du déploiement Cloudflare.

## Références étudiées
- https://linear.app/now/behind-the-latest-design-refresh : hiérarchie et priorité au contenu.
- https://vercel.com/design : typographie et détail des interactions.
- https://observablehq.com/plot/ : visualisation exploratoire et interactions liées aux données.
- Visuels et code de la refonte originaux ; aucune copie de leurs assets.

## Reprendre le travail
- Lire AGENTS.md et les guides Next.js installés avant toute modification.
- Fichiers principaux : src/components/hero.tsx, pipeline-lab.tsx, selected-work.tsx, src/app/studio.css.
- Construire : npm run build:pages (webpack, export statique).
- Aperçu : node scripts/preview-pages.mjs ; http://127.0.0.1:4173.
- PORTFOLIO_MAINTENANCE=true réactive la maintenance ; laisser absent pour le portfolio.
- Le dépôt local était sur une ancienne base avant ces travaux : ne pas forcer un push vers main. Pour publier la refonte, repartir du main récent et y reporter les changements vérifiés, ou résoudre la divergence proprement.
- Conserver les limites factuelles : TomatoGrade YOLO uniquement ; NYC Taxi exclu ; économies ECODRIVE estimées ; prototype OCR sur modèle de base, expérimentation LoRA distincte ; pas de métriques de performance inventées.

## Vérifications déjà réalisées
- Build production + TypeScript réussis pour la refonte ; vérification finale après retouches de contraste.
- Bureau et mobile 390 / 320 px sans débordement horizontal.
- Pipeline au clic et avec flèches clavier ; filtres ; fiche projet ; galerie ; Échap et retour du focus.
- Menu mobile ouvert/fermé et Échap.
- Le site public ne contient plus de canvas ni de forme 3D visible.
