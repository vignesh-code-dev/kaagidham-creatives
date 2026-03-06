import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/kc-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md text-white fixed w-full top-0 z-50 border-b border-neutral-800">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[80px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] object-contain"
          />
          <h1 className="text-sm md:text-xl font-bold tracking-wide whitespace-nowrap">
            KAAGIDHAM{" "}
            <span className="text-[var(--color-gold)]">CREATIVES</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-md tracking-wide">
          <Link
            to="home"
            smooth
            duration={600}
            offset={-80}
            spy
            activeClass="text-[var(--color-gold)] font-bold"
            className="cursor-pointer hover:text-[var(--color-gold)] transition"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth
            duration={600}
            offset={-75}
            spy
            activeClass="text-[var(--color-gold)] font-bold"
            className="cursor-pointer hover:text-[var(--color-gold)] transition"
          >
            About
          </Link>

          <Link
            to="services"
            smooth
            duration={600}
            offset={-75}
            spy
            activeClass="text-[var(--color-gold)] font-bold"
            className="cursor-pointer hover:text-[var(--color-gold)] transition"
          >
            Services
          </Link>

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-75}
            spy
            activeClass="text-[var(--color-gold)] font-bold"
            className="cursor-pointer hover:text-[var(--color-gold)] transition"
          >
            Contact
          </Link>
        </ul>

        {/* Desktop CTA */}
        <Link
          to="contact"
          smooth
          duration={600}
          offset={-80}
          className="hidden md:block bg-[var(--color-gold)] text-black px-5 py-2 text-sm font-semibold rounded hover:opacity-90 transition cursor-pointer"
        >
          Start a Conversation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800">
          <div className="flex flex-col items-center gap-8 py-8 text-lg tracking-wide">
            <Link
              to="home"
              smooth
              duration={600}
              offset={-80}
              spy
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-[var(--color-gold)] transition"
            >
              Home
            </Link>

            <Link
              to="about"
              smooth
              duration={600}
              offset={-80}
              spy
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-[var(--color-gold)] transition"
            >
              About
            </Link>

            <Link
              to="services"
              smooth
              duration={600}
              offset={-80}
              spy
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-[var(--color-gold)] transition"
            >
              Services
            </Link>

            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              spy
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:text-[var(--color-gold)] transition"
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="bg-[var(--color-gold)] text-black px-6 py-3 font-semibold rounded hover:opacity-90 transition"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
