import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React Icons
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

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
      className="min-h-screen bg-[#F5F5F7] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl">
        {/* Floating Overlap Container */}
        <div className="relative">
          {/* Main White Card (Base container) */}
          <div className="bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.07)] border border-neutral-100/80 overflow-hidden lg:overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[580px]">
              {/* Left Column Spacer for Desktop Overlap */}
              <div className="hidden lg:block lg:col-span-4" />

              {/* Right Form Area (Reference image look) */}
              <div className="lg:col-span-8 p-6 sm:p-10 lg:py-14 lg:pl-16 lg:pr-14 flex flex-col justify-center">
                {/* Form Title & Subtitle */}
                <div className="mb-7">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
                    Get in <span className="text-[#C9A227]">Touch</span>
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 font-normal">
                    Feel free to drop us a line below! We'd love to hear from
                    you.
                  </p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="botcheck"
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] border border-neutral-200/70 text-sm text-[#111111] placeholder:text-neutral-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] border border-neutral-200/70 text-sm text-[#111111] placeholder:text-neutral-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Typing your message here..."
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] border border-neutral-200/70 text-sm text-[#111111] placeholder:text-neutral-400 outline-none leading-relaxed resize-none transition-all duration-200 focus:bg-white focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10"
                    />
                  </div>

                  {/* Golden / Black Send Button (Rounded Pill Style as in reference) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-48 py-3.5 px-8 rounded-full bg-[#111111] text-white hover:bg-[#C9A227] hover:text-black font-semibold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#C9A227]/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "SEND MESSAGE"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Left Overlapping Floating Card (Black & Gold Theme) */}
          <div
            className="
            mt-6 lg:mt-0 
            lg:absolute lg:-left-6 lg:top-8 lg:bottom-8 lg:w-[38%] 
            bg-[#111111] text-white 
            rounded-3xl p-7 sm:p-9 
            shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
            flex flex-col justify-between 
            border border-[#C9A227]/20
            relative z-10
          "
          >
            {/* Top Accent Light Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Contact Us
                </h4>
              </div>

              {/* Info Items */}
              <div className="space-y-6">
                {/* Address */}
                <a
                  href="https://www.google.com/maps/search/172,+Main+Road,Malaiyalappatti,Arumbavur,+Veppanthattai,Perambalur,+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="mt-1 text-lg text-[#C9A227] group-hover:scale-110 transition-transform">
                    <IoLocationOutline />
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 group-hover:text-neutral-100">
                    172, Main Road, Malaiyalappatti,
                    <br />
                    Arumbavur, Veppanthattai,
                    <br />
                    Perambalur,{" "}
                    <span className="text-[#C9A227]">TN – 621103</span>
                  </p>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact.kaagidhamcreatives@gmail.com"
                  className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="text-lg text-[#C9A227] group-hover:scale-110 transition-transform">
                    <IoMailOutline />
                  </div>
                  <p className="text-xs sm:text-sm break-all font-medium text-neutral-300 group-hover:text-neutral-100">
                    contact.kaagidhamcreatives@gmail.com
                  </p>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918939553359"
                  className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="text-lg text-[#C9A227] group-hover:scale-110 transition-transform">
                    <FiPhoneCall />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-300 group-hover:text-neutral-100">
                    +91 89395 53359
                  </p>
                </a>
              </div>
            </div>

            {/* Bottom Brand Statement */}
            <div className="pt-8 mt-6 border-t border-neutral-800">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#C9A227] uppercase">
                Kaagidham Creatives
              </p>
              <p className="mt-1 text-xs text-neutral-400">
                Strategy. Design. Motion. Impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
