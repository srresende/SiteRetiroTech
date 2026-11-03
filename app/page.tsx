import { ChamadaFinal } from "@/components/sections/ChamadaFinal";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Investimento } from "@/components/sections/Investimento";
import { Mentor } from "@/components/sections/Mentor";
import { ODia } from "@/components/sections/ODia";
import { OQueVoceLeva } from "@/components/sections/OQueVoceLeva";
import { ParaQuemE } from "@/components/sections/ParaQuemE";

// Section order follows PRD §7.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ParaQuemE />
        <OQueVoceLeva />
        <ODia />
        <Mentor />
        <Investimento />
        <ChamadaFinal />
      </main>
      <Footer />
    </>
  );
}
