import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import PlatformDiagram from "@/components/landing/PlatformDiagram";
import FeatureGrid from "@/components/landing/FeatureGrid";
import ProductScreenshots from "@/components/landing/ProductScreenshots";
import Metrics from "@/components/landing/Metrics";
import MarketSize from "@/components/landing/MarketSize";
import Team from "@/components/landing/Team";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PainPoints />
      <PlatformDiagram />
      <FeatureGrid />
      <ProductScreenshots />
      <Metrics />
      <MarketSize />
      <Team />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
