import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

const PujaPage = () => {
  const pujaElements = [
    {
      name: "Avahana (Invocation)",
      description:
        "The ritual invitation to the deity to be present in the image or symbol being worshipped.",
      items: [
        "Mantras of invitation",
        "Visualization of deity",
        "Welcoming gestures",
        "Setting of intention",
      ],
      icon: "🙏",
    },
    {
      name: "Asana (Seat)",
      description:
        "Offering a seat or place for the deity to reside during the worship.",
      items: [
        "Preparation of altar",
        "Arrangement of deity image",
        "Offering of cloth or seat",
        "Creating sacred space",
      ],
      icon: "🪑",
    },
    {
      name: "Padya (Water for feet)",
      description:
        "Offering water to wash the deity's feet, symbolizing purification and respect.",
      items: [
        "Special water vessel",
        "Purified water",
        "Welcoming gesture",
        "Humility in service",
      ],
      icon: "💧",
    },
    {
      name: "Arghya (Water offering)",
      description:
        "Offering water for washing hands and face, representing hospitality.",
      items: [
        "Specific water vessel",
        "Purified water",
        "Respectful offering",
        "Gesture of care",
      ],
      icon: "🫖",
    },
    {
      name: "Achamana (Sipping water)",
      description:
        "Offering water for sipping, symbolizing internal purification.",
      items: [
        "Small spoon or vessel",
        "Purified water",
        "Specific mantras",
        "Gesture of offering",
      ],
      icon: "🥄",
    },
    {
      name: "Madhuparka (Sweet offering)",
      description:
        "Offering a mixture of honey, ghee, and curd as a symbol of sweetness and sustenance.",
      items: [
        "Honey",
        "Ghee (clarified butter)",
        "Curd or yogurt",
        "Small offering bowl",
      ],
      icon: "🍯",
    },
    {
      name: "Snana (Bath)",
      description:
        "Ritual bathing of the deity with various substances like water, milk, honey, etc.",
      items: [
        "Various liquids",
        "Specific vessels",
        "Bathing mantras",
        "Cleansing intention",
      ],
      icon: "🛁",
    },
    {
      name: "Vastra (Clothing)",
      description:
        "Offering new clothes or fabric to the deity as a sign of respect and care.",
      items: [
        "New cloth or garments",
        "Decorative elements",
        "Dressing mantras",
        "Aesthetic arrangement",
      ],
      icon: "👘",
    },
    {
      name: "Yajnopavita (Sacred thread)",
      description:
        "Offering the sacred thread to the deity, symbolizing spiritual initiation.",
      items: [
        "Sacred thread",
        "Specific mantras",
        "Ceremonial placement",
        "Spiritual significance",
      ],
      icon: "🧵",
    },
    {
      name: "Chandana (Sandalwood paste)",
      description:
        "Applying sandalwood paste or other fragrant substances to the deity.",
      items: [
        "Sandalwood paste",
        "Application tools",
        "Fragrant substances",
        "Decorative patterns",
      ],
      icon: "🪵",
    },
    {
      name: "Pushpa (Flowers)",
      description:
        "Offering flowers, representing beauty, purity, and the transient nature of life.",
      items: [
        "Fresh flowers",
        "Flower garlands",
        "Specific flower types",
        "Aesthetic arrangement",
      ],
      icon: "🌸",
    },
    {
      name: "Dhupa (Incense)",
      description:
        "Offering incense, symbolizing the spreading of divine presence and purification of space.",
      items: [
        "Incense sticks or cones",
        "Incense holder",
        "Fragrant resins",
        "Purification intention",
      ],
      icon: (
        <>
          <div className="flex justify-center">
            <img
              loading="lazy"
              src={imageLinks.dhupa}
              alt=""
              className="h-11 sm:h-10"
            />
          </div>
        </>
      ),
    },
    {
      name: "Dipa (Light)",
      description:
        "Offering light, usually in the form of an oil lamp or camphor, representing divine illumination.",
      items: ["Oil lamp", "Ghee or oil", "Camphor", "Lamp holder"],
      icon: "🪔",
    },
    {
      name: "Naivedya (Food)",
      description:
        "Offering food to the deity, which is later distributed as prasad (blessed food).",
      items: ["Prepared food items", "Fruits", "Sweets", "Water or drinks"],
      icon: "🍚",
    },
    {
      name: "Tambula (Betel leaves)",
      description:
        "Offering betel leaves and nuts as a gesture of hospitality and refreshment.",
      items: ["Betel leaves", "Areca nuts", "Lime paste", "Spices"],
      icon: "🍃",
    },
    {
      name: "Aarti (Waving of lights)",
      description:
        "Circling a lit lamp before the deity, accompanied by songs, bells, and other instruments.",
      items: [
        "Special aarti lamp",
        "Camphor or wicks",
        "Bell",
        "Devotional songs",
      ],
      icon: "🔔",
    },
  ];

  const setupSteps = [
    {
      title: "1. Choose a Clean, Quiet Space",
      content:
        "Select a dedicated area in your home that is clean, peaceful, and ideally faces east or north. This could be a shelf, a small table, or even a designated corner of a room.",
    },
    {
      title: "2. Select Your Deity Images",
      content:
        "Choose images or statues of deities that resonate with you. These can be in the form of pictures, paintings, or murtis (statues). Place them at the center or back of your altar space.",
    },
    {
      title: "3. Gather Essential Items",
      content:
        "Collect items needed for daily puja: a small bell, an oil lamp or diya, incense holder, a small vessel for water, a plate for offerings, and a clean cloth to cover the altar when not in use.",
    },
    {
      title: "4. Arrange with Reverence",
      content:
        "Arrange your altar with care and respect. Keep it simple but beautiful. You might add fresh flowers, a small bowl of rice, or other symbolic items that are meaningful to you.",
    },
    {
      title: "5. Maintain Purity",
      content:
        "Keep your altar clean and pure. Remove wilted flowers, clean the space regularly, and approach it with clean hands and a reverent attitude.",
    },
  ];

  const dailyPracticeSteps = [
    {
      title: "Morning Preparation",
      content:
        "Begin your day with a bath or washing of hands and face. Wear clean clothes before approaching your altar.",
      icon: "🌅",
    },
    {
      title: "Purification",
      content:
        "Light incense to purify the space. You may also sprinkle a few drops of water around the altar area.",
      icon: "💦",
    },
    {
      title: "Lighting the Lamp",
      content:
        "Light a ghee or oil lamp (diya) as a symbol of divine light and to invoke the presence of the deity.",
      icon: "🪔",
    },
    {
      title: "Offering Flowers",
      content:
        "Place fresh flowers or petals before the deity as a symbol of beauty and the opening of the heart.",
      icon: "🌸",
    },
    {
      title: "Reciting Mantras",
      content:
        "Chant mantras or prayers specific to your chosen deity. Even a simple 'Om' can be powerful.",
      icon: "🕉️",
    },
    {
      title: "Meditation",
      content:
        "Sit in quiet meditation, focusing on the deity or the divine qualities you wish to cultivate.",
      icon: "🧘",
    },
    {
      title: "Food Offering",
      content:
        "Offer a small portion of food (fruits, sweets, or cooked items) which becomes prasad after the ritual.",
      icon: "🍎",
    },
    {
      title: "Aarti",
      content:
        "Perform aarti by circling a lit lamp before the deity while singing or playing devotional songs.",
      icon: "🔔",
    },
    {
      title: "Closing",
      content:
        "Express gratitude, ask for blessings, and bow respectfully to conclude your puja.",
      icon: "🙏",
    },
  ];

  return (
    <div className="min-h-screen mt-16">
      <main>
        {/* Introduction Section */}
        <section className="py-10 md:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 order-2 lg:order-1"
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center lg:text-start">
                  Puja: Sacred Ritual Worship
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-6 text-center lg:text-start">
                  Explore the devotional practice of offering reverence to the
                  divine
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Puja is a sacred ritual in Hinduism that expresses
                    reverence, honor, and devotion to the divine. The word
                    "puja" comes from the Sanskrit root meaning "reverence" or
                    "homage." It is one of the most common forms of Hindu
                    worship and can be performed in temples, home shrines, or
                    during special occasions and festivals.
                  </p>
                  <p>
                    At its core, puja is an act of showing respect and making
                    offerings to deities, distinguished persons, or special
                    guests. It is a means of communicating with the divine,
                    expressing gratitude, seeking blessings, and nurturing a
                    personal relationship with the chosen deity.
                  </p>
                  <p>
                    The practice of puja varies widely across different Hindu
                    traditions, regions, and contexts. It can be as simple as
                    lighting a lamp and offering flowers before a deity image at
                    home, or as elaborate as a grand ceremony performed by
                    priests in a temple with multiple offerings, mantras, and
                    rituals.
                  </p>
                  <p>
                    What unites all forms of puja is the spirit of bhakti
                    (devotion) and the symbolic invitation to the divine to be
                    present and receive the devotee's offerings and prayers.
                    Through puja, the devotee creates a sacred space and time
                    for communion with the divine.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 order-1 lg:order-2"
              >
                <div className="relative lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    loading="lazy"
                    src={imageLinks.traditionalPuja}
                    alt="Puja Ceremony"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <p className="text-white text-sm">
                      A traditional puja ceremony with offerings to a deity
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl shadow-md border border-orange-200"
            >
              <blockquote className="text-lg italic text-gray-700">
                "Whatever action is performed by a great person, common people
                follow in his footsteps. And whatever standards he sets by
                exemplary acts, all the world pursues."
              </blockquote>
              <p className="text-right text-orange-700 font-medium">
                Bhagavad Gita 3.21
              </p>
            </motion.div>
          </div>
        </section>

        {/* Elements of Puja */}
        <section className="py-8 lg:py-16 bg-orange-100 relative overflow-hidden">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              className="text-center mb-8 lg:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-2 lg:mb-4 relative inline-block mx-auto">
                Elements of Puja
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The traditional components that form the structure of a complete
                puja ritual
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pujaElements.map((element, index) => (
                <motion.div
                  key={element.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-orange-50 border border-orange-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orange-100 group"
                >
                  <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {element.icon}
                  </div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2 group-hover:text-orange-900 transition-colors duration-300">
                    {element.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{element.description}</p>
                  <div className="relative overflow-hidden">
                    <h4 className="font-medium text-orange-600 mb-2 text-sm">
                      Common Items:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                      {element.items.map((item, i) => (
                        <li
                          key={i}
                          className="group-hover:translate-x-1 transition-transform duration-300 delay-75"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-orange-50 rounded-full -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform translate-x-10 translate-y-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Home Puja Setup */}
        <section className="py-8 lg:py-16 relative overflow-hidden">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 relative text-center lg:text-start">
                  Setting Up a Home Puja
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Creating a sacred space for worship in your home is a
                    beautiful way to establish a regular spiritual practice.
                    Here's how to set up a simple home puja altar:
                  </p>
                  <div className="space-y-4">
                    {setupSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-orange-100 p-4 rounded-lg border-l-4 border border-orange-500 hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-bold text-orange-700 mb-2">
                          {step.title}
                        </h3>
                        <p>{step.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to={"/practices"}>
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 group px-4 py-2 rounded-md flex items-center transition-colors duration-300">
                      <span className="group-hover:-translate-x-1 transition-transform duration-300">
                        ←
                      </span>
                      <span className="ml-2">Back to Practices</span>
                    </button>
                  </Link>
                  <Link to={"/practices/mantra-chanting"}>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white group px-4 py-2 rounded-md flex items-center transition-colors duration-300">
                      <span>Explore Mantra Chanting</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              </motion.div>

              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative lg:h-[500px] rounded-xl overflow-hidden shadow-lg group mb-8 lg:mb-12"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    loading="lazy"
                    src={imageLinks.homePuja}
                    alt="Home Puja Altar"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <p className="text-white text-sm">
                      A beautifully arranged home puja altar with traditional
                      elements
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl shadow-md border border-orange-200"
                >
                  <blockquote className="text-lg italic text-gray-700">
                    "The deity is not in the idol, but the idol is in the mind
                    of the devotee. The true place of worship is the heart."
                  </blockquote>
                  <p className="text-right text-orange-700 font-medium">
                    Hindu Proverb
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Practice Timeline */}
        <section className="py-8 lg;py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4 relative inline-block mx-auto">
                Daily Puja Practice
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                A simple sequence for daily worship that can be adapted to your
                personal practice
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 rounded-full"></div>

                {dailyPracticeSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`relative z-10 mb-8 ${
                      index % 2 === 0
                        ? "ml-auto pl-8 pr-0"
                        : "mr-auto pr-8 pl-0"
                    } w-full md:w-[calc(50%-20px)]`}
                  >
                    <div
                      className={`bg-orange-50 border border-orange-500 p-6 rounded-xl shadow-lg border border-orange-100 ${
                        index % 2 === 0 ? "ml-6" : "mr-6"
                      }`}
                    >
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 bg-orange-50 border-2 border-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl z-20 ${
                          index % 2 === 0 ? "left-[-5px]" : "right-[-5px]"
                        }`}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-orange-700 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700">{step.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PujaPage;
