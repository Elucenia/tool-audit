<!-- ELUCENIA technical documentation · audit · pt-BR · no clinical/professional/rights approval -->

# AUDIT (teste de identificação de problemas com álcool)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/audit)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### 1. Com que frequência você consome bebidas alcoólicas?

`q1`

- `0` — Nunca
- `1` — Mensalmente ou menos
- `2` — De 2 a 4 vezes por mês
- `3` — De 2 a 3 vezes por semana
- `4` — 4 ou mais vezes por semana

### 2. Num dia típico em que bebe, quantas bebidas-padrão consome? Nesta edição, cada bebida-padrão contém 10 g de etanol.

`q2`

- `0` — 1 ou 2
- `1` — 3 ou 4
- `2` — 5 ou 6
- `3` — 7 a 9
- `4` — 10 ou mais

### 3. Com que frequência bebe seis ou mais bebidas-padrão na mesma ocasião? Nesta edição, cada bebida-padrão contém 10 g de etanol.

`q3`

- `0` — Nunca
- `1` — Menos do que uma vez ao mês
- `2` — Mensalmente
- `3` — Semanalmente
- `4` — Todos ou quase todos os dias

### 4. Quantas vezes ao longo dos últimos 12 meses você achou que não conseguiria parar de beber uma vez tendo começado?

`q4`

- `0` — Nunca
- `1` — Menos do que uma vez ao mês
- `2` — Mensalmente
- `3` — Semanalmente
- `4` — Todos ou quase todos os dias

### 5. Quantas vezes ao longo dos últimos 12 meses você, por causa do álcool, não conseguiu fazer o que era esperado de você?

`q5`

- `0` — Nunca
- `1` — Menos do que uma vez ao mês
- `2` — Mensalmente
- `3` — Semanalmente
- `4` — Todos ou quase todos os dias

### 6. Quantas vezes ao longo dos últimos 12 meses você precisou beber pela manhã para poder se sentir bem ao longo do dia após ter bebido bastante no dia anterior?

`q6`

- `0` — Nunca
- `1` — Menos do que uma vez ao mês
- `2` — Mensalmente
- `3` — Semanalmente
- `4` — Todos ou quase todos os dias

### 7. Quantas vezes ao longo dos últimos 12 meses você se sentiu culpado(a) ou com remorso depois de ter bebido?

`q7`

- `0` — Nunca
- `1` — Menos do que uma vez ao mês
- `2` — Mensalmente
- `3` — Semanalmente
- `4` — Todos ou quase todos os dias

### 8. Quantas vezes ao longo dos últimos 12 meses você foi incapaz de lembrar o que aconteceu devido à bebida?

`q8`

- `0` — Nunca
- `1` — Menos do que uma vez ao mês
- `2` — Mensalmente
- `3` — Semanalmente
- `4` — Todos ou quase todos os dias

### 9. Você já causou ferimentos ou prejuízos a você mesmo(a) ou a outra pessoa após ter bebido?

`q9`

- `0` — Não
- `2` — Sim, mas não nos últimos 12 meses
- `4` — Sim, nos últimos 12 meses

### 10. Algum parente, amigo ou médico já se preocupou com o fato de você beber ou sugeriu que você parasse?

`q10`

- `0` — Não
- `2` — Sim, mas não nos últimos 12 meses
- `4` — Sim, nos últimos 12 meses

## Edição do método

AUDIT: OMS, 2ª edição (2001); itens 2 e 3 com bebida-padrão de 10 g de etanol; tradução de interface ELUCENIA.

## Fórmula documentada

Itens 1 a 8: 0 a 4 pontos. Itens 9 e 10: 0, 2 ou 4 pontos. Total: 0 a 40.

Pontuação ≥ 8 indica uso de risco ou nocivo e possível dependência. Pontos nos itens 4 a 6 sugerem dependência; nos itens 7 a 10, dano já instalado.

## Limites e população

Instrumento de rastreamento de consumo de álcool de risco ou nocivo, estudado em atenção primária. A soma não estabelece, isoladamente, dependência. Nesta implementação, os itens 2 e 3 usam a edição OMS 2001 e uma bebida-padrão de 10 g de etanol; a quantidade consumida deve ser convertida para essa referência. Copos nacionais não são equivalentes automaticamente. A redação e as adaptações populacionais em cada idioma requerem revisão independente.

## Referências

- [Saunders JB et al. Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO Collaborative Project on Early Detection of Persons with Harmful Alcohol Consumption-II. Addiction, 1993.](https://doi.org/10.1111/j.1360-0443.1993.tb02093.x)

- [Lima CT et al. Concurrent and construct validity of the AUDIT in an urban Brazilian sample. Alcohol Alcohol, 2005.](https://doi.org/10.1093/alcalc/agh202)

- [Babor TF et al. AUDIT: the Alcohol Use Disorders Identification Test. Guidelines for use in primary care. 2nd ed. World Health Organization, 2001.](https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Zona I (0 a 7): uso de baixo risco

Educação em saúde sobre álcool.


### 2

Zona II (8 a 15): uso de risco

Orientação básica (intervenção breve) sobre redução do consumo.


### 3

Zona III (16 a 19): uso nocivo

Intervenção breve com aconselhamento e acompanhamento continuado.


### 4

Zona IV (20 a 40): provável dependência

Encaminhar a serviço especializado (CAPS AD ou especialista) para avaliação diagnóstica e tratamento.

