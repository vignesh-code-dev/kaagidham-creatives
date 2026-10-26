import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/kc-logo.png";

const navItems = [
  { name: "Services", to: "services" },
  { name: "Approach", to: "approach" },
  { name: "Our Work", to: "work" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FBF8F1]/[0.92] backdrop-blur-[10px] border-b border-[#e7e0cf] font-['Montserrat',sans-serif]">
      <div className="max-w-[1120px] mx-auto px-[22px] h-[72px] flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link
          to="top"
          smooth
          duration={600}
          onClick={closeMenu}
          className="cursor-pointer flex items-center"
        >
          <img
            src={logo}
            alt="Kaagidham Creatives"
            className="h-[64px] w-auto object-contain mix-blend-multiply"
          />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-[28px] text-[14px] font-medium text-[#0B0B0B]">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              offset={-84}
              spy
              onClick={closeMenu}
              className="cursor-pointer tracking-[0.06em] text-[#0B0B0B] hover:underline hover:decoration-[#FFC20E] hover:decoration-[3px] hover:underline-offset-[6px] transition-all"
            >
              {item.name}
            </Link>
          ))}

          {/* Primary Button */}
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-84}
            onClick={closeMenu}
            className="inline-flex items-center gap-2 tracking-[0.04em] rounded-full px-[26px] py-[12px] font-semibold text-[15px] bg-[#FFC20E] text-[#0B0B0B] border-2 border-[#0B0B0B] shadow-[4px_4px_0_#0B0B0B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0B0B0B] transition-all cursor-pointer"
          >
            Start a project
          </Link>
        </nav>

        {/* MOBILE BURGER BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-2 border-[#0B0B0B] text-[#0B0B0B] rounded-[12px] w-[44px] h-[44px] text-[20px] flex items-center justify-center cursor-pointer"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* MOBILE MENU DROPDOWN */}
        <nav
          className={`md:hidden absolute left-0 right-0 top-[72px] bg-[#FBF8F1] flex flex-col items-start px-[22px] py-[18px] pb-[24px] border-b border-[#e7e0cf] transition-all duration-300 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              offset={-84}
              onClick={closeMenu}
              className="w-full py-3 text-[16px] font-medium text-[#0B0B0B] border-b border-[#e7e0cf]/50 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-5 w-full">
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-84}
              onClick={closeMenu}
              className="w-full text-center inline-flex justify-center items-center rounded-full px-[26px] py-[14px] font-semibold text-[15px] bg-[#FFC20E] text-[#0B0B0B] border-2 border-[#0B0B0B] shadow-[4px_4px_0_#0B0B0B] cursor-pointer"
            >
              Start a project
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
