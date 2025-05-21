import React, { useState } from "react";
import { motion } from "framer-motion";

import Bramha from "../assets/Deities/Lord_Bramha.webp";
import Vishnu from "../assets/Deities/Lord_Vishnu.webp";
import Shiva from "../assets/Deities/Lord_Shiva.webp";

import Ganesh from "../assets/Deities/Ganesh.webp";
import Krishna from "../assets/Deities/Krishna.webp";
import Hanuman from "../assets/Deities/hanuman2.webp";
import Ram from "../assets/Deities/Ram.webp";
import Ram2 from "../assets/Deities/Ram2.webp";

import Lakshmi from "../assets/Deities/Lakshmi.webp";
import Saraswati from "../assets/Deities/Saraswati.webp";
import Durga from "../assets/Deities/Durga.webp";
import Parvati from "../assets/Deities/Parvati.webp";

import Matsya from "../assets/Deities/Matsya.webp";
import Kurma from "../assets/Deities/Kurma.webp";
import Varaha from "../assets/Deities/Varaha.webp";
import Narasimha from "../assets/Deities/Narasimha.webp";
import Vramana from "../assets/Deities/Vamana.webp";
import Parashurama from "../assets/Deities/Parashurama.webp";
import Buddha from "../assets/Deities/Buddha.webp";
import Kalki from "../assets/Deities/Kalki.webp";

export default function DeitiesPage() {
  const [selectedTab, setSelectedTab] = useState("female");

  const maleDeities = [
    {
      name: "Ganesha",
      description:
        "The elephant-headed god of beginnings and remover of obstacles, widely worshipped for prosperity and wisdom.",
      additionalDescription:
        "He is also the patron of arts and sciences, worshipped for success and good fortune.",
      image: Ganesh,
      link: "/deities/ganesh",
    },
    {
      name: "Krishna",
      description:
        "The eighth avatar of Vishnu, revered for his divine teachings in the Bhagavad Gita and his playful nature.",
      additionalDescription:
        "Krishna is celebrated for his role in the Mahabharata and as the embodiment of love and divine playfulness.",
      image: Krishna,
      link: "/deities/krishna",
    },
    {
      name: "Rama",
      description:
        "The seventh avatar of Vishnu, exemplifying ideal virtues, righteousness, and devotion, as told in the Ramayana.",
      additionalDescription:
        "Rama represents the ideal man, embodying the qualities of dharma, duty, and loyalty.",
      image: Ram,
      link: "/deities/rama",
    },
    {
      name: "Hanuman",
      description:
        "A devoted servant of Lord Rama, known for his strength, loyalty, and selfless service.",
      additionalDescription:
        "Hanuman is revered for his courage and devotion, particularly his unwavering dedication to Rama.",
      image: Hanuman,
      link: "/deities/hanuman",
    },
  ];

  const femaleDeities = [
    {
      name: "Lakshmi",
      description:
        "The goddess of wealth, fortune, and prosperity, both material and spiritual.",
      additionalDescription:
        "She is worshipped for blessings of wealth, success, and well-being, especially during Diwali.",
      image: Lakshmi,
      link: "/deities/lakshmi",
    },
    {
      name: "Saraswati",
      description:
        "The goddess of knowledge, arts, music, wisdom, and learning.",
      additionalDescription:
        "Saraswati is worshipped by students and scholars for wisdom and creativity.",
      image: Saraswati,
      link: "/deities/saraswati",
    },
    {
      name: "Durga",
      description:
        "The fierce warrior goddess, symbolizing the power to combat evil forces and protect the world from harm.",
      additionalDescription:
        "Durga represents strength and protection, especially revered during the festival of Durga Puja.",
      image: Durga,
      link: "/deities/durga",
    },
    {
      name: "Parvati",
      description:
        "The goddess of love, fertility, devotion, and the consort of Lord Shiva, symbolizing feminine energy and balance.",
      additionalDescription:
        "Parvati embodies nurturing love and is often associated with marital bliss and fertility.",
      image: Parvati,
      link: "/deities/parvati",
    },
  ];

  return (
    <div className="min-h-screen">
      <main>
        <section className="py-16 mt-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-orange-800 mb-4">
                The Divine Trinity
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The Trimurti represents the cosmic functions of creation,
                preservation, and destruction
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Brahma",
                  role: "The Creator",
                  description:
                    "Brahma is the creator of the universe and all beings. He is depicted with four faces, representing the four Vedas, and four arms, holding various items including a scepter, a book, a water pot, and prayer beads.",
                  image: Bramha,
                  link: "/deities/brahma",
                },
                {
                  name: "Vishnu",
                  role: "The Preserver",
                  description:
                    "Vishnu is the preserver and protector of the universe. He is depicted with four arms holding a conch shell, a chakra (discus), a lotus, and a mace. Vishnu has incarnated on Earth in various forms (avatars) to restore dharma.",
                  image: Vishnu,
                  link: "/deities/vishnu",
                },
                {
                  name: "Shiva",
                  role: "The Transformer",
                  description:
                    "Shiva is the destroyer and transformer. He is often depicted in deep meditation, with a third eye, a crescent moon in his hair, the Ganges flowing from his locks, a trident, and a damaru (drum). He represents both destruction and regeneration.",
                  image: Shiva,
                  link: "/deities/shiva",
                },
              ].map((deity, index) => (
                <motion.div
                  key={deity.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border-[1px] border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-68">
                    <img
                      loading="lazy"
                      src={deity.image || "/placeholder.svg"}
                      alt={deity.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-1">
                      {deity.name}
                    </h3>
                    <p className="text-orange-600 mb-3">{deity.role}</p>
                    <p className="text-gray-700">{deity.description}</p>
                    <button
                      onClick={() => (window.location.href = deity.link)}
                      className="text-orange-600 mt-2 underline"
                    >
                      Learn more about {deity.name}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section for Major Deities with Tabs */}
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
                Major Deities
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Explore the diverse pantheon of Hindu gods and goddesses
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
                        selectedTab === "male" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("male")}
                      role="tab"
                    >
                      Male Deities
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "female" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("female")}
                      role="tab"
                    >
                      Female Deities
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex justify-center">
              {selectedTab === "male" && (
                <div className="grid gap-8 max-w-4xl mx-auto">
                  {maleDeities.map((deity, index) => (
                    <motion.div
                      key={deity.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col md:flex-row gap-6 bg-orange-50 border-[1px] border-orange-500 rounded-lg overflow-hidden shadow-md"
                    >
                      <div className="relative w-full md:w-1/3 h-60">
                        <img
                          loading="lazy"
                          src={deity.image || "/placeholder.svg"}
                          alt={deity.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-6 pt-0 sm:pt-6 md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-2">
                          {deity.name}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {deity.description}
                        </p>
                        <p className="text-gray-600">
                          {deity.additionalDescription}
                        </p>
                        <button
                          onClick={() => (window.location.href = deity.link)}
                          className="text-orange-600 mt-4 p-0"
                        >
                          Learn more about {deity.name}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {selectedTab === "female" && (
                <div className="grid gap-8 max-w-4xl mx-auto">
                  {femaleDeities.map((deity, index) => (
                    <motion.div
                      key={deity.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col md:flex-row gap-6 bg-orange-50 border border-orange-500 rounded-lg overflow-hidden shadow-md"
                    >
                      <div className="relative w-full md:w-1/3 h-60">
                        <img
                          loading="lazy"
                          src={deity.image || "/placeholder.svg"}
                          alt={deity.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-6 pt-0 sm:pt-6 md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-2">
                          {deity.name}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {deity.description}
                        </p>
                        <p className="text-gray-600">
                          {deity.additionalDescription}
                        </p>
                        <button
                          onClick={() => (window.location.href = deity.link)}
                          className="text-orange-600 mt-4 p-0"
                        >
                          Learn more about {deity.name}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section for Avatars of Vishnu */}
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
                Avatars of Vishnu
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The ten primary incarnations of Lord Vishnu who descended to
                Earth to restore cosmic order
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "Matsya", form: "Fish", image: Matsya },
                { name: "Kurma", form: "Turtle", image: Kurma },
                { name: "Varaha", form: "Boar", image: Varaha },
                { name: "Narasimha", form: "Man-Lion", image: Narasimha },
                { name: "Vamana", form: "Dwarf", image: Vramana },
                {
                  name: "Parashurama",
                  form: "Warrior with Axe",
                  image: Parashurama,
                },
                { name: "Rama", form: "Perfect Man", image: Ram2 },
                { name: "Krishna", form: "Divine Statesman", image: Krishna },
                { name: "Buddha", form: "Enlightened One", image: Buddha },
                { name: "Kalki", form: "Future Avatar", image: Kalki },
              ].map((avatar, index) => (
                <motion.div
                  key={avatar.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-orange-100 border-[1px] border-orange-500 rounded-lg overflow-hidden text-center hover:shadow-lg transition-all"
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
