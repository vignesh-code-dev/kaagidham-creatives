import { motion } from "framer-motion";
import {
  CheckCircle2,
  Palette,
  Layers3,
  Sparkles,
  Target,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-scroll";

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
      "We transform information and ideas into clear, engaging visual communication designed for digital and physical environments.",
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

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A227] sm:w-10" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B741A] sm:text-sm">
              What We Do
            </span>
          </div>

          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#171510] sm:text-5xl lg:text-6xl">
            Our <span className="text-[#C9A227]">Services</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-7">
            We offer creative services designed to help businesses build
            stronger identities, communicate more clearly, and create meaningful
            connections with their audience.
          </p>

          <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-7">
            From the first strategic thought to the final creative asset, our
            work combines business understanding with thoughtful design.
          </p>
        </motion.div>

        {/* SERVICE CARDS GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 lg:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-[0_15px_40px_rgba(201,162,39,0.08)]"
              >
                {/* Background Subtle Gradient Accent */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#FFD21A]/10 blur-xl transition-all duration-300 group-hover:bg-[#FFD21A]/20" />

                <div className="relative z-10">
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold tracking-tight text-neutral-300 transition-colors duration-300 group-hover:text-[#C9A227]/70 sm:text-4xl">
                      {service.number}
                    </span>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAFAFA] border border-neutral-200 transition-all duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-black">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[#171510] group-hover:text-black transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-[#171510] transition-colors group-hover:text-[#8B741A] sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {service.description}
                  </p>

                  {/* Bullet Checklist */}
                  <div className="mt-6 space-y-2.5 border-t border-neutral-100 pt-5">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-[#C9A227]"
                        />
                        <span className="text-xs sm:text-sm leading-relaxed text-neutral-700">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Expansion Accent Bar */}
                <div className="mt-7 h-0.5 w-8 rounded-full bg-neutral-200 transition-all duration-300 group-hover:w-full group-hover:bg-[#C9A227]" />
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl sm:rounded-3xl border border-neutral-200/80 bg-[#FAFAFA] p-6 sm:mt-16 sm:flex-row sm:items-center sm:p-8 lg:p-10"
        >
          <div className="max-w-xl">
            <h3 className="text-xl font-bold tracking-tight text-[#171510] sm:text-2xl">
              Have a creative project in mind?
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Let's turn your ideas into meaningful, purpose-driven creative
              work.
            </p>
          </div>

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-70}
            className="group inline-flex min-h-[48px] w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C9A227] hover:text-black hover:shadow-lg hover:shadow-[#C9A227]/20 active:scale-[0.98] sm:w-auto"
          >
            <span>Start a Project</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
