import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedCars from "@/components/FeaturedCars";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <FeaturedCars />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  );
}
