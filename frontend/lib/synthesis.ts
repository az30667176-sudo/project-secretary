import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Synthesis } from "@/types";

const synthesisDir = path.join(process.cwd(), "..", "workspace", "knowledge-base", "synthesis");

export function getAllSyntheses(): Synthesis[] {
  if (!fs.existsSync(synthesisDir)) return [];

  const files = fs.readdirSync(synthesisDir).filter((f) => f.endsWith(".md") && !f.startsWith("_"));

  const items = files.map((filename): Synthesis => {
    const filePath = path.join(synthesisDir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    const summaryMatch = content.match(/## Summary\s*\n([\s\S]*?)(?=\n## |$)/);
    const summary = summaryMatch ? summaryMatch[1].trim() : "";

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title ?? filename,
      date_created: String(data.date_created ?? ""),
      source_articles: data.source_articles ?? [],
      tags: data.tags ?? [],
      summary,
      content,
    };
  });

  return items.sort((a, b) => (b.date_created > a.date_created ? 1 : -1));
}
