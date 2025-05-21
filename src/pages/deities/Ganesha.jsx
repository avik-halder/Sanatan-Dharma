import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ganesh from "../../assets/Deities/Ganesh.webp";
import ganeshCaturthi from "../../assets/Festivals/ganesh chaturthi.webp";

import birth from "../../assets/Deities/Ganesh/Birth.jpg";
import brokenTeeth from "../../assets/Deities/Ganesh/broken teeth.jpg";
import moon from "../../assets/Deities/Ganesh/Moon Laughter.jpg";
import race from "../../assets/Deities/Ganesh/Race.jpg";

const GaneshaPage = () => {
  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Description and Image */}
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
                  Lord Ganesha
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-8 text-center md:text-start">
                  The Remover of Obstacles and Lord of Beginnings
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Ganesha, also known as Ganapati, Vinayaka, and by many
                    other names, is one of the most beloved and widely
                    worshipped deities in the Hindu pantheon. Instantly
                    recognizable by his elephant head, Ganesha is revered as the
                    remover of obstacles, the patron of arts and sciences, and
                    the god of intellect and wisdom.
                  </p>
                  <p>
                    As the son of Lord Shiva and Goddess Parvati, Ganesha
                    occupies a special place in Hindu mythology. He is typically
                    depicted with a large elephant head, a big belly symbolizing
                    generosity and total acceptance, and four arms holding
                    various attributes. His vehicle is a mouse, representing the
                    ability to navigate through tight spaces and overcome
                    obstacles.
                  </p>
                  <p>
                    Ganesha is traditionally invoked at the beginning of new
                    ventures, whether they be a journey, a business endeavor, a
                    religious ceremony, or even the writing of a book. His
                    blessing is sought to ensure that the undertaking proceeds
                    smoothly without obstacles.
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
                  src={ganesh}
                  alt="Lord Ganesha"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Symbolism Section */}
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
                Symbolism and Attributes
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The profound symbolic meanings behind Lord Ganesha's unique
                appearance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Elephant Head",
                  description:
                    "Symbolizes wisdom, understanding, and a discriminating intellect. The large ears represent the importance of listening well, while the small eyes denote concentration.",
                  icon: "🐘",
                },
                {
                  title: "Large Belly",
                  description:
                    "Represents generosity and total acceptance. It contains the entire universe and signifies the ability to digest all experiences, both good and bad.",
                  icon: "🫃",
                },
                {
                  title: "Single Tusk",
                  description:
                    "Ganesha's broken tusk (he is also called Ekadanta, 'one-tusked') symbolizes sacrifice and the ability to overcome duality. According to legend, he broke it himself to write the Mahabharata.",
                  icon: "📝",
                },
                {
                  title: "Four Arms",
                  description:
                    "Represent the four inner attributes of the subtle body: mind, intellect, ego, and consciousness. His various hand gestures and objects signify different aspects of spiritual teaching.",
                  icon: "💪",
                },
                {
                  title: "Mouse Vehicle",
                  description:
                    "Symbolizes the ego that must be controlled. The mouse, despite its small size, can create significant damage, just as the ego can undermine spiritual progress if not kept in check.",
                  icon: "🐁",
                },
                {
                  title: "Modaka (Sweet)",
                  description:
                    "The sweet held in one of Ganesha's hands represents the rewards of spiritual seeking and the sweetness of the realized inner self.",
                  icon: "🌰",
                },
              ].map((symbol, index) => (
                <motion.div
                  key={symbol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 px-4 py-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
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

        {/* Mythology Section */}
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
                Mythology and Stories
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The fascinating tales that reveal the origin and significance of
                Lord Ganesha
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Birth of Ganesha",
                  description:
                    "According to the most popular version, Goddess Parvati created Ganesha from the turmeric paste off her body to guard her while she bathed. When Shiva returned and was stopped from entering by Ganesha, a fight ensued in which Shiva beheaded him. Learning that the boy was Parvati's son, Shiva replaced his head with that of an elephant, the first creature he found.",
                  image: birth,
                },
                {
                  title: "The Broken Tusk",
                  description:
                    "When the sage Vyasa needed someone to write down the Mahabharata as he dictated it, Ganesha agreed on the condition that Vyasa would not pause in his recitation. Ganesha's pen broke during the task, so he broke off one of his tusks to continue writing without interruption, demonstrating his dedication to knowledge.",
                  image: brokenTeeth,
                },
                {
                  title: "The Race Around the World",
                  description:
                    "Once, Shiva and Parvati offered a prize to whichever of their sons (Ganesha and Kartikeya) could circle the world first. While Kartikeya set off immediately on his peacock, Ganesha simply circled his parents, explaining that they were his entire world. Impressed by his wisdom, they declared him the winner.",
                  image: race,
                },
                {
                  title: "Moon's Laughter",
                  description:
                    "One night, after consuming many sweets, Ganesha was riding his mouse when the mouse stumbled, causing Ganesha to fall and his belly to burst open, spilling sweets. The moon laughed at this sight, which angered Ganesha. He broke off a piece of his tusk and hurled it at the moon, cursing that no one should look at the moon on Ganesh Chaturthi.",
                  image: moon,
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

        {/* Worship and Festivals */}
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
                  Worship and Celebrations
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Ganesha is one of the most widely worshipped deities in
                    Hinduism, with devotees seeking his blessings before
                    beginning any new venture or overcoming challenges.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Ganesh Chaturthi:
                    </span>{" "}
                    This is the main festival dedicated to Ganesha, celebrated
                    with great enthusiasm, especially in Maharashtra. It marks
                    Ganesha's birthday and typically lasts for 10 days, during
                    which clay idols of Ganesha are installed in homes and
                    public pandals (temporary structures), worshipped daily, and
                    then immersed in water on the final day.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Temples:
                    </span>{" "}
                    Numerous temples throughout India and around the world are
                    dedicated to Ganesha. Some of the most famous include the
                    Siddhivinayak Temple in Mumbai, the Ashtavinayak Temples in
                    Maharashtra, and the Kanipakam Vinayaka Temple in Andhra
                    Pradesh.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Mantras:
                    </span>{" "}
                    The Ganesha Gayatri Mantra and the Ganesha Ashtottara
                    Shatanamavali (108 names of Ganesha) are recited by
                    devotees. The simple mantra "Om Gam Ganapataye Namaha" is
                    widely used to invoke Ganesha's blessings.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/deities">
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded-md">
                      Back to Deities
                    </button>
                  </Link>
                  <Link to="/deities/krishna">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-md">
                      Explore Lord Krishna
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2 relative h-[346px] rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  loading="lazy"
                  src={ganeshCaturthi}
                  alt="Ganesh Chaturthi Celebration"
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

export default GaneshaPage;
