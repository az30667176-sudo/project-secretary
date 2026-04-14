import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article } from "@/types";

const articlesDir = path.join(process.cwd(), "..", "workspace", "knowledge-base", "articles");

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

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title ?? filename,
      url: data.url ?? "",
      source: data.source ?? "",
      date_saved: data.date_saved ?? "",
      date_published: data.date_published ?? "",
      language: data.language ?? "",
      type: data.type ?? "article",
      tags: data.tags ?? [],
      related_projects: data.related_projects ?? [],
      summary,
      content,
    };
  });

  return articles.sort((a, b) => (b.date_saved > a.date_saved ? 1 : -1));
}
