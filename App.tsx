import Nav from "./Nav";
import Hero from "./Hero";
import Marquee from "./Marquee";
import ProblemSolution from "./ProblemSolution";
import HowItWorks from "./HowItWorks";
import Calculator from "./Calculator";
import Marketplace from "./Marketplace";
import Invest from "./Invest";
import Security from "./Security";
import FAQ from "./FAQ";
import Footer from "./Footer";

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
