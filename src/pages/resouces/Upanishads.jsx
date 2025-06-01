import { motion } from "framer-motion";
import React, { useState } from "react";
import imageLinks from "../../utils/ImageLinks";

const UpanishadsPage = () => {
  const [activeTab, setActiveTab] = useState("brihadaranyaka");
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const toggleAccordion = (value) => {
    setExpandedAccordion(expandedAccordion === value ? null : value);
  };

  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Introduction Section */}
        <section className="py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  The Upanishads
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  Philosophical texts exploring the nature of reality and
                  consciousness
                </h2>
                <p className="text-gray-700 mb-4">
                  The Upanishads are a collection of philosophical texts that
                  form the theoretical basis for Hinduism. They are considered
                  the culmination of the Vedas and are also known as Vedanta
                  (the end of the Vedas).
                </p>
                <p className="text-gray-700 mb-4">
                  Composed between 800-500 BCE, the Upanishads contain some of
                  the central philosophical concepts and ideas of Hinduism,
                  including the concepts of Brahman (ultimate reality), Atman
                  (soul or self), karma (action), samsara (cycle of rebirth),
                  and moksha (liberation from the cycle of rebirth).
                </p>
                <p className="text-gray-700">
                  The word "Upanishad" is derived from the Sanskrit words "upa"
                  (near), "ni" (down), and "shad" (to sit), suggesting the idea
                  of sitting down near a teacher to receive spiritual knowledge.
                  They represent the essence of the spiritual wisdom imparted
                  from teacher to disciple.
                </p>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    loading="lazy"
                    src={imageLinks.upanishads2}
                    alt="Ancient Upanishad manuscript"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Principal Upanishads Section */}
        <section className="pt-12 pb-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 text-center">
                Principal Upanishads
              </h2>
              <p className="text-orange-700 text-center mb-8 ">
                There we explore some of the most important Upanishads that form
                the foundation of Hindu philosophy.
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
                          activeTab === "brihadaranyaka"
                            ? "bg-white"
                            : "bg-inherit"
                        }`}
                        onClick={() => setActiveTab("brihadaranyaka")}
                        role="tab"
                      >
                        Brihadaranyaka
                      </button>
                    </li>
                    <li className="z-30 flex-auto text-center">
                      <button
                        className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                          activeTab === "chandogya" ? "bg-white" : "bg-inherit"
                        }`}
                        onClick={() => setActiveTab("chandogya")}
                        role="tab"
                      >
                        Chandogya
                      </button>
                    </li>
                    <li className="z-30 flex-auto text-center">
                      <button
                        className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                          activeTab === "others" ? "bg-white" : "bg-inherit"
                        }`}
                        onClick={() => setActiveTab("others")}
                        role="tab"
                      >
                        <span className="block md:hidden">Others</span>{" "}
                        {/* Mobile view */}
                        <span className="hidden md:block">
                          Other Major Upanishads
                        </span>{" "}
                        {/* Desktop view */}
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Brihadaranyaka Upanishad Content */}
                {activeTab === "brihadaranyaka" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md mb-8"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-60 rounded-lg overflow-hidden">
                          <img
                            loading="lazy"
                            src={imageLinks.brihadaranyakaUpanishad}
                            alt="Brihadaranyaka Upanishad"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Brihadaranyaka Upanishad
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The Brihadaranyaka Upanishad is one of the oldest and
                          most important Upanishads. Its name means "great
                          forest book," suggesting its vast and profound
                          content. It is associated with the Shukla Yajurveda.
                        </p>
                        <p className="text-gray-700 mb-4">
                          This Upanishad contains discussions on metaphysics,
                          philosophy, and the nature of reality. It includes
                          famous dialogues, such as those between the sage
                          Yajnavalkya and his wife Maitreyi, and between King
                          Janaka and Yajnavalkya.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Key teachings include:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            The concept of Brahman as the ultimate reality
                          </li>
                          <li>
                            The relationship between Atman (self) and Brahman
                          </li>
                          <li>
                            The famous declaration "Aham Brahmasmi" (I am
                            Brahman)
                          </li>
                          <li>The nature of consciousness and existence</li>
                          <li>
                            The process of creation and the origin of the
                            universe
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Metaphysics
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Self-knowledge
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Consciousness
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                {/* Chandogya Upanishad Content */}
                {activeTab === "chandogya" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md mb-8"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-60 rounded-lg overflow-hidden">
                          <img
                            loading="lazy"
                            src={imageLinks.chandogyaUpanishad}
                            alt="Chandogya Upanishad"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          Chandogya Upanishad
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The Chandogya Upanishad is one of the oldest and most
                          important Upanishads, associated with the Samaveda. It
                          consists of eight chapters (prapathakas) that discuss
                          various aspects of meditation, ethics, and
                          metaphysics.
                        </p>
                        <p className="text-gray-700 mb-4">
                          This Upanishad contains the famous instruction from
                          Uddalaka to his son Shvetaketu, "Tat Tvam Asi" (That
                          Thou Art), which is one of the Mahavakyas (great
                          sayings) of Hindu philosophy.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Key teachings include:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            The nature of Brahman and its relationship to the
                            individual self
                          </li>
                          <li>
                            The concept of Prana (life force) and its
                            significance
                          </li>
                          <li>
                            The importance of meditation and contemplation
                          </li>
                          <li>
                            The story of Satyakama Jabala, illustrating that
                            spiritual knowledge is not restricted by birth
                          </li>
                          <li>
                            The dialogue between Narada and Sanatkumara on the
                            hierarchy of knowledge
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Meditation
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Ethics
                          </span>
                          <span className="bg-orange-200 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Self-realization
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                {/* Other Principal Upanishads Content */}
                {activeTab === "others" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md mb-8"
                  >
                    <h3 className="text-xl font-bold text-orange-700 mb-4">
                      Other Principal Upanishads
                    </h3>
                    <p className="text-gray-700 mb-6">
                      While there are over 200 Upanishads, traditionally 10-13
                      are considered the principal or major Upanishads. Besides
                      the Brihadaranyaka and Chandogya, these include:
                    </p>
                    {/* Accordion for Other Upanishads */}
                    <div className="w-full">
                      {/* Isha Upanishad */}
                      <div className="mb-2 border-b-2 border-dashed border-orange-200">
                        <button
                          onClick={() => toggleAccordion("isha")}
                          className="w-full flex justify-between items-center py-4 text-orange-700 font-medium"
                        >
                          <span className="text-lg">Isha Upanishad</span>
                          <span className="text-2xl">
                            {expandedAccordion === "isha" ? "−" : "+"}
                          </span>
                        </button>
                        {expandedAccordion === "isha" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="p-4 mb-2 rounded-xl text-gray-700 bg-orange-100"
                          >
                            <p className="mb-2">
                              The Isha Upanishad is one of the shortest
                              Upanishads, consisting of only 18 verses. It is
                              associated with the Shukla Yajurveda.
                            </p>
                            <p>
                              It emphasizes the unity of all beings and the
                              importance of both knowledge and action. It
                              teaches that one should see the divine in
                              everything and live a life of balance between
                              worldly and spiritual pursuits.
                            </p>
                          </motion.div>
                        )}
                      </div>
                      {/* Katha Upanishad */}
                      <div className="mb-2 border-b-2 border-dashed border-orange-200">
                        <button
                          onClick={() => toggleAccordion("katha")}
                          className="w-full flex justify-between items-center py-4 text-orange-700 font-medium"
                        >
                          <span className="text-lg">Katha Upanishad</span>
                          <span className="text-2xl">
                            {expandedAccordion === "katha" ? "−" : "+"}
                          </span>
                        </button>
                        {expandedAccordion === "katha" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="p-4 mb-2 bg-orange-100 rounded-xl text-gray-700"
                          >
                            <p className="mb-2">
                              The Katha Upanishad tells the story of a young boy
                              named Nachiketa who meets Yama, the god of death,
                              and receives teachings about the nature of the
                              self and ultimate reality.
                            </p>
                            <p>
                              It contains the famous analogy of the chariot,
                              where the body is the chariot, the intellect is
                              the charioteer, the mind is the reins, the senses
                              are the horses, and the self (Atman) is the
                              passenger.
                            </p>
                          </motion.div>
                        )}
                      </div>
                      {/* Mundaka Upanishad */}
                      <div className="mb-2 border-b-2 border-dashed border-orange-200">
                        <button
                          onClick={() => toggleAccordion("mundaka")}
                          className="w-full flex justify-between items-center py-4 text-orange-700 font-medium"
                        >
                          <span className="text-lg">Mundaka Upanishad</span>
                          <span className="text-2xl">
                            {expandedAccordion === "mundaka" ? "−" : "+"}
                          </span>
                        </button>
                        {expandedAccordion === "mundaka" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="p-4 mb-2 bg-orange-100 rounded-xl text-gray-700"
                          >
                            <p className="mb-2">
                              The Mundaka Upanishad distinguishes between lower
                              knowledge (rituals and sciences) and higher
                              knowledge (the knowledge of Brahman). It is
                              associated with the Atharvaveda.
                            </p>
                            <p>
                              It contains the famous analogy of two birds on a
                              tree, representing the individual self and the
                              supreme self, and emphasizes the importance of a
                              qualified teacher for spiritual knowledge.
                            </p>
                          </motion.div>
                        )}
                      </div>
                      {/* Mandukya Upanishad */}
                      <div className="mb-2 border-b-2 border-dashed border-orange-200">
                        <button
                          onClick={() => toggleAccordion("mandukya")}
                          className="w-full flex justify-between items-center py-4 text-orange-700 font-medium"
                        >
                          <span className="text-lg">Mandukya Upanishad</span>
                          <span className="text-2xl">
                            {expandedAccordion === "mandukya" ? "−" : "+"}
                          </span>
                        </button>
                        {expandedAccordion === "mandukya" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="p-4 mb-2 bg-orange-100 rounded-xl text-gray-700"
                          >
                            <p className="mb-2">
                              The Mandukya Upanishad is the shortest of all
                              Upanishads, consisting of just 12 verses, but is
                              considered one of the most profound. It is
                              associated with the Atharvaveda.
                            </p>
                            <p>
                              It analyzes the syllable Om and describes the four
                              states of consciousness: waking (Vaishvanara),
                              dreaming (Taijasa), deep sleep (Prajna), and the
                              fourth state (Turiya) that transcends the other
                              three.
                            </p>
                          </motion.div>
                        )}
                      </div>
                      {/* Taittiriya Upanishad */}
                      <div className="mb-2 border-b-2 border-dashed border-orange-200">
                        <button
                          onClick={() => toggleAccordion("taittiriya")}
                          className="w-full flex justify-between items-center py-4 text-orange-700 font-medium"
                        >
                          <span className="text-lg">Taittiriya Upanishad</span>
                          <span className="text-2xl">
                            {expandedAccordion === "taittiriya" ? "−" : "+"}
                          </span>
                        </button>
                        {expandedAccordion === "taittiriya" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="p-4 mb-2 bg-orange-100 rounded-xl text-gray-700"
                          >
                            <p className="mb-2">
                              The Taittiriya Upanishad is divided into three
                              sections: the Shiksha Valli (on education), the
                              Brahmananda Valli (on bliss), and the Bhrigu Valli
                              (on the nature of reality).
                            </p>
                            <p>
                              It contains teachings on ethics, the five sheaths
                              (koshas) of the self, and the concept of Brahman
                              as bliss (ananda).
                            </p>
                          </motion.div>
                        )}
                      </div>
                      {/* Kena Upanishad */}
                      <div className="mb-2 border-b-2 border-dashed border-orange-200">
                        <button
                          onClick={() => toggleAccordion("kena")}
                          className="w-full flex justify-between items-center py-4 text-orange-700 font-medium"
                        >
                          <span className="text-lg">Kena Upanishad</span>
                          <span className="text-2xl">
                            {expandedAccordion === "kena" ? "−" : "+"}
                          </span>
                        </button>
                        {expandedAccordion === "kena" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="p-4 mb-2 bg-orange-100 rounded-xl text-gray-700"
                          >
                            <p className="mb-2">
                              The Kena Upanishad begins with the question "By
                              whom (kena) is the mind directed?" and explores
                              the nature of Brahman as the power behind all
                              faculties.
                            </p>
                            <p>
                              It contains the story of Brahman appearing to the
                              gods as a yaksha (spirit) and teaching them
                              humility, as well as the teaching that Brahman is
                              "that which is not known to those who know, and
                              known to those who do not know."
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Concepts Section */}
        <section className="py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, staggerChildren: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 text-center">
                Key Concepts in the Upanishads
              </h2>
              <p className="text-orange-700 mb-10 text-center">
                The Upanishads introduce many philosophical ideas that form the
                foundation of Hindu belief.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4 text-center sm:text-start">
                    Brahman <span className="text-2xl">🌌</span>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Brahman is the ultimate reality, the absolute, infinite,
                    eternal, omnipresent, and omniscient principle that is the
                    ground of all existence. It is beyond description and
                    comprehension, yet is the essence of everything.
                  </p>
                  <p className="text-gray-700">
                    The Upanishads describe Brahman both in negative terms (neti
                    neti - "not this, not this") and positive terms
                    (sat-chit-ananda - "existence-consciousness-bliss").
                    Understanding Brahman is the ultimate goal of spiritual
                    knowledge.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4 text-center sm:text-start">
                    Atman <span className="text-2xl">🧘</span>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Atman is the individual self or soul, the essence of an
                    individual. The Upanishads teach that the Atman is not
                    different from Brahman - this is expressed in the Mahavakyas
                    (great sayings) such as "Aham Brahmasmi" (I am Brahman) and
                    "Tat Tvam Asi" (That Thou Art).
                  </p>
                  <p className="text-gray-700">
                    The realization of the identity of Atman with Brahman is
                    considered the highest spiritual achievement and leads to
                    liberation (moksha).
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4 text-center sm:text-start">
                    Karma and Samsara <span className="text-2xl">⚖️</span>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Karma refers to the law of cause and effect, where one's
                    actions determine one's future experiences. The Upanishads
                    teach that karma binds the individual to the cycle of birth
                    and death (samsara).
                  </p>
                  <p className="text-gray-700">
                    Samsara is the continuous cycle of birth, death, and
                    rebirth. The Upanishads teach that as long as one remains
                    ignorant of one's true nature (Atman), one remains bound to
                    this cycle.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4 text-center sm:text-start">
                    Moksha <span className="text-2xl">💫</span>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Moksha is liberation from the cycle of birth and death
                    (samsara) and the ultimate goal of Hindu spiritual practice.
                    It is achieved through the realization of the identity of
                    Atman with Brahman.
                  </p>
                  <p className="text-gray-700">
                    The Upanishads describe various paths to moksha, including
                    the path of knowledge (jnana), the path of action (karma),
                    and the path of devotion (bhakti). They emphasize that true
                    knowledge leads to freedom from ignorance and suffering.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Influence and Legacy Section */}
        <section className="py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 text-center">
                Influence and Legacy
              </h2>
              <p className="text-orange-700 mb-10 text-center">
                The teachings of the Upanishads have inspired numerous schools
                of thought, philosophies, and spiritual practices.
              </p>
              <div className="bg-orange-50 rounded-xl p-6 shadow-md relative overflow-hidden">
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-orange-700 mb-4">
                        <span className="text-2xl">📚</span> Philosophical
                        Schools
                      </h3>
                      <ul className="list-disc pl-5 space-y-3 text-gray-700">
                        <li>
                          Foundation for the six orthodox schools of Hindu
                          philosophy, especially Vedanta
                        </li>
                        <li>
                          Inspiration for Advaita Vedanta (non-dualism) as
                          expounded by Adi Shankaracharya
                        </li>
                        <li>
                          Basis for Vishishtadvaita (qualified non-dualism) of
                          Ramanuja
                        </li>
                        <li>
                          Source for Dvaita (dualism) philosophy of Madhvacharya
                        </li>
                        <li>Influence on the development of Yoga philosophy</li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-orange-700 mb-4">
                        <span className="text-2xl">🙏</span> Religious Impact
                      </h3>
                      <ul className="list-disc pl-5 space-y-3 text-gray-700">
                        <li>
                          Shift from ritual-focused religion to philosophical
                          inquiry
                        </li>
                        <li>
                          Emphasis on direct spiritual experience over dogma
                        </li>
                        <li>
                          Foundation for meditation practices and spiritual
                          disciplines
                        </li>
                        <li>Influence on Bhakti (devotional) movements</li>
                        <li>
                          Inspiration for various reform movements in Hinduism
                        </li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-orange-700 mb-4">
                        <span className="text-2xl">🌍</span> Global Influence
                      </h3>
                      <ul className="list-disc pl-5 space-y-3 text-gray-700">
                        <li>
                          Inspiration for Western transcendentalists like Ralph
                          Waldo Emerson
                        </li>
                        <li>
                          Influence on philosophers such as Arthur Schopenhauer
                          and Aldous Huxley
                        </li>
                        <li>
                          Impact on modern spiritual movements and New Age
                          philosophies
                        </li>
                        <li>
                          Contribution to interfaith dialogue and comparative
                          religious studies
                        </li>
                        <li>
                          Inspiration for modern physics and consciousness
                          studies
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Explore Other Texts Section */}
        <section className="py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
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
                      loading="lazy"
                      src={imageLinks.vedas}
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
      </main>
    </div>
  );
};

export default UpanishadsPage;
