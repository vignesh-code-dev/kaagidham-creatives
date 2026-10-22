import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const services = [
    "Brand Identity",
    "Visual Communication",
    "Motion & Storytelling",
    "Creative Direction",
  ];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#FAFAFA] text-[#171510] selection:bg-[#F5C60F]/30"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#F5C60F]/10 blur-3xl" />

      {/* Main Hero Container - pt-28 added for mobile top spacing */}
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-8 lg:py-28">
        {/* LEFT CONTENT */}
        <div className="relative z-10 text-center lg:col-span-7 lg:text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E2D8C6] bg-white/70 px-4 py-1.5 backdrop-blur-sm shadow-xs"
          >
            <span className="h-2 w-2 rounded-full bg-[#F5C60F]" />
            <p className="text-xs font-semibold uppercase tracking-wider text-[#62594B] sm:text-sm">
              Creative Studio & Strategic Design Consultancy
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-[#171510] sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem]"
          >
            Think clearly. <br className="hidden sm:inline" />
            Create with <br className="hidden sm:inline" />
            <span className="relative inline-block italic font-serif">
              purpose.
              <span className="absolute -bottom-1 left-0 -z-10 h-2 w-full -rotate-1 rounded-sm bg-[#F5C60F]/40" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#655D50] sm:text-lg lg:mx-0"
          >
            We help businesses and organisations turn ideas into meaningful
            creative work through brand identity, visual communication, motion,
            and creative direction.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
          >
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-70}
              className="group inline-flex w-full min-h-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F5C60F] px-8 py-3.5 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:bg-[#E5B800] hover:shadow-lg hover:shadow-[#F5C60F]/20 active:scale-[0.98] sm:w-auto"
            >
              Start a project
              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="services"
              smooth
              duration={600}
              offset={-70}
              className="inline-flex w-full min-h-[50px] cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white/50 px-8 py-3.5 text-sm sm:text-base font-semibold text-[#171510] transition-all duration-300 hover:border-black hover:bg-black hover:text-white active:scale-[0.98] sm:w-auto"
            >
              Explore Paper Thinking
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE — PAPER DESIGN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex h-[340px] w-full max-w-[380px] items-center justify-center sm:h-[420px] sm:max-w-[460px] lg:col-span-5 lg:h-[480px]"
        >
          {/* Back Paper 1 */}
          <div className="absolute left-2 top-8 h-[65%] w-[75%] -rotate-6 rounded-lg border border-[#E1D6C0] bg-[#FFFEFA] p-5 shadow-[0_10px_30px_rgba(50,40,20,0.06)] sm:left-6 sm:top-10">
            <div className="flex h-full flex-col justify-between py-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-px w-full bg-[#E6DCC9]" />
              ))}
            </div>
          </div>

          {/* Back Paper 2 */}
          <div className="absolute right-2 top-4 h-[55%] w-[65%] rotate-6 rounded-lg border border-[#E1D6C0] bg-[#FFFEFA] p-4 shadow-[0_10px_25px_rgba(50,40,20,0.05)] sm:right-6 sm:top-6">
            <div className="flex h-full flex-col justify-between py-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-px w-full bg-[#E6DCC9]" />
              ))}
            </div>
          </div>

          {/* Main Sticky Note */}
          <div className="relative z-10 flex h-[62%] w-[78%] rotate-2 flex-col justify-center rounded-xl bg-[#FFD21A] p-6 shadow-[0_20px_40px_rgba(30,25,10,0.18)] sm:p-8">
            <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 rounded-[2px] bg-white/40 backdrop-blur-xs" />

            <p className="font-serif italic text-2xl font-semibold leading-snug text-black sm:text-3xl lg:text-4xl">
              Ideas on paper. <br />
              Impact in <br />
              reality.
            </p>
          </div>

          {/* Hand-drawn Accent Bar */}
          <div className="absolute -bottom-2 right-4 z-20 h-2.5 w-36 -rotate-12 rounded-full bg-black shadow-xs sm:w-44" />

          {/* Decorative Dot */}
          <div className="absolute bottom-4 left-6 h-3 w-3 rounded-full bg-[#FFD21A]" />
        </motion.div>
      </div>

      {/* BOTTOM SERVICES STRIP (2x2 Grid on Mobile, Row on Desktop) */}
      <div className="border-t border-[#E2D8C6] bg-white/60 backdrop-blur-xs">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-4 lg:justify-between">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3A342B] sm:text-sm"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#F5C60F]" />
                <span className="truncate">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
