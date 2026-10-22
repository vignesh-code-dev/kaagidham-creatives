import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/kc-logo.png";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
      {/* NAVBAR CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-[72px] flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="home"
          smooth
          duration={600}
          offset={-80}
          onClick={closeMenu}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <img
            src={logo}
            alt="Kaagidham Creatives"
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-serif text-base sm:text-lg font-bold tracking-[0.06em] text-[#111111]">
              KAAGIDHAM
            </span>
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#C9A227] mt-0.5 uppercase">
              Creatives
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  activeClass="!text-[#C9A227]"
                  className="relative cursor-pointer text-sm font-semibold text-neutral-600 hover:text-[#C9A227] transition-colors duration-200 py-1.5 group"
                >
                  {item.name}
                  {/* Underline Indicator on Hover */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C9A227] transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Primary CTA Button */}
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="group cursor-pointer inline-flex items-center gap-2 bg-[#111111] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#C9A227] hover:text-black transition-all duration-300 shadow-sm active:scale-[0.98]"
          >
            <span>Start a Conversation</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 rounded-xl border border-neutral-200 bg-white text-[#111111] flex items-center justify-center hover:border-[#C9A227] hover:text-[#C9A227] transition-colors duration-200 cursor-pointer"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE ACCORDION MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-neutral-200/80 bg-white ${
          menuOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <div className="px-5 py-6 space-y-4">
          {/* Mobile Links */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={600}
                offset={-75}
                spy
                onClick={closeMenu}
                activeClass="!text-[#C9A227] !bg-[#C9A227]/5 font-semibold"
                className="flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 hover:text-[#C9A227] hover:bg-neutral-50 transition-all duration-200 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Brand Tagline in Drawer */}
          <p className="text-center text-[10px] tracking-[0.2em] uppercase text-neutral-400 pt-2">
            Strategy • Design • Motion
          </p>
        </div>
      </div>
    </nav>
  );
}
