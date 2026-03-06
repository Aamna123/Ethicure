import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Specialties from "@/components/specialties";
import HowItWorks from "@/components/how-it-works";
import CtaBanner from "@/components/cta-banner";
import Reviews from "@/components/reviews";

import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <HowItWorks />
        <CtaBanner />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
