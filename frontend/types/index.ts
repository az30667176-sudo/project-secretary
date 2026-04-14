// Based on knowledge-base SKILL.md Article Template frontmatter
export interface Article {
  slug: string;
  title: string;
  url: string;
  source: string;
  date_saved: string;
  date_published: string;
  language: string;
  type: "article" | "video" | "research";
  tags: string[];
  related_projects: string[];
  summary: string;
  keyTakeaways: string[];
  content: string;
}

// Synthesis format (not defined in SKILL.md — inferred from UI spec)
export interface Synthesis {
  slug: string;
  title: string;
  date_created: string;
  source_articles: string[];
  tags: string[];
  summary: string;
  content: string;
}
