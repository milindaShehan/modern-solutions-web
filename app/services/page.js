import Navbar from "@/components/navbar";
import Footer from "@/components/footer"

import ServiceHero from "@/components/services/serviceHero"
import ImageGallery from "@/components/works/workGallery"
import ServiceDescription from "@/components/services/serviceDescription/serviceDescription"

export default function Page() {
  return (
    <>
      <Navbar />
      <ServiceHero />
      <ServiceDescription />
      
      <Footer />

    </>
  );
}
