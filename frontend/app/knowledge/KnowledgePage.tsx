"use client";

import { useState, useMemo } from "react";
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

type SortKey = "newest" | "oldest" | "title";

export function KnowledgePage({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");

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
      {/* Stats */}
      <div className="flex gap-6 mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
        <span>{articles.length} articles</span>
        <span>{allTags.length} tags</span>
        <span>{allProjects.length} projects</span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 rounded-xl text-sm mb-5 outline-none transition-colors focus:ring-1"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          color: "var(--text-primary)",
        }}
      />

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Tags */}
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

        {/* Project dropdown */}
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

        {/* Sort */}
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
        <div className="text-center py-16" style={{ color: "var(--text-muted)" }}>
          <p className="text-lg mb-2">No articles yet</p>
          <p className="text-sm">Share a URL in Claude Code to save your first article.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((article) => (
            <article
              key={article.slug}
              className="p-5 rounded-xl transition-colors"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <h2
                className="text-xl font-semibold mb-2 font-[family-name:var(--font-playfair)]"
                style={{ color: "var(--text-primary)" }}
              >
                {article.url ? (
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {article.title}
                  </a>
                ) : (
                  article.title
                )}
              </h2>

              {article.summary && (
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                  {article.summary.length > 200 ? article.summary.slice(0, 200) + "..." : article.summary}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                <span>{article.date_saved}</span>
                {article.source && (
                  <>
                    <span>-</span>
                    <span>{article.source}</span>
                  </>
                )}
                <span>-</span>
                <span>{estimateReadTime(article.content)} min read</span>

                {article.related_projects.map((p) => (
                  <span
                    key={p}
                    className="px-2 py-0.5 rounded text-xs"
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
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ background: colors[0], color: colors[1] }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
