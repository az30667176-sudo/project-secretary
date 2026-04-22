"use client";

import { useState, useMemo, useEffect } from "react";
import type { Article } from "@/types";
import { dateKey } from "@/lib/articles";

const TAG_COLORS: Record<string, string> = {};
const PALETTE = [
  "#0c3547,#5bb8d4",
  "#3b1a2e,#d46b9e",
  "#1a3324,#5bbf7a",
  "#3a2a10,#d4a44e",
  "#2a1f42,#a78bda",
  "#3a1a1a,#d46b6b",
  "#1a3333,#5bbfb8",
  "#331a3a,#c47dda",
];

function getTagColor(tag: string) {
  if (!TAG_COLORS[tag]) {
    const idx = Object.keys(TAG_COLORS).length % PALETTE.length;
    TAG_COLORS[tag] = PALETTE[idx];
  }
  return TAG_COLORS[tag];
}

function estimateReadTime(content: string) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function truncateSummary(text: string, maxLen = 120): string {
  if (text.length <= maxLen) return text;
  const cut = text.lastIndexOf("。", maxLen);
  if (cut > 60) return text.slice(0, cut + 1);
  const cut2 = text.lastIndexOf(".", maxLen);
  if (cut2 > 60) return text.slice(0, cut2 + 1);
  return text.slice(0, maxLen) + "...";
}

const FONT_SCALES = [
  { label: "S", value: 0.9 },
  { label: "M", value: 1 },
  { label: "L", value: 1.15 },
  { label: "XL", value: 1.3 },
];

type SortKey = "newest" | "oldest" | "title";

function ArticleCard({ article }: { article: Article }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="p-6 rounded-2xl transition-all cursor-pointer"
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${expanded ? "var(--border-hover)" : "var(--border)"}`,
      }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Title */}
      <h2
        className="text-xl font-semibold mb-2 leading-snug font-[family-name:var(--font-playfair)]"
        style={{ color: "var(--text-primary)" }}
      >
        {article.title}
      </h2>

      {/* Preview: truncated summary */}
      {!expanded && article.summary && (
        <p
          className="leading-relaxed mb-3"
          style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
        >
          {truncateSummary(article.summary)}
        </p>
      )}

      {/* Expanded: full summary + key takeaways */}
      {expanded && (
        <>
          {article.summary && (
            <p
              className="leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
            >
              {article.summary}
            </p>
          )}

          {article.keyTakeaways.length > 0 && (
            <ul className="mb-4 flex flex-col gap-2" style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
              {article.keyTakeaways.map((t, i) => (
                <li key={i} className="flex gap-2 leading-relaxed">
                  <span className="shrink-0 mt-0.5" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>&#9670;</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          )}

          {article.url && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-medium mb-4 hover:underline"
              style={{ color: "var(--accent)" }}
              onClick={(e) => e.stopPropagation()}
            >
              View original &rarr;
            </a>
          )}
        </>
      )}

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
        <span>{estimateReadTime(article.content)} min read</span>

        {!expanded && (
          <span className="ml-1" style={{ color: "var(--accent)", fontSize: "0.7rem" }}>&#9660; expand</span>
        )}

        <div className="flex flex-wrap gap-1.5 ml-auto">
          {/* Source chip */}
          {article.source && (
            <span
              className="px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ background: "#1a2a1a", color: "#7dba7d" }}
            >
              {article.source}
            </span>
          )}

          {/* Date chip */}
          <span
            className="px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ background: "#1a1a2a", color: "#8888cc" }}
          >
            {article.date_published || article.date_saved}
          </span>

          {/* Project chips */}
          {article.related_projects.map((p) => (
            <span
              key={p}
              className="px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ background: "var(--border)", color: "var(--text-secondary)" }}
            >
              {p}
            </span>
          ))}

          {/* Tag chips */}
          {article.tags.map((tag) => {
            const colors = getTagColor(tag).split(",");
            return (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-xs font-medium"
                style={{ background: colors[0], color: colors[1] }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export function KnowledgePage({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", String(fontScale));
  }, [fontScale]);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => a.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [articles]);

  const allProjects = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => a.related_projects.forEach((p) => set.add(p)));
    return Array.from(set).sort();
  }, [articles]);

  const filtered = useMemo(() => {
    let list = articles;

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedTags.length > 0) {
      list = list.filter((a) => selectedTags.some((t) => a.tags.includes(t)));
    }

    if (selectedProject) {
      list = list.filter((a) => a.related_projects.includes(selectedProject));
    }

    switch (sort) {
      case "oldest":
        list = [...list].sort((a, b) => (dateKey(a) > dateKey(b) ? 1 : -1));
        break;
      case "title":
        list = [...list].sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // newest — re-sort by date_published (with fallback) so client-side
        // sort matches initial server-side order even after filtering.
        list = [...list].sort((a, b) => (dateKey(b) > dateKey(a) ? 1 : -1));
        break;
    }

    return list;
  }, [articles, search, selectedTags, selectedProject, sort]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <div>
      {/* Header row: stats + font size */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
          <span>{articles.length} articles</span>
          <span>{allTags.length} tags</span>
          <span>{allProjects.length} projects</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-xs mr-2" style={{ color: "var(--text-muted)" }}>Aa</span>
          {FONT_SCALES.map((s) => (
            <button
              key={s.label}
              onClick={() => setFontScale(s.value)}
              className="w-8 h-8 rounded-lg text-xs font-medium transition-all cursor-pointer"
              style={{
                background: fontScale === s.value ? "var(--accent)" : "transparent",
                color: fontScale === s.value ? "#0c0c0c" : "var(--text-muted)",
                border: `1px solid ${fontScale === s.value ? "var(--accent)" : "var(--border)"}`,
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-5 py-3 rounded-xl mb-5 outline-none transition-colors"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          color: "var(--text-primary)",
          fontSize: "0.9rem",
        }}
      />

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <div className="flex flex-wrap gap-1.5">
          {allTags.map((tag) => {
            const colors = getTagColor(tag).split(",");
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className="px-2.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer"
                style={{
                  background: active ? colors[0] : "transparent",
                  color: active ? colors[1] : "var(--text-muted)",
                  border: `1px solid ${active ? colors[1] + "40" : "var(--border)"}`,
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {allProjects.length > 0 && (
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="px-3 py-1.5 rounded-lg text-xs outline-none cursor-pointer"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <option value="">All projects</option>
            {allProjects.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        )}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="px-3 py-1.5 rounded-lg text-xs outline-none cursor-pointer ml-auto"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="title">Title</option>
        </select>
      </div>

      {/* Articles */}
      {filtered.length === 0 ? (
        <div className="text-center py-24" style={{ color: "var(--text-muted)" }}>
          <p className="text-2xl mb-3 font-[family-name:var(--font-playfair)]" style={{ color: "var(--text-secondary)" }}>
            No articles yet
          </p>
          <p className="text-base leading-relaxed">
            Share a URL in Claude Code to save your first article.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
