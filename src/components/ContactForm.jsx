import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

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
          toast.success("Message sent! We'll respond within 24 hours.");
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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="
        w-full
        bg-white
        p-5 sm:p-7
        rounded-2xl
        border border-neutral-200
        shadow-[0_15px_45px_rgba(0,0,0,0.06)]
        space-y-5
      "
    >
      {/* Honeypot */}
      <input
        type="text"
        name="botcheck"
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />

      {/* Form Heading */}
      <div className="mb-2">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#9B7A12]">
          Get In Touch
        </p>

        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#111111]">
          Tell us about your project.
        </h3>

        <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
          Share your idea with us and let's turn it into something meaningful.
        </p>
      </div>

      {/* Name */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-[#111111]">
          Your Name
        </label>

        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          required
          className="
            w-full
            px-4 py-3.5
            rounded-xl
            border border-neutral-200
            bg-[#FAFAFA]
            text-[#111111]
            placeholder:text-neutral-400
            outline-none
            text-sm
            transition-all
            duration-300
            focus:border-[#C9A227]
            focus:ring-4
            focus:ring-[#C9A227]/10
            hover:border-neutral-300
          "
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-[#111111]">
          Your Email
        </label>

        <input
          type="email"
          name="user_email"
          placeholder="you@example.com"
          required
          className="
            w-full
            px-4 py-3.5
            rounded-xl
            border border-neutral-200
            bg-[#FAFAFA]
            text-[#111111]
            placeholder:text-neutral-400
            outline-none
            text-sm
            transition-all
            duration-300
            focus:border-[#C9A227]
            focus:ring-4
            focus:ring-[#C9A227]/10
            hover:border-neutral-300
          "
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-[#111111]">
          Subject
        </label>

        <input
          type="text"
          name="subject"
          placeholder="What can we help you with?"
          className="
            w-full
            px-4 py-3.5
            rounded-xl
            border border-neutral-200
            bg-[#FAFAFA]
            text-[#111111]
            placeholder:text-neutral-400
            outline-none
            text-sm
            transition-all
            duration-300
            focus:border-[#C9A227]
            focus:ring-4
            focus:ring-[#C9A227]/10
            hover:border-neutral-300
          "
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 text-sm font-semibold text-[#111111]">
          Your Message
        </label>

        <textarea
          name="message"
          rows="5"
          placeholder="Tell us about your project..."
          required
          className="
            w-full
            px-4 py-3.5
            rounded-xl
            border border-neutral-200
            bg-[#FAFAFA]
            text-[#111111]
            placeholder:text-neutral-400
            outline-none
            text-sm
            leading-relaxed
            resize-none
            transition-all
            duration-300
            focus:border-[#C9A227]
            focus:ring-4
            focus:ring-[#C9A227]/10
            hover:border-neutral-300
          "
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          flex
          items-center
          justify-center
          gap-2
          bg-[#111111]
          text-white
          py-3.5
          px-6
          rounded-xl
          font-semibold
          text-sm
          transition-all
          duration-300
          hover:bg-[#C9A227]
          hover:text-black
          hover:-translate-y-0.5
          hover:shadow-lg
          disabled:opacity-60
          disabled:cursor-not-allowed
          disabled:hover:translate-y-0
          cursor-pointer
        "
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <span className="text-lg">→</span>
          </>
        )}
      </button>

      {/* Bottom Note */}
      <p className="text-center text-xs text-neutral-400">
        We usually respond within 24 hours.
      </p>
    </form>
  );
}
