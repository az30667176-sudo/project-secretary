import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Synthesis, SourceRef } from "@/types";
import { getAllArticles } from "./articles";

const synthesisDir = path.join(process.cwd(), "..", "workspace", "knowledge-base", "synthesis");

const DAY_MS = 24 * 60 * 60 * 1000;

function resolveSourceRefs(slugs: string[]): SourceRef[] {
  const articles = getAllArticles();
  const byslug = new Map(articles.map((a) => [a.slug, a]));
  return slugs
    .map((slug): SourceRef | null => {
      const a = byslug.get(slug);
      if (!a) {
        return {
          slug,
          title: slug,
          date_published: "",
          source: "",
          url: "",
        };
      }
      return {
        slug: a.slug,
        title: a.title,
        date_published: a.date_published || a.date_saved,
        source: a.source,
        url: a.url,
      };
    })
    .filter((s): s is SourceRef => s !== null);
}

export function getAllSyntheses(): Synthesis[] {
  if (!fs.existsSync(synthesisDir)) return [];

  const files = fs.readdirSync(synthesisDir).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
  const today = new Date();

  const items = files.map((filename): Synthesis => {
    const filePath = path.join(synthesisDir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    const summaryMatch = content.match(/## Summary\s*\n([\s\S]*?)(?=\n## |$)/);
    const summary = summaryMatch ? summaryMatch[1].trim() : "";

    const rawSlugs = (data.source_articles as unknown[] | undefined) ?? [];
    const slugs = rawSlugs.map((s) => String(s));
    const sourceRefs = resolveSourceRefs(slugs);

    const freshnessWindow = Number(data.freshness_window_days ?? 180);
    const dateCreated = String(data.date_created ?? "");
    const created = dateCreated ? new Date(dateCreated) : today;
    const staleDate = new Date(created.getTime() + freshnessWindow * DAY_MS);
    const daysUntilStale = Math.floor((staleDate.getTime() - today.getTime()) / DAY_MS);
    const isStale = daysUntilStale < 0;

    const dates = sourceRefs
      .map((s) => s.date_published)
      .filter((d) => d)
      .sort();
    const oldestSourceDate = dates[0] ?? "";
    const newestSourceDate = dates[dates.length - 1] ?? "";

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title ?? filename,
      date_created: dateCreated,
      source_articles: sourceRefs,
      tags: data.tags ?? [],
      freshness_window_days: freshnessWindow,
      is_stale: isStale,
      days_until_stale: daysUntilStale,
      oldest_source_date: oldestSourceDate,
      newest_source_date: newestSourceDate,
      summary,
      content,
    };
  });

  return items.sort((a, b) => (b.date_created > a.date_created ? 1 : -1));
}
