import SheetIndex from "@/components/SheetIndex";
import TitleSheet from "@/components/TitleSheet";
import AgentDiagram from "@/components/AgentDiagram";
import Applications from "@/components/Applications";
import Characteristics from "@/components/Characteristics";
import RevisionHistory from "@/components/RevisionHistory";
import Ordering from "@/components/Ordering";
import SheetFooter from "@/components/SheetFooter";

export default function Home() {
  return (
    <>
      <SheetIndex />
      <main>
        <TitleSheet />
        <AgentDiagram />
        <Applications />
        <Characteristics />
        <RevisionHistory />
        <Ordering />
      </main>
      <SheetFooter />
    </>
  );
}
