import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import BrahmaImage from "../../assets/deities/Lord_Bramha.webp";
import creatingUniverse from "../../assets/deities/Brahma/brahma creating universe.webp";
import brahmaSaraswati from "../../assets/deities/Brahma/brahma with saraswati.webp";
import brahmaTemple from "../../assets/deities/Brahma/brahma temple.webp";
import brahmaMeditating from "../../assets/deities/Brahma/brahma meditation.webp";

const BrahmaPage = () => {
  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Page Header */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center lg:text-start">
                  Lord Brahma
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center lg:text-start">
                  The Creator of the Universe in Hindu Cosmology
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Brahma is one of the principal deities of Hinduism and
                    a member of the Trimurti (the Hindu Trinity) along with
                    Vishnu and Shiva. Brahma is revered as the creator of the
                    universe and all beings within it.
                  </p>
                  <p>
                    According to Hindu mythology, Brahma emerged from a golden
                    egg (Hiranyagarbha) or from the navel of Lord Vishnu on a
                    lotus flower. He is traditionally depicted with four faces,
                    symbolizing the four Vedas (sacred texts), and four arms,
                    holding various items including a scepter, a book of
                    knowledge (the Vedas), a water pot (kamandalu), and prayer
                    beads (mala).
                  </p>
                  <p>
                    Despite his significant role in creation, Brahma is not as
                    widely worshipped as Vishnu or Shiva in contemporary
                    Hinduism. There are relatively few temples dedicated solely
                    to Brahma, with the most famous being the Brahma Temple in
                    Pushkar, Rajasthan, India.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative lg:h-[470px] rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2"
              >
                <img
                  src={BrahmaImage}
                  alt="Lord Brahma"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Symbolism and Significance */}
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
                Symbolism and Significance
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Understanding the deeper meaning behind Lord Brahma's
                representation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Four Faces",
                  description:
                    "Represent the four Vedas (Rig, Yajur, Sama, and Atharva) and the four directions, symbolizing omnipresence and omniscience.",
                  icon: "👤",
                },
                {
                  title: "Four Arms",
                  description:
                    "Signify the four aspects of human personality: mind, intellect, ego, and consciousness, or the four goals of human life (Purusharthas).",
                  icon: "💪",
                },
                {
                  title: "Lotus Seat",
                  description:
                    "Represents purity and divine truth, blooming amidst the chaos of creation, untouched by impurity.",
                  icon: "🪷",
                },
                {
                  title: "Swan Vehicle",
                  description:
                    "The swan (Hamsa) symbolizes perfect union with the supreme reality, as well as the ability to discern the good from the bad.",
                  icon: "🦢",
                },
                {
                  title: "Beard",
                  description:
                    "Signifies wisdom and the eternal nature of creation, representing the continuous flow of time.",
                  icon: "🧔",
                },
                {
                  title: "Sacred Thread",
                  description:
                    "The Yajnopavita worn across his chest represents his mastery over Vedic rituals and sacrifices.",
                  icon: "🧵",
                },
              ].map((symbol, index) => (
                <motion.div
                  key={symbol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 p-6 rounded-xl border border-orange-500 shadow-md hover:shadow-lg transition-shadow text-center"
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

        {/* Mythology and Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 text-center lg:text-start">
                  Mythology and Stories
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <span className="font-medium text-orange-700">
                      Creation of the Universe:
                    </span>{" "}
                    According to Hindu mythology, Brahma emerged from a golden
                    egg (Hiranyagarbha) that appeared in the primordial waters.
                    In another version, he emerged from a lotus that grew from
                    the navel of Lord Vishnu.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Creation of Beings:
                    </span>{" "}
                    Brahma created the seven great sages (Saptarishi) to help
                    him create the universe. He also created the first man,
                    Manu, and his wife Shatarupa from his own body.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      The Curse of Shiva:
                    </span>{" "}
                    One popular myth explains why Brahma is not widely
                    worshipped. It is said that Brahma once lied to Shiva,
                    claiming he had found the end of a cosmic pillar of light
                    (which was actually Shiva himself in the form of a lingam).
                    As punishment for his falsehood, Shiva decreed that Brahma
                    would not be widely worshipped on earth.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Brahma and Saraswati:
                    </span>{" "}
                    Goddess Saraswati is considered the consort of Brahma. She
                    is the goddess of knowledge, music, arts, wisdom, and
                    learning, complementing Brahma's role as the creator of
                    knowledge.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/deities">
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded-lg">
                      Back to Deities
                    </button>
                  </Link>
                  <Link to="/deities/vishnu">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg">
                      Explore Lord Vishnu
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2 grid grid-cols-2 gap-4"
              >
                {[
                  {
                    title: "Brahma Creating the Universe",
                    image: creatingUniverse,
                  },
                  { title: "Brahma with Saraswati", image: brahmaSaraswati },
                  { title: "Brahma Temple in Pushkar", image: brahmaTemple },
                  { title: "Brahma in Meditation", image: brahmaMeditating },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="relative h-60 rounded-lg overflow-hidden group"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover w-full h-full rounded transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <p className="text-white text-sm font-medium p-3">
                        {item.title}
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
};

export default BrahmaPage;
