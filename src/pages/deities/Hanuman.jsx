import React from "react";
import { motion } from "framer-motion";

import Hanuman from "../../assets/Deities/Hanuman/hanuman2.jpg";

import HanumanTemple from "../../assets/Deities/Hanuman/Jakhu Temple_Hanuman Temple.webp";

import Childhood from "../../assets/Deities/Hanuman/Childhood and the Sun.jpg";
import MeetingRama from "../../assets/Deities/Hanuman/Meeting Lord Rama.jpg";
import LeapToLanka from "../../assets/Deities/Hanuman/Leap to Lanka.jpg";
import FindingSita from "../../assets/Deities/Hanuman/Finding Sita.jpg";
import BurningLanka from "../../assets/Deities/Hanuman/Burning of Lanka.jpg";
import SanjeevaniMountain from "../../assets/Deities/Hanuman/Sanjeevani Mountain.jpg";

export default function HanumanPage() {
  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* First Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  Lord Hanuman
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-8 text-center md:text-start">
                  The Divine Monkey God, Embodiment of Devotion and Strength
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Hanuman, also known as Anjaneya, Maruti, Pawanputra,
                    and by many other names, is one of the most beloved and
                    worshipped deities in Hinduism. He is revered for his
                    unwavering devotion to Lord Rama, incredible physical
                    strength, profound wisdom, and selfless service.
                  </p>
                  <p>
                    Depicted as a monkey with a human-like body, Hanuman is
                    considered an avatar (incarnation) of Lord Shiva. He is the
                    son of Anjana and Kesari, with the wind-god Vayu playing a
                    role in his birth, thus giving him the name Pawanputra (son
                    of the wind).
                  </p>
                  <p>
                    Hanuman's most significant role appears in the Hindu epic
                    Ramayana, where he serves as Lord Rama's ardent devotee and
                    helps in the rescue of Rama's wife Sita from the demon king
                    Ravana. His extraordinary feats during this mission,
                    including leaping across the ocean to Lanka, finding Sita,
                    and later bringing an entire mountain with life-saving
                    herbs, showcase his divine abilities and unwavering
                    dedication.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={Hanuman}
                  alt="Lord Hanuman"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divine Feats Section */}
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
                Divine Feats and Stories
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The legendary accomplishments and tales of Lord Hanuman
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Childhood and the Sun",
                  description:
                    "As a child, Hanuman mistook the sun for a ripe fruit and leaped to catch it. This alarmed the gods, and Indra struck him with a thunderbolt, injuring his chin (hanu), thus giving him the name 'Hanuman'. Lord Brahma and other gods, impressed by his courage, blessed him with numerous powers and gifts.",
                  image: Childhood,
                },
                {
                  title: "Meeting Lord Rama",
                  description:
                    "Hanuman first met Lord Rama and his brother Lakshmana when they were searching for Sita in the forest. Disguised as a Brahmin, Hanuman tested their character before revealing his true form and pledging his service to their cause.",
                  image: MeetingRama,
                },
                {
                  title: "Leap to Lanka",
                  description:
                    "When the search party needed to cross the ocean to reach Lanka, Hanuman took a mighty leap, expanding his body to an enormous size. He overcame various obstacles during this journey, including the demoness Surasa and Simhika, showcasing his intelligence and strength.",
                  image: LeapToLanka,
                },
                {
                  title: "Finding Sita",
                  description:
                    "In Lanka, Hanuman shrunk himself to a tiny size to search for Sita undetected. He found her in Ashoka Vatika, identified himself as Rama's messenger, and offered her reassurance and Rama's ring as proof of his identity.",
                  image: FindingSita,
                },
                {
                  title: "Burning of Lanka",
                  description:
                    "After being captured by Ravana's forces, Hanuman allowed himself to be bound and brought before the demon king. When Ravana ordered his tail to be set on fire, Hanuman expanded his tail and used it to set much of Lanka ablaze before escaping.",
                  image: BurningLanka,
                },
                {
                  title: "Bringing the Sanjeevani Mountain",
                  description:
                    "When Lakshmana was severely wounded in battle, Hanuman was sent to fetch the life-saving Sanjeevani herb from the Himalayas. Unable to identify the specific herb, he uprooted and carried the entire mountain back to the battlefield, saving Lakshmana's life.",
                  image: SanjeevaniMountain,
                },
              ].map((story, index) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-60">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-700">{story.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Symbolism Section */}
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
                Symbolism and Virtues
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The divine qualities and symbolic attributes of Lord Hanuman
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Unwavering Devotion",
                  description:
                    "Hanuman's absolute dedication to Lord Rama symbolizes the ideal relationship between a devotee and God. His devotion is so complete that it is said he resides in Rama's heart, and Rama in his.",
                  icon: "🙏",
                },
                {
                  title: "Extraordinary Strength",
                  description:
                    "Hanuman's physical prowess represents the strength that comes from a pure heart and righteous purpose. His ability to change size symbolizes how devotion can make one transcend limitations.",
                  icon: "💪",
                },
                {
                  title: "Perfect Celibacy",
                  description:
                    "As a lifelong celibate (brahmachari), Hanuman represents the conservation of vital energy and the channeling of it towards spiritual goals and selfless service.",
                  icon: "✨",
                },
                {
                  title: "Profound Wisdom",
                  description:
                    "Despite his monkey form, Hanuman is highly learned in the Vedas and various sciences. He symbolizes how knowledge, when combined with devotion, leads to true wisdom.",
                  icon: "📚",
                },
                {
                  title: "Selfless Service",
                  description:
                    "Hanuman's tireless service to Rama exemplifies seva (selfless service) as a spiritual path. He never seeks rewards or recognition for his extraordinary deeds.",
                  icon: "🤲",
                },
                {
                  title: "Humility",
                  description:
                    "Despite his immense powers, Hanuman remains humble and never boasts about his achievements. This represents how true spiritual strength is accompanied by humility.",
                  icon: "🧎",
                },
              ].map((virtue, index) => (
                <motion.div
                  key={virtue.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-4xl mb-4">{virtue.icon}</div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">
                    {virtue.title}
                  </h3>
                  <p className="text-gray-700">{virtue.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Worship Section */}
        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6">
                  Worship and Significance
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Hanuman is one of the most widely worshipped deities in
                    Hinduism, revered for his strength, devotion, and ability to
                    ward off evil and grant protection.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Hanuman Jayanti:
                    </span>{" "}
                    The birthday of Lord Hanuman is celebrated on the full moon
                    day of the Hindu lunar month of Chaitra (March-April).
                    Devotees visit temples, recite the Hanuman Chalisa, and
                    offer prayers seeking his blessings for strength, wisdom,
                    and devotion.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Hanuman Chalisa:
                    </span>{" "}
                    A 40-verse devotional hymn composed by Tulsidas, it is one
                    of the most popular prayers recited by devotees of Hanuman.
                    It describes his virtues, powers, and unwavering devotion to
                    Lord Rama.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Temples:
                    </span>{" "}
                    Numerous temples throughout India are dedicated to Hanuman.
                    Some of the most famous include the Hanuman Temple in
                    Connaught Place, Delhi; the Sankat Mochan Hanuman Temple in
                    Varanasi; and the Hanuman Garhi in Ayodhya.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Tuesday Worship:
                    </span>{" "}
                    Tuesday is considered especially sacred for Hanuman worship.
                    Devotees often observe fasts, wear red (a color associated
                    with Hanuman), and offer sindoor (vermilion) to Hanuman
                    idols on this day.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href="/deities">
                    <button className="border border-orange-600 text-orange-600 px-4 py-2 rounded-md">
                      Back to Deities
                    </button>
                  </a>
                  <a href="/deities/rama">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md">
                      Explore Lord Rama
                    </button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-auto rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={HanumanTemple}
                  alt="Hanuman Temple"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
