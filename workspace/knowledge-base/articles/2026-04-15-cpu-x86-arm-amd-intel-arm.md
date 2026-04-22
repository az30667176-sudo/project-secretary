---
title: "下一個瓶頸是CPU？x86還是ARM？誰才是CPU概念股？"
url: "https://fomosoc.substack.com/p/cpux86armcpu-43amdintelarm"
source: "FOMO研究院電子報"
date_saved: 2026-04-21
date_published: 2026-04-15
language: zh-TW
type: article
tags: [AI, semiconductor, CPU, x86, ARM, AMD, INTC, ARM-Holdings, Agentic-AI, RL, fundamental-investment]
related_projects: [kurt-library]
---

# 下一個瓶頸是CPU？x86還是ARM？誰才是CPU概念股？- 深入分析第43期：AMD，Intel，ARM

## Summary

本文翻轉「AI = GPU」的根深蒂固敘事，指出 2026 年資料中心真正缺貨的瓶頸已從 GPU/HBM 轉向 CPU。AMD EPYC 交期拉長到 6 個月以上、擁有 10–15% 漲價定價權；Intel 伺服器 CPU 庫存意外見底、被迫把 PC 晶圓挪去救伺服器產線；連 NVIDIA 自家 AI 基礎設施主管都公開承認 CPU 正成為 Agentic 工作流的瓶頸。文章拆解三股同時引爆 CPU 需求的力量：推論時代帶來的請求量級指數爆炸、Agentic AI 把單次請求從直線變成多步循環（GPU:CPU 比例從 1:8 飆到 1:2）、以及 RL 訓練與合成資料創造的純 CPU 模擬農場新戰場。技術上深入剖析 x86（CISC，AMD/Intel）與 ARM（RISC，NVIDIA Grace/Vera 與雲廠自研 Graviton/Axion/Cobalt）的世紀分裂，比較 AMD Chiplet「樂高積木」、NVIDIA Monolithic「大石頭」、Intel EMIB 三條物理結構路徑，並闡述 NVIDIA 用 NVLink-C2C（1.8 TB/s、Cache Coherence）綁定 Vera+Rubin Superchip 的硬體護城河。投資論述上，把 AMD 定位為「進攻型純 CPU play、GPU 期權免費附贈」（EPYC 佔資料中心 66–70%、營收市佔率 41.3% vs 出貨量 28.8% 的高 ASP 證據）、Intel 定位為「絕處逢生 + 18A 晶圓代工期權」（DCAI 為 Foundry 爭取時間，市值已等於假裝 Foundry 不存在）、ARM 定位為「收費站 + AGI CPU 直接參戰的混合模型」（v9/CSS 費率跳升 + 80×PE 已定價極高預期，速度落後即修正），最後 KP 在文末利益申報自己持有 Intel 與 AMD（Intel 為第一大重倉），並提醒讀者打折看待文中樂觀情緒。

## Key Takeaways

- 2023–24 搶 GPU、2025 搶 HBM、2026 真正缺的是 CPU——這是被華爾街嚴重低估的典範轉移
- 三股力量同時引爆：推論量爆炸（佔總算力 60–70%）、Agentic 循環（CPU 工作量增 5–10 倍）、RL 訓練純 CPU 農場（一次開 10k–100k 平行環境）
- 機架內部 CPU:GPU 比例從 1:8 飆到 1:2，NVIDIA Vera Rubin NVL72 直接塞 36 顆 CPU + 72 顆 GPU；微軟 Fairwater 甚至為純 CPU 蓋 48 MW 獨立大樓
- x86 vs ARM 世紀分裂：AMD/Intel 守 40 年軟體生態護城河，ARM（NVIDIA + 雲廠 Graviton/Axion/Cobalt）以 1.5–2 倍能效逆襲
- AMD 三條科技樹差異：Chiplet 積木（核心數無限堆，Turin 192 核、Venice 上看 256 核）、NVIDIA Monolithic 大石頭（Vera 88 核零延遲）、Intel EMIB 混合（Clearwater Forest 288 E-core）
- NVIDIA 真正的硬體護城河是 NVLink-C2C（1.8 TB/s 是 PCIe 的 7 倍）+ Cache Coherence——GPU 直接把 CPU 記憶體當自己用，AMD/Intel 目前無解
- 不是贏者全拿：NVIDIA 自家 DGX Rubin NVL8 的 host CPU 居然預設用 Intel Xeon——核心數不夠、x86 軟體綁架、產能不足，TAM 整體擴張而非零和
- AMD 是最直接受益者：EPYC 佔資料中心部門 66–70%、營收市佔率 41.3% vs 出貨量 28.8%（以少博多 = 高 ASP 高階訂單），Lisa Su 親口說「CPU 需求遠超預期」
- Intel 股價本質是晶圓代工（Foundry）賭注 + CPU 紅利：2025 DCAI 賺 45 億 vs Foundry 虧 80–100 億，市值 3,100 億約等於「假裝 Foundry 不存在」的價格——18A 是免費附贈的看漲期權
- ARM 是收費站模型（97% 毛利率、全球 280 億顆 ARM 晶片/年），雙引擎結構：手機現金牛靠 v9/CSS 費率跳升年增 30%、資料中心成長引擎權利金年增 >100%
- ARM 風險不是「業務變差」而是「成長速度不夠快」：80× forward P/E 已定價極高預期，慢一個季度就修正；2026/03 推自有 AGI CPU（136 核 3nm，與 Meta 共開發）跨入直接參戰，與授權客戶（Grace/Graviton/Axion/Cobalt）有競爭關係風險
- 利益申報：作者 KP 持有 Intel（第一大重倉，買入主因是 Foundry 而非 CPU）+ AMD，文中對 CPU 復興邏輯的樂觀情緒應主動打折
- 推論框架軟體優化（vLLM、Speculative Decoding）若大幅降低 CPU 工作量，「缺貨」可能被改寫成短期窗口——這是論點的最大反向風險

## Full Text / Transcript

（付費全文約 12,000 字，完整內容請見原始連結）
