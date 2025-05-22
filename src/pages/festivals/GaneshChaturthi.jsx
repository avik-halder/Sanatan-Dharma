import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

function GaneshChaturthiPage() {
  const [activeTab, setActiveTab] = useState("birth");
  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Page Header */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 order-2 lg:order-1"
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  Ganesh Chaturthi
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  The birth celebration of Lord Ganesha, the remover of
                  obstacles and god of new beginnings
                </h2>
                <div className="text-gray-700 space-y-1 max-w-none">
                  <p>
                    Ganesh Chaturthi, also known as Vinayaka Chaturthi, is one
                    of the most popular Hindu festivals celebrated across India
                    with great devotion and enthusiasm. This ten-day festival
                    honors Lord Ganesha, the elephant-headed deity who is
                    revered as the remover of obstacles, the patron of arts and
                    sciences, and the god of intellect and wisdom.
                  </p>
                  <p>
                    The festival begins on the fourth day (Chaturthi) of the
                    bright fortnight of the Hindu month of Bhadrapada
                    (August-September), marking the birthday of Lord Ganesha. It
                    concludes on Anant Chaturdashi, when the idols are immersed
                    in water bodies.
                  </p>
                  <p>
                    Ganesh Chaturthi gained significant prominence as a public
                    festival in Maharashtra during the late 19th century when
                    the freedom fighter Lokmanya Tilak transformed the annual
                    domestic festival into a large public event to bridge the
                    gap between Brahmins and non-Brahmins and to build unity in
                    the fight against British colonial rule.
                  </p>
                  <p>
                    Today, the festival is celebrated with great fervor across
                    India, particularly in Maharashtra, Gujarat, Karnataka,
                    Telangana, Andhra Pradesh, and Tamil Nadu. It brings
                    together communities, fostering a sense of unity, devotion,
                    and cultural pride.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 order-1 lg:order-2"
              >
                <div className="relative h-full rounded-xl overflow-hidden shadow-lg">
                  <img
                    loading="lazy"
                    src={imageLinks.ganeshChaturthi2}
                    alt="Ganesh Chaturthi celebration with Lord Ganesha idol"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mythology and Significance Section */}
        <section className="py-12 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
                Mythology and Significance
              </h2>
              <p className="text-red-700 max-w-3xl mx-auto">
                The stories and legends behind the birth and worship of Lord
                Ganesha
              </p>
            </motion.div>

            {/* Tabs Navigation */}
            <div className="tabs max-w-4xl mx-auto">
              <div className="relative right-0 mb-4">
                <ul
                  className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-orange-200"
                  data-tabs="tabs"
                  role="list"
                >
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        activeTab === "birth" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab("birth")}
                      role="tab"
                    >
                      Birth of Ganesha
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        activeTab === "significance" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab("significance")}
                      role="tab"
                    >
                      Spiritual Significance
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        activeTab === "symbols" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab("symbols")}
                      role="tab"
                    >
                      Symbols and Forms
                    </button>
                  </li>
                </ul>
              </div>

              {/* Tabs Content */}
              <div className="space-y-4">
                {/* Mythological Birth Story */}
                {activeTab === "birth" && (
                  <div className="bg-orange-50 border border-orange-500 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/2 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                        <img
                          loading="lazy"
                          src={imageLinks.ganeshBirth2}
                          alt="Holika Dahan ritual fire"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-3">
                          The Origin Story
                        </h3>
                        <p className="text-gray-700 mb-4">
                          There are several stories about the birth of Lord
                          Ganesha, but the most popular one is:
                        </p>
                        <div className="space-y-4">
                          <p className="text-gray-700">
                            Once, Goddess Parvati was preparing for a bath and
                            needed someone to guard the entrance to her chamber.
                            She created a boy from the turmeric paste she had
                            applied to her body and breathed life into him. She
                            named him Ganesha and instructed him not to allow
                            anyone to enter while she bathed.
                          </p>
                          <p className="text-gray-700">
                            When Lord Shiva returned home, he was stopped by
                            Ganesha from entering his own house. Unaware that
                            this boy was his son, and angered by his impudence,
                            Shiva severed Ganesha's head after a fierce battle.
                          </p>
                          <p className="text-gray-700">
                            When Parvati learned about this, she was devastated
                            and furious. To appease her, Shiva promised to
                            revive Ganesha. He ordered his followers (ganas) to
                            bring the head of the first creature they
                            encountered facing north. They returned with the
                            head of an elephant, which Shiva attached to
                            Ganesha's body, bringing him back to life.
                          </p>
                          <p className="text-gray-700">
                            Shiva then declared that Ganesha would be worshipped
                            before all other gods and would be known as the
                            remover of obstacles.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Spiritual Significance */}
                {activeTab === "significance" && (
                  <div className="bg-orange-50 border border-orange-500 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-3">
                      Spiritual Importance
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-orange-600">
                          Remover of Obstacles
                        </h4>
                        <p className="text-gray-700">
                          Lord Ganesha is primarily worshipped as Vighnaharta,
                          the remover of obstacles. Before beginning any new
                          venture, Hindus invoke his blessings to ensure a
                          smooth journey without hindrances.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600">
                          God of Wisdom and Intelligence
                        </h4>
                        <p className="text-gray-700">
                          With his elephant head symbolizing wisdom and his
                          small eyes representing concentration, Ganesha is
                          revered as the god of intellect and wisdom. Students
                          often pray to him for success in their studies and
                          examinations.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600">
                          Patron of Arts and Sciences
                        </h4>
                        <p className="text-gray-700">
                          Ganesha is considered the patron of arts, sciences,
                          and letters. He is often depicted as holding a broken
                          tusk, which he used as a pen to write the Mahabharata
                          as dictated by sage Vyasa.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600">
                          Symbol of New Beginnings
                        </h4>
                        <p className="text-gray-700">
                          As the god who is invoked at the beginning of any new
                          endeavor, Ganesha symbolizes fresh starts and new
                          opportunities. The festival itself marks a time of
                          renewal and rejuvenation.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sacred Symbols */}
                {activeTab === "symbols" && (
                  <div className="bg-orange-50 border border-orange-500 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-3">
                      Symbolic Elements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          // name: <>Elephant Head</>,
                          name: (
                            <>
                              <span className="flex flex-row items-center gap-2">
                                Elephant Head{" "}
                                <img
                                  loading="lazy"
                                  src={imageLinks.elephantHead}
                                  alt=""
                                  className="w-5 h-5"
                                />
                              </span>
                            </>
                          ),
                          description:
                            "Symbolizes wisdom, understanding, and a discriminating intellect.",
                        },
                        {
                          name: "Large Ears👂🏻",
                          description:
                            "Represent the importance of listening and gaining knowledge.",
                        },
                        {
                          name: "Small Mouth 👄",
                          description:
                            "Signifies the need to talk less and listen more.",
                        },
                        {
                          name: (
                            <>
                              <span className="flex flex-row items-center gap-2">
                                Single Tusk{" "}
                                <img
                                  loading="lazy"
                                  src={imageLinks.tusk}
                                  alt=""
                                  className="w-5 h-5"
                                />
                              </span>
                            </>
                          ),
                          description:
                            "Represents the retention of good and rejection of bad; also symbolizes sacrifice and the pen used to write the Mahabharata.",
                        },
                        {
                          name: "Large Belly🫄🏻",
                          description:
                            "Signifies the ability to peacefully digest all good and bad in life.",
                        },
                        {
                          name: "Mouse as Vehicle 🐁",
                          description:
                            "Represents the ego that must be controlled; also symbolizes the ability to navigate through tight spaces and overcome obstacles.",
                        },
                      ].map((symbol) => (
                        <div
                          key={symbol.name}
                          className="border-b pb-4 md:border-b-0 md:pb-0"
                        >
                          <h4 className="text-lg font-bold text-orange-700 mb-2">
                            {symbol.name}
                          </h4>
                          <p className="text-gray-700">{symbol.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Celebrations and Rituals Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
                Celebrations and Rituals
              </h2>
              <p className="text-red-700 max-w-3xl mx-auto">
                How Ganesh Chaturthi is celebrated across India
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Sthapana (Installation)",
                  description:
                    "The festival begins with the installation of clay idols of Lord Ganesha in homes and elaborately decorated public pandals (temporary stages).",
                  icon: "🏠",
                },
                {
                  title: "Prana Pratishtha",
                  description:
                    "A ritual to invoke life in the idol, followed by a 16-step ritual known as 'Shodashopachara Puja' that includes offerings of flowers, fruits, and sweets.",
                  icon: "✨",
                },
                {
                  title: "Aarti and Bhajans",
                  description:
                    "Daily prayers, aartis (ritual of worship), and devotional songs are performed in the morning and evening throughout the festival.",
                  icon: "🪔",
                },
                {
                  title: "Modak Offering",
                  description:
                    "Modaks, sweet dumplings filled with coconut and jaggery, are Lord Ganesha's favorite food and are offered as prasad (blessed food).",
                  icon: "🌰",
                },
                {
                  title: "Cultural Programs",
                  description:
                    "Various cultural events, including music, dance, drama, and community feasts, are organized during the festival.",
                  icon: "🎭",
                },
                {
                  title: "Visarjan (Immersion)",
                  description:
                    "On the final day, the idols are carried in colorful processions to be immersed in water bodies, symbolizing Ganesha's return to Mount Kailash, his abode.",
                  icon: "🌊",
                },
              ].map((ritual, index) => (
                <motion.div
                  key={ritual.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl p-6 shadow-md text-center"
                >
                  <div className="text-4xl mb-4">{ritual.icon}</div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">
                    {ritual.title}
                  </h3>
                  <p className="text-gray-700">{ritual.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/festivals">
                <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded">
                  Back to Festivals
                </button>
              </Link>
              <Link to="/festivals/durga-puja">
                <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded">
                  Explore Durga Puja
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GaneshChaturthiPage;
