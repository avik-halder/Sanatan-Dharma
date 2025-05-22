import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

const VishnuPage = () => {
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
                  Lord Vishnu
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-8 text-center lg:text-start">
                  The Preserver and Protector of the Universe
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Vishnu is one of the principal deities of Hinduism and
                    a member of the Trimurti (the Hindu Trinity) along with
                    Brahma and Shiva. Vishnu is revered as the preserver and
                    protector of the universe, maintaining cosmic order and
                    dharma (righteousness).
                  </p>
                  <p>
                    Vishnu is typically depicted with a dark or blue complexion,
                    symbolizing his infinite nature, like the boundless sky or
                    cosmic ocean. He is shown with four arms holding his divine
                    attributes: a conch shell (Shankha), a discus (Sudarshana
                    Chakra), a mace (Gada), and a lotus flower (Padma). He is
                    often portrayed reclining on the coils of the cosmic serpent
                    Shesha (Ananta) floating on the cosmic ocean.
                  </p>
                  <p>
                    One of the most significant aspects of Vishnu's mythology is
                    his incarnations or avatars. According to Hindu belief,
                    whenever dharma declines and adharma (unrighteousness)
                    rises, Vishnu incarnates on Earth in various forms to
                    restore cosmic balance, protect the virtuous, and destroy
                    evil forces.
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
                  src={imageLinks.Vishnu}
                  alt="Lord Vishnu"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divine Attributes Section */}
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
                Divine Attributes
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The symbolic meanings behind Lord Vishnu's iconic items
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Shankha (Conch Shell)",
                  description:
                    "Represents the origin of existence, the five elements, and the cosmic sound 'Om'. When blown, it is believed to drive away evil forces and negative energy.",
                  icon: "🐚",
                },
                {
                  title: "Sudarshana Chakra (Discus)",
                  description:
                    "Symbolizes the wheel of time and the mind's power. It represents Vishnu's role as the destroyer of ignorance and his ability to protect dharma.",
                  icon: "🛞",
                },
                {
                  title: "Gada (Mace)",
                  description:
                    "Represents mental and physical strength, as well as the power of knowledge. It symbolizes Vishnu's authority and his ability to crush adharma (unrighteousness).",
                  icon: "🏏",
                },
                {
                  title: "Padma (Lotus)",
                  description:
                    "Symbolizes purity, beauty, and spiritual liberation. It represents the unfolding of creation and the divine reality that remains untouched by the world.",
                  icon: "🪷",
                },
              ].map((attribute, index) => (
                <motion.div
                  key={attribute.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 p-6 rounded-xl border border-orange-500 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-4xl mb-4">{attribute.icon}</div>
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    {attribute.title}
                  </h3>
                  <p className="text-gray-700">{attribute.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Ten Avatars (Dashavatara) Section */}
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
                The Ten Avatars (Dashavatara)
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Lord Vishnu's incarnations throughout cosmic ages to restore
                dharma
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  name: "Matsya",
                  form: "Fish",
                  description:
                    "Saved the Vedas and Manu (progenitor of humanity) from a great deluge.",
                  image: imageLinks.Matsya, // Replace with actual path
                },
                {
                  name: "Kurma",
                  form: "Turtle",
                  description:
                    "Supported Mount Mandara during the churning of the cosmic ocean.",
                  image: imageLinks.Kurma, // Replace with actual path
                },
                {
                  name: "Varaha",
                  form: "Boar",
                  description:
                    "Rescued Earth from the cosmic waters after it was dragged down by the demon Hiranyaksha.",
                  image: imageLinks.Varaha, // Replace with actual path
                },
                {
                  name: "Narasimha",
                  form: "Man-Lion",
                  description:
                    "Defeated the demon king Hiranyakashipu and saved his devotee Prahlada.",
                  image: imageLinks.Narasimha, // Replace with actual path
                },
                {
                  name: "Vamana",
                  form: "Dwarf",
                  description:
                    "Restored cosmic balance by humbling the demon king Bali.",
                  image: imageLinks.Vramana, // Replace with actual path
                },
                {
                  name: "Parashurama",
                  form: "Warrior with Axe",
                  description:
                    "Defeated the corrupt Kshatriya rulers who had abused their power.",
                  image: imageLinks.Parashurama, // Replace with actual path
                },
                {
                  name: "Rama",
                  form: "Perfect Man",
                  description:
                    "Exemplified the ideal human and ruler, defeating the demon king Ravana.",
                  image: imageLinks.Ram2, // Replace with actual path
                },
                {
                  name: "Krishna",
                  form: "Divine Statesman",
                  description:
                    "Delivered the Bhagavad Gita and played a crucial role in the Mahabharata war.",
                  image: imageLinks.Krishna, // Replace with actual path
                },
                {
                  name: "Buddha",
                  form: "Enlightened One",
                  description:
                    "Taught compassion and non-violence, reforming religious practices.",
                  image: imageLinks.Buddha, // Replace with actual path
                },
                {
                  name: "Kalki",
                  form: "Future Avatar",
                  description:
                    "Will appear at the end of Kali Yuga to destroy evil and usher in a new age.",
                  image: imageLinks.Kalki, // Replace with actual path
                },
              ].map((avatar, index) => (
                <motion.div
                  key={avatar.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-orange-100 border border-orange-500 rounded-lg overflow-hidden text-center hover:shadow-xl transition-all"
                >
                  <div className="relative h-40 w-40 mx-auto mt-6">
                    <img
                      loading="lazy"
                      src={avatar.image || "/placeholder.svg"}
                      alt={avatar.name}
                      className="object-cover rounded-full w-full h-full hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-orange-700">
                      {avatar.name}
                    </h3>
                    <p className="text-orange-600 text-sm">{avatar.form}</p>
                    <p className="text-gray-700 mt-2">{avatar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Worship and Significance Section */}
        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 text-center lg:text-start">
                  Worship and Significance
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Vishnu is one of the most widely worshipped deities in
                    Hinduism. His devotees, known as Vaishnavas, consider him
                    the Supreme Being. Vishnu worship emphasizes devotion
                    (bhakti), righteousness (dharma), and surrender to divine
                    will.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Sacred Texts:
                    </span>{" "}
                    The Vishnu Purana, Bhagavad Gita, and Vishnu Sahasranama
                    (thousand names of Vishnu) are important texts for Vishnu
                    devotees. The Bhagavad Gita, spoken by Krishna (an avatar of
                    Vishnu), is one of the most revered Hindu scriptures.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Temples:
                    </span>{" "}
                    Numerous temples throughout India and around the world are
                    dedicated to Vishnu and his avatars. Some of the most famous
                    include the Venkateshwara Temple in Tirupati, the Jagannath
                    Temple in Puri, and the Ranganathaswamy Temple in Srirangam.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Festivals:
                    </span>{" "}
                    Major festivals celebrating Vishnu include Janmashtami
                    (Krishna's birthday), Ram Navami (Rama's birthday), and
                    Vaikuntha Ekadashi (considered especially auspicious for
                    Vishnu worship).
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/deities">
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded-md">
                      Back to Deities
                    </button>
                  </Link>
                  <Link to="/deities/shiva">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-md">
                      Explore Lord Shiva
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative lg:h-[400px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2"
              >
                <img
                  loading="lazy"
                  src={imageLinks.vishnuLakshmi}
                  alt="Vishnu with Lakshmi"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VishnuPage;
