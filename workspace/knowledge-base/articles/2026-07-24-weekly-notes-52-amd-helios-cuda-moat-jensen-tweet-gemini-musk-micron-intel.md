---
title: "CUDA護城河被削弱?黃仁勳在X首次發文?Gemini真的不行了嗎?- KP思考筆記(第52期)"
url: "https://www.fomosoc.com/p/cudaxgemini-kp52"
source: "FOMO研究院電子報"
author: "KP@FOMOSoc"
date_saved: 2026-08-16
date_published: 2026-07-24
language: zh-TW
type: article
tags: [weekly-notes, AMD, Helios, MI455X, UALink, attach-rate, NVDA, CUDA-moat, open-weights, jensen-first-tweet, GOOGL, Gemini-Flash, distribution-war, TSLA, MU, Optimus, humanoid-memory, Terafab, INTC, Xeon-6, foundry-crowding-out, ROCm, Claude]
---

# KP 週記 52(一週年):Helios / CUDA 退潮 / 黃仁勳首推文 / Gemini / Musk 謝美光 / Intel 業績

> 一週年開場:「半分鐘給你的是資訊,一個小時給你的是思考的框架。資訊會過期,框架不會。」

## 主題一|AMD Helios:從賣引擎到賣整車

- **AMD 首個機櫃級平台**:72× MI455X + 18× EPYC Venice + **31TB HBM4** + Pensando 網卡 + 全套液冷;基於 Meta 主導的 **ORW 開放規格**、UALink-over-Ethernet(scale-up)+ Ultra Ethernet(scale-out)—— 客戶可自選 Broadcom/HPE 交換器,擺脫 InfiniBand/NVSwitch 綁定
- 首代妥協:UALink 跑在標準乙太網上(原生 UALink ASIC ~2027)= 協定開銷/延遲高於 NVLink —— 兼顧時效與開放的折衷
- **輕資產模式**:AMD 畫藍圖賣晶片(GPU+CPU+網卡),Supermicro/HPE 組裝 —— **搭售率從「碰運氣」變「寫在設計圖裡」**(Venice/Pensando 預設配置)
- 價格迷思:正確排序 **GB200/300(~$3-4M)≤ Helios(~$5M+)< Vera Rubin NVL72(~$7.8M MS 估)**,且記憶體多 ~50% —— 在 NVIDIA 世代交替窗口搶市占
- **訂單實錘:Microsoft(Azure 前沿推理)、Meta 6GW 多年大單、Anthropic 2GW MI450、Oracle+OpenAI 深度參與** → 市占 3-8% → 2027-28 可望破雙位數
- 估值含義:**「週期性 GPU 供應商」→「系統級平台公司」,生態折扣應適度收斂**

## 主題二|CUDA:從城堡變成一條會弄濕鞋的河

- **Anthropic 共同創辦人 Tom Brown 的故事:工程師把 MI355 機櫃丟給 Claude「幫我把這台機器搞起來」,跑過週末 → 連續改善的效能圖表** —— 模型正在替晶片寫軟體;Anthropic×AMD:2GW MI450 + 明文用 Claude 優化 ROCm
- DeepSeek 梁文鋒:「CUDA 護城河正在快速崩解」,已跑上萬張華為 Ascend 950
- KP 的精確定性:護城河從「**不可進入**」變「**偏好性**」(麻煩但可行);**新瓶頸 = 「寫得出」與「信得過」的落差** —— 稀缺資源從會寫程式的人變成「敢為機器程式碼扛責任的人」;NVIDIA 把黏性上移(賣智慧大樓非磚頭),且 agent 在 CUDA 上優化 10 分鐘 vs 他處 1 小時 = 削弱舊護城河的力量反成新水泥
- 「CUDA 沒有乾涸,只是從不可逾越的城堡,變成可以涉水而過、鞋子會濕的河」

## 主題三|黃仁勳人生首推文(7/24):Open Weights 聯署信

- 〈Open Weights and American AI Leadership〉:MSFT/Meta/IBM/HuggingFace/Palantir/CrowdStrike/a16z/YC 聯署 —— 「美國要贏靠開放生態非幾家閉源公司」;為蒸餾技術辯護
- 鏟子商的真實動機:閉源三巨頭全在磨自研晶片(TPU/Trainium/MTIA);**開放 = 生態從 3 個買家變一百萬個玩家(新創/大學/醫院/主權政府),每一個都要買 GPU** —— 「免費的 AI 對晶片是好事」;主權 AI 工廠 = 開放權重 + NVIDIA 全棧的天然搭配
- 核心句:「最有利的位置不是擁有最好的模型,是成為所有人跑模型時繞不過去的那一層」

## 主題四|Google:市場問排名,Google 打分發戰

- 承認弱點:Gemini 3.5 Pro 跳票、agentic coding「有點落後」(Pichai 自認)
- 真正的重心:**Flash = 中流砥柱**(3.6/3.5-Lite/Flash Cyber 快速迭代)—— 前沿模型是展廳概念車,Flash 才是每天開出停車場賺錢的
- 數字:AI Overviews+AI Mode 10 億 MAU、Gemini App 9.5 億 MAU(日活年翻三倍)、**API 吞吐 220 億 tokens/分鐘**(前季 160 億)、搜尋營收 +17%($633 億)、**Cloud +82%($248 億,營益翻三倍,backlog $5,140 億)**;capex 上調 $1,950-2,050 億
- 變現邏輯:Gemini 不是獨立商品,是搜尋印鈔機的**升級包**(AI Overviews 多曝光/AI Mode 高商業意圖/PMax 精準投放);未解張力:AI 摘要吃掉傳統自然點擊率
- 核心問題轉換:「當模型能力變成水電煤,誰擁有最大的管網?」

## 主題五|Musk 破天荒公開感謝美光

- Q2 電話會:美光在記憶體漲價「我見過任何東西裡最大的漲幅」下,以「合理條件」為 Tesla 保留產能分配 —— **Musk 從不謝供應商,謝了就要問他在鎖什麼**
- Optimus 現況:量極小(Fremont 產線安裝中、首批進內部 Academy、有意義放量 ~2027 夏、近萬個獨特零件)
- **關鍵乘數:美光 CEO —— 一台人形機器人記憶體需求 ≈ 一台 L2+ 車的 10 倍;而今天沒有任何記憶體分析師把人形機器人放進 2026-27 需求模型**(量太小不值得建模)—— S 曲線若在 2028-30 彎起來,整個記憶體需求假設要重寫
- **Terafab(Tesla×SpaceX×Intel 晶圓廠計畫)射程包含記憶體製造** —— 電池劇本重演(先外購鎖量+自建產能):Tesla 已把先進記憶體視為長期結構性約束

## 主題六|Intel 業績的 KP 讀法(同一份 7/23 財報的獨立視角)

- 「懂是一回事,數字是另一回事」:+25%(15 年最強)還把已上調的預期再打穿 12% —— AI 對 CPU 的拉動比模型假設更猛(agentic 編排的 CPU 權重上升快於預估)+ 執行跑贏計畫(良率/週期)+ 組合上移(客製 ASIC 年增近三倍)
- **Q3 持平指引 = 產能天花板不是需求煞車**(「我確定能交多少」非「市場願意買多少」);供給緊 → ASP 被動上移(高配佔比+折扣收斂)—— 不需要需求再加速就能跑贏指引
- **Foundry 最諷刺的好消息**:虧損收斂 $2.1B、Panther Lake 成本年內砍 ~50%、**18A 出貨量季增 >50%、良率超內部預期** —— 但外部客戶營收僅 ~5%($293M);**隱性原因 = 內部排擠:Xeon 需求太火,先進產能優先餵自家 → 外部代工放量被自己擠住**(用實績證明 18A 能跑高量,卻限制了分給外部的空間)
- 「兩家公司」估值框架:**產品公司的地板被實質抬高;代工公司仍是需時間與紀律的長跑**;溢出需求 → AMD 伺服器營收市佔 ~46% 新高(吃到最值錢的高核心段)

## 與本站的對接註記

- **INTC 頁(重要新視角)**:KP 的「內部排擠」解讀 = 對「14A 零簽約」的供給側重框 —— 不(只)是沒人要,是自家 Xeon 把 18A 產能吃光、外部代工排不進來;這讓 10/22 的對帳多一個問題:產能分配政策。「產品地板抬高/代工長跑」與本頁「交付是真的、造血還沒來」互證
- **MU 頁**:Tesla 產能鎖定 + 人形機器人 10× 乘數(無人建模)= 🚀 情境的新選擇權;Terafab 含記憶體 = 長期買方自建威脅(2030 級)
- **AMD:庫存立場升至 4 篇全多** —— Helios 訂單實錘(Meta 6GW/Anthropic 2GW/MSFT)+ 6/30「接棒」論點,未來候選頁的素材已厚
- **GOOGL(埋伏榜在榜)**:「分發戰爭非排名賽」+ Cloud +82% + backlog $5,140 億 —— B 區若觸發,多方框架現成
- **NVDA**:CUDA 城堡→河 + 開放權重 TAM 擴張 —— 兩面並陳的框架收檔
