# Widget « Édition d'attributs en lot » pour Experience Builder

Widget personnalisé pour ArcGIS Experience Builder (Enterprise 11.3 / ExB 1.13) permettant :

- de **sélectionner des entités** (points, lignes, polygones) sur la carte avec les outils Rectangle, Polygone, Lasso ou Point ;
- de **choisir une ou plusieurs couches** parmi les couches éditables de la carte ;
- d'**ajouter un ou plusieurs champs** à modifier en lot ;
- de **respecter les domaines** des champs : domaine `coded-value` → liste déroulante, `range` → champ numérique borné, sinon saisie libre adaptée au type (entier, double, date, texte) ;
- d'**appliquer les modifications** via `applyEdits` du service d'entités.

## Arborescence

```
bulk-attribute-editor/
├── manifest.json
├── config.json
├── icon.svg
└── src/
    ├── config.ts
    ├── runtime/
    │   ├── widget.tsx
    │   └── translations/default.ts
    └── setting/
        ├── setting.tsx
        └── translations/default.ts
```

## Installation locale (développeur)

1. Décompresser/copier le dossier `bulk-attribute-editor` dans :
   ```
   <DOSSIER_EXB_DEV>/client/your-extensions/widgets/bulk-attribute-editor
   ```
   (où `<DOSSIER_EXB_DEV>` est l'édition « Developer » de Experience Builder téléchargée depuis [developers.arcgis.com](https://developers.arcgis.com/experience-builder/)).

2. Lancer le client et le server de développement :
   ```powershell
   cd <DOSSIER_EXB_DEV>/server
   npm start
   # autre terminal
   cd <DOSSIER_EXB_DEV>/client
   npm start
   ```

3. Ouvrir `https://localhost:3001/`. Le widget apparaît sous l'onglet **Custom** (Personnalisé) lors de la création d'une expérience.

## Publication dans ArcGIS Enterprise Portal 11.3

Sur Enterprise, les widgets personnalisés sont déployés côté serveur dans Experience Builder.

1. **Arrêter** le service ArcGIS Experience Builder sur la machine Portal :
   - Services Windows → `ArcGIS Experience Builder` → Arrêter.

2. **Copier** le dossier `bulk-attribute-editor` (avec le code TypeScript compilé — voir étape 4) dans :
   ```
   C:\Program Files\ArcGIS\ExperienceBuilder\server\public\widgets\
   ```
   (chemin par défaut sous Windows ; ajustez si vous avez installé ailleurs).

   > Important : Experience Builder Enterprise charge les widgets **déjà compilés**. Vous devez livrer le résultat du build, pas les fichiers `.tsx` source.

3. **Compiler** le widget avant copie. Depuis l'édition Developer :
   ```powershell
   cd <DOSSIER_EXB_DEV>/client
   npm run build:prod
   ```
   La sortie compilée se trouve dans `client/dist/widgets/bulk-attribute-editor/`. C'est ce dossier-là qu'il faut copier vers le serveur Portal.

4. **Redémarrer** le service `ArcGIS Experience Builder`.

5. (Optionnel) Vider le cache navigateur, puis ouvrir Experience Builder via le Portal :
   ```
   https://<votre-portal>/portal/apps/experiencebuilder/
   ```

## Utilisation dans une expérience

1. Ouvrir votre expérience existante (celle avec l'identifiant visible dans votre capture).
2. Bouton **+ Insérer un widget** → onglet **Personnalisé** → glisser **Édition d'attributs en lot** sur la page (à côté ou au-dessus de votre Map widget).
3. Dans le panneau de droite **Contenu**, section **Carte source**, cocher le widget **Map** que vous utilisez.
4. **Enregistrer**, puis **Publier** l'expérience (bouton en haut à droite — votre expérience est encore en *Brouillon*).

## Utilisation dans l'application

1. Choisir l'**outil de sélection** (Rectangle/Polygone/Lasso/Point) et cocher les couches concernées.
2. Cliquer sur **Outil de sélection** puis dessiner sur la carte → les entités intersectées sont mises en surbrillance.
3. **+ Ajouter un champ** → choisir la couche, puis le champ ; saisir la nouvelle valeur (la liste déroulante des codes apparaît automatiquement si le champ a un domaine).
4. Ajouter autant de champs que voulu (sur la même couche ou sur d'autres couches sélectionnées).
5. **Appliquer les modifications** → confirmation, puis exécution. Un message de succès affiche le nombre d'entités mises à jour.

## Pré-requis côté service

- Les couches doivent être **éditables** (capability `Update`) et l'utilisateur connecté doit avoir les droits d'édition.
- Pour respecter les domaines, ils doivent être définis sur le champ au niveau du **service d'entités** (pas seulement dans la carte web).
- Si le service exige le contrôle de version (branched), ouvrez une session d'édition côté carte (le widget Map gère cela par sa configuration habituelle).

## Limitations connues

- Les champs `GlobalID` et `OBJECTID` sont volontairement masqués de la liste.
- Pour les très grosses sélections (> 1000 entités), `applyEdits` peut être lent ; envisagez plusieurs lots.
- Les sous-types ne sont pas (encore) gérés comme un sélecteur dédié — le widget utilise le domaine effectif retourné par le service pour le champ.
