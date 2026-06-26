---
title: "HBM DRAM不夠用？NVIDIA 記憶體分層革命？SSD當記憶體？- 深入分析第53期：NAND Flash控制器（慧榮 SIMO，群聯）"
url: "https://www.fomosoc.com/p/hbm-dramnvidia-ssd-53nand-flash-simo"
source: "FOMO研究院電子報（KP@FOMOSoc）"
date_saved: 2026-06-25
date_published: 2026-06-24
language: zh-TW
type: article
tags: [deep-dive, fomosoc, NAND-flash, ssd-controller, SIMO, silicon-motion, phison, memory-tiering, kv-cache, prefill-decode-disaggregation, nvidia-cmx, dpu, bluefield, dram-famine, hbm, ssd-as-memory, aiDAPTIV, montitan, marvell, FADU, kioxia, sandisk, micron, vertical-vs-independent, AI-infrastructure]
related_projects: [kurt-library, fundamental-platform]
---

# HBM DRAM不夠用？NVIDIA 記憶體分層革命？SSD當記憶體？- 深入分析第53期：NAND Flash控制器（慧榮 SIMO，群聯）

## Summary

本期 KP 深度分析切入 AI 的**記憶體瓶頸**：算力已不再是唯一瓶頸,真正卡住效率的是記憶體——HBM/DRAM 既貴又缺。AI 推理的 Decode 階段必須反覆翻閱「閱讀筆記」（**KV Cache**),而 KV Cache 體積大到瞬間塞爆昂貴的 HBM。業界新方向是**讓便宜大容量的 SSD 扮演更接近記憶體的角色**（SSD 被拉進記憶體階層),代表架構是 NVIDIA 的 **CMX（脈絡記憶體儲存）平台 / G3.5 分層**（NVMe SSD 陣列 + Dynamo 軟體 + BlueField-4 DPU + Spectrum-X 網路)。關鍵投資論點:當 SSD 要承擔記憶體角色,**價值從「NAND 顆粒成本」轉移到「控制器演算法」**——控制器從「夠用就好」的商品化角色,變成決定成敗的差異化關鍵（要 1 億 IOPS、512B 細顆粒度、極高 QoS、與 DPU/軟體深度協作)。受惠者:兩家台灣**獨立控制器商——群聯 Phison（8299.TW,混合/全棧:Pascari SSD + aiDAPTIV+ 軟體)與慧榮 Silicon Motion（SIMO.US,純控制器:MonTitan 平台)**,以及背後的 ODM/貼牌「民主聯軍」。NVIDIA 對 HBM 採封閉（綁少數大廠)、對 SSD 採開放（CMX 開放標準讓生態系競爭壓低成本),正是給獨立控制器商的黃金機會。惟此架構目前規模仍小、規格未定案,預計 2026 下半年才較大規模供貨。

## Key Takeaways

- **核心論點**：AI 把儲存戰場從「NAND 顆粒成本」推向「控制器演算法」→ 控制器從商品化「夠用就好」變成差異化關鍵。受惠 = 獨立控制器商**群聯（Phison, 8299.TW）+ 慧榮（SIMO.US）**。
- **記憶體瓶頸機制**：AI 推理分 Prefill（讀提示詞做筆記,高平行,GPU 利用率衝 90%)vs Decode（逐字寫,每字回翻筆記,GPU 利用率大跌、等資料搬運)。被反覆翻閱的筆記 = **KV Cache**（用空間換時間),幾千字對話就 >1GB,乘上長上下文 × 萬名用戶 → 瞬間塞爆 HBM。
- **DRAM 飢荒（結構性）**：生產每 GB HBM 約耗傳統 DDR5 **3 倍**晶圓產能 → 大廠把產能轉向高利潤 HBM → 抽乾標準 DRAM 產能 → 結構性短缺、儲存成本飆漲。
- **SSD 被拉進記憶體階層**：解法不是堆更多昂貴 HBM/DRAM,而是讓便宜大容量 SSD 扮演 DRAM。AMD 2026/6 收購 MEXT（AI 預測搬資料);**NVIDIA CMX 平台 / G3.5 脈絡記憶體層**（DRAM 與硬碟間蓋「智慧夾層」,NVMe SSD 陣列 + Dynamo/NIXL 軟體調度 + BlueField-4 DPU 快遞 + Grove 空間規劃 + Spectrum-X 網路)。三大改變:HBM 解放（只留模型+當下 KV)、CMX 承接 TB 級海量 KV、Prestage 無感預載（RDMA 不驚動 CPU)。
- **NAND vs DRAM 物理鴻溝**：NAND = 麵粉（原料、有缺陷),SSD = 麵包（NAND + 控制器 + 板)。DRAM = 平房（電容器、極速但難堆疊、貴),NAND = 摩天大樓（3D 堆 300 層、便宜幾十分之一)。裸 NAND 三問題:會磨損、不能直接覆寫（頁讀寫但區塊擦除)、隨時 bit error → 必須靠**控制器 + FTL 韌體**（平均抹寫/垃圾回收/ECC)當保姆;DRAM 可直連、NAND 必須保姆。
- **DPU = 第三顆大腦**：CPU（總經理/決策)、GPU（超級工廠/平行運算)、**DPU（物流總監/資料搬運安檢)**。DPU 解決通訊+協定翻譯（RDMA 繞過 CPU、記憶體↔儲存語意翻譯、硬體加密),但 DPU 不鑽倉庫深處抽 NAND——那是控制器的工作。
- **控制器在 AI 的三道難題**：① 速度（傳統 600 萬 IOPS → AI 要 1 億,20x 鴻溝,GPU 隨機讀微小片段)② 顆粒度（4K → 512B,NVIDIA 主導讓 GPU 直接點名取資料)③ 脾氣（後台垃圾回收的幾毫秒延遲 GPU 不能接受 → 要極高 QoS)。控制器從「被動管理」→「主動協作」（與 DPU/上層軟體共決資料搬移)。
- **價值轉移:垂直整合 vs 獨立控制器**：DRAM 幾乎清一色垂直整合巨頭（電容器精密度太高、無縫可鑽),但 SSD 可分離（顆粒=重資產拼產能 / 控制器=輕資產拼演算法)→ 容納 ODM/貼牌「民主聯軍」（金士頓/海盜船/廣達/緯穎/美超微)。AI 把這縫隙變主舞台。
- **NVIDIA 對 HBM 封閉、對 SSD 開放**：HBM 直接決定 GPU 算力上限 → 綁少數大廠保持掌控;SSD 則用 CMX 開放標準讓市場自由競爭、壓低成本（給民主聯軍機會)、把利潤留在自家 GPU/網路晶片。系統廠/ODM 也偏好獨立控制器（議價彈性、客製韌體護城河、快速配合 NVIDIA 新規格)。
- **群聯 Phison（8299.TW)= 混合/全棧**：Pascari 自有品牌企業級 SSD + **aiDAPTIV+ 軟體**（把 NAND 變受管理記憶體延伸,跨 VRAM/DRAM/SSD 形成更大記憶池,降低中小企業跑 LLM 的 VRAM 門檻)+ 消費/邊緣延伸。多層價值捕捉（晶片+軟體授權+整套方案)。風險:戰線長、與下游客戶衝突、需承擔 NAND 價格波動。
- **慧榮 SIMO（SIMO.US)= 純控制器**：專注控制器晶片+韌體+參考設計,多引擎（SSD 控制器 + eMMC/UFS + 開機碟)。企業/AI 旗艦 = **MonTitan 平台**（PCIe Gen5x4 可客製,讓多 AI 任務同時運作仍維持穩定效能/QoS),2026 H2 才逐步貢獻營收、可能成新成長曲線。「賣鏟子」輕資產、規模潛力大,但較依賴客戶持續採用。風險:做太專、被上下游夾擊;若 NAND 原廠自製控制器則影響直接。
- **其他玩家 + 時程**：Marvell（高階資料中心客製 ASIC)、FADU（韓國原生 AI 玩家)。⚠️ CMX/STX 架構目前規模小（主要高階 AI 機櫃)、規格演進中（外型/最小存取單位/協定未定案),**預計 2026 下半年才較大規模供貨**。長期催化:AI 從訓練轉推理（推理伺服器數量超訓練)、每台推理伺服器 SSD 數增、**SSD 當記憶體不代表 DRAM 需求減（Jevon's Paradox,DRAM 被釋放去做更需低延遲的任務)**、Rubin H2 2026 部署。

## Detailed Notes by Topic

### Ch1-2：AI 記憶體瓶頸 + DRAM 飢荒 + NVIDIA CMX
- **Prefill vs Decode**：Prefill（讀提示詞做筆記,高度平行,GPU 利用率衝 90%)vs Decode（逐字寫答案,每字回翻 KV Cache 筆記,只能一個字接一個字,GPU 利用率大跌、一直等筆記搬運)。
- **KV Cache 危機**：把每個字的理解記下（空間換時間),幾千字對話 >1GB,× 長上下文（幾十萬 Token)× 萬名用戶 → 塞爆昂貴小容量 HBM。選擇:丟筆記（後面要用就得整本重讀,重算代價遠高於調閱)or **Prefill/Decode 分離**（讀的專心讀、寫的專心翻,但筆記要在伺服器間高速搬運)→ 問題回到「KV Cache 存哪兼顧成本速度」。
- **記憶體金字塔**：HBM（譯者手邊正讀那頁,極快、容量小、貴)/ DRAM（書桌,快、放不多)/ NAND SSD（地下總書庫,海量便宜、調上來較慢)。
- **DRAM 飢荒**：HBM 每 GB 耗 DDR5 ~3x 晶圓產能 → 大廠產能轉高利潤 HBM → 抽乾標準 DRAM → 結構性短缺、成本飆漲。
- **NVIDIA CMX（G3.5 脈絡記憶體層）**：在 DRAM（書桌)與硬碟（書庫)間蓋「智慧夾層」,核心 = 高速 NVMe SSD 陣列。四角色:① 軟體指揮官（Dynamo + NIXL,預判 AI 下句、提前搬 KV)② 硬體快遞員（BlueField-4 DPU,管傳輸、不佔 CPU)③ 空間規劃師（Grove,任務分配到離資料最近機櫃)④ 高速氣送管（Spectrum-X 乙太網,低延遲高頻寬)。三大改變:HBM 解放（只留模型+當下 KV、專心釋放算力)、CMX 承接 TB 級海量 KV（且夾層共享,GPU A 累了 B 接手可立即調出)、Prestage 無感預載（RDMA 不驚動 CPU、速度近本地 DRAM)。AMD 則 2026/6 收購 MEXT（AI 演算法預測搬資料)。

### Ch3-5：NAND 為何需控制器 + DPU + 控制器難題
- **NAND vs SSD**：NAND = 麵粉（原料、天生缺陷不能直接用),SSD = 麵包（NAND + 控制器大腦 + 板)。
- **DRAM vs NAND 物理**：DRAM 電容器、奈秒級極速、難堆疊只能「平房」→ 容量小身價貴;NAND 可 3D 垂直堆「摩天大樓」（200-300+ 層)→ 每單位容量便宜到 DRAM 的幾十分之一。
- **裸 NAND 三問題**：會磨損（電子進出破壞結構、寫多了漏風報廢)、不能直接覆寫（頁為單位讀寫、區塊為單位擦除,改一字要擦整頁)、隨時 bit error（電子亂跑,1 變 0)。→ **控制器晶片 + FTL（快閃轉譯層)= 貼身管家**:平均抹寫（Wear Leveling)、垃圾回收（Garbage Collection)、錯誤修正（ECC)、邏輯↔物理位址轉換。DRAM 完美固定地址可直連、NAND 必須靠保姆。
- **儲存演進三階段**：① 消費零售（靜態倉庫、控制器兼職管理員)② 資料中心（多租戶虛擬化、NVMe 走 PCIe、QoS 隔離,但控制權仍在 CPU、CPU 近半算力浪費在搬運 → DPU 萌芽)③ AI 推理（SSD 存的是 GPU 隨時調閱的 KV Cache、是「記憶體延伸」不是儲存裝置 → 控制權與物理管理剝離 → DPU + 特製控制器聯手)。
- **DPU = 第三顆大腦**：CPU（總經理、通才決策、一雙手會被雜務淹沒)、GPU（超級工廠、平行作業員)、DPU（物流總監兼安檢長、專處理資料移動/保護/轉換)。DPU 三維:RDMA 繞過 CPU（GPU 直接穿網路讀遠端 SSD)、記憶體↔儲存語意翻譯（Load/Store 門牌 ↔ LBA 貨架,硬體級加速)、硬體加密（運鈔車套防彈裝甲、不佔通用算力)。但 DPU 修聯外道路,真正鑽倉庫深處從會磨損/寫錯的 NAND 抽貨 = 控制器的工作。
- **控制器三難題**：① 速度（傳統 600 萬 IOPS → AI 要 1 億,~20x;GPU 推理極隨機讀微小片段)② 顆粒度（傳統 4K 最小單位 → AI 只要某注意力微小數值卻搬 4K 浪費頻寬 → 縮到 512B,NVIDIA 主導讓 GPU 直接點名取資料、高速快閃融入 GPU 記憶體空間)③ 脾氣（後台垃圾回收/磨損均衡的幾毫秒延遲,GPU 不能接受 → 要極高 QoS、回應穩定可預測)。→ 控制器從「被動管理」（保護 NAND、確保正確)→「主動協作」（與 DPU/上層軟體共決何時搬、搬哪、不干擾推理)→ 具系統層級協作能力。

### Ch6-8：價值轉移、兩種控制器模式、規則未定
- **兩派**：垂直整合 NAND 巨頭（三星/SK海力士/美光/鎧俠/SanDisk,自有晶圓廠+自研控制器一條龍)vs 獨立控制器（群聯/慧榮)+ ODM/貼牌民主聯軍（金士頓/海盜船/廣達/緯穎/美超微)。獨立控制器商提供 Turnkey（晶片+最難寫的 FTL 韌體+參考設計),貼牌商買標準 NAND + 控制器方案即可像樂高組裝出貨。
- **為何 DRAM 無獨立廠**：DRAM 電容器對製程精密度/訊號完整性要求嚴苛、無縫可鑽 → 巨頭一條龍;SSD 是「顆粒（拼產能)+ 控制器（拼演算法)」兩種屬性可分離 → 給 ODM/貼牌生存縫隙。AI 把戰場從顆粒成本推向控制器演算法,縫隙變主舞台。
- **NVIDIA：HBM 封閉、SSD 開放**：HBM 決定 GPU 算力上限 → 綁少數大廠保持掌控;SSD 用 CMX 開放標準讓市場競爭、壓低成本（避免 NAND 巨頭壟斷推高 AI 伺服器成本、阻礙普及),利潤留 GPU/網路。系統廠/ODM 偏好獨立控制器:① 維持議價/供應彈性（多來源 NAND + 客製控制器)② 客製 FTL 韌體建系統整合護城河（與 iDRAC/Supermicro 管理平台整合、客戶難換)③ 快速配合 NVIDIA 新規格（Turnkey 比 NAND 巨頭內部流程更彈性)。
- **群聯 Phison（8299.TW)混合全棧**：① Pascari 自有品牌企業級 SSD（X 高效能/D 大容量)② **aiDAPTIV+**（把 NAND 變受管理記憶體延伸、跨 VRAM/DRAM/SSD 形成更大記憶池、降中小企業跑 LLM 的 VRAM 門檻,企業級已驗證)③ 延伸消費/邊緣。多層價值（晶片+軟體授權+整套方案)。風險:戰線長、與下游客戶競爭、承擔 NAND 價格波動壓縮毛利。
- **慧榮 SIMO（SIMO.US)純控制器**：專注控制器+韌體+參考設計,多引擎（SSD 控制器 + eMMC/UFS + Ferri/Boot Drive 開機碟,成長基礎穩健不過度依賴單一)。企業/AI 旗艦 **MonTitan**（PCIe Gen5x4 可客製,讓多 AI 任務同時運作仍穩定效能/減干擾),CEO 強調「控制器是釋放 NAND 全部潛力的關鍵」,2026 H2 才逐步貢獻營收、可能成新成長曲線。「賣鏟子」輕資產、規模潛力大,較依賴客戶（NAND 原廠/大模組廠)持續採用。
- **兩模式風險**：群聯「做太多、衝突增加、承擔 NAND 價格波動」;慧榮「做太專、可能被上下游夾擊」（尤其最高毛利 AI 企業級,若客戶傾向 NAND+控制器整合方案,慧榮須靠 QoS/參考設計領先維持)。
- **四情境**：① NVIDIA 規格成主流（外型介面固定、差異來自控制器/韌體)→ 慧榮機會大（參考設計已對齊多規格)② 平價 AI 在企業/邊緣普及 → 群聯 aiDAPTIV+ 機會大 ③ DRAM 持續缺、SSD 當記憶體 → 兩家受益（群聯多賺軟體+自有品牌、慧榮靠控制器出貨量)④ NAND 原廠自製控制器 → 壓縮獨立商（慧榮影響較直接、群聯有軟體/品牌緩衝)。
- **其他玩家**：Marvell（企業級控制器、高階資料中心客製 ASIC 一定市占)、FADU（韓國原生 AI 推理玩家)。群聯/慧榮仍是最具代表性兩家。
- **規則未定（Ch8)**：CMX/STX 目前規模小（主要高階 AI 機櫃、未普及一般企業/推理集群),硬體規格/外型/最小存取單位/協定仍演進中,符合新架構的方案預計 **2026 H2 才較大規模供貨**。值得關注:① AI 從訓練轉推理（推理伺服器數量將超訓練、KV Cache 需求普及)② 每台推理伺服器 SSD 數量增 ③ **SSD 當記憶體不代表 DRAM 需求減（Jevon's Paradox：DRAM 被釋放去做更需低延遲/高頻寬的任務、整體需求不一定降)** ④ Rubin H2 2026 部署、後續 Rubin Ultra/Feynman。**控制器從配角「夠用就好」被重新評估** —— NAND 顆粒重要性市場已充分認知,但控制器的重要性正被重估。

### 讀者討論補充（值得參考的市場觀點）
- 有讀者（持有群聯)用 Gemini 分析:AI 推理分「雲端超大規模 vs 邊緣/地端」兩戰場——雲端 = Marvell（高階 ASIC 客製)+ 三星/SK海力士（NAND 體量)主導大宗;**邊緣 AI/地端 = 群聯（aiDAPTIV+ 商業模式降維打擊、解 VRAM 不足痛點)+ 慧榮（OEM 滲透率、高能效晶片、NVIDIA 認證標準化 AI 伺服器開機碟出貨量)各領風騷**。
- 另有讀者指:Token 費用過高 → LLM 使用增長短期放緩 → 回到營收/毛利取捨 → 從中心化訓練轉向 **To B 邊緣端 Agent 與開源**（Dell/HPE 財報驗證 To B 伺服器爆發)→ 對群聯/慧榮是產業級利好。

---

## Full Text / Transcript

（本文為 KP@FOMOSoc 深度分析第 53 期,8 章約 20 分鐘閱讀,完整論證已於上方「Detailed Notes by Topic」逐章整理。核心脈絡:第1章 KV Cache/Prefill/Decode 記憶體瓶頸 → 第2章 記憶體金字塔/DRAM 飢荒/NVIDIA CMX 記憶體分層 → 第3章 NAND 為何非控制器不可（麵粉 vs 麵包、平房 vs 摩天大樓、裸 NAND 三問題、FTL 保姆)→ 第4章 儲存演進三階段 + DPU 第三顆大腦 → 第5章 控制器 AI 三難題（速度 20x/顆粒度 4K→512B/QoS)+ 被動→主動協作 → 第6章 價值轉移（垂直整合 vs 獨立控制器、NVIDIA HBM 封閉 SSD 開放)→ 第7章 群聯混合全棧 vs 慧榮純控制器、四情境誰受惠、Marvell/FADU → 第8章 規則未定、2026 H2 較大規模供貨、控制器被重估。)

*本文為 FOMO研究院（KP@FOMOSoc）2026-06-24 深度分析第 53 期之整理存檔,原文網址見 frontmatter url;Paid 訂閱內容,僅供個人研究參考、非投資建議。與 fundamental-platform 連結:本文的「DRAM 飢荒/記憶體超級循環」與 MU earnings memo（MU_20260624_earnings)同一結構性背景;SIMO（慧榮)為 US-listed 可進一步做 ER 的標的。*
