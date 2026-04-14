import { getAllArticles } from "@/lib/articles";
import { KnowledgePage } from "./KnowledgePage";

export default function Page() {
  const articles = getAllArticles();
  return <KnowledgePage articles={articles} />;
}
