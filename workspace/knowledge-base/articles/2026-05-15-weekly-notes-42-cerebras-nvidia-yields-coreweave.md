---
title: "長端利率上升怎麼辦？Cerebras上市，對Nvidia，台積電，記憶體廠有甚麼啟示？ - KP思考筆記(第42期)"
url: "https://www.fomosoc.com/p/cerebrasnvidia-kp42"
source: "FOMO研究院電子報"
date_saved: 2026-06-14
date_published: 2026-05-15
language: zh-TW
type: article
tags: [weekly-notes, Cerebras, IPO, WSE-3, wafer-scale, SRAM, HBM, memory-bandwidth, inference, NVIDIA, NVDA, TSMC, Groq, OpenAI, AWS, Bedrock, SoW, CoWoS, advanced-packaging, bond-yields, NACHO, inflation, oil, Fed, higher-for-longer, CoreWeave, CRWV, Nebius, NBIS, neocloud, EBITDA, operating-margin, Micron, MU, SK-Hynix, Samsung, fundamental-investment]
related_projects: [kurt-library, fundamental-platform]
---

# 長端利率上升？Cerebras上市對 NVIDIA/台積電/記憶體廠的啟示 - KP思考筆記(第42期)

> 開場（投資心態）：科技股連漲一個月後回調，**最真實的原因往往只是「漲太多了」**。人類本能需要確定性 → 偏好驚悚宏觀敘事，但很多波動純是情緒+籌碼隨機碰撞。「**承認自己不知道**」是成熟投資者最珍貴品質。KP 做法：不猜轉折點，**動態調整倉位**（漲多的減碼，利潤重配到深度研究後認為被低估但表現平平的標的）。「深度研究」是唯一門檻 —— 才能辨別「被錯殺 vs 真不行」。

## 主題一：殖利率突破新高，泡沫要爆了嗎？

- Trump-習峰會表面友好（波音 200 架訂單）但**債市完全不同故事**：10Y 殖利率破 4.5%，**30Y 破 5%（2007 以來首次）** = 市場「沒拿到需要的東西」
- **市場真正在等的是伊朗**（不是波音/中美關係）—— 中國會否幫解決荷姆茲海峽（全球 ~20% 石油貿易）。美伊戰爭後航道半封閉,油價 >$100/桶滲透經濟:**4 月 PPI +6%（2022 來最強）/ CPI 3.8%（逆轉降溫）**,能源是主因。峰會無伊朗突破 → 債市判定通膨不會快消失
- **NACHO 交易**（"Not A Chance Hormuz Opens"，繼 TACO 後新暗語）：做多原油/能源股 + 做空長債 + TIPS/黃金/油輪股。押注海峽持續受阻、油價高、通膨黏
- **Fed 含義**：波士頓聯儲 Collins「2026 不降息,要到 2027」（最鷹）。但**升息也非主流** —— 因判定是**供給面衝擊（伊朗戰爭）非需求過熱** → 教科書反應「觀望」（升息解決不了地緣,降息也壓不下油價）→ **Higher for longer**
- **對投資人**：長端殖利率↑ → 高估值成長股折現率↑ 受壓。「不需要世界末日才有理由賣股,只需敘事轉變」（「降息很快來」→「不知何時來」）。不是牛熊二元,是「不確定性增加但基本面沒崩」→ 減碼鎖利合理（風險報酬變了,非看空）
- **撐過此階段的公司**：真實現金流 > 未來成長故事;有定價權;乾淨資產負債表。**核心問句:「若利率維持此水位一年,這公司會怎樣?」**

## 主題二：Cerebras 狂飆千億市值，但年營收只有 5 億？

- 2026/5/14 Nasdaq 首日收漲 68%，市值從發行 $560 億衝近千億（2026 迄今全球最大科技 IPO）
- **S-1 數字**：2025 營收 $5.1 億（+76%）;淨利由虧轉盈（2024 虧 $4.8 億 → 2025 賺 $2.37 億）;**Backlog $246 億**
- **反其道而行的異類**：半導體 50 年是「把東西做小」,Cerebras 說「我們不切」—— **整塊 300mm 晶圓 = 一顆晶片**。WSE-3 近 **4 兆電晶體（B200 的 19 倍）**,90 萬 AI 核心,44GB 晶片內 SRAM,面積是 H100 的 57 倍
- **為何大就是好 = 記憶體頻寬戰爭**：LLM 瓶頸不只算力,是資料搬運。傳統 GPU「廚師快但食材在隔壁大樓倉庫」;Cerebras「把倉庫搬進廚房」(44GB SRAM 做在晶片上) → 推論特別強（每吐一個 token 都要讀參數,頻寬越大吐字越快）
- **Cerebras vs Groq**（同解推論加速,路徑不同；Groq 2025/12 被 NVIDIA ~$200 億收編核心團隊+創辦人 Jonathan Ross）：
  - **Groq = 法拉利**（極致低延遲,單用戶秒回,適合 coding 助手/即時翻譯）
  - **Cerebras = 貨運列車**（極致吞吐量,多人同時用總輸出最大,吞吐量是 Groq 3-6 倍,適合高併發企業級）
  - 估值是 Groq 收購價近 3 倍 = 企業級多為高併發需吞吐量
- **「推論翻轉」（2026 初）**：全球運行 AI 累計支出正式超過訓練,推論佔 AI 算力支出 2/3。**Agent 放大問題**:單次聊天 $0.001,多步 agent（規劃/檢索/調用/反思/自我修正）每任務 $0.10-1.00 = **100-1000 倍乘數** → Cerebras 機會（專為推論優化）
- **OpenAI 超級大單**：到 2028 高達 **750 MW 算力（估值 $100-200 億）**,2030 可擴至近 3 GW。IPO 前夕進一步 >$200 億投入 + 認股權證可獲 Cerebras **~10-11% 股權**（買進提供算力的公司本身,類 Apple 自研晶片）。2017 內部郵件曾考慮合併追 AGI
- **進入 AWS（去客戶集中度）**：過去靠阿聯酋 G42/MBZUAI（2024/9 首次申請因客戶集中被擱置 1 年+）。2026/3 AWS 部署 + 2026 中 Bedrock 開放。**分拆式推論**:AWS Trainium 負責 Prefill（運算密集）+ Cerebras WSE-3 負責 Decode（記憶體頻寬密集）

## 主題三：「不可能」的晶圓級運算如何成真？（工程護城河）

- 50 年來晶圓級被視為不可能（1980s Trilogy Systems 燒大錢失敗）—— 一個灰塵/瑕疵就毀晶片。傳統切成數百小 die + 良率分箱
- **Cerebras 不切**：46,000mm² 晶圓,台積電 5nm 缺陷密度估每片隨機 40-50 缺陷 → 傳統良率趨近零
- **解法不是消除缺陷,是讓缺陷便宜可忽略**：
  1. **核心縮到 ~0.05mm²**（vs NVIDIA SM ~6mm²,小近 100 倍）→ 一缺陷只殺一個微不足道核心
  2. **海量內建冗餘**：97 萬核心保證 90 萬可用（100 座位教室預備十幾備用）
  3. **智慧片上互連網路**：即時偵測故障核心 → 隔離 → 像 GPS 重規劃繞道（對軟體透明）
  - 結果：把致命缺陷轉化為可控 ~7% 性能開銷
- **良率外的工程挑戰**：(1) **熱膨脹**（餐盤大晶片邊緣中心溫差變形扯斷連接 → 特殊封裝 + 垂直壓緊）(2) **散熱供電**（WSE-3 功耗 23-25 kW,冷卻液直流晶片背面）。**護城河不是「晶片大」,是「解決所有人認為不可能的製造工程問題」**
- **為何 NVIDIA 不複製**：(1) Chiplet 正在印鈔 (2) CUDA 生態鎖定 (3) 極高前期投入風險 (4) 設計假設完全不同（GPU 架構建立在「晶片是小的」前提,不能簡單放大）
- **單一供應商風險：台積電依賴**（WSE-1~3 全 16nm→5nm 台積獨家,「跨光罩互連」是與台積多年聯合開發專有製程,三星/Intel 沒有）。台積 5nm 先進產能仍供不應求（魏哲家:缺口可能達 AI 需求 1/3）,Cerebras 無長約須與 NVIDIA/蘋果/AMD 搶配額 = **最大近期執行風險**。好處:用 5nm 非最搶的 3nm/2nm

### 對台積電的啟示（計價模式 — 讀者 CK Chuang 互動）
- **wafer base（按片計價,客戶承擔良率風險,成熟高良率節點）vs die base（按良品計價,晶圓廠承擔風險,先進製程/大客戶）**
- Cerebras 內置容錯 → **每片晶圓不論多少缺陷都是「規格達標成品」→ 良率從談判桌消失**。迫代工經濟思維從「每片切多少晶片」轉向「每片創造多少系統價值」
- 台積已推 **TSMC-SoW（System-on-Wafer）平台** + InFO-SoW 封裝（自帶冷卻水管+垂直供電）支援。Cerebras = 活實驗「當良率不再是談判變數,整片晶圓當一個產品賣能帶多高技術溢價」
- **先進封裝反向思考**：業界都把複雜性推向封裝（CoWoS 堆 chiplet+HBM,但 CoWoS/HBM 是最大瓶頸）;Cerebras 反向把複雜性推回矽本身（單片整合,避開 CoWoS/HBM 瓶頸）

## 主題四：Cerebras 能撼動 NVIDIA 王座嗎？改變記憶體生態嗎？

- **記憶體頻寬本質差異**：HBM「圖書館在城市另一端」（288GB 大但要開車拿,8 TB/s）vs Cerebras SRAM「書桌旁智慧書架」（44GB 小但伸手就拿,**21 PB/s ≈ NVIDIA 2,600 倍**）
- **HBM 金飯碗會破嗎？沒那麼簡單**：
  - 訓練 + 超大模型（塞不進 SRAM）→ 仍需 HBM 大圖書館（Cerebras 也需外部 DRAM 池,SRAM 只是超快工作區）
  - 部分推論（模型可塞進 SRAM）→ SRAM 架構減少 HBM 依賴
  - **市場分水嶺**：訓練/超大模型靠 HBM;高效率問答可用 SRAM。風險=若越多客戶選 SRAM 處理日常問答,HBM 利潤最高那塊被削弱。**短期 HBM 仍嚴重缺貨,Cerebras 更像「需求洩壓閥」非立即威脅**
  - **記憶體廠戰略**：可與 SRAM 密集加速器共同開發混合架構（小 HBM 存冷權重 + 大 SRAM 處理熱工作集）
- **為何 Cerebras 註定利基玩家（三道關卡）**：
  1. **系統級成本難攤薄**：NVIDIA Chiplet = 標準樂高（電源/散熱/機架共享,規模越大單位成本越低）;Cerebras = 整塊大理石（每系統要專屬重型供電+液冷+封裝,成本按系統算無法分攤,買數百個也不顯著攤薄）
  2. **TCO 只在特定場景勝出**：「速度就是金錢」時 Cerebras TCO 可低 ~30%;通用靈活任務 GPU 勝。多數企業工作負載是混合的
  3. **CUDA 生態護城河**（最難跨）：全世界開發者習慣 CUDA,換 Cerebras = 重學/重測/重驗（左駕城市 vs 右駕車）
- **NVIDIA 三反擊**：(1) 把優勢做極致（HBM 288GB→HBM4,NVL72/Vera Rubin）(2) 採納對手策略（收 Groq 做 SRAM「推論副駕」）(3) 用 CUDA/TensorRT-LLM 軟體模擬對手優勢
- **Cerebras 真正改變的**：不是市佔率,是「**挑戰只有 GPU 能引領 AI 效能的假設**」。改變競爭賽道（NVIDIA 要回答「耗電相同下每秒吐多少字」）。是「探路先鋒」開闢以記憶體+功耗效率為核心的新路。即使長期市佔個位數,架構賭注已重塑產業如何思考整合極限/HBM 角色/AI 運算經濟學
- **未來十年版圖**：GPU 主導訓練+通用（全能 SUV）+ SRAM 密集加速器（Cerebras/Groq/SambaNova）佔極致效率推論（F1 賽車）

## 主題五：CoreWeave vs Nebius 財報後走勢為何天差地遠？

- 同是 neocloud,同超預期營收,市場反應相反（CoreWeave 重挫 / Nebius 飆升）—— 關鍵在兩個利潤率數字
- **CoreWeave 困境**：Adjusted Operating Margin 從去年 17%/上季 6% **斷崖跌到 1%**。管理層歸因「時間差非經濟」（新產能成本立即產生,收入要 1-3 月才體現,「Q1 是利潤率谷底」）。但 Q2 財測印證陣痛:營收指引 $25.3 億 < 預期 $26.9 億;營業利潤 $0.3-0.9 億 << 預期 $1.54 億（利潤率僅回 ~3.7%）。全年 7-9% 目標意味 70-80% 利潤須下半年實現。坐擁近千億 backlog 但市場質疑轉化能力
- **Nebius 效率玩家**：連續多季產能售罄「我們建的一切都賣出去了」。**先接單後擴產** → 新設備一上線立刻產生收入,成本回報完美對齊。AI 業務 EBITDA margin 45%（略低於 CoreWeave）但能高效轉成實質營業利潤
- **EBITDA vs 營業利益率（核心）**：
  - CoreWeave **EBITDA 56%（單位經濟極佳）但營業利益率僅 1%** —— 56 元現金流被龐大設備折舊 + 舉債利息吞噬。「一次全球開 1000 家直營店,折舊海嘯+巨額債務」
  - Nebius **EBITDA 45% 但能轉成實質營業利潤** —— 「店還沒開訂單就滿」,輕盈擴張無沉重債務利息
- **市場解讀**：CoreWeave「成長很好但利潤率何時改善？」;Nebius「超高速成長 + 獲利路徑確認」。**不確定環境中「能穩穩把現金放進口袋」遠比宏大敘事安心**
- **但 CoreWeave 故事未失敗**：若挺過陣痛讓數萬 GPU 全運轉,56% 超高 EBITDA 規模效應潛力 > Nebius。**EBITDA 決定「潛力天花板」,營業利益守「生存地板」**
- 風格：CoreWeave =「高槓桿高風險高潛力」;Nebius =「高效率低風險穩健」

## 投資 implication（接 fundamental-platform / KP 主題）

- **宏觀框架（主題一 = 重要）**：**Higher for longer + 供給面通膨（NACHO）** → 高估值成長股折現率壓力。直接呼應我 §7.6 R1 super-cycle TG / WACC 規則 —— **利率環境變了,跑 ER 的 WACC 假設要反映 30Y 破 5% 的新現實**。KP「若利率維持一年這公司會怎樣」= 完美的 §7.5 falsifiable 壓力測試。接 deep-46 能源供應鏈（美伊戰後 LNG/油服）
- **Cerebras（未上市前無 ER,但啟示重大）**：
  - **HBM 不會被殺,是「需求洩壓閥」** → 校準我對 MU/SK Hynix/Samsung HBM super-cycle 的看法（notes-45 已記「被砍的是 LPDDR5X 非 HBM4」,此篇進一步:SRAM 推論架構長期是 HBM 細分競爭但短期缺貨無虞）→ **MU ER 須把 SRAM 推論架構列為長尾風險變數,但非近期 thesis breaker**
  - **台積電 SoW 平台** = 晶圓級系統新高毛利訂單（接 deep-25 先進封裝 CoWoS / deep-30 設備商）。台積是 Cerebras 唯一代工 → 台積 ER 的 AI 訂單品質再加分
  - **NVIDIA 護城河驗證**：三道關卡（系統成本/TCO/CUDA）證明 Cerebras 侵蝕的是「假設」非「市佔」→ 強化 NVDA thesis（我已跑生態 ER）
- **CoreWeave vs Nebius（主題五 = 最 actionable 財務框架）**：**EBITDA 天花板 vs 營業利益地板** 是 neocloud ER 的核心判準。CRWV/NBIS 都是 fundamental-platform ER 候選 —— 重點不是看 EBITDA（都高）而是**折舊+利息吞噬後的真實營業利潤 + backlog 轉化能力**。接 deep-44 Oracle/CoreWeave/Nebius。⚠️ CRWV「近千億 backlog 但 1% 營業利潤」是 §7.6 bubble check（敘事跑在獲利前）的典型
- **§7.5 訓練價值**：KP 兩個大主題（殖利率 + Cerebras）都是「看穿表象 vs 結構真相」—— 正是我 §7.5 FOMO lens 核心。Cerebras 千億市值 / $5 億營收 = §7.6 exception list（bubble valuation）觸發案例

## Full Text 備註
KP 週末筆記「一大兩小」實為 5 主題,完整正文已收錄 Key Takeaways（user 文字稿,2026-05-15 發布）。內引 deep-46 能源 / deep-44 雲端 neocloud / deep-30 設備商 / deep-27 Groq / deep-25 先進封裝。讀者 CK Chuang 確認 wafer base vs die base 計價傳統。圖表（WSE-3 規格、SRAM vs HBM 比喻、CoreWeave/Nebius 利潤率拆解）見原始連結。
