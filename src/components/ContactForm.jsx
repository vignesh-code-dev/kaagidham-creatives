import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
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
      className="bg-transparent 
      p-6 sm:p-8 md:p-8  
      border border-neutral-700 
      space-y-5 
      max-w-md"
    >
      <input type="text" name="botcheck" className="hidden" />
      {/* Name */}
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full p-3 md:p-3 
        bg-gray-100/80
        text-black
        outline-none 
        font-medium
        text-sm md:text-base 
        transition
        focus:ring-1 
        focus:ring-black"
      />

      {/* Email */}
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full p-3 md:p-3 
        bg-gray-100/80  
        text-black
        outline-none 
        font-medium
        text-sm md:text-base
        focus:ring-1 
        focus:ring-black"
      />

      {/* Subject */}
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full p-3 md:p-3 
        bg-gray-100/80 
        text-black
        outline-none 
        font-medium
        text-sm md:text-base
        focus:ring-1 
        focus:ring-black"
      />

      {/* Message */}
      <textarea
        name="message"
        rows="5"
        placeholder="Tell us about your project..."
        className="w-full p-3 md:p-4 
        bg-gray-100/80 
        text-black  
        outline-none 
        font-medium
        text-sm md:text-base
        resize-none
        focus:ring-1 
        focus:ring-[var(--color-gold)]
        required"
      ></textarea>

      {/* Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="w-fit 
  bg-[var(--color-gold)] 
  text-black 
  py-3 md:py-3 
  px-2
  font-semibold 
  text-sm md:text-base 
  shadow-sm 
  hover:shadow-md
  hover:opacity-90 
  transition 
  cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
