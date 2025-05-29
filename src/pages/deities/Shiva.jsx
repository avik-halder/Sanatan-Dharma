import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

export default function ShivaPage() {
  return (
    <div className="min-h-screen mt-16">
      <main>
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center lg:text-start">
                  Lord Shiva
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-8 text-center lg:text-start">
                  The Destroyer and Transformer of the Universe
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Shiva is one of the principal deities of Hinduism and a
                    member of the Trimurti (the Hindu Trinity) along with Brahma
                    and Vishnu. Shiva is revered as the destroyer and
                    transformer of the universe, representing the cycle of death
                    and rebirth that is essential for renewal and regeneration.
                  </p>
                  <p>
                    Shiva embodies contradictory qualities, reflecting the
                    complex nature of existence. He is both the fierce destroyer
                    and the benevolent ascetic, the cosmic dancer and the
                    motionless meditator, the family man and the solitary yogi.
                    This paradoxical nature makes Shiva one of the most
                    fascinating and multifaceted deities in Hindu tradition.
                  </p>
                  <p>
                    Typically depicted with a blue throat (from swallowing
                    poison to save the universe), a third eye (representing
                    spiritual wisdom), a crescent moon in his matted hair
                    (symbolizing time cycles), the Ganges flowing from his locks
                    (representing purification), and adorned with a snake around
                    his neck (signifying kundalini energy), Shiva's iconography
                    is rich with symbolic meaning.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative lg:h-[500px] rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2"
              >
                <img
                  loading="lazy"
                  src={imageLinks.Shiva}
                  alt="Lord Shiva"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Symbolic Elements
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Understanding the profound symbolism in Lord Shiva's
                representation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Third Eye",
                  description:
                    "Represents spiritual knowledge and insight. When opened, it is said to emit fire that can destroy all evil and ignorance.",
                  icon: "👁️",
                },
                {
                  title: "Crescent Moon",
                  description:
                    "Symbolizes the measure of time and Shiva's control over it. It also represents beauty and the ever-changing nature of the cosmos.",
                  icon: "🌙",
                },
                {
                  title: "Matted Hair",
                  description:
                    "Represents Shiva's ascetic nature and his rejection of worldly vanity. The flowing locks also hold the sacred river Ganges.",
                  icon: "🪢",
                },
                {
                  title: "Blue Throat",
                  description:
                    "Called 'Neelakantha' (blue-throated one), it resulted from Shiva drinking the deadly poison Halahala during the churning of the cosmic ocean to save the universe.",
                  icon: "💙",
                },
                {
                  title: "Snake Necklace",
                  description:
                    "Represents kundalini energy, the spiritual power that lies dormant within humans until awakened. It also symbolizes Shiva's mastery over death and fear.",
                  icon: "🐍",
                },
                {
                  title: "Trishul (Trident)",
                  description:
                    "Represents the three gunas (qualities of nature): sattva (purity), rajas (passion), and tamas (darkness), as well as Shiva's role in creation, preservation, and destruction.",
                  icon: "🔱",
                },
              ].map((symbol, index) => (
                <motion.div
                  key={symbol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow  text-center"
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

        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Forms of Shiva
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Lord Shiva is worshipped in various forms, each representing
                different aspects of his divine nature
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Nataraja",
                  description:
                    "The Lord of Dance, performing the cosmic dance of creation and destruction.",
                  image: imageLinks.nataraja,
                },
                {
                  name: "Lingam",
                  description:
                    "The abstract representation of Shiva, symbolizing the infinite nature of the divine.",
                  image: imageLinks.lingam_shiva,
                },
                {
                  name: "Dakshinamurthy",
                  description:
                    "The supreme guru, facing south, imparting knowledge to his disciples through silence.",
                  image: imageLinks.dakshinamurthy,
                },
                {
                  name: "Ardhanarishvara",
                  description:
                    "Half male and half female form, representing the unity of masculine and feminine energies.",
                  image: imageLinks.ardhanarishvara,
                },
                {
                  name: "Bhairava",
                  description:
                    "The fierce manifestation of Shiva, associated with annihilation and the passage of time.",
                  image: imageLinks.bhairava,
                },
                {
                  name: "Pashupatinath",
                  description:
                    "The Lord of All Beings, protector of animals and all living creatures.",
                  image: imageLinks.pashupatinath,
                },
                {
                  name: "Chandrashekhara",
                  description:
                    "Shiva adorned with the crescent moon in his hair, representing beauty and time.",
                  image: imageLinks.chandrashekhara,
                },
                {
                  name: "Mahayogi",
                  description:
                    "The great ascetic, seated in deep meditation, embodying spiritual discipline.",
                  image: imageLinks.mahayogi,
                },
              ].map((form, index) => (
                <motion.div
                  key={form.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="relative lg:h-48">
                    <img
                      loading="lazy"
                      src={form.image || "/placeholder.svg"}
                      alt={form.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-orange-700 mb-1">
                      {form.name}
                    </h3>
                    <p className="text-gray-700 text-sm">{form.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 text-center md:text-start">
                  Worship and Significance
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Shiva is worshipped throughout India and beyond, with
                    devotees known as Shaivites considering him the Supreme
                    Being. Worship of Shiva often emphasizes meditation,
                    austerity, and the pursuit of spiritual knowledge.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Sacred Texts:
                    </span>{" "}
                    The Shiva Purana, Linga Purana, and Shiva Sahasranama
                    (thousand names of Shiva) are important texts for Shiva
                    devotees. The Rudram and Chamakam from the Yajurveda are
                    ancient hymns dedicated to Rudra (an earlier form of Shiva).
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Temples:
                    </span>{" "}
                    Numerous temples throughout India and around the world are
                    dedicated to Shiva. The twelve Jyotirlinga temples are
                    considered especially sacred. Famous Shiva temples include
                    the Kashi Vishwanath Temple in Varanasi, the Brihadeeswara
                    Temple in Thanjavur, and the Kedarnath Temple in the
                    Himalayas.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Festivals:
                    </span>{" "}
                    Major festivals celebrating Shiva include Maha Shivaratri
                    (the great night of Shiva), Pradosha Vrata (observed on the
                    13th day of each lunar fortnight), and Shravan Monday fasts.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/deities">
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded-md">
                      Back to Deities
                    </button>
                  </Link>
                  <Link to="/deities/durga">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-md">
                      Explore Goddess Durga
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  loading="lazy"
                  src={imageLinks.shivaFamily}
                  alt="Shiva with Family"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
