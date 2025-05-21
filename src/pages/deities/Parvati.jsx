import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import parvati from "../../assets/Deities/Parvati/Parvati.jpg";
import parvatiTapasya from "../../assets/Deities/Parvati/Parvati Tapasya.png";
import ganeshBirth from "../../assets/Deities/Parvati/Birth.jpg";
import ardhanarishvara from "../../assets/Deities/Shiva/Ardhanarishvara.png";
import shiva from "../../assets/Deities/Parvati/Lord_Shiva.jpg";
import kartikeya from "../../assets/Deities/Parvati/Lord Kartikeya.jpg";
import ganesh from "../../assets/Deities/Ganesh/broken teeth.jpg";
import family from "../../assets/Deities/Parvati/Lord Shiva with family.jpg";
import worship from "../../assets/Deities/Parvati/Worship of Parvati.jpg";

import gauri from "../../assets/Deities/Parvati/Gauri.jpg";
import uma from "../../assets/Deities/Parvati/Uma.jpg";
import kali from "../../assets/Deities/Parvati/Kali.jpg";
import hemavati from "../../assets/Deities/Parvati/Hemavati.jpg";
import annapurna from "../../assets/Deities/Parvati/Annapurna.jpg";
import durga from "../../assets/Deities/Durga.webp";

const ParvatiPage = () => {
  const [activeTab, setActiveTab] = useState("stories");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen mt-16">
      <main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center lg:text-start">
                    Goddess Parvati
                  </h1>
                  <h2 className="text-md md:text-lg font-medium text-amber-600 mb-4 md:mb-8 text-center lg:text-start">
                    The divine mother, consort of Lord Shiva, and embodiment of
                    feminine energy
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Parvati, also known as Uma, is the Hindu goddess of
                    fertility, love, beauty, marriage, children, and devotion.
                    She is the gentle and nurturing form of Shakti, the supreme
                    female divine energy, and the consort of Lord Shiva.
                  </p>
                  <p className="text-gray-700 mb-4">
                    As the mother of the universe, Parvati represents the power
                    of Shakti and the divine feminine energy that creates and
                    nurtures life. She is often depicted with a graceful form,
                    adorned with ornaments, and holding a lotus.
                  </p>
                  <p className="text-gray-700">
                    Parvati is considered the complete incarnation of Adi
                    Parashakti or Goddess Durga, the Supreme Being in the
                    Shaktism tradition. She is the mother of Lord Ganesha and
                    Lord Kartikeya.
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="md:w-1/2 relative"
                >
                  <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                    <img
                      loading="lazy"
                      src={parvati}
                      alt="Goddess Parvati"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.section>
            {/* Sacred Quote */}
            <motion.div
              className="mt-16 p-7 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-500 rounded-xl shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-xl font-medium text-orange-800 italic mb-2">
                "Without Shakti, Shiva is Shava (corpse). It is through her
                power that Shiva is able to exert his power as the destroyer."
              </blockquote>
              <cite className="text-orange-600">— Devi Mahatmyam</cite>
            </motion.div>
          </div>
        </section>

        {/* Symbolism Section */}
        <section className="py-16 bg-orange-100">
          <div className="container px-4 mx-auto">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-8 text-center">
                Symbolism and Attributes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Divine Feminine",
                    description:
                      "Parvati represents the divine feminine energy (Shakti) that is the active principle of the universe.",
                    icon: "🌸",
                  },
                  {
                    title: "Devotion",
                    description:
                      "She embodies perfect devotion and demonstrates the power of dedication and perseverance.",
                    icon: "🙏",
                  },
                  {
                    title: "Motherhood",
                    description:
                      "As the Divine Mother, she represents nurturing, protection, and unconditional love.",
                    icon: "💖",
                  },
                  {
                    title: "Balance",
                    description:
                      "Her union with Shiva represents the balance of masculine and feminine energies in the universe.",
                    icon: "☯️",
                  },
                  {
                    title: "Creation",
                    description:
                      "She symbolizes the creative force of the universe and the cycle of birth and rebirth.",
                    icon: "🌱",
                  },
                  {
                    title: "Beauty",
                    description:
                      "Parvati represents divine beauty, both inner and outer, and the aesthetic principle.",
                    icon: "✨",
                  },
                ].map((attribute, index) => (
                  <motion.div
                    key={attribute.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-full bg-orange-50 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-orange-500 overflow-hidden group">
                      <div className="p-6">
                        <div className="text-4xl mb-4 text-center group-hover:scale-110 duration-300">
                          {attribute.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-orange-700 mb-2 text-center group-hover:scale-110 duration-300">
                          {attribute.title}
                        </h3>
                        <p className="text-gray-700">{attribute.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </section>

        {/* Mythology and Stories Section with Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-8 text-center">
                Mythology and Stories
              </h2>
              {/* Tabs Navigation */}
              <div className="max-w-5xl mx-auto">
                <div className="relative right-0 mb-4">
                  <ul
                    className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-orange-200"
                    data-tabs="tabs"
                    role="list"
                  >
                    {[
                      { id: "stories", tabName: "Major Stories" },
                      { id: "forms", tabName: "Forms & Manifestations" },
                      { id: "family", tabName: "Divine Family" },
                    ].map((tab, index) => (
                      <li key={index} className="z-30 flex-auto text-center">
                        <button
                          id={tab.id}
                          className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm sm:text-base font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                            activeTab === tab.id ? "bg-white" : "bg-inherit"
                          }`}
                          onClick={() => setActiveTab(tab.id)}
                          role="tab"
                        >
                          {tab.tabName}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Tab Contents */}
                <div className="tab-contents">
                  {/* Stories Tab */}
                  {activeTab === "stories" && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants}>
                        <div className="overflow-hidden bg-orange-100 rounded-xl border border-orange-500">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 relative h-60 md:h-auto">
                              <img
                                loading="lazy"
                                src={parvatiTapasya}
                                alt="Parvati's Tapasya"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-6 md:w-2/3">
                              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                                Parvati's Tapasya
                              </h3>
                              <p className="text-gray-700 mb-4">
                                In her previous birth as Sati, she was the wife
                                of Lord Shiva who immolated herself after her
                                father Daksha insulted Shiva. Reborn as Parvati,
                                the daughter of the mountain king Himavan, she
                                was determined to win Shiva's love again.
                              </p>
                              <p className="text-gray-700">
                                Parvati performed intense austerities (tapasya)
                                for years, meditating in extreme conditions to
                                prove her devotion to Shiva. Her dedication
                                impressed the gods, and eventually, Shiva
                                recognized her devotion and accepted her as his
                                consort, symbolizing the reunion of divine
                                masculine and feminine energies.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <div className="overflow-hidden bg-orange-100 rounded-xl border border-orange-500">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 relative h-60 md:h-auto">
                              <img
                                loading="lazy"
                                src={ganeshBirth}
                                alt="Birth of Ganesha"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-6 md:w-2/3">
                              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                                The Birth of Ganesha
                              </h3>
                              <p className="text-gray-700 mb-4">
                                One of the most famous stories involves the
                                creation of Lord Ganesha. While Shiva was away,
                                Parvati created a boy from the turmeric paste of
                                her body to guard her chambers while she bathed.
                              </p>
                              <p className="text-gray-700">
                                When Shiva returned, he was stopped by this boy
                                from entering. In his anger, Shiva severed the
                                boy's head. Seeing Parvati's grief, Shiva
                                promised to replace the head with that of the
                                first living being he encountered, which
                                happened to be an elephant. Thus, Ganesha was
                                born with an elephant head and became revered as
                                the remover of obstacles.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <div className="overflow-hidden bg-orange-100 rounded-xl border border-orange-500">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 relative h-60 md:h-auto">
                              <img
                                loading="lazy"
                                src={ardhanarishvara}
                                alt="Ardhanarishvara"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-6 md:w-2/3">
                              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                                Ardhanarishvara
                              </h3>
                              <p className="text-gray-700 mb-4">
                                Ardhanarishvara represents the synthesis of
                                masculine and feminine energies of the universe.
                                According to legend, Parvati was so devoted to
                                Shiva that she wanted to be inseparably united
                                with him.
                              </p>
                              <p className="text-gray-700">
                                Pleased with her devotion, Shiva merged with
                                Parvati to form Ardhanarishvara, a composite
                                androgynous form of the divine where the right
                                half is Shiva (male) and the left half is
                                Parvati (female). This form symbolizes that the
                                male and female principles are inseparable and
                                that creation is only possible when they work
                                together.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                  {/* Forms Tab */}
                  {activeTab === "forms" && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      {[
                        {
                          name: "Gauri",
                          description:
                            "The fair one, representing purity and austerity. She is worshipped as the embodiment of perfect womanhood.",
                          image: gauri,
                        },
                        {
                          name: "Uma",
                          description:
                            "The peaceful and benevolent form, representing light and beauty. The name Uma means 'mother' in many Indian languages.",
                          image: uma,
                        },
                        {
                          name: "Hemavati",
                          description:
                            "Daughter of the Himalayas, representing the connection to nature and the mountains.",
                          image: hemavati,
                        },
                        {
                          name: "Kali",
                          description:
                            "The fierce form that emerges to combat evil. Though terrifying in appearance, she represents ultimate protection.",
                          image: kali,
                        },
                        {
                          name: "Annapurna",
                          description:
                            "The goddess of food and nourishment who ensures no one goes hungry. Her name means 'full of food'.",
                          image: annapurna,
                        },
                        {
                          name: "Durga",
                          description:
                            "The warrior goddess who rides a lion and defeats demons, representing the triumph of good over evil.",
                          image: durga,
                        },
                      ].map((form, index) => (
                        <motion.div
                          key={form.name}
                          variants={itemVariants}
                          className="h-full"
                        >
                          <div className="h-full bg-orange-100 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-orange-500 overflow-hidden">
                            <div className="relative h-60">
                              <img
                                loading="lazy"
                                src={form.image}
                                alt={form.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                                {form.name}
                              </h3>
                              <p className="text-gray-700">
                                {form.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                  {/* Family Tab */}
                  {activeTab === "family" && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-8"
                    >
                      <motion.div variants={itemVariants}>
                        <div className="overflow-hidden bg-orange-50 rounded-xl shadow-sm border border-orange-500">
                          <div className="p-6">
                            <div className="flex space-x-4">
                              <div className="relative h-40 mb-6 w-1/5">
                                <img
                                  loading="lazy"
                                  src={family}
                                  alt="Shiva Family"
                                  className="w-50 h-50 object-cover rounded-lg"
                                />
                              </div>
                              <div className="w-4/5">
                                <h3 className="text-xl font-semibold text-orange-700 mb-2">
                                  The Divine Family
                                </h3>
                                <p className="text-gray-700 mb-2">
                                  Parvati, along with Shiva and their sons
                                  Ganesha and Kartikeya (also known as Murugan
                                  or Skanda), form the divine family that is
                                  revered across Hindu traditions. This
                                  celestial family represents different aspects
                                  of divinity and cosmic functions.
                                </p>
                                <p className="text-gray-700">
                                  Their family dynamics often mirror human
                                  relationships, teaching devotees about family
                                  values, parental love, and the balance of
                                  different energies within a household. Many
                                  stories about their family life contain
                                  profound spiritual and philosophical
                                  teachings.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants}>
                          <div className="h-full bg-orange-100 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-orange-500 overflow-hidden">
                            <div className="relative h-60">
                              <img
                                loading="lazy"
                                src={shiva}
                                alt="Lord Shiva"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                                Lord Shiva
                              </h3>
                              <p className="text-gray-700">
                                As Parvati's consort, Shiva represents the
                                masculine principle of consciousness. Their
                                union symbolizes the perfect balance of energy
                                and consciousness needed for creation. Shiva is
                                known as the destroyer in the Hindu trinity and
                                the lord of yogis.
                              </p>
                              <Link
                                to="/deities/shiva"
                                className="text-orange-600 hover:text-orange-700 inline-block mt-2"
                              >
                                Learn more about Lord Shiva →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <div className="h-full bg-orange-100 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-orange-500 overflow-hidden">
                            <div className="relative h-60">
                              <img
                                loading="lazy"
                                src={ganesh}
                                alt="Lord Ganesha"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                                Lord Ganesha
                              </h3>
                              <p className="text-gray-700">
                                The elephant-headed son of Parvati and Shiva,
                                Ganesha is revered as the remover of obstacles
                                and the god of beginnings. He is invoked before
                                starting any new venture. His creation by
                                Parvati demonstrates her independent creative
                                power.
                              </p>
                              <Link
                                to="/deities/ganesha"
                                className="text-orange-600 hover:text-orange-700 inline-block mt-2"
                              >
                                Learn more about Lord Ganesha →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                        <motion.div
                          variants={itemVariants}
                          className="md:col-span-2 max-w-[500px] mx-auto"
                        >
                          <div className="bg-orange-100 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-orange-500 overflow-hidden">
                            <div className="relative h-60">
                              <img
                                loading="lazy"
                                src={kartikeya}
                                alt="Lord Kartikeya"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                                Lord Kartikeya (Murugan)
                              </h3>
                              <p className="text-gray-700">
                                Also known as Skanda or Murugan, Kartikeya is
                                the second son of Parvati and Shiva. He is the
                                god of war and victory, commander-in-chief of
                                the divine armies. He is especially popular in
                                South India, where he is worshipped as the god
                                of Tamil language and culture. His birth story
                                varies across different traditions, but he is
                                consistently portrayed as a brave warrior who
                                defeated the demon Tarakasura.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.section>
            {/* Another Sacred Quote */}
            <motion.div
              className="mt-16 p-7 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-500 rounded-xl shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-xl font-medium text-orange-800 italic mb-2">
                "Just as heat is inseparable from fire, so are we from each
                other. I am the sacred word and you are the supreme absolute."
              </blockquote>
              <cite className="text-orange-600">
                — Parvati to Shiva, Shiva Purana
              </cite>
            </motion.div>
          </div>
        </section>

        {/* Worship and Festivals Section */}
        <section className="py-12 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-8 text-center">
                Worship and Festivals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-orange-700 mb-4">
                    Major Festivals
                  </h3>
                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {[
                      {
                        name: "Gauri Tritiya",
                        description:
                          "Celebrated during the month of Chaitra (March-April), this festival honors Parvati as Gauri, the fair one.",
                      },
                      {
                        name: "Teej",
                        description:
                          "A festival primarily celebrated by women for marital bliss, longevity of husband, and happiness of the family.",
                      },
                      {
                        name: "Navratri",
                        description:
                          "The nine-night festival dedicated to the nine forms of Goddess Shakti, including Parvati.",
                      },
                      {
                        name: "Durga Puja",
                        description:
                          "A major festival celebrating Parvati in her form as Durga, the warrior goddess.",
                      },
                      {
                        name: "Varalakshmi Vratam",
                        description:
                          "A festival celebrated by married women seeking blessings for the well-being of their family.",
                      },
                    ].map((festival, index) => (
                      <motion.li
                        key={festival.name}
                        variants={itemVariants}
                        className="bg-orange-50 border border-orange-500 p-4 rounded-xl shadow-sm"
                      >
                        <h4 className="font-semibold text-orange-600">
                          {festival.name}
                        </h4>
                        <p className="text-gray-700">{festival.description}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-700 mb-4">
                    Worship Practices
                  </h3>
                  <div className="relative h-68 mb-4 rounded-xl overflow-hidden">
                    <img
                      loading="lazy"
                      src={worship}
                      alt="Parvati Worship"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Parvati is worshipped in various forms across India.
                    Devotees offer flowers, incense, and sweets to the goddess.
                    Women often pray to her for marital harmony, children, and
                    family prosperity.
                  </p>
                  <p className="text-gray-700 mb-4">
                    In many traditions, Parvati is worshipped alongside Shiva,
                    emphasizing their inseparable nature. Temples dedicated to
                    Shiva usually have a shrine for Parvati as well.
                  </p>
                  <p className="text-gray-700">
                    Fasting on specific days, such as Fridays or during
                    Navratri, is a common practice among devotees of the
                    goddess. Recitation of hymns like the Lalita Sahasranama
                    (thousand names of the Divine Mother) is also a popular form
                    of worship.
                  </p>
                </div>
                <div className=" flex flex-wrap gap-4">
                  <Link to="/deities">
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded-md">
                      Back to Deities
                    </button>
                  </Link>
                  <Link to="/deities/durga">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-md">
                      Explore Goddess Durga
                    </button>
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ParvatiPage;
