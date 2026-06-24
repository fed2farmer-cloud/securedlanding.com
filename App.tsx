import Nav from "./Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProblemSolution from "./components/ProblemSolution";
import HowItWorks from "./components/HowItWorks";
import Calculator from "./components/Calculator";
import Marketplace from "./components/Marketplace";
import Invest from "./components/Invest";
import Security from "./components/Security";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain min-h-screen bg-ink-950 text-paper-50">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ProblemSolution />
        <HowItWorks />
        <Calculator />
        <Marketplace />
        <Invest />
        <Security />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
