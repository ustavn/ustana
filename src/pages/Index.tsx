import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PlatformDiagram from "@/components/landing/PlatformDiagram";
import FeatureGrid from "@/components/landing/FeatureGrid";
import MarketSize from "@/components/landing/MarketSize";
import Team from "@/components/landing/Team";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PlatformDiagram />
      <FeatureGrid />
      <MarketSize />
      <Team />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
