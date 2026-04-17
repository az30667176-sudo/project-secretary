"use client";

import { useState } from "react";
import type { Synthesis } from "@/types";

function FreshnessBadge({ s }: { s: Synthesis }) {
  if (s.is_stale) {
    return (
      <span
        className="shrink-0 px-2 py-0.5 rounded text-xs font-medium"
        style={{ background: "#3a1a1a", color: "#d46b6b" }}
        title={`已過新鮮期 ${Math.abs(s.days_until_stale)} 天，建議重審`}
      >
        ⚠ Stale
      </span>
    );
  }
  const warning = s.days_until_stale < 30;
  return (
    <span
      className="shrink-0 px-2 py-0.5 rounded text-xs font-medium"
      style={{
        background: warning ? "#3a2a10" : "#1a3324",
        color: warning ? "#d4a44e" : "#5bbf7a",
      }}
      title={`新鮮期剩 ${s.days_until_stale} 天`}
    >
      {warning ? `⏰ Review soon (${s.days_until_stale}d)` : `✓ Fresh (${s.days_until_stale}d)`}
    </span>
  );
}

function SynthesisCard({ s }: { s: Synthesis }) {
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
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h2
          className="text-xl font-semibold leading-snug font-[family-name:var(--font-playfair)]"
          style={{ color: "var(--text-primary)" }}
        >
          {s.title}
        </h2>
        <div className="flex flex-col gap-1 items-end shrink-0">
          <span
            className="px-2 py-0.5 rounded text-xs font-medium"
            style={{ background: "#2a1f42", color: "#a78bda" }}
          >
            Synthesis
          </span>
          <FreshnessBadge s={s} />
        </div>
      </div>

      {/* Summary */}
      {s.summary && (
        <p
          className="leading-relaxed mb-4"
          style={{ color: "var(--text-secondary)", fontSize: expanded ? "0.95rem" : "0.9rem" }}
        >
          {expanded ? s.summary : s.summary.length > 200 ? s.summary.slice(0, 200) + "..." : s.summary}
        </p>
      )}

      {/* Source Articles with dates */}
      {s.source_articles.length > 0 && (
        <div className="mb-4">
          <div className="text-xs mb-2 font-medium" style={{ color: "var(--text-muted)" }}>
            來源文章 ({s.source_articles.length}) · {s.oldest_source_date} ~ {s.newest_source_date}
          </div>
          <div className="flex flex-col gap-1.5">
            {s.source_articles.map((src) => (
              <a
                key={src.slug}
                href={src.url || undefined}
                target={src.url ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors hover:opacity-80"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  className="px-1.5 py-0.5 rounded text-xs shrink-0"
                  style={{ background: "#1a1a2a", color: "#8888cc" }}
                >
                  {src.date_published}
                </span>
                <span className="truncate">{src.title}</span>
                {src.source && (
                  <span className="ml-auto shrink-0" style={{ color: "var(--text-muted)" }}>
                    {src.source}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
        <span>Created: {s.date_created}</span>
        <span style={{ color: "var(--border)" }}>|</span>
        <span>Freshness window: {s.freshness_window_days}d</span>

        {!expanded && (
          <span className="ml-1" style={{ color: "var(--accent)", fontSize: "0.7rem" }}>▼ expand</span>
        )}

        <div className="flex flex-wrap gap-1.5 ml-auto">
          {s.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs"
              style={{
                background: "#2a1f42",
                color: "#a78bda",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function SynthesisPage({ syntheses }: { syntheses: Synthesis[] }) {
  if (syntheses.length === 0) {
    return (
      <div className="text-center py-24" style={{ color: "var(--text-muted)" }}>
        <p className="text-2xl mb-3 font-[family-name:var(--font-playfair)]" style={{ color: "var(--text-secondary)" }}>
          No insights yet
        </p>
        <p className="text-base leading-relaxed">
          Synthesis 是跨文章的洞察整合。累積足夠相關文章後，跟秘書說「在 kurt-library 產一篇 synthesis」即可。
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
          <span>{syntheses.length} insights</span>
          <span>{syntheses.filter((s) => s.is_stale).length} stale</span>
          <span>
            {syntheses.filter((s) => !s.is_stale && s.days_until_stale < 30).length} need review soon
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {syntheses.map((s) => (
          <SynthesisCard key={s.slug} s={s} />
        ))}
      </div>
    </div>
  );
}
