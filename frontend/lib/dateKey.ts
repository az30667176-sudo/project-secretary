/**
 * Build a sortable date key from an article.
 * Prefers `date_published` (the article's own time tag); falls back to
 * `date_saved`. Partial dates like "2026-04" or "2026" are normalized
 * to mid-month/mid-year so they don't unfairly land at start or end.
 *
 * Lives in its own file (no Node-only imports) so it can be imported
 * from both server-side `lib/articles.ts` and client components.
 */
export function dateKey(article: { date_published?: string; date_saved?: string }): string {
  const d = article.date_published || article.date_saved || "";
  const parts = d.split("-");
  const yy = (parts[0] || "0000").padStart(4, "0");
  const mm = (parts[1] || "06").padStart(2, "0");
  const dd = (parts[2] || "15").padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}
