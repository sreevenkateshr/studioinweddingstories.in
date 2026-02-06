"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          message: "",
        });
      } else {
        setError(data.error || "Failed to send message");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ===== FEATURED BANNER ===== */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src="/assets/banner 03.webp"
          alt="Featured Banner"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
            Featured Blog
          </h1>
          <p className="text-sm md:text-xl text-gray-200 max-w-2xl">
            Discover inspiring stories, behind-the-scenes creativity, and photography tips to level up your visual journey.
          </p>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-3xl mx-auto text-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-lg mb-10 text-center">
            Have questions or want to work with us? Fill out the form below — we’ll respond within 24 hours.
          </p>

          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black text-black transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black text-black transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black text-black transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black text-black transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-black text-black transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
  