import Navbar from "@/components/navbar";
import Footer from "@/components/footer"

import AboutHero from "@/components/about/aboutHero";
import OurInfo from "@/components/about/ourInfo"
import WhyUs from "@/components/whyUs"

export default function Page() {
  return (
    <>
      <Navbar />
    <AboutHero />
    <OurInfo />
    <WhyUs />
      
      <Footer />


    </>
  );
}
