# AI Secretary - Main Index

> This file is the core index of the secretary system, read first every session.
> Last updated: 2026-08-28

## Active Projects（獨立 root 在 `Projects/{name}/`，非 workspace/projects/）

| Project Name | One-Line Summary | Activity | Priority |
|---|---|---|---|
| teahouse-promo | 說書館 Threads 宣傳——v1.1 作戰版：北極星＝追蹤數、日更衝刺至 9/30、`teahouse-daily-draft` 排程供稿 | High | High |
| topic-lab／稀土風雲 | 第 (1) 回已發布 Substack；(2) 屠龍刀待 Kurt 終審（宣傳狙擊稿已備）；(3)(4) 草稿 | High | High |
| pattern-scanner | 四掃描器＋RADAR 日更（14:15）＋焦點頁 28 份（8/27 新增 APTV／NBIS）＋fable 裁決 | High | High |
| strategy-lab | X/W/C 三引擎 filter＝持股收盤裁決日常；lift-v1 scanner | Medium | High |
| 持股監控 | AVGO（AVGG）9/2 財報三選一 **8/29 死線**；MP call／MUU／INTC call；現金低於地板凍結中 | High | High |
| taiwan-econ-thesis | 博士論文 Ch.1 資料管線（11/13 sheet） | Medium | Medium |

**維護態（Vercel/排程自轉，喊了才動）**：momentum-portal（原 investment-platform）· insights-hub · fundamental-platform · kurt-library · kronos · theme-pulse · taiwan-election-2026
**低活動**：java-learning（近月無 session）· sso-timing-research（研究完結封存）

---

## Project Architecture

```
insights-hub (樞紐)
    ↑ 訂閱
    ├── kurt-library/outputs/fundamental-signals.md
    ├── investment-platform/outputs/quantitative-signals.md
    └── kronos-filter/outputs/kronos-signals.md（規劃中）
    ↓ 產出整合報告
    └── reports/ → 摘要回流到各 source 的 refs/hub-reports/
```

**三層職責分工**（2026-04-17 正式化）：
- Kurt Library synthesis = 純文章、純基本面（自成體系，可公開閱讀）
- insights-hub reports = 跨專案整合（內部，混合基本面+量化）
- investment-platform outputs = 量化訊號（從 Supabase 產出）

---

## Recent Priority Items

- 2026-08-28: teahouse-promo **v1.1 作戰版拍板**（AskUserQuestion 三輪）：Threads 追蹤數北極星、日更衝刺 4 週、短句流定型、連結留言區、`teahouse-daily-draft` 排程（LA 15:30）上線；P001／P002b 已發布
- 2026-08-28: 稀土 vol2 宣傳彈藥備齊：日經 8/20「中國卡台灣」鉤子＋台灣地板論狙擊稿 v3（產發署原話已核）；vol2 只剩 Kurt 終審
- 2026-08-27: 焦點頁 +2：APTV（聰明錢深水 #2，四人 cluster 接刀）＋ NBIS（敘事×高位箱體）；GEV ER 錨翻新 memo（FV $1075→$1020，箱底 lean Buy）上 Vercel
- 2026-08-27: 三引擎 8/27 零訊號；reversal LOOSE 36 檔（🅱 VHI/OKTA 領銜）；sector 突破 11 檔——**生技/醫療五視角共振**、半導體連續掛零
- 2026-08-26: teahouse-promo 開案（PLAN.md＝正本）；行銷技能 67 個入庫；voice-profile 累積四批批改語料（短句流＋漏斗收法定版）
- 2026-04-18: kronos-filter MVP 完成！10 tickers 測試通過，前端部署到 kronos-filter.vercel.app，export_to_hub 自動化
- 2026-04-18: 建立第五個專案 kronos-filter（Kronos 機率性預測工具），進入 Step 1 讀 repo 階段
- 2026-04-17: Synthesis 規則正式化（不引用外部系統資料），寫進 kurt-library INDEX
- 2026-04-17: Frontend 加入 react-markdown 渲染 + layout 調整（max-w 1200px, 加大 padding）
- 2026-04-16: 產出第一篇 Kurt Library synthesis「AI 電力投資的七個反直覺真相」
- 2026-04-16: 建立 Synthesis 新鮮度追蹤機制（freshness_window_days + 自動來源日期解析）
- 2026-04-15: 建立 insights-hub 跨專案整合架構 + export_to_hub.py 自動化腳本
- 2026-04-15: 發現 CEG/VST 基本面 vs 動能分歧（此洞察已搬到 insights-hub，不在公開 synthesis）

---

## To-Do Items

- [ ] **AVGO 9/2 財報處置三選一（減至紀律尺寸／換正股／全帶）— 8/29 死線，Kurt 拍板** — Priority High
- [ ] 稀土 vol2 終審＋發布（狙擊稿 taiwan-floor v3 同日發）— Priority High
- [ ] MRVL 財報後跑焦點頁（餵 AVGO 9/2 判斷）— Priority High
- [ ] Kurt 自寫 6–8 則 Threads（voice-builder 語料）＋簡介／頭像定稿 — Priority Medium
- [ ] P001 24h 數據回填帳本（等 Kurt 丟 insights）— Priority Medium
- [ ] 第二題材（磁鐵/電機→電動車供應鏈）topic-lab 研究開跑（內容跑道 9 月中斷糧風險）— Priority Medium
- [ ] 繼續 Java 課程學習 — Priority Low（近月無活動，降級）
- [ ] 完善投資平台策略架構 — Priority Low
- [x] Kurt Library 前端建置 + Vercel 部署 — Completed 2026-04-14
- [x] 秘書系統初始化 — Completed 2026-04-14
- [x] 知識庫累積 AI 電力系列文章（5 篇完成）— Completed 2026-04-15
- [x] 建立 insights-hub 跨專案整合架構 — Completed 2026-04-15
- [x] A+B 整合：export_to_hub.py 腳本 + 首份 integrated report — Completed 2026-04-15
- [x] 產出第一篇 kurt-library synthesis — Completed 2026-04-16
- [x] Synthesis 寫作規則正式化 — Completed 2026-04-17
- [ ] 累積更多基本面文章（下一期是 LDES 長時儲能）— Priority Medium
- [ ] export_to_hub.py 整合進 Momentum Portal 每日 pipeline（零接觸自動化）— Priority Low
- [ ] 建立 java-learning 專案頁面 — Priority Low
- [ ] Kurt Library RWD 手機版優化 — Priority Low

---

## Idea Parking Lot

- 自動化腳本：insights-hub 的 signal 標準化格式可能在未來擴充成 JSON schema
- 未來 source 專案候選：macro-research（總經）、earnings-tracker（財報）、crypto-analysis
- 回測引擎驗證「基本面強 + 動能弱」情境的歷史收斂表現（給未來的 hub report）

---

## Critical Rules（session 應熟讀）

### Session 啟動位置
**永遠** 在 `C:/Users/az306/OneDrive/Desktop/Projects/project-secretary` 啟動 Claude Code。
其他目錄啟動會找不到秘書系統，且可能誤存錯誤 memory。

### Kurt Library synthesis 寫作
- 只能引用 articles/ 內容
- **禁止**引用 insights-hub / Momentum Portal / 其他專案 outputs
- 詳細規則見 `workspace/projects/kurt-library/INDEX.md`

### 哪些資料在 git？
- ✅ workspace/INDEX.md, knowledge-base/, frontend/, docs/ → 公開
- ❌ workspace/inbox/, workspace/projects/{name}/ → gitignored（本機才有）
- 所以 daily logs 和專案工作只存在本機

---

## Navigation

- 📁 Project directory: `workspace/projects/`
- 📔 Journal archive: `workspace/inbox/`
- 📚 Weekly summaries: `workspace/summaries/weekly/`
- 📊 Monthly summaries: `workspace/summaries/monthly/`
- 🛠️ Reference materials: `workspace/refs/`
- 🌐 Knowledge Base: `workspace/knowledge-base/`
- 🖥️ Frontend: `frontend/` (deployed to Vercel: project-secretary.vercel.app)
- 🔀 Insights Hub: `workspace/projects/insights-hub/` (cross-project integration)
- 📖 Lessons learned: `docs/lessons-learned.md`
