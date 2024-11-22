import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
import Services from "@/components/services/service";
import AboutUs from "@/components/aboutUs"
import WhyUs from "@/components/whyUs"
import Testimonial from "@/components/clients/TestimonialSlider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <WhyUs />
      <Testimonial />

    </>
  );
}
