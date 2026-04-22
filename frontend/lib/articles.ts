import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article } from "@/types";
import { dateKey } from "./dateKey";

const articlesDir = path.join(process.cwd(), "..", "workspace", "knowledge-base", "articles");

/**
 * Normalize a YAML-parsed date value to a YYYY-MM-DD string.
 * gray-matter parses unquoted `2026-04-15` in frontmatter as a JS Date
 * object; calling `String()` on it yields "Wed Apr 15 2026 00:00:00 GMT+0000",
 * which breaks lexicographic sort. Strings (including partial dates like
 * "2026-04") are returned as-is.
 */
function normalizeDate(v: unknown): string {
  if (v == null) return "";
  if (v instanceof Date && !isNaN(v.getTime())) {
    return v.toISOString().slice(0, 10);
  }
  return String(v);
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md") && !f.startsWith("_"));

  const articles = files.map((filename): Article => {
    const filePath = path.join(articlesDir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    // Extract summary from content (## Summary section)
    const summaryMatch = content.match(/## Summary\s*\n([\s\S]*?)(?=\n## |$)/);
    const summary = summaryMatch ? summaryMatch[1].trim() : "";

    // Extract key takeaways (## Key Takeaways section)
    const takeawaysMatch = content.match(/## Key Takeaways\s*\n([\s\S]*?)(?=\n## |$)/);
    const keyTakeaways = takeawaysMatch
      ? takeawaysMatch[1].trim().split(/\n/).filter((l) => l.startsWith("- ")).map((l) => l.replace(/^- /, ""))
      : [];

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title ?? filename,
      url: data.url ?? "",
      source: data.source ?? "",
      date_saved: normalizeDate(data.date_saved),
      date_published: normalizeDate(data.date_published),
      language: data.language ?? "",
      type: data.type ?? "article",
      tags: data.tags ?? [],
      related_projects: data.related_projects ?? [],
      summary,
      keyTakeaways,
      content,
    };
  });

  return articles.sort((a, b) => (dateKey(b) > dateKey(a) ? 1 : -1));
}
