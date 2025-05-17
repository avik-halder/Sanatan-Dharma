import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import durgaPuja from "../../assets/Festivals/durga_puja.webp";
import durgaPuja1 from "../../assets/Festivals/DurgaPuja/DurgaPuja1.png";
import durgaPuja2 from "../../assets/Festivals/DurgaPuja/Durga Puja.jpg";
import themedDurgaPuja from "../../assets/Festivals/DurgaPuja/Themed Durga Pandal.png";
import traditionalDurgaPuja from "../../assets/Festivals/DurgaPuja/Traditional Durga Pandal.jpg";
import nightDurgaPuja from "../../assets/Festivals/DurgaPuja/Durga Puja at Night.jpg";
import nightDurgaPuja2 from "../../assets/Festivals/DurgaPuja/Mahisasur Mardini.jpg";

import dhunuciDance from "../../assets/Festivals/DurgaPuja/Dhunuci Dance.jpg";
import food from "../../assets/Festivals/DurgaPuja/Durga Puja Food.jpg";
import fashion from "../../assets/Festivals/DurgaPuja/Fashion.png";
import artsAndCrafts from "../../assets/Festivals/DurgaPuja/Durga Puja Arts and Crafts.jpg";
import literatureAndPublishing from "../../assets/Festivals/DurgaPuja/Literature and Publishing.jpg";
import communityBonding from "../../assets/Festivals/DurgaPuja/Durga Puja Community Bonding.jpg";

// import shailaputri from "../../assets/Deities/Durga/Shailaputri2.jpg";
// import brahmacharini from '../../assets/Deities/Durga/Brahmacharini2.jpg'
// import Chandraghanta from "../../assets/Deities/Durga/Chandraghanta.jpg";
// import Mahagauri from "../../assets/Deities/Durga/Mahagauri.jpg";
// import Siddhidatri from "../../assets/Deities/Durga/Siddhidatri.jpg";
// import skandamata from "../../assets/Deities/Durga/Skandamatha.jpg";
// import kushmanda from "../../assets/Deities/Durga/Kushmanda.jpg";
// import Katyayani from "../../assets/Deities/Durga/Katyayani.jpg";
// import Kalaratri from "../../assets/Deities/Durga/done/Kalaratri.png";

import shailaputri from "../../assets/Deities/Durga/ok/Shailaputri.jpg";
import brahmacharini from "../../assets/Deities/Durga/ok/Brahmacharini.jpg";
import chandraghanta from "../../assets/Deities/Durga/ok/Chandraghanta.jpg";
import kushmanda from "../../assets/Deities/Durga/ok/Kushmanda.jpg";
import skandamata from "../../assets/Deities/Durga/ok/Skandamata.jpg";
import katyayani from "../../assets/Deities/Durga/ok/Katyayani.jpg";
import kalaratri from "../../assets/Deities/Durga/ok/Kalaratri.jpg";
import mahagauri from "../../assets/Deities/Durga/ok/Mahagauri.jpg";
import siddhidatri from "../../assets/Deities/Durga/ok/Siddhidatri.jpg";

const DurgaPujaPage = () => {
  const [selectedTab, setSelectedTab] = useState("day1");

  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Significance of Durga Puja */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  Durga Puja
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  Celebrating the victory of Goddess Durga over the demon
                  Mahishasura.
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Durga Puja, also known as Durgotsava or Sharadotsav, is one
                    of the most important festivals in Hinduism. It celebrates
                    the victory of Goddess Durga over the demon king
                    Mahishasura, symbolizing the triumph of good over evil.
                  </p>
                  <p>
                    The festival honors{" "}
                    <>
                      <Link
                        to={"/deities/durga"}
                        className="text-orange-600 font-semibold underline"
                      >
                        Goddess Durga
                      </Link>
                    </>
                    , the divine mother who represents the power of the Supreme
                    Being that preserves moral order and righteousness in the
                    universe. With her ten arms carrying various weapons and
                    riding a lion, she is the embodiment of Shakti (divine
                    feminine energy).
                  </p>
                  <p>
                    While Durga Puja is celebrated throughout India, it is
                    particularly significant in the eastern states, especially
                    West Bengal, where it is the biggest festival of the year.
                    The festival typically falls in the Hindu month of Ashwin
                    (September-October), during the bright fortnight of the
                    lunar month.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2"
              >
                <img
                  src={durgaPuja}
                  alt="Goddess Durga idol during Durga Puja"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mythological Origin */}
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
                Mythological Origin
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The story behind Durga Puja and the creation of Goddess Durga
              </p>
            </motion.div>

            <div className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                  <img
                    src={durgaPuja1}
                    className="object-cover w-full h-full object-[center_75%] md:object-center"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    The Creation of Durga and Her Victory
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      According to Hindu mythology, there was a powerful demon
                      named Mahishasura who had received a boon from Lord Brahma
                      that no man or god could kill him. Empowered by this boon,
                      Mahishasura waged war against the gods and defeated them,
                      forcing them to flee their heavenly abode.
                    </p>
                    <p>
                      The defeated gods approached the Trinity of Brahma,
                      Vishnu, and Shiva for help. Enraged by Mahishasura's
                      actions, the three gods emitted intense energy from their
                      bodies, which took the form of a blazing light. The other
                      gods also contributed their energies, and from this
                      combined divine light emerged a beautiful female warrior -{" "}
                      <>
                        <Link
                          to={"/deities/durga"}
                          className="text-orange-600 font-semibold underline"
                        >
                          Goddess Durga
                        </Link>
                      </>
                      .
                    </p>
                    <p>
                      Each god gave Durga a weapon: Shiva gave his trident,
                      Vishnu his discus, Indra his thunderbolt, and so on. Thus
                      armed with celestial weapons and riding a lion, Durga went
                      to battle with Mahishasura. After nine days of fierce
                      fighting, on the tenth day (Vijaya Dashami), she finally
                      slew the demon, restoring peace and order to the universe.
                    </p>
                    <p>
                      This victory of Goddess Durga over Mahishasura is
                      celebrated during Durga Puja, symbolizing the triumph of
                      good over evil and the protection that the mother goddess
                      provides to her devotees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Nine Forms of Durga */}
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
                The Nine Forms of Durga
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                During Navratri, each day is dedicated to a different form of
                the goddess
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  day: "Day 1",
                  form: "Shailaputri",
                  description:
                    "Daughter of the mountains, representing the power of Brahma, Vishnu, and Shiva.",
                  color: "Red",
                  image: shailaputri,
                },
                {
                  day: "Day 2",
                  form: "Brahmacharini",
                  description:
                    "The one who practices devout austerity, embodying knowledge and wisdom.",
                  color: "Royal Blue",
                  image:
                    brahmacharini,
                },
                {
                  day: "Day 3",
                  form: "Chandraghanta",
                  description:
                    "The one who wears the moon in her bell, symbolizing bravery and courage.",
                  color: "Yellow",
                  image:
                    chandraghanta,
                },
                {
                  day: "Day 4",
                  form: "Kushmanda",
                  description:
                    "The creator of the universe, whose laugh created the cosmic egg (Brahmanda).",
                  color: "Green",
                  image: kushmanda,
                },
                {
                  day: "Day 5",
                  form: "Skandamata",
                  description:
                    "Mother of Skanda (Kartikeya), representing motherhood and fertility.",
                  color: "White",
                  image:
                    skandamata,
                },
                {
                  day: "Day 6",
                  form: "Katyayani",
                  description:
                    "The warrior form born to sage Katyayana, symbolizing courage.",
                  color: "Orange",
                  image: katyayani,
                },
                {
                  day: "Day 7",
                  form: "Kalaratri",
                  description:
                    "The destroyer of darkness and ignorance, the fiercest form of the goddess.",
                  color: "Black",
                  image: kalaratri,
                },
                {
                  day: "Day 8",
                  form: "Mahagauri",
                  description:
                    "The fair one who symbolizes purity, serenity, and tranquility.",
                  color: "Pink",
                  image: mahagauri,
                },
                {
                  day: "Day 9",
                  form: "Siddhidatri",
                  description:
                    "The bestower of supernatural powers and siddhis (perfection).",
                  color: "Purple",
                  image:
                    siddhidatri,
                },
              ].map((form, index) => (
                <motion.div
                  key={form.form}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-52 h-52 mx-auto mt-6">
                    <img
                      src={form.image || "/placeholder.svg"}
                      alt={form.form}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-orange-700">
                        {form.form}
                      </h3>
                      <span className="text-xs font-medium bg-orange-200 text-red-800 px-2 py-1 rounded-full">
                        {form.day}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{form.description}</p>
                    <div className="flex items-center mt-4">
                      <span className="text-sm font-medium text-gray-600 mr-2">
                        Color:
                      </span>
                      <span className="text-sm text-gray-700">
                        {form.color}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Five-Day Celebration Section with Tabs */}
        <section className="py-16 bg-orange-100">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                The Five-Day Celebration
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Durga Puja is celebrated over five days, each with its own
                significance and rituals.
              </p>
            </motion.div>

            <div className="tabs">
              <div className="md:hidden flex justify-center mb-4">
                <button
                  className={`px-4 py-2 text-md font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer bg-orange-200 text-orange-800 ${
                    selectedTab === "mahalaya"
                      ? "bg-white shadow-md"
                      : "bg-orange-100"
                  }`}
                  onClick={() => setSelectedTab("mahalaya")}
                >
                  Mahalaya
                </button>
              </div>
              <div className="relative right-0 mb-4">
                <ul
                  className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-orange-200"
                  data-tabs="tabs"
                  role="list"
                >
                  <li className="z-30 flex-auto text-center hidden md:block">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "mahalaya" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("mahalaya")}
                      role="tab"
                    >
                      Mahalaya
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "day1" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("day1")}
                      role="tab"
                    >
                      Day 1
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "day2" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("day2")}
                      role="tab"
                    >
                      Day 2
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "day3" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("day3")}
                      role="tab"
                    >
                      Day 3
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "day4" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("day4")}
                      role="tab"
                    >
                      Day 4
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "day5" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("day5")}
                      role="tab"
                    >
                      Day 5
                    </button>
                  </li>
                </ul>
              </div>

              {/* Tab Contents */}
              <div className="tab-content">
                {selectedTab === "mahalaya" && (
                  <div className="bg-orange-50 border border-orange-500 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-4 text-center md:text-start">
                      Mahalaya (Invocation)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Mahalaya marks the beginning of Durga Puja celebrations.
                      It is the day when the goddess is believed to descend to
                      Earth. Early in the morning, people listen to "
                      <span className="text-orange-600 font-semibold">
                        Mahishasura Mardini
                      </span>
                      ," a famous radio program that narrates the story of
                      Durga's victory.
                    </p>
                    <p className="text-gray-700 mb-4">
                      On this day, the{" "}
                      <span className="text-orange-600 font-semibold">
                        eyes
                      </span>{" "}
                      of the Durga idols are drawn, a ritual known as "
                      <span className="text-orange-600 font-semibold">
                        Chokkhu Daan
                      </span>
                      " (giving of eyes). This ritual is considered highly
                      sacred as it brings the idol to life.
                    </p>
                    <p className="text-gray-700">
                      Mahalaya is also a day to pay homage to ancestors through
                      the ritual of "
                      <span className="text-orange-600 font-semibold">
                        Tarpan
                      </span>
                      ," where offerings are made to departed souls.
                    </p>
                  </div>
                )}

                {selectedTab === "day1" && (
                  <div className="bg-orange-50 border border-orange-500 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-4 text-center md:text-start">
                      Shashthi (Welcoming)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Shashthi marks the official beginning of Durga Puja. The
                      deity is welcomed with elaborate rituals, and the puja{" "}
                      <span className="text-orange-600 font-semibold">
                        pandals
                      </span>{" "}
                      (temporary structures) are opened to the public.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The main ritual on this day is "
                      <span className="text-orange-600 font-semibold">
                        Bodhon
                      </span>
                      ," where the goddess is awakened. A small banana plant
                      called "
                      <span className="text-orange-600 font-semibold">
                        Kola Bou
                      </span>
                      " (banana bride) is bathed in the river and dressed in a
                      sari, symbolizing the goddess.
                    </p>
                    <p className="text-gray-700">
                      The evening{" "}
                      <span className="text-orange-600 font-semibold">
                        aarti
                      </span>{" "}
                      (ritual of light) on Shashthi is particularly significant,
                      as it marks the beginning of the main celebrations.
                    </p>
                  </div>
                )}

                {selectedTab === "day2" && (
                  <div className="bg-orange-50 border border-orange-500 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-4 text-center md:text-start">
                      Saptami (Seventh Day)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Saptami is when the main{" "}
                      <span className="text-orange-600 font-semibold">
                        puja
                      </span>{" "}
                      (worship) begins. The day starts with "
                      <span className="text-orange-600 font-semibold">
                        Pran Pratistha
                      </span>
                      ," the ritual that infuses life into the idol, followed by
                      "
                      <span className="text-orange-600 font-semibold">
                        Navapatrika Puja
                      </span>
                      ," the worship of nine plants representing the nine forms
                      of the goddess.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The nine plants are tied together with a white cloth and
                      considered a form of the goddess. They are given a
                      ceremonial bath and placed next to the idol.
                    </p>
                    <p className="text-gray-700">
                      This is also the day when devotees begin visiting
                      different{" "}
                      <span className="text-orange-600 font-semibold">
                        pandals
                      </span>{" "}
                      to see the various artistic interpretations of the goddess
                      and her entourage.
                    </p>
                  </div>
                )}

                {selectedTab === "day3" && (
                  <div className="bg-orange-50 border border-orange-500 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-4 text-center md:text-start">
                      Ashtami (Eighth Day)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Ashtami is considered the most important day of Durga
                      Puja. The main ritual is "
                      <span className="text-orange-600 font-semibold">
                        Pushpanjali
                      </span>
                      ," where devotees offer flowers to the goddess while
                      chanting mantras.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Another significant ritual is "
                      <span className="text-orange-600 font-semibold">
                        Kumari Puja
                      </span>
                      ," where a young pre-pubescent girl is worshipped as a
                      living embodiment of the goddess. She is dressed in red,
                      adorned with jewelry, and offered food and gifts.
                    </p>
                    <p className="text-gray-700">
                      The "
                      <span className="text-orange-600 font-semibold">
                        Sandhi Puja
                      </span>
                      " is performed at the juncture of Ashtami and Navami,
                      which is considered the exact time when Durga killed
                      Mahishasura. This is the most auspicious time of the
                      festival, and 108 lamps are lit, and 108 lotus flowers are
                      offered.
                    </p>
                  </div>
                )}

                {selectedTab === "day4" && (
                  <div className="bg-orange-50 border border-orange-500 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-4 text-center md:text-start">
                      Navami (Ninth Day)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Navami continues with more pujas and offerings. The "
                      <span className="text-orange-600 font-semibold">
                        Maha Aarti
                      </span>
                      " (grand ritual of light) is performed, and devotees
                      participate in cultural programs and feasts. On this day,
                      the goddess is honored for her strength and power.
                    </p>
                    <p className="text-gray-700">
                      People engage in grand celebrations, including dances,
                      music, and community gatherings. The energy and devotion
                      of the day is symbolic of the goddess's triumph over evil.
                    </p>
                  </div>
                )}

                {selectedTab === "day5" && (
                  <div className="bg-orange-50 border border-orange-500 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-4 text-center md:text-start">
                      Dashami (Tenth Day)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Dashami marks the end of Durga Puja. The day begins with "
                      <span className="text-orange-600 font-semibold">
                        Sindoor Khela
                      </span>
                      ," where married women apply vermilion to the goddess and
                      then to each other, celebrating fertility and marital
                      bliss.
                    </p>
                    <p className="text-gray-700">
                      The final ritual is "
                      <span className="text-orange-600 font-semibold">
                        Visarjan
                      </span>
                      " (immersion), where the idol is carried in a procession
                      and immersed in a river or sea. This symbolizes the
                      goddess returning to her husband, Lord Shiva, in the
                      Himalayas. Devotees bid an emotional farewell, saying "
                      <span className="text-orange-600 font-semibold">
                        Asche bochor abar hobe
                      </span>
                      " (It will happen again next year).
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-2 lg:order-2"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6">
                  Durga Puja Pandals
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    One of the most distinctive features of Durga Puja is the
                    creation of elaborate pandals (temporary structures) that
                    house the deity:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium text-orange-700">
                        Artistic Marvels:
                      </span>{" "}
                      Pandals are often designed to replicate famous landmarks,
                      temples, or contemporary themes, showcasing incredible
                      craftsmanship.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Community Effort:
                      </span>{" "}
                      Each locality or community creates its own pandal,
                      competing to make the most impressive and innovative
                      structure.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Eco-friendly Initiatives:
                      </span>{" "}
                      In recent years, there has been a growing trend of
                      creating eco-friendly pandals using sustainable materials.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Lighting and Decoration:
                      </span>{" "}
                      Pandals are adorned with elaborate lighting arrangements,
                      creating a magical atmosphere, especially at night.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Cultural Hubs:
                      </span>{" "}
                      Beyond housing the deity, pandals serve as venues for
                      cultural programs, including music, dance, and drama
                      performances.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Pandal Hopping:
                      </span>{" "}
                      Visiting different pandals, known as "pandal hopping," is
                      a popular activity during the festival, with people often
                      staying out all night to see as many as possible.
                    </li>
                  </ul>
                  <p>
                    The creation of pandals provides employment to numerous
                    artisans and craftspeople, preserving traditional skills
                    while also embracing innovation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-1 grid grid-cols-2 gap-4"
              >
                <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={nightDurgaPuja2}
                    alt="Elaborate Durga Puja pandal in Kolkata"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={themedDurgaPuja}
                    alt="Themed Durga Puja pandal"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={traditionalDurgaPuja}
                    alt="Traditional Durga Puja pandal"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={nightDurgaPuja}
                    alt="Illuminated Durga Puja pandal at night"
                    className="object-cover w-full h-full"
                  />
                </div>
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
                Cultural Celebrations
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Durga Puja is as much a cultural festival as it is a religious
                one
              </p>
            </motion.div>

            {/* Cultural Aspects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  aspect: "Music and Dance",
                  description:
                    "Cultural programs featuring classical and folk music, dance performances, and theatrical productions are organized at pandals.",
                  highlight:
                    "Dhunuchi dance, performed with earthen lamps filled with burning coconut husks and incense, is a special feature of the evening aartis.",
                  image: dhunuciDance,
                },
                {
                  aspect: "Food",
                  description:
                    "Food is an integral part of Durga Puja celebrations, with special bhog (food offerings) prepared and distributed to devotees.",
                  highlight:
                    "Traditional Bengali dishes like khichuri, labra (mixed vegetable curry), payesh (rice pudding), and mishti (sweets) are must-haves during the festival.",
                  image: food,
                },
                {
                  aspect: "Fashion",
                  description:
                    "People dress in their finest clothes, with new outfits often purchased specifically for the occasion.",
                  highlight:
                    "Women traditionally wear red and white sarees, especially on Dashami, while men wear kurtas or traditional Bengali attire like dhoti-punjabi.",
                  image: fashion,
                },
                {
                  aspect: "Art and Crafts",
                  description:
                    "The creation of Durga idols is itself a major art form, with skilled artisans working for months to create the perfect representation of the goddess.",
                  highlight:
                    "The idol-making hub of Kumartuli in Kolkata is famous for its traditional clay artisans who create thousands of Durga idols each year.",
                  image: artsAndCrafts,
                },
                {
                  aspect: "Literature and Publishing",
                  description:
                    "Special Puja editions of magazines and books are published, featuring works by renowned authors and new talents alike.",
                  highlight:
                    "These 'Pujabarshikis' (annual Puja publications) are eagerly awaited and collected by literature enthusiasts.",
                  image: literatureAndPublishing,
                },
                {
                  aspect: "Community Bonding",
                  description:
                    "The festival brings together people from all walks of life, transcending social, economic, and religious boundaries.",
                  highlight:
                    "It's common for people to visit friends and relatives, exchange gifts, and seek blessings from elders during this time.",
                  image: communityBonding,
                },
              ].map((aspect, index) => (
                <motion.div
                  key={aspect.aspect}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-400 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 p-5 pb-0">
                    <img
                      src={aspect.image || "/placeholder.svg"}
                      alt={aspect.aspect}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {aspect.aspect}
                    </h3>
                    <p className="text-gray-700 mb-4">{aspect.description}</p>
                    <div className="bg-orange-100 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm">
                        {aspect.highlight}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                  Spiritual Significance
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Beyond the festivities, Durga Puja holds deep spiritual
                    meanings:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium text-orange-700">
                        Divine Feminine Power:
                      </span>{" "}
                      Durga represents Shakti, the primordial cosmic energy that
                      creates, preserves, and transforms the universe.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Victory of Good:
                      </span>{" "}
                      The festival celebrates the triumph of good over evil,
                      encouraging devotees to overcome negative forces in their
                      lives.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Protection:
                      </span>{" "}
                      Durga is seen as the universal mother who protects her
                      children (devotees) from all harm and suffering.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Balance of Energies:
                      </span>{" "}
                      The goddess embodies both nurturing and fierce aspects,
                      teaching the importance of balance in life.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Unity in Diversity:
                      </span>{" "}
                      The festival brings together people from different
                      backgrounds, promoting social harmony and cultural unity.
                    </li>
                  </ul>
                  <p>
                    For many devotees, the festival is a time for spiritual
                    renewal, seeking the goddess's blessings for strength,
                    courage, and wisdom to face life's challenges.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/festivals">
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded">
                      Back to Festivals
                    </button>
                  </Link>
                  <Link to="/festivals/diwali">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded">
                      Explore Diwali
                    </button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-lg order-1 lg:order-2"
              >
                <img
                  src={durgaPuja2}
                  alt="Spiritual aspect of Durga Puja"
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

export default DurgaPujaPage;
