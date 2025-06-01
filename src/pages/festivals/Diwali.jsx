import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

const DiwaliPage = () => {
  const [selectedTab, setSelectedTab] = useState("ramayana");

  return (
    <div className="min-h-screen mt-16">
      <main>
        <section className="py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  Diwali - Festival of Lights
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  Celebrating the triumph of light over darkness and good over
                  evil
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Diwali, also known as Deepavali (the "festival of lights"),
                    is one of the most significant and widely celebrated
                    festivals in Hinduism. The festival spiritually signifies
                    the victory of light over darkness, good over evil,
                    knowledge over ignorance, and hope over despair.
                  </p>
                  <p>
                    The festival gets its name from the row (avali) of clay
                    lamps (deepa) that Indians light outside their homes to
                    symbolize the inner light that protects from spiritual
                    darkness. This festival is as important to Hindus as
                    Christmas is to Christians.
                  </p>
                  <p>
                    Diwali is celebrated over five days, with the main
                    celebration coinciding with the darkest night of the Hindu
                    lunar month Kartika. In 2023, Diwali falls on November 12.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  loading="lazy"
                  src={imageLinks.diwali}
                  alt="Diwali Celebration with oil lamps and colorful rangoli"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Mythological Origins
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Different regions in India celebrate Diwali for different
                mythological reasons.
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <div className="max-w-4xl mx-auto mb-4">
              <div className="relative right-0">
                <ul
                  className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-orange-200"
                  data-tabs="tabs"
                  role="list"
                >
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "ramayana" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("ramayana")}
                      role="tab"
                    >
                      Ramayana
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "krishna" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("krishna")}
                      role="tab"
                    >
                      Krishna Legend
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "lakshmi" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("lakshmi")}
                      role="tab"
                    >
                      Goddess Lakshmi
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              {selectedTab === "ramayana" && (
                <div className="tab-content">
                  <div className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                        <img
                          loading="lazy"
                          src={imageLinks.returnOfRama}
                          alt="Lord Rama's return to Ayodhya"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Return of Lord Rama to Ayodhya
                        </h3>
                        <p className="text-gray-700 mb-4">
                          In North India, Diwali celebrates the return of Lord
                          Rama, his wife Sita, and his brother Lakshmana to
                          Ayodhya after 14 years of exile and after defeating
                          the demon king Ravana.
                        </p>
                        <p className="text-gray-700">
                          This legend from the epic Ramayana symbolizes the
                          victory of good over evil. The lighting of lamps is a
                          way of paying homage to the sun, the giver of light
                          and energy.
                        </p>
                        <Link to="/deities/rama">
                          <button className="text-orange-600 p-0 mt-2">
                            Learn more about Lord Rama
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedTab === "krishna" && (
                <div className="tab-content">
                  <div className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                        <img
                          loading="lazy"
                          src={imageLinks.krishnaVictory}
                          alt="Krishna defeating Narakasura"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Krishna's Victory over Narakasura
                        </h3>
                        <p className="text-gray-700 mb-4">
                          In South India, Diwali often commemorates Lord
                          Krishna's victory over the demon Narakasura.
                        </p>
                        <p className="text-gray-700">
                          Lord Krishna, along with his wife Satyabhama, defeated
                          Narakasura and freed the imprisoned women. This day is
                          celebrated as Naraka Chaturdashi, the day before
                          Diwali.
                        </p>
                        <Link to="/deities/krishna">
                          <button className="text-orange-600 p-0 mt-2">
                            Learn more about Lord Krishna
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedTab === "lakshmi" && (
                <div className="tab-content">
                  <div className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                        <img
                          loading="lazy"
                          src={imageLinks.Lakshmi}
                          alt="Goddess Lakshmi with lotus flowers"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Worship of Goddess Lakshmi
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Diwali is also dedicated to the worship of Goddess
                          Lakshmi, the goddess of wealth and prosperity.
                        </p>
                        <p className="text-gray-700">
                          On Diwali night, people perform Lakshmi Puja in their
                          homes and workplaces, inviting prosperity and good
                          fortune for the coming year.
                        </p>
                        <Link to="/deities/lakshmi">
                          <button className="text-orange-600 p-0 mt-2">
                            Learn more about Goddess Lakshmi
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                The Five Days of Diwali
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Diwali is celebrated over five days, each with its own
                significance and rituals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  day: "Day 1",
                  name: "Dhanteras",
                  description:
                    "Dedicated to celebrating prosperity. People buy gold or silver and new utensils on this day.",
                  rituals:
                    "Homes are cleaned and decorated. Small footprints made from rice flour and vermilion powder are drawn to welcome Goddess Lakshmi.",
                },
                {
                  day: "Day 2",
                  name: "Naraka Chaturdashi",
                  description:
                    "Commemorates the victory of Lord Krishna over the demon Narakasura.",
                  rituals:
                    "Early morning ritual bath with oil is taken. People light lamps to drive away evil spirits.",
                },
                {
                  day: "Day 3",
                  name: "Lakshmi Puja",
                  description:
                    "The main day of Diwali festival. Dedicated to the worship of Goddess Lakshmi.",
                  rituals:
                    "Homes are illuminated with lamps. Families perform Lakshmi Puja and exchange gifts. Fireworks light up the sky.",
                },
                {
                  day: "Day 4",
                  name: "Govardhan Puja",
                  description:
                    "Commemorates Lord Krishna's protection of the villagers of Vrindavan from Indra's wrath.",
                  rituals:
                    "Food offerings are made to Lord Krishna. In some regions, this day marks the start of the new year.",
                },
                {
                  day: "Day 5",
                  name: "Bhai Dooj",
                  description:
                    "Celebrates the bond between brothers and sisters.",
                  rituals:
                    "Sisters perform aarti for their brothers and pray for their long life. Brothers give gifts to their sisters.",
                },
              ].map((day, index) => (
                <motion.div
                  key={day.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="justify-start flex felx-col">
                      <div className="h-12 w-12 text-sm bg-orange-200 rounded-full flex items-center justify-center text-orange-800 font-bold mb-4">
                        {day.day}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {day.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{day.description}</p>
                    <div className="border-t border-orange-100 pt-4">
                      <h4 className="font-medium text-orange-700 mb-2">
                        Rituals:
                      </h4>
                      <p className="text-gray-700 text-sm">{day.rituals}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6">
                  Diwali Celebrations
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Diwali is celebrated with great enthusiasm and joy across
                    India and by Hindus worldwide. The celebrations include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium text-orange-700">
                        Illumination:
                      </span>{" "}
                      Homes, temples, and public spaces are decorated with oil
                      lamps (diyas), candles, and electric lights.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Rangoli:
                      </span>{" "}
                      Colorful designs made on floors using colored powders,
                      flower petals, and sand.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Fireworks:
                      </span>{" "}
                      Lighting fireworks is a major part of Diwali celebrations,
                      symbolizing the driving away of evil spirits.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Feasting:
                      </span>{" "}
                      Families prepare elaborate meals and sweets (mithai) which
                      are shared with family and friends.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        New Clothes:
                      </span>{" "}
                      People wear new clothes to signify a fresh start and
                      renewal.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Gifts:
                      </span>{" "}
                      Exchange of gifts among family members, friends, and
                      colleagues.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Card Games:
                      </span>{" "}
                      Playing cards is a popular Diwali tradition, believed to
                      bring good fortune.
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1 grid grid-cols-2 gap-4"
              >
                <div className="relative h-[215px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    loading="lazy"
                    src={imageLinks.rangoli}
                    alt="Colorful Rangoli design for Diwali"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative h-[215px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    loading="lazy"
                    src={imageLinks.gifts}
                    alt="Traditional Diwali sweets and treats"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative h-[215px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    loading="lazy"
                    src={imageLinks.oilLamps}
                    alt="Oil lamps (diyas) lit for Diwali"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative h-[215px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    loading="lazy"
                    src={imageLinks.fireWorks}
                    alt="Fireworks display during Diwali"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Regional Variations
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Diwali is celebrated differently across various regions of India
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  region: "North India",
                  description:
                    "Celebrates Lord Rama's return to Ayodhya. Homes are decorated with rangoli, diyas, and electric lights.",
                  specialFeature:
                    "Ram Leela performances depicting scenes from the Ramayana are common.",
                },
                {
                  region: "South India",
                  description:
                    "Celebrates Krishna's victory over Narakasura. People wake up before sunrise and take an oil bath.",
                  specialFeature:
                    "Kolam (rangoli) designs are drawn at entrances, and bursting crackers is an essential part.",
                },
                {
                  region: "West India",
                  description:
                    "Marks the beginning of the new year for many. Lakshmi and Ganesh are worshipped for prosperity.",
                  specialFeature:
                    "In Gujarat, Chopda Pujan (worship of account books) is performed by businesses.",
                },
                {
                  region: "East India",
                  description:
                    "Dedicated to the worship of Goddess Kali in Bengal. Goddess Lakshmi is also worshipped.",
                  specialFeature:
                    "In Odisha, ancestors are remembered by burning jute stems.",
                },
                {
                  region: "Nepal",
                  description:
                    "Known as Tihar or Swanti. Celebrates the bond between humans, gods, and animals.",
                  specialFeature:
                    "Different days are dedicated to crows, dogs, cows, and oxen before the main Lakshmi Puja.",
                },
                {
                  region: "International",
                  description:
                    "Hindu communities worldwide celebrate with community gatherings and cultural programs.",
                  specialFeature:
                    "Public Diwali celebrations are held in countries like the USA, UK, Australia, and Canada.",
                },
              ].map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {region.region}
                    </h3>
                    <p className="text-gray-700 mb-4">{region.description}</p>
                    <div className="bg-orange-100 p-4 rounded-lg">
                      <h4 className="font-medium text-orange-700 mb-2">
                        Special Feature:
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {region.specialFeature}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Diwali Recipes
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Traditional sweets and savory dishes prepared during the
                festival
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Kaju Katli",
                  type: "Sweet",
                  description:
                    "Diamond-shaped cashew fudge with a silver foil topping.",
                  image: imageLinks.kajuKatli,
                },
                {
                  name: "Gulab Jamun",
                  type: "Sweet",
                  description: "Deep-fried milk solids soaked in sugar syrup.",
                  image: imageLinks.gulabJamun,
                },
                {
                  name: "Samosa",
                  type: "Savory",
                  description:
                    "Triangular pastry filled with spiced potatoes and peas.",
                  image: imageLinks.samosa,
                },
                {
                  name: "Chakli",
                  type: "Savory",
                  description:
                    "Spiral-shaped crispy snack made from rice and gram flour.",
                  image: imageLinks.chakli,
                },
                {
                  name: "Jalebi",
                  type: "Sweet",
                  description:
                    "Pretzel-shaped deep-fried batter soaked in sugar syrup.",
                  image: imageLinks.jalebi,
                },
                {
                  name: "Besan Ladoo",
                  type: "Sweet",
                  description:
                    "Sweet balls made from roasted gram flour, ghee, and sugar.",
                  image: imageLinks.besanLaddo,
                },
                {
                  name: "Mathri",
                  type: "Savory",
                  description: "Flaky, spiced crackers made from wheat flour.",
                  image: imageLinks.mathri,
                },
                {
                  name: "Aloo Tikki",
                  type: "Savory",
                  description:
                    "Spiced potato patties, shallow fried until crispy.",
                  image: imageLinks.alooTikki,
                },
              ].map((recipe, index) => (
                <motion.div
                  key={recipe.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      loading="lazy"
                      src={recipe.image || "/placeholder.svg"}
                      alt={recipe.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full mb-2 ${
                        recipe.type === "Sweet"
                          ? "bg-pink-100 text-pink-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {recipe.type}
                    </span>
                    <h3 className="text-lg font-bold text-orange-700 mb-1">
                      {recipe.name}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {recipe.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                    Beyond the festivities, Diwali holds deep spiritual
                    significance:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium text-orange-700">
                        Inner Light:
                      </span>{" "}
                      The lamps symbolize the inner light that dispels spiritual
                      darkness, ignorance, and negativity.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        New Beginnings:
                      </span>{" "}
                      Diwali marks new beginnings and the renewal of life,
                      encouraging people to let go of past grievances.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Prosperity:
                      </span>{" "}
                      The worship of Goddess Lakshmi reminds us to cultivate
                      prosperity not just in material wealth, but in knowledge,
                      peace, and compassion.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Unity:
                      </span>{" "}
                      The festival brings families and communities together,
                      strengthening bonds and fostering unity.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Self-Reflection:
                      </span>{" "}
                      Diwali is a time for introspection and self-improvement,
                      encouraging individuals to light the lamp of wisdom
                      within.
                    </li>
                  </ul>
                  <p>
                    The message of Diwali extends beyond religious boundaries,
                    reminding us all that light will ultimately triumph over
                    darkness, and knowledge over ignorance.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/festivals">
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded">
                      Back to Festivals
                    </button>
                  </Link>
                  <Link to="/festivals/holi">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded">
                      Explore Holi
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[460px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2"
              >
                <img
                  loading="lazy"
                  src={imageLinks.diwali2}
                  alt="Spiritual aspect of Diwali with meditation and prayer"
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

export default DiwaliPage;
