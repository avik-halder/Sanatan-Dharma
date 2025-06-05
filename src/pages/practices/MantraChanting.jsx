import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

const MantraChantingPage = () => {
  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Introduction Section */}
        <section className="py-10 lg:py-16 relative overflow-hidden">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 order-2 lg:order-1"
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  Mantra Chanting
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  The sacred practice of reciting divine sounds for spiritual
                  transformation
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Mantra chanting is one of the most ancient and powerful
                    spiritual practices in Hinduism. The word "mantra" comes
                    from two Sanskrit roots: "man" meaning mind, and "tra"
                    meaning tool or instrument. Thus, a mantra is literally a
                    "mind tool" – a sound, syllable, word, or group of words
                    that is considered capable of creating transformation.
                  </p>
                  <p>
                    In Hindu tradition, mantras are not merely words but sacred
                    formulas containing concentrated spiritual energy. They are
                    believed to be revealed to ancient sages in deep meditation
                    rather than composed or invented. Each mantra has a specific
                    vibration that corresponds to a particular aspect of divine
                    energy.
                  </p>
                  <p>
                    When chanted with proper pronunciation, rhythm, and
                    devotion, mantras are believed to create powerful vibrations
                    that can transform consciousness, purify the mind, invoke
                    deities, and even manifest specific outcomes. The practice
                    of mantra chanting (japa) is a cornerstone of Hindu
                    spiritual disciplines and is found across various traditions
                    including Vedanta, Yoga, Tantra, and Bhakti.
                  </p>
                  <p>
                    Beyond their spiritual significance, mantras have been
                    recognized for their psychological and physiological
                    benefits, including stress reduction, improved
                    concentration, and enhanced well-being.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 order-1 lg:order-2 flex items-end"
              >
                <div className="relative lg:h-[460px] rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    loading="lazy"
                    src={imageLinks.mantra}
                    alt="Mantra Chanting"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <p className="text-white text-sm">
                      A devotee engaged in mantra chanting with mala beads
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Sacred Quote */}
            <motion.div
              className="mt-8 lg:mt-16 p-8 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-500 rounded-xl shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-xl font-medium text-orange-800 italic mb-2">
                "Among vibrations, I am the sacred Om. Among sacrifices, I am
                the chanting of the holy names."
              </blockquote>
              <cite className="text-orange-600">
                — Lord Krishna, Bhagavad Gita 10.25
              </cite>
            </motion.div>
          </div>
        </section>

        {/* Significant Mantras Section */}
        <section className="py-8 lg:py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              className="text-center mb-6 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-2 lg:mb-4 relative inline-block mx-auto">
                Significant Mantras
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Powerful sacred sounds and their meanings in Hindu tradition
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Om (Aum)",
                  sanskrit: "ॐ",
                  english: "Om",
                  bangla: "ওম",
                  description:
                    "The primordial sound representing the ultimate reality, Brahman. It is considered the most sacred syllable and the source of all mantras.",
                  benefits:
                    "Connects to universal consciousness, promotes inner peace, enhances meditation, aligns body-mind-spirit.",
                },
                {
                  name: "Gayatri Mantra",
                  sanskrit:
                    "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
                  english:
                    "Om bhur bhuvah swah tatsaviturvarenyam bhargo devasyadhimahi dhiyo yo nah prachodayat",
                  bangla:
                    "ওঁ ভূর্ভুবঃ স্বঃ তৎ সবিতুর্বরেণ্যং ভর্গো দেবস্য ধীমহি ধিয়ো য়ো নঃ প্রচোদয়াৎ",
                  description:
                    "A highly revered mantra from the Rigveda, dedicated to Savitr, the sun deity. It is a prayer for illumination of the intellect.",
                  benefits:
                    "Enhances wisdom and intelligence, purifies the mind, removes obstacles, brings spiritual enlightenment.",
                },
                {
                  name: "Maha Mrityunjaya Mantra",
                  sanskrit:
                    "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्",
                  english:
                    "Om tryambakam yajamahe sugandhim pushtivardhanam urvarukamiva bandhananmrityor mukshiya mamritat",
                  bangla:
                    "ওঁ ত্র্যম্বকং যজামহে সুগন্ধিং পুষ্টিবর্ধনম্ উর্বারুকমিব বন্ধনান্ মৃত্যোর্মুক্ষীয় মাঽমৃতাৎ",
                  description:
                    "A powerful healing mantra dedicated to Lord Shiva as Mrityunjaya, the conqueror of death. It is recited for health, longevity, and liberation.",
                  benefits:
                    "Promotes healing, removes fear, grants longevity, protects from accidents and calamities.",
                },
                {
                  name: "Om Namah Shivaya",
                  sanskrit: "ॐ नमः शिवाय",
                  english: "Om namah shivaya",
                  bangla: "ওঁ নমঃ শিবায়",
                  description:
                    "One of the most popular mantras in Shaivism, it is known as the five-syllable mantra (panchakshari) honoring Lord Shiva.",
                  benefits:
                    "Purifies the mind, removes negative tendencies, awakens inner divinity, promotes spiritual growth.",
                },
                {
                  name: "Hare Krishna Maha Mantra",
                  sanskrit:
                    "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे हरे राम हरे राम राम राम हरे हरे",
                  english:
                    "Hare Krishna hare Krishna Krishna Krishna hare hare hare Rama hare Rama Rama Rama hare hare",
                  bangla:
                    "হরে কৃষ্ণ হরে কৃষ্ণ কৃষ্ণ কৃষ্ণ হরে হরে হরে রাম হরে রাম রাম রাম হরে হরে",
                  description:
                    "The great mantra of the Hare Krishna movement, it invokes the divine energies of Krishna and Rama along with the pleasure potency, Hara.",
                  benefits:
                    "Awakens divine love, cleanses the heart, brings joy and spiritual ecstasy, connects to Krishna consciousness.",
                },
                {
                  name: "Om Gam Ganapataye Namaha",
                  sanskrit: "ॐ गं गणपतये नमः",
                  english: "Om gam ganapataye namaha",
                  bangla: "ওঁ গাং গণপতয়ে নমঃ",
                  description:
                    "A mantra dedicated to Lord Ganesha, the remover of obstacles and lord of beginnings.",
                  benefits:
                    "Removes obstacles, brings success in endeavors, grants wisdom, blesses new beginnings.",
                },
              ].map((mantra, index) => (
                <motion.div
                  key={mantra.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-orange-100"
                >
                  <div className="relative">
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div> */}
                    {/* <img loading="lazy"
                      src={mantra.image}
                      alt={mantra.name}
                      className="w-full h-full object-cover"
                    /> */}
                    <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-20">
                      Sacred Mantra
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-orange-700 mb-4">
                      {mantra.name}
                    </h3>
                    <div className="bg-orange-200 p-3 rounded-md mb-4 border border-orange-100">
                      <p className="text-xl font-medium text-orange-700 text-center">
                        {mantra.sanskrit}
                      </p>
                    </div>
                    <div className="bg-orange-200 p-3 rounded-md mb-4 border border-orange-100">
                      <p className="text-xl font-medium text-orange-700 text-center">
                        {mantra.bangla}
                      </p>
                    </div>
                    <div className="bg-orange-200 p-3 rounded-md mb-4 border border-orange-100">
                      <p className="text-xl font-medium text-orange-700 text-center">
                        {mantra.english}
                      </p>
                    </div>
                    <p className="text-gray-700 mb-4">{mantra.description}</p>
                    <h4 className="font-medium text-orange-600 mb-2">
                      Benefits:
                    </h4>
                    <p className="text-gray-700 text-sm">{mantra.benefits}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Practicing Mantra Chanting Section */}
        <section className="py-10 lg:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 lg:mb-6 relative text-center lg:text-start">
                  Practicing Mantra Chanting
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Mantra chanting (japa) can be practiced in various ways,
                    each with its own significance and benefits. Here's how to
                    incorporate this powerful practice into your spiritual
                    journey:
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: "1. Choose Your Mantra",
                        description:
                          'Select a mantra that resonates with you spiritually. You might choose one based on your ishta devata (chosen deity), spiritual lineage, or specific goal. If you\'re new to mantra practice, simple mantras like "Om" or "Om Namah Shivaya" are good starting points.',
                      },
                      {
                        title: "2. Learn Proper Pronunciation",
                        description:
                          "The power of mantras lies partly in their sound vibrations, so correct pronunciation is important. Learn from a qualified teacher, audio recordings, or reliable resources to ensure you're chanting correctly.",
                      },
                      {
                        title: "3. Use a Mala (Prayer Beads)",
                        description:
                          "A mala is a string of 108 beads plus one guru bead. Hold the mala in your right hand, using your thumb to move from one bead to the next with each repetition of the mantra. Skip over the guru bead when you complete a round.",
                      },
                      {
                        title: "4. Choose Your Method",
                        description:
                          "Mantras can be chanted in three ways: vaikhari (audible), upamshu (whispered or soft), and manasika (mental). Begin with audible chanting and progress to more subtle forms as your practice deepens.",
                      },
                      {
                        title: "5. Establish Regular Practice",
                        description:
                          "Consistency is key. Set aside a specific time each day for your mantra practice. Early morning (brahma muhurta) is traditionally considered most auspicious, but any time that works for your schedule is beneficial.",
                      },
                    ].map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-orange-100 border border-orange-500 p-4 rounded-xl border border-orange-100 shadow-sm"
                      >
                        <h3 className="font-bold text-orange-700 mb-2">
                          {step.title}
                        </h3>
                        <p>{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={"/practices"}>
                      <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-md">
                        Back to Practices
                      </button>
                    </Link>
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={"/practices/puja"}>
                      <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md">
                        Explore Puja
                      </button>
                    </Link>
                  </motion.span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Mala Beads",
                      image: imageLinks.mala,
                    },
                    {
                      title: "Mantra Meditation",
                      image: imageLinks.mantraMeditation,
                    },
                    {
                      title: "Group Chanting",
                      image: imageLinks.groupChanting,
                    },
                    {
                      title: "Sacred Texts",
                      image: imageLinks.atharvaveda,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="relative md:h-80 rounded-lg overflow-hidden group bottom-5"
                    >
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <p className="text-white font-medium p-3">
                          {item.title}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MantraChantingPage;
