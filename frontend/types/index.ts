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

// Resolved source article metadata (after lib/synthesis resolves slugs)
export interface SourceRef {
  slug: string;
  title: string;
  date_published: string; // YYYY-MM-DD
  source: string; // e.g. "FOMO研究院電子報"
  url: string;
}

// Synthesis with freshness tracking
export interface Synthesis {
  slug: string;
  title: string;
  date_created: string;
  source_articles: SourceRef[]; // resolved from slugs
  tags: string[];
  freshness_window_days: number; // default 180
  is_stale: boolean; // computed: now > date_created + freshness_window_days
  days_until_stale: number; // negative if already stale
  oldest_source_date: string; // oldest source article's date
  newest_source_date: string; // newest source article's date
  summary: string;
  content: string;
}
