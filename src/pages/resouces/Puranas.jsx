import { motion } from "framer-motion";
import React, { useState } from "react";

import puranas from "../../assets/Resources/Puranas/Puranas.avif";
import puranas2 from "../../assets/Resources/Puranas/Page_of_Text,_Folio_from_a_Bhagavata_Purana_(Ancient_Stories_of_the_Lord)_LACMA_M.82.62.1_.webp";

import deviMahatmya from "../../assets/Resources/Puranas/Devimahatmya_(Glory_of_the_Goddess)_manuscript_LACMA_M.88.134.7.webp";
import samudraManthan from "../../assets/Resources/Puranas/Samudra-Manthan-The-Churning-of-the-Ocean-of-Milk.jpg";

import vedas from "../../assets/Books/Vedas.png";
import epics from "../../assets/Books/Hindu Epics.png";
import upanishads from "../../assets/Books/The Upanishads.png";

const PuranasPage = () => {
  const [activeTab, setActiveTab] = useState("panchalakshana");

  return (
    <div className="min-h-screen mt-16">
      <main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  The Puranas
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  Ancient texts of stories, genealogies, and teachings
                </h2>
                <p className="text-gray-700 mb-4">
                  The Puranas are a vast collection of Sanskrit texts that cover
                  a wide array of topics including cosmology, philosophy, yoga,
                  architecture, geography, grammar, and genealogies of gods,
                  kings, and sages. Composed between 3rd to 10th century CE,
                  they form an important part of Hindu literature.
                </p>
                <p className="text-gray-700">
                  There are traditionally 18 Maha (major) Puranas and 18 Upa
                  (minor) Puranas. Each is dedicated to a particular deity, with
                  the three main categories being Brahma, Vishnu, and Shiva
                  Puranas, though some are also dedicated to Shakti and other
                  deities.
                </p>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src={puranas}
                    alt="Ancient Purana manuscript"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 18 Maha Puranas Section */}
        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-3 text-center">
                The 18 Maha Puranas
              </h2>
              <p className="text-orange-700 text-center mb-8">
                Sacred texts dedicated to various deities, containing timeless
                wisdom and stories
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Vishnu Purana",
                    deity: "Vishnu",
                    description:
                      "Focuses on Vishnu and his avatars, particularly Krishna.",
                  },
                  {
                    name: "Bhagavata Purana",
                    deity: "Vishnu",
                    description:
                      "Contains the popular stories of Krishna's life and teachings.",
                  },
                  {
                    name: "Shiva Purana",
                    deity: "Shiva",
                    description:
                      "Glorifies Shiva and details his various manifestations.",
                  },
                  {
                    name: "Linga Purana",
                    deity: "Shiva",
                    description:
                      "Explains the worship of Shiva in the form of a Lingam.",
                  },
                  {
                    name: "Brahma Purana",
                    deity: "Brahma",
                    description:
                      "One of the oldest Puranas, focusing on Brahma and creation.",
                  },
                  {
                    name: "Markandeya Purana",
                    deity: "Various",
                    description:
                      "Contains the Devi Mahatmya, glorifying the Goddess.",
                  },
                ].map((purana, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-orange-50 border border-orange-500 rounded-xl shadow-md overflow-hidden text-center"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-orange-700 mb-2">
                        {purana.name}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Dedicated to{" "}
                        <span className="text-orange-600 font-semibold">
                          {purana.deity}
                        </span>
                      </p>
                      <p className="text-gray-700 bg-orange-100 px-4 py-3 rounded-lg">
                        {purana.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center mt-6 text-gray-600">
                The above are just 6 of the 18 major Puranas. Others include the
                <span className="text-orange-600 font-semibold">
                  {" "}
                  Padma, Brahmananda, Agni, Garuda, Narada, Matsya, Kurma,
                  Varaha, Vamana, Skanda, and Brahmavaivarta
                </span>{" "}
                Puranas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content and Themes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-3 text-center">
                Content and Themes
              </h2>
              <p className="text-orange-700 text-center mb-8">
                Exploring the rich tapestry of stories, teachings, and wisdom
              </p>
              <div className="max-w-4xl mx-auto">
                {/* Tab Navigations */}
                <div className="relative right-0 mb-4">
                  <ul
                    className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-orange-200"
                    data-tabs="tabs"
                    role="list"
                  >
                    <li className="z-30 flex-auto text-center">
                      <button
                        className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                          activeTab === "panchalakshana"
                            ? "bg-white"
                            : "bg-inherit"
                        }`}
                        onClick={() => setActiveTab("panchalakshana")}
                        role="tab"
                      >
                        Panchalakshana
                      </button>
                    </li>
                    <li className="z-30 flex-auto text-center">
                      <button
                        className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                          activeTab === "stories" ? "bg-white" : "bg-inherit"
                        }`}
                        onClick={() => setActiveTab("stories")}
                        role="tab"
                      >
                        Major Stories
                      </button>
                    </li>
                    <li className="z-30 flex-auto text-center">
                      <button
                        className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                          activeTab === "philosophy" ? "bg-white" : "bg-inherit"
                        }`}
                        onClick={() => setActiveTab("philosophy")}
                        role="tab"
                      >
                        Philosophy
                      </button>
                    </li>
                    <li className="z-30 flex-auto text-center">
                      <button
                        className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                          activeTab === "influence" ? "bg-white" : "bg-inherit"
                        }`}
                        onClick={() => setActiveTab("influence")}
                        role="tab"
                      >
                        Cultural Influence
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tab Content */}
              <div className="max-w-4xl mx-auto">
                {/* Panchalakshana Tab */}
                {activeTab === "panchalakshana" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 bg-orange-100 border border-orange-500 rounded-xl shadow-lg">
                    <div className="bg-orange-100/30 p-8 flex items-center justify-center">
                      <div className="max-w-sm">
                        <h3 className="text-2xl font-bold text-orange-800 mb-4 font-serif">
                          The Five Characteristics
                        </h3>
                        <p className="text-gray-700 italic">
                          "The five distinguishing marks of the Puranas are
                          accounts of: creation, secondary creation, genealogy,
                          ages of Manu, and dynastic histories."
                        </p>
                        <p className="text-right text-sm text-gray-500 mt-2">
                          — Traditional Definition
                        </p>
                      </div>
                    </div>
                    <div className="p-8">
                      <h4 className="text-xl font-semibold text-orange-700 mb-4">
                        Panchalakshana Elements
                      </h4>
                      <ol className="space-y-4">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center mr-3 mt-0.5">
                            1
                          </span>
                          <div>
                            <h5 className="font-semibold text-orange-700">
                              Sarga
                            </h5>
                            <p className="text-gray-700">
                              Primary creation of the universe
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center mr-3 mt-0.5">
                            2
                          </span>
                          <div>
                            <h5 className="font-semibold text-orange-700">
                              Pratisarga
                            </h5>
                            <p className="text-gray-700">
                              Recreation after dissolution
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center mr-3 mt-0.5">
                            3
                          </span>
                          <div>
                            <h5 className="font-semibold text-orange-700">
                              Vamsha
                            </h5>
                            <p className="text-gray-700">
                              Genealogy of gods and sages
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center mr-3 mt-0.5">
                            4
                          </span>
                          <div>
                            <h5 className="font-semibold text-orange-700">
                              Manvantara
                            </h5>
                            <p className="text-gray-700">
                              Cosmic cycles and eras
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center mr-3 mt-0.5">
                            5
                          </span>
                          <div>
                            <h5 className="font-semibold text-orange-700">
                              Vamshanucharita
                            </h5>
                            <p className="text-gray-700">
                              Histories of royal dynasties
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                )}

                {/* Major Stories Content */}
                {activeTab === "stories" && (
                  <div className="p-8 bg-orange-100 border border-orange-500 rounded-xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                          <img
                            src={samudraManthan}
                            alt="Samudra Manthan"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4 text-orange-50">
                            <h4 className="text-xl font-bold">
                              Samudra Manthan
                            </h4>
                            <p className="text-sm">
                              The Churning of the Cosmic Ocean
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          One of the most famous stories from the Puranas,
                          describing how devas (gods) and asuras (demons)
                          churned the cosmic ocean to obtain amrita (the nectar
                          of immortality). During this process, many divine
                          treasures emerged, including the goddess Lakshmi, the
                          divine physician Dhanvantari, and various celestial
                          objects.
                        </p>
                      </div>

                      <div>
                        <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                          <img
                            src={deviMahatmya}
                            alt="Devi Mahatmya"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4 text-orange-50">
                            <h4 className="text-xl font-bold">Devi Mahatmya</h4>
                            <p className="text-sm">The Glory of the Goddess</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Found in the Markandeya Purana, this text narrates the
                          battles of the Goddess against the demons Mahishasura,
                          Shumbha, and Nishumbha. It is one of the most
                          important texts for Shakti worshippers and is recited
                          during Navaratri celebrations. The text establishes
                          the supreme power of the divine feminine.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold text-orange-700 mb-3">
                          Krishna's Childhood
                        </h4>
                        <p className="text-gray-700 mb-4">
                          The Bhagavata Purana elaborately describes Krishna's
                          birth and childhood pranks in Vrindavan. These
                          stories, known as Krishna Leela, depict his playful
                          nature, his defeat of various demons, and his
                          relationships with the gopis (cowherd girls),
                          especially Radha.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-orange-700 mb-3">
                          Daksha Yajna
                        </h4>
                        <p className="text-gray-700 mb-4">
                          The tale of Sati's self-immolation at her father
                          Daksha's yajna (sacrifice) and Shiva's grief and rage,
                          leading to the creation of Virabhadra who destroyed
                          the sacrifice. This story explains the origin of many
                          Shakti Peethas across the Indian subcontinent.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Philosophy Content */}
                {activeTab === "philosophy" && (
                  <div className="p-8 bg-orange-100 border border-orange-500 rounded-xl shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className="sticky top-8">
                          <h3 className="text-2xl font-bold text-orange-800 mb-4">
                            Philosophical Teachings
                          </h3>
                          <p className="text-gray-700">
                            The Puranas contain profound philosophical teachings
                            presented through stories and dialogues, making
                            complex concepts accessible to all sections of
                            society.
                          </p>
                          <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                            <p className="text-gray-700 italic">
                              "Just as the sun illuminates all that exists, so
                              does the knowledge contained in the Puranas
                              illuminate the path of dharma for all beings."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="md:w-2/3">
                        <ul className="space-y-6">
                          <li className="p-4 bg-orange-50 rounded-xl shadow-lg">
                            <h4 className="text-xl font-semibold text-orange-700 mb-2">
                              Bhakti (Devotion) ❤️
                            </h4>
                            <p className="text-gray-700">
                              Especially in the Vishnu and Bhagavata Puranas,
                              devotion is presented as the primary path to
                              liberation. The Puranas emphasize that sincere
                              devotion to a personal deity can lead to moksha,
                              regardless of one's caste, gender, or social
                              status. This democratized spirituality and made it
                              accessible to all.
                            </p>
                          </li>

                          <li className="p-4 bg-orange-50 rounded-xl shadow-lg">
                            <h4 className="text-xl font-semibold text-orange-700 mb-2">
                              Karma and Rebirth ⚖️
                            </h4>
                            <p className="text-gray-700">
                              The Puranas explain the law of karma and how it
                              affects one's future births. They contain numerous
                              stories illustrating how good actions lead to
                              favorable circumstances and negative actions
                              result in suffering. They also describe various
                              heavens and hells where souls experience the
                              results of their karma.
                            </p>
                          </li>

                          <li className="p-4 bg-orange-50 rounded-xl shadow-lg">
                            <h4 className="text-xl font-semibold text-orange-700 mb-2">
                              Dharma 🕉️
                            </h4>
                            <p className="text-gray-700">
                              Ethical duties and righteousness are emphasized
                              through exemplary characters. The Puranas outline
                              the proper conduct for different stages of life
                              (ashramas) and social roles (varnas), while also
                              providing universal ethical principles applicable
                              to all humans.
                            </p>
                          </li>

                          <li className="p-4 bg-orange-50 rounded-xl shadow-lg">
                            <h4 className="text-xl font-semibold text-orange-700 mb-2">
                              Moksha ✨
                            </h4>
                            <p className="text-gray-700">
                              Various paths to liberation from the cycle of
                              birth and death are described. The Puranas
                              acknowledge multiple valid approaches to spiritual
                              liberation, including jnana (knowledge), karma
                              (action), yoga (discipline), and bhakti
                              (devotion), making spirituality adaptable to
                              different temperaments.
                            </p>
                          </li>

                          <li className="p-4 bg-orange-50 rounded-xl shadow-lg">
                            <h4 className="text-xl font-semibold text-orange-700 mb-2">
                              Cosmology 🌍
                            </h4>
                            <p className="text-gray-700">
                              Detailed descriptions of the universe, including
                              multiple worlds and dimensions. The Puranas
                              present an elaborate cosmology with numerous
                              realms of existence, vast time cycles, and
                              descriptions of the creation, maintenance, and
                              dissolution of the cosmos.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cultural Influence Content */}
                {activeTab === "influence" && (
                  <div className="p-8 bg-orange-100 border border-orange-500 rounded-xl shadow-lg">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-orange-800 mb-3">
                        Cultural Influence
                      </h3>
                      <p className="text-gray-700 max-w-2xl mx-auto">
                        The Puranas have profoundly shaped Hindu culture, arts,
                        and practices for centuries
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center p-6 bg-orange-50 rounded-xl">
                        <h4 className="text-xl font-semibold text-orange-700 mb-2">
                          Pilgrimage
                        </h4>
                        <p className="text-gray-700">
                          Sacred sites (tirthas) and their importance are
                          described in the Puranas, establishing pilgrimage
                          routes that millions of Hindus follow to this day.
                        </p>
                      </div>

                      <div className="text-center p-6 bg-orange-50 rounded-xl">
                        <h4 className="text-xl font-semibold text-orange-700 mb-2">
                          Temple Worship
                        </h4>
                        <p className="text-gray-700">
                          Rituals and procedures for deity worship are detailed
                          in the Puranas, forming the basis of temple traditions
                          throughout India.
                        </p>
                      </div>

                      <div className="text-center p-6 bg-orange-50 rounded-xl">
                        <h4 className="text-xl font-semibold text-orange-700 mb-2">
                          Festivals
                        </h4>
                        <p className="text-gray-700">
                          Many Hindu festivals have their origins in Puranic
                          stories, connecting seasonal celebrations with
                          mythological events.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-orange-50 rounded-lg shadow-sm border border-orange-100">
                        <h4 className="text-xl font-semibold text-orange-700 mb-3">
                          Art and Architecture
                        </h4>
                        <p className="text-gray-700">
                          Puranic themes dominate Hindu temple sculptures and
                          paintings. The stories, deities, and cosmological
                          concepts from the Puranas provide the iconographic
                          basis for much of Hindu art. From ancient temple
                          reliefs to modern calendar art, Puranic imagery is
                          ubiquitous in Hindu visual culture.
                        </p>
                      </div>

                      <div className="p-6 bg-orange-50 rounded-lg shadow-sm border border-orange-100">
                        <h4 className="text-xl font-semibold text-orange-700 mb-3">
                          Folk Traditions
                        </h4>
                        <p className="text-gray-700">
                          Local customs and practices often incorporate Puranic
                          elements. Regional folk traditions throughout India
                          have absorbed and adapted Puranic stories, creating a
                          rich tapestry of cultural expressions that vary from
                          region to region while maintaining core themes.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-100">
                      <p className="text-gray-700 text-center">
                        Even today, the Puranas continue to be a living
                        tradition, with their stories retold through various
                        media including television, cinema, and digital
                        platforms. They provide a cultural continuity that
                        connects modern Hindus with their ancient heritage.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Historical Context Section */}
        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-3 text-center">
                Historical Context and Composition
              </h2>
              <p className="text-orange-700 text-center mb-8 ">
                Understanding the development and evolution of these sacred
                texts
              </p>

              <div className="bg-orange-50 border border-orange-500 p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold text-orange-800 mb-4 font-bold">
                      Composition Period
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      The Puranas were composed over a long period, roughly from
                      the 3rd to 10th centuries CE, though they contain material
                      that is much older, passed down through oral tradition.
                      They represent a continuation and expansion of the
                      mythological and philosophical themes found in the Epics
                      (Ramayana and Mahabharata).
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Scholars believe that the Puranas were composed by
                      multiple authors and underwent numerous revisions over
                      time. They served as a means to popularize complex Vedic
                      ideas among the general population and to incorporate
                      local deities and traditions into the broader Hindu
                      framework.
                    </p>
                  </div>

                  <div>
                    <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-6">
                      <img
                        src={puranas2}
                        alt="Ancient manuscript"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-medium text-orange-50">
                          Ancient Sanskrit manuscript with Puranic text
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-orange-800 mb-3">
                      Language and Transmission
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The language of the Puranas is generally simpler Sanskrit
                      compared to the Vedas, making them more accessible. They
                      were often recited by traveling storytellers
                      (kathavachaks) who spread these sacred narratives
                      throughout the Indian subcontinent, adapting them to local
                      languages and contexts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4">
                <h3 className="text-3xl font-semibold text-orange-800 mb-6 text-center">
                  Timeline of Puranic Development
                </h3>
                <div className="relative">
                  <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-orange-200"></div>

                  {[
                    {
                      period: "Before 300 CE",
                      title: "Pre-Puranic Period",
                      description:
                        "Oral traditions and early mythological elements found in Vedic literature",
                    },
                    {
                      period: "300-500 CE",
                      title: "Early Puranas",
                      description:
                        "Initial composition of texts like the Vayu and Matsya Puranas",
                    },
                    {
                      period: "500-700 CE",
                      title: "Classical Period",
                      description:
                        "Major development of Vishnu and Shiva Puranas",
                    },
                    {
                      period: "700-1000 CE",
                      title: "Later Puranas",
                      description:
                        "Composition of sectarian and regional Puranas",
                    },
                  ].map((era, index) => (
                    <motion.div
                      key={era.period}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative mb-12 ${
                        index % 2 === 0
                          ? "md:ml-auto md:pl-16 md:pr-0"
                          : "md:mr-auto md:pr-16 md:pl-0"
                      } md:w-1/2 pl-10`}
                    >
                      <div className="absolute top-5 left-0 md:left-auto md:right-full md:mr-8 h-4 w-4 rounded-full bg-orange-500"></div>
                      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-2">
                          {era.period}
                        </span>
                        <h3 className="text-xl font-bold text-orange-700 mb-2">
                          {era.title}
                        </h3>
                        <p className="text-gray-700">{era.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modern Relevance Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 text-center">
                Modern Relevance
              </h2>
              <p className="text-orange-700 text-center mb-8 ">
                How these ancient texts continue to influence contemporary Hindu
                life and culture
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-orange-100 border border-orange-500 rounded-xl shadow-md overflow-hidden text-center">
                  <div className="p-6">
                    <div className="text-2xl md:text-4xl mb-2">🏛️</div>
                    <h3 className="text-xl font-bold text-orange-600 mb-2">
                      Source of Cultural Identity
                    </h3>
                    <p className="text-gray-700">
                      The Puranas continue to shape Hindu identity and provide a
                      sense of cultural continuity. Their stories form the basis
                      of many community celebrations and family traditions.
                    </p>
                  </div>
                </div>
                <div className="bg-orange-100 border border-orange-500 rounded-xl shadow-md overflow-hidden text-center">
                  <div className="p-6">
                    <div className="text-2xl md:text-4xl mb-2">⚖️</div>
                    <h3 className="text-xl font-bold text-orange-600 mb-2">
                      Ethical and Moral Guidance
                    </h3>
                    <p className="text-gray-700">
                      Through their narratives of divine and human characters,
                      the Puranas offer ethical frameworks and moral lessons
                      that remain relevant in contemporary society.
                    </p>
                  </div>
                </div>
                <div className="bg-orange-100 border border-orange-500 rounded-xl shadow-md overflow-hidden text-center">
                  <div className="p-6">
                    <div className="text-2xl md:text-4xl mb-2">🎨</div>
                    <h3 className="text-xl font-bold text-orange-600 mb-2">
                      Artistic Inspiration
                    </h3>
                    <p className="text-gray-700">
                      Puranic themes continue to inspire literature, drama,
                      dance, music, and visual arts throughout South Asia and
                      beyond, demonstrating their enduring creative influence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Explore Other Texts Section */}
        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-10">
                Explore Other Sacred Texts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full"
                >
                  <div className="p-4 pb-0">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      The Vedas
                    </h3>
                    <p className="text-gray-600">
                      The oldest and most sacred texts of Hinduism
                    </p>
                  </div>
                  <div className="relative h-52 w-full p-4 pb-0">
                    <img
                      src={vedas}
                      alt="The Vedas"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="p-4">
                    <button
                      onClick={() =>
                        (window.location.href = "/resources/vedas")
                      }
                      className="w-full px-4 py-2 border border-orange-600 text-orange-50 rounded-md bg-orange-600"
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full"
                >
                  <div className="p-4 pb-0">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      The Epics
                    </h3>
                    <p className="text-gray-600">
                      Ramayana and Mahabharata: stories of heroes and gods
                    </p>
                  </div>
                  <div className="relative h-52 w-full p-4 pb-0">
                    <img
                      src={epics}
                      alt="The Epics"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="p-4">
                    <button
                      onClick={() =>
                        (window.location.href = "/resources/epics")
                      }
                      className="w-full px-4 py-2 border border-orange-600 text-orange-50 rounded-md bg-orange-600"
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full"
                >
                  <div className="p-4 pb-0">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      The Upanishads
                    </h3>
                    <p className="text-gray-600">
                      Philosophical texts exploring the nature of reality
                    </p>
                  </div>
                  <div className="relative h-52 w-full p-4 pb-0">
                    <img
                      src={upanishads}
                      alt="The Puranas"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="p-4">
                    <button
                      onClick={() =>
                        (window.location.href = "/resources/puranas")
                      }
                      className="w-full px-4 py-2 border border-orange-600 text-orange-50 rounded-md bg-orange-600"
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter would go here */}
      </main>

      {/* Footer would go here */}
    </div>
  );
};

export default PuranasPage;
