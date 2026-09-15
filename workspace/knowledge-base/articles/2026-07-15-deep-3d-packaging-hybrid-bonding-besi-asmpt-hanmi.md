---
title: "3D封裝的下一步是?混合鍵合(Hybrid Bonding)被推遲了?BESI、ASMPT 與韓美的設備大鬥法 - 深入分析:3D封裝"
url: "https://www.fomosoc.com/p/3dhybrid-bondingbesiasmpt-553d"
source: "FOMO研究院電子報"
author: "KP@FOMOSoc"
date_saved: 2026-08-16
date_published: 2026-07-15
language: zh-TW
type: article
tags: [deep-dive, 3D-packaging, hybrid-bonding, TCB, SoIC, HBM4, BESI, ASMPT, Hanmi, AMAT, LRCX, ASML, TSM, AVGO, AMD, AAPL-M5, INTC-Foveros, JEDEC, MR-MUF, TC-NCF, D2W]
---

# 3D 封裝與混合鍵合的設備大鬥法(封裝系列第三篇,接深25 CoWoS、深54 玻璃)

## Summary

FOMO研究院 KP 深度分析(封裝系列第三篇,2026-07-15)聚焦 3D 封裝與混合鍵合(Hybrid Bonding)設備大鬥法,核心判決是**HBM4 的混合鍵合被推遲(續用 TCB),邏輯晶片端僅旗艦品採用——TCB 迎來「黃金延長期」,而混合鍵合是下一世代的絕對物理終點**。互連演進史從金線走到覆晶微凸塊、TCB,最終目標是無焊料 Cu-Cu 直接融合,間距目標從 6μm 邁向 2029 年的 4.5μm。邏輯晶片端熱是根本限制,成功案例集中在低功耗 SRAM-on-CPU(AMD 3D V-Cache、Broadcom 2nm AI 晶片、**Apple M5 首次把混合鍵合帶進消費級**、Intel Foveros Direct 3D);HBM 端則因 JEDEC 高度限制放寬、間距未到臨界點、大客戶不願承擔初期良率風險而集體延後,推遲至 HBM4E/HBM5。TCB 陣營出現政治重整:**Hanmi(韓美)因專利戰與逼宮激怒客戶,SK 海力士轉向 ASMPT 搶下近半 HBM4 訂單**,美光則因地緣政治考量偏向荷蘭 BESI。混合鍵合量產級設備目前只有荷蘭 **BESI**,並與 AMAT(已收購 BESI 9% 成最大股東)深度綁定推出 Kinex 平台,市場更傳出 LRCX 與 AMAT 皆有意收購 BESI。估值上,**BESI 約 €200 億市值有五至七成押在尚未兌現的混合鍵合期權**,2027 若順利放量期權值看 €12-18B、若推遲至 2028 則縮水至 €8-12B。

## Key Takeaways

- **核心判決**:HBM4 混合鍵合被推遲、續用 TCB,邏輯晶片僅旗艦品採用——TCB 是「黃金延長期」,混合鍵合是下一世代終點。
- **邏輯晶片成功案例**:全屬低功耗 SRAM-on-CPU,包括 AMD 3D V-Cache、Broadcom 2nm AI 晶片(功耗 −90%)、**Apple M5 首次把混合鍵合帶進消費級**、Intel Foveros Direct 3D(已進 Clearwater Forest)。
- **HBM 三個煞車**:JEDEC 高度限制放寬(720→775μm)、間距未到 <10μm 臨界點、大客戶不願為良率風險買單;16 層良率乘法使整顆良率僅約 85%。
- **TCB 陣營政治重整**:Hanmi(韓美)專利戰+逼宮激怒客戶,SK 海力士轉向 **ASMPT** 搶下近半 HBM4 訂單;美光基於地緣政治偏向荷蘭 **BESI**。
- **混合鍵合設備格局**:D2W(AI 晶片必走)量產級設備目前只有荷蘭 BESI;**BESI×AMAT 深度綁定**(AMAT 已是 BESI 最大股東,9%),LRCX/AMAT 皆傳出收購意向。
- **估值示範**:BESI 約 €200 億市值中五至七成押在混合鍵合期權,2027 順利放量期權值 €12-18B、推遲至2028則縮水至€8-12B。
- **三種賭注**:韓美賭過渡期極致延伸、ASMPT 賭轉型安全邊際、BESI 賭下一代絕對霸權。

## 結構重點

**兩個戰場的不同答案**:
- **邏輯晶片**:3D 堆疊本身都未普及 —— **熱是根本限制**(高功耗核心疊高功耗核心 = 熱源垂直重疊);成功案例全是低功耗 SRAM-on-CPU:AMD 3D V-Cache(2022 首發)、**Broadcom 2026 2nm AI 晶片「面對面」Cu-Cu + HBM 並排(通道 ×7、功耗 −90%)**、**Apple M5(2026)= 混合鍵合首次進消費級**(SoIC 拆 CPU/GPU 小晶片堆疊 —— 單晶片信仰者的轉向 = SoIC 平台成熟訊號)、Intel Foveros Direct 3D 進 Clearwater Forest(9μm)。OSAT 被鎖在門外,價值歸晶圓廠(台積電 SoIC)+ 設備商
- **HBM**:3D 早已主流(8→12→16 層)但**混合鍵合集體推遲** —— 三個煞車:①JEDEC 高度限制放寬 720→775μm(議論中 1,000μm)= 舊技術續命空間 ②間距未到 <10μm 的非用不可臨界點 ③NVIDIA 等大客戶不願為初期成本+良率風險買單。**16 層良率乘法**(單層 99% → 整顆 ~85%)= 記憶體廠極度保守的原因。**HB 大戰延後至 HBM4E/HBM5**

**TCB 黃金延長期的政治學**:
- **Hanmi(韓美)**:十年獨佔 SK 海力士 → 自毀:對韓華專利戰 + 撤回 60 名駐廠工程師 + 強索 25% 漲價 = 逼宮激怒客戶
- **SK 海力士**:引入 **ASMPT(Fluxless/AOR TCB,1μm 以下對位)—— 搶下 HBM4 設備訂單近半**
- **美光**:HBM3E 給 Hanmi 50 台大單 → HBM4 轉評估 BESI/ASMPT;**地緣政治解題:ASMPT 香港背景 → 傾向荷蘭 BESI**
- **三星**:SEMES 自家垂直整合 + TCB 世代保守投資,把資源留給 HB 終極決戰(對 HB 態度最激進)
- 兩大堆疊流派:TC-NCF(三星/美光,貼膜逐層壓,慢但準)vs MR-MUF(SK 海力士,一次熔接+液態灌膠,快但易翹曲)

**混合鍵合的格局**:
- W2W(整片對貼,Sony 2015 量產於 CIS,EVG 拿下)vs **D2W(AI 晶片必走:Known Good Die 逐顆貼,100nm 對位)—— 量產級設備目前只有荷蘭 BESI**
- **BESI × AMAT 深度綁定**:AMAT 做臉打底(CMP 原子級平整 + 電漿活化「分子膠水」)+ BESI 神手貼合;**AMAT 2025 收購 BESI 9% 成最大股東**;合體平台 **Kinex™**(智慧排程消滅「黃金保鮮期」報廢 + 一體化防護罩讓 OSAT 也能導入)
- **ASML 入場設計 HB 設備**(奈米級對位 = 它的看家本領;營收貢獻 2030 後)—— 頂級玩家背書技術戰略份量
- **2026/3 收購傳聞:LRCX 與 AMAT 皆有意數十億歐元收購 BESI**(BESI 單日暴漲)—— AMAT 要一條龍壟斷、LRCX 是退無可退的防守(前段微縮話語權被 3D 堆疊稀釋的門票)

**估值拆解(7 月中口徑,框架示範)**:
- **BESI ~€200 億市值 = 核心業務 €4-7B + 混合鍵合期權 €13-20B(五至七成市值押在未兌現的未來)**;2027 放量 → 期權值 €12-18B;推遲 2028 → 縮水 €8-12B。**市場定價隱含「2027 必須順利放量」的緊繃假設**
- **Hanmi** = TCB 紅利極致收割者:賭 JEDEC 放寬讓 TCB 命更長 + 守住海力士/美光份額;單一客戶 + 被第二供應商蠶食 = 主風險
- **ASMPT** = 防禦力點滿:TCB 第二水源最大受益者(吃 Hanmi 掉的份額)+ HB 有 EVG 合作入場券;風險報酬曲線最平緩
- 三種賭注:**韓美 = 賭過渡期極致延伸 / ASMPT = 賭轉型安全邊際 / BESI = 賭下一代絕對霸權**

## 與本站的對接註記

- **AVGO(名單首選)三度加分**:2nm AI 晶片面對面 Cu-Cu(通道 ×7/功耗 −90%)—— 深54(玻璃)+ 週50(Iris MTIA)+ 本篇(HB 旗艦應用)= AVGO 在三條先進封裝敘事線全在場;9/2 財報彈藥
- **AMAT 立場持續增厚**(第三篇):BESI 9% 最大股東 + Kinex + 收購意向 = 3D 堆疊時代的一條龍卡位;加上週50 的 2030 能見度 —— 設備巨頭裡論點最完整
- **INTC 頁小註**:Foveros Direct 3D 已進 Clearwater Forest = 翻身工程的又一實物證據(非 roadmap)
- **MU 頁註**:HBM4 續用 TCB(混合鍵合推遲)= 良率風險降低的中性偏多細節;美光 HBM4 設備轉單(Hanmi → BESI/ASMPT)含地緣邏輯
- **未來候選**:BESIY(OTC)—— 「五至七成市值 = 期權」的純度標的,2027 放量與否 = 生死線;ASMVY(OTC)防禦版
