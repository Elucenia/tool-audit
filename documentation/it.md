<!-- ELUCENIA technical documentation · audit · it · no clinical/professional/rights approval -->

# AUDIT (test di identificazione dei disturbi da uso di alcol)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/audit)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### 1. Con quale frequenza consuma bevande alcoliche?

`q1`

- `0` — Mai
- `1` — Una volta al mese o meno
- `2` — Da 2 a 4 volte al mese
- `3` — Da 2 a 3 volte alla settimana
- `4` — 4 o più volte alla settimana

### 2. In una giornata abituale in cui beve, quante unità alcoliche standard consuma? In questa edizione, ciascuna unità alcolica standard contiene 10 g di etanolo.

`q2`

- `0` — 1 o 2
- `1` — 3 o 4
- `2` — 5 o 6
- `3` — da 7 a 9
- `4` — 10 o più

### 3. Con quale frequenza beve sei o più unità alcoliche standard in una sola occasione? In questa edizione, ciascuna unità alcolica standard contiene 10 g di etanolo.

`q3`

- `0` — Mai
- `1` — Meno di una volta al mese
- `2` — Mensilmente
- `3` — Settimanalmente
- `4` — Tutti o quasi tutti i giorni

### 4. Quante volte negli ultimi 12 mesi ha sentito di non riuscire a smettere di bere una volta iniziato?

`q4`

- `0` — Mai
- `1` — Meno di una volta al mese
- `2` — Mensilmente
- `3` — Settimanalmente
- `4` — Tutti o quasi tutti i giorni

### 5. Quante volte negli ultimi 12 mesi non è riuscito a fare ciò che ci si aspettava da lei a causa dell’alcol?

`q5`

- `0` — Mai
- `1` — Meno di una volta al mese
- `2` — Mensilmente
- `3` — Settimanalmente
- `4` — Tutti o quasi tutti i giorni

### 6. Quante volte negli ultimi 12 mesi ha avuto bisogno di bere al mattino per sentirsi bene durante il giorno dopo aver bevuto molto il giorno prima?

`q6`

- `0` — Mai
- `1` — Meno di una volta al mese
- `2` — Mensilmente
- `3` — Settimanalmente
- `4` — Tutti o quasi tutti i giorni

### 7. Quante volte negli ultimi 12 mesi si è sentito in colpa o ha provato rimorso dopo aver bevuto?

`q7`

- `0` — Mai
- `1` — Meno di una volta al mese
- `2` — Mensilmente
- `3` — Settimanalmente
- `4` — Tutti o quasi tutti i giorni

### 8. Quante volte negli ultimi 12 mesi non è riuscito a ricordare ciò che era successo a causa dell’alcol?

`q8`

- `0` — Mai
- `1` — Meno di una volta al mese
- `2` — Mensilmente
- `3` — Settimanalmente
- `4` — Tutti o quasi tutti i giorni

### 9. Ha mai causato lesioni o danni a sé stesso o ad altre persone dopo aver bevuto?

`q9`

- `0` — No
- `2` — Sì, ma non negli ultimi 12 mesi
- `4` — Sì, negli ultimi 12 mesi

### 10. Un familiare, un amico o un medico si è mai preoccupato del suo consumo di alcol o le ha suggerito di smettere?

`q10`

- `0` — No
- `2` — Sì, ma non negli ultimi 12 mesi
- `4` — Sì, negli ultimi 12 mesi

## Edizione del metodo

AUDIT: OMS, 2ª edizione (2001); gli item 2 e 3 utilizzano un’unità alcolica standard contenente 10 g di etanolo; traduzione dell’interfaccia ELUCENIA.

## Formula documentata

Item 1–8: 0–4 punti. Item 9 e 10: 0, 2 o 4 punti. Totale: 0–40.

Punteggio ≥ 8 indica consumo rischioso o dannoso e possibile dipendenza. Punti negli item 4–6 suggeriscono dipendenza; 7–10, danno già presente.

## Limiti e popolazione

Strumento di screening del consumo alcolico rischioso o dannoso, studiato nell’assistenza primaria. La somma, da sola, non stabilisce una dipendenza. In questa implementazione, gli item 2 e 3 utilizzano l’edizione OMS 2001 e un’unità alcolica standard contenente 10 g di etanolo; il consumo deve essere convertito a questo riferimento. Le porzioni nazionali non sono automaticamente equivalenti. La formulazione e gli adattamenti alle popolazioni in ciascuna lingua richiedono una revisione indipendente.

## Riferimenti

- [Saunders JB et al. Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO Collaborative Project on Early Detection of Persons with Harmful Alcohol Consumption-II. Addiction, 1993.](https://doi.org/10.1111/j.1360-0443.1993.tb02093.x)

- [Lima CT et al. Concurrent and construct validity of the AUDIT in an urban Brazilian sample. Alcohol Alcohol, 2005.](https://doi.org/10.1093/alcalc/agh202)

- [Babor TF et al. AUDIT: the Alcohol Use Disorders Identification Test. Guidelines for use in primary care. 2nd ed. World Health Organization, 2001.](https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
