import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/ContactForm"; // Contact card/form component
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { CheckCircle2, Lightbulb, Target, Sparkles } from "lucide-react";

const whyUs = [
  "Strategy before visual execution",
  "Purpose-driven creative thinking",
  "Clear and consistent communication",
  "Premium and minimal design approach",
  "Attention to detail at every stage",
  "Creative solutions built around your goals",
];

const approaches = [
  {
    icon: Lightbulb,
    title: "Think Clearly",
    description:
      "We start by understanding the idea, the audience, the objective, and the core challenge behind every project.",
  },
  {
    icon: Target,
    title: "Create With Purpose",
    description:
      "We translate strategic thinking into visual solutions that have a clear purpose and meaningful direction.",
  },
  {
    icon: Sparkles,
    title: "Refine Every Detail",
    description:
      "We believe quality lives in the details, so every element is reviewed, refined, and aligned before delivery.",
  },
];

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
            ABOUT
        ===================================================== */}
        <About />

        {/* =====================================================
            SERVICES
        ===================================================== */}
        <Services />

        {/* =====================================================
            WHY US
        ===================================================== */}
        <section className="bg-[#FAFAFA] py-16 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading & Context */}
              <div className="lg:col-span-5 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 sm:w-10 h-px bg-[#C9A227]" />
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#8B741A]">
                    Why Kaagidham
                  </span>
                  <span className="w-8 sm:w-10 h-px bg-[#C9A227] lg:hidden" />
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#111111]">
                  Creative work <br />
                  <span className="text-[#C9A227]">with a reason.</span>
                </h2>

                <p className="mt-5 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Choosing a creative partner is about more than choosing a
                  designer. It is about finding someone who understands your
                  business, your audience, and the role creativity needs to play
                  in achieving your goals.
                </p>

                <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Our approach combines strategic thinking, visual craft, and
                  careful execution to create work that is both distinctive and
                  purposeful.
                </p>
              </div>

              {/* Right Column: Key Value Cards (2 Columns Grid) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {whyUs.map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-neutral-200/90 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-[#C9A227] hover:shadow-[0_10px_30px_rgba(201,162,39,0.06)] hover:-translate-y-0.5 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 shrink-0 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#8B741A] mt-0.5">
                      <CheckCircle2 size={18} strokeWidth={2.2} />
                    </div>
                    <p className="text-sm sm:text-base font-semibold leading-snug text-neutral-800">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CREATIVE APPROACH
        ===================================================== */}
        <section className="bg-white py-16 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <span className="w-8 sm:w-10 h-px bg-[#C9A227]" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#8B741A]">
                  Our Approach
                </span>
                <span className="w-8 sm:w-10 h-px bg-[#C9A227]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#111111]">
                Creativity becomes powerful <br />
                <span className="text-[#C9A227]">when it has direction.</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                We don't believe in creating visuals simply because they look
                good. We first understand what needs to be communicated, why it
                matters, and who needs to understand it.
              </p>
            </div>

            {/* Approach Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {approaches.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex flex-col justify-between border border-neutral-200/90 rounded-2xl bg-white p-6 sm:p-8 transition-all duration-300 hover:border-[#C9A227] hover:shadow-[0_15px_35px_rgba(201,162,39,0.06)] hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-neutral-200 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A227] group-hover:border-[#C9A227]">
                        <Icon
                          size={22}
                          className="text-[#8B741A] group-hover:text-black transition-colors"
                        />
                      </div>

                      <h3 className="mt-6 text-xl font-bold tracking-tight text-[#111111] group-hover:text-[#8B741A] transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 h-0.5 w-6 rounded-full bg-neutral-200 transition-all duration-300 group-hover:w-12 group-hover:bg-[#C9A227]" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT (White, Black & Gold Theme)
        ===================================================== */}
        <Contact />

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <footer className="bg-[#111111] text-white py-12 border-t border-neutral-900">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
              {/* Brand Information */}
              <div>
                <p className="font-serif font-bold text-xl tracking-tight">
                  Kaagidham <span className="text-[#C9A227]">Creatives</span>
                </p>
                <p className="text-xs text-neutral-400 mt-1.5 tracking-wide">
                  Strategy • Design • Motion • Creative Direction
                </p>
              </div>

              {/* Tagline & Social Links */}
              <div className="flex flex-col items-center">
                <p className="text-xs sm:text-sm text-neutral-400 mb-4 max-w-xs leading-relaxed">
                  Creative thinking with purpose, clarity, and intention.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300"
                  >
                    <FaInstagram size={16} />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300"
                  >
                    <FaFacebookF size={14} />
                  </a>
                </div>
              </div>

              {/* Copyright Info */}
              <div className="md:text-right">
                <p className="text-xs text-neutral-400">
                  © 2026 Kaagidham Creatives Private Limited
                </p>
                <p className="text-[11px] text-neutral-600 mt-1">
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
