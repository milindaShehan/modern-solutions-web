import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
import Services from "@/components/services/service";
import AboutUs from "@/components/aboutUs"
import WhyUs from "@/components/whyUs"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <WhyUs />

    </>
  );
}
