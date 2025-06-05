import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

const DurgaPage = () => {
  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Goddess Durga Section */}
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
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center lg:text-start">
                  Goddess Durga
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-4 lg:mb-8 text-center lg:text-start">
                  The Divine Mother and Destroyer of Evil
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Goddess Durga, also known as Shakti or Devi, is the
                    principal form of the Mother Goddess in Hinduism. Her name
                    means "the inaccessible" or "the invincible" in Sanskrit,
                    signifying her indomitable nature. Durga is the warrior form
                    of the Divine Mother, created to combat demonic forces that
                    threaten peace, prosperity, and dharma (righteousness).
                  </p>
                  <p>
                    Durga is depicted as a warrior woman with eight or ten arms,
                    each carrying a weapon and riding a lion or tiger. She is
                    the fierce protective mother goddess who unleashes her
                    divine wrath against the wicked for the liberation of the
                    oppressed and the destruction of evil.
                  </p>
                  <p>
                    According to Hindu mythology, Durga was created by the
                    trinity of Brahma, Vishnu, and Shiva, who combined their
                    energies to create a powerful female warrior to defeat the
                    demon Mahishasura, who could not be defeated by any god or
                    man. This symbolizes that when the masculine divine energies
                    (gods) fail, the feminine divine energy (goddess) is invoked
                    to restore balance and harmony.
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
                  src={imageLinks.Durga}
                  alt="Goddess Durga"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Durga's Nine Forms */}
        <section className="py-10 lg:py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                The Nine Forms of Durga
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Navadurga represents the nine manifestations of Goddess Durga
                worshipped during Navaratri
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Shailaputri",
                  description:
                    "The daughter of the mountains, representing the power of Brahma, Vishnu, and Shiva.",
                  image: imageLinks.shailaputri,
                },
                {
                  name: "Brahmacharini",
                  description:
                    "The one who practices devout austerity, symbolizing love and loyalty.",
                  image: imageLinks.brahmacharini,
                },
                {
                  name: "Chandraghanta",
                  description:
                    "The one who bears the moon in her bell, representing beauty and bravery.",
                  image: imageLinks.chandraghanta,
                },
                {
                  name: "Kushmanda",
                  description:
                    "The creator of the universe, whose laugh created the cosmic egg.",
                  image: imageLinks.kushmanda,
                },
                {
                  name: "Skandamata",
                  description:
                    "The mother of Skanda (Kartikeya), representing motherhood.",
                  image: imageLinks.skandamata,
                },
                {
                  name: "Katyayani",
                  description:
                    "The warrior form born to sage Katyayana, created to destroy the demon Mahishasura.",
                  image: imageLinks.katyayani,
                },
                {
                  name: "Kalaratri",
                  description:
                    "The destroyer of darkness and ignorance, with dark complexion, disheveled hair.",
                  image: imageLinks.kalaratri,
                },
                {
                  name: "Mahagauri",
                  description:
                    "The extremely fair one, symbolizing purity and cleanliness.",
                  image: imageLinks.mahagauri,
                },
                {
                  name: "Siddhidatri",
                  description:
                    "The bestower of supernatural powers, worshipped by all gods, sages, and demons.",
                  image: imageLinks.siddhidatri,
                },
              ].map((form, index) => (
                <motion.div
                  key={form.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-32 lg:w-52 mx-auto mb-4">
                    <img
                      loading="lazy"
                      src={form.image || "/placeholder.svg"}
                      alt={form.name}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2 text-center">
                    {form.name}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {form.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Weapons of Goddess Durga
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The divine weapons of Goddess Durga symbolize various aspects of
                her power and her ability to defeat evil forces.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {[
                {
                  title: "Khanda (Sword)",
                  description:
                    "A weapon of divine power, symbolizing the destruction of evil and protection of righteousness.",
                  givenBy: "Lord Ganesh",
                  emoji: "🗡️", // Sword emoji
                },
                {
                  title: "Trishula (Trident)",
                  description:
                    "Represents the three gunas (qualities) and the power to destroy evil and ignorance.",
                  givenBy: "Lord Shiva",
                  emoji: "🔱", // Trident emoji
                },
                {
                  title: "Sudarshan Chakra",
                  description:
                    "A discus-like weapon representing the cyclical nature of time, representing Lord Vishnu's protection of dharma.",
                  givenBy: "Lord Vishnu",
                  emoji: "🛞", // Spiral/Chakra emoji
                },
                {
                  title: "Vajra (Thunderbolt)",
                  description:
                    "Symbolizes firmness, power, and the ability to destroy ignorance and evil.",
                  givenBy: "Lord Indra",
                  emoji: "⚡", // Lightning bolt emoji
                },
                {
                  title: "Bow and Arrow",
                  description:
                    "Represents the energy to overcome obstacles and the power to strike down evil.",
                  givenBy: "Vayu Dev",
                  emoji: "🏹", // Bow and arrow emoji
                },
                {
                  title: "Spear (Bharji)",
                  description:
                    "Symbolizes the piercing power to remove darkness and ignorance.",
                  givenBy: "Agni Dev",
                  emoji: "🔪", // Knife/Weapon emoji as a substitute for Spear
                },
                {
                  title: "Shankh (Conch)",
                  description:
                    "Represents the sound of creation and the divine call to destroy evil forces.",
                  givenBy: "Varuna Dev",
                  emoji: "🐚", // Shell emoji
                },
                {
                  title: "Lotus",
                  description:
                    "Symbolizes purity, beauty, and spiritual awakening amidst the chaos of material existence.",
                  givenBy: "Lord Brahma",
                  emoji: "🪷", // Lotus flower emoji
                },
                {
                  title: "Parashu (Axe)",
                  description:
                    "Represents the cutting off of ego and all attachments that bind us to ignorance.",
                  givenBy: "Vishwakarma",
                  emoji: "🪓", // Axe emoji
                },
                {
                  title: "Snake",
                  description:
                    "Symbolizes the destruction of poison and ignorance, and the protection of knowledge.",
                  givenBy: "Lord Shiva",
                  emoji: "🐍", // Snake emoji
                },
              ].map((weapon, index) => (
                <motion.div
                  key={weapon.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-orange-100 border border-orange-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                    index === 9 ? "md:col-start-2" : ""
                  }`}
                >
                  <div className="text-4xl mb-4 text-center">
                    {weapon.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2 text-center">
                    {weapon.title}
                  </h3>
                  <p className="mt-2 text-orange-600 mb-2 text-center">
                    <span className="text-gray-500">Given By:</span>{" "}
                    {weapon.givenBy}
                  </p>
                  <p className="text-gray-700 text-center">
                    {weapon.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Worship and Festivals */}
        <section className="py-10 lg:py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 text-center md:text-start">
                  Worship and Festivals
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Goddess Durga is widely worshipped throughout India and by
                    Hindus worldwide. Her worship symbolizes the victory of good
                    over evil and the protection of the righteous.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Durga Puja:
                    </span>{" "}
                    The most important festival dedicated to Durga, celebrated
                    for nine nights (Navaratri) in September-October. It
                    commemorates Durga's victory over the buffalo demon
                    Mahishasura. In eastern India, especially in Bengal,
                    elaborate pandals (temporary structures) are set up with
                    beautiful idols of Durga and her children.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Navaratri:
                    </span>{" "}
                    A nine-night festival celebrated throughout India in honor
                    of the divine feminine. Each day is dedicated to a different
                    form of the goddess, with specific rituals, colors, and
                    foods associated with each form.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Vijayadashami (Dussehra):
                    </span>{" "}
                    The tenth day following Navaratri, celebrating Durga's
                    victory over Mahishasura. It symbolizes the triumph of good
                    over evil and is marked by processions and the burning of
                    effigies of demons.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Temples:
                    </span>{" "}
                    Numerous temples throughout India are dedicated to Durga in
                    her various forms. Some of the most famous include the
                    Vaishno Devi Temple in Jammu and Kashmir, the Kamakhya
                    Temple in Assam, and the Kanaka Durga Temple in Andhra
                    Pradesh.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/deities">
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded">
                      Back to Deities
                    </button>
                  </Link>
                  <Link to="/deities/parvati">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded">
                      Explore Goddess Parvati
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2 relative h-auto rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  loading="lazy"
                  src={imageLinks.durgaPuja}
                  alt="Durga Puja Celebration"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DurgaPage;
