import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import babykrishna from "../../assets/Festivals/Janmashtami/Baby Krishna with Butter.png";
import birthStory from "../../assets/Festivals/Janmashtami/Birth Story of Krishna.png";
import janmashtami from "../../assets/Festivals/janmashtami.webp";

import fasting from "../../assets/Festivals/Janmashtami/Fasting.png";
import midnightCelebrations from "../../assets/Festivals/Janmashtami/Midnight Celebrations.png";
import jhankis from "../../assets/Festivals/Janmashtami/Jhankis.png";

import mathuraVrindavan from "../../assets/Festivals/Janmashtami/Mathura and Vrindavan.png";
import raasGarba from "../../assets/Festivals/Janmashtami/Raas Garba.png";
import dahiHandi from "../../assets/Festivals/Janmashtami/Dahi Handi.png";
import gokulashtami from "../../assets/Festivals/Janmashtami/Gokulashtami.png";
import chappanBhog from "../../assets/Festivals/Janmashtami/Chappan Bhog.png";
import northernIndia from "../../assets/Festivals/Janmashtami/Northern India.png";

import makhanMishri from "../../assets/Festivals/Janmashtami/Makhan Mishri.png";
import panjiri from "../../assets/Festivals/Janmashtami/Panjiri.png";
import charnamrit from "../../assets/Festivals/Janmashtami/Charnamrit.png";
import dhaniyaPanjiri from "../../assets/Festivals/Janmashtami/Dhaniya Panjiri.png";
import makhanaKheer from "../../assets/Festivals/Janmashtami/Makhana Kheer.png";
import gopalkala from "../../assets/Festivals/Janmashtami/Gopalkala.png";

function JanmashtamiPage() {
  const [activeTab, setActiveTab] = useState("fasting");

  const tabContent = {
    fasting: (
      <div className="bg-orange-100 border border-orange-500 rounded-lg p-6 shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
            <img
              src={fasting}
              alt="Devotees fasting on Janmashtami"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold text-orange-700 mb-4">
              Devotional Fasting
            </h3>
            <p className="text-gray-700 mb-4">
              One of the most important aspects of Janmashtami is observing a
              fast (vrat) until midnight, the time of Krishna's birth. Many
              devotees observe a complete fast without water, while others opt
              for a partial fast, consuming only fruits, milk, and water.
            </p>
            <p className="text-gray-700 mb-4">
              The fast is broken at midnight after the birth of Krishna is
              celebrated with special prayers and offerings. The timing of
              breaking the fast is considered auspicious and is determined
              according to the Hindu lunar calendar.
            </p>
            <p className="text-gray-700">
              During the fast, devotees spend their time in spiritual activities
              like reading scriptures, singing devotional songs (bhajans), and
              meditating on the life and teachings of Lord Krishna. This fasting
              is believed to purify the body and mind, making one more receptive
              to divine grace.
            </p>
          </div>
        </div>
      </div>
    ),
    midnight: (
      <div className="bg-orange-100 border border-orange-500 rounded-lg p-6 shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
            <img
              src={midnightCelebrations}
              alt="Midnight celebrations of Krishna's birth"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold text-orange-700 mb-4">
              Midnight Celebrations
            </h3>
            <p className="text-gray-700 mb-4">
              The most significant moment of Janmashtami is the midnight
              celebration that marks Krishna's birth. Temples and homes are
              beautifully decorated, and the air is filled with the sound of
              devotional songs and chants.
            </p>
            <p className="text-gray-700 mb-4">
              At midnight, the birth of Krishna is announced with the blowing of
              conch shells, ringing of bells, and joyous chanting. The idol of
              baby Krishna is bathed with panchamrit (a mixture of milk, curd,
              ghee, honey, and sugar), dressed in new clothes, and placed in a
              decorated cradle.
            </p>
            <p className="text-gray-700">
              Devotees perform aarti (ritual of light) and offer bhog (food
              offerings) to the deity. Special prasad (blessed food) is
              distributed, which typically includes makhan (butter) and mishri
              (rock sugar), foods that Krishna was particularly fond of as a
              child.
            </p>
          </div>
        </div>
      </div>
    ),
    dahiHandi: (
      <div className="bg-orange-100 border border-orange-500 rounded-lg p-6 shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
            <img
              src={dahiHandi}
              alt="Dahi Handi celebration with human pyramid"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold text-orange-700 mb-4">
              Dahi Handi
            </h3>
            <p className="text-gray-700 mb-4">
              Dahi Handi is a popular tradition observed primarily in
              Maharashtra and parts of Gujarat. It recreates Krishna's playful
              childhood antics of stealing butter (makhan) from earthen pots
              hung high up in homes.
            </p>
            <p className="text-gray-700 mb-4">
              An earthen pot (handi) filled with curd (dahi), butter, fruits,
              and money is suspended at a height. Teams of young men and boys,
              known as "Govindas," form human pyramids to reach and break the
              pot. The team that successfully breaks the pot receives prizes and
              accolades.
            </p>
            <p className="text-gray-700">
              This event is accompanied by music, dance, and cheering crowds. It
              has evolved into a competitive sport with teams from different
              localities competing against each other. The celebration
              symbolizes teamwork, courage, and the playful spirit of Krishna.
            </p>
          </div>
        </div>
      </div>
    ),
    jhankis: (
      <div className="bg-orange-100 border border-orange-500 rounded-lg p-6 shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
            <img
              src={jhankis}
              alt="Jhanki depicting scenes from Krishna's life"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold text-orange-700 mb-4">
              Jhankis (Tableaux)
            </h3>
            <p className="text-gray-700 mb-4">
              Jhankis are elaborate tableaux that depict various scenes from
              Krishna's life. These are set up in temples, community centers,
              and sometimes in homes during Janmashtami.
            </p>
            <p className="text-gray-700 mb-4">
              The scenes typically include Krishna's birth in the prison, his
              journey across the Yamuna river, his childhood in Gokul, his
              butter-stealing escapades, his dance with the gopis (Raas Leela),
              and other significant events from his life.
            </p>
            <p className="text-gray-700">
              These jhankis are created with great artistic skill and devotion,
              using figurines, decorative items, and creative backdrops. They
              serve as visual storytelling tools that help devotees, especially
              children, connect with the stories and teachings of Krishna.
            </p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* The Significance of Janmashtami */}
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
                  Janmashtami
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  Celebrating the divine birth of Lord Krishna, the eighth
                  avatar of Vishnu
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Janmashtami, also known as Krishna Janmashtami or
                    Gokulashtami, is one of the most widely celebrated Hindu
                    festivals. It marks the birth of Lord Krishna, the eighth
                    avatar of Lord Vishnu, who is revered as the supreme deity
                    in many Hindu traditions.
                  </p>
                  <p>
                    According to Hindu mythology, Krishna was born at midnight
                    on the eighth day (Ashtami) of the dark fortnight in the
                    month of Shravan (August-September). His birth is celebrated
                    with great devotion and enthusiasm across India and by
                    Hindus worldwide.
                  </p>
                  <p>
                    Krishna is one of the most beloved deities in Hinduism,
                    known for his playful nature, divine wisdom, and the
                    profound teachings he imparted in the Bhagavad Gita.
                    Janmashtami celebrates not just his birth but also his
                    eternal message of righteousness, devotion, and divine love.
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
                  src={babykrishna}
                  alt="Baby Krishna with butter"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Birth Story of Krishna */}
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
                The Birth Story of Krishna
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The miraculous circumstances surrounding Lord Krishna's birth
              </p>
            </motion.div>

            <div className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-[200px] md:h-auto rounded-lg overflow-hidden">
                  <img
                    src={birthStory}
                    alt="The birth of Lord Krishna in prison"
                    className="object-cover w-full h-full object-[center_25%] md:object-center"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    Divine Birth in Adversity
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      The story begins in the kingdom of Mathura, ruled by the
                      tyrannical King Kansa. After hearing a divine prophecy
                      that the eighth child of his sister Devaki would kill him,
                      Kansa imprisoned Devaki and her husband Vasudeva.
                    </p>
                    <p>
                      Kansa killed the first six children of Devaki as soon as
                      they were born. The seventh child, Balarama, was
                      mystically transferred to the womb of Rohini (another wife
                      of Vasudeva) to save him from Kansa's wrath.
                    </p>
                    <p>
                      When Devaki was pregnant with her eighth child,
                      extraordinary events began to unfold. On a stormy night,
                      at the stroke of midnight, Lord Krishna was born in the
                      prison cell. At the moment of his birth, the prison guards
                      fell into a deep slumber, and the shackles that bound
                      Vasudeva miraculously fell open.
                    </p>
                    <p>
                      Following divine instructions, Vasudeva carried the
                      newborn Krishna across the flooded Yamuna river to Gokul.
                      The river parted to make way for them, and the divine
                      serpent Shesha spread its hood to protect the baby from
                      the rain. In Gokul, Vasudeva exchanged Krishna with the
                      newborn daughter of Nanda and Yashoda, and returned to the
                      prison with the girl child.
                    </p>
                    <p>
                      When Kansa came to kill the child, she transformed into
                      the goddess Yogamaya and warned him that his destroyer was
                      already safe elsewhere. Thus, Krishna grew up in Gokul
                      under the loving care of his foster parents, Nanda and
                      Yashoda, fulfilling his divine mission on Earth.
                    </p>
                  </div>
                  <Link to="/deities/krishna">
                    <button className="text-orange-600 p-0 mt-2">
                      Learn more about Lord Krishna
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Janmashtami Celebrations */}
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
                Janmashtami Celebrations
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                How Janmashtami is celebrated across different regions of India
              </p>
            </motion.div>

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
                        activeTab === "fasting" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab("fasting")}
                      role="tab"
                    >
                      Fasting
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        activeTab === "midnight" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab("midnight")}
                      role="tab"
                    >
                      Midnight Celebrations
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        activeTab === "dahiHandi" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab("dahiHandi")}
                      role="tab"
                    >
                      Dahi Handi
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        activeTab === "jhankis" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab("jhankis")}
                      role="tab"
                    >
                      Jhankis
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content max-w-4xl mx-auto">
              {tabContent[activeTab]}
            </div>
          </div>
        </section>

        {/* Regional Celebrations */}
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
                Regional Celebrations
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Janmashtami is celebrated with unique traditions across
                different regions of India
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  region: "Mathura and Vrindavan",
                  description:
                    "The birthplace of Krishna and the land where he spent his childhood celebrates Janmashtami with unparalleled fervor.",
                  uniqueTradition:
                    <>Temples are elaborately decorated, and special <span className="text-orange-600 font-medium">abhishekams</span> (ritual baths) are performed for the deities. The Raas Leela, depicting Krishna's dance with the gopis, is performed with great devotion.</>,
                  image: mathuraVrindavan,
                },
                {
                  region: "Maharashtra",
                  description:
                    "Known for the energetic Dahi Handi celebrations that take place a day after Janmashtami, called Gopalkala.",
                  uniqueTradition:
                    "Women draw footprints with rice flour from the entrance of the house to the pooja room, symbolizing Krishna's entry into their homes.",
                  image: dahiHandi,
                },
                {
                  region: "Gujarat",
                  description:
                    "Celebrated as Krishna Janmashtami or Gokulashtami with great enthusiasm.",
                  uniqueTradition:
                    <>Devotees perform <span className="text-orange-600 font-medium">Raas Garba</span>, a traditional dance form, and sing devotional songs. Makhan Handi (breaking of a pot filled with butter) is also a popular tradition.</>,
                  image: raasGarba,
                },
                {
                  region: "South India",
                  description:
                    "Known as Gokulashtami or Sri Jayanthi, with unique traditions in different southern states.",
                  uniqueTradition:
                    <>In Tamil Nadu, <span className="text-orange-600 font-medium">kolams</span> (rangoli) are drawn at entrances, and homes are decorated with mango leaves. In Andhra Pradesh and Telangana, children dress up as Krishna and Radha.</>,
                  image: gokulashtami,
                },
                {
                  region: "Eastern India",
                  description:
                    "Celebrated with devotional fervor in states like Odisha, West Bengal, and Assam.",
                  uniqueTradition:
                    <>In Odisha, homes and temples prepare <span className="text-orange-600 font-medium">chappan bhog (56 food items)</span> as an offering to Krishna. In Bengal, devotees observe fasting and perform special pujas. In Assam, Krishna's birth is celebrated with naam-kirtans (devotional songs).</>,
                  image: chappanBhog,
                },
                {
                  region: "Northern India",
                  description:
                    "Celebrated with great enthusiasm in states like Uttar Pradesh, Rajasthan, and Punjab.",
                  uniqueTradition:
                    "In Uttar Pradesh, especially in Mathura and Vrindavan, elaborate processions and performances are held. In Rajasthan, temples are decorated with flowers and lights, and special sweets are prepared.",
                  image: northernIndia,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative h-56">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.region} Janmashtami celebrations`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {item.region}
                    </h3>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <div className="bg-orange-100 p-4 rounded-lg">
                      <h4 className="font-medium text-orange-700 mb-2">
                        Unique Tradition:
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {item.uniqueTradition}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Traditional Foods */}
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
                Traditional Foods
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Special dishes prepared during Janmashtami celebrations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Makhan Mishri",
                  description:
                    "White butter mixed with crystallized sugar, representing Krishna's love for butter.",
                  image: makhanMishri,
                },
                {
                  name: "Panjiri",
                  description:
                    "A sweet dish made with whole wheat flour, ghee, sugar, and dry fruits, offering energy during fasting.",
                  image: panjiri,
                },
                {
                  name: "Charnamrit",
                  description:
                    "A sacred drink made of milk, yogurt, honey, sugar, and tulsi leaves, offered to Lord Krishna.",
                  image: charnamrit,
                },
                {
                  name: "Dhaniya Panjiri",
                  description:
                    "A nutritious sweet made with roasted coriander seeds, dry fruits, and sugar.",
                  image: dhaniyaPanjiri,
                },
                {
                  name: "Makhana Kheer",
                  description:
                    "A pudding made with fox nuts, milk, and sugar, commonly prepared during fasting.",
                  image: makhanaKheer,
                },
                {
                  name: "Gopalkala",
                  description:
                    "A mixture of flattened rice, yogurt, cucumber, and spices, popular in Maharashtra.",
                  image: gopalkala,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative h-48">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.name} - Traditional Janmashtami food`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Spiritual Significance */}
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
                    Beyond the joyous celebrations, Janmashtami carries deep
                    spiritual meanings:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium text-orange-700">
                        Divine Intervention:
                      </span>{" "}
                      Krishna's birth represents the arrival of divine
                      intervention to restore dharma and righteousness in the
                      world.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Awakening of the Divine Within:
                      </span>{" "}
                      Krishna's life and teachings encourage the awakening of
                      divine consciousness within each individual.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Bhakti and Surrender:
                      </span>{" "}
                      The festival emphasizes the importance of devotion
                      (bhakti) and complete surrender to God, as exemplified in
                      Krishna's teachings.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Victory of Good over Evil:
                      </span>{" "}
                      Krishna's birth marks the triumph of good over evil, as he
                      was born to defeat the tyrannical King Kansa and restore
                      peace.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Universal Love:
                      </span>{" "}
                      Krishna's love transcends boundaries of caste, creed, and
                      social status, symbolizing the universality of divine
                      love.
                    </li>
                  </ul>
                  <p>
                    Janmashtami teaches us to embrace divine wisdom, to follow
                    the path of righteousness, and to surrender to the divine
                    will with love and devotion.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/festivals">
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded">
                      Back to Festivals
                    </button>
                  </Link>
                  <Link to="/festivals/shivaratri">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded">
                      Explore Maha Shivaratri
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
                  src={janmashtami}
                  alt="Spiritual aspect of Janmashtami celebration"
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

export default JanmashtamiPage;
