import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        <form
          className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-teal-500 py-3 font-semibold rounded-md hover:bg-teal-600 transition-colors"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          You can also email me directly at{" "}
          <span className="text-teal-400 font-semibold">
            vinukrishna05@gmail.com
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
