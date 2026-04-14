import { getAllSyntheses } from "@/lib/synthesis";
import { SynthesisPage } from "./SynthesisPage";

export default function Page() {
  const syntheses = getAllSyntheses();
  return <SynthesisPage syntheses={syntheses} />;
}
