import { motion } from "framer-motion";
import React, { useState } from "react";
import imageLinks from "../../utils/ImageLinks";

const VedasPage = () => {
  const [activeTab, setActiveTab] = useState("rigveda");

  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  The Vedas
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  The oldest and most sacred texts of Hinduism
                </h2>
                <p className="text-gray-700 mb-4">
                  The Vedas are the oldest sacred texts of Hinduism, composed in
                  Vedic Sanskrit between 1500-500 BCE. They are considered
                  apauruṣeya (not of human origin) and are regarded as
                  revelations heard by ancient sages (rishis) after intense
                  meditation.
                </p>
                <p className="text-gray-700 mb-4">
                  The word "Veda" comes from the Sanskrit root "vid" meaning "to
                  know." Thus, the Vedas are considered the source of true
                  knowledge and divine wisdom. They form the foundation of Hindu
                  philosophical thought and religious practice.
                </p>
                <p className="text-gray-700">
                  The Vedas are not just religious texts but contain insights
                  into various aspects of life, including philosophy, medicine,
                  astronomy, architecture, arts, and more. They represent one of
                  humanity's oldest and most comprehensive spiritual and
                  intellectual traditions.
                </p>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-xl"
                >
                  <img
                    loading="lazy"
                    src={imageLinks.rigveda}
                    alt="Ancient Vedic manuscript"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Four Vedas Section */}
        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 text-center">
                The Four Vedas
              </h2>
              <p className="text-orange-700 text-center mb-8">
                An overview of the four sacred texts that form the foundation of
                Hindu philosophy and rituals.
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="relative right-0 mb-4">
                  <ul
                    className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-orange-200"
                    data-tabs="tabs"
                    role="list"
                  >
                    {[
                      { id: "rigveda", tabName: "Rigveda" },
                      { id: "yajurveda", tabName: "Yajurveda" },
                      { id: "samaveda", tabName: "Samaveda" },
                      { id: "atharvaveda", tabName: "Atharvaveda" },
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

                {/* Rigveda Content */}
                {activeTab === "rigveda" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-orange-50 border border-orange-500 rounded-xl shadow-lg p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                          <img
                            loading="lazy"
                            src={imageLinks.rigveda}
                            alt="Rigveda"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                            <p className="text-white p-4 font-medium">
                              The oldest of the Vedas
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Hymns
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Mantras
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Deities
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Rituals
                          </span>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Rigveda
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The Rigveda is the oldest of the four Vedas and one of
                          the oldest extant texts in any Indo-European language.
                          It consists of 1,028 hymns (suktas) dedicated to
                          various deities, organized into ten books or mandalas.
                        </p>
                        <p className="text-gray-700 mb-4">
                          The hymns are primarily addressed to deities such as
                          Agni (fire), Indra (thunder and lightning), Varuna
                          (cosmic order), Surya (sun), and many others. These
                          hymns were recited during rituals and sacrifices to
                          invoke the deities.
                        </p>
                        <p className="text-gray-700 mb-4">
                          The Rigveda also contains philosophical speculations
                          about the origin of the universe, the nature of
                          existence, and the relationship between humans and the
                          divine.
                        </p>
                        <div className="bg-orange-100 p-4 rounded-lg mt-6">
                          <h4 className="font-semibold text-orange-800 mb-2">
                            Key Features:
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>
                              Contains 10 mandalas (books) with 1,028 hymns
                            </li>
                            <li>
                              Composed approximately between 1500-1200 BCE
                            </li>
                            <li>
                              Primarily focuses on praise of various deities
                            </li>
                            <li>Includes the famous Gayatri Mantra</li>
                            <li>Foundation for Hindu philosophical thought</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Yajurveda Content */}
                {activeTab === "yajurveda" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-orange-50 border border-orange-500 rounded-xl shadow-lg p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                          <img
                            loading="lazy"
                            src={imageLinks.yajurveda}
                            alt="Yajurveda"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                            <p className="text-white p-4 font-medium">
                              The Veda of ritual formulas
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Rituals
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Sacrifices
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Ceremonies
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Mantras
                          </span>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Yajurveda
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The Yajurveda is primarily a collection of prose
                          mantras and formulas used in various Vedic rituals and
                          sacrifices. It serves as a practical guidebook for
                          priests performing these ceremonies.
                        </p>
                        <p className="text-gray-700 mb-4">
                          There are two main recensions of the Yajurveda:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-orange-100 p-4 rounded-lg">
                            <h5 className="font-medium text-orange-700 mb-2">
                              Krishna (Black) Yajurveda:
                            </h5>
                            <p className="text-gray-700 text-sm">
                              Contains both mantras and their explanations mixed
                              together
                            </p>
                          </div>
                          <div className="bg-orange-100 p-4 rounded-lg">
                            <h5 className="font-medium text-orange-700 mb-2">
                              Shukla (White) Yajurveda:
                            </h5>
                            <p className="text-gray-700 text-sm">
                              Contains only the mantras without the explanatory
                              portions
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          The Yajurveda details the precise methods for
                          performing rituals, including the correct
                          pronunciation of mantras, the proper arrangement of
                          ritual items, and the exact timing of various
                          ceremonial actions.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Samaveda Content */}
                {activeTab === "samaveda" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-orange-50 border border-orange-500 rounded-xl shadow-lg p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                          <img
                            loading="lazy"
                            src={imageLinks.samaveda}
                            alt="Samaveda"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                            <p className="text-white p-4 font-medium">
                              The Veda of melodies
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Music
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Chants
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Melodies
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Rituals
                          </span>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Samaveda
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The Samaveda is essentially a collection of melodies
                          (saman) and chants. It consists largely of verses
                          borrowed from the Rigveda that have been set to
                          musical notes for singing during rituals.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Often referred to as the "Veda of Melodies" or the
                          "Veda of Chants," the Samaveda is the origin of Indian
                          classical music and represents one of the earliest
                          known musical traditions in the world.
                        </p>
                        <p className="text-gray-700 mb-4">
                          The Samaveda contains approximately 1,875 verses, with
                          only 75 verses that are not found in the Rigveda. Its
                          primary purpose was to provide priests with the
                          melodies for chanting during Soma sacrifices and other
                          rituals.
                        </p>
                        <div className="bg-orange-100 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">
                            The text is divided into two main parts:
                          </h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                              <span className="font-medium text-orange-700">
                                Purvarchika:
                              </span>{" "}
                              Contains the verses arranged for singing
                            </li>
                            <li>
                              <span className="font-medium text-orange-700">
                                Uttararchika:
                              </span>{" "}
                              Contains the melodies for these verses
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Atharvaveda Content */}
                {activeTab === "atharvaveda" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-orange-50 border border-orange-500 rounded-xl shadow-lg p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                          <img
                            loading="lazy"
                            src={imageLinks.atharvaveda}
                            alt="Atharvaveda"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                            <p className="text-white p-4 font-medium">
                              The Veda of magical formulas
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Spells
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Medicine
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Magic
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Daily Life
                          </span>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Atharvaveda
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The Atharvaveda stands apart from the other three
                          Vedas in its content and character. It contains
                          spells, incantations, and speculative hymns for
                          various purposes, including healing, prolonging life,
                          and causing harm to enemies.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Named after the sage Atharvan, this Veda provides
                          unique insights into the daily life, beliefs, and
                          practices of ancient Indian society. It contains
                          approximately 6,000 mantras divided into 20 books or
                          kandas.
                        </p>
                        <div className="bg-orange-100 p-4 rounded-lg mb-4">
                          <h4 className="font-semibold text-orange-800 mb-2">
                            The Atharvaveda includes:
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="text-orange-600 mr-2">•</span>
                              Medicinal charms and remedies for various diseases
                            </li>
                            <li className="flex items-start">
                              <span className="text-orange-600 mr-2">•</span>
                              Prayers for health and longevity
                            </li>
                            <li className="flex items-start">
                              <span className="text-orange-600 mr-2">•</span>
                              Spells for prosperity and success
                            </li>
                            <li className="flex items-start">
                              <span className="text-orange-600 mr-2">•</span>
                              Charms against demons, sorcerers, and enemies
                            </li>
                            <li className="flex items-start">
                              <span className="text-orange-600 mr-2">•</span>
                              Philosophical hymns about the nature of the
                              universe
                            </li>
                            <li className="flex items-start">
                              <span className="text-orange-600 mr-2">•</span>
                              Royal ceremonies and rituals for the welfare of
                              the kingdom
                            </li>
                          </ul>
                        </div>
                        <p className="text-gray-700">
                          The Atharvaveda is considered the precursor to
                          Ayurveda, the traditional Indian system of medicine,
                          and contains early references to anatomy, physiology,
                          and healing practices.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Structure of Vedas Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, staggerChildren: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 text-center">
                Structure of the Vedas
              </h2>
              <p className="text-orange-700 text-center mb-12">
                An exploration of the components that make up the Vedic texts,
                from hymns to philosophical teachings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    Samhitas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The Samhitas are collections of mantras (hymns, prayers, and
                    incantations) that form the core text of each Veda. They are
                    the oldest layer of Vedic literature and contain the
                    original revelations received by the rishis.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg mx-auto">
                    <p className="text-orange-600 font-semibold">
                      Each of the four Vedas has its own Samhita:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
                      <li>Rigveda Samhita</li>
                      <li>Yajurveda Samhita</li>
                      <li>Samaveda Samhita</li>
                      <li>Atharvaveda Samhita</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    Brahmanas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The Brahmanas are prose texts that provide detailed
                    explanations of Vedic rituals, including their purpose,
                    meaning, and proper execution. They also contain
                    mythological accounts that explain the origin and
                    significance of these rituals.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg mx-auto">
                    <p className="text-orange-600 font-semibold">
                      Examples of important Brahmanas include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
                      <li>Aitareya Brahmana (Rigveda)</li>
                      <li>Shatapatha Brahmana (Yajurveda)</li>
                      <li>Panchavimsha Brahmana (Samaveda)</li>
                      <li>Gopatha Brahmana (Atharvaveda)</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    Aranyakas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The Aranyakas, or "forest texts," were composed for ascetics
                    living in the wilderness. They focus on the symbolic and
                    philosophical interpretation of rituals and mark a
                    transition from the ritualistic emphasis of the Brahmanas to
                    the philosophical focus of the Upanishads.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg mx-auto">
                    <p className="text-orange-600 font-semibold">
                      Key Aranyakas include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
                      <li>Aitareya Aranyaka (Rigveda)</li>
                      <li>Brihadaranyaka (Yajurveda)</li>
                      <li>Talavakara Aranyaka (Samaveda)</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    Upanishads
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The Upanishads form the concluding portion of the Vedas and
                    are therefore called "Vedanta" (the end of the Vedas). They
                    contain profound philosophical discussions about the nature
                    of reality, consciousness, the self (atman), and the
                    ultimate reality (Brahman).
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg mx-auto">
                    <p className="text-orange-600 font-sesmibold">
                      Some of the principal Upanishads include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
                      <li>Brihadaranyaka Upanishad</li>
                      <li>Chandogya Upanishad</li>
                      <li>Isha Upanishad</li>
                      <li>Kena Upanishad</li>
                      <li>Katha Upanishad</li>
                      <li>Mundaka Upanishad</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Significance Section */}
        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 text-center">
                Significance and Influence
              </h2>
              <p className="text-orange-700 text-center mb-8">
                Explore the profound impact of the Vedas on religion, culture,
                and history.
              </p>
              <div className="bg-orange-50 rounded-xl p-6 shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-sm">
                      <div className="text-3xl text-orange-600 mb-4 text-center">
                        🕉️
                      </div>
                      <h3 className="text-xl font-bold text-orange-700 mb-4 text-center">
                        Religious Significance
                      </h3>
                      <ul className="list-disc pl-5 space-y-3 text-gray-700">
                        <li>Foundation of Hindu dharma and rituals</li>
                        <li>
                          Source of mantras used in daily worship and ceremonies
                        </li>
                        <li>
                          Basis for the six orthodox schools of Hindu philosophy
                        </li>
                        <li>
                          Authority for establishing social norms and ethical
                          guidelines
                        </li>
                        <li>
                          Inspiration for devotional practices and spiritual
                          disciplines
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-sm">
                      <div className="text-3xl text-orange-600 mb-4 text-center">
                        🎭
                      </div>
                      <h3 className="text-xl font-bold text-orange-700 mb-4 text-center">
                        Cultural Impact
                      </h3>
                      <ul className="list-disc pl-5 space-y-3 text-gray-700">
                        <li>
                          Influence on Indian literature, art, music, and dance
                        </li>
                        <li>
                          Source of Sanskrit language development and
                          preservation
                        </li>
                        <li>
                          Foundation for traditional Indian sciences like
                          Ayurveda and astronomy
                        </li>
                        <li>
                          Inspiration for architectural principles and temple
                          design
                        </li>
                        <li>
                          Basis for festivals, ceremonies, and cultural
                          practices
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-sm">
                      <div className="text-3xl text-orange-600 mb-4 text-center">
                        📜
                      </div>
                      <h3 className="text-xl font-bold text-orange-700 mb-4 text-center">
                        Historical Value
                      </h3>
                      <ul className="list-disc pl-5 space-y-3 text-gray-700">
                        <li>
                          Oldest preserved texts of Indo-European civilization
                        </li>
                        <li>Window into ancient Indian society and culture</li>
                        <li>
                          Record of early religious and philosophical
                          development
                        </li>
                        <li>
                          Evidence of sophisticated intellectual traditions
                        </li>
                        <li>
                          Documentation of ancient rituals, customs, and
                          practices
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Explore Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-8">
                Explore Other Sacred Texts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                      loading="lazy"
                      src={imageLinks.upanishads}
                      alt="The Upanishads"
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <button
                      onClick={() =>
                        (window.location.href = "/resources/upanishads")
                      }
                      className="w-full px-4 py-2 border border-orange-600 text-orange-50 rounded-lg bg-orange-600"
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
                      loading="lazy"
                      src={imageLinks.epics}
                      alt="The Epics"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="p-4">
                    <button
                      onClick={() =>
                        (window.location.href = "/resources/epics")
                      }
                      className="w-full px-4 py-2 border border-orange-600 text-orange-50 rounded-lg bg-orange-600"
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
                      The Puranas
                    </h3>
                    <p className="text-gray-600">
                      Ancient texts of myths, legends, and cosmology
                    </p>
                  </div>
                  <div className="relative h-52 w-full p-4 pb-0">
                    <img
                      loading="lazy"
                      src={imageLinks.puranas}
                      alt="The Puranas"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="p-4">
                    <button
                      onClick={() =>
                        (window.location.href = "/resources/puranas")
                      }
                      className="w-full px-4 py-2 border border-orange-600 text-orange-50 rounded-lg bg-orange-600"
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VedasPage;
