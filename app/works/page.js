import Navbar from "@/components/navbar";
import Footer from "@/components/footer"

import WorkHero from "@/components/works/workHero"
import ImageGallery from "@/components/works/workGallery"

export default function Page() {
  return (
    <>
      <Navbar />
      <WorkHero />
      <ImageGallery />
      
      <Footer />

    </>
  );
}
