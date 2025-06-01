import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

function MahaShivratriPage() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("stories");

  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Page Header */}
        <section className="py-12 md:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 order-2 lg:order-1"
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center md:text-start">
                  Maha Shivratri
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center md:text-start">
                  The Great Night of Shiva - A celebration of Lord Shiva, the
                  destroyer and transformer
                </h2>
                <div className="prose prose-blue max-w-none">
                  <p>
                    Maha Shivratri, which translates to "the great night of
                    Shiva," is one of the most significant festivals in
                    Hinduism. Celebrated annually in honor of Lord Shiva, the
                    festival falls on the 14th night of the new moon during the
                    dark half of the month of Phalguna (February/March)
                    according to the Hindu calendar.
                  </p>
                  <p>
                    This sacred night marks the convergence of Shiva and Shakti,
                    the masculine and feminine energies that balance the
                    universe. It is believed that on this night, Lord Shiva
                    performed the cosmic dance of creation, preservation, and
                    destruction, known as Tandava. The festival also
                    commemorates the wedding of Shiva and Parvati, symbolizing
                    the union of consciousness and energy.
                  </p>
                  <p>
                    For spiritual seekers, Maha Shivratri holds special
                    significance as it is considered a powerful night for
                    meditation and spiritual practices. The planetary positions
                    on this night are said to naturally raise one's spiritual
                    energy, making it easier to meditate and progress on the
                    spiritual path.
                  </p>
                  <p>
                    Devotees observe fasts, stay awake all night (jagaran),
                    chant mantras, and perform abhishekam (ritual bathing of the
                    Shiva Lingam) to seek blessings, prosperity, and liberation
                    from the cycle of birth and death.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 order-1 lg:order-2"
              >
                <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
                  <img
                    loading="lazy"
                    src={imageLinks.shivaLingam}
                    alt="Maha Shivratri celebration with Shiva Lingam"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mythology and Significance Section with Tabs */}
        <section className="py-12 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Mythology and Significance
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The stories and legends behind the sacred night of Shiva
              </p>
            </motion.div>

            {/* Tabs Navigation */}
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
                        activeTab === "stories" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab("stories")}
                      role="tab"
                    >
                      Mythological Stories
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        activeTab === "significance" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab("significance")}
                      role="tab"
                    >
                      Spiritual Significance
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        activeTab === "symbols" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setActiveTab("symbols")}
                      role="tab"
                    >
                      Symbols and Meanings
                    </button>
                  </li>
                </ul>
              </div>

              {/* Tabs Content */}
              <div className="space-y-4">
                {/* Mythological Stories */}
                {activeTab === "stories" && (
                  <div className="bg-orange-50 border border-orange-500 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-3">
                      The Origin Stories
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-orange-600">
                          The Samudra Manthan (Churning of the Ocean)
                        </h4>
                        <p className="text-gray-700">
                          One popular legend relates to the churning of the
                          cosmic ocean by the devas (gods) and asuras (demons)
                          to obtain amrita (the nectar of immortality). During
                          this process, a deadly poison called Halahala emerged,
                          threatening to destroy the universe. To save creation,
                          Lord Shiva consumed the poison, holding it in his
                          throat, which turned blue (earning him the name
                          Neelakantha, "the blue-throated one"). Maha Shivratri
                          commemorates this selfless act.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600">
                          The Marriage of Shiva and Parvati
                        </h4>
                        <p className="text-gray-700">
                          Another legend celebrates Maha Shivratri as the
                          wedding night of Lord Shiva and Goddess Parvati. Their
                          divine union represents the cosmic balance between the
                          masculine and feminine energies that sustain the
                          universe.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600">
                          The Appearance of the Shiva Lingam
                        </h4>
                        <p className="text-gray-700">
                          It is also believed that on Maha Shivratri, Lord Shiva
                          first manifested himself in the form of a Lingam (a
                          symbolic representation of Shiva). Devotees worship
                          the Shiva Lingam on this night to honor this
                          manifestation.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Spiritual Importance */}
                {activeTab === "significance" && (
                  <div className="bg-orange-50 border border-orange-500 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-3">
                      Spiritual Importance
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-orange-600">
                          Awakening of Consciousness
                        </h4>
                        <p className="text-gray-700">
                          Maha Shivratri symbolizes the awakening of
                          consciousness and the journey toward spiritual
                          enlightenment. The night represents the darkness of
                          ignorance, and by staying awake and meditating,
                          devotees symbolically remain vigilant against
                          ignorance and move toward the light of knowledge.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600">
                          Overcoming Ego
                        </h4>
                        <p className="text-gray-700">
                          Lord Shiva is often depicted as an ascetic who has
                          transcended worldly attachments. The festival
                          encourages devotees to overcome their ego and material
                          desires, focusing instead on spiritual growth and
                          self-realization.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600">
                          Cosmic Balance
                        </h4>
                        <p className="text-gray-700">
                          The union of Shiva and Shakti represents the balance
                          of masculine and feminine energies in the universe.
                          This balance is essential for creation, preservation,
                          and transformation. Maha Shivratri celebrates this
                          cosmic harmony and reminds us of the importance of
                          balance in our own lives.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sacred Symbols */}
                {activeTab === "symbols" && (
                  <div className="bg-orange-50 border border-orange-500 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-orange-700 mb-3">
                      Sacred Symbols
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          name: (
                            <>
                              <span className="flex flex-row items-center gap-2">
                                Shiva Lingam{" "}
                                <img
                                  loading="lazy"
                                  src={imageLinks.lingam}
                                  alt=""
                                  className="w-6 h-6"
                                />
                              </span>
                            </>
                          ),
                          description:
                            "The primary symbol of Lord Shiva, representing the formless nature of the divine and the infinite cosmic energy.",
                        },
                        {
                          name: "Trishul (Trident) 🔱",
                          description:
                            "Symbolizes the three gunas (qualities) of nature: sattva (purity), rajas (passion), and tamas (darkness).",
                        },
                        {
                          name: "Damaru (Drum) 🪘",
                          description:
                            "Represents the sound of creation and the rhythm of the universe.",
                        },
                        {
                          name: "Third Eye 👁️",
                          description:
                            "Symbolizes spiritual wisdom, insight, and the destruction of ignorance.",
                        },
                      ].map((symbol) => (
                        <div
                          key={symbol.name}
                          className="border-b pb-4 md:border-b-0 md:pb-0"
                        >
                          <h4 className="text-lg font-bold text-orange-600 mb-2">
                            {symbol.name}
                          </h4>
                          <p className="text-gray-700">{symbol.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Celebrations and Rituals Section */}
        <section className="py-12 md:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Celebrations and Rituals
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                How devotees observe and celebrate the auspicious night of Shiva
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Abhishekam",
                  description:
                    "The ritual bathing of the Shiva Lingam with milk, yogurt, honey, ghee, sugar, and water, symbolizing purification and devotion.",
                  icon: "💧",
                },
                {
                  title: "Fasting",
                  description:
                    "Many devotees observe a strict fast for the entire day and night, consuming only fruits, milk, and water to purify the body and mind.",
                  icon: "🍎",
                },
                {
                  title: "Night Vigil (Jaagaran)",
                  description:
                    "Staying awake throughout the night, engaging in meditation, prayer, and chanting of 'Om Namah Shivaya' to receive Shiva's blessings.",
                  icon: "🌙",
                },
                {
                  title: "Rudra Abhishek",
                  description:
                    "A special puja performed by priests that involves reciting sacred texts and mantras dedicated to Lord Shiva.",
                  icon: "📜",
                },
                {
                  title: "Offering Bel Leaves",
                  description:
                    "The sacred Bilva or Bel tree leaves are offered to the Shiva Lingam, as they are considered very dear to Lord Shiva.",
                  icon: "🍃",
                },
                {
                  title: "Temple Visits",
                  description:
                    "Devotees visit Shiva temples, which are beautifully decorated for the occasion, to offer prayers and seek blessings.",
                  icon: "🛕",
                },
              ].map((ritual, index) => (
                <motion.div
                  key={ritual.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 rounded-xl p-6 shadow-md text-center"
                >
                  <div className="text-4xl mb-4">{ritual.icon}</div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">
                    {ritual.title}
                  </h3>
                  <p className="text-gray-700">{ritual.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Celebrations Section */}
        <section className="py-12 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Regional Celebrations
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                How Maha Shivratri is celebrated across different parts of India
                and beyond
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  region: "North India",
                  // description: "In Varanasi, the spiritual capital of India and home to the famous Kashi Vishwanath Temple, Maha Shivratri is celebrated with great fervor. Thousands of devotees gather to perform abhishekam and offer prayers. The ghats along the Ganges River are illuminated with lamps, creating a mesmerizing spectacle. In other parts of North India, large processions are organized, featuring tableaux depicting various episodes from Shiva's life.",
                  description: (
                    <div>
                      In Varanasi, the spiritual capital of India and home to
                      the famous{" "}
                      <span className="text-orange-600 font-medium">
                        Kashi Vishwanath Temple
                      </span>
                      , Maha Shivratri is celebrated with great fervor.
                      Thousands of devotees gather to perform abhishekam and
                      offer prayers. The ghats along the Ganges River are
                      illuminated with lamps, creating a mesmerizing spectacle.
                      In other parts of North India, large processions are
                      organized, featuring tableaux depicting various episodes
                      from Shiva's life.
                    </div>
                  ),
                  image: imageLinks.northIndia,
                },
                {
                  region: "Central India",
                  description: (
                    <div>
                      In Ujjain, home to the{" "}
                      <span className="text-orange-600 font-medium">
                        Mahakaleshwar Jyotirlinga
                      </span>
                      , one of the twelve sacred Jyotirlingas, Maha Shivratri is
                      celebrated with elaborate rituals and ceremonies. The
                      temple is adorned with flowers and lights, and special
                      abhishekams are performed throughout the night. In Madhya
                      Pradesh, the Bhojeshwar Temple in Bhojpur also sees grand
                      celebrations.
                    </div>
                  ),
                  image: imageLinks.centralIndia,
                },
                {
                  region: "South India",
                  description: (
                    <div>
                      In Tamil Nadu, the festival is celebrated with great
                      devotion at the{" "}
                      <span className="text-orange-600 font-medium">
                        Brihadeeswarar Temple
                      </span>{" "}
                      in Thanjavur and the{" "}
                      <span className="text-orange-600 font-medium">
                        Arunachaleswarar Temple
                      </span>{" "}
                      in Thiruvannamalai. In Karnataka, the massive monolithic
                      statue of Lord Shiva in Murdeshwar becomes a focal point
                      of celebration. Special rituals are performed, and
                      cultural programs are organized to mark the occasion.
                    </div>
                  ),
                  image: imageLinks.southIndia,
                },
                {
                  region: "Nepal",
                  description: (
                    <div>
                      In Nepal, Maha Shivratri is a national holiday. The{" "}
                      <span className="text-orange-600 font-medium">
                        Pashupatinath Temple
                      </span>{" "}
                      in Kathmandu, one of the most sacred Shiva temples,
                      attracts thousands of devotees and sadhus (holy men) from
                      across Nepal and India. The sadhus, with their ash-covered
                      bodies and dreadlocks, add a mystical dimension to the
                      celebrations. Cannabis, considered sacred to Lord Shiva,
                      is legally consumed by sadhus during this festival.
                    </div>
                  ),
                  image: imageLinks.nepal,
                },
                {
                  region: "Bangladesh",
                  description: (
                    <div>
                      In Bangladesh, Maha Shivratri is celebrated with great
                      reverence, especially in the regions where Hindus are more
                      prominent. In temples like the{" "}
                      <span className="text-orange-600 font-medium">
                        Dhakeshwari Temple
                      </span>{" "}
                      in Dhaka and the famous temple in Pabna, large processions
                      take place, accompanied by devotional music and chanting
                      of mantras. Devotees gather in large numbers to offer
                      prayers, perform abhishekam, and celebrate the divine
                      presence of Lord Shiva.
                    </div>
                  ),
                  image: imageLinks.bangladesh,
                },
                {
                  region: "Sri Lanka",
                  description: (
                    <div>
                      In Sri Lanka, Maha Shivratri is celebrated with grand
                      processions, especially in temples like the{" "}
                      <span className="text-orange-600 font-medium">
                        Nallur Kandaswamy Temple
                      </span>{" "}
                      in Jaffna. The festival is marked by prayers, chanting,
                      and night vigils. The Tamils and other Hindu communities
                      come together to celebrate with religious fervor, offering
                      milk, fruits, and flowers to the Shiva Lingam.
                    </div>
                  ),
                  image: imageLinks.sriLanka,
                },
              ].map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative h-60">
                    <img
                      loading="lazy"
                      src={region.image}
                      alt={`${region.region} celebrations`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">
                      {region.region}
                    </h3>
                    <p className="text-gray-700 mb-4">{region.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link to="/festivals">
                <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 p-2 rounded">
                  Back to Festivals
                </button>
              </Link>
              <Link to="/festivals/ganesh-chaturthi">
                <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded">
                  Explore Ganesh Chaturthi
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MahaShivratriPage;
