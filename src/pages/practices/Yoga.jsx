import { motion } from "framer-motion";
import { useState } from "react";
import imageLinks from "../../utils/ImageLinks";

const YogaPage = () => {
  const [activeTab, setActiveTab] = useState("classical");

  return (
    <div className="min-h-screen mt-16">
      <main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction Section */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  Yoga: The Path to Union
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  Explore the ancient practice that harmonizes body, mind, and
                  spirit
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Yoga is one of the six orthodox philosophical schools
                    (darshanas) of Hinduism, originating in ancient India. The
                    word "yoga" comes from the Sanskrit root "yuj," meaning to
                    join, unite, or yoke, symbolizing the union of individual
                    consciousness with universal consciousness.
                  </p>
                  <p>
                    While modern Western yoga often focuses primarily on
                    physical postures (asanas), traditional yoga encompasses a
                    comprehensive system of physical, mental, and spiritual
                    practices designed to achieve a state of permanent peace and
                    self-realization.
                  </p>
                  <p>
                    The sage Patanjali systematized yoga practice in his Yoga
                    Sutras (compiled around 400 CE), outlining the eight limbs
                    of yoga: yama (ethical standards), niyama (self-discipline),
                    asana (postures), pranayama (breath control), pratyahara
                    (withdrawal of senses), dharana (concentration), dhyana
                    (meditation), and samadhi (enlightenment).
                  </p>
                  <p>
                    Throughout its long history, yoga has evolved into various
                    schools and styles, each emphasizing different aspects of
                    the practice but all sharing the common goal of liberation
                    from suffering and the cycle of rebirth.
                  </p>
                </div>
                <motion.div
                  className="mt-6 inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium">
                    Begin Your Yoga Journey
                  </button>
                </motion.div>
              </div>

              <div>
                <motion.div
                  className="relative h-[570px] rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    loading="lazy"
                    src={imageLinks.yoga2}
                    alt="Yoga Meditation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium">
                        Ancient yogic meditation practices for inner peace
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Sacred Quote */}
            <motion.div
              className="mt-16 p-8 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-500 rounded-xl shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-2xl font-medium text-orange-800 italic mb-2">
                "Yoga is the journey of the self, through the self, to the
                self."
              </blockquote>
              <cite className="text-orange-600">— The Bhagavad Gita</cite>
            </motion.div>
          </div>
        </section>

        {/* Eight Limbs Section */}
        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-3">
                The Eight Limbs of Yoga
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Patanjali's comprehensive path to spiritual enlightenment
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Yama",
                  description:
                    "Ethical standards and moral disciplines that govern our interactions with others.",
                  practices: [
                    "Ahimsa (Non-violence)",
                    "Satya (Truthfulness)",
                    "Asteya (Non-stealing)",
                    "Brahmacharya (Moderation)",
                    "Aparigraha (Non-possessiveness)",
                  ],
                  icon: "🤝",
                },
                {
                  name: "Niyama",
                  description:
                    "Personal observances and self-discipline practices that relate to our inner world.",
                  practices: [
                    "Saucha (Cleanliness)",
                    "Santosha (Contentment)",
                    "Tapas (Discipline)",
                    "Svadhyaya (Self-study)",
                    "Ishvara Pranidhana (Surrender to the divine)",
                  ],
                  icon: "🧘",
                },
                {
                  name: "Asana",
                  description:
                    "Physical postures designed to purify the body and provide the physical strength and stamina for meditation.",
                  practices: [
                    "Steady, comfortable posture",
                    "Alignment of body",
                    "Balance of strength and flexibility",
                    "Preparation for meditation",
                    "Physical health",
                  ],
                  icon: "🧎",
                },
                {
                  name: "Pranayama",
                  description:
                    "Breath control techniques that regulate the flow of prana (life force energy) in the body.",
                  practices: [
                    "Ujjayi (Victorious breath)",
                    "Nadi Shodhana (Alternate nostril breathing)",
                    "Kapalabhati (Skull-shining breath)",
                    "Bhastrika (Bellows breath)",
                    "Kumbhaka (Breath retention)",
                  ],
                  icon: "👃🏻💨",
                },
                {
                  name: "Pratyahara",
                  description:
                    "Withdrawal of the senses from external objects to prepare for internal focus.",
                  practices: [
                    "Sensory withdrawal",
                    "Internalization of awareness",
                    "Freedom from external distractions",
                    "Preparation for concentration",
                    "Inner quietude",
                  ],
                  icon: "👁️",
                },
                {
                  name: "Dharana",
                  description:
                    "Concentration or focused attention on a single point, object, or thought.",
                  practices: [
                    "Single-pointed focus",
                    "Concentration on breath",
                    "Visualization",
                    "Mantra repetition",
                    "Gazing (Trataka)",
                  ],
                  icon: "🎯",
                },
                {
                  name: "Dhyana",
                  description:
                    "Meditation or uninterrupted flow of concentration, where the mind becomes completely absorbed.",
                  practices: [
                    "Sustained awareness",
                    "Witnessing consciousness",
                    "Non-judgmental observation",
                    "Present moment awareness",
                    "Expanded consciousness",
                  ],
                  icon: "✨",
                },
                {
                  name: "Samadhi",
                  description:
                    "Enlightenment or complete integration, where individual consciousness merges with universal consciousness.",
                  practices: [
                    "Unity consciousness",
                    "Transcendence of duality",
                    "Bliss state",
                    "Self-realization",
                    "Liberation (Moksha)",
                  ],
                  icon: "🌟",
                },
              ].map((limb, index) => (
                <motion.div
                  key={limb.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden bg-orange-50 border border-orange-500 rounded-xl shadow-md hover:shadow-xl p-6 transition-shadow h-full group"
                >
                  <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {limb.icon}
                  </div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2 text-center">
                    {limb.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{limb.description}</p>
                  <h4 className="font-medium text-orange-600 mb-2">
                    Key Practices:
                  </h4>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    {limb.practices.map((practice, i) => (
                      <li
                        key={i}
                        className="group-hover:translate-x-1 transition-transform duration-300 delay-75"
                      >
                        {practice}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Yoga Styles Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center mb-10">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-3">
                    Major Styles of Yoga
                  </h2>
                  <p className="text-orange-700 max-w-3xl mx-auto">
                    Different approaches to the ancient practice, each with
                    unique emphasis and techniques
                  </p>
                </motion.div>
              </div>
              {/* Tab Navigation */}
              <div className="max-w-4xl mx-auto">
                <div className="relative right-0 mb-4">
                  <ul
                    className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-orange-200"
                    data-tabs="tabs"
                    role="list"
                  >
                    {[
                      { id: "classical", tabName: "Classical" },
                      { id: "devotional", tabName: "Devotional" },
                      { id: "physical", tabName: "Physical" },
                      { id: "modern", tabName: "Modern" },
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

                {/* Classical Yoga Tab */}
                {activeTab === "classical" && (
                  <div className="bg-orange-50 border border-orange-500 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">
                      Classical Yoga Traditions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          name: "Raja Yoga",
                          description:
                            "The 'royal path' of meditation and mind control, following Patanjali's eight-limbed system to achieve samadhi.",
                          image: imageLinks.raja,
                        },
                        {
                          name: "Jñāna Yoga",
                          description:
                            "The path of knowledge and wisdom, using philosophical inquiry and self-analysis to discern the true nature of reality.",
                          image: imageLinks.jnana2,
                        },
                        {
                          name: "Karma Yoga",
                          description:
                            "The yoga of selfless action, performing one's duties without attachment to results as a form of spiritual practice.",
                          image: imageLinks.karma,
                        },
                        {
                          name: "Bhakti Yoga",
                          description:
                            "The path of devotion and love, focusing on surrender and worship of the divine to achieve union.",
                          image: imageLinks.bhaktiClassical,
                        },
                      ].map((style, index) => (
                        <motion.div
                          key={style.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex gap-4 bg-orange-100 p-4 rounded-lg"
                        >
                          <div className="relative h-20 w-20 flex-shrink-0">
                            <img
                              loading="lazy"
                              src={style.image}
                              alt={style.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-orange-700">
                              {style.name}
                            </h4>
                            <p className="text-gray-700 text-sm">
                              {style.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Devotional Yoga Tab */}
                {activeTab === "devotional" && (
                  <div className="bg-orange-50 border border-orange-500 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">
                      Devotional Yoga Practices
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          name: "Bhakti Yoga",
                          description:
                            "Focused on devotional practices like kirtan (devotional singing), japa (mantra repetition), and puja (ritual worship).",
                          image: imageLinks.bhaktiDevotional,
                        },
                        {
                          name: "Nada Yoga",
                          description:
                            "The yoga of sound, using music and sound vibrations to achieve spiritual transformation and consciousness expansion.",
                          image: imageLinks.nada,
                        },
                        {
                          name: "Siddha Yoga",
                          description:
                            "A spiritual path that emphasizes the awakening of kundalini energy through the grace of a perfected master (siddha guru).",
                          image: imageLinks.sidhha,
                        },
                        {
                          name: "Mantra Yoga",
                          description:
                            "The practice of chanting sacred sounds, syllables, or verses to transform consciousness and connect with divine energy.",
                          image: imageLinks.mantra4,
                        },
                      ].map((style, index) => (
                        <motion.div
                          key={style.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex gap-4 bg-orange-100 p-4 rounded-lg"
                        >
                          <div className="relative h-20 w-20 flex-shrink-0">
                            <img
                              loading="lazy"
                              src={style.image}
                              alt={style.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-orange-700">
                              {style.name}
                            </h4>
                            <p className="text-gray-700 text-sm">
                              {style.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Physical Yoga Tab */}
                {activeTab === "physical" && (
                  <div className="bg-orange-50 border border-orange-500 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">
                      Physical Yoga Traditions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          name: "Hatha Yoga",
                          description:
                            "The foundation of most physical yoga practices, focusing on asanas (postures) and pranayama (breath control) to prepare the body for meditation.",
                          image: imageLinks.hatha2,
                        },
                        {
                          name: "Kundalini Yoga",
                          description:
                            "Focuses on awakening the kundalini energy at the base of the spine through specific breathing techniques, mantras, and asanas.",
                          image: imageLinks.kundalini2,
                        },
                        {
                          name: "Tantra Yoga",
                          description:
                            "A complex system that uses ritual, meditation, and physical practices to transform consciousness and achieve spiritual liberation.",
                          image: imageLinks.tantra,
                        },
                        {
                          name: "Kriya Yoga",
                          description:
                            "A set of energization, breathing, and meditation techniques to accelerate spiritual development and achieve a state of spiritual awareness.",
                          image: imageLinks.kriya,
                        },
                      ].map((style, index) => (
                        <motion.div
                          key={style.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex gap-4 bg-orange-100 p-4 rounded-lg"
                        >
                          <div className="relative h-20 w-20 flex-shrink-0">
                            <img
                              loading="lazy"
                              src={style.image}
                              alt={style.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-orange-700">
                              {style.name}
                            </h4>
                            <p className="text-gray-700 text-sm">
                              {style.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Modern Yoga Tab */}
                {activeTab === "modern" && (
                  <div className="bg-orange-50 border border-orange-500 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">
                      Modern Yoga Styles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          name: "Iyengar Yoga",
                          description:
                            "Emphasizes precise alignment and the use of props to help practitioners achieve correct posture and alignment.",
                          image: imageLinks.iyengar,
                        },
                        {
                          name: "Ashtanga Yoga",
                          description:
                            "A rigorous style that follows a specific sequence of postures linked by breath, building internal heat and detoxifying the body.",
                          image: imageLinks.ashtanga,
                        },
                        {
                          name: "Vinyasa Yoga",
                          description:
                            "A flowing style that synchronizes movement with breath, creating a dynamic and creative practice.",
                          image: imageLinks.vinyasa,
                        },
                        {
                          name: "Restorative Yoga",
                          description:
                            "A gentle, therapeutic style that uses props to support the body in passive poses, promoting deep relaxation and healing.",
                          image: imageLinks.restorative,
                        },
                      ].map((style, index) => (
                        <motion.div
                          key={style.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex gap-4 bg-orange-100 p-4 rounded-lg"
                        >
                          <div className="relative h-20 w-20 flex-shrink-0">
                            <img
                              loading="lazy"
                              src={style.image}
                              alt={style.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-orange-700">
                              {style.name}
                            </h4>
                            <p className="text-gray-700 text-sm">
                              {style.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6">
                      Benefits of Yoga Practice
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        The regular practice of yoga offers numerous benefits
                        that extend beyond the physical body to encompass
                        mental, emotional, and spiritual well-being.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: "Physical Benefits",
                            benefits: [
                              "Increased flexibility and muscle strength",
                              "Improved posture and balance",
                              "Enhanced respiratory and cardiovascular function",
                              "Reduced chronic pain and inflammation",
                              "Better sleep quality and digestion",
                            ],
                            icon: "💪",
                            color: "from-red-500 to-orange-400",
                          },
                          {
                            title: "Mental Benefits",
                            benefits: [
                              "Reduced stress and anxiety",
                              "Improved focus and concentration",
                              "Enhanced mental clarity and cognitive function",
                              "Better emotional regulation",
                              "Increased self-awareness and mindfulness",
                            ],
                            icon: "🧠",
                            color: "from-blue-500 to-indigo-400",
                          },
                          {
                            title: "Spiritual Benefits",
                            benefits: [
                              "Deeper connection with inner self",
                              "Expanded consciousness and awareness",
                              "Cultivation of compassion and non-judgment",
                              "Sense of purpose and meaning",
                              "Experience of inner peace and contentment",
                            ],
                            icon: "✨",
                            color: "from-purple-500 to-pink-400",
                          },
                          {
                            title: "Lifestyle Benefits",
                            benefits: [
                              "Healthier eating habits",
                              "Improved relationships and communication",
                              "Greater work-life balance",
                              "Enhanced creativity and problem-solving",
                              "More mindful and conscious living",
                            ],
                            icon: "🌱",
                            color: "from-green-500 to-emerald-400",
                          },
                        ].map((category, index) => (
                          <motion.div
                            key={index}
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? -30 : 30,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-orange-50 border border-t-0 border-orange-500 p-4 rounded-xl shadow-sm relative overflow-hidden"
                          >
                            <div
                              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}
                            ></div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xl">{category.icon}</span>
                              <h3 className="font-bold text-orange-700">
                                {category.title}
                              </h3>
                            </div>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                              {category.benefits.map((benefit, i) => (
                                <li key={i} className="text-sm">
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <motion.a
                        href="/practices"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-md">
                          Back to Practices
                        </button>
                      </motion.a>
                      <motion.a
                        href="/practices/meditation"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md">
                          Explore Meditation
                        </button>
                      </motion.a>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative h-[560px] bottom rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      loading="lazy"
                      src={imageLinks.yoga3}
                      alt="Yoga Practice"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-medium">
                          Experience the transformative power of regular yoga
                          practice
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default YogaPage;
