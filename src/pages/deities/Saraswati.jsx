import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

export default function SaraswatiPage() {
  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Goddess of Wisdom Section */}
        <section className="py-8 lg:py-16">
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
                  Goddess Saraswati
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-4 lg:mb-8 text-center lg:text-start">
                  The Divine Goddess of Knowledge, Music, Arts, and Learning
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Goddess Saraswati is the Hindu goddess of knowledge, music,
                    arts, wisdom, and learning. She is part of the trinity
                    (Tridevi) of Saraswati, Lakshmi, and Parvati, and is the
                    counterpart of Brahma, the creator in the Hindu trinity.
                  </p>
                  <p>
                    Saraswati is depicted as a beautiful woman dressed in pure
                    white, often seated on a white lotus, which symbolizes
                    light, knowledge, and truth. She is usually shown with four
                    arms, holding items that represent different aspects of
                    learning and the arts: a book (representing knowledge), a
                    mala (symbolizing meditation and spirituality), a water pot
                    (representing creative and purifying powers), and a musical
                    instrument called the veena (representing the arts and
                    music).
                  </p>
                  <p>
                    The name "Saraswati" comes from the Sanskrit roots "sara"
                    meaning "essence" and "swa" meaning "self," thus signifying
                    "the essence of the self." She is also known by many other
                    names, including Bharati (eloquence), Shatarupa (existence
                    in many forms), Vedamata (mother of the Vedas), and Vagdevi
                    (goddess of speech).
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
                  src={imageLinks.Saraswati}
                  alt="Goddess Saraswati"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Symbolism and Attributes Section */}
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
                Symbolism and Attributes
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The divine symbols and attributes of Goddess Saraswati
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "White Attire",
                  description:
                    "Saraswati is typically dressed in white, symbolizing purity, truth, and knowledge untainted by ego or desire.",
                  icon: "🤍",
                },
                {
                  title: "Veena",
                  description:
                    "The musical instrument she plays represents the harmony and perfect tuning of the mind and intellect required for artistic and scholarly pursuits.",
                  // icon: "🎻",
                  icon: (
                    <>
                      <img
                        loading="lazy"
                        src={imageLinks.veena}
                        alt=""
                        className="h-15 w-16 m-2 mb-0"
                      />
                    </>
                  ),
                },
                {
                  title: "Book",
                  description:
                    "The sacred texts she holds symbolize universal, divine, eternal knowledge as well as worldly sciences and arts.",
                  icon: "📚",
                },
                {
                  title: "White Lotus",
                  description:
                    "Her seat represents purity, reality, and the unfolding of spiritual consciousness amidst the chaos of material existence.",
                  icon: "🪷",
                },
                {
                  title: "Swan",
                  description:
                    "Her vahana (vehicle) symbolizes perfect union with the supreme reality, as well as the ability to discern the good from the bad, just as a swan can separate milk from water.",
                  icon: "🦢",
                },
                {
                  title: "Peacock",
                  description:
                    "Sometimes depicted near her, the peacock represents the colorful splendor of the arts and reminds us that knowledge should be used with humility and wisdom.",
                  icon: "🦚",
                },
              ].map((symbol, index) => (
                <motion.div
                  key={symbol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center justify-center flex flex-col items-center"
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

        {/* Mythology and Significance Section */}
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
                Mythology and Significance
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The divine stories and importance of Goddess Saraswati in Hindu
                tradition
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Origin and Creation",
                  description:
                    "According to Hindu mythology, Saraswati was born from the forehead of Lord Brahma, the creator. In texts like the Brahmanda Purana and Padma Purana, she is considered Brahma's wife, embodying his active energy (shakti) that helps him in the creation of the universe.",
                  image: imageLinks.origin,
                },
                {
                  title: "River Goddess",
                  description:
                    "In the Rigveda, Saraswati is primarily a river goddess, personifying the sacred Saraswati River, which was considered the boundary between the sacred land of Brahmavarta and the rest of the world. The river is now believed to be extinct or flowing underground.",
                  image: imageLinks.saraswatiRiver,
                },
                {
                  title: "Mother of the Vedas",
                  description:
                    "Saraswati is revered as Vedamata, the mother of the Vedas, as she is believed to have inspired the sages who composed these sacred texts. She is the divine embodiment of the knowledge contained in these ancient scriptures.",
                  image: imageLinks.vedaMata,
                },
                {
                  title: "Goddess of Speech",
                  description:
                    "As Vagdevi, the goddess of speech and eloquence, Saraswati is believed to have given humans the gift of speech and the ability to communicate knowledge. She represents the power of the spoken and written word.",
                  image: imageLinks.Vagdevi,
                },
              ].map((story, index) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-60">
                    <img
                      loading="lazy"
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="object-cover w-full h-full"
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

        {/* Worship and Festivals Section */}
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
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 text-center lg:text-start">
                  Worship and Festivals
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Goddess Saraswati is widely worshipped by students,
                    scholars, artists, musicians, and anyone seeking knowledge
                    and wisdom. Her blessings are sought before beginning
                    education, arts, or any intellectual pursuit.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Vasant Panchami:
                    </span>{" "}
                    The most important festival dedicated to Saraswati,
                    celebrated on the fifth day of the bright half of the Hindu
                    month of Magha (January-February). This day marks the
                    beginning of spring and is considered auspicious for
                    starting education. Students place their books and
                    instruments before the goddess and seek her blessings.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Saraswati Puja:
                    </span>{" "}
                    In eastern India, particularly in Bengal, Odisha, and Assam,
                    Saraswati Puja is celebrated with great enthusiasm.
                    Educational institutions and households install clay idols
                    of the goddess, and students refrain from reading or writing
                    on this day as a mark of respect, as their books are placed
                    at her feet for blessing.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Temples:
                    </span>{" "}
                    While not as numerous as temples dedicated to other major
                    deities, there are several important Saraswati temples
                    across India. Notable ones include the Gnana Saraswati
                    Temple in Basar, Telangana; the Saraswati Temple in the
                    Kumbakonam Mahamaham tank, Tamil Nadu; and the Saraswati
                    Mandir in Pilani, Rajasthan.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Cultural Significance:
                    </span>{" "}
                    Beyond religious worship, Saraswati is deeply embedded in
                    Indian cultural practices. Musicians often begin their
                    performances with an invocation to her, and traditional
                    education systems include rituals like Vidyarambham
                    (initiation into learning) where children write their first
                    letters while invoking Saraswati.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/deities"
                    className="inline-block px-4 py-2 border border-orange-600 rounded text-orange-600 hover:bg-orange-50 transition-colors"
                  >
                    Back to Deities
                  </Link>
                  <Link
                    to="/deities/parvati"
                    className="inline-block px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded transition-colors"
                  >
                    Explore Goddess Parvati
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
                  src={imageLinks.saraswatiPuja}
                  alt="Saraswati Puja Celebration"
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
