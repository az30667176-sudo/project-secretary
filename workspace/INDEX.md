# AI Secretary - Main Index

> This file is the core index of the secretary system, read first every session.
> Last updated: 2026-04-18

## Active Projects

| Project Name | One-Line Summary | Activity | Priority |
|---|---|---|---|
| java-learning | UPenn MAS CS 課程 - Java 學習 | High | High |
| investment-platform | Momentum Portal - S&P 1500 動能研究平台（量化 source） | High | High |
| kurt-library | 知識庫 + 前端 Kurt Library（基本面 source） | High | High |
| kronos-filter | Kronos 基礎模型機率性預測工具（機率 source，新建） | High | High |
| insights-hub | 跨專案 insight 整合樞紐（訂閱三個 source 專案） | High | High |

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

- [ ] 繼續 Java 課程學習 — Priority High
- [ ] 完善投資平台策略架構 — Priority High
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
