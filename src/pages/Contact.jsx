import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert(
        "Message sent! Thank you for contacting us. We'll respond shortly."
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Page Header */}
        <section className="py-16 mt-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Contact Us
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Get in touch with our team for questions, feedback, or support
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-700 mb-8">
                  Have questions about Hindu traditions, practices, or
                  resources? Want to provide feedback or suggest content for our
                  website? We'd love to hear from you! Fill out the form, and
                  our team will get back to you as soon as possible.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-700">Email</h3>
                      <p className="text-gray-700">
                        sanatandharma.info.contact@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-700">Phone</h3>
                      <p className="text-gray-700">+880 1798709761</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-700">Address</h3>
                      <p className="text-gray-700">Faridpur Sadar, Faridpur</p>
                      <p className="text-gray-700">Bangladesh</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-700">Hours</h3>
                      <p className="text-gray-700">Always - Open</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-orange-100 border-[1px] border-orange-500 p-6 rounded-lg shadow-md"
                >
                  <h2 className="text-2xl font-bold text-orange-800 mb-6">
                    Send a Message
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full p-3 rounded-md border border-orange-500 bg-orange-50"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-md border border-orange-500 bg-orange-50"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => handleSelectChange(e.target.value)}
                        className="w-full p-3 rounded-md border border-orange-500 bg-orange-50"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows="6"
                        className="w-full p-3 rounded-md border border-orange-500 bg-orange-50"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section className="py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Find answers to common questions about Hinduism and our
                resources
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "What is Hinduism?",
                  answer:
                    "Hinduism is an Indian religion and dharma, or way of life. It is the world's third-largest religion, with over 1.2 billion followers. Hinduism is known for its diverse system of thought with a range of philosophies and shared concepts, rituals, cosmological systems, and shared textual sources.",
                },
                {
                  question: "How old is Hinduism?",
                  answer:
                    "Hinduism is often referred to as the oldest living religion in the world, with roots dating back to at least 1500 BCE. However, many practitioners refer to their religion as Sanātana Dharma, which means 'the eternal way,' suggesting that its origins lie beyond human history.",
                },
                {
                  question: "What are the main beliefs of Hinduism?",
                  answer:
                    "While Hinduism encompasses diverse beliefs, some core concepts include: Dharma (ethical and moral duties), Karma (the law of cause and effect), Samsara (the cycle of rebirth), and Moksha (liberation from the cycle of rebirth). Hindus also believe in the existence of Brahman (the ultimate reality) and Atman (the individual soul).",
                },
                {
                  question: "Do Hindus worship multiple gods?",
                  answer:
                    "Hinduism is often misunderstood as polytheistic, but it's more accurately described as henotheistic (worshiping one deity while acknowledging others) or even monistic (believing in one ultimate reality). Many Hindus believe that the various deities are different manifestations or aspects of the one supreme reality, Brahman.",
                },
                {
                  question: "What are the sacred texts of Hinduism?",
                  answer:
                    "Hinduism has numerous sacred texts, including the Vedas (the oldest and most authoritative), Upanishads (philosophical treatises), Bhagavad Gita (part of the epic Mahabharata), Ramayana (epic poem), and Puranas (ancient tales of gods and goddesses).",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6 bg-orange-50 border-[1px] border-orange-500 p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-lg font-bold text-orange-700 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
