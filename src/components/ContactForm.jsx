import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_7g66p9p",
        "template_og0q9ei",
        form.current,
        "UZWVzhpN1-4KgWoGJ",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-[88px] bg-[#FBF8F1] font-['Montserrat',sans-serif] text-[#0B0B0B]"
    >
      <div className="max-w-[1120px] mx-auto px-[22px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-[40px] items-start">
          {/* LEFT COLUMN: FORM */}
          <div>
            <div className="flex items-center gap-[10px] text-[12px] font-semibold tracking-[.2em] uppercase mb-[16px]">
              <span className="w-[26px] h-[4px] rounded-[4px] bg-[#FFC20E]" />
              Get in touch
            </div>

            <h2 className="font-extrabold text-[clamp(30px,5vw,50px)] leading-[1.08] tracking-[-.02em] m-0 mb-[12px]">
              Have a creative project{" "}
              <span className="bg-[linear-gradient(transparent_58%,#FFC20E_58%_92%,transparent_92%)] px-[0.08em] text-inherit">
                in mind?
              </span>
            </h2>

            <p className="text-[#55514a] text-[clamp(16px,2vw,19px)] max-w-[620px] mb-[28px] leading-[1.65]">
              Let’s turn your ideas into meaningful, purpose-driven creative
              work.
            </p>

            <form ref={form} onSubmit={sendEmail} className="grid gap-[14px]">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <input
                type="text"
                name="n"
                placeholder="Your name"
                required
                className="w-full font-medium text-[15px] font-['Montserrat',sans-serif] text-[#0B0B0B] bg-white border-2 border-[#0B0B0B] rounded-[14px] p-[15px_16px] outline-none focus:outline-[3px] focus:outline-[#FFC20E] focus:outline-offset-[2px]"
              />

              <input
                type="email"
                name="e"
                placeholder="Your email"
                required
                className="w-full font-medium text-[15px] font-['Montserrat',sans-serif] text-[#0B0B0B] bg-white border-2 border-[#0B0B0B] rounded-[14px] p-[15px_16px] outline-none focus:outline-[3px] focus:outline-[#FFC20E] focus:outline-offset-[2px]"
              />

              <select
                name="s"
                id="s"
                className="w-full font-medium text-[15px] font-['Montserrat',sans-serif] text-[#0B0B0B] bg-white border-2 border-[#0B0B0B] rounded-[14px] p-[15px_16px] outline-none focus:outline-[3px] focus:outline-[#FFC20E] focus:outline-offset-[2px] cursor-pointer"
              >
                <option>Brand Identity Systems</option>
                <option>Visual Communication Design</option>
                <option>Motion &amp; Visual Storytelling</option>
                <option>Strategic Creative Direction</option>
                <option>Clarity Session</option>
              </select>

              <textarea
                name="m"
                placeholder="Tell us about your project"
                required
                className="w-full font-medium text-[15px] font-['Montserrat',sans-serif] text-[#0B0B0B] bg-white border-2 border-[#0B0B0B] rounded-[14px] p-[15px_16px] outline-none focus:outline-[3px] focus:outline-[#FFC20E] focus:outline-offset-[2px] min-h-[130px] resize-vertical"
              ></textarea>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full px-[26px] py-[14px] font-semibold text-[15px] bg-[#FFC20E] text-[#0B0B0B] border-2 border-[#0B0B0B] shadow-[4px_4px_0_#0B0B0B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0B0B0B] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send message →"}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: CONTACT INFO */}
          <div className="grid gap-[22px] content-start pt-2 lg:pt-8">
            <div className="flex gap-[16px] items-start">
              <div className="flex-none w-[44px] h-[44px] rounded-full bg-[#FFC20E] text-[#0B0B0B] grid place-items-center border-2 border-[#0B0B0B]">
                <MapPin className="w-[24px] h-[24px] stroke-[2.2]" />
              </div>
              <p className="m-0 leading-relaxed text-[#0B0B0B]">
                <small className="block text-[12px] tracking-[.14em] uppercase text-[#55514a] font-semibold">
                  Studio
                </small>
                C10, RE Apartments,
                <br />
                Krishnapuram Street, Choolaimedu,
                <br />
                Chennai - 600094
              </p>
            </div>

            <div className="flex gap-[16px] items-start">
              <div className="flex-none w-[44px] h-[44px] rounded-full bg-[#FFC20E] text-[#0B0B0B] grid place-items-center border-2 border-[#0B0B0B]">
                <Mail className="w-[24px] h-[24px] stroke-[2.2]" />
              </div>
              <p className="m-0 leading-relaxed text-[#0B0B0B]">
                <small className="block text-[12px] tracking-[.14em] uppercase text-[#55514a] font-semibold">
                  Email
                </small>
                <a
                  href="mailto:contact.kaagidhamcreatives@gmail.com"
                  className="font-semibold text-[#0B0B0B] hover:underline"
                >
                  contact.kaagidhamcreatives@gmail.com
                </a>
              </p>
            </div>

            <div className="flex gap-[16px] items-start">
              <div className="flex-none w-[44px] h-[44px] rounded-full bg-[#FFC20E] text-[#0B0B0B] grid place-items-center border-2 border-[#0B0B0B]">
                <Phone className="w-[24px] h-[24px] stroke-[2.2]" />
              </div>
              <p className="m-0 leading-relaxed text-[#0B0B0B]">
                <small className="block text-[12px] tracking-[.14em] uppercase text-[#55514a] font-semibold">
                  Call or WhatsApp
                </small>
                <a
                  href="tel:+918939553359"
                  className="font-semibold text-[#0B0B0B] hover:underline"
                >
                  +91 89395 53359
                </a>{" "}
                ·{" "}
                <a
                  href="https://wa.me/918939553359"
                  className="font-semibold text-[#0B0B0B] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
