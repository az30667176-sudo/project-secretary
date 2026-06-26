---
title: "被遺忘的巨人重返巔峰？跨資料中心互連（DCI）成下一重點？ - 深入分析第48期：Nokia，Cisco"
url: "https://www.fomosoc.com/p/dci-48nokiacisco"
source: "FOMO研究院電子報"
date_saved: 2026-06-14
date_published: 2026-05-20
language: zh-TW
type: article
tags: [deep-dive, AI-datacenter, networking, DCI, scale-across, Nokia, NOK, Cisco, CSCO, Ciena, CIEN, Arista, ANET, Broadcom, AVGO, Marvell, MRVL, NVIDIA, coherent-optics, silicon-photonics, Infinera, Acacia, Silicon-One, P200, Ultra-Ethernet, UEC, InfiniBand, AI-RAN, deep-buffer, 800G, 1.6T, SOTP, re-rating, fundamental-investment]
related_projects: [kurt-library, fundamental-platform]
---

# 被遺忘的巨人重返巔峰？跨資料中心互連（DCI）成下一重點？- 深入分析第48期：Nokia，Cisco

## Summary

本文論證 **Scale-Across（跨資料中心互連 / DCI）是 2026 AI 算力大戰的新決勝點**，並解釋兩家「失落巨人」**Nokia (NOK)** 與 **Cisco (CSCO)** 為何重返華爾街聚光燈（Nokia 創 16 年新高、Cisco AI 訂單從 $50 億上修至 $90 億）。核心物理邏輯：當 hyperscaler 目標從 1 萬 GPU 衝到 **10-100 萬 XPU**，單一資料中心撞上土地/電力/散熱物理極限（10 萬 GPU ≈ 整個中型城市用電）→ 蓋不出「200 層摩天大樓」只能蓋「八棟 50 層 + 空橋連起來」。Scale-Across 是繼 Scale-up（NVLink，機架內）/ Scale-out（機架間）後的**第三層網路**，串聯數十公里外多個 AI factory 成一台邏輯超級電腦。技術門檻極高因 AI 是「機器流量」（零容錯同步,一個封包遲到=百萬 GPU 空轉）vs「人類流量」（容錯重傳）→ 需 **極致頻寬(800G→1.6T→3.2T) + 微秒級延遲 + 無損傳輸(deep buffer)**。**核心論點：沒有任何純玩家能通吃,Scale-across 從「單點技術領先」轉向「晶片+光學+系統+服務」全面整合 —— 這正是 Nokia/Cisco 30 年本業**。歷史重演:2000 年代 IP 取代電信網路時整合者 Cisco 擊敗純光纖玩家。

## Key Takeaways

### Scale-Across = AI 網路第三層（第一、四章）
- 三層架構：**Scale-up**（機架內 GPU-GPU,公分~公尺,NVLink 稱霸）/ **Scale-out**（機架間,廠房內,Ethernet/InfiniBand）/ **Scale-across**（資料中心間,數十公里,DCI）
- 過去 DCI/WAN 為「人類流量」設計（容錯/重傳/非同步）→ 無法承受 AI「機器流量」(每 epoch 幾十萬 GPU 同步交換權重梯度,一次封包遺失整個百萬 GPU 叢集停等 = Straggler Problem,每小時數百萬美元閒置)
- **三大需求**：(1) 頻寬 800G→1.6T→3.2T（AI 5-8 年世代縮成 1-2 年,單 step 傳數十 GB,每日 PB 級）(2) 微秒級延遲（比一般網路嚴格數萬倍）(3) 無損傳輸（硬體層 deep buffer,不靠軟體重傳）
- **銅纜 3 公尺極限**（800G+ 訊號衰減）→ 長距離唯一解 = 光纖（需 coherent optics + DSP + 光放大/色散補償 + 奈秒時鐘同步）

### Nokia = 押光纖層（第二、五章）
- 「B 面 Nokia」電信/資料基礎設施一直存在,被手機光芒掩蓋。2007 手機霸主($1500億)→2014 $72億賤賣微軟→2016 $166億併 Alcatel-Lucent 賭 5G 超級週期落空→2023 市值<$200億「停滯設備商」
- **轉機三張牌**（2025/4 新 CEO Justin Hotard 來自 Intel 資料中心 AI 事業群）：
  1. **Infinera 武器化**（2024 中 $23 億併,客戶是 Google/Meta/MS 的 DCI）→ 一夜從「賣電信」變「賣 AI 巨頭」
  2. **NVIDIA $10 億入股 + AI-RAN**（GPU 放進基地台變推論節點,電信 5G 投資第二變現路徑）— 但仍早期,2026 試點/2027 商業版
  3. **資料中心交換器 7220 IXR-H6**（102.4 Tb/s,符合 Ultra Ethernet,直闖 Cisco/Arista）→ NI 成長指引 6-8% 上調到 12-14%
- 策略：光纖層**往上**延伸（光纖長傳 → 7750 IP 路由 → 7220 交換器）

### Cisco = 押路由層（第三、五章）
- 2000/3/27 市值超微軟登頂($5500億)→泡沫破跌 90%→雲端化三面夾擊:**Arista**(白牌系統,價格半價)+ **Broadcom**(純賣晶片,毀 Cisco ASIC 獨家秘方)+ **NVIDIA**(2019 收 Mellanox InfiniBand 繞過 Cisco)
- CEO Chuck Robbins 覺醒「絕不再錯過下一個時代」「沒有矽就難保相關性」→ **四步棋**（三步在 ChatGPT 前佈下）：
  1. **Silicon One**（2019,自研晶片開放單賣,殺入 Broadcom 主場;2025 **P200** 深度緩衝 deep buffer 搞定 scale-across AI 流量）
  2. **Acacia**（2021 $45 億,光學模組,2026 單季訂單破 $10 億）
  3. **Splunk**（2024 $280 億,觀測層,AI 機房中樞神經）
  4. **Isovalent**（2025,Cilium/eBPF 雲原生網路軟體層）
- 戰略地圖：晶片(Silicon One)→光學(Acacia)→觀測(Splunk)→雲原生(Isovalent),橫跨整個 AI infra 堆疊
- 策略：路由層**往下**延伸（Silicon One → 8223 路由器 → Acacia 光學介面）

### 競爭格局（第六章 — 關鍵）
- **光纖層對手 = Ciena (CIEN)**：最純光纖玩家（股價漲幾倍）,WaveLogic 6 領先 1.6T。但 Nokia 贏在端到端整合 + AI-RAN + 財務規模
- **路由層對手 = Broadcom（晶片層 Tomahawk）+ Arista（系統層,靠 Broadcom 晶片 + EOS 軟體）**。Cisco 贏在自研 Silicon One 垂直整合（Arista 只能改軟體,硬體受制 Broadcom 時程）
- **NVIDIA 從上壓下**：Scale-up 絕對統治（NVLink/InfiniBand）,但 scale-across 缺長距 coherent optics（須靠 Nokia/Ciena）+ 封閉生態與 hyperscaler「開放多供應商」衝突。2025/8 推 Spectrum-XGS 試圖納入 scale-across
- **UEC（Ultra Ethernet Consortium,2023 成立,AMD/Broadcom/Cisco/Meta/MS/Oracle）**：開放乙太網對抗 NVIDIA InfiniBand 封閉生態。Meta/MS 新叢集採 UEC → 利多 Broadcom/Cisco/Nokia/Arista
- **反直覺結論**：沒有純玩家通吃 → 整合者贏（歷史重演 2000s IP 取代電信）

### 財報實證（第七、八章）
- **Cisco Q3 FY26**（過去十年最重要財報）：營收 $158億/EPS $1.06 雙超預期;**產品訂單 +35%（網路 +50%）**;AI 訂單前三季就 $53億（原全年目標 $50億）→ **全年上修 $50億→$90億（近翻倍）**,FY27 AI 營收預告 ≥$60億;Acacia 光學單季破 $10億/全年 +200%。三引擎:Scale-out 主力(G200/G300,+40%)+ Scale-across(P200 拿首批 hyperscaler 設計訂單)+ 光學。隱憂:服務營收 -1%、毛利 68%→66%、裁員 5%(~4000人)
- **Nokia Q1 2026**（轉型結構性證據,股價 16 年新高）：2026/1/1 三板塊重組「估值工程」(NI 成長引擎 €76億 由前 Infinera CEO 領軍 / MI 現金牛 €114億 / Portfolio 待處置)。整體營收只 +4% 但 **AI 客戶營收 +49%（報告基礎 94%）**、毛利率 +320bp 到 45.5%、**book-to-bill 近 2.8 倍**（接 €10億訂單只認 €3.5億營收）、TAM CAGR 預估 16%→27%。淨現金 €38億

### 估值思辨（第七、八章 — KP 強調「理解框架重於數字」）
- **Cisco re-rating**：現價 ~$110-120,前瞻 P/E 26-27x 正往「AI 贏家」(視角 C 25-32x,對標 Arista/Broadcom)靠攏。SOTP 保底 ~$85（下檔 25-30%）;FY27 EPS 共識 $4.30-4.50,樂觀衝 $5.50。樂觀 30x×$5.50-6 / 基準 26x×$5-5.3 / 悲觀 16x×$4.5
- **Nokia SOTP**「親兄弟明算帳」：NI 光學給 30x+（對標 AI 股）+ MI 現金牛 12-14x。樂觀情境光學佔總值 75% = 實質純血 AI 公司。AI-RAN 是「不對稱免費彩券」非主角
- **追蹤指標**：Cisco 看 AI 訂單/季 >$20億、Acacia 光纖佔比 20%→30%、800G 模組出貨 4萬→20萬、毛利率守 65%;Nokia 看 book-to-bill(掉 <1.5 警訊)、AI 佔營收 8%→15%、高層是否續調高預估

### 風險與想像力（第九章）
- **四風險**：(1) 客戶極度集中（四大雲廠,一家砍 capex 整板塊雙位數回檔）(2) 需求前置 pull-forward（怕缺貨提前下單）(3) 毛利天花板（買方議價力 + SONiC 開源自製化）(4) 技術標準未定（UEC vs UALink vs InfiniBand 三分天下）
- **五想像力**：scale-across 1.0 只是開始（跨城跨州跨洲）/ 推論時代網路需求才剛開始 / **電力地理學**（限制從算力變電力 → scale-across 從「有更好」變「沒有不行」剛需）/ AI-RAN 免費彩券 / re-rating 指數級未知
- **Scale-across 不滿兩年,無歷史週期** → 高波動率故事,所有訂單建立在「hyperscaler 續以此速建 AI 工廠」假設

## 投資 implication（接 fundamental-platform / KP AI infra 鏈）

- **補上你 AI infra 鏈的「整機系統」缺口**：deep-23 光通訊（MRVL/LITE/COHR/FN,組件）→ notes-44 Marvell（互連晶片/DSP,**上游供應商**）→ **deep-48 Nokia/Cisco（整機系統,下游)** → deep-50 HVDC 台達電（供電）。**Marvell 是 Cisco/Arista 的上游供應商非對手**（賣 Inphi DSP/矽光子給系統廠）
- **fundamental-platform ER 候選排序（scale-across 純度）**：
  - **CIEN** = 最純光纖 scale-across 玩家（WaveLogic 6,1.6T 領先）— 高 beta 純度但客戶集中
  - **ANET** = 系統層,靠 Broadcom 晶片 + EOS（讀者問「ER 後股價市場唔 buy ANET 故事」= 估值已高分歧訊號）
  - **CSCO** = re-rating 進行式,「AI 半曝險」+ 穩底盤股息（保守型）;SOTP 保底 $85
  - **NOK** = 純度高於 Cisco 的光學 AI proxy + AI-RAN 彩券,但敘事風險更高
  - **AVGO** = Tomahawk 晶片層霸主（我已跑 ER + memo,Buy $520）— scale-across 晶片受惠
- **§7.6/§7.7 警示**：CIEN/ANET 已大漲幾倍 = multiple expansion 跑在 earnings 前面（同 VECO/ACMR 病）。CSCO re-rating 較溫和有底盤,風險報酬可能優於純玩家 — 跑 ER 須用 §7.5/7.6/7.7 校準
- **UEC vs InfiniBand 標準戰**：UEC 普及利多 Broadcom/Cisco/Nokia/Arista;InfiniBand 續主導利多 NVIDIA。跑這些 ER 須把標準路線當關鍵變數
- **電力地理學連結**：scale-across 剛需 ← 電力限制（deep-50 HVDC / AI power synthesis）→ 整個 AI infra 鏈「光連接 + 電供應」雙瓶頸閉環

## Full Text 備註
原文 9 章完整正文已收錄 Key Takeaways（user 提供文字稿,2026-05-20 發布,Paid 內容）。圖表（三層架構、四步棋地圖、SOTP 拆解、Cisco/Nokia 財報 slides）見原始連結。KP 反覆強調估值數字僅「參考底線」,理解邏輯框架重於具體目標價。
