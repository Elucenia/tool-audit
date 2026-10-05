<!-- ELUCENIA technical documentation · audit · de · no clinical/professional/rights approval -->

# AUDIT (Test zur Erkennung alkoholbezogener Störungen)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/audit)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### 1. Wie häufig trinken Sie alkoholische Getränke?

`q1`

- `0` — Nie
- `1` — Einmal im Monat oder seltener
- `2` — 2- bis 4-mal im Monat
- `3` — 2- bis 3-mal pro Woche
- `4` — 4-mal pro Woche oder häufiger

### 2. Wie viele Standardgetränke konsumieren Sie an einem typischen Tag, an dem Sie Alkohol trinken? In dieser Fassung enthält jedes Standardgetränk 10 g Ethanol.

`q2`

- `0` — 1 oder 2
- `1` — 3 oder 4
- `2` — 5 oder 6
- `3` — 7 bis 9
- `4` — 10 oder mehr

### 3. Wie häufig trinken Sie bei einer Gelegenheit sechs oder mehr Standardgetränke? In dieser Fassung enthält jedes Standardgetränk 10 g Ethanol.

`q3`

- `0` — Nie
- `1` — Seltener als einmal im Monat
- `2` — Monatlich
- `3` — Wöchentlich
- `4` — Jeden oder fast jeden Tag

### 4. Wie häufig hatten Sie in den letzten 12 Monaten das Gefühl, nach Beginn des Trinkens nicht mehr aufhören zu können?

`q4`

- `0` — Nie
- `1` — Seltener als einmal im Monat
- `2` — Monatlich
- `3` — Wöchentlich
- `4` — Jeden oder fast jeden Tag

### 5. Wie häufig konnten Sie in den letzten 12 Monaten wegen Alkohol nicht tun, was von Ihnen erwartet wurde?

`q5`

- `0` — Nie
- `1` — Seltener als einmal im Monat
- `2` — Monatlich
- `3` — Wöchentlich
- `4` — Jeden oder fast jeden Tag

### 6. Wie häufig mussten Sie in den letzten 12 Monaten morgens trinken, um sich nach starkem Alkoholkonsum am Vortag tagsüber wohlzufühlen?

`q6`

- `0` — Nie
- `1` — Seltener als einmal im Monat
- `2` — Monatlich
- `3` — Wöchentlich
- `4` — Jeden oder fast jeden Tag

### 7. Wie häufig hatten Sie in den letzten 12 Monaten nach dem Trinken Schuldgefühle oder Gewissensbisse?

`q7`

- `0` — Nie
- `1` — Seltener als einmal im Monat
- `2` — Monatlich
- `3` — Wöchentlich
- `4` — Jeden oder fast jeden Tag

### 8. Wie häufig konnten Sie sich in den letzten 12 Monaten wegen des Trinkens nicht daran erinnern, was passiert war?

`q8`

- `0` — Nie
- `1` — Seltener als einmal im Monat
- `2` — Monatlich
- `3` — Wöchentlich
- `4` — Jeden oder fast jeden Tag

### 9. Haben Sie nach dem Trinken jemals sich selbst oder eine andere Person verletzt oder geschädigt?

`q9`

- `0` — Nein
- `2` — Ja, aber nicht in den letzten 12 Monaten
- `4` — Ja, in den letzten 12 Monaten

### 10. Hat sich ein Angehöriger, Freund oder Arzt jemals wegen Ihres Trinkens Sorgen gemacht oder Ihnen vorgeschlagen, aufzuhören?

`q10`

- `0` — Nein
- `2` — Ja, aber nicht in den letzten 12 Monaten
- `4` — Ja, in den letzten 12 Monaten

## Fassung der Methode

AUDIT: WHO, 2. Auflage (2001); Items 2 und 3 verwenden ein Standardgetränk mit 10 g Ethanol; Übersetzung der Benutzeroberfläche durch ELUCENIA.

## Dokumentierte Formel

Items 1–8: 0–4 Punkte. Items 9 und 10: 0, 2 oder 4 Punkte. Gesamt: 0–40.

Score ≥ 8 zeigt riskanten oder schädlichen Konsum und mögliche Abhängigkeit. Punkte bei Items 4–6 deuten auf Abhängigkeit, bei 7–10 auf bestehende Schäden.

## Grenzen und Population

Ein in der Primärversorgung untersuchtes Screening-Instrument für riskanten oder schädlichen Alkoholkonsum. Die Summe allein weist keine Abhängigkeit nach. In dieser Implementierung verwenden Items 2 und 3 die WHO-Fassung von 2001 und ein Standardgetränk mit 10 g Ethanol; der Konsum muss in diese Referenzgröße umgerechnet werden. Landesspezifische Portionsgrößen sind nicht automatisch gleichwertig. Formulierungen und Anpassungen an die jeweilige Population in jeder Sprache erfordern eine unabhängige Prüfung.

## Referenzen

- [Saunders JB et al. Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO Collaborative Project on Early Detection of Persons with Harmful Alcohol Consumption-II. Addiction, 1993.](https://doi.org/10.1111/j.1360-0443.1993.tb02093.x)

- [Lima CT et al. Concurrent and construct validity of the AUDIT in an urban Brazilian sample. Alcohol Alcohol, 2005.](https://doi.org/10.1093/alcalc/agh202)

- [Babor TF et al. AUDIT: the Alcohol Use Disorders Identification Test. Guidelines for use in primary care. 2nd ed. World Health Organization, 2001.](https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
