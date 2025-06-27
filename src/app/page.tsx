import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
// import Projects from "@/components/Projects"; // COMENTADO - Reativar quando tiver projetos
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> */} {/* COMENTADO - Reativar quando tiver projetos */}
      <Contact />
      <Footer />
    </main>
  );
}
