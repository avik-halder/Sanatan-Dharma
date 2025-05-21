import { motion } from "framer-motion";
import { useState } from "react";

import meditation from "../../assets/meditation2.webp";
import meditation2 from "../../assets/Practices/Meditation/meditation.jpg";
import trataka from "../../assets/Practices/Meditation/Trataka Meditation.png";
import hamsa from "../../assets/Practices/Meditation/Hamsa Meditation.jpg";
import chakra from "../../assets/Practices/Meditation/Chakra Meditation2.jpg";
import kundalini from "../../assets/Practices/Meditation/Kundalini Meditation.jpg";
import transcendental from "../../assets/Practices/Meditation/Transcendental Meditation.jpg";
import yogaNidra from "../../assets/Practices/Meditation/Yoga Nidra.jpg";

const MeditationPage = () => {
  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Introduction Section */}
        <section className="py-10 lg:py-16 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 order-2 lg:order-1"
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  Meditation
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  The ancient practice of training the mind for spiritual
                  awareness and inner peace
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Meditation (Dhyana) is a profound spiritual practice that
                    has been central to Hindu traditions for thousands of years.
                    It is the seventh limb of Patanjali's eight-limbed path of
                    yoga and is considered essential for spiritual growth and
                    self-realization.
                  </p>
                  <p>
                    In its essence, meditation is the practice of training the
                    mind to focus and redirect thoughts, ultimately leading to a
                    heightened state of awareness and inner peace. It involves
                    turning the attention inward, away from the distractions of
                    the external world, to explore the nature of consciousness
                    itself.
                  </p>
                  <p>
                    The ancient Hindu texts, including the Upanishads, Bhagavad
                    Gita, and Yoga Sutras, describe meditation as a means to
                    understand the true nature of reality beyond the illusions
                    of the material world. Through regular practice, one can
                    transcend the limitations of the ego and experience the
                    unity of individual consciousness (Atman) with universal
                    consciousness (Brahman).
                  </p>
                  <p>
                    While meditation techniques vary widely across different
                    Hindu traditions, they all share the common goal of stilling
                    the fluctuations of the mind to reveal the unchanging
                    reality that lies beneath the surface of our thoughts and
                    perceptions.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 order-1 lg:order-2"
              >
                <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    loading="lazy"
                    src={meditation}
                    alt="Meditation Practice"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <p className="text-white text-sm">
                      A practitioner in deep meditation posture
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Sacred Quote */}
            <motion.div
              className="mt-16 p-8 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-500 rounded-xl shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-xl font-medium text-orange-800 italic mb-2">
                "When meditation is mastered, the mind is unwavering like the
                flame of a lamp in a windless place."
              </blockquote>
              <cite className="text-orange-600">— Bhagavad Gita 6.19</cite>
            </motion.div>
          </div>
        </section>

        {/* Types of Meditation Section */}
        <section className="py-8 lg:py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 relative inline-block mx-auto">
                Types of Meditation
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Hindu traditions offer various meditation techniques to suit
                different temperaments and spiritual goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Trataka (Focused Gazing)",
                  description:
                    "A practice of fixing the gaze on a single point, such as a candle flame, symbol, or deity image, to develop concentration and mental stability.",
                  benefits: [
                    "Improves concentration",
                    "Enhances visual memory",
                    "Strengthens eye muscles",
                    "Calms the mind",
                    "Develops willpower",
                  ],
                  image: trataka,
                },
                {
                  name: "So'ham/Hamsa Meditation",
                  description:
                    "A meditation that synchronizes with the natural breath, mentally repeating 'So' with inhalation and 'Ham' with exhalation, representing 'I am That' or the unity with the divine.",
                  benefits: [
                    "Harmonizes with natural breath rhythm",
                    "Creates mental tranquility",
                    "Deepens awareness of breath",
                    "Connects to universal consciousness",
                    "Accessible for beginners",
                  ],
                  image: hamsa,
                },
                {
                  name: "Chakra Meditation",
                  description:
                    "Focuses on the energy centers (chakras) along the spine, using visualization, mantras, and breath to activate and balance these centers.",
                  benefits: [
                    "Balances energy centers",
                    "Removes energy blockages",
                    "Enhances vitality",
                    "Promotes holistic healing",
                    "Awakens spiritual energy",
                  ],
                  image: chakra,
                },
                {
                  name: "Kundalini Meditation",
                  description:
                    "Aims to awaken the dormant spiritual energy (kundalini) at the base of the spine and guide it upward through the chakras to achieve higher consciousness.",
                  benefits: [
                    "Awakens spiritual energy",
                    "Expands consciousness",
                    "Increases energy and vitality",
                    "Enhances intuition",
                    "Promotes spiritual transformation",
                  ],
                  image: kundalini,
                },
                {
                  name: "Transcendental Meditation",
                  description:
                    "A technique that uses a personally assigned mantra repeated silently to transcend ordinary thinking and experience pure awareness.",
                  benefits: [
                    "Reduces stress and anxiety",
                    "Promotes deep relaxation",
                    "Enhances clarity of mind",
                    "Improves brain function",
                    "Accessible and systematic approach",
                  ],
                  image: transcendental,
                },
                {
                  name: "Yoga Nidra (Yogic Sleep)",
                  description:
                    "A state of conscious deep sleep where the practitioner remains aware while the body and mind are completely relaxed.",
                  benefits: [
                    "Induces deep relaxation",
                    "Reduces stress and anxiety",
                    "Improves sleep quality",
                    "Enhances creativity",
                    "Facilitates healing",
                  ],
                  image: yogaNidra,
                },
              ].map((technique, index) => (
                <motion.div
                  key={technique.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-orange-100 group"
                >
                  <div className="relative h-52">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <img
                      loading="lazy"
                      src={technique.image}
                      alt={technique.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-20">
                      Technique {index + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {technique.name}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {technique.description}
                    </p>
                    <h4 className="font-medium text-orange-600 mb-2">
                      Benefits:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                      {technique.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="group-hover:translate-x-1 transition-transform duration-300 delay-75"
                        >
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="pb-8 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 relative text-center sm:text-start mt-4 sm:mt-0">
                  Getting Started with Meditation
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Beginning a meditation practice can be simple and accessible
                    to everyone, regardless of background or experience. Here
                    are some guidelines to help you start your meditation
                    journey:
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: "1. Create a Sacred Space",
                        description:
                          "Designate a quiet, clean, and comfortable area for your practice. You might add meaningful objects like candles, incense, or images that inspire you spiritually.",
                      },
                      {
                        title: "2. Choose a Comfortable Posture",
                        description:
                          "Sit with your spine straight, either on a cushion on the floor or in a chair. The key is to be comfortable yet alert, with your body stable and balanced.",
                      },
                      {
                        title: "3. Start with Short Sessions",
                        description:
                          "Begin with just 5-10 minutes daily and gradually increase the duration as you become more comfortable with the practice.",
                      },
                      {
                        title: "4. Focus on Your Breath",
                        description:
                          "A simple way to begin is by paying attention to your natural breath. Notice the sensation of breathing in and out, using it as an anchor for your awareness.",
                      },
                      {
                        title: "5. Be Patient and Persistent",
                        description:
                          "The mind will wander—this is normal. When you notice your thoughts drifting, gently bring your attention back to your breath or chosen focus without judgment.",
                      },
                    ].map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-orange-100 border border-orange-500 p-4 rounded-xl border border-orange-100 shadow-sm"
                      >
                        <h3 className="font-bold text-orange-700 mb-2">
                          {step.title}
                        </h3>
                        <p>{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <motion.a
                    href="/practices"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-md">
                      Back to Practices
                    </button>
                  </motion.a>
                  <motion.a
                    href="/practices/mantra-chanting"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md">
                      Explore Mantra Chanting
                    </button>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden top-10"
                >
                  <img
                    loading="lazy"
                    src={meditation2}
                    alt="Meditation"
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-medium p-3">Meditation</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MeditationPage;
