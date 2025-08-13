import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://deepak-portfolio-27.vercel.app/" // deployed backend URL
      : "http://localhost:5000/api";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg h-32"
        />
        <button
          type="submit"
          className="bg-orange-200 hover:bg-orange-300 text-black px-6 py-2 rounded-lg w-full"
        >
          Send Message
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
