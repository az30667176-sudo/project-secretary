"use client";

import type { Synthesis } from "@/types";

export function SynthesisPage({ syntheses }: { syntheses: Synthesis[] }) {
  if (syntheses.length === 0) {
    return (
      <div className="text-center py-20" style={{ color: "var(--text-muted)" }}>
        <p className="text-lg mb-2">No insights yet</p>
        <p className="text-sm">
          Run <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>synthesis</code> in Claude Code to generate your first one.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {syntheses.map((s) => (
        <article
          key={s.slug}
          className="p-5 rounded-xl transition-colors"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2
              className="text-xl font-semibold font-[family-name:var(--font-playfair)]"
              style={{ color: "var(--text-primary)" }}
            >
              {s.title}
            </h2>
            <span
              className="shrink-0 px-2 py-0.5 rounded text-xs font-medium"
              style={{ background: "#ede9fe", color: "#6d28d9" }}
            >
              AI Generated
            </span>
          </div>

          {s.summary && (
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
              {s.summary.length > 300 ? s.summary.slice(0, 300) + "..." : s.summary}
            </p>
          )}

          {s.source_articles.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {s.source_articles.map((src) => (
                <span
                  key={src}
                  className="px-2.5 py-1 rounded-full text-xs"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {src}
                </span>
              ))}
            </div>
          )}

          <div className="text-xs" style={{ color: "var(--text-muted)" }}>
            {s.date_created}
          </div>
        </article>
      ))}
    </div>
  );
}
