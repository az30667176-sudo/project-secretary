---
title: "邊緣AI的贏家？Agentic AI的受惠者？是資安還是網路基礎設施公司？ - 深入分析第47期：Cloudflare"
url: "https://www.fomosoc.com/p/aiagentic-ai-47cloudflare"
source: "FOMO研究院電子報"
date_saved: 2026-06-14
date_published: 2026-05-13
language: zh-TW
type: article
tags: [deep-dive, Cloudflare, NET, edge-AI, edge-computing, agentic-internet, connectivity-cloud, CDN, WAF, DDoS, Workers, Workers-AI, R2, zero-trust, Cloudflare-One, SASE, SSE, ZTNA, Zscaler, ZS, Palo-Alto, Akamai, Fastly, peering, serverless, GPU-utilization, inference, egress-fees, AWS, data-flywheel, EV-Revenue, usage-based, DBNR, gross-margin, Matthew-Prince, fundamental-investment]
related_projects: [kurt-library, fundamental-platform]
---

# 邊緣AI的贏家？是資安還是網路基礎設施公司？ - 深入分析第47期：Cloudflare

## Summary

中文世界目前最系統的 **Cloudflare (NET)** 深度拆解（10 章）。核心論點：Cloudflare 難被單一標籤定義（資安 / 網路基建 / 官方自稱「連線雲 Connectivity Cloud」），因為它是「**先鋪全球網路基礎設施，再無極限疊加商業服務**」的教科書案例 —— 全球近 **20% 網站流量**經過它。四階段演化（每次都在**同一張全球邊緣網路**上有機長出新業務，非併購拼湊）：(1) 2010-15 免費「網路門神 (WAF/DDoS) + 地方快遞 (CDN)」用免費增值打造**數據飛輪**護城河 (2) 2017 Workers 邊緣運算「把工廠搬到客戶家門口」(3) 2020 疫情催化零信任 Cloudflare One 進攻 Zscaler (4) 2021 R2 零 egress 打破 AWS 資料過路費。**真正估值支點 = 第八章 Edge AI 推論**（目前僅佔營收個位數%，卻撐起近 30x EV/Revenue ≈ 同業 4-5 倍）。Q1 2026 財報超標但股價單日 **-24%**（成長 34%→指引 30% + 裁員 20% + 毛利率 77%→72.8% 歷史低點）。**核心判斷：CDN+零信任決定下檔，Edge AI 決定上檔；買 NET = 優質基本盤 + 一張 2030 Edge AI 主導權的看漲選擇權。**

## Key Takeaways

### 四道護城河（第六章）
1. **與電信商 Peering 互惠**（手握全球 20% 流量當談判籌碼 → 免費/極低成本頻寬，對手砸錢也買不到流量籌碼）
2. **自研一體化軟體架構（全節點同構）**：每台伺服器能執行所有任務（攻擊來時全變盾牌，平時做 AI 推論）→ 併購拼湊的老牌大廠無法打掉重練
3. **全球最大免疫系統（數據飛輪）**：數百萬免費小網站當「預警雷達」→ 0.1 秒全球同步防禦特徵 → 對手買不到 20% 真實流量訓練資料
4. **開發者生態（高轉換成本）**：300 萬+ 開發者程式碼綁在 Workers/R2，回不去 AWS

### 商業引擎四階段（第七章，營收佔比為推算，公司只揭露單一 segment）
- **Act 1 應用+網路服務（~50-55%）現金牛**：純 CDN 成長 15-22%（被新業務拉高的整體 +34%）。CDN 市佔近 80%。vs Akamai delivery -7% / Fastly +11% → Cloudflare 仍最快（架構/易用/AI 爬蟲流量紅利）
- **Act 2 零信任 Cloudflare One（~20-25%）第二引擎**：**快速追趕者非領導者**（Zscaler SSE 34% 市佔遙遙領先，Cloudflare 不在前六）。三王牌:速度（ZTNA 比 Zscaler 快 10%+）+ 定價（50 人免費,$7/人/月 vs Zscaler 數十美元）+ 部署簡單（無 client/VM）。Zscaler 反擊:DLP/CASB 深度 + 財星 500 信任。百萬美元客戶 +73%,DBNR 118%
- **Act 3 開發者平台（~15-20%）爆發力最強**：Workers + R2（零 egress 打破 AWS 過路費）。2025 Q1 簽史上最大 >$1 億合約
- **Act 4 Edge AI（個位數% 但承載全部估值敘事）**

### Edge AI 估值支點（第八章 — 核心）
- **四層 Edge 定位**：裝置端(Apple)/​**近邊緣 = Cloudflare 主戰場(10-50ms)**​/區域雲/集中式雲(AWS)。**不需打敗 AWS/Apple,只要中間層第一名**
- **市場**：AI 推論 2030 >$2,550 億,Edge 子市場 CAGR 20-37%。**推論翻轉**（2026 推論超越訓練,佔 AI 算力 2/3）
- **四張牌**：(1) 335 城市 GPU 節點繼承免費頻寬,AWS 複製需 5-10 年+數百億 (2) **Serverless GPU 使用率 70-80% vs AWS 30-50%**（同顆 H100 單位成本低近半）(3) 自研推論引擎 Infire + Unweight 壓縮 -22% (4) 代理化網路全產品線順風（安全/效能/運算）
- **代理式網路**：人類 1 任務 5-10 請求 → AI agent 500-1000 請求,5-10 年網路請求量放大 50-100 倍。三特性（低延遲/安全/全球分散）精準對應 Cloudflare 三能力
- **三挑戰**：(1) Hyperscaler 反撲（供應鏈掌控,NVIDIA 先供巨頭）(2) 多數推論仍在集中式雲（大模型/規模經濟/管理）(3) **還沒變成別人付錢**（600% 用量/4000% 請求是虛榮指標,外部 Workers AI 營收未獨立揭露）
- **數學槓桿**：Edge AI 2030 取 $1,500 億,Cloudflare 拿 10% = $150 億（現總營收 6 倍）;拿 5% = $75 億（翻 3 倍）→ 解釋 30x EV/Revenue

### Q1 2026 財報（第九章）
- 營收 $6.398 億(+34%) 超標,Non-GAAP EPS $0.25,上調指引 → **但股價 $257→$196 單日 -24%**
- **三觸發**：(1) Q2/全年指引降至 30%（基期 + 新舊引擎換檔青黃不接）(2) 裁員 20%（~1,100 人,定調「Agentic AI-first」進攻性重構）(3) **毛利率 77.1%→72.8% 八季最低**（GPU 採購陣痛,非失去定價權 → V 形反轉:採購↓→部署觸底→使用率↑回升,**官方:GPU 使用率已 70-80%**）
- 大客戶:百萬美元 +73%（2024 來最快）/ $5M+ +50%。**DBNR 降至 118%**（新客強簽稀釋既有擴張）。FCF $8,410 萬(13%)。Rule of 40 >46%
- GAAP 虧 $6,200 萬主因 SBC（非現金）

### 投資決策框架（第十章）
- **30x EV/Revenue 拆解**：基本盤（CDN + 零信任）僅撐 15-20x;剩 10-15x 溢價 = 市場把它當「**Edge AI 看漲買權**」（非虛無彩券,Workers 今天已產真實營收）
- **三情境**：多頭 25%（AI 營收爆發+獨立揭露+毛利回升,維持 30-35x）/ 基準 55%（基本盤穩但 AI 雷大雨小,降級「優質 SaaS」估值壓縮死錢）/ 空頭 20%（AI 拖累毛利+DBNR<115%,壓縮至 10-12x,下行 40%+）
- **六追蹤指標**：AI 營收是否獨立揭露 / 毛利率 V 拐點(回 75%) / DBNR+百萬大單動能 / RPO 成長率 / FCF 利潤率(守 10%) / 裁員後 18 月人均營收
- **歷史參照**：Salesforce（虧損 SaaS 終達 OM 20%+）/ AWS（低毛利高 capex 10 年變印鈔機,前提=使用率+規模經濟）/ Datadog（EV/Rev 50x→12x,短期壓縮必然）。但也有「以為下一個 AWS 結果是 Rackspace」的殘酷案例
- **Usage-based 結構性紅利**：市場擔憂 AI agent 侵蝕 seat-based SaaS（Salesforce/ServiceNow），但 **Cloudflare 純按用量計費 → agent 化浪潮對它是順風**（100 員工→1000 agent,計費器多跳）
- **創辦人 Matthew Prince 主導 15 年**,TAM 從 IPO $320 億→2026 $1,960 億（6 倍,非併購堆出）

## 投資 implication（接 fundamental-platform / KP AI infra 鏈）

- **Cloudflare (NET) = fundamental-platform ER 高優先候選,但極端 §7.6/§7.7 案例**：
  - §7.6 bubble exception:30x EV/Revenue ≈ Zscaler 3 倍,「沒有下檔鎖死」（壓縮到 15x 就腰斬）→ 跑 ER 須觸發 §7.5/7.6/7.7 全套
  - §7.7 narrative monopoly:「Edge AI 看漲買權」是 M5 敘事壟斷 + M6 convex option bid 的教科書;effective FV = 基本盤 FV(15-20x) + Edge AI premium。剛 -24% 修正 = 進場時點討論
  - **KP 的「下檔(CDN+零信任) vs 上檔(Edge AI)」框架** = 完美的 §7.5 結構拆解模板,可直接套進 NET ER 的 Section 11
- **與 deep-48 Nokia/Cisco 的關係**：Cloudflare = **軟體定義邊緣**（近邊緣推論 + 資安）;Nokia/Cisco = **硬體 scale-across**（DCI 整機）。都吃 AI infra 但不同層 —— Cloudflare 不蓋 DCI,是跑在其上的應用/推論層
- **零信任 cluster ER**：NET vs **ZS (Zscaler,領導者)** vs PANW vs Akamai/Fastly（CDN 衰退對照）。KP 點出「市佔第一 ≠ 投資首選,看增速」= §7.6 R7「don't fight structural」的反面（這裡是 challenger 搶份額）
- **§7.6 校準提醒**：Q1 -24% 證明「財報超標但指引降速 + 高估值」會崩 —— 呼應 notes-42 的「不需世界末日,只需敘事轉變」。NET 是「優質基本盤 + 高波動高估值」典型,非防禦資產
- **Usage-based vs Seat-based 框架**：跑任何 SaaS ER 都該問「agent 化是順風還是逆風」—— NET/Datadog/Snowflake(usage) 順風 vs Salesforce/ServiceNow(seat) 逆風。接 deep-35 SaaS 大屠殺
- **Pay per Crawl（讀者補充）**:Cloudflare 開發中的 AI 爬蟲付費機制（內容創作者向 AI 公司收費）+ 穩定幣付款（Circle Agent Stack）= 潛在新成長曲線,值得追蹤

## Full Text 備註
原文 10 章完整正文已收錄 Key Takeaways（user 提供文字稿,2026-05-13 發布,Paid 內容）。KP 強調「非喊單買入,目的是讓讀者按交易鍵前清楚:買什麼/錢流向哪/風險邊界」。內引 deep-35 SaaS / deep-27 Groq。圖表（四階段演化、四層 Edge、護城河、財報 slides、三情境）見原始連結。讀者 CYYU:$45 買入 $90-120 出清後再沒低點買回,看完才真懂這公司決定重新建倉。
