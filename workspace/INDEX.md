# AI Secretary - Main Index

> This file is the core index of the secretary system, read first every session.
> Last updated: 2026-04-15

## Active Projects

| Project Name | One-Line Summary | Activity | Priority |
|---|---|---|---|
| java-learning | UPenn MAS CS 課程 - Java 學習 | High | High |
| investment-platform | Momentum Portal - S&P 1500 動能研究平台（量化 source） | High | High |
| kurt-library | 知識庫 + 前端 Kurt Library（基本面 source） | High | High |
| insights-hub | 跨專案 insight 整合樞紐（訂閱上述兩個專案 signal） | High | High |

---

## Project Architecture

```
insights-hub (樞紐)
    ↑ 訂閱
    ├── kurt-library/outputs/fundamental-signals.md
    └── investment-platform/outputs/quantitative-signals.md
    ↓ 產出整合報告
    └── reports/ → 摘要回流到各 source 的 refs/hub-reports/
```

未來可擴展：macro-research、earnings-tracker 等新 source 專案，只需更新 `insights-hub/sources.md`。

---

## Recent Priority Items

- 2026-04-15: 建立 insights-hub 跨專案整合架構 + 第一份整合報告（AI 電力產業評分）
- 2026-04-15: 合併 fundamental-portfolio 與 knowledge-base → kurt-library
- 2026-04-14~15: 知識庫累積 5 篇 fundamental-investment 文章
- 2026-04-14: Kurt Library 前端部署到 Vercel
- 2026-04-14: 秘書系統初始化

---

## To-Do Items

- [ ] 繼續 Java 課程學習 — Priority High
- [ ] 完善投資平台策略架構 — Priority High
- [x] Kurt Library 前端建置 + Vercel 部署 — Completed 2026-04-14
- [x] 秘書系統初始化 — Completed 2026-04-14
- [x] 知識庫累積 AI 電力系列文章（5 篇完成）— Completed 2026-04-15
- [x] 建立 insights-hub 跨專案整合架構 — Completed 2026-04-15
- [x] 第一份整合報告（AI 電力產業）基本面維度 — Completed 2026-04-15
- [ ] 從 Momentum Portal 填入量化訊號，完成 Integrated 評分 — Priority High
- [ ] 建立 java-learning 專案頁面 — Priority Low

---

## Idea Parking Lot

- 自動化腳本：`all-weather-usStock-portal/scripts/export_to_hub.py` 自動從 Supabase 輸出量化 signal 到樞紐
- 未來 source 專案候選：macro-research（總經）、earnings-tracker（財報）、crypto-analysis

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
