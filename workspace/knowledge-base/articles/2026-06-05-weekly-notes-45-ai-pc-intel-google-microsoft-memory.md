---
title: "今年要加息了？記憶體需求減半？AI PC時代到來？ - KP思考筆記(第45期)"
url: "https://www.fomosoc.com/p/ai-pc-kp45"
source: "FOMO研究院電子報"
date_saved: 2026-06-14
date_published: 2026-06-05
language: zh-TW
type: article
tags: [weekly-notes, AI-PC, NVIDIA, NVDA, RTX-Spark, N1X, CUDA, Windows, Microsoft, MSFT, unified-memory, LPDDR5X, Intel, INTC, Xeon, 18A, agentic-AI, orchestration-layer, x86, ARM, Google, GOOGL, Alphabet, equity-raise, capex, Berkshire, Build-2026, MAI, Copilot, Scout, HBM4, SOCAMM, memory-supercycle, Micron, MU, SK-Hynix, Samsung, NAND, rate-hike, market-timing, fundamental-investment]
related_projects: [kurt-library, fundamental-platform]
---

# AI PC時代？加息？記憶體需求減半？ - KP思考筆記(第45期)

> 開場（宏觀+心態）：週五全線 Beta 式下跌 — 強勁非農 → 市場開始為年底「加息」定價。**2022 災難是因加息幅度+持續超預期**;若只是一次性微調則不同。市場超買已久，任何風吹草動都引發回撤（資金找理由獲利了結）。**「擇時」陷阱：何時重新進場比何時離場更難**;判斷錯遇 V 轉會更痛苦 FOMO 追高。波動是權益投資入場券（不能拒 10-30% 回撤又要 50-100% 報酬）。**先釐清身分**：Trader（趨勢/動能/止損）vs Investor（深度體檢:集中度/信念感/估值安全邊際/因果邏輯）。KP 自己選擇「硬扛但收縮戰線 — 衛星標的撤出加碼高信念核心」（底氣=獲利緩衝+無槓桿+清楚每個持倉邏輯）。

## 主題一：當 Windows 遇上 CUDA，AI PC 如何權力重組？

- 黃仁勳 Computex 揭曉 **RTX Spark 平台（N1/N1X 晶片）**，Dell/Lenovo/ASUS/MSI/HP + 傳聞 Surface 今秋~2027 初出貨
- **對 NVIDIA 短期財報貢獻幾乎為零**（秋天才上市、量小、價高、客群窄）— 真正意義是「PC 時代分水嶺」
- **微軟 × NVIDIA 共生博弈**：
  - 微軟需 NVIDIA — 終極願景 Agentic AI 本地跑大模型;高通 Snapdragon X 省電但算力不足;要對抗 Apple Silicon 統一記憶體 + macOS 整合典範
  - NVIDIA 需微軟 — 消費端唯一規模舞台（macOS 禁地、Linux <5% 市佔、ChromeOS/Android 不適）;要把 CUDA 從資料中心延伸到客戶端
- **CUDA 生態滲透 = 長線遊戲**：當所有 AI 開發者在 CUDA 寫程式、TensorRT 推論、開源模型優先支援 NVIDIA → 微軟轉換成本變極高。Agentic AI 變主介面後「作業系統是什麼牌子不重要，跑的 AI Agent 用誰算力/模型更重要」→ **「微軟是房東，NVIDIA 變所有租客必打交道的水電公司」**（複製資料中心策略）
- **協同設計時代**：鬆散模組化（Intel CPU/NVIDIA GPU/微軟 OS 各自獨立）在 AI 時代失效（記憶體頻寬/排程器/安全/電源需一起設計）→ 蘋果垂直整合典範;NVIDIA+微軟+聯發科組合是折衷。**純組裝廠價值被壓縮，深度客製化廠商受益**
- **128GB 統一記憶體（LPDDR5X）**：傳統插槽記憶體在高階 AI PC 消失 → 利多三星/SK 海力士先進封裝高密度記憶體。但旗艦 AI 筆電 >$2000 小眾;**當前記憶體循環仍由資料中心 HBM 主導**，RTX Spark 是埋在 2027-28 的種子
- **特洛伊木馬**：PC 是 NVIDIA 把 CUDA 生態「實體化」到每個桌面的手段;為 5-10 年後雲端算力向終端分流買「保險票」

## 主題二：Intel 如何用 CPU 奪回系統調度權？

- Computex 2026 RTX Spark 搶頭條，但 Intel 論點：AI 從「單次問答」→「多代理人協作 (Agentic)」，**CPU 重奪系統核心主導權**
- **「編排層 (Orchestration Layer)」論述**：Agent 需「目標拆解→計畫→呼叫工具/API→跨系統擷取上下文→維持狀態→錯誤恢復/分支」= 非矩陣乘法，而是分支邏輯/記憶體管理/狀態維護/任務調度 → **最適合 CPU（特別 Xeon）當「大腦」協調 GPU/記憶體/網路**
- **三個示範**：
  - **Perplexity 端雲協同**：敏感 LBO 財務數據在本地 Core Ultra 3 跑（隱私），去隱私化任務送雲端深度推理 → 打破「全上雲 vs 純端側」二分
  - **SambaNova 解耦式推理**：Xeon 6+(18A) 當調度大腦 + SambaNova SN-50 RDU 負責 Decode + NVIDIA Blackwell 負責 Prefill。**Intel 承認異質運算是常態，自己當「黏著劑」協調者**（不強求每環節用 Intel）
- **18A 落地 + x86 防禦**：Core Ultra 3 + Xeon 6+ 在 18A 出貨，tape-out >300，良率改善中 — 但市場態度「先看到持續交付再說」（Intel roadmap 信用問題）。x86 防禦 NVIDIA Grace ARM：數十年企業程式碼/編譯器/安全協議 + 與既有 DB/ERP 深度整合
- **Computex 無法定勝負**：兩家 benchmark 都是「完美實驗室」最有利場景。要看後續：OEM 實際出貨量 / ARM 遷移隱性成本 / CSP capex 採購比例

## 主題三：Google 為何突然募資 $850 億？

- Alphabet 完成 **$847.5 億股權融資**（破 2010 Petrobras $700 億紀錄 = 人類史上最大單一增資）
- **破除「$300 億幫員工繳稅」標題黨**：結構分兩塊 — (1) ~$447.5 億（公開發行+可轉債+**Berkshire $100 億私募**）= AI 基建/算力擴張基金 (2) ~$400 億 ATM 計劃，其中 $300 億處理 2026 RSU 歸屬稅務
  - 操作本質：過去用自有 FCF 幫員工繳稅，現在改用 ATM 市價發行募資付稅，把寶貴 FCF 留給 AI 戰場。「用融資付稅省下現金蓋資料中心」≡「用融資蓋資料中心」。代價=股本稀釋（這就是過去靠回購防稀釋的 Alphabet 引發短暫恐慌主因）
- **2026 capex 指引 $1,800-1,900 億**（幾乎去年兩倍）
- **公開市場速度降維打擊**：6/1 宣布 → 6/2-3 超額認購定價 $847.5億 → 6/4-5 交割，**不到 5 天**。vs 未上市獨角獸（OpenAI/Anthropic）融資要數月~年。萬億上市公司流動性+信用紅利 = 護城河 → 直接搶台積電產能/NVIDIA 晶片/電網配額
- **股神背書**：Berkshire（Greg Abel 掌舵）認購 $100 億 — Abel 說「不為 AI 而 AI，必須增值」→ 即使股價不便宜仍砸 = Alphabet AI 基建估值有吸引力+高 ROIC+安全邊際的強信號
- **逼迫所有人提前攤牌**：2026 四大 hyperscaler 集體 capex 指引 **$7,250 億**;先動手的 Alphabet 拿走最便宜第一桶金，逼亞馬遜/Meta/新創跟進融資。「重工業階段」物理基建（算力/電力/資料中心）先行才能軟體變現

## 主題四：從 Build 2026 看微軟策略（拒絕賺快錢）

- Build 2026「Agent 大秀」：7 個 MAI 自研模型 + Scout 自動駕駛工作代理 + RTX Spark 開發機 + Solara 新平台（非 Windows）+ Majorana 2 量子晶片
- **Nadella 訪談（Stratechery/Ben Thompson）才是鑰匙**：
  - **拒絕「嫉妒型創新」不做下一個 Zune**：「我們最糟時就是因嫉妒而做事」「這世界不需要微軟做 Zune」→ **不加入「誰模型最聰明」軍備競賽**。微軟基因是平台（PC=Windows / 雲=Azure / Agent 時代=企業 AI 生態作業系統）
  - **「爬山 (Hill-climbing)」框架**：最關鍵不是基礎模型多聰明，而是能否把公司隱性知識/專屬資料/工作流持續餵給模型在你業務場景「爬山」。**「私有基準與評估」是公司最重要的 IP**
- **Build 2026 拼圖**（全是爬山機工具箱）：MAI 模型 + Frontier Tuning（用專屬資料訓練）/ Microsoft IQ（挖出 M365 底下企業資料變 Agent 智慧層）/ Scout（Autopilot 非副駕，背景自主工作）/ RTX Spark 開發機 + Solara / MXC 安全沙盒 + Agent 365 SDK（治理防 Agent 失控）
- **與 OpenAI 關係演變**：合約至 2032，仍是重要客戶;但推 MAI + GitHub Copilot 多模型（可用 Claude 互檢）= 從「重度依賴單一夥伴」→「重要但非獨占」
- **資本配置紀律**：「想要短期 Azure 營收很容易，賣 GPU 給投機 AI 新創 (Neolab) 就行」— **明確拒絕**（前沿實驗室終會自建基建）。產能分給三桶：超大規模雲 + 自家應用 (M365/GitHub/Security) + 自研模型研究
- **商業模式難題**：Agent 24 小時工作 → 傳統「按人頭計費」失效（一個 Agent 抵五人為何買五帳號）→ 微軟解法「混合定價」（基本人頭費 + 彈性算力消耗費）
- 仍要時間驗證：Scout 仍 Frontier 客戶小規模、混合定價接受度未明、何時對財報貢獻待觀察

## 主題五：NVIDIA 對記憶體需求減半？（破除熊市鬼故事）

- SemiAnalysis 報告：Vera Rubin NVL72 機櫃出貨時系統記憶體配置比原規劃少約一半 → 市場「記憶體超級週期終結」斷章取義
- **關鍵澄清：被砍的是 CPU 側系統記憶體 (LPDDR5X)，不是 GPU 側最核心最貴的 HBM4**（HBM4 規格需求完全沒受影響）
- **為何動 LPDDR5X**：16 層堆疊高密度模組良率/產能受限，客戶等不及 → 黃仁勳務實決策：(1) 降規用成熟 96GB 模組加速出貨 (2) 每機架成本省 $80 萬（$760萬→$680萬，降 TCO）(3) **Vera Rubin 改插槽式 SOCAMM2 設計**（vs Blackwell 銲死）→ 96GB 是過渡配置，未來可現場熱插拔升級。**「先上車後補票」非需求下滑**
- **三階層記憶體架構演進**（Agent/長文本時代 KV Cache 暴增）：
  - 熱層 HBM4（最快最貴，即時運算）
  - 溫層 LPDDR5X/SOCAMM（中速高頻寬，暫存 KV Cache + Agent 狀態）
  - 冷層 高性能 SSD/NAND（容量大成本低，長期對話記憶）
- **對記憶體產業實際影響**（反而利多）：
  1. **NAND/SSD 變更重要**（系統記憶體降 → KV Cache 更頻繁調到儲存層）→ 同時有 DRAM+NAND 的 Samsung/SK hynix/**Micron** exposure 更完整
  2. **機架變便宜 → 出貨量暴增（總量效應 > 單機減少）**：全球 LPDDR5X 總產能固定，單機減半 = 同樣記憶體可組裝雙倍機櫃 → 總 bits 需求沒縮水，每台多賣的 HBM4 一點沒少 + 未來 192GB 二次升級售後拉貨潮
- Dylan Patel：「分享報告的人經常漏掉大部分內容」。**記憶體超級週期邏輯沒變，瓶頸在層級間移動但總需求方向清楚**

## 投資 implication（接 fundamental-platform / KP 主題）

- **記憶體超級週期（主題五 = 最 actionable）**：KP 明確破除「需求腰斬」鬼故事 → **Micron (MU) / SK Hynix / Samsung 的 DRAM+NAND 雙曝險超級週期邏輯未變**。接 notes-44 的 HBM 三霸入股 Anthropic（secular demand 鐵證）+ deep-45 被動元件。**MU ER 是高優先候選**（HBM4 + NAND 三階層架構雙受惠，且 KP 反覆背書）。⚠️ 注意 SNDK（我已跑 Hold $1700）NAND ASP super-cycle 同主題
- **AI PC / 邊緣 AI（主題一）**：NVDA 終端佈局 + 統一記憶體利多三星/SK 海力士 LPDDR5X;聯發科（N1X 合作）。接 KP deep-47 Cloudflare（邊緣 AI）
- **Intel (INTC) 編排層論述（主題二）**：我已跑 INTC ER。18A 落地 + Xeon「編排層大腦」是新多頭敘事，但「先看到持續交付」= §7.6 execution risk。x86 vs ARM 之爭未定 → 跑 INTC/AMD/ARM ER 須把架構路線當關鍵變數。接 deep-43 CPU
- **Google (GOOGL) 主題三**：$850 億募資 + Berkshire $100 億背書 = AI capex 商業邏輯實證（打臉泡沫空頭）。capex $1,800-1,900 億利多台積電/NVDA/電網/核能/冷卻供應鏈。**hyperscaler capex $7,250 億**是整個 AI infra 鏈（我跑的 AVGO/MRVL/CIEN/VRT/MU 等全部）的需求保證書
- **微軟 (MSFT) 主題四**：「爬山機」+ 混合定價 + 拒絕賣 GPU 給投機新創 = 長線結構優勢。接 deep-33 微軟
- **§7.6/7.7 校準提醒**：KP 兩個「破除鬼故事」（記憶體減半 / 太空股修正）示範了「市場短期敘事 vs 結構真相」的落差 — 正是我 §7.5 FOMO lens「看清問題」的核心訓練

## Full Text 備註
KP 週末筆記 5 主題格式 + 宏觀加息/擇時心態開場，完整正文已收錄 Key Takeaways（user 文字稿，2026-06-05 發布）。內引 deep-47 Cloudflare / deep-44 雲端 / deep-43 CPU / deep-45 被動元件 / deep-33 微軟。
