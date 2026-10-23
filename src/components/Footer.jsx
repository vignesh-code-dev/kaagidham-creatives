import { Link } from "react-scroll";
import logo from "../assets/kc-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white py-[54px] pb-[40px] font-['Montserrat',sans-serif]">
      <div className="max-w-[1120px] mx-auto px-[22px] grid gap-[26px] justify-items-center text-center">
        {/* Logo Chip Box */}
        <div className="bg-white rounded-[14px]">
          <img
            src={logo}
            alt="Kaagidham Creatives"
            className="h-[60px] w-auto object-contain mix-blend-multiply"
          />
        </div>

        <p className="m-0 font-medium">
          Creative Studio &amp; Strategic Design Consultancy
        </p>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap gap-[22px] justify-center text-[14px] font-medium">
          <Link
            to="services"
            smooth
            duration={600}
            offset={-84}
            className="cursor-pointer hover:underline hover:decoration-[#FFC20E] hover:decoration-[3px] hover:underline-offset-[6px] transition-all"
          >
            Services
          </Link>
          <Link
            to="approach"
            smooth
            duration={600}
            offset={-84}
            className="cursor-pointer hover:underline hover:decoration-[#FFC20E] hover:decoration-[3px] hover:underline-offset-[6px] transition-all"
          >
            Approach
          </Link>
          <Link
            to="work"
            smooth
            duration={600}
            offset={-84}
            className="cursor-pointer hover:underline hover:decoration-[#FFC20E] hover:decoration-[3px] hover:underline-offset-[6px] transition-all"
          >
            Work
          </Link>
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-84}
            className="cursor-pointer hover:underline hover:decoration-[#FFC20E] hover:decoration-[3px] hover:underline-offset-[6px] transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <small className="text-[#9a9588] text-[13px]">
          © 2026 Kaagidham Creatives Private Limited. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
