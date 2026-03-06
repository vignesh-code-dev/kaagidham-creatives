import Navbar from "../components/Navbar";
import about from "../assets/about-bg.png";
import service from "../assets/kc-bg.jpg";

import { Link } from "react-scroll";

import { MdDesignServices } from "react-icons/md";
import { FaBullhorn, FaFilm, FaBullseye } from "react-icons/fa";

import conBg from "../assets/kc-bg.jpg";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import "@fontsource/fira-code/400.css";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="relative text-white min-h-screen pt-[80px] text-lg">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* HERO SECTION */}
          <section
            id="home"
            className="bg-center bg-cover"
            style={{ backgroundImage: `url(${about})` }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10 min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We Turn Ideas Into{" "}
                <span className="text-[var(--color-gold)]">Impact.</span>
              </h1>

              <p className="mt-6 text-white tracking-wide max-w-xl md:max-w-2xl text-base md:text-lg leading-relaxed">
                A strategy-led creative studio shaping ideas into structured,
                powerful visual systems built for clarity and influence.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  className="bg-[var(--color-primary)] border border-[var(--color-gold)] text-[var(--color-gold)] px-6 py-3 font-semibold text-center hover:opacity-80 transition cursor-pointer"
                >
                  Start a Conversation
                </Link>

                <Link
                  to="services"
                  smooth
                  duration={600}
                  offset={-80}
                  className="border border-[var(--color-gold)] px-6 py-3 font-semibold text-center hover:bg-[var(--color-gold)] hover:text-black transition cursor-pointer"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
          </section>

          {/* ABOUT PREVIEW */}
          <section
            id="about"
            className="relative bg-cover bg-center bg-no-repeat text-white py-4"
            style={{ backgroundImage: `url(${service})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
              {/* Heading */}
              <div className="mb-16 space-y-2">
                <h1 className="text-3xl md:text-4xl font-semibold mb-6">
                  About <span className="text-[var(--color-gold)]">Us</span>
                </h1>

                <p className="text-sm md:text-base leading-relaxed">
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
                  <h2 className="text-3xl font-bold bg-[var(--color-gold)] mb-6 p-4 text-center rounded-tl-full rounded-br-full">
                    IDEAS ON PAPER. IMPACT IN{" "}
                    <span className="text-black">REALITY.</span>
                  </h2>
                  <p className="text-white leading-relaxed">
                    Every meaningful idea begins quietly — on{" "}
                    <span className="text-[var(--color-gold)] font-semibold">
                      paper.
                    </span>
                  </p>
                  <p>
                    What follows determines whether it becomes forgotten or
                    unforgettable.
                  </p>
                  <p className="text-white leading-relaxed">
                    At Kaagidham Creatives,we operate as a{" "}
                    <span className="text-[var(--color-gold)] font-semibold">
                      creative consultancy -
                    </span>
                    helping businesses, institutions, and founders turn
                    scattered ideas into focused, strategic creative direction.
                  </p>
                </div>

                <div className="space-y-2 flex justify-around">
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
                      design
                    </span>{" "}
                    .
                  </p>
                  <p className="text-lg">
                    We{" "}
                    <span className="text-[var(--color-gold)] font-semibold">
                      align.
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <p className="text-white leading-relaxed">
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

                <p className="text-white leading-relaxed">
                  Kaagidham Creatives is not built around templates or trends.
                  We are built around strategic clarity, creative intelligence,
                  minimal premium execution, and long-term thinking.
                </p>

                <p className="text-md text-white leading-relaxed">
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
                  <div>
                    <h3 className="text-2xl text-[var(--color-gold)] font-semibold">
                      Discover
                    </h3>
                    <p className="text-white mt-2">
                      Understanding your vision, ambition, and audience
                      psychology.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl text-[var(--color-gold)] font-semibold">
                      Define
                    </h3>
                    <p className="text-white mt-2">
                      Clarifying positioning, creative direction, and
                      communication tone.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl text-[var(--color-gold)] font-semibold">
                      Design
                    </h3>
                    <p className="text-white mt-2">
                      Translating strategy into visual systems and tangible
                      assets.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl text-[var(--color-gold)] font-semibold">
                      Deliver
                    </h3>
                    <p className="text-white mt-2">
                      Precise, refined, high-impact execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </section>

          {/* SERVICES PREVIEW */}
          <section
            id="services"
            className="relative bg-cover bg-center bg-no-repeat text-white py-4"
            style={{ backgroundImage: `url(${service})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 space-y-16">
              {/* Service 1 */}

              <h1 className="text-3xl md:text-4xl font-semibold my-6">
                Our <span className="text-[var(--color-gold)]">Services</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
                <div className="flex items-start gap-4">
                  <MdDesignServices className="text-[var(--color-gold)] w-12 h-12 md:w-16 md:h-16" />

                  <div className="ml-6 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-gold)]">
                      Brand Identity Systems
                    </h3>

                    <p className="text-white text-sm md:text-lg mt-2">
                      Logos, visual languages, typography frameworks, and brand
                      structures built for recognition and longevity.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="flex items-start gap-4 ">
                  <FaBullhorn className="text-[var(--color-gold)] w-12 h-12 md:w-16 md:h-16" />

                  <div className="ml-6 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-gold)]">
                      Visual Communication Design
                    </h3>

                    <p className="text-white text-sm md:text-lg mt-2">
                      Posters, print, campaigns, presentation systems, and
                      marketing visuals designed for clarity and precision.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="flex items-start gap-4">
                  <FaFilm className="text-[var(--color-gold)] w-12 h-12 md:w-16 md:h-16" />

                  <div className="ml-6 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-gold)]">
                      Motion & Visual Storytelling
                    </h3>

                    <p className="text-white text-sm md:text-lg mt-2">
                      Concept-driven motion graphics and visual narratives that
                      make ideas dynamic and memorable.
                    </p>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="flex items-start gap-4">
                  <FaBullseye className="text-[var(--color-gold)] w-12 h-12 md:w-16 md:h-16" />

                  <div className="ml-6 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-gold)]">
                      Strategic Creative Direction
                    </h3>

                    <p className="text-white text-sm md:text-lg mt-2">
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
          <section className="bg-[var(--color-gold)] text-black py-5 md:py-15 text-center px-6 ">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Idea Deserves Structure. Your Brand Deserves Intention.
            </h2>
          </section>

          {/* CONTACT SECTION */}

          <section
            id="contact"
            className="relative bg-cover bg-center text-white py-20"
            style={{ backgroundImage: `url(${conBg})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
              {/* Title */}
              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="mb-12">
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
                  <div className="space-y-8">
                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-black/40">
                        <IoIosMail
                          size={28}
                          className="md:size-20 text-[var(--color-gold)]"
                        />
                      </div>

                      <div>
                        <h2 className="tracking-widest font-semibold text-[var(--color-gold)]">
                          EMAIL
                        </h2>
                        <p className="font-semibold text-lg">
                          contact.kaagidhamcreatives@gmail.com
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-black/40">
                        <FaPhoneVolume
                          size={26}
                          className="md:size-14 text-[var(--color-gold)]"
                        />
                      </div>

                      <div>
                        <h2 className="tracking-widest font-semibold text-[var(--color-gold)]">
                          PHONE
                        </h2>
                        <p className="font-semibold text-lg md:text-2xl font-mono">
                          +91 8939553359
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-black/40">
                        <IoLocationSharp
                          size={28}
                          className="md:size-15 text-[var(--color-gold)]"
                        />
                      </div>

                      <div>
                        <h2 className="tracking-widest font-semibold text-[var(--color-gold)]">
                          ADDRESS
                        </h2>

                        <p className="font-semibold text-lg">
                          172, Main Road, Malaiyalappatti <br />
                          Arumbavur, Veppanthattai <br />
                          Perambalur,
                          <span className="text-[var(--color-gold)]">
                            {" "}
                            Tamil Nadu – 621103
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <ContactForm />
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-[var(--color-primary)] text-[var(--color-gray-light)] text-center py-8 border-t border-neutral-800">
            <p>
              © 2026 Kaagidham Creatives Private Limited. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
