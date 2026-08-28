---
title: "Meta算力過剩了嗎?加息機率下降?Palantir大駡大模型? - KP思考筆記(第49期)"
url: "https://www.fomosoc.com/p/metapalantir-kp49"
source: "FOMO研究院電子報"
author: "KP@FOMOSoc"
date_saved: 2026-08-16
date_published: 2026-07-03
language: zh-TW
type: article
tags: [weekly-notes, META, meta-compute-optionality, neoclouds, CRWV, NBIS, PLTR, sovereign-AI, FDE-wars, MSFT, PCE-reform, Fed, Warsh, jobs-cooling, no-hike-base, agentic-AI-delay]
---

# KP 週記 49:Meta 算力/Meta 做雲/PCE 改革/Karp 罵大模型

> 定調:這次 Meta 引發的回調**不是鬼故事,是「合理修正」**(基於邏輯推演的風險溢價調整,非假新聞恐慌)。半導體在「進攻矛」巔峰時容錯率變低 —— 別猜 Meta 下季 capex,檢查組合是否過度暴露在單一假設。

## 主題一|Meta 算力過剩?(七月修正的觸發器)

- 2026 capex $1,250-1,450 億(日燒 ~$3.8 億)。Zuckerberg 5 月股東會拋出「**選擇權(Optionality)**」:蓋太多就外租 —— 「幾乎每週都有公司來問能不能溢價買我們的算力」= 巨額 capex 的下行對沖
- **7/2 內部 Town hall,Zuckerberg 親口承認:過去至少四個月,AI agent 發展軌跡未如預期加速**、「押注的新結構還沒完全兌現」→ 高價值推理需求未起飛的直白解釋(訓練可超前部署,推理規模化要等 agent 成熟)
- KP 判定:這是 **Meta 自身戰略節奏問題,非系統性算力過剩**(Meta 過去純內用,首次釋出外租訊號才顯得刺眼;Big 3 內外混配市場本來就看不清;Neoclouds 利用率仍健康)
- **真正的考驗 = 未來 12-18 個月**:Instagram/WhatsApp 能否放大推理需求 —— 競賽從「比建造速度」進入「**比算力轉化效率**」

## 主題二|Meta 做雲:兩條軌道

- **軌道 A(託管 API)**:KP 判不會贏 —— 三大雲生態綁定、企業信任障礙(消費級品牌認知)、無 B2B 直銷體系、且 agent 進度落後讓高價值 API 場景需求更弱
- **軌道 B(裸機出租)**:自然延伸 —— Prometheus/Hyperion 數 GW 營運經驗;xAI Colossus 租給 Anthropic = 已驗證的執行路徑;直接對沖 capex
- **Neoclouds(CRWV/NBIS/Crusoe)受雙重挑戰**:①Meta 變競爭者 ②Meta 自建投產後減少外購(它本是重要買家)。防禦壁壘:敏捷部署/軟體棧上移(Nebius 開發者服務、CoreWeave 深度整合調度)/fractional GPU 精細化營運。**結論:Meta 入場 = 對原始算力市場的強力背書,但逼 Neoclouds 加速從「硬體轉租商」轉型軟體服務**

## 主題三|PCE 統計改革 + 就業降溫 = 升息機率歸零

- BEA 修改三類 PCE 算法(投資組合管理/法律服務/軟體)—— 舊法系統性高估通膨,**回溯修正到 2021**;5 月核心 PCE 3.4% 預計 9 月修正時被削 10-20bps(GS 估 3.2%/JPM 3.3%)
- 6 月非農 57K vs 預期 110-114K,5 月由 172K 下修至 129K;失業率 4.2% —— 「過去幾個月的強勁就業是虛胖」
- Warsh 7/1 歐洲央行論壇:鷹派底線(不容忍 >2%)+ 「通膨風險已有所下降」= data-dependent;隔天拿到弱就業 → **短期(7 月與 9 月)升息機率微乎其微**
- KP 方法論註:「客觀數據本質上也是人造模型 —— 溫度計有時需要校準的是刻度」;其 6/10 深51 的基準情境(按兵不動或最多象徵性加一次)獲驗證

## 主題四|Karp 大罵大模型 = Sovereign AI 的銷售演出

- 背景:Palantir × NVIDIA 升級合作(Nemotron 開源權重企業 AI 引擎)—— 賣點:自有模型/資料不外流/air-gapped/定價可預測(非 token 計費)
- Karp 四批評:①Token 計費結構性扭曲(變動成本高、可預測性低)②企業「交出 alpha」(專有數據餵進別人模型)③前沿模型企業適配被過度銷售 ④國安主權(「把戰場外包給矽谷共識?」)
- **時機非偶然:FDE 護城河正被抄** —— OpenAI 5 月成立 Deployment Company(併 Tomoro 拿 150 FDE)/ Anthropic「Applied AI Engineers」+ Blackstone/GS/H&F 合資 / **Microsoft 7/2 砸 $25 億成立「Frontier Company」宣稱要建業界最大 FDE 組織**
- Palantir 的真差異 = **Ontology(企業運作的數位地圖)**:不只派水管工,是幫客戶挖井蓋淨水廠;對手是在「按流量計費+數據外流+無統一地圖」的地基上貼補丁
- 讀者 Charlie 反方:主權客戶要承受高昂一次性費用 + 封閉模型與快速迭代大模型的落差 —— 若大模型跑得快,PLTR 想像空間縮、估值受壓

## 與本站的對接註記

- **七月修正觸發器存檔**:INTC 頁 7/1 −9%、MU 七月殺、CIEN 7/2 弱勢的「Meta 傳出售過剩算力」跌因 —— 本篇即完整敘事源;KP 定性「合理修正非鬼故事」與各頁「sector beta」拆帳一致
- **📅 9 月 PCE 回溯修正 = 前瞻日曆項**(通膨數字機械性下修 10-20bps)—— 對利率敏感頁(ASTS/GEV)是順風事件
- **agent 進度不如預期(Zuckerberg 7/2 自承)**:對 NOW 頁是雙面刃 —— 短期「AI 吃席位」威脅鈍化,但 AI SKU 變現敘事同樣降溫
- **MSFT Frontier Company $2.5B(7/2)**:MSFT 頁背景註記(FDE 大戰參戰)
