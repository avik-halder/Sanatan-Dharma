import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

export default function HoliPage() {
  const [selectedTab, setSelectedTab] = useState("holika");

  const regions = [
    {
      region: "Mathura and Vrindavan",
      description:
        "The birthplace of Lord Krishna celebrates Holi for 16 days. Temples are decorated, and special ceremonies are held.",
      uniqueTradition: (
        <>
          <span className="text-orange-500 font-medium">Lathmar Holi</span> in
          Barsana, where women playfully beat men with sticks as men shield
          themselves.
        </>
      ),
    },
    {
      region: "Uttar Pradesh",
      description:
        "Traditional celebrations with colors, music, and dance. Famous for its elaborate Holika Dahan ceremonies.",
      uniqueTradition: (
        <>
          In Kanpur, a special Holi procession called{" "}
          <span className="text-orange-500 font-medium">Ganga-Jamuni Holi</span>{" "}
          symbolizes Hindu-Muslim unity.
        </>
      ),
    },
    {
      region: "West Bengal",
      description:
        "Known as 'Dol Jatra' or 'Dol Purnima', it coincides with the birthday of Sri Chaitanya Mahaprabhu.",
      uniqueTradition: (
        <>
          Idols of Radha and Krishna are placed on swings{" "}
          <span className="text-orange-500 font-medium">(dols)</span> and
          devotees take turns swinging them.
        </>
      ),
    },
    {
      region: "Maharashtra",
      description:
        "Celebrated as Rangapanchami, it occurs five days after the full moon.",
      uniqueTradition:
        "People hang a pot of buttermilk high on the streets, and young men form human pyramids to break it.",
    },
    {
      region: "Gujarat",
      description:
        "A two-day festival with the burning of Holika on the first day and color play on the second.",
      uniqueTradition:
        "In Dwarka, Holi is celebrated with flowers (Phoolon ki Holi) at the Dwarkadhish Temple.",
    },
    {
      region: "Uttarakhand",
      description:
        "Known as the Kumaoni Holi, it is characterized by classical music and folk songs.",
      uniqueTradition:
        "Khadi Holi (sitting Holi) where classical ragas are sung, and Mahila Holi (women's Holi) with songs about seasonal changes.",
    },
  ];

  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Page Header */}
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
                  Holi - Festival of Colors
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  Celebrating the arrival of spring and the triumph of good over
                  evil
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Holi, known as the "Festival of Colors," is one of the most
                    vibrant and joyous Hindu festivals. It marks the arrival of
                    spring, the end of winter, and celebrates the eternal love
                    of Radha and Krishna. The festival also symbolizes the
                    triumph of good over evil.
                  </p>
                  <p>
                    Celebrated primarily in India and Nepal, Holi has now gained
                    popularity worldwide for its exuberant celebrations where
                    people smear each other with colors, dance to music, and
                    share festive foods.
                  </p>
                  <p>
                    Holi typically falls in March, on the full moon day of the
                    Hindu month of Phalguna. The festival lasts for a night and
                    a day, starting on the evening of Purnima (Full Moon day).
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  loading="lazy"
                  src={imageLinks.holi}
                  alt="People celebrating Holi with colorful powders"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mythological Origins Section */}
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
                Holi is associated with several legends in Hindu mythology
              </p>
            </motion.div>

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
                        selectedTab === "holika" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("holika")}
                      role="tab"
                    >
                      Holika & Prahlad
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "krishna" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("krishna")}
                      role="tab"
                    >
                      Krishna & Radha
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "kamadeva" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("kamadeva")}
                      role="tab"
                    >
                      Lord Shiva & Kamadeva
                    </button>
                  </li>
                </ul>
              </div>

              {/* Tabs Content */}
              <div className="tab-content">
                {/* Holika & Prahlad Tab */}
                {selectedTab === "holika" && (
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                        <img
                          loading="lazy"
                          src={imageLinks.holikaPrahlad}
                          alt="Holika Dahan ritual fire"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Holika and Prahlad
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The most popular legend associated with Holi is the
                          story of Holika and Prahlad. King Hiranyakashipu, who
                          considered himself God, was angered by his son
                          Prahlad's devotion to Lord Vishnu. After many failed
                          attempts to kill Prahlad, the king asked his sister
                          Holika, who had a boon to remain unharmed by fire, to
                          sit with Prahlad in a burning pyre.
                        </p>
                        <p className="text-gray-700">
                          However, when the fire was lit, Holika was burned to
                          ashes while Prahlad remained unharmed due to his
                          devotion to Lord Vishnu. This victory of good over
                          evil is celebrated as Holika Dahan on the eve of Holi,
                          where bonfires are lit to symbolize the burning of
                          Holika.
                        </p>
                        <Link to="/deities/vishnu">
                          <button className="text-orange-600 p-0 mt-2">
                            Learn more about Lord Vishnu
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Krishna & Radha Tab */}
                {selectedTab === "krishna" && (
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                        <img
                          loading="lazy"
                          src={imageLinks.radhaKrishna}
                          alt="Krishna applying colors to Radha"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Krishna and Radha
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Another popular legend links Holi to Lord Krishna. As
                          a child, Krishna was jealous of Radha's fair
                          complexion, as he himself had a dark blue skin tone.
                          Krishna's mother, tired of his complaints, suggested
                          that he apply color to Radha's face.
                        </p>
                        <p className="text-gray-700">
                          Krishna playfully applied colors to Radha and other
                          gopis (milkmaids), and this playful act became a
                          tradition. In the Braj region of India, where Krishna
                          grew up, Holi is celebrated with special enthusiasm
                          for 16 days in commemoration of this divine love.
                        </p>
                        <Link to="/deities/krishna">
                          <button className="text-orange-600 p-0 mt-2">
                            Learn more about Lord Krishna
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Lord Shiva & Kamadeva Tab */}
                {selectedTab === "kamadeva" && (
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                        <img
                          loading="lazy"
                          src={imageLinks.kamadeva}
                          alt="Kamadeva, the god of love"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Lord Shiva and Kamadeva
                        </h3>
                        <p className="text-gray-700 mb-4">
                          According to another legend, Holi is associated with
                          Kamadeva, the god of love. When Lord Shiva was in deep
                          meditation after the death of his wife Sati, the world
                          faced problems as demons became powerful in his
                          absence.
                        </p>
                        <p className="text-gray-700">
                          The gods requested Kamadeva to awaken Lord Shiva from
                          his meditation. Kamadeva shot his arrow of love at
                          Shiva, which disturbed his meditation. Angered, Shiva
                          opened his third eye and reduced Kamadeva to ashes.
                          Later, on Parvati's request, Shiva restored Kamadeva
                          to life but in a non-physical form. This resurrection
                          of Kamadeva is celebrated during Holi in some parts of
                          India.
                        </p>
                        <Link to="/deities/shiva">
                          <button className="text-orange-600 p-0 mt-2">
                            Learn more about Lord Shiva
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* How Holi is Celebrated */}
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
                How Holi is Celebrated
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Holi celebrations span two days with distinct traditions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-orange-100 border border-orange-500 rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-64">
                  <img
                    loading="lazy"
                    src={imageLinks.holikaDahan}
                    alt="Holika Dahan bonfire ceremony"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    Day 1: Holika Dahan (Evening)
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      The first evening of Holi is known as Holika Dahan or
                      Chhoti Holi (Small Holi). People gather around a bonfire
                      to celebrate the victory of good over evil.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium text-orange-700">
                          Bonfire Preparation:
                        </span>{" "}
                        Days before Holi, people collect wood and combustible
                        materials for the bonfire.
                      </li>
                      <li>
                        <span className="font-medium text-orange-700">
                          Ritual Ceremony:
                        </span>{" "}
                        An effigy of Holika is placed on top of the pyre, which
                        is then lit at night.
                      </li>
                      <li>
                        <span className="font-medium text-orange-700">
                          Prayers and Circumambulation:
                        </span>{" "}
                        People perform prayers, sing and dance around the fire,
                        and walk around it three times.
                      </li>
                      <li>
                        <span className="font-medium text-orange-700">
                          Offerings:
                        </span>{" "}
                        Some regions have traditions of offering grains,
                        coconut, and sweets to the fire.
                      </li>
                      <li>
                        <span className="font-medium text-orange-700">
                          Symbolic Cleansing:
                        </span>{" "}
                        The heat from the fire is believed to cleanse the air of
                        evil spirits and bad energies.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-orange-100 border border-orange-500 rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-64">
                  <img
                    loading="lazy"
                    src={imageLinks.rangwaliHoli}
                    alt="People playing with colors during Rangwali Holi"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    Day 2: Rangwali Holi (Morning)
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      The second day is known as Rangwali Holi, Dhulandi, or
                      Dhulendi. This is when the famous colorful celebrations
                      take place.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium text-orange-700">
                          Playing with Colors:
                        </span>{" "}
                        People smear each other with colored powders (gulal) and
                        drench each other with colored water.
                      </li>
                      <li>
                        <span className="font-medium text-orange-700">
                          Water Guns and Balloons:
                        </span>{" "}
                        Children and young people use pichkaris (water guns) and
                        water balloons filled with colored water.
                      </li>
                      <li>
                        <span className="font-medium text-orange-700">
                          Music and Dance:
                        </span>{" "}
                        Groups gather to sing and dance to traditional Holi
                        songs and modern music.
                      </li>
                      <li>
                        <span className="font-medium text-orange-700">
                          Special Foods:
                        </span>{" "}
                        Families prepare special Holi delicacies like gujiya,
                        mathri, malpua, and thandai.
                      </li>
                      <li>
                        <span className="font-medium text-orange-700">
                          Social Gathering:
                        </span>{" "}
                        People visit friends and relatives, exchange sweets, and
                        celebrate together.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Regional Holi Celebrations */}
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
                Regional Holi Celebrations
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Holi is celebrated with unique traditions across different
                regions of India
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regions.map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-400 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {region.region}
                    </h3>
                    <p className="text-gray-700 mb-4">{region.description}</p>
                    <div className="bg-orange-100 p-4 rounded-lg">
                      <h4 className="font-medium text-orange-700 mb-2">
                        Unique Tradition:
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {region.uniqueTradition}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Traditional Holi Foods */}
        <section className="py-16">
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
                  Traditional Holi Foods
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    No Holi celebration is complete without traditional foods
                    and beverages that add to the festive spirit:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium text-orange-700">
                        Gujiya:
                      </span>{" "}
                      Sweet dumplings filled with khoya (milk solids), nuts, and
                      dried fruits, deep-fried and soaked in sugar syrup.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Thandai:
                      </span>{" "}
                      A cooling milk-based drink flavored with almonds, fennel
                      seeds, cardamom, saffron, and sometimes bhang (cannabis).
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Puran Poli:
                      </span>{" "}
                      Sweet flatbread stuffed with a mixture of jaggery and
                      lentils, popular in Maharashtra.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Malpua:
                      </span>{" "}
                      Sweet pancakes soaked in sugar syrup, often served with
                      rabri (thickened sweetened milk).
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Dahi Bhalle:
                      </span>{" "}
                      Lentil dumplings soaked in yogurt and topped with spices
                      and chutneys.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Papri Chaat:
                      </span>{" "}
                      A savory snack made with crisp fried dough wafers, boiled
                      potatoes, chickpeas, yogurt, and chutneys.
                    </li>
                  </ul>
                  <p>
                    These delicacies are prepared in advance and shared with
                    family, friends, and neighbors during Holi gatherings.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    loading="lazy"
                    src={imageLinks.holiFood}
                    alt="Holi Foods"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Colors of Holi */}
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
                Colors of Holi
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The vibrant colors used in Holi have traditional significance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  color: "Red",
                  meaning: "Love and fertility",
                  traditional:
                    "Made from dried hibiscus flowers or the kumkum (vermilion) powder.",
                  bgColor: "bg-red-100",
                  textColor: "text-red-800",
                  borderColor: "border-red-500",
                },
                {
                  color: "Yellow",
                  meaning: "Knowledge and learning",
                  traditional:
                    "Derived from turmeric (haldi) mixed with gram flour.",
                  bgColor: "bg-yellow-100",
                  textColor: "text-yellow-800",
                  borderColor: "border-yellow-500",
                },
                {
                  color: "Blue",
                  meaning: "Divine and calmness",
                  traditional:
                    "Extracted from indigo plants or Indian berries.",
                  bgColor: "bg-blue-100",
                  textColor: "text-blue-800",
                  borderColor: "border-blue-500",
                },
                {
                  color: "Green",
                  meaning: "Harmony and new beginnings",
                  traditional:
                    "Made from mehendi (henna) leaves or dried neem leaves.",
                  bgColor: "bg-green-100",
                  textColor: "text-green-800",
                  borderColor: "border-green-500",
                },
                {
                  color: "Orange",
                  meaning: "Energy and enthusiasm",
                  traditional:
                    "Created using palash flowers or a mix of lime and turmeric.",
                  bgColor: "bg-orange-200",
                  textColor: "text-orange-800",
                  borderColor: "border-orange-500",
                },
                {
                  color: "Purple",
                  meaning: "Magic and mystery",
                  traditional: "Derived from grapes and berries.",
                  bgColor: "bg-purple-100",
                  textColor: "text-purple-800",
                  borderColor: "border-purple-500",
                },
                {
                  color: "Pink",
                  meaning: "Tenderness and compassion",
                  traditional: "Made from roses or tesu flowers.",
                  bgColor: "bg-pink-100",
                  textColor: "text-pink-800",
                  borderColor: "border-pink-500",
                },
                {
                  color: "White",
                  meaning: "Purity and peace",
                  traditional: "Created using rice flour.",
                  bgColor: "bg-gray-100",
                  textColor: "text-gray-800",
                  borderColor: "border-gray-500",
                },
              ].map((color, index) => (
                <motion.div
                  key={color.color}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`${color.bgColor} border-2 ${color.borderColor} rounded-xl overflow-hidden shadow-md p-6`}
                >
                  <h3 className={`text-xl font-bold ${color.textColor} mb-2`}>
                    {color.color}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Symbolizes: {color.meaning}
                  </p>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-gray-600">
                      Traditional Source:
                    </span>
                    <p className="text-sm text-gray-700">{color.traditional}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Spiritual Significance */}
        <section className="py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
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
                    Beyond the joyous celebrations, Holi carries deep spiritual
                    meanings:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium text-orange-700">
                        Triumph of Good:
                      </span>{" "}
                      Holi celebrates the victory of good over evil, reminding
                      us to uphold righteousness.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Forgiveness and Renewal:
                      </span>{" "}
                      The festival encourages people to forgive past mistakes
                      and start fresh relationships.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Equality:
                      </span>{" "}
                      When everyone is covered in colors, distinctions of caste,
                      creed, gender, and status disappear, promoting equality.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        End of Winter:
                      </span>{" "}
                      Holi marks the end of winter and the arrival of spring,
                      symbolizing the cycle of life and renewal.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Breaking Barriers:
                      </span>{" "}
                      The playful atmosphere helps break social barriers and
                      strengthens community bonds.
                    </li>
                  </ul>
                  <p>
                    The festival teaches us to embrace the colorful diversity of
                    life while remembering that underneath all our external
                    differences, we share a common humanity.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/festivals">
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded">
                      Back to Festivals
                    </button>
                  </Link>
                  <Link to="/festivals/janmashtami">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded">
                      Explore Janmashtmi
                    </button>
                  </Link>
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
                  loading="lazy"
                  src={imageLinks.holi2}
                  alt="Spiritual aspect of Holi celebration"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
