import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Approach() {
  return (
    <div className="font-['Montserrat',sans-serif]">
      {/* 1. PAPER THINKING / APPROACH SECTION (Dark Theme) */}
      <section
        id="approach"
        className="bg-[#0B0B0B] text-white py-[88px] relative overflow-hidden"
      >
        <div className="max-w-[1120px] mx-auto px-[22px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-[18px] mb-[46px]"
          >
            <div className="flex items-center gap-[10px] text-[12px] font-semibold tracking-[.2em] uppercase mb-0">
              <span className="w-[26px] h-[4px] rounded-[4px] bg-[#FFC20E]" />
              Paper Thinking · Our approach
            </div>

            <h2 className="font-extrabold text-[clamp(30px,5vw,50px)] leading-[1.08] tracking-[-.02em] m-0">
              Creativity becomes powerful{" "}
              <span className="bg-[linear-gradient(transparent_58%,#FFC20E_58%_92%,transparent_92%)] px-[0.08em] text-white">
                when it has direction.
              </span>
            </h2>

            <p className="text-[#cfcabc] text-[clamp(16px,2vw,19px)] max-w-[620px] m-0 leading-[1.65]">
              We don’t create visuals simply because they look good. We first
              understand what needs to be communicated, why it matters, and who
              needs to understand it.
            </p>
          </motion.div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="border-t-[4px] border-[#FFC20E] pt-[22px]"
            >
              <b className="block text-[56px] font-extrabold leading-[1] text-[#FFC20E] mb-[14px]">
                01
              </b>
              <h3 className="font-extrabold text-[20px] tracking-[-.01em] m-0">
                Discover
              </h3>
              <p className="text-[#cfcabc] mt-[10px] text-[15px] m-0">
                We learn about your brand, audience and goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-[4px] border-[#FFC20E] pt-[22px]"
            >
              <b className="block text-[56px] font-extrabold leading-[1] text-[#FFC20E] mb-[14px]">
                02
              </b>
              <h3 className="font-extrabold text-[20px] tracking-[-.01em] m-0">
                Define
              </h3>
              <p className="text-[#cfcabc] mt-[10px] text-[15px] m-0">
                We set a clear message and creative direction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-[4px] border-[#FFC20E] pt-[22px]"
            >
              <b className="block text-[56px] font-extrabold leading-[1] text-[#FFC20E] mb-[14px]">
                03
              </b>
              <h3 className="font-extrabold text-[20px] tracking-[-.01em] m-0">
                Design
              </h3>
              <p className="text-[#cfcabc] mt-[10px] text-[15px] m-0">
                We turn ideas into meaningful visual designs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-[4px] border-[#FFC20E] pt-[22px]"
            >
              <b className="block text-[56px] font-extrabold leading-[1] text-[#FFC20E] mb-[14px]">
                04
              </b>
              <h3 className="font-extrabold text-[20px] tracking-[-.01em] m-0">
                Deliver
              </h3>
              <p className="text-[#cfcabc] mt-[10px] text-[15px] m-0">
                We refine every detail before delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHY KAAGIDHAM SECTION */}
      <section className="py-[88px] bg-[#FBF8F1] text-[#0B0B0B]">
        <div className="max-w-[1120px] mx-auto px-[22px]">
          <div className="grid gap-[18px] mb-[46px]">
            <div className="flex items-center gap-[10px] text-[12px] font-semibold tracking-[.2em] uppercase mb-0">
              <span className="w-[26px] h-[4px] rounded-[4px] bg-[#FFC20E]" />
              Why Kaagidham
            </div>

            <h2 className="font-extrabold text-[clamp(30px,5vw,50px)] leading-[1.08] tracking-[-.02em] m-0">
              Creative work{" "}
              <span className="bg-[linear-gradient(transparent_58%,#FFC20E_58%_92%,transparent_92%)] px-[0.08em] text-inherit">
                with a reason.
              </span>
            </h2>

            <p className="text-[#55514a] text-[clamp(16px,2vw,19px)] max-w-[620px] m-0 leading-[1.65]">
              Choosing a creative partner is about finding someone who
              understands your business, your audience, and the role creativity
              needs to play in your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <div className="bg-white border-2 border-[#0B0B0B] rounded-[16px] p-[22px_24px] font-semibold flex gap-[14px] items-center">
              <span className="flex-none w-[28px] h-[28px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold grid place-items-center">
                ✓
              </span>
              Strategy before visual execution
            </div>
            <div className="bg-white border-2 border-[#0B0B0B] rounded-[16px] p-[22px_24px] font-semibold flex gap-[14px] items-center">
              <span className="flex-none w-[28px] h-[28px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold grid place-items-center">
                ✓
              </span>
              Purpose-driven creative thinking
            </div>
            <div className="bg-white border-2 border-[#0B0B0B] rounded-[16px] p-[22px_24px] font-semibold flex gap-[14px] items-center">
              <span className="flex-none w-[28px] h-[28px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold grid place-items-center">
                ✓
              </span>
              Attention to detail at every stage
            </div>
            <div className="bg-white border-2 border-[#0B0B0B] rounded-[16px] p-[22px_24px] font-semibold flex gap-[14px] items-center">
              <span className="flex-none w-[28px] h-[28px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold grid place-items-center">
                ✓
              </span>
              Creative solutions built around your goals
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK SECTION */}
      <section id="work" className="py-[88px] bg-[#FBF8F1] text-[#0B0B0B]">
        <div className="max-w-[1120px] mx-auto px-[22px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[46px] gap-6">
            <div className="grid gap-[18px]">
              <div className="flex items-center gap-[10px] text-[12px] font-semibold tracking-[.2em] uppercase mb-0">
                <span className="w-[26px] h-[4px] rounded-[4px] bg-[#FFC20E]" />
                Selected work
              </div>

              <h2 className="font-extrabold text-[clamp(30px,5vw,50px)] leading-[1.08] tracking-[-.02em] m-0">
                Ideas,{" "}
                <span className="bg-[linear-gradient(transparent_58%,#FFC20E_58%_92%,transparent_92%)] px-[0.08em] text-inherit">
                  in reality.
                </span>
              </h2>
            </div>
          </div>

          {/* Pizza Story Card - Navigates to New Route using RouterLink */}
          <RouterLink
            to="/case-study/pizza-story"
            className="group relative aspect-[16/9] border-2 border-[#0B0B0B] rounded-[24px] overflow-hidden bg-[#0B0B0B] text-white p-[28px] flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:-translate-y-1 shadow-[4px_4px_0_#0B0B0B] block"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-500 z-0"
              style={{
                backgroundImage: `url('/images/Pizza Story Brand Identity Showcase.png')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent z-0" />

            <div className="relative z-10 flex justify-between items-center text-xs font-bold uppercase tracking-wider">
              <span className="bg-[#FFC20E] text-[#0B0B0B] px-3 py-1 rounded-full border border-[#0B0B0B]">
                Brand Identity & OOH
              </span>
              <span className="w-9 h-9 rounded-full bg-white text-[#0B0B0B] grid place-items-center font-bold transition-transform group-hover:rotate-45">
                ↗
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="font-extrabold text-[28px] leading-[1.1] mb-2 text-white">
                Pizza Story
              </h3>
              <p className="font-medium text-[15px] text-[#cfcabc]">
                Comprehensive Visual Identity, Packaging & Chennai Street
                Campaign
              </p>
            </div>
          </RouterLink>
        </div>
      </section>

      {/* 4. CLARITY SESSION OFFER BANNER */}
      <div className="bg-[#FFC20E] text-[#0B0B0B] border-t-2 border-b-2 border-[#0B0B0B] py-[64px]">
        <div className="max-w-[1120px] mx-auto px-[22px] grid gap-[22px] items-center md:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-[10px] text-[12px] font-semibold tracking-[.2em] uppercase mb-[10px]">
              <span className="w-[26px] h-[4px] rounded-[4px] bg-[#0B0B0B]" />
              Start here
            </div>
            <h2 className="font-extrabold text-[clamp(30px,5vw,50px)] leading-[1.08] tracking-[-.02em] m-0">
              Clarity Session
              <span className="block text-[.6em] md:inline md:ml-3">
                ₹7,500
              </span>
            </h2>
            <p className="text-[#0B0B0B] text-[16px] max-w-[500px] mt-2">
              A focused session to define your idea, audience and creative
              direction before any design begins.
            </p>
          </div>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="bg-[#0B0B0B] text-white font-bold py-3.5 px-7 rounded-full border-2 border-[#0B0B0B] hover:bg-transparent hover:text-[#0B0B0B] transition-all cursor-pointer text-center"
          >
            Book a Clarity Session →
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
