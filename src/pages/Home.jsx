import Navbar from "../components/Navbar";
import { Link } from "react-scroll";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Palette,
  Layers3,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const services = [
  {
    number: "01",
    title: "Brand Identity Systems",
    icon: Palette,
    description:
      "We create distinctive brand identity systems that help businesses establish a strong, recognizable, and consistent visual presence.",
    details: [
      "Logo design & identity direction",
      "Typography & colour systems",
      "Brand guidelines",
      "Visual language development",
    ],
  },
  {
    number: "02",
    title: "Visual Communication Design",
    icon: Layers3,
    description:
      "We transform information and ideas into clear, engaging visual communication designed for both digital and physical environments.",
    details: [
      "Posters & marketing creatives",
      "Campaign visuals",
      "Presentation systems",
      "Print & digital communication",
    ],
  },
  {
    number: "03",
    title: "Motion & Visual Storytelling",
    icon: Sparkles,
    description:
      "We bring ideas to life through purposeful motion, visual storytelling, and engaging creative experiences that hold attention.",
    details: [
      "Motion graphics",
      "Social media animations",
      "Visual storytelling",
      "Concept-driven creative content",
    ],
  },
  {
    number: "04",
    title: "Strategic Creative Direction",
    icon: Target,
    description:
      "We help businesses define how they should look, sound, and communicate before creative execution begins.",
    details: [
      "Brand positioning",
      "Creative direction",
      "Message architecture",
      "Audience alignment",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We begin by understanding your business, vision, audience, challenges, and the opportunity behind the project.",
  },
  {
    number: "02",
    title: "Define",
    text: "We clarify your positioning, communication goals, creative direction, and the visual language required to move forward.",
  },
  {
    number: "03",
    title: "Design",
    text: "Ideas are translated into thoughtful visual systems, creative concepts, and practical design solutions.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Every final asset is refined with attention to detail, consistency, clarity, and real-world application.",
  },
];

const whyUs = [
  "Strategy before visual execution",
  "Purpose-driven creative thinking",
  "Clear and consistent communication",
  "Premium and minimal design approach",
  "Attention to detail at every stage",
  "Creative solutions built around your goals",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-[#111111] overflow-x-hidden">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden bg-white"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#D4AF37]/10" />

            <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-black/[0.035]" />

            <div className="absolute top-28 right-0 w-[35%] h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <div className="absolute bottom-28 left-0 w-[28%] h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

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
                Into{" "}
                <span className="relative inline-block">
                  <span className="text-[#F7C214]">Impact.</span>

                  <span className="absolute left-0 -bottom-3 w-20 sm:w-28 h-1 bg-[#C9A227]" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-neutral-600"
              >
                Kaagidham Creatives is a strategy-led creative studio helping
                businesses turn ideas into meaningful brands, powerful visual
                communication, and memorable creative experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-neutral-500"
              >
                From brand identity and communication design to motion and
                creative direction, we bring clarity, structure, and intention
                to every creative decision.
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
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <Link
                  to="services"
                  smooth
                  duration={600}
                  offset={-70}
                  className="cursor-pointer inline-flex items-center justify-center border border-neutral-300 text-[#111111] px-7 py-3.5 rounded-full font-semibold hover:border-[#C9A227] hover:bg-[#C9A227]/10 transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </div>

            {/* Bottom Statement */}
            <div className="mt-24 pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-neutral-500">
              <span>Creative Consultancy</span>
              <span className="sm:text-center">Based in Tamil Nadu</span>
              <span className="sm:text-right">Built with Intention</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}
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
                <span className="text-[#F7C214]">Impact in reality.</span>
              </h2>

              <p className="mt-7 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                Kaagidham Creatives is a strategy-led creative studio based in
                Tamil Nadu, working at the intersection of design, storytelling,
                strategy, and clarity.
              </p>

              <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                We believe good creative work is not simply about making
                something look beautiful. It is about understanding the problem,
                finding the right idea, and turning that idea into communication
                that people can understand, remember, and connect with.
              </p>
            </div>

            {/* About Grid */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
              <div className="space-y-6">
                <p className="text-neutral-600 leading-relaxed">
                  We are a team of thinkers, designers, and visual architects
                  who transform ideas into structured and purposeful creative
                  systems.
                </p>

                <p className="text-neutral-600 leading-relaxed">
                  Every project begins with questions. What does the brand stand
                  for? Who is it speaking to? What should people feel,
                  understand, and remember?
                </p>

                <p className="text-neutral-600 leading-relaxed">
                  Once the direction becomes clear, we translate strategy into
                  visual identities, communication systems, campaigns, motion,
                  and creative experiences.
                </p>

                <p className="text-neutral-600 leading-relaxed">
                  Our approach is intentionally thoughtful — balancing
                  creativity with clarity, aesthetics with purpose, and
                  immediate impact with long-term brand value.
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
                  <span className="text-[#F7C214]">
                    Deliberate creative impact.
                  </span>
                </h3>

                <p className="mt-6 text-neutral-600 leading-relaxed">
                  We believe creative work should have a reason behind it. Every
                  colour, typeface, layout, image, animation, and message should
                  contribute to a larger idea.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Question", "Refine", "Design", "Align"].map((item) => (
                    <div
                      key={item}
                      className="border border-neutral-200 rounded-xl p-4 hover:border-[#C9A227] hover:bg-[#C9A227]/5 transition-all"
                    >
                      <p className="font-semibold">We {item.toLowerCase()}.</p>
                    </div>
                  ))}
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
                <span className="text-[#F7C214]">
                  We think before we create.
                </span>
              </h3>

              <p className="mt-6 text-neutral-600 leading-relaxed max-w-3xl">
                Kaagidham Creatives is not built around templates or trends. We
                are built around strategic clarity, creative intelligence,
                minimal premium execution, and long-term thinking.
              </p>

              <p className="mt-4 text-neutral-600 leading-relaxed max-w-3xl">
                Whether you are building a new brand, refreshing an existing
                identity, launching a campaign, or improving the way your
                business communicates, we focus on creating work that has
                purpose beyond appearance.
              </p>
            </div>

            {/* Process */}
            <div className="mt-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] text-[#8B741A] uppercase">
                    Our Process
                  </p>

                  <h3 className="mt-3 text-3xl sm:text-4xl font-bold">
                    How we approach every project
                  </h3>

                  <p className="mt-4 text-neutral-600 max-w-2xl leading-relaxed">
                    A clear process helps us turn an initial idea into a focused
                    and effective creative outcome.
                  </p>
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

        {/* =====================================================
            SERVICES
        ===================================================== */}
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
                Our <span className="text-[#F7C214]">Services</span>
              </h2>

              <p className="mt-6 text-neutral-600 leading-relaxed">
                We offer creative services designed to help businesses build
                stronger identities, communicate more clearly, and create
                meaningful connections with their audience.
              </p>

              <p className="mt-4 text-neutral-600 leading-relaxed">
                From the first strategic thought to the final creative asset,
                our work combines business understanding with thoughtful design.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.number}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 sm:p-9 shadow-[0_10px_35px_rgba(0,0,0,0.04)]"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[#C9A227]/5 group-hover:bg-[#C9A227]/10 transition-all" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-5">
                        <span className="text-4xl font-bold text-neutral-200 group-hover:text-[#C9A227]/30 transition-colors">
                          {service.number}
                        </span>

                        <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-[#C9A227] group-hover:border-[#C9A227] transition-all">
                          <Icon size={21} />
                        </div>
                      </div>

                      <h3 className="mt-8 text-xl sm:text-2xl font-bold">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {service.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-3">
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 flex-shrink-0 text-[#C9A227]"
                            />

                            <span className="text-sm text-neutral-600">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 w-12 h-1 bg-[#C9A227] group-hover:w-20 transition-all duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY US
        ===================================================== */}
        <section className="bg-[#FAFAFA] py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-px bg-[#C9A227]" />

                  <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#8B741A]">
                    Why Kaagidham
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Creative work
                  <br />
                  <span className="text-[#F7C214]">with a reason.</span>
                </h2>

                <p className="mt-6 text-neutral-600 leading-relaxed max-w-xl">
                  Choosing a creative partner is about more than choosing a
                  designer. It is about finding someone who understands your
                  business, your audience, and the role creativity needs to play
                  in achieving your goals.
                </p>

                <p className="mt-4 text-neutral-600 leading-relaxed max-w-xl">
                  Our approach combines strategic thinking, visual craft, and
                  careful execution to create work that is both distinctive and
                  purposeful.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyUs.map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-[#C9A227] hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                      <CheckCircle2 size={20} className="text-[#C9A227]" />
                    </div>

                    <p className="mt-5 font-semibold leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CREATIVE APPROACH
        ===================================================== */}
        <section className="bg-white py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center items-center gap-3 mb-5">
                <span className="w-10 h-px bg-[#C9A227]" />

                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#8B741A]">
                  Our Approach
                </span>

                <span className="w-10 h-px bg-[#C9A227]" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Creativity becomes powerful
                <br />
                <span className="text-[#F7C214]">when it has direction.</span>
              </h2>

              <p className="mt-6 text-neutral-600 leading-relaxed">
                We don't believe in creating visuals simply because they look
                good. We first understand what needs to be communicated, why it
                matters, and who needs to understand it.
              </p>

              <p className="mt-4 text-neutral-600 leading-relaxed">
                That thinking becomes the foundation for every design decision
                we make.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="border border-neutral-200 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                  <Lightbulb className="text-[#C9A227]" size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold">Think Clearly</h3>

                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  We start by understanding the idea, the audience, the
                  objective, and the challenge behind every project.
                </p>
              </div>

              <div className="border border-neutral-200 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                  <Target className="text-[#C9A227]" size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold">Create With Purpose</h3>

                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  We translate strategic thinking into visual solutions that
                  have a clear purpose and meaningful direction.
                </p>
              </div>

              <div className="border border-neutral-200 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                  <Sparkles className="text-[#C9A227]" size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold">Refine Every Detail</h3>

                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  We believe quality lives in the details, so every element is
                  reviewed, refined, and aligned before delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-[#111111] text-white py-20 sm:py-24">
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

            <p className="mt-6 max-w-2xl mx-auto text-neutral-400 leading-relaxed">
              Whether you are starting something new or looking to strengthen
              what already exists, let's explore how creative thinking can help
              move your business forward.
            </p>

            <Link
              to="contact"
              smooth
              duration={600}
              offset={-70}
              className="inline-flex items-center gap-3 mt-8 bg-[#D4AF37] text-black px-8 py-3.5 rounded-full font-bold cursor-pointer hover:bg-white transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}
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
                <span className="text-[#F7C214]">Conversation</span>
              </h2>

              <p className="mt-5 text-neutral-600 max-w-xl mx-auto leading-relaxed">
                Have a project, idea, or brand challenge in mind? Tell us a
                little about it. We'd love to understand what you're working
                towards.
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
                    <span className="text-[#D4AF37]"> Design.</span> Motion.
                    Impact.
                  </p>

                  <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                    Thoughtful creative direction for brands that want to
                    communicate with clarity and purpose.
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

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <footer className="bg-[#111111] text-white py-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Brand */}
              <div>
                <p className="font-bold text-xl">
                  Kaagidham <span className="text-[#D4AF37]">Creatives</span>
                </p>

                <p className="text-xs text-neutral-500 mt-2">
                  Strategy • Design • Motion • Creative Direction
                </p>
              </div>

              {/* Tagline + Social Media */}
              <div className="text-center">
                <p className="text-sm text-neutral-500 mb-4">
                  Creative thinking with purpose, clarity, and intention.
                </p>

                <div className="flex justify-center items-center gap-3">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  >
                    <FaInstagram size={18} />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  >
                    <FaFacebookF size={16} />
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="md:text-right">
                <p className="text-xs text-neutral-500">
                  © 2026 Kaagidham Creatives Private Limited
                </p>

                <p className="text-xs text-neutral-600 mt-1">
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
