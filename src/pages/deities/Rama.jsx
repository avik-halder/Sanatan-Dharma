import React, { useState } from "react";
import { motion } from "framer-motion";

import Rama from "../../assets/Deities/Ram2.webp";
// import RamMandir from "../../assets/Temples/Ram Mandir4.png";
import RamMandir from "../../assets/Temples/Ram Mandir5.webp";
import tilak from "../../assets/tilak.webp";

export default function RamaPage() {
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
                  Lord Rama
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-8 text-center md:text-start">
                  The ideal Man and King, embodiment of dharma
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Lord Rama (also known as Ramachandra) is the seventh avatar
                    of Lord Vishnu and one of the most widely worshipped deities
                    in Hinduism. He is revered as the embodiment of dharma
                    (righteousness), the ideal son, husband, brother, and king.
                    His life story, narrated in the epic Ramayana, serves as a
                    moral and spiritual guide for Hindus.
                  </p>
                  <p>
                    Born to King Dasharatha and Queen Kaushalya of Ayodhya,
                    Rama's life was marked by adherence to truth, duty, and
                    sacrifice. When his father, bound by a promise to his wife
                    Kaikeyi, had to exile Rama to the forest for fourteen years,
                    Rama accepted the decision without resentment, demonstrating
                    his unwavering commitment to filial duty.
                  </p>
                  <p>
                    During his exile, Rama's wife Sita was abducted by the demon
                    king Ravana. This led to an epic battle in which Rama, with
                    the help of his devoted companion Hanuman and an army of
                    monkeys and bears, defeated Ravana and rescued Sita. This
                    victory symbolizes the triumph of good over evil. After
                    completing his exile, Rama returned to Ayodhya and was
                    crowned king. His reign, known as "Ram Rajya," is considered
                    the epitome of good governance and is often invoked as an
                    ideal state of society where justice, peace, and prosperity
                    prevail.
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
                  src={Rama}
                  alt="Lord Rama"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Symbolism and Attributes
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Lord Rama's iconography and symbols represent his divine
                qualities and powers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Bow and Arrow",
                  description:
                    "Rama is often depicted holding a bow and arrow, symbolizing his skill as an archer and his ability to destroy evil.",
                  icon: "🏹",
                },
                {
                  title: "Blue Complexion",
                  description:
                    "Like Vishnu, Rama is depicted with blue skin, representing his divine nature, infinity, and the vastness of the sky and ocean.",
                  icon: "🔵",
                },
                {
                  title: "Crown",
                  description:
                    "As the king of Ayodhya, Rama wears a crown, symbolizing his royal status and his role as the ideal ruler.",
                  icon: "👑",
                },
                {
                  title: "Tilak",
                  description:
                    "The mark on his forehead represents his divine status and connection to Vishnu.",
                  icon: (
                    <>
                      <img
                        loading="lazy"
                        src={tilak}
                        className="h-10 w-13"
                        alt=""
                      />
                    </>
                  ),
                },
              ].map((attribute, index) => (
                <motion.div
                  key={attribute.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md text-center items-center justify-center flex flex-col"
                >
                  <div className="text-4xl mb-4">{attribute.icon}</div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">
                    {attribute.title}
                  </h3>
                  <p className="text-gray-700">{attribute.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                The Ramayana
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The epic that narrates the life and journey of Lord Rama
              </p>
            </motion.div>
            <TabsComponent />
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
                    Lord Rama is one of the most revered deities in Hinduism,
                    worshipped as the embodiment of dharma (righteousness), the
                    ideal man, and the perfect ruler whose reign represents the
                    golden age of humanity.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Ram Navami:
                    </span>{" "}
                    The birthday of Lord Rama is celebrated on the ninth day of
                    the Hindu lunar month of Chaitra (March-April). Devotees
                    observe fasts, perform pujas, and organize readings of the
                    Ramayana. Temples dedicated to Rama are decorated, and
                    processions with Rama's images are taken out.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">Diwali:</span>{" "}
                    Also known as the Festival of Lights, it commemorates Lord
                    Rama's return to Ayodhya after his 14-year exile and victory
                    over Ravana. People illuminate their homes with oil lamps,
                    candles, and colorful lights to symbolize the triumph of
                    light over darkness and good over evil.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Ram Leela:
                    </span>{" "}
                    A dramatic folk reenactment of the Ramayana, performed
                    during the nine days of Navratri, culminating on Dussehra
                    with the burning of effigies of Ravana, symbolizing victory
                    over evil.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Ram Charit Manas:
                    </span>{" "}
                    The epic poem written by Tulsidas is one of the most beloved
                    sacred texts for Rama devotees. Regular recitation of this
                    text, especially the Sundar Kand chapter, is believed to
                    bring blessings and remove obstacles.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href="/deities">
                    <button className="border border-orange-600 text-orange-600 px-4 py-2 rounded-md">
                      Back to Deities
                    </button>
                  </a>
                  <a href="/deities/hanuman">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md">
                      Explore Lord Hanuman
                    </button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  loading="lazy"
                  src={RamMandir}
                  alt="Ram Temple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-start items-end">
                  <p className="text-orange-100 text-lg font-medium p-3 pr-4">
                    Ram Mandir, Ayodhaya
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Custom Tabs Component
function TabsComponent() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative right-0 mb-4">
        <ul
          className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-orange-200"
          data-tabs="tabs"
          role="list"
        >
          <li className="z-30 flex-auto text-center">
            <button
              className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                activeTab === "story" ? "bg-white" : "bg-inherit"
              }`}
              onClick={() => setActiveTab("story")}
              role="tab"
            >
              Story
            </button>
          </li>
          <li className="z-30 flex-auto text-center">
            <button
              className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                activeTab === "characters" ? "bg-white" : "bg-inherit"
              }`}
              onClick={() => setActiveTab("characters")}
              role="tab"
            >
              Characters
            </button>
          </li>
          <li className="z-30 flex-auto text-center">
            <button
              className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                activeTab === "lessons" ? "bg-white" : "bg-inherit"
              }`}
              onClick={() => setActiveTab("lessons")}
              role="tab"
            >
              Lessons
            </button>
          </li>
        </ul>
      </div>

      <div className="bg-orange-50 rounded-lg border border-orange-500 p-6 shadow-md">
        {activeTab === "story" && (
          <div>
            <h3 className="text-xl font-bold text-orange-700 mb-3">
              The Epic Journey
            </h3>
            <p className="text-gray-700 mb-4">
              The Ramayana, composed by the sage Valmiki, consists of 24,000
              verses divided into seven books (Kandas) that narrate the complete
              life story of Rama:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-semibold">Bala Kanda:</span> The boyhood
                and adolescence of Rama, his training, and his marriage to Sita.
              </li>
              <li>
                <span className="font-semibold">Ayodhya Kanda:</span> The
                preparations for Rama's coronation, Kaikeyi's demands, and
                Rama's exile to the forest.
              </li>
              <li>
                <span className="font-semibold">Aranya Kanda:</span> Life in the
                forest, the abduction of Sita by Ravana.
              </li>
              <li>
                <span className="font-semibold">Kishkindha Kanda:</span> Rama's
                alliance with Sugriva and the search for Sita.
              </li>
              <li>
                <span className="font-semibold">Sundara Kanda:</span> Hanuman's
                journey to Lanka and discovery of Sita.
              </li>
              <li>
                <span className="font-semibold">Yuddha Kanda:</span> The great
                battle with Ravana, the rescue of Sita, and the return to
                Ayodhya.
              </li>
              <li>
                <span className="font-semibold">Uttara Kanda:</span> Rama's
                reign, the banishment of Sita, and Rama's departure from the
                earthly realm.
              </li>
            </ol>
          </div>
        )}

        {activeTab === "characters" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Sita",
                  description:
                    "Rama's wife and the incarnation of Goddess Lakshmi, representing purity, devotion, and sacrifice.",
                },
                {
                  name: "Lakshmana",
                  description:
                    "Rama's loyal younger brother who accompanied him during his exile, symbolizing brotherly love and service.",
                },
                {
                  name: "Hanuman",
                  description:
                    "The monkey god who served Rama with unwavering devotion, representing strength, intelligence, and selfless service.",
                },
                {
                  name: "Ravana",
                  description:
                    "The ten-headed demon king who abducted Sita, representing ego, desire, and the consequences of misusing knowledge and power.",
                },
              ].map((character) => (
                <div
                  key={character.name}
                  className="border-b pb-4 md:border-b-0 md:pb-0"
                >
                  <h4 className="text-lg font-bold text-orange-700 mb-2">
                    {character.name}
                  </h4>
                  <p className="text-gray-700">{character.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "lessons" && (
          <div>
            <h3 className="text-xl font-bold text-orange-700 mb-3">
              Spiritual Teachings
            </h3>
            <p className="text-gray-700 mb-4">
              The Ramayana is not just a story but a repository of moral and
              spiritual teachings:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Dharma (Righteousness):</span>{" "}
                Rama's adherence to dharma teaches the importance of moral and
                ethical conduct.
              </li>
              <li>
                <span className="font-semibold">Devotion and Loyalty:</span>{" "}
                Characters like Hanuman and Lakshmana exemplify unwavering
                devotion and loyalty.
              </li>
              <li>
                <span className="font-semibold">Sacrifice:</span> Rama's
                willingness to sacrifice his throne and comfort for the sake of
                his father's promise teaches the value of sacrifice.
              </li>
              <li>
                <span className="font-semibold">Good Governance:</span> Ram
                Rajya represents the ideal state where justice, peace, and
                prosperity prevail.
              </li>
              <li>
                <span className="font-semibold">
                  Triumph of Good over Evil:
                </span>{" "}
                Rama's victory over Ravana symbolizes the ultimate triumph of
                good over evil.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
