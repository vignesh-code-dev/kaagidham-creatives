import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="top"
      className="pt-[96px] sm:pt-[110px] pb-20 lg:pb-[80px] relative overflow-hidden bg-[#FBF8F1] font-['Montserrat',sans-serif] text-[#0B0B0B]"
    >
      {/* Embedded Original CSS for Collage & Animations */}
      <style>{`
        .collage { position: relative; height: 380px; max-width: 440px; width: 100%; margin: 0 auto; }
        .collage .disc { position: absolute; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #FFD84D, #FFC20E 55%, #F59E0B); right: -10px; top: -20px; }
        .collage .dot { position: absolute; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #FFE27A, #FFC20E 60%, #F59E0B); }
        .sheet { position: absolute; background: #fff; border: 2px solid #0B0B0B; border-radius: 16px; box-shadow: 6px 6px 0 #0B0B0B; }
        .s1 { width: 270px; height: 200px; left: 0; top: 40px; transform: rotate(-7deg); padding: 18px 20px; color: #0B0B0B; }
        .sw { display: flex; gap: 8px; }
        .sw i { width: 30px; height: 30px; border-radius: 50%; border: 2px solid #0B0B0B; font-style: normal; display: inline-block; }
        .lbl { font: 600 11px Montserrat, sans-serif; letter-spacing: .14em; text-transform: uppercase; margin-top: 12px; }
        .ln { height: 8px; border-radius: 4px; background: #e7e0cf; margin-top: 8px; }
        .s2 { width: 270px; height: 200px; right: 0; top: 10px; transform: rotate(6deg); padding: 18px 20px; color: #0B0B0B; }
        .s3 { width: 310px; height: 210px; left: 45px; top: 140px; transform: rotate(-2deg); padding: 28px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 18px; font-weight: 800; font-size: 28px; line-height: 1.1; letter-spacing: -.02em; }
        .s3 span { border-bottom: 3px dashed #0B0B0B; padding-bottom: 4px; }
        .stamp { font-style: normal; background: #FFC20E; color: #0B0B0B; border: 2px solid #0B0B0B; border-radius: 10px; padding: 8px 14px; box-shadow: 3px 3px 0 #0B0B0B; transform: rotate(-3deg); animation: slam .6s .7s cubic-bezier(.2,1.4,.4,1) both; font-size: 15px; font-weight: 800; }
        .stk { position: absolute; background: #0B0B0B; color: #fff; border-radius: 999px; padding: 7px 16px; font: 600 12px Montserrat, sans-serif; letter-spacing: .08em; text-transform: uppercase; animation: bob 3.6s ease-in-out infinite alternate; }
        .k1 { left: -6px; top: 0; }
        .k2 { right: -4px; bottom: 70px; animation-delay: -1.2s; }
        .k3 { left: 14px; bottom: 6px; animation-delay: -2.4s; }
        @keyframes slam { from { opacity: 0; transform: scale(1.9) rotate(-14deg); } to { opacity: 1; transform: scale(1) rotate(-3deg); } }
        @keyframes bob { to { transform: translateY(-10px) rotate(-3deg); } }
        @media (prefers-reduced-motion: reduce) { .stamp, .stk { animation: none; } }
      `}</style>

      <div className="max-w-[1120px] mx-auto px-[22px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-12 lg:gap-[48px] items-center">
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div>
            {/* Pill Eyebrow */}
            <span className="inline-block border-2 border-[#0B0B0B] rounded-full px-4 py-[7px] text-[11px] font-semibold tracking-[0.14em] uppercase mb-[26px]">
              Creative Studio &amp; Strategic Design Consultancy
            </span>

            <h1 className="font-extrabold text-[clamp(40px,8.6vw,84px)] leading-[1.08] tracking-[-.02em] m-0">
              Think clearly. Create with{" "}
              <span className="bg-[linear-gradient(transparent_58%,#FFC20E_58%_92%,transparent_92%)] px-[0.08em] text-inherit">
                purpose.
              </span>
            </h1>

            <p className="text-[#55514a] text-[clamp(16px,2vw,19px)] max-w-[620px] my-[26px] leading-[1.65]">
              We help businesses and organisations turn ideas into meaningful
              creative work through brand identity, visual communication,
              motion, and creative direction.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Primary CTA Button */}
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-84}
                className="inline-flex items-center gap-2 rounded-full px-[26px] py-[14px] font-semibold text-[15px] bg-[#FFC20E] text-[#0B0B0B] border-2 border-[#0B0B0B] shadow-[4px_4px_0_#0B0B0B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0B0B0B] transition-all cursor-pointer"
              >
                Start a project →
              </Link>

              {/* Secondary CTA Button */}
              <Link
                to="approach"
                smooth
                duration={600}
                offset={-84}
                className="inline-flex items-center gap-2 rounded-full px-[26px] py-[14px] font-semibold text-[15px] bg-transparent text-[#0B0B0B] border-2 border-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#FBF8F1] transition-all cursor-pointer"
              >
                Explore Paper Thinking
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: COLLAGE ARTWORK WITH EXACT ANIMATIONS */}
          <div className="collage" aria-hidden="true">
            <div className="disc"></div>
            <div
              className="dot"
              style={{
                width: "34px",
                height: "34px",
                left: "20px",
                top: "10px",
              }}
            ></div>
            <div
              className="dot"
              style={{
                width: "26px",
                height: "26px",
                right: "30px",
                bottom: "20px",
              }}
            ></div>

            {/* Sheet 1 */}
            <div className="sheet s1">
              <div className="sw">
                <i style={{ background: "#FFC20E" }}></i>
                <i style={{ background: "#F59E0B" }}></i>
                <i style={{ background: "#0B0B0B" }}></i>
                <i style={{ background: "#fff" }}></i>
              </div>
              <div>
                <div className="lbl">Brand identity</div>
                <div className="ln" style={{ width: "80%" }}></div>
                <div className="ln" style={{ width: "55%" }}></div>
              </div>
            </div>

            {/* Sheet 2 */}
            <div className="sheet s2">
              <div>
                <b style={{ fontSize: "36px", lineHeight: 1 }}>Aa</b>
                <div className="ln" style={{ width: "80%" }}></div>
                <div className="ln" style={{ width: "55%" }}></div>
              </div>
              <div className="lbl" style={{ marginTop: "14px" }}>
                Visual communication
              </div>
            </div>

            {/* Sheet 3 */}
            <div className="sheet s3">
              <span>Ideas on paper.</span>
              <em className="stamp">Impact in reality.</em>
            </div>

            {/* Floating Stickers */}
            <span className="stk k1">Brand</span>
            <span className="stk k2">Motion</span>
            <span className="stk k3">Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
