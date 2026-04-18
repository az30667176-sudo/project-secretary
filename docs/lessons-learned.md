# Pitfalls and Best Practices

This document consolidates problems discovered in actual AI Secretary use, solutions, and best practices. Welcome to contribute your own pitfalls.

---

## Memory and File Structure

### Problem 1: Memory scattered, don't know where to find

**Symptoms**:
- "Secretary, do you remember X?"
- Secretary searches half-day, says "can't find in INDEX.md"
- Actually in daily/ journal

**Root cause**: No clear layering rules at start

**Solution**:
Follow secretary Skill's "Memory Write-Back Rules":
- **Key decisions / research conclusions** → `memory.md` (permanent, cold start read)
- **Status tracking / to-do items** → `INDEX.md` (latest state)
- **Time-series records** → `daily/YYYY-MM-DD.md` (who did what, when)

**Best practice**:
```
Before writing ask yourself:
- "Must know this next session?" → memory.md
- "What's current status?" → INDEX.md
- "Who did what when?" → daily/
```

---

### Problem 2: INDEX.md became junk pile

**Symptoms**:
- INDEX.md has 50+ lines, all messy to-do items
- "Recent priorities" unchanged from 2 months ago
- Opening INDEX.md, don't know what to prioritize

**Root cause**: No regular cleanup

**Solution**:
Build cleanup rhythm:
- **Each wrap-up** (session end): Update to-do, priorities (5 min)
- **Weekly**: Generate weekly report, secretary asks "new ideas?" → Chance to clean INDEX (30 min)
- **Monthly**: Big cleanup, archive completed, reshuffle priority (1 hour)

**Best practice**:
```
□ Each to-do add priority (High / Medium / Low)
□ After completion, check off then delete periodically
□ "Recent priorities" ≤ 5 items
□ Month-end delete items untouched 30+ days
```

---

## Debate and Decision-Making

### Problem 3: Debate length out of control

**Symptoms**:
- Want to discuss 3 topics
- First topic alone ~1500 characters
- Dialogue becomes Novel, decision muddier

**Root cause**:
- Word limits not enforced
- Topics too broad, should focus on decision points
- Advocate can't respond fully

**Solution**:
Reference debate-protocol Skill's word limits and topic screening:

| Stage | Limit | Enforce |
|---|---|---|
| Advocate opening | 200-300 | ❌ Secretary reminds |
| Each round exchange | 100-150 | ❌ Secretary reminds |
| Secretary convergence | 100 | ❌ Secretary reminds |

**Topic screening**:
```
❌ "How many competitors?" (information gathering)
✅ "Should we prioritize Market A or B?" (decision point)

❌ "How does tool X work?" (technical detail)
✅ "Custom build vs buy off-the-shelf?" (strategy choice)
```

**Best practice**:
Secretary announces at opening: "Max 3 topics, 2-3 rounds each, I'll stop if exceeding word limit."

---

### Problem 4: After Debate, disagreement not recorded

**Symptoms**:
- Debate ends, each side has different understanding
- Weeks later, discuss same issue, no previous conclusion
- "How did we decide last time?" → Secretary doesn't know

**Root cause**:
- Debate transcript not properly archived
- ✗ Disagreement points not recorded
- ❓ Pending items not consolidated

**Solution**:
debate-protocol already specifies storage:
```
workspace/projects/{name}/debates/{YYYY-MM-DD}-{topic}/
├── transcript.md   ← Complete dialogue
└── summary.md      ← ✓ Consensus, ✗ Disagreement, ❓ Pending
```

summary.md must include:
```markdown
## Core Consensus
✓ ...

## Key Disagreements
✗ A thinks X, B thinks Y

## User Decision Items
❓ Question 1: ...
❓ Question 2: ...
```

**Best practice**:
Secretary produces summary immediately after Debate, user reviews again before decision, confirm nothing missed.

---

## Tools and Platforms

### Problem 5: gcloud CLI config fails

**Symptoms**:
- In Cowork `gcloud compute ssh` hangs
- Or OAuth login stuck
- `gcloud` can't find Google account

**Root cause**:
- Cowork needs Network Egress enabled for Google login
- First login needs manual browser confirmation

**Solution**:
See gcp-ops Skill's "Cowork Sandbox" section:
1. Settings → Enable Network Egress
2. Run `curl -sSL https://sdk.cloud.google.com | bash`
3. Run `gcloud init` → Browser login window appears

**Best practice**:
```
□ Enable Network Egress from start (don't wait)
□ Before gcloud init, confirm Egress enabled in Settings
□ If login fails, check internet (use curl test)
```

---

### Problem 6: GitHub PAT leak risk

**Symptoms**:
- Secretary pastes GitHub PAT in dialogue
- User alarmed "will it leak?"
- Don't know what to do

**Root cause**:
- Dialogue content might be saved, exported, or shared
- PAT in dialogue = assume leaked

**Solution**:
See github-ops Skill's "PAT Usage Rules":
1. Use Classic PAT, not fine-grained
2. **PAT in dialogue = treat as leaked**
3. After operations immediately remind user to revoke
4. Use `credential.helper store` local storage, avoid re-entering

**Best practice**:
```
□ Before git operation, secretary reminds "revoke PAT after"
□ After operation, remind user to GitHub Settings to revoke
□ Check ~/.git-credentials won't be committed (.gitignore)
□ Multi-person same machine? Use `credential.helper store` not in code
```

---

## Cross-Platform Collaboration

### Problem 7: File sync between Cowork and Claude Code

**Symptoms**:
- Cowork wrote memory.md, Claude Code doesn't see new content
- Vice versa
- Don't know which version is latest

**Root cause**:
- No unified source of truth
- Git not regularly pushed / pulled

**Solution**:
This system treats workspace markdown as source of truth. Ensure sync:
1. **Always write handoff** at session end (secretary auto-does)
2. **Handoff written where**:
   - Cowork → `workspace/inbox/YYYY-MM-DD.md`
   - Claude Code project mode → `workspace/projects/{name}/daily/YYYY-MM-DD.md`
3. **Cross-platform tasks** → `workspace/handoff/pending/`

**Best practice**:
```
□ Regularly git push (each session end)
□ Before new session git pull
□ If conflict, manually merge (markdown usually merges easily)
□ Use handoff/ mechanism not voice
```

---

### Problem 8: Sub Agent prompt not clear

**Symptoms**:
- Launch sub agent, say "research X"
- Sub agent spends 20% tokens on "what do you want"
- Output not what you expected

**Root cause**:
- Sub agent doesn't inherit main agent context
- Prompt must be **complete and explicit**

**Solution**:
See subagent-guide Skill's "Usage Notes":
1. **Complete explicit prompt**:
   ```
   Don't: "Research X market"
   Do: "Search X market size, growth rate, main players (2023-2025).
        Return format: {market_size: $X, growth: Y%, players: [list]}"
   ```

2. **Give expected output format**: JSON, table, markdown list?

3. **Clear paths and parameters**:
   ```
   "Scan workspace/projects/foo/refs/ all .md files,
    find paragraphs with 'decision', organize chronologically"
   ```

**Best practice**:
```
□ Sub agent prompt detailed like instruction manual
□ Provide expected output sample
□ Limit search scope (file path, time range)
□ 1-2 sentences background, 3-5 sentences concrete instruction
```

---

## Daily Habits

### Problem 9: Forgot to say "wrap up"

**Symptoms**:
- Work 2 hours, say goodbye
- Didn't say "wrap up," secretary didn't write handoff
- Next session, secretary says "what did you do last time? no idea"

**Root cause**:
- Manual reminding easy to forget
- Secretary doesn't auto-do (waits for trigger)

**Solution**:
Build habit:
1. **End work, always say "wrap up"**
2. **Secretary auto**:
   - Write handoff to inbox/ or daily/
   - Update INDEX.md
   - Organize to-do

3. If often forget: Set reminder (Cowork scheduled task)

**Best practice**:
```
□ Add "say wrap up before end" to daily workflow
□ Consider Cowork scheduled task: end-of-day "don't forget wrap up" reminder
□ Review secretary's handoff, ensure clear, add if needed
```

---

### Problem 10: Started project but no follow-through

**Symptoms**:
- Opened 5 projects
- 2 completed, 2 frozen, 1 active
- INDEX.md lists all 5, don't know which priority

**Root cause**:
- No regular cleanup
- "Activity" not dynamic

**Solution**:
Build cleanup rhythm (see Problem 2 solution):
1. **Weekly check** INDEX.md "activity" column
2. **Activity categories**:
   - **High**: This week had action
   - **Medium**: This month had action
   - **Low**: Completed or paused

3. **Monthly big cleanup**:
   - Completed → `projects/done/`
   - Paused → `projects/archived/` / await-revival list
   - Keep INDEX.md only "active" (3-5)

**Best practice**:
```
□ INDEX.md "active projects" add "last pushed date" column
□ Untouched 30+ days → Mark "paused," move away
□ Month-end "project health check"
□ Decision-class projects write memory.md after completion, then archive
```

---

## Knowledge and Review

### Problem 11: Review only does memory sync, skips experience extraction

**Symptoms**:
- Session end, secretary writes journal + updates INDEX
- But a painful debugging process (tried A → failed → tried B → worked) is never recorded
- Two weeks later, hit the exact same problem again

**Root cause**:
- Wrap-up only does "C: Memory Sync" (write journal, update INDEX)
- Skips "A: Experience Extraction" (pitfall records, knowledge corrections)
- Secretary treats Review as a checklist of file updates, not knowledge capture

**Solution**:
Use the full 12-item checklist in the review Skill. Sections A (experience extraction) and B (system updates) are the core value — not just C (memory sync).

**Best practice**:
```
After each session, ask yourself:
"If a brand new Agent starts tomorrow, reading only
CLAUDE.md + INDEX.md + Skills, can it recreate
everything learned today?"
If not, something was missed.
```

---

### Problem 12: Knowledge base articles pile up, never used

**Symptoms**:
- Saved 50 articles to knowledge-base/
- Never reference them when working on projects
- "I know I saved something about this... but where?"

**Root cause**:
- No bridge between knowledge base and project context
- Articles are archived but not connected to where they're actionable

**Solution**:
Use the knowledge-base Skill's "Project Knowledge Bridge" (kb-digest):
1. When archiving, tag related projects in Metadata
2. Secretary writes actionable digest to `projects/{name}/refs/kb-digest.md`
3. Digest focuses on "what does this mean for THIS project" — not repeating the article

**Best practice**:
```
□ Every article: ask "which project benefits from this?"
□ kb-digest entry ≤ 5 lines (action items + link to source)
□ memory.md only gets one reference line, not full digests
□ Project agent reads kb-digest on-demand, not every startup
```

---

### Problem 13: Accidentally deleted important files

**Symptoms**:
- Secretary or sub agent deleted/overwrote a workspace file
- Or user accidentally cleared a folder
- "Can we get it back?"

**Root cause**:
- No version control or backup habit
- Cowork sandbox may have lock file issues blocking git

**Solution**:
1. **Use git** in your workspace folder:
   ```
   git init
   git add .
   git commit -m "initial backup"
   ```
2. **Regular commits** — review Skill's git auto-save does this at each wrap-up
3. **Lock file workaround** (Cowork): `mv .git/index.lock .git/index.lock.tmp 2>/dev/null` before commit
4. **Recovery**: `git checkout -- path/to/file` to restore

**Best practice**:
```
□ Initialize git in workspace on Day 1
□ Add .gitignore (exclude secrets, large files)
□ Review Skill auto-commits at each wrap-up
□ Know the restore command: git checkout -- <file>
```

---

### Problem 14: Tool search only tried one keyword, missed results

**Symptoms**:
- Asked secretary to find a tool for X
- Secretary searched MCP Registry with one query, found nothing
- User later found the perfect tool existed under a different name

**Root cause**:
- Only searched with one keyword/phrase
- Didn't try synonyms, abbreviations, or related terms

**Solution**:
See tool-scout Skill. For each search channel (MCP Registry, Plugin store, GitHub):
1. Try **2-3 synonym groups** per channel
2. Note total results count for each query
3. If first query returns 0, try broader terms

**Best practice**:
```
□ "project management" → also try "task", "kanban", "sprint"
□ "analytics" → also try "dashboard", "metrics", "reporting"
□ Record search queries and result counts in research notes
□ Don't conclude "nothing exists" after a single query
```

---

### Problem 15: Token waste from over-eager output

**Symptoms**:
- Asked for an outline, got a full 2000-word draft
- Asked a simple question, got a 500-word essay
- Session runs out of tokens halfway through

**Root cause**:
- No output length guardrails
- Secretary expands scope beyond what was asked
- Multi-step workflows jump ahead (outline → script → full report in one go)

**Solution**:
Follow the Output Control Rules in secretary Skill:
1. Default responses under 300 words
2. Never auto-expand scope (outline ≠ full draft)
3. Confirm before large outputs (>500 words)
4. One step at a time for multi-step workflows
5. Minimize unnecessary file reads/writes

**Best practice**:
```
□ "Give me an outline" → deliver outline only, ask before expanding
□ "Research X" → deliver summary, offer detail on request
□ Before any output >500 words: "This will be detailed — want me to go ahead?"
□ Track approximate token usage mentally across a session
```

---

### Problem 16: gray-matter 日期解析導致 React render error (2026-04-14)

**Symptoms**:
- Next.js build 失敗，報錯 `Objects are not valid as a React child (found: [object Date])`
- 只在有文章（含 frontmatter 日期欄位）時才發生

**Root cause**:
- `gray-matter` 自動將 `YYYY-MM-DD` 格式解析為 JavaScript Date 物件
- Date 物件傳入 React 元件會報錯

**Solution**:
在 lib 層強制轉型：`String(data.date_saved ?? "")`

**Best practice**:
```
□ 使用 gray-matter 時，所有日期欄位都用 String() 包裝
□ 或在 frontmatter 中用引號包日期："2026-04-14"
```

---

### Improvement: 文章卡片預覽/展開模式 (2026-04-14)

**原本**: 所有文章摘要和 Key Takeaways 全部攤開顯示，資訊密度過高
**改善**: 預設只顯示標題 + 摘要前 1-2 句，點擊才展開完整內容
**效果**: 閱讀體驗大幅提升，瀏覽效率更好

---

### Pitfall: Synthesis 卡片只渲染 Summary 區段 (2026-04-17)

**Symptoms**:
- 改寫 synthesis 後用戶看不到新內容，以為 synthesis 沒更新
- 實際上內容都在 markdown 的 ## 章節裡，前端沒渲染

**Root cause**:
- SynthesisPage 組件只顯示 frontmatter + summary 文字，沒有 markdown renderer
- 所有 `## 真相 1`、表格、列點都被忽略

**Solution**:
- 安裝 `react-markdown` + `remark-gfm`（for GFM tables）
- 展開時用 ReactMarkdown 渲染完整 content（排除已顯示的 Summary 區段）
- 在 globals.css 加 `.markdown-body` 樣式匹配深色主題

**Best practice**:
```
□ 任何含有結構化內容（## 章節、表格、列點）的 markdown 卡片
  一定要有 markdown renderer，不能只用 <p>{content}</p>
□ 預覽模式 vs 展開模式區分好，避免卡片過長
```

---

### Principle: Synthesis 必須自成體系 (2026-04-17)

**原則**: Kurt Library 的 synthesis **不能引用其他系統的資料**（insights-hub / Momentum Portal / 其他專案 outputs）。

**Why**:
- Kurt Library 的讀者只看得到 Articles 和 Insights 兩個頁面
- 若 synthesis 引用網站讀者無權限的資料，就無法獨立理解
- 跨系統整合屬於 insights-hub 的職責，不是 Kurt Library

**How to apply**:
- 寫 synthesis 時自問：「朋友只訪問 project-secretary.vercel.app 能理解嗎？」
- 若需要跨系統資料 → 放到 insights-hub 的 reports/，不要放到 knowledge-base/synthesis/
- 具體規則寫在 `workspace/projects/kurt-library/INDEX.md` 的「Synthesis 寫作規則」章節

**Architectural lesson**: 三層架構職責分工
- **Kurt Library synthesis** = 純基本面、純文章
- **insights-hub reports** = 跨專案整合（內部）
- **investment-platform outputs** = 量化訊號

混合會破壞每個系統的可理解性。

---

### Improvement: Hub-and-Spoke 跨專案整合架構 (2026-04-16)

**Context**: 需要把多個專案的 insight 整合產出綜合投資評價，且未來可能新增 source 專案。

**Design**:
```
insights-hub (樞紐) ← outputs/ ← 各 source 專案
                 → reports/ → refs/hub-reports/ 分發回各 source
```

**Key principles**:
1. **標準 signal 格式**：每個 source 專案產出 `outputs/{type}-signals.md`（固定 schema）
2. **訂閱路由表**：`insights-hub/sources.md` 是新專案加入的唯一登記點
3. **分發機制**：報告完成後自動在貢獻專案的 `refs/hub-reports/` 放摘要 + 原報告連結

**Why this works**:
- 新 source 專案加入時，樞紐本身不用改
- 單一方法論（memory.md）管理跨 source 的 weighting 與衝突解法
- source 專案進入 Project Mode 時能看到自己貢獻了哪些報告

---

### Gotcha: 新 Claude Code session 必須在 project-secretary 目錄啟動 (2026-04-17)

**Symptoms**:
- 在 Projects 根目錄啟動 Claude Code，找不到 kurt-library 專案
- 另一個 session 誤存「從今天起管理 kurt-library 專案」到 memory，之後帶壞所有對話
- 在 all-weather-usStock-portal 啟動則只能看到該專案本身

**Root cause**: Claude Code 啟動時讀取當前目錄的 CLAUDE.md。若不在 project-secretary 根目錄，秘書系統完全未載入。

**Solution**:
```bash
# 永遠從這裡啟動
cd C:/Users/az306/OneDrive/Desktop/Projects/project-secretary
claude
```

**Best practice**:
- 建立 PowerShell 別名或桌面捷徑指向正確目錄
- 若發現 session 找不到專案清單 → 立刻退出，重新在正確目錄啟動
- 若不小心儲存了錯誤的 memory → 要該 session「忘記關於 XX 的記憶」

---

## Contribute Your Pitfalls

Found new problems? Welcome to:
1. Describe in GitHub issue
2. PR to update this file
3. Or tell secretary "I hit a pitfall..." secretary helps record

---

## Summary: Golden Rules

| Principle | Description |
|---|---|
| **Write it down** | Important things must write to markdown file, don't rely only on voice |
| **Regular cleanup** | Weekly check INDEX.md, monthly cleanup |
| **Clear hierarchy** | memory (knowledge), INDEX (status), daily (events) each own role |
| **Clear handoff** | Each session end say "wrap up," auto-generate handoff |
| **Cross-platform sync** | Use git + markdown, don't depend on SaaS |
| **Clear instructions** | Agent / Sub Agent prompts detailed like manual |
| **Extract, don't just record** | Review is for capturing lessons, not just logging events |
| **Bridge knowledge to action** | Saved articles must connect to projects via kb-digest |
| **Control output size** | Default brief; confirm before large outputs; one step at a time |

Follow these, your secretary system becomes rock-solid.
