"use client";

import { useState, useMemo, useEffect } from "react";
import type { Article } from "@/types";

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

const FONT_SCALES = [
  { label: "S", value: 0.9 },
  { label: "M", value: 1 },
  { label: "L", value: 1.15 },
  { label: "XL", value: 1.3 },
];

type SortKey = "newest" | "oldest" | "title";

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
        list = [...list].sort((a, b) => (a.date_saved > b.date_saved ? 1 : -1));
        break;
      case "title":
        list = [...list].sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
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

        {/* Font size control */}
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
        className="w-full px-5 py-3.5 rounded-xl mb-6 outline-none transition-colors"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          color: "var(--text-primary)",
          fontSize: "0.95rem",
        }}
      />

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const colors = getTagColor(tag).split(",");
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer"
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

        {/* Project dropdown */}
        {allProjects.length > 0 && (
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="px-3 py-2 rounded-lg text-sm outline-none cursor-pointer"
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

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="px-3 py-2 rounded-lg text-sm outline-none cursor-pointer ml-auto"
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
        <div className="flex flex-col gap-5">
          {filtered.map((article) => (
            <article
              key={article.slug}
              className="p-6 rounded-2xl transition-colors"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <h2
                className="text-2xl font-semibold mb-3 leading-snug font-[family-name:var(--font-playfair)]"
                style={{ color: "var(--text-primary)" }}
              >
                {article.url ? (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                    style={{ textDecorationColor: "var(--accent)" }}
                  >
                    {article.title}
                  </a>
                ) : (
                  article.title
                )}
              </h2>

              {article.summary && (
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}
                >
                  {article.summary}
                </p>
              )}

              {article.keyTakeaways.length > 0 && (
                <ul className="mb-4 flex flex-col gap-1.5" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  {article.keyTakeaways.map((t, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed">
                      <span className="shrink-0 mt-1" style={{ color: "var(--accent)", fontSize: "0.7rem" }}>&#9670;</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                <span>{article.date_saved}</span>
                {article.source && (
                  <>
                    <span style={{ color: "var(--border)" }}>|</span>
                    <span>{article.source}</span>
                  </>
                )}
                <span style={{ color: "var(--border)" }}>|</span>
                <span>{estimateReadTime(article.content)} min read</span>

                <div className="flex flex-wrap gap-2 ml-auto">
                  {article.related_projects.map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{ background: "var(--border)", color: "var(--text-secondary)" }}
                    >
                      {p}
                    </span>
                  ))}

                  {article.tags.map((tag) => {
                    const colors = getTagColor(tag).split(",");
                    return (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ background: colors[0], color: colors[1] }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
