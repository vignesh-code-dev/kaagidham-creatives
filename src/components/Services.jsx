import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="py-[88px] relative bg-[#FBF8F1] font-['Montserrat',sans-serif] text-[#0B0B0B]"
    >
      <div className="max-w-[1120px] mx-auto px-[22px]">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-[18px] mb-[46px]"
        >
          <div className="flex items-center gap-[10px] text-[12px] font-semibold tracking-[.2em] uppercase mb-0">
            <span className="w-[26px] h-[4px] rounded-[4px] bg-[#FFC20E]" />
            What we do
          </div>

          <h2 className="font-extrabold text-[clamp(30px,5vw,50px)] leading-[1.08] tracking-[-.02em] m-0">
            Four services.{" "}
            <span className="bg-[linear-gradient(transparent_58%,#FFC20E_58%_92%,transparent_92%)] px-[0.08em] text-inherit">
              One clear direction.
            </span>
          </h2>

          <p className="text-[#55514a] text-[clamp(16px,2vw,19px)] max-w-[620px] m-0 leading-[1.65]">
            From the first strategic thought to the final creative asset, our
            work combines business understanding with thoughtful design.
          </p>
        </motion.div>

        {/* SERVICES GRID (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
          {/* Card 01 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-white border-2 border-[#0B0B0B] rounded-[20px] p-[30px] relative flex flex-col justify-between"
          >
            <div>
              <div className="font-extrabold text-[44px] leading-[1] text-[#FFC20E] [-webkit-text-stroke:2px_#0B0B0B] mb-[22px]">
                01
              </div>
              <h3 className="font-extrabold text-[20px] tracking-[-.01em] m-0">
                Brand Identity Systems
              </h3>
              <p className="text-[#55514a] my-[12px] leading-[1.65]">
                Distinctive identities that give businesses a strong,
                recognisable and consistent visual presence.
              </p>
            </div>
            <ul className="list-none m-0 p-[18px_0_0] border-t border-[#e7e0cf] grid gap-[10px] text-[15px]">
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Logo design &amp; identity direction
              </li>
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Typography &amp; colour systems
              </li>
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Brand guidelines
              </li>
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Visual language development
              </li>
            </ul>
          </motion.div>

          {/* Card 02 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border-2 border-[#0B0B0B] rounded-[20px] p-[30px] relative flex flex-col justify-between"
          >
            <div>
              <div className="font-extrabold text-[44px] leading-[1] text-[#FFC20E] [-webkit-text-stroke:2px_#0B0B0B] mb-[22px]">
                02
              </div>
              <h3 className="font-extrabold text-[20px] tracking-[-.01em] m-0">
                Visual Communication Design
              </h3>
              <p className="text-[#55514a] my-[12px] leading-[1.65]">
                Information and ideas turned into clear, engaging communication
                for digital and physical spaces.
              </p>
            </div>
            <ul className="list-none m-0 p-[18px_0_0] border-t border-[#e7e0cf] grid gap-[10px] text-[15px]">
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Posters &amp; marketing creatives
              </li>
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Print &amp; digital communication
              </li>
            </ul>
          </motion.div>

          {/* Card 03 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border-2 border-[#0B0B0B] rounded-[20px] p-[30px] relative flex flex-col justify-between"
          >
            <div>
              <div className="font-extrabold text-[44px] leading-[1] text-[#FFC20E] [-webkit-text-stroke:2px_#0B0B0B] mb-[22px]">
                03
              </div>
              <h3 className="font-extrabold text-[20px] tracking-[-.01em] m-0">
                Motion &amp; Visual Storytelling
              </h3>
              <p className="text-[#55514a] my-[12px] leading-[1.65]">
                Ideas brought to life through purposeful motion and stories that
                hold attention.
              </p>
            </div>
            <ul className="list-none m-0 p-[18px_0_0] border-t border-[#e7e0cf] grid gap-[10px] text-[15px]">
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Motion graphics
              </li>
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Social media animations
              </li>
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Visual storytelling
              </li>
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Concept-driven creative content
              </li>
            </ul>
          </motion.div>

          {/* Card 04 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border-2 border-[#0B0B0B] rounded-[20px] p-[30px] relative flex flex-col justify-between"
          >
            <div>
              <div className="font-extrabold text-[44px] leading-[1] text-[#FFC20E] [-webkit-text-stroke:2px_#0B0B0B] mb-[22px]">
                04
              </div>
              <h3 className="font-extrabold text-[20px] tracking-[-.01em] m-0">
                Strategic Creative Direction
              </h3>
              <p className="text-[#55514a] my-[12px] leading-[1.65]">
                We define how a business should look, sound and communicate
                before execution begins.
              </p>
            </div>
            <ul className="list-none m-0 p-[18px_0_0] border-t border-[#e7e0cf] grid gap-[10px] text-[15px]">
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Brand positioning
              </li>
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Creative direction
              </li>
              <li className="flex gap-[12px] items-start">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFC20E] text-[#0B0B0B] font-extrabold text-[12px] grid place-items-center mt-[2px]">
                  ✓
                </span>
                Message architecture
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
