import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { useState } from "react"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been received.`);
    setForm({ name: "", email: "", message: "" });
    // You can integrate EmailJS, Formspree, or your backend here
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center text-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b inline-block"
        >
          {CONTACT.email}
        </motion.a>
      </div>
      {/* Contact Form */}
      <motion.form
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        action="https://formspree.io/f/manjpdje" // <-- Use the correct Formspree endpoint
        method="POST"
        className="mx-auto mt-10 flex max-w-md flex-col gap-4 rounded-lg border border-neutral-800 p-6 shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="rounded-md border border-neutral-700 bg-neutral-900 p-2 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="rounded-md border border-neutral-700 bg-neutral-900 p-2 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="rounded-md border border-neutral-700 bg-neutral-900 p-2 text-white"
        />
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;