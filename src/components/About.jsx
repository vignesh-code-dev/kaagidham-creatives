import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We learn about your brand, audience, and goals.",
  },
  {
    number: "02",
    title: "Define",
    text: "We set a clear message and creative direction.",
  },
  {
    number: "03",
    title: "Design",
    text: "We turn ideas into meaningful visual designs.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "We refine every detail before delivery.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAFAFA] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ROW 1: ABOUT INTRO + SUBTEXT (Balanced 2-Column on Desktop) */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Main Heading Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A227] sm:w-10" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B741A] sm:text-sm">
                About Us
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold leading-[1.12] tracking-tight text-[#171510] sm:text-5xl lg:text-6xl">
              Ideas on paper. <br />
              <span className="text-[#F5C60F]">Impact in reality.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Kaagidham Creatives is a Tamil Nadu-based creative studio helping
              brands communicate through thoughtful design and storytelling.
            </p>
          </motion.div>

          {/* Supporting Text & Quick Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between border-l-2 border-neutral-200/80 pl-5 text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-7 lg:col-span-5 lg:mt-12 lg:pl-8"
          >
            <div className="space-y-3">
              <p>We turn ideas into clear, purposeful visual experiences.</p>
              <p>
                From brand identity to campaigns and motion design, we focus on
                creativity that connects with the right audience.
              </p>
            </div>

            <Link
              to="services"
              smooth
              duration={600}
              offset={-70}
              className="group mt-6 inline-flex w-fit cursor-pointer items-center gap-2 font-semibold text-[#171510] transition-colors hover:text-[#C9A227]"
            >
              <span>Explore our services</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* ROW 2: PHILOSOPHY CALLOUT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl border border-neutral-200/70 bg-white p-6 sm:mt-18 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 lg:items-center">
            <div className="lg:col-span-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B741A] sm:text-sm">
                Our Philosophy
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-[#171510] sm:text-3xl lg:text-4xl">
                We don't just design.{" "}
                <span className="text-[#C9A227]">
                  We think before we create.
                </span>
              </h3>
            </div>
            <div className="lg:col-span-4 border-t border-neutral-100 pt-4 lg:border-t-0 lg:border-l lg:border-neutral-200 lg:pl-8 lg:pt-0">
              <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                We combine strategy, creativity, and precision to build design
                that solves problems and drives real brand equity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ROW 3: OUR 4D PROCESS */}
        <div className="mt-14 sm:mt-20">
          {/* Section Header with 4D Badge */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B741A] sm:text-sm">
                Our Process
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#171510] sm:text-3xl lg:text-4xl">
                A thoughtful approach to creative work.
              </h3>
              <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                Four simple stages. One purposeful creative journey.
              </p>
            </div>

            {/* Subtle Animated 4D Typography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="self-start sm:self-end"
            >
              <span className="inline-block select-none font-serif text-5xl font-black tracking-tighter text-[#F5C60F] sm:text-6xl lg:text-7xl">
                4<span className="text-[#171510]">D</span>
              </span>
            </motion.div>
          </div>

          {/* Process Cards (Responsive 1/2/4 grid) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C60F] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#8B741A]">
                      {item.number}
                    </span>
                    <span className="h-px w-8 bg-[#F5C60F]/60 transition-all duration-300 group-hover:w-12 group-hover:bg-[#F5C60F]" />
                  </div>

                  <h4 className="mt-5 text-lg font-bold tracking-tight text-[#171510] transition-colors group-hover:text-[#8B741A] sm:text-xl">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    {item.text}
                  </p>
                </div>

                <div className="mt-4 h-0.5 w-0 bg-[#F5C60F] transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>

          {/* Process Flow Pill / Tracker */}
          <div className="mt-6 rounded-xl bg-[#111111] px-4 py-3.5 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs font-semibold uppercase tracking-wider text-white sm:gap-x-4 sm:text-sm">
              <span>Discover</span>
              <span className="text-[#F5C60F]">→</span>
              <span>Define</span>
              <span className="text-[#F5C60F]">→</span>
              <span>Design</span>
              <span className="text-[#F5C60F]">→</span>
              <span>Deliver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
