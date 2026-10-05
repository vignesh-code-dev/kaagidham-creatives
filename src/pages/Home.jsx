import Navbar from "../components/Navbar";
import { Link } from "react-scroll";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const services = [
  {
    number: "01",
    title: "Brand Identity Systems",
    description:
      "Logos, visual languages, typography frameworks, and brand structures built for recognition and longevity.",
  },
  {
    number: "02",
    title: "Visual Communication Design",
    description:
      "Posters, print, campaigns, presentation systems, and marketing visuals designed for clarity and precision.",
  },
  {
    number: "03",
    title: "Motion & Visual Storytelling",
    description:
      "Concept-driven motion graphics and visual narratives that make ideas dynamic and memorable.",
  },
  {
    number: "04",
    title: "Strategic Creative Direction",
    description:
      "Positioning clarity, message architecture, audience alignment, and visual consistency before execution begins.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understanding your vision, ambition, and audience psychology.",
  },
  {
    number: "02",
    title: "Define",
    text: "Clarifying positioning, creative direction, and communication tone.",
  },
  {
    number: "03",
    title: "Design",
    text: "Translating strategy into visual systems and tangible assets.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Precise, refined, high-impact creative execution.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#111111] overflow-x-hidden">
        {/* ================= HERO ================= */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden bg-white"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Gold Circle */}
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#D4AF37]/10" />

            {/* Black Circle */}
            <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-black/[0.035]" />

            {/* Gold Line */}
            <div className="absolute top-28 right-0 w-[35%] h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <div className="absolute bottom-28 left-0 w-[28%] h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            {/* Dots */}
            <div className="absolute top-32 left-[8%] grid grid-cols-5 gap-2 opacity-40">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="w-1 h-1 rounded-full bg-[#C9A227]" />
              ))}
            </div>

            <div className="absolute bottom-28 right-[8%] grid grid-cols-5 gap-2 opacity-40">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="w-1 h-1 rounded-full bg-[#C9A227]" />
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-3 mb-7"
              >
                <span className="w-10 h-px bg-[#C9A227]" />

                <span className="text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#8B741A]">
                  Strategy • Design • Motion
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[0.98] tracking-tight max-w-5xl"
              >
                We Turn Ideas
                <br />
                <span className="relative inline-block">
                  Into <span className="text-[#F7C214]">Impact.</span>
                  <span className="absolute left-0 -bottom-3 w-20 sm:w-28 h-1 bg-[#C9A227]" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-neutral-600"
              >
                Strategy-led creative studio shaping ideas into powerful visual
                systems that communicate clearly, connect deeply, and create
                lasting impact.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-70}
                  className="group cursor-pointer inline-flex items-center justify-center gap-3 bg-[#111111] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#C9A227] hover:text-black transition-all duration-300 shadow-lg"
                >
                  Start a Conversation
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>

                <Link
                  to="services"
                  smooth
                  duration={600}
                  offset={-70}
                  className="cursor-pointer inline-flex items-center justify-center border border-neutral-300 text-[#111111] px-7 py-3.5 rounded-full font-semibold hover:border-[#C9A227] hover:bg-[#C9A227]/10 transition-all duration-300"
                >
                  Explore Our Work
                </Link>
              </motion.div>
            </div>

            {/* Bottom Statement */}
            <div className="mt-24 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row justify-between gap-4 text-sm text-neutral-500">
              <span>Creative Consultancy</span>
              <span className="hidden sm:block">Based in Tamil Nadu</span>
              <span>Built with Intention</span>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="relative bg-[#FAFAFA] py-20 sm:py-24 lg:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Heading */}
            <div className="max-w-4xl mb-16">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-[#C9A227]" />
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#8B741A]">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Ideas on paper.
                <br />
                <span className="text-[#C9A227]">Impact in reality.</span>
              </h2>

              <p className="mt-7 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                Kaagidham Creatives is a strategy-led creative studio based in
                Tamil Nadu, working at the intersection of design, storytelling,
                and clarity.
              </p>
            </div>

            {/* About Grid */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
              <div className="space-y-6">
                <p className="text-neutral-600 leading-relaxed">
                  We are a team of thinkers, designers, and visual architects
                  who transform ideas into structured and powerful creative
                  systems.
                </p>

                <p className="text-neutral-600 leading-relaxed">
                  Every meaningful idea begins quietly — on{" "}
                  <span className="font-semibold text-[#C9A227]">paper.</span>
                </p>

                <p className="text-neutral-600 leading-relaxed">
                  What follows determines whether it becomes forgotten or
                  unforgettable.
                </p>

                <p className="text-neutral-600 leading-relaxed">
                  We help businesses, institutions, and founders turn scattered
                  ideas into focused and strategic creative direction.
                </p>
              </div>

              {/* Statement Card */}
              <div className="relative bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
                <span className="absolute top-0 left-8 -translate-y-1/2 bg-[#C9A227] text-black text-xs font-bold tracking-widest px-4 py-2 rounded-full">
                  OUR BELIEF
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold leading-tight mt-4">
                  Not noise.
                  <br />
                  Not decoration.
                  <br />
                  <span className="text-[#C9A227]">
                    Deliberate creative impact.
                  </span>
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Question", "Refine", "Design", "Align"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="border border-neutral-200 rounded-xl p-4 hover:border-[#C9A227] hover:bg-[#C9A227]/5 transition-all"
                      >
                        <span className="text-xs text-neutral-400">
                          0{index + 1}
                        </span>

                        <p className="mt-1 font-semibold">
                          We {item.toLowerCase()}.
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="mt-24 max-w-4xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#8B741A] uppercase mb-5">
                Our Philosophy
              </p>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                We don't just design.
                <br />
                <span className="text-[#C9A227]">
                  We think before we create.
                </span>
              </h3>

              <p className="mt-6 text-neutral-600 leading-relaxed max-w-3xl">
                Kaagidham Creatives is not built around templates or trends. We
                are built around strategic clarity, creative intelligence,
                minimal premium execution, and long-term thinking.
              </p>
            </div>

            {/* Process */}
            <div className="mt-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] text-[#8B741A] uppercase">
                    Our Process
                  </p>

                  <h3 className="mt-3 text-3xl sm:text-4xl font-bold">
                    How we approach every project
                  </h3>
                </div>

                <span className="text-neutral-400 text-sm">
                  Discover → Define → Design → Deliver
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {process.map((item) => (
                  <div
                    key={item.number}
                    className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:-translate-y-2 hover:border-[#C9A227] transition-all duration-300"
                  >
                    <span className="text-sm font-bold text-[#C9A227]">
                      {item.number}
                    </span>

                    <h4 className="mt-5 text-xl font-bold">{item.title}</h4>

                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="bg-white py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-[#C9A227]" />

                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#8B741A]">
                  What We Do
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Our <span className="text-[#C9A227]">Services</span>
              </h2>

              <p className="mt-6 text-neutral-600 leading-relaxed">
                Creative solutions designed around your business goals,
                audience, positioning, and long-term brand direction.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 gap-5">
              {services.map((service) => (
                <motion.div
                  key={service.number}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 sm:p-9 shadow-[0_10px_35px_rgba(0,0,0,0.04)]"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-full bg-[#C9A227]/5 group-hover:bg-[#C9A227]/10 transition-all" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-5">
                      <span className="text-4xl font-bold text-neutral-200 group-hover:text-[#C9A227]/30 transition-colors">
                        {service.number}
                      </span>

                      <span className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-[#C9A227] group-hover:border-[#C9A227] transition-all">
                        →
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl sm:text-2xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-7 w-12 h-1 bg-[#C9A227] group-hover:w-20 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-[#111111] text-white py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
            <p className="text-[#D4AF37] text-sm font-semibold tracking-[0.2em] uppercase">
              Let's Create Something Meaningful
            </p>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Your Idea Deserves Structure.
              <br />
              <span className="text-[#D4AF37]">
                Your Brand Deserves Intention.
              </span>
            </h2>

            <Link
              to="contact"
              smooth
              duration={600}
              offset={-70}
              className="inline-flex mt-8 bg-[#D4AF37] text-black px-8 py-3.5 rounded-full font-bold cursor-pointer hover:bg-white transition-all duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="bg-[#FAFAFA] py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-3 mb-5">
                <span className="w-10 h-px bg-[#C9A227]" />

                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#8B741A]">
                  Contact
                </span>

                <span className="w-10 h-px bg-[#C9A227]" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold">
                Let's Start a{" "}
                <span className="text-[#C9A227]">Conversation</span>
              </h2>

              <p className="mt-5 text-neutral-600">
                We'd love to hear about your project.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Contact Info */}
              <div>
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:contact.kaagidhamcreatives@gmail.com"
                    className="group flex items-center gap-5 bg-white border border-neutral-200 rounded-2xl p-5 hover:border-[#C9A227] hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center group-hover:bg-[#C9A227] transition-all">
                      <IoIosMail className="text-2xl text-[#C9A227] group-hover:text-black" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold tracking-[0.2em] text-[#8B741A]">
                        EMAIL
                      </p>

                      <p className="mt-1 text-sm sm:text-base break-all">
                        contact.kaagidhamcreatives@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+918939553359"
                    className="group flex items-center gap-5 bg-white border border-neutral-200 rounded-2xl p-5 hover:border-[#C9A227] hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center group-hover:bg-[#C9A227] transition-all">
                      <FaPhoneVolume className="text-xl text-[#C9A227] group-hover:text-black" />
                    </div>

                    <div>
                      <p className="text-xs font-bold tracking-[0.2em] text-[#8B741A]">
                        PHONE
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        +91 8939553359
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <a
                    href="https://www.google.com/maps/search/172,+Main+Road,Malaiyalappatti,Arumbavur,+Veppanthattai,Perambalur,+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 bg-white border border-neutral-200 rounded-2xl p-5 hover:border-[#C9A227] hover:shadow-lg transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center group-hover:bg-[#C9A227] transition-all">
                      <IoLocationSharp className="text-2xl text-[#C9A227] group-hover:text-black" />
                    </div>

                    <div>
                      <p className="text-xs font-bold tracking-[0.2em] text-[#8B741A]">
                        ADDRESS
                      </p>

                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-neutral-700">
                        172, Main Road, Malaiyalappatti
                        <br />
                        Arumbavur, Veppanthattai
                        <br />
                        Perambalur,
                        <span className="text-[#9B7A12] font-semibold">
                          {" "}
                          Tamil Nadu – 621103
                        </span>
                      </p>
                    </div>
                  </a>
                </div>

                {/* Small Brand Statement */}
                <div className="mt-8 p-7 rounded-2xl bg-[#111111] text-white">
                  <p className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
                    Kaagidham Creatives
                  </p>

                  <p className="mt-3 text-lg font-semibold leading-relaxed">
                    Strategy.
                    <span className="text-[#D4AF37]"> Design.</span> Impact.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.05)]">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-[#111111] text-white py-8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <div>
                <p className="font-bold text-lg">
                  Kaagidham <span className="text-[#D4AF37]">Creatives</span>
                </p>

                <p className="text-xs text-neutral-500 mt-1">
                  Strategy • Design • Motion • Creative Direction
                </p>
              </div>

              <p className="text-xs text-neutral-500">
                © 2026 Kaagidham Creatives Private Limited
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
