<!-- ELUCENIA technical documentation · audit · fr · no clinical/professional/rights approval -->

# AUDIT (test de repérage des troubles liés à l’usage d’alcool)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/audit)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### 1. À quelle fréquence consommez-vous des boissons alcoolisées ?

`q1`

- `0` — Jamais
- `1` — Une fois par mois ou moins
- `2` — De 2 à 4 fois par mois
- `3` — De 2 à 3 fois par semaine
- `4` — 4 fois par semaine ou plus

### 2. Lors d’une journée habituelle où vous buvez, combien de verres standard consommez-vous ? Dans cette édition, chaque verre standard contient 10 g d’éthanol.

`q2`

- `0` — 1 ou 2
- `1` — 3 ou 4
- `2` — 5 ou 6
- `3` — 7 à 9
- `4` — 10 ou plus

### 3. À quelle fréquence buvez-vous au moins six verres standard en une même occasion ? Dans cette édition, chaque verre standard contient 10 g d’éthanol.

`q3`

- `0` — Jamais
- `1` — Moins d’une fois par mois
- `2` — Chaque mois
- `3` — Chaque semaine
- `4` — Tous les jours ou presque

### 4. À quelle fréquence, au cours des 12 derniers mois, avez-vous eu le sentiment de ne pas pouvoir arrêter de boire une fois commencé ?

`q4`

- `0` — Jamais
- `1` — Moins d’une fois par mois
- `2` — Chaque mois
- `3` — Chaque semaine
- `4` — Tous les jours ou presque

### 5. Combien de fois au cours des 12 derniers mois l’alcool vous a-t-il empêché de faire ce que l’on attendait de vous ?

`q5`

- `0` — Jamais
- `1` — Moins d’une fois par mois
- `2` — Chaque mois
- `3` — Chaque semaine
- `4` — Tous les jours ou presque

### 6. À quelle fréquence, au cours des 12 derniers mois, avez-vous eu besoin de boire le matin pour vous sentir bien pendant la journée après avoir beaucoup bu la veille ?

`q6`

- `0` — Jamais
- `1` — Moins d’une fois par mois
- `2` — Chaque mois
- `3` — Chaque semaine
- `4` — Tous les jours ou presque

### 7. À quelle fréquence, au cours des 12 derniers mois, vous êtes-vous senti coupable ou avez-vous eu des remords après avoir bu ?

`q7`

- `0` — Jamais
- `1` — Moins d’une fois par mois
- `2` — Chaque mois
- `3` — Chaque semaine
- `4` — Tous les jours ou presque

### 8. À quelle fréquence, au cours des 12 derniers mois, avez-vous été incapable de vous souvenir de ce qui s’est passé à cause de l’alcool ?

`q8`

- `0` — Jamais
- `1` — Moins d’une fois par mois
- `2` — Chaque mois
- `3` — Chaque semaine
- `4` — Tous les jours ou presque

### 9. Vous est-il déjà arrivé de vous blesser ou de faire du mal à une autre personne après avoir bu ?

`q9`

- `0` — Non
- `2` — Oui, mais pas au cours des 12 derniers mois
- `4` — Oui, au cours des 12 derniers mois

### 10. Un proche, un ami ou un médecin s’est-il déjà inquiété de votre consommation d’alcool ou vous a-t-il suggéré d’arrêter ?

`q10`

- `0` — Non
- `2` — Oui, mais pas au cours des 12 derniers mois
- `4` — Oui, au cours des 12 derniers mois

## Édition de la méthode

AUDIT : OMS, 2e édition (2001) ; les items 2 et 3 utilisent un verre standard contenant 10 g d’éthanol ; traduction de l’interface par ELUCENIA.

## Formule documentée

Items 1–8 : 0–4 points. Items 9 et 10 : 0, 2 ou 4 points. Total : 0–40.

Score ≥ 8 : usage à risque ou nocif et dépendance possible. Les points aux items 4–6 suggèrent une dépendance ; aux items 7–10, des dommages déjà présents.

## Limites et population

Instrument de dépistage de la consommation d’alcool à risque ou nocive, étudié en soins primaires. Le total ne suffit pas à établir une dépendance. Dans cette implémentation, les items 2 et 3 utilisent l’édition OMS 2001 et un verre standard contenant 10 g d’éthanol ; la consommation doit être convertie selon cette référence. Les contenances nationales ne sont pas automatiquement équivalentes. La formulation et les adaptations aux populations dans chaque langue nécessitent une revue indépendante.

## Références

- [Saunders JB et al. Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO Collaborative Project on Early Detection of Persons with Harmful Alcohol Consumption-II. Addiction, 1993.](https://doi.org/10.1111/j.1360-0443.1993.tb02093.x)

- [Lima CT et al. Concurrent and construct validity of the AUDIT in an urban Brazilian sample. Alcohol Alcohol, 2005.](https://doi.org/10.1093/alcalc/agh202)

- [Babor TF et al. AUDIT: the Alcohol Use Disorders Identification Test. Guidelines for use in primary care. 2nd ed. World Health Organization, 2001.](https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
