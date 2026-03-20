import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Roadmap from "@/components/Roadmap";
import Investment from "@/components/Investment";
import Community from "@/components/Community";
import Docs from "@/components/Docs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen grid-bg">
      <Hero />
      <Vision />
      <Roadmap />
      <Investment />
      <Community />
      <Docs />
      <Footer />
    </main>
  );
}
