import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imageLinks from "../utils/ImageLinks";

export default function PracticesPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Page Header */}
        <section className="py-10 lg:py-16 mt-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6 lg:mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-orange-800 mb-4">
                Paths to Spiritual Realization
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Hinduism offers multiple paths to spiritual realization, each
                suited to different temperaments and inclinations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Bhakti Yoga",
                  description:
                    "The path of devotion and love, focusing on worship and surrender to a personal deity",
                  icon: "❤️",
                },
                {
                  name: "Jnana Yoga",
                  description:
                    "The path of knowledge and wisdom, focusing on intellectual inquiry and self-analysis",
                  icon: "🧠",
                },
                {
                  name: "Karma Yoga",
                  description:
                    "The path of selfless action, focusing on performing one's duties without attachment to results",
                  icon: "🙌",
                },
                {
                  name: "Raja Yoga",
                  description:
                    "The path of meditation and mental control, focusing on disciplining the mind",
                  icon: "🧘",
                },
              ].map((path, index) => (
                <motion.div
                  key={path.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border-[1px] border-orange-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-4"
                >
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">{path.icon}</div>
                    <h3 className="text-xl text-orange-700">{path.name}</h3>
                    <p className="text-gray-700 mt-2">{path.description}</p>
                    <Link to={"/practices/yoga"}>
                      <button className="text-orange-600 mt-4 p-0 underline">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Practices Section */}
        <section className="py-10 lg:py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Daily Practices
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Traditional daily practices that form the foundation of Hindu
                spiritual life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Puja",
                  description:
                    "Ritual worship involving offerings to deities, often performed at home or in temples",
                  steps: [
                    "Preparation of offerings",
                    "Invocation of the deity",
                    "Offering of water, flowers, incense, and food",
                    "Recitation of mantras",
                    "Aarti (waving of lamps)",
                    "Receiving blessings",
                  ],
                  image: imageLinks.puja2,
                  link: "/practices/puja",
                },
                {
                  name: "Meditation",
                  description:
                    "Practice of focusing the mind on a deity, mantra, or concept to achieve mental clarity",
                  steps: [
                    "Finding a quiet space",
                    "Sitting in a comfortable posture",
                    "Focusing on breath",
                    "Concentration on an object or mantra",
                    "Maintaining awareness",
                    "Gradual deepening of practice",
                  ],
                  image: imageLinks.meditation2,
                  link: "/practices/meditation",
                },
                {
                  name: "Mantra Chanting",
                  description:
                    "Repetition of sacred sounds, words, or verses to transform consciousness",
                  steps: [
                    "Learning the correct pronunciation",
                    "Understanding the meaning",
                    "Setting an intention",
                    "Rhythmic repetition",
                    "Using mala beads for counting",
                    "Maintaining focus and devotion",
                  ],
                  image: imageLinks.mantra2,
                  link: "/practices/mantra-chanting",
                },
              ].map((practice, index) => (
                <motion.div
                  key={practice.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 rounded-lg overflow-hidden shadow-md"
                >
                  <div className="relative h-52">
                    <img
                      loading="lazy"
                      src={practice.image || "/placeholder.svg"}
                      alt={practice.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {practice.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{practice.description}</p>
                    <h4 className="font-medium text-orange-600 mb-2">
                      Key Steps:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {practice.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                    <Link to={practice.link}>
                      <button className="text-orange-600 mt-4 p-0 underline">
                        Learn more about {practice.name}
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Yoga Practices Section */}
        <section className="py-10 lg:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 text-center lg:text-left">
                  Yoga: Union of Body, Mind, and Spirit
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Yoga is one of the most well-known practices that originated
                    in ancient India. The word "yoga" comes from the Sanskrit
                    root "yuj," meaning to join or unite, symbolizing the union
                    of individual consciousness with universal consciousness.
                  </p>
                  <p>
                    While modern Western yoga often focuses on physical postures
                    (asanas), traditional yoga encompasses a comprehensive
                    system of physical, mental, and spiritual practices designed
                    to achieve a state of permanent peace.
                  </p>
                  <p>
                    The sage Patanjali systematized yoga practice in his Yoga
                    Sutras, outlining the eight limbs of yoga: yama (ethical
                    standards), niyama (self-discipline), asana (postures),
                    pranayama (breath control), pratyahara (withdrawal of
                    senses), dharana (concentration), dhyana (meditation), and
                    samadhi (enlightenment).
                  </p>
                </div>
                <Link to={"/practices/yoga"}>
                  <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded">
                    Explore Yoga Practices
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4 order-1 lg:order-2"
              >
                {[
                  { name: "Hatha Yoga", image: imageLinks.hatha },
                  { name: "Kundalini Yoga", image: imageLinks.kundalini },
                  { name: "Bhakti Yoga", image: imageLinks.bhakti },
                  { name: "Jnana Yoga", image: imageLinks.jnana },
                ].map((yogaType, index) => (
                  <motion.div
                    key={yogaType.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="relative h-48 rounded-lg overflow-hidden group"
                  >
                    <img
                      loading="lazy"
                      src={yogaType.image || "/placeholder.svg"}
                      alt={yogaType.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex justify-end items-start">
                      <p className="text-orange-100 font-medium p-3 pr-4">
                        {yogaType.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
