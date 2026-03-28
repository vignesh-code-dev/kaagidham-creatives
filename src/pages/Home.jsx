import Navbar from "../components/Navbar";
import about from "../assets/about-bg.webp";
import service from "../assets/kc-bg.webp";
import home from "../assets/kcHome.jpg";
import image from "../assets/kc-home-image.png";
import black from "../assets/pure-black.webp";
import { Link } from "react-scroll";

import { MdDesignServices } from "react-icons/md";
import { FaBullhorn, FaFilm, FaBullseye } from "react-icons/fa";

import conBg from "../assets/kc-bg.webp";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import "@fontsource/fira-code/400.css";
import ContactForm from "../components/ContactForm";

import { motion } from "framer-motion";

import "aos/dist/aos.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="relative text-white min-h-screen text-lg overflow-x-hidden">
        {/* Overlay */}
        <div className="absolute inset-0"></div>
        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* HERO SECTION */}
          <section
            id="home"
            className="relative w-full min-h-screen flex items-center border-b border-neutral-500 justify-center overflow-hidden"
          >
            {/* Background only animate */}
            <div
              className="absolute inset-0 bg-cover bg-center "
              style={{ backgroundImage: `url(${black})` }}
            ></div>

            <img
              src={image}
              alt="Home"
              className=" animate-[zoom_10s_ease-in-out_infinite] absolute inset-0 object-cover w-full h-full opacity-40 md:opacity-40 lg:opacity-50"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}  
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=" tittle text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white "
              >
                We Turn Ideas Into{" "}
                <span className="tittle bg-gradient-to-b from-[#ffffff] via-[#fcd706] to-[#786203] bg-clip-text text-transparent">
                  Impact.
                </span>
              </motion.h1>

              {/* Subtext */}
              <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                Strategy-led creative studio shaping ideas into powerful visual
                systems.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                {/* Primary Button */}
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  className="bg-[var(--color-gold)] text-black px-8 py-3 rounded-full font-semibold 
shadow-[0_0_5px_rgba(255,215,0,0.4)] 
hover:scale-105 transition-all duration-500"
                >
                  Start a Conversation
                </Link>

                {/* Secondary Button */}
                <Link
                  to="services"
                  smooth
                  duration={600}
                  offset={-80}
                  className="border border-[var(--color-gold)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300 cursor-pointer"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce text-xl">
              ↓
            </div>
          </section>

          {/* ABOUT PREVIEW */}
          <section
            id="about"
            className="relative bg-cover bg-center bg-no-repeat border-b border-neutral-500 text-white py-6 w-full text-center "
            style={{ backgroundImage: `url(${home})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
              {/* Heading */}
              <div className="mb-16 space-y-2">
                <h1 className="text-3xl md:text-4xl font-semibold mb-6">
                  About <span className="text-[var(--color-gold)]">Us</span>
                </h1>

                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Kaagidham Creatives is a strategy-led creative studio based in
                  Tamil Nadu, working at the intersection of design,
                  storytelling, and clarity. <br /> We are a team of thinkers,
                  designers, and visual architects and transform ideas into
                  structured, powerful creative systems.
                </p>
                <p className="text-lg md:text-2xl font-semibold mt-4">
                  Not noise. Not decoration. But deliberate creative impact.
                </p>
              </div>

              {/* Ideas Section */}
              <div className="flex flex-col gap-6 mb-20">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold bg-[var(--color-gold)] mb-6 p-4 text-center ">
                    IDEAS ON PAPER. IMPACT IN{" "}
                    <span className="text-black">REALITY.</span>
                  </h2>
                  <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Every meaningful idea begins quietly — on{" "}
                    <span className="text-[var(--color-gold)] font-semibold">
                      paper.
                    </span>
                  </p>
                  <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    What follows determines whether it becomes forgotten or
                    unforgettable.
                  </p>
                  <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    At Kaagidham Creatives,we operate as a{" "}
                    <span className="text-[var(--color-gold)] font-semibold">
                      creative consultancy -
                    </span>
                    helping businesses, institutions, and founders turn
                    scattered ideas into focused, strategic creative direction.
                  </p>
                </div>

                <div className="space-y-2 flex flex-wrap justify-center gap-6">
                  <p className="text-lg">
                    We{" "}
                    <span className="text-[var(--color-gold)] font-semibold">
                      question.
                    </span>{" "}
                  </p>
                  <p className="text-lg">
                    We{" "}
                    <span className="text-[var(--color-gold)] font-semibold">
                      refine.
                    </span>{" "}
                  </p>
                  <p className="text-lg">
                    We{" "}
                    <span className="text-[var(--color-gold)] font-semibold">
                      design.
                    </span>{" "}
                  </p>
                  <p className="text-lg">
                    We{" "}
                    <span className="text-[var(--color-gold)] font-semibold">
                      align.
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Because creativity without direction is art. Creativity with
                    clarity is influence.{" "}
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="mb-20">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">
                  WE DON'T JUST DESIGN.{" "}
                  <span className="text-[var(--color-gold)]">
                    WE THINK BEFORE WE CREATE.
                  </span>
                </h2>

                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Kaagidham Creatives is not built around templates or trends.
                  We are built around strategic clarity, creative intelligence,
                  minimal premium execution, and long-term thinking.
                </p>

                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  We function as your external creative brain — aligning
                  aesthetics with intention and design with direction.
                </p>
              </div>

              {/* Process */}
              <div className="mb-16">
                <h2 className="text-3xl font-semibold text-white mb-10 text-center">
                  HOW WE APPROACH EVERY{" "}
                  <span className="text-[var(--color-gold)]">PROJECT</span>
                </h2>

                <div className="grid md:grid-cols-4 gap-10">
                  <div className="snake-border rounded-xl bg-white/20 backdrop-blur-md p-6 relative rounded-xl hover:scale-105 transition duration-300 ">
                    <h3 className="text-2xl text-[var(--color-gold)] font-semibold">
                      Discover
                    </h3>
                    <p className="text-gray-300 mt-2">
                      Understanding your vision, ambition, and audience
                      psychology.
                    </p>
                  </div>
                  <div className="snake-border rounded-xl bg-white/20 backdrop-blur-md p-6 relative rounded-xl hover:scale-105 transition duration-300 ">
                    <h3 className="text-2xl text-[var(--color-gold)] font-semibold">
                      Define
                    </h3>
                    <p className="text-gray-300 mt-2">
                      Clarifying positioning, creative direction, and
                      communication tone.
                    </p>
                  </div>

                  <div className="snake-border rounded-xl bg-white/20 backdrop-blur-md p-6 relative rounded-xl hover:scale-105 transition duration-300 ">
                    <h3 className="text-2xl text-[var(--color-gold)] font-semibold">
                      Design
                    </h3>
                    <p className="text-gray-300 mt-2">
                      Translating strategy into visual systems and tangible
                      assets.
                    </p>
                  </div>

                  <div className="snake-border rounded-xl bg-white/20 backdrop-blur-md p-6 relative rounded-xl hover:scale-105 transition duration-300 ">
                    <h3 className="text-2xl text-[var(--color-gold)] font-semibold">
                      Deliver
                    </h3>
                    <p className="text-gray-300 mt-2">
                      Precise, refined, high-impact execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES PREVIEW */}
          <section
            id="services"
            className="relative bg-cover bg-center bg-no-repeat text-white py-6 text-center w-full "
            style={{ backgroundImage: `url(${home})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 space-y-16">
              {/* Service 1 */}

              <h1 className="text-3xl md:text-4xl font-semibold my-6">
                Our <span className="text-[var(--color-gold)]">Services</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
                <div
                  className="flex items-start gap-4 p-6  
bg-white/5 backdrop-blur-lg 
border-x-8  border-[var(--color-gold)] 
hover:border-[var(--color-gold)]
transition-all duration-300 hover:-translate-y-2 text-left"
                >
                  <div className="ml-6 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-gold)]">
                      Brand Identity Systems
                    </h3>

                    <p className="text-gray-300 text-sm md:text-lg mt-2">
                      Logos, visual languages, typography frameworks, and brand
                      structures built for recognition and longevity.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div
                  className="flex items-start gap-4 p-6  
bg-white/5 backdrop-blur-lg 
border-x-8  border-[var(--color-gold)] 
hover:border-[var(--color-gold)] 
transition-all duration-300 hover:-translate-y-2 text-left"
                >
                  <div className="ml-6 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-gold)]">
                      Visual Communication Design
                    </h3>

                    <p className="text-gray-300 text-sm md:text-lg mt-2">
                      Posters, print, campaigns, presentation systems, and
                      marketing visuals designed for clarity and precision.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div
                  className="flex items-start gap-4 p-6  
bg-white/5 backdrop-blur-lg 
border-x-8  border-[var(--color-gold)] 
hover:border-[var(--color-gold)] 
transition-all duration-300 hover:-translate-y-2 text-left"
                >
                  <div className="ml-6 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-gold)]">
                      Motion & Visual Storytelling
                    </h3>

                    <p className="text-gray-300 text-sm md:text-lg mt-2">
                      Concept-driven motion graphics and visual narratives that
                      make ideas dynamic and memorable.
                    </p>
                  </div>
                </div>

                {/* Service 4 */}
                <div
                  className="flex items-start gap-4 p-6  
bg-white/5 backdrop-blur-lg 
border-x-8  border-[var(--color-gold)] 
hover:border-[var(--color-gold)] 
transition-all duration-300 hover:-translate-y-2 text-left"
                >
                  <div className="ml-6 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-gold)]">
                      Strategic Creative Direction
                    </h3>

                    <p className="text-gray-300 text-sm md:text-lg mt-2">
                      Positioning clarity, message architecture, audience
                      alignment, and visual consistency — before execution
                      begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className=" bg-[var(--color-gold)] text-black py-5 md:py-8 text-center px-6 ">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Idea Deserves Structure. Your Brand Deserves Intention.
            </h2>
          </section>

          {/* CONTACT SECTION */}

          <section
            id="contact"
            className="relative bg-cover bg-center text-white py-6 w-full text-left "
            style={{ backgroundImage: `url(${home})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
              {/* Title */}

              <h1 className="text-3xl md:text-4xl font-semibold my-6 text-center">
                Contact <span className="text-[var(--color-gold)]">Us</span>
              </h1>
              {/* Grid Layout */}
              <div className="flex flex-col md:flex-row md:justify-between gap-12 lg:gap-20 items-start pt-4">
                <div className="flex flex-col">
                  <div className="mb-12 max-w-lg mx-auto text-center md:text-left">
                    <h2 className="tracking-[0.15em] text-2xl md:text-3xl font-semibold">
                      LET'S START A
                    </h2>
                    <h1 className="font-bold text-[var(--color-gold)] text-3xl md:text-5xl">
                      CONVERSATION
                    </h1>

                    <p className="font-semibold tracking-widest mt-2">
                      WE'D LOVE TO HEAR ABOUT
                      <span className="text-[var(--color-gold)]">
                        {" "}
                        YOUR PROJECT
                      </span>
                    </p>
                  </div>

                  {/* LEFT SIDE CONTACT INFO */}
                  <div className="space-y-4 -mt-6">
                    {/* Email */}
                    <a
                      href="mailto:contact.kaagidhamcreatives@gmail.com"
                      className="w-full flex items-start gap-4 p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 "
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100/80">
                        <IoIosMail className="text-black text-2xl md:text-4xl" />
                      </div>

                      <div>
                        <h2 className="tracking-widest font-semibold text-[var(--color-gold)] text-sm md:text-base">
                          EMAIL
                        </h2>

                        <p className=" text-xs md:text-lg break-all">
                          contact.kaagidhamcreatives@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+918939553359"
                      className="w-full flex items-start gap-4 p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 "
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100/80">
                        <FaPhoneVolume className="text-black text-lg md:text-2xl" />
                      </div>

                      <div>
                        <h2 className="tracking-widest font-semibold text-[var(--color-gold)] text-sm md:text-base">
                          PHONE
                        </h2>

                        <p className=" text-base md:text-xl font-mono">
                          +91 8939553359
                        </p>
                      </div>
                    </a>

                    {/* Address */}

                    <a
                      href="https://www.google.com/maps/search/172,+Main+Road,Malaiyalappatti,Arumbavur,+Veppanthattai,Perambalur,+Tamil+Nadu+%E2%80%93+621103+/@11.380049,78.7301942,1822m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-start gap-4 p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 "
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100/80">
                        <IoLocationSharp className="text-black text-xl md:text-4xl" />
                      </div>

                      <div>
                        <h2 className="tracking-widest font-semibold text-[var(--color-gold)] text-sm md:text-base">
                          ADDRESS
                        </h2>

                        <p className="text-sm md:text-lg leading-relaxed">
                          172, Main Road, Malaiyalappatti <br />
                          Arumbavur, Veppanthattai <br />
                          Perambalur,
                          <span className="text-[var(--color-gold)]">
                            {" "}
                            Tamil Nadu – 621103
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <ContactForm />
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-[var(--color-primary)] text-center py-6 border-t border-neutral-800">
            <p className="text-sm text-gray-400">
              © 2026 Kaagidham Creatives Private Limited
            </p>

            <p className="text-xs mt-2 text-gray-500">
              Strategy • Design • Motion • Creative Direction
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
