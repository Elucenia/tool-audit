<!-- ELUCENIA technical documentation · audit · en · no clinical/professional/rights approval -->

# AUDIT (Alcohol Use Disorders Identification Test)

[conditions, sources and permissions](https://elucenia.org/en/tools/audit)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### 1. How often do you drink alcoholic beverages?

`q1`

- `0` — Never
- `1` — Monthly or less
- `2` — 2 to 4 times per month
- `3` — 2 to 3 times per week
- `4` — 4 or more times per week

### 2. On a typical drinking day, how many standard drinks do you consume? In this edition, each standard drink contains 10 g of ethanol.

`q2`

- `0` — 1 or 2
- `1` — 3 or 4
- `2` — 5 or 6
- `3` — 7 to 9
- `4` — 10 or more

### 3. How frequently do you drink at least six standard drinks on one occasion? In this edition, each standard drink contains 10 g of ethanol.

`q3`

- `0` — Never
- `1` — Less than once a month
- `2` — Monthly
- `3` — Weekly
- `4` — Every day or almost every day

### 4. How often in the past 12 months have you felt unable to stop drinking once you had started?

`q4`

- `0` — Never
- `1` — Less than once a month
- `2` — Monthly
- `3` — Weekly
- `4` — Every day or almost every day

### 5. How often in the last 12 months have you been unable to do what was expected of you because of alcohol?

`q5`

- `0` — Never
- `1` — Less than once a month
- `2` — Monthly
- `3` — Weekly
- `4` — Every day or almost every day

### 6. How often in the past 12 months have you needed a morning drink to feel well through the day after drinking heavily the day before?

`q6`

- `0` — Never
- `1` — Less than once a month
- `2` — Monthly
- `3` — Weekly
- `4` — Every day or almost every day

### 7. How often in the past 12 months have you felt guilty or remorseful after drinking?

`q7`

- `0` — Never
- `1` — Less than once a month
- `2` — Monthly
- `3` — Weekly
- `4` — Every day or almost every day

### 8. How often in the past 12 months have you been unable to remember what happened because of drinking?

`q8`

- `0` — Never
- `1` — Less than once a month
- `2` — Monthly
- `3` — Weekly
- `4` — Every day or almost every day

### 9. Have you ever injured or harmed yourself or someone else after drinking?

`q9`

- `0` — No
- `2` — Yes, but not in the past 12 months
- `4` — Yes, in the past 12 months

### 10. Has a relative, friend or doctor ever been concerned about your drinking or suggested that you stop?

`q10`

- `0` — No
- `2` — Yes, but not in the past 12 months
- `4` — Yes, in the past 12 months

## Method edition

AUDIT: WHO, 2nd edition (2001); items 2 and 3 use a standard drink containing 10 g of ethanol; ELUCENIA interface translation.

## Documented formula

Items 1–8: 0–4 points. Items 9 and 10: 0, 2 or 4 points. Total: 0–40.

Score ≥ 8 indicates hazardous or harmful use and possible dependence. Points on items 4–6 suggest dependence; on items 7–10, existing harm.

## Limits and population

A screening instrument for hazardous or harmful alcohol consumption, studied in primary care. The total alone does not establish dependence. In this implementation, items 2 and 3 use the WHO 2001 edition and a standard drink containing 10 g of ethanol; consumption must be converted to this reference. National serving sizes are not automatically equivalent. The wording and population adaptations in each language require independent review.

## References

- [Saunders JB et al. Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO Collaborative Project on Early Detection of Persons with Harmful Alcohol Consumption-II. Addiction, 1993.](https://doi.org/10.1111/j.1360-0443.1993.tb02093.x)

- [Lima CT et al. Concurrent and construct validity of the AUDIT in an urban Brazilian sample. Alcohol Alcohol, 2005.](https://doi.org/10.1093/alcalc/agh202)

- [Babor TF et al. AUDIT: the Alcohol Use Disorders Identification Test. Guidelines for use in primary care. 2nd ed. World Health Organization, 2001.](https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Zone I (0 to 7): low-risk use

Health education on alcohol.


### 2

Zone II (8 to 15): hazardous use

Basic guidance (brief intervention) on reducing consumption.


### 3

Zone III (16 to 19): harmful use

Brief intervention with counseling and ongoing follow-up.


### 4

Zone IV (20 to 40): probable dependence

Refer to a specialized service (CAPS AD or specialist) for diagnostic evaluation and treatment.

