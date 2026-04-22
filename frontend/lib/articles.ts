import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article } from "@/types";

const articlesDir = path.join(process.cwd(), "..", "workspace", "knowledge-base", "articles");

/**
 * Build a sortable date key from an article.
 * Prefers `date_published` (the article's own time tag); falls back to
 * `date_saved`. Partial dates like "2026-04" or "2026" are normalized
 * to mid-month/mid-year so they don't unfairly land at start or end.
 */
export function dateKey(article: Pick<Article, "date_published" | "date_saved">): string {
  const d = article.date_published || article.date_saved || "";
  const parts = d.split("-");
  const yy = (parts[0] || "0000").padStart(4, "0");
  const mm = (parts[1] || "06").padStart(2, "0");
  const dd = (parts[2] || "15").padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
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
      date_saved: String(data.date_saved ?? ""),
      date_published: String(data.date_published ?? ""),
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
