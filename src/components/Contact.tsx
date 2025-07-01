"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id='contact' className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-12 text-center'>Get in Touch</h2>
        <div className='max-w-xl mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700'
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium mb-2'>
                Message
              </label>
              <textarea
                id='message'
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700'
              />
            </div>
            <button
              type='submit'
              disabled={status === "sending"}
              className='w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50'>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className='text-green-600 text-center'>
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className='text-red-600 text-center'>
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

