import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutForm from "@/components/AboutForm";
import LegalGuidance from "@/components/LegalGuidance";
import BrandCertified from "@/components/BrandCertified";
import Partners from "@/components/Partners";
import OurApproach from "@/components/OurApproach";
import Testimonials from "@/components/Testimonials";
import Offices from "@/components/Offices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutForm />
        <LegalGuidance />
        <BrandCertified />
        <Partners />
        <OurApproach />
        <Testimonials />
        <Offices />
      </main>
      <Footer />
    </>
  );
}
