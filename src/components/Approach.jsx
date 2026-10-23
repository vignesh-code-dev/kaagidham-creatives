import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
      <section id="work" className="pb-[88px] bg-[#FBF8F1] text-[#0B0B0B]">
        <div className="max-w-[1120px] mx-auto px-[22px]">
          <div className="grid gap-[18px] mb-[46px]">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            <div className="aspect-[4/5] border-2 border-[#0B0B0B] rounded-[20px] p-[20px] flex flex-col justify-end font-extrabold text-[19px] leading-[1.2] bg-[#FFC20E] text-[#0B0B0B]">
              Brand identity
              <small className="block font-medium text-[12px] mt-[8px] opacity-[.7]">
                Add case study
              </small>
            </div>
            <div className="aspect-[4/5] border-2 border-[#0B0B0B] rounded-[20px] p-[20px] flex flex-col justify-end font-extrabold text-[19px] leading-[1.2] bg-[#0B0B0B] text-white">
              Campaigns &amp; posters
              <small className="block font-medium text-[12px] mt-[8px] opacity-[.7]">
                Add case study
              </small>
            </div>
            <div className="aspect-[4/5] border-2 border-[#0B0B0B] rounded-[20px] p-[20px] flex flex-col justify-end font-extrabold text-[19px] leading-[1.2] bg-white text-[#0B0B0B]">
              Motion &amp; social
              <small className="block font-medium text-[12px] mt-[8px] opacity-[.7]">
                Add case study
              </small>
            </div>
            <div className="aspect-[4/5] border-2 border-[#0B0B0B] rounded-[20px] p-[20px] flex flex-col justify-end font-extrabold text-[19px] leading-[1.2] bg-[#F59E0B] text-[#0B0B0B]">
              Print &amp; publications
              <small className="block font-medium text-[12px] mt-[8px] opacity-[.7]">
                Add case study
              </small>
            </div>
          </div>
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
              <span className="block text-[.6em] mt-[10px]">₹7,500</span>
            </h2>
            <p className="max-w-[560px] mt-[12px] m-0 text-[#0B0B0B] text-[16px] leading-[1.65]">
              A focused session to define your idea, audience and creative
              direction before any design begins.
            </p>
          </div>

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-84}
            className="inline-flex items-center gap-2 rounded-full px-[26px] py-[14px] font-semibold text-[15px] bg-[#0B0B0B] text-white border-2 border-[#0B0B0B] shadow-[4px_4px_0_#0B0B0B] hover:bg-transparent hover:text-[#0B0B0B] transition-all cursor-pointer whitespace-nowrap"
          >
            Book a Clarity Session →
          </Link>
        </div>
      </div>
    </div>
  );
}
