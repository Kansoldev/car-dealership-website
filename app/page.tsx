import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedCars from "@/components/FeaturedCars";
import HowItWorks from "@/components/HowItWorks";
import BrowseByBrands from "@/components/BrowseByBrands";
import FAQ from "@/components/FAQ";
import VisitCta from "@/components/VisitCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedCars />
      <HowItWorks />
      <BrowseByBrands />
      <FAQ />
      <VisitCta />
    </>
  );
}
