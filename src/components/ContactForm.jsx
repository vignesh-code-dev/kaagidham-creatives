import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
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
          toast.error("Failed to send message");
          setLoading(false);
        },
      );
  };

  return (
   
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-black/40 backdrop-blur-md 
      p-6 sm:p-8 md:p-10 
      rounded-xl 
      border border-neutral-700 
      space-y-5 
      w-full"
      >
        <input type="text" name="botcheck" className="hidden" />
        {/* Name */}
        <input
        autoFocus
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 md:p-4 
        bg-black/60 
        border border-neutral-700 
        rounded-md 
        outline-none 
        text-sm md:text-base
        focus:border-[var(--color-gold)] 
        transition
focus:ring-1 
focus:ring-[var(--color-gold)] 
"
        />

        {/* Email */}
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 md:p-4 
        bg-black/60 
        border border-neutral-700 
        rounded-md 
        outline-none 
        text-sm md:text-base
        focus:border-[var(--color-gold)]
        focus:ring-1 
        focus:ring-[var(--color-gold)] 
        transition"
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full p-3 md:p-4 
        bg-black/60 
        border border-neutral-700 
        rounded-md 
        outline-none 
        text-sm md:text-base
        focus:border-[var(--color-gold)]
        focus:ring-1 
        focus:ring-[var(--color-gold)]
        transition"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="5"
          placeholder="Tell us about your project..."
          className="w-full p-3 md:p-4 
        bg-black/60 
        border border-neutral-700 
        rounded-md 
        outline-none 
        text-sm md:text-base
        resize-none
        focus:border-[var(--color-gold)]
        focus:ring-1 
focus:ring-[var(--color-gold)]
        required
        transition"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full 
  bg-[var(--color-gold)] 
  text-black 
  py-3 md:py-4 
  font-semibold 
  text-sm md:text-base
  rounded-md 
  shadow-sm 
  shadow-white
  hover:shadow-md
  hover:opacity-90 
  transition 
  cursor-pointer
  disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      
   
  );
}
