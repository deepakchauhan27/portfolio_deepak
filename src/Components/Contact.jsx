import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Use deployed backend URL in production
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://portfolio-backend-j744.onrender.com/api"
      : "http://localhost:5000/api";
      
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // ✅ fixed here
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus("❌ Failed to send message. Try again!");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setStatus("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded-lg h-32 dark:bg-gray-800 dark:border-gray-600"
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
