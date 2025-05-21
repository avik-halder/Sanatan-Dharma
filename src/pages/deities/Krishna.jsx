import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Krishna from "../../assets/Deities/Krishna/Krishna.jpg";

import KrishnaBirth from "../../assets/Deities/Krishna/Birth.jpg";
import KrishnaMakhanChor from "../../assets/Deities/Krishna/Baby Krishna with Butter.jpg";
import KrishnaSlayingDemons from "../../assets/Deities/Krishna/Krishna fighting with Kaliya Nag.png";
import KrishnaGovardhanHill from "../../assets/Deities/Krishna/Lifting Govardhan Hill.jpg";
import KrishnaRaasLeela from "../../assets/Deities/Krishna/Raas Leela.jpg";
import KrishnaKillingKangsa from "../../assets/Deities/Krishna/Kangsa.jpg";
import KrishnaBhagavadGita from "../../assets/Deities/Krishna/Bhagavad Gita.jpg";
import Vaikuntha from "../../assets/Deities/Krishna/Ascension to Vaikuntha.jpg";

import KrishnaTemple from "../../assets/Deities/Krishna/Dwarkadhish Temple.jpg";

function KrishnaPage() {
  return (
    <div className="min-h-screen mt-16">
      <main>
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
                  Lord Krishna
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-8 text-center md:text-start">
                  The Divine Enchanter and Eighth Avatar of Vishnu
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Krishna is one of the most widely revered and most
                    popular of all Hindu deities. Krishna is worshipped as the
                    eighth avatar of Lord Vishnu and also as the supreme God in
                    his own right. He is the god of protection, compassion,
                    tenderness, and love; and is one of the most popular and
                    widely revered among Indian divinities.
                  </p>
                  <p>
                    Krishna's birthday is celebrated every year by Hindus on
                    Krishna Janmashtami according to the lunisolar Hindu
                    calendar, which falls in late August or early September of
                    the Gregorian calendar. Krishna is usually depicted with a
                    flute in his hand, symbolizing the music that enchants his
                    devotees.
                  </p>
                  <p>
                    The anecdotes and narratives of Krishna's life are generally
                    titled as Krishna Leela. He is a central character in the
                    Mahabharata, the Bhagavata Purana, the Brahma Vaivarta
                    Purana, and the Bhagavad Gita, and is mentioned in many
                    Hindu philosophical, theological, and mythological texts.
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
                  loading="lazy"
                  src={Krishna}
                  alt="Lord Ganesha"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

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
                Life and Legends
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The divine stories of Lord Krishna's life from birth to
                ascension
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Birth and Childhood",
                  description:
                    "Born in a prison to Devaki and Vasudeva in Mathura, Krishna was smuggled to Gokul to be raised by foster parents Yashoda and Nanda to escape his uncle Kangsa who sought to kill him.",
                  image: KrishnaBirth,
                },
                {
                  title: "Butter Thief",
                  description:
                    "As a child, Krishna was known for his mischievous pranks, particularly stealing butter (makhan) from homes in the village, earning him the nickname 'Makhan Chor' (butter thief).",
                  image: KrishnaMakhanChor,
                },
                {
                  title: "Slaying of Demons",
                  description:
                    "Throughout his childhood, Krishna slayed many demons sent by Kangsa, including Putana, Trinavarta, Aghasura, and Bakasura, showcasing his divine powers from an early age.",
                  image: KrishnaSlayingDemons,
                },
                {
                  title: "Lifting Govardhan Hill",
                  description:
                    "When Lord Indra sent torrential rains to flood Vrindavan, Krishna lifted the entire Govardhan Hill on his little finger to provide shelter to the villagers and their cattle.",
                  image: KrishnaGovardhanHill,
                },
                {
                  title: "Raas Leela",
                  description:
                    "The divine dance performed by Krishna with the gopis (cowherd girls) of Vrindavan, symbolizing the loving relationship between God and the devotee's soul.",
                  image: KrishnaRaasLeela,
                },
                {
                  title: "Killing of Kangsa",
                  description:
                    "Krishna fulfilled the prophecy by killing his evil uncle Kangsa and freeing his parents and the people of Mathura from his tyrannical rule.",
                  image: KrishnaKillingKangsa,
                },
                {
                  title: "The Bhagavad Gita",
                  description:
                    "On the battlefield of Kurukshetra, Krishna served as Arjuna's charioteer and imparted the eternal wisdom of the Bhagavad Gita, a cornerstone of Hindu philosophy.",
                  image: KrishnaBhagavadGita,
                },
                {
                  title: "Ascension to Vaikuntha",
                  description:
                    "After fulfilling his divine mission on Earth, Krishna returned to his celestial abode Vaikuntha, leaving behind his teachings and the legacy of his divine play (leela).",
                  image: Vaikuntha,
                },
              ].map((story, index) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      loading="lazy"
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-orange-700 mb-1">
                      {story.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{story.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Symbolism and Attributes
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The divine symbols and attributes associated with Lord Krishna
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Flute (Bansuri)",
                  description:
                    "Krishna's flute represents the divine call that awakens the soul from material slumber. Its enchanting music symbolizes the attraction of the divine that draws the soul towards God.",
                  icon: "🪈",
                },
                {
                  title: "Peacock Feather",
                  description:
                    "The peacock feather adorning Krishna's crown symbolizes beauty, grace, and the unpredictable nature of life. It also represents the eye of wisdom that sees beyond the material world.",
                  icon: "🦚",
                },
                {
                  title: "Blue Skin",
                  description:
                    "Krishna's blue complexion symbolizes the infinite, the boundless, like the sky and ocean. It represents divine consciousness, depth, and the all-encompassing nature of the Supreme Being.",
                  icon: "🧞",
                },
                {
                  title: "Yellow Garments",
                  description:
                    "The yellow or golden garments (pitambara) worn by Krishna symbolize the earth element and prosperity. Yellow also represents knowledge and learning in Hindu tradition.",
                  icon: "🧥",
                },
                {
                  title: "Sudarshana Chakra",
                  description:
                    "The discus weapon held by Krishna symbolizes the mind, which must be controlled and directed properly. It also represents time, which is ever-revolving yet under divine control.",
                  icon: "🛞",
                },
                {
                  title: "Cow",
                  description:
                    "Krishna is often depicted with cows, symbolizing wealth, nurturing, and the earth's abundance. As a cowherd (Govinda), Krishna represents the divine protector and sustainer.",
                  icon: "🐄",
                },
              ].map((symbol, index) => (
                <motion.div
                  key={symbol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-4xl mb-4">{symbol.icon}</div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">
                    {symbol.title}
                  </h3>
                  <p className="text-gray-700">{symbol.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
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
                  Worship and Significance
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Krishna is worshipped throughout India and across the
                    world. His teachings in the Bhagavad Gita have inspired
                    millions and continue to provide spiritual guidance to
                    seekers of truth.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Temples:
                    </span>{" "}
                    Numerous temples are dedicated to Krishna across India and
                    worldwide. Some of the most famous include the Krishna
                    Janmabhoomi Temple in Mathura, the Dwarkadhish Temple in
                    Dwarka, the Banke Bihari Temple in Vrindavan, and the ISKCON
                    temples around the world.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Festivals:
                    </span>{" "}
                    Krishna Janmashtami, celebrating Krishna's birth, is one of
                    the most important festivals. Other celebrations include
                    Radha Ashtami, Govardhan Puja, and Holi, which is
                    particularly associated with Krishna's playful nature.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Bhakti Movement:
                    </span>{" "}
                    Krishna worship is central to the Bhakti (devotional)
                    movement in Hinduism, which emphasizes personal devotion and
                    love for God over ritual and caste distinctions. The Hare
                    Krishna movement, founded by Srila Prabhupada, has spread
                    Krishna consciousness globally.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Philosophical Significance:
                    </span>{" "}
                    Krishna's teachings in the Bhagavad Gita cover various
                    philosophical systems including karma yoga (the path of
                    action), jnana yoga (the path of knowledge), and bhakti yoga
                    (the path of devotion), offering multiple approaches to
                    spiritual realization.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/deities">
                    <button className="px-4 py-2 border border-orange-600 text-orange-600 hover:bg-orange-50 rounded-md transition">
                      Back to Deities
                    </button>
                  </Link>
                  <Link to="/deities/hanuman">
                    <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition">
                      Explore Lord Hanuman
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2 relative h-[500px] rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  loading="lazy"
                  src={KrishnaTemple}
                  alt="Krishna Temple"
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

export default KrishnaPage;
