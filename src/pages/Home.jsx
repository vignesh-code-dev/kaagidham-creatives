import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Approach from "../components/Approach";
import Contact from "../components/ContactForm"; // Contact card/form component
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#111111] overflow-x-hidden selection:bg-[#C9A227]/20 selection:text-black">
        {/* =====================================================
            HERO
        ===================================================== */}
        <Hero />

        {/* =====================================================
            SERVICES
        ===================================================== */}
        <Services />
        <Approach />

        {/* =====================================================
            CONTACT (White, Black & Gold Theme)
        ===================================================== */}
        <Contact />

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <Footer />
      </main>
    </>
  );
}
