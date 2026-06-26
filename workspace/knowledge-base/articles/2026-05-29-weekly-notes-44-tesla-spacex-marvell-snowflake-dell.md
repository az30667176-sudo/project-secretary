---
title: "Tesla和SpaceX考慮合併？Anthropic超越OpenAI？Dell為甚麼大漲？ - KP思考筆記(第44期)"
url: "https://www.fomosoc.com/p/teslaspacexanthropicopenaidell-kp44"
source: "FOMO研究院電子報"
date_saved: 2026-06-14
date_published: 2026-05-29
language: zh-TW
type: article
tags: [weekly-notes, Tesla, SpaceX, merger, Musk, dual-class, Marvell, MRVL, interconnect, silicon-photonics, ASIC, Inphi, Celestial-AI, Snowflake, SNOW, Cortex-AI, Graviton, ARM, agentic-AI, Dell, DELL, AI-server, operating-leverage, sovereign-AI, Anthropic, Series-H, TPU, debt-financing, HBM, fundamental-investment]
related_projects: [kurt-library, fundamental-platform]
---

# Tesla/SpaceX 合併？Anthropic 超越 OpenAI？Dell 為甚麼大漲？ - KP思考筆記(第44期)

> 開場：重讀 Peter Lynch《One Up on Wall Street》。「投資者為準備修正/預測修正所損失的錢，遠比修正本身損失的還多。」很多人把「波動」誤認「風險」—— 短期下跌只是波動，真正風險是「不在場」失去複利機會成本。謹慎應體現在標的篩選嚴苛 + 倉位紀律，不是預測崩盤。

## 主題一：Tesla 和 SpaceX 考慮合併？

- 背景：SpaceX 6 月中以 **$1.5-1.75 兆**估值 IPO → 引發合併猜測
- **Wedbush Dan Ives 喊 2027 上半年合併機率 80-90%**，邏輯 =「AI 生態終極閉環」：Tesla 真實世界物理數據（FSD 車隊/Optimus/儲能）+ SpaceX 全球連網（Starlink）+ 邊緣運算 → 地表到軌道的「垂直整合 AI 實體堆疊」
- **結構不對稱**：SpaceX Musk 持股 42% 但雙重股權掌 **85% 投票權**（他一人說了算）;Tesla 單一類別股、Musk 僅 ~20%，需說服公眾股東 + 機構 + 獨立董事
- **歷史陰影**：2016 收購 SolarCity 的「自我交易 (Self-dealing)」爭議（雖德拉瓦勝訴）→ 併兆元 SpaceX 監管放大鏡空前嚴厲
- **風險**：**集團折價 (Conglomerate Discount)** — SpaceX 純太空溢價一旦掛鉤波動劇烈汽車業務，整體倍數可能下降
- **預測市場 vs 分析師**：Kalshi 賠率顯示 2027 前合併 <40%（vs Ives 90%）
- **KP 判斷**：短期成事機率極低（IPO 初期估值未穩就併 = 法律風險幾何增長）;但拉長 3-5 年技術協同變不可或缺時，「帝國整合」是 Musk 性格必然

## 主題二：Marvell 不只是 ASIC 第二名

- 市場舊標籤：「小號 Broadcom」「ASIC 第二名」「定位尷尬網通」— **已過時，Marvell 悄悄變成另一家公司**
- CEO Matt Murphy 把資料中心業務拆三塊：**Interconnect（互連）/ Switching（交換）/ Custom（ASIC）**。關鍵：「**互連已成資料中心業務佔比最大部分**」（不是 ASIC！）
- **Interconnect 才是主角**：
  - ASIC = 「算的」（邏輯運算）;Interconnect = 「連的」（光模組/DSP/TIA/driver/coherent/CPO）
  - 瓶頸轉移：2025H2-2026 模型從 Dense → MoE/reasoning/agentic，叢集從幾千→幾十萬 GPU → 瓶頸從「算力」變「連接」（GPU 大半時間在「等」傳資料）
  - 成長預期 **+50% → +70% YoY**（三個月訂單能見度暴增）
- **為何拆出來講**（三戰略考量）：(1) 完全不同技術領域（互連=物理光學雷射訊號;交換=數位邏輯）(2) 江湖地位不同 — 交換 Broadcom 泰山北斗、Marvell 挑戰者;**互連 Marvell 是一哥**（收 Inphi → 光學 DSP 市佔 >60%）(3) AI 瓶頸已轉互連
- **圍繞互連的三筆收購**：Celestial AI（光子互連 scale-up，頂級 hyperscaler 已選用，市場機會 $1.5億→FY28 $3億）+ XConn（PCIe/CXL 交換，記憶體解耦）+ Polariton（等離子矽光子，1THz 調變=傳統 10 倍）→ scale-out/up/across 完整光學堆疊
- **NVIDIA 戰略投資 $20 億** Marvell（自知光學互連是最大瓶頸，需矽光子規模夥伴）
- **ASIC 沒碰壁**：FY28 ASIC 展望「不只翻倍」、重申 FY29 破 $100 億;旗艦 XPU 跨世代能見度 + 推論時代新戰場
- **結論**：從「單引擎成長股」→「客製化算力 + 極速互連」雙引擎旗艦（降低週期不確定性）

## 主題三：Snowflake 從「AI 敗將」變「AI 贏家」？

- 財報後**單日暴漲 35%**（公司史上最大單日）— 不是業績好一點，是市場認知一天翻轉
- **$60 億天價合約**：與 AWS 簽五年 SCA（2023 的 $25 億翻 2.5 倍），花在 (1) AWS Graviton（自研 ARM CPU 跑資料倉儲核心）(2) NVIDIA GPU（留給 AI 訓練推論）
- **以前為何被當輸家**：被視為「資料倉儲 + 加點 AI」，真正 AI 工作會被巨頭工具（Bedrock/Vertex）或 AI 原生對手（Databricks）吃掉;成長放緩、Cortex AI 採用存疑
- **敘事翻轉三點**：(1) AI 變現 — **13,600+ 客戶用 AI 功能** + NRR 改善 (2) 願砸真金白銀綁定技術架構 (3) **重新定義角色** — 企業要的是能幹活的 AI Agent（拆任務/調 API/讀核心敏感私有數據），而「數據在哪 AI 物理邊界就在哪」= Snowflake 主場（把 AI 運算拉進「數據保險箱」）
- **Graviton 驗證意義**：遷移後效能 +10%、碳排 -57%、某些場景 +30% → 證明客製 ARM 在大規模生產可行;Agent 大量「文職工作」（調度/工具調用/狀態維持）適合便宜省電 CPU，貴 GPU 留給推理。AWS Graviton（2018）領先 Google Axion/微軟 Cobalt
- **同日收購 Natoma**（企業 AI Agent 治理 + MCP 模型上下文協定）= 給 Agent 裝「煞車方向盤」→ Snowflake 要成企業 Agent 的「可信賴執行環境 (TEE)」
- **⚠️ 風險**：$60 億 = 每年燒 $12 億考驗現金流/毛利;AI 變現真實進度模糊（13,600 帳戶貢獻多少營收財報沒答案）;Databricks + 雲端巨頭虎視;加深 AWS 依賴
- 不會引發 SaaS 軍備競賽 — 多數 SaaS 走輕量調 API 路線，只有 Snowflake/Databricks 這種數據綁定平台型才有動機重資本投入

## 主題四：Dell 這家組裝廠為甚麼大漲？

- 財報炸裂：單季營收 **$438 億**（YoY +88%，遠超預期 $350 億）;AI 伺服器營收 **$161 億**（YoY +757%）;全年 AI 伺服器指引上調至 **$600 億**;盤後 **+30%**
- **華爾街低估了什麼**：
  1. **「非 AI」IT 翻新拉動效應**：舊模型假設 IT 預算固定（買 AI 排擠傳統）→ 現實相反。傳統伺服器/網路 $85 億（YoY +92%）— 大量推論/輕量微調跑在傳統 CPU + AI 叢集逼機房電力/散熱/機架/儲存全面現代化。AI = 翻新整間機房的催化劑
  2. **企業級 + 主權 AI 成主引擎**：客戶從挑剔/價格敏感/訂單不穩的 hyperscaler → 擴散到企業/政府;AI 客戶數半年 +50% 破 5,000 家
  3. **護城河 = 降低「摩擦/風險/價值實現時間」**：買晶片 ≠ 跑起來;成千上萬工程師到現場裝校整套叢集（功耗/散熱/光纖/軟體穩定）+ Dell Financial Services 租賃按需付費解 CapEx 痛點
  4. **20 年最強營運槓桿**：營收 +88% 但 OpEx 只 +9% → OpEx 佔比暴跌至 8.4%（20 年新低）;Non-GAAP EPS **$4.86**（遠超預期 $2.9）
- **⚠️ 後續風險**：HBM/DDR5 記憶體成本通膨能否轉嫁;$513 億積壓訂單多為 Grace Blackwell，下代 Vera Rubin 新舊交替供應鏈陣痛
- 重新定位：從「賣 PC/伺服器硬體廠」→「AI 基礎設施不可或缺的全棧式系統整合公司」

## 主題五：Anthropic 最新融資輪告訴我們什麼

- 同週兩筆：**$650 億 Series H 股權**（估值飆 **$9,650 億超越 OpenAI 成全球最貴 AI 獨角獸**）+ **$360 億 TPU 租賃債務融資**
- **真正該看的是 $360 億債務交易**（揭示新遊戲規則）：
  - 「用昂貴股權買大腦（研發/人才/模型），用聰明債務買肌肉（硬體）」
  - 架構：Apollo + Blackstone（私募信貸巨頭）籌 $360 億 → 向 Google 買 TPU → 租給 Anthropic;**Broadcom 為最大額部分付款擔保**
  - 類比航空公司租飛機（晶片太貴 + 迭代快三年過時，租賃資金靈活 + 避技術過時風險）
  - 史上最大單筆晶片相關融資;資本結構「分層化」成熟標誌
- **股權層深層綁定**：Series H 投資人含 **Micron + Samsung + SK Hynix**（HBM 三霸）+ Amazon（$150 億雲端承諾大頭）→「賣鏟人變合夥人」。記憶體廠投 AI 實驗室 = 源頭鎖定 HBM 需求 + Anthropic 拿「優先供貨」門票 → 「晶片/記憶體源頭 → 雲端 → 前沿模型」超強垂直整合生態
- 新範式複雜性：股權/債務/雲端/晶片供應商多方利益，景氣好時一致，環境轉變優先順序衝突會浮現

## 投資 implication（接 fundamental-platform / KP 主題）

- **Marvell (MRVL)** = AI infra 互連純玩家，接 KP [deep-38 Broadcom+Marvell](未入庫)、[deep-23 光通訊 MRVL/LITE/COHR/FN](未入庫)。**雙引擎（ASIC+互連）+ 矽光子市佔 >60% + NVIDIA $20 億投資** → fundamental-platform ER 高優先候選;與 GFS（deep-49 SCALE 矽光子代工）是「設計 vs 代工」上下游關係
- **Dell (DELL)** = 我已跑 ER（當時 **Sell $175**）。但此財報 **+757% AI 伺服器 / +30% 盤後 / OpEx 槓桿 8.4%** 是強烈反證 → **我的 DELL Sell 評級需重檢**（§7.6 anti-conservative：我可能又低估了 AI infra 週期廣度）。**這是 §7.6 自我修正候選案例**（類似 AVGO $400→$520）
- **Snowflake (SNOW)** = 敘事翻轉 + Graviton 驗證 ARM/agentic CPU 需求 → 接 KP [deep-35 SaaS](未入庫)、[deep-43 CPU AMD/Intel/ARM](未入庫)
- **Anthropic 債務融資鏈**：利多 GOOGL（TPU）/ AVGO（擔保 + custom）/ Micron-Samsung-SK Hynix（HBM）→ 接 notes-43 的算力分層主題。**HBM 三霸入股 = 跑 MU ER 的 secular demand 鐵證**
- **Tesla/SpaceX 合併**：追蹤 SEC 文件;SPCX IPO 後若併，是 §7.7 narrative 與集團折價的對沖案例

## Full Text 備註
KP 週末筆記 5 主題格式，完整正文已收錄 Key Takeaways（user 文字稿，2026-05-29 發布）。內引 deep-49 GFS / deep-50 HVDC / deep-43 CPU / deep-38 Broadcom+Marvell / deep-35 SaaS 等前作。
