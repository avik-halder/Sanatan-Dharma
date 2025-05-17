import React from "react";
import { motion } from "framer-motion";
import temple from "../assets/temple.webp";

export default function AboutPage() {
  return (
    <div className="min-h-screen mt-16">
      <main>
        <section className="text-center pt-16">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-800">
            ॐ About Hinduism 卐
          </h1>
          <p className="mt-4 text-orange-700 max-w-sm sm:max-w-2xl mx-auto">
            Discover the world's oldest living religion and its profound wisdom.
          </p>
        </section>

        {/* What is Hinduism Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6">
                  What is Hinduism?
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Hinduism, also known as Sanātana Dharma ("the eternal way"),
                    is an Indian religion and dharma, or way of life. It is the
                    world's third-largest religion, with over 1.2 billion
                    followers.
                  </p>
                  <p>
                    The word "Hindu" is an exonym, and while Hinduism has been
                    called the oldest religion in the world, many practitioners
                    refer to their religion as Sanātana Dharma, which refers to
                    the idea that its origins lie beyond human history, as
                    revealed in the Hindu texts.
                  </p>
                  <p>
                    Hinduism is a diverse system of thought marked by a range of
                    philosophies and shared concepts, rituals, cosmological
                    systems, pilgrimage sites, and shared textual sources.
                  </p>
                </div>
                <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded">
                  Learn More
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={temple}
                  alt="Hindu Temple"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Beliefs Section */}
        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Core Beliefs and Principles
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Hinduism embraces a diverse range of philosophies and practices,
                but several core principles are widely shared.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Dharma",
                  description:
                    "The concept of cosmic order, righteousness, and duty that governs individual conduct and social order.",
                  icon: "🕉️",
                },
                {
                  title: "Karma",
                  description:
                    "The law of cause and effect, where one's actions in this and previous lives determine future experiences.",
                  icon: "⚖️",
                },
                {
                  title: "Samsara",
                  description:
                    "The continuous cycle of birth, life, death, and rebirth that is influenced by one's karma.",
                  icon: "🔄",
                },
                {
                  title: "Moksha",
                  description:
                    "Liberation from the cycle of rebirth and the ultimate goal of human existence.",
                  icon: "✨",
                },
                {
                  title: "Brahman",
                  description:
                    "The ultimate reality, the universal principle and supreme existence, the cosmic soul.",
                  icon: "🌌",
                },
                {
                  title: "Atman",
                  description:
                    "The individual soul or self that is eternal and inherently pure consciousness.",
                  icon: "💫",
                },
              ].map((belief, index) => (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-4xl mb-4">{belief.icon}</div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-gray-700">{belief.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Historical Timeline
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The rich history of Hinduism spans thousands of years, evolving
                through various periods and influences.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-orange-200"></div>

              {[
                {
                  period: "5000-1500 BCE",
                  title: "Vedic Period",
                  description:
                    "Composition of the Vedas, the oldest sacred texts. Development of early Vedic religion and rituals.",
                },
                {
                  period: "800-200 BCE",
                  title: "Upanishadic Period",
                  description:
                    "Composition of the Upanishads, exploring philosophical concepts like Brahman, Atman, and Moksha.",
                },
                {
                  period: "500 BCE-500 CE",
                  title: "Epic and Puranic Period",
                  description:
                    "Composition of the Mahabharata, Ramayana, and early Puranas. Development of devotional worship.",
                },
                {
                  period: "500-1500 CE",
                  title: "Medieval Period",
                  description:
                    "Rise of Bhakti movement emphasizing devotion. Development of various philosophical schools.",
                },
                {
                  period: "1500-1947 CE",
                  title: "Colonial Period",
                  description:
                    "Encounter with Western ideas. Hindu reform movements and nationalist interpretations of Hinduism.",
                },
                {
                  period: "1947-Present",
                  title: "Modern Period",
                  description:
                    "Hinduism in independent India and global diaspora. New interpretations and global spread.",
                },
              ].map((era, index) => (
                <motion.div
                  key={era.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-12 ${
                    index % 2 === 0
                      ? "md:ml-auto md:pl-16 md:pr-0"
                      : "md:mr-auto md:pr-16 md:pl-0"
                  } md:w-1/2 pl-10`}
                >
                  <div className="absolute top-5 left-0 md:left-auto md:right-full md:mr-8 h-4 w-4 rounded-full bg-orange-500"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-2">
                      {era.period}
                    </span>
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {era.title}
                    </h3>
                    <p className="text-gray-700">{era.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
