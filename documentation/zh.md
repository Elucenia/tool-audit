<!-- ELUCENIA technical documentation · audit · zh · no clinical/professional/rights approval -->

# AUDIT（酒精使用障碍识别测试）

[条件、来源与许可](https://elucenia.org/zh/tools/audit)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 1. 您多常饮用含酒精饮料？

`q1`

- `0` — 从不
- `1` — 每月一次或更少
- `2` — 每月 2 至 4 次
- `3` — 每周 2 至 3 次
- `4` — 每周 4 次或更多

### 2. 在通常饮酒的一天，您会饮用多少标准杯？本版本每标准杯含10 g乙醇。

`q2`

- `0` — 1或2
- `1` — 3或4
- `2` — 5或6
- `3` — 7至9
- `4` — 10或更多

### 3. 您一次饮用六标准杯或更多酒精饮料的频率是多少？本版本每标准杯含10 g乙醇。

`q3`

- `0` — 从不
- `1` — 每月不足一次
- `2` — 每月
- `3` — 每周
- `4` — 每天或几乎每天

### 4. 过去 12 个月，您多常发现开始饮酒后无法停止？

`q4`

- `0` — 从不
- `1` — 每月不足一次
- `2` — 每月
- `3` — 每周
- `4` — 每天或几乎每天

### 5. 过去 12 个月，您多常因饮酒未能做应做的事？

`q5`

- `0` — 从不
- `1` — 每月不足一次
- `2` — 每月
- `3` — 每周
- `4` — 每天或几乎每天

### 6. 过去 12 个月，您多常在前一天大量饮酒后需要早晨饮酒才能感觉好些？

`q6`

- `0` — 从不
- `1` — 每月不足一次
- `2` — 每月
- `3` — 每周
- `4` — 每天或几乎每天

### 7. 过去 12 个月，您多常在饮酒后感到内疚或后悔？

`q7`

- `0` — 从不
- `1` — 每月不足一次
- `2` — 每月
- `3` — 每周
- `4` — 每天或几乎每天

### 8. 过去 12 个月，您多常因饮酒而记不起发生的事？

`q8`

- `0` — 从不
- `1` — 每月不足一次
- `2` — 每月
- `3` — 每周
- `4` — 每天或几乎每天

### 9. 您是否曾在饮酒后伤害自己或他人？

`q9`

- `0` — 否
- `2` — 是，但过去 12 个月内没有
- `4` — 是，过去 12 个月内

### 10. 亲属、朋友或医生是否曾担心您的饮酒或建议戒酒？

`q10`

- `0` — 否
- `2` — 是，但过去 12 个月内没有
- `4` — 是，过去 12 个月内

## 方法版本

AUDIT：世界卫生组织第2版（2001）；第2、3项采用每标准杯含10 g乙醇的定义；ELUCENIA界面译文。

## 已记录的公式

第1–8项：0–4分；第9和10项：0、2或4分。总分：0–40。

评分≥8提示危险或有害饮酒及可能依赖。第4–6项得分提示依赖；第7–10项得分提示已有损害。

## 限制与适用人群

用于筛查危险或有害饮酒的工具，曾在初级医疗中研究。总分本身不能确定酒精依赖。本实现的第2、3项采用世界卫生组织2001年版，以每标准杯含10 g乙醇为基准；饮酒量必须换算为这一基准。各国的饮酒份量并不自动等同于该基准。每种语言的措辞和人群适配均需独立复核。

## 参考文献

- [Saunders JB et al. Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO Collaborative Project on Early Detection of Persons with Harmful Alcohol Consumption-II. Addiction, 1993.](https://doi.org/10.1111/j.1360-0443.1993.tb02093.x)

- [Lima CT et al. Concurrent and construct validity of the AUDIT in an urban Brazilian sample. Alcohol Alcohol, 2005.](https://doi.org/10.1093/alcalc/agh202)

- [Babor TF et al. AUDIT: the Alcohol Use Disorders Identification Test. Guidelines for use in primary care. 2nd ed. World Health Organization, 2001.](https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
