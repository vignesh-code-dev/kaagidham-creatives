import { useState } from "react";
import { Link } from "react-scroll";
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      {" "}
      {/* ================= NAVBAR ================= */}{" "}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-[72px] flex items-center justify-between">
        {" "}
        {/* ================= LOGO ================= */}{" "}
        <Link
          to="home"
          smooth
          duration={600}
          offset={-80}
          onClick={closeMenu}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          {" "}
          <img
            src={logo}
            alt="Kaagidham Creatives"
            className=" w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] object-contain transition-transform duration-300 group-hover:scale-105 "
          />{" "}
          <div className="leading-none">
            {" "}
            <h1 className="text-sm sm:text-base md:text-lg font-bold tracking-[0.08em] text-[#111111] whitespace-nowrap">
              {" "}
              KAAGIDHAM{" "}
            </h1>{" "}
            <p className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#F7C214] mt-1">
              {" "}
              CREATIVES{" "}
            </p>{" "}
          </div>{" "}
        </Link>{" "}
        {/* ================= DESKTOP MENU ================= */}{" "}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {" "}
          <ul className="flex items-center gap-7 lg:gap-9">
            {" "}
            {navItems.map((item) => (
              <li key={item.to}>
                {" "}
                <Link
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  activeClass="!text-[#F7C214]"
                  className=" relative cursor-pointer text-sm font-medium text-neutral-700 hover:text-[#F7C214] transition-colors duration-300 py-2 group "
                >
                  {" "}
                  {item.name} {/* Hover Line */}{" "}
                  <span className=" absolute left-1/2 -bottom-0.5 w-0 h-[2px] bg-[#F7C214] -translate-x-1/2 group-hover:w-full transition-all duration-300 " />{" "}
                </Link>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
          {/* Desktop CTA */}{" "}
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className=" cursor-pointer inline-flex items-center gap-2 bg-[#111111] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#F7C214] hover:text-black transition-all duration-300 shadow-sm "
          >
            {" "}
            Start a Conversation <span className="text-base">→</span>{" "}
          </Link>{" "}
        </div>{" "}
        {/* ================= MOBILE BUTTON ================= */}{" "}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className=" md:hidden w-10 h-10 rounded-full border border-neutral-200 bg-white text-[#111111] flex items-center justify-center text-xl hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300 "
        >
          {" "}
          {menuOpen ? "×" : "☰"}{" "}
        </button>{" "}
      </div>{" "}
      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen
            ? "max-h-[500px] opacity-100 border-t border-neutral-200"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-5 sm:px-8 py-6">
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
                activeClass="!text-[#C9A227] !bg-neutral-100"
                className="
            flex items-center w-full
            px-4 py-3.5
            rounded-xl
            text-base font-medium
            text-neutral-700
            cursor-pointer
            hover:text-[#C9A227]
            hover:bg-neutral-100
            transition-all duration-300
          "
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Small Brand Text */}
          <p className="text-center text-[10px] tracking-[0.2em] uppercase text-neutral-400 mt-5">
            Strategy • Design • Motion
          </p>
        </div>
      </div>{" "}
    </nav>
  );
}
