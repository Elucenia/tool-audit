<!-- ELUCENIA technical documentation · audit · es · no clinical/professional/rights approval -->

# AUDIT (test de identificación de trastornos por consumo de alcohol)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/audit)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### 1. ¿Con qué frecuencia consume bebidas alcohólicas?

`q1`

- `0` — Nunca
- `1` — Una vez al mes o menos
- `2` — De 2 a 4 veces al mes
- `3` — De 2 a 3 veces por semana
- `4` — 4 o más veces por semana

### 2. En un día típico en el que bebe, ¿cuántas bebidas estándar consume? En esta edición, cada bebida estándar contiene 10 g de etanol.

`q2`

- `0` — 1 o 2
- `1` — 3 o 4
- `2` — 5 o 6
- `3` — 7 a 9
- `4` — 10 o más

### 3. ¿Con qué frecuencia bebe seis o más bebidas estándar en una misma ocasión? En esta edición, cada bebida estándar contiene 10 g de etanol.

`q3`

- `0` — Nunca
- `1` — Menos de una vez al mes
- `2` — Mensualmente
- `3` — Semanalmente
- `4` — Todos o casi todos los días

### 4. ¿Con qué frecuencia en los últimos 12 meses ha sentido que no podía dejar de beber una vez que había empezado?

`q4`

- `0` — Nunca
- `1` — Menos de una vez al mes
- `2` — Mensualmente
- `3` — Semanalmente
- `4` — Todos o casi todos los días

### 5. ¿Con qué frecuencia en los últimos 12 meses no ha podido hacer lo que se esperaba de usted por el alcohol?

`q5`

- `0` — Nunca
- `1` — Menos de una vez al mes
- `2` — Mensualmente
- `3` — Semanalmente
- `4` — Todos o casi todos los días

### 6. ¿Con qué frecuencia en los últimos 12 meses ha necesitado beber por la mañana para sentirse bien durante el día después de haber bebido mucho el día anterior?

`q6`

- `0` — Nunca
- `1` — Menos de una vez al mes
- `2` — Mensualmente
- `3` — Semanalmente
- `4` — Todos o casi todos los días

### 7. ¿Con qué frecuencia en los últimos 12 meses se ha sentido culpable o con remordimientos después de beber?

`q7`

- `0` — Nunca
- `1` — Menos de una vez al mes
- `2` — Mensualmente
- `3` — Semanalmente
- `4` — Todos o casi todos los días

### 8. ¿Con qué frecuencia en los últimos 12 meses no ha podido recordar lo que ocurrió debido a la bebida?

`q8`

- `0` — Nunca
- `1` — Menos de una vez al mes
- `2` — Mensualmente
- `3` — Semanalmente
- `4` — Todos o casi todos los días

### 9. ¿Alguna vez se ha lesionado o ha causado daño a usted mismo o a otra persona después de beber?

`q9`

- `0` — No
- `2` — Sí, pero no en los últimos 12 meses
- `4` — Sí, en los últimos 12 meses

### 10. ¿Algún familiar, amigo o médico se ha preocupado por su consumo de alcohol o le ha sugerido que dejara de beber?

`q10`

- `0` — No
- `2` — Sí, pero no en los últimos 12 meses
- `4` — Sí, en los últimos 12 meses

## Edición del método

AUDIT: OMS, 2.ª edición (2001); los ítems 2 y 3 utilizan una bebida estándar de 10 g de etanol; traducción de la interfaz de ELUCENIA.

## Fórmula documentada

Ítems 1–8: 0–4 puntos. Ítems 9 y 10: 0, 2 o 4 puntos. Total: 0–40.

Puntuación ≥ 8 indica consumo de riesgo o perjudicial y posible dependencia. Los ítems 4–6 sugieren dependencia; 7–10, daño ya existente.

## Límites y población

Instrumento de cribado del consumo de alcohol de riesgo o perjudicial, estudiado en atención primaria. La suma, por sí sola, no establece dependencia. En esta implementación, los ítems 2 y 3 utilizan la edición OMS 2001 y una bebida estándar de 10 g de etanol; el consumo debe convertirse a esta referencia. Las medidas nacionales no son equivalentes automáticamente. La redacción y las adaptaciones poblacionales en cada idioma requieren revisión independiente.

## Referencias

- [Saunders JB et al. Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO Collaborative Project on Early Detection of Persons with Harmful Alcohol Consumption-II. Addiction, 1993.](https://doi.org/10.1111/j.1360-0443.1993.tb02093.x)

- [Lima CT et al. Concurrent and construct validity of the AUDIT in an urban Brazilian sample. Alcohol Alcohol, 2005.](https://doi.org/10.1093/alcalc/agh202)

- [Babor TF et al. AUDIT: the Alcohol Use Disorders Identification Test. Guidelines for use in primary care. 2nd ed. World Health Organization, 2001.](https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
