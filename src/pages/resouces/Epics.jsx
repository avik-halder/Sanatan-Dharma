import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import imageLinks from "../../utils/ImageLinks";

const EpicsPage = () => {
  const [activeTab, setActiveTab] = useState("ramayana");
  const [expandedKanda, setExpandedKanda] = useState(null);
  const [expandedParva, setExpandedParva] = useState(null);

  const ramayanaKandas = [
    {
      id: "bala-kanda",
      title: "Bala Kanda (Book of Youth)",
      content:
        "This first book describes the birth of Rama and his brothers, their education, and Rama's marriage to Sita after breaking Lord Shiva's bow. It sets the stage for the epic by introducing the key characters and establishing Rama's divine nature.",
    },
    {
      id: "ayodhya-kanda",
      title: "Ayodhya Kanda (Book of Ayodhya)",
      content:
        "This book details the preparations for Rama's coronation as the king of Ayodhya, Queen Kaikeyi's intervention that leads to Rama's exile, and the grief of King Dasharatha. It explores themes of promises, sacrifice, and duty.",
    },
    {
      id: "aranya-kanda",
      title: "Aranya Kanda (Book of the Forest)",
      content:
        "The third book narrates Rama, Sita, and Lakshmana's life in the forest, their encounters with sages and demons, and culminates in Sita's abduction by Ravana after she crosses the protective line (Lakshmana Rekha).",
    },
    {
      id: "kishkindha-kanda",
      title: "Kishkindha Kanda (Book of Kishkindha)",
      content:
        "This book describes Rama's alliance with Sugriva, the monkey king, and the search for Sita. It includes the story of Vali and Sugriva's conflict and introduces Hanuman, who becomes Rama's devoted servant.",
    },
    {
      id: "sundara-kanda",
      title: "Sundara Kanda (Book of Beauty)",
      content:
        "Often considered the heart of the Ramayana, this book narrates Hanuman's journey to Lanka, his discovery of Sita in Ashoka Vatika, his conversation with her, and his exploits in Lanka, including burning the city.",
    },
    {
      id: "yuddha-kanda",
      title: "Yuddha Kanda (Book of War)",
      content:
        "This book details the great battle between Rama's army and Ravana's forces, culminating in Ravana's defeat and death. It includes the building of the bridge to Lanka, various battles, and Rama's final confrontation with Ravana.",
    },
    {
      id: "uttara-kanda",
      title: "Uttara Kanda (Last Book)",
      content:
        "The final book describes Rama's coronation, his reign over Ayodhya, the banishment of Sita due to public doubt about her purity, the birth of her twin sons Lava and Kusha, and ultimately Sita's return to the earth and Rama's ascension to heaven.",
    },
  ];

  const mahabharataParvas = [
    {
      id: "adi-parva",
      title: "1. Adi Parva (The Book of the Beginning)",
      content:
        "Introduces the main characters and their lineage, including the birth of the Pandavas and Kauravas. Contains the famous stories of Shakuntala, Yayati, and the origins of the Kuru dynasty. Also describes the early education of the princes and the burning of the lacquer house.",
    },
    {
      id: "sabha-parva",
      title: "2. Sabha Parva (The Book of the Assembly Hall)",
      content:
        "Details the construction of the royal court (Sabha) by Maya for the Pandavas. Includes the famous dice game where Yudhishthira loses everything, including himself, his brothers, and Draupadi. Contains Draupadi's humiliation and the Pandavas' exile.",
    },
    {
      id: "vana-parva",
      title: "3. Vana Parva (The Book of the Forest)",
      content:
        "Narrates the twelve years the Pandavas spend in exile in the forest. Includes numerous sub-stories like Nala-Damayanti, Savitri-Satyavan, and Arjuna's quest for divine weapons. Also contains philosophical discussions between Yudhishthira and various sages.",
    },
    {
      id: "virata-parva",
      title: "4. Virata Parva (The Book of Virata)",
      content:
        "Describes the thirteenth year of exile which the Pandavas spend in disguise at King Virata's court. Includes Arjuna's time as Brihannala (a eunuch dance teacher), Bhima's defeat of Kichaka, and the revelation of their identities after helping defeat an invasion.",
    },
    {
      id: "udyoga-parva",
      title: "5. Udyoga Parva (The Book of Effort)",
      content:
        "Details the preparations for war, including failed peace negotiations led by Krishna. Contains the famous Sanatsujatiya (philosophical discourse) and Krishna's attempts to mediate between the Pandavas and Kauravas. Ends with both sides gathering their armies.",
    },
    {
      id: "bhishma-parva",
      title: "6. Bhishma Parva (The Book of Bhishma)",
      content:
        "Describes the first ten days of the Kurukshetra War with Bhishma as commander. Contains the Bhagavad Gita (chapters 25-42) - Krishna's philosophical discourse to Arjuna. Details Bhishma's devastating attacks and his eventual fall on a bed of arrows.",
    },
    {
      id: "drona-parva",
      title: "7. Drona Parva (The Book of Drona)",
      content:
        "Covers days 11-15 of the war with Drona as commander. Includes the deaths of Abhimanyu (day 13), Jayadratha (day 14), and Drona himself (day 15). Contains the tragic story of how Drona was deceived about his son Ashwatthama's death.",
    },
    {
      id: "karna-parva",
      title: "8. Karna Parva (The Book of Karna)",
      content:
        "Details days 16-17 of the war with Karna as commander. Includes Karna's glorious but tragic end, killed by Arjuna when his chariot wheel gets stuck. Contains Shalya's reluctant acceptance as the next commander and his criticism of Karna before battle.",
    },
    {
      id: "shalya-parva",
      title: "9. Shalya Parva (The Book of Shalya)",
      content:
        "Covers day 18 of the war with Shalya as commander. Describes the final battle between Yudhishthira and Shalya, and later between Sahadeva and Shakuni. Contains the deaths of Shakuni and Duryodhana, who is struck down by Bhima in a mace duel.",
    },
    {
      id: "sauptika-parva",
      title: "10. Sauptika Parva (The Book of the Sleeping Warriors)",
      content:
        "Narrates the night attack by Ashwatthama, Kripa and Kritavarma on the sleeping Pandava camp, killing Dhrishtadyumna, Shikhandi, and others. Includes Ashwatthama launching the deadly Narayanastra and Krishna's intervention to save the Pandavas.",
    },
    {
      id: "stri-parva",
      title: "11. Stri Parva (The Book of the Women)",
      content:
        "Describes the grief of the women after the war. Contains Gandhari's curse on Krishna and the lamentations of Kunti, Draupadi and other women. Includes the cremation rituals for the dead and Yudhishthira's profound sorrow at the massive loss of life.",
    },
    {
      id: "shanti-parva",
      title: "12. Shanti Parva (The Book of Peace)",
      content:
        "The longest book containing Bhishma's teachings to Yudhishthira after the war. Covers dharma (duty), artha (wealth), and moksha (liberation). Includes the famous Rajadharma (duties of kings) and Apaddharma (duties during emergencies) sections.",
    },
    {
      id: "anushasana-parva",
      title: "13. Anushasana Parva (The Book of Instructions)",
      content:
        "Continues Bhishma's teachings to Yudhishthira. Focuses on moral precepts, charity, and the duties of different varnas (social classes). Contains discussions on gift-giving, funeral rites, and the importance of truth. Ends with Bhishma's death and ascent to heaven.",
    },
    {
      id: "ashvamedhika-parva",
      title: "14. Ashvamedhika Parva (The Book of the Horse Sacrifice)",
      content:
        "Describes Yudhishthira's Ashvamedha (horse sacrifice) to atone for war sins. Follows Arjuna's adventures as he accompanies the sacrificial horse. Includes the story of Babruvahana (Arjuna's son) nearly killing his father and being revived by Ulupi.",
    },
    {
      id: "ashramavasika-parva",
      title: "15. Ashramavasika Parva (The Book of the Hermitage)",
      content:
        "Narrates Dhritarashtra, Gandhari and Kunti retiring to the forest for meditation. Describes their deaths in a forest fire. Includes Vidura's death and Yudhishthira's vision of his ancestors in heaven through Narada's divine sight.",
    },
    {
      id: "mausala-parva",
      title: "16. Mausala Parva (The Book of the Clubs)",
      content:
        "Describes the destruction of the Yadava clan through internal strife with iron clubs (mausala). Includes Krishna's death from an arrow to his foot and Balarama's meditation and death. Ends with Arjuna taking the remaining Yadavas to Indraprastha.",
    },
    {
      id: "mahaprasthanika-parva",
      title: "17. Mahaprasthanika Parva (The Book of the Great Journey)",
      content:
        "Narrates the Pandavas' and Draupadi's final journey towards the Himalayas and their ascent to heaven. Describes how each falls along the way except Yudhishthira, due to their remaining human flaws. Contains the famous test with Yudhishthira and the dog.",
    },
    {
      id: "svargarohana-parva",
      title: "18. Svargarohana Parva (The Book of the Ascent to Heaven)",
      content:
        "The concluding book describing Yudhishthira's final test and entry into heaven. Reveals the Kauravas in heaven and Pandavas in hell - a final illusion to test Yudhishthira. Ends with the reunion of all in their true heavenly abodes and the purpose of the epic's narration.",
    },
  ];

  const toggleKanda = (id) => {
    setExpandedKanda(expandedKanda === id ? null : id);
  };

  const toggleParva = (id) => {
    setExpandedParva(expandedParva === id ? null : id);
  };

  return (
    <div className="min-h-screen mt-16">
      <main>
        <section className="py-8 md:py-10 lg:py-16 relative overflow-hidden">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.section
              className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center mb-8 md:mb-10 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:w-1/2 order-2 lg:order-1">
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-4 font-bold text-center lg:text-start">
                  The Hindu Epics
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-4 md:mb-6 text-center lg:text-start">
                  Ramayana and Mahabharata: Timeless narratives of duty, honor,
                  and dharma
                </h2>
                <p className="text-gray-700 mb-4">
                  The Hindu Epics, primarily the Ramayana and the Mahabharata,
                  are monumental literary works that have profoundly influenced
                  Indian culture, philosophy, and religion for thousands of
                  years. These vast narratives combine history, mythology,
                  philosophy, and ethical teachings into compelling stories that
                  continue to resonate with millions of people.
                </p>
                <p className="text-gray-700">
                  More than just religious texts, these epics serve as cultural
                  touchstones that provide moral guidance, entertainment, and a
                  shared heritage across diverse communities throughout South
                  and Southeast Asia.
                </p>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <motion.div
                  className="relative lg:h-80 w-full rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    loading="lazy"
                    src={imageLinks.manuScripts}
                    alt="Ancient manuscript of Hindu epics"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <p className="text-white text-sm">
                      Ancient palm leaf manuscript depicting scenes from the
                      epics
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl shadow-md border border-orange-200"
            >
              <blockquote className="text-lg italic text-gray-700 mb-2">
                "Whenever dharma declines and adharma prevails, I manifest
                myself. For the protection of the good, for the destruction of
                evil, and for the establishment of dharma, I am born in every
                age."
              </blockquote>
              <p className="text-right text-orange-700 font-medium">
                Lord Krishna, Bhagavad Gita 4.7-8
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 md:py-10 lg:py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-2 md:mb-4 text-center">
                The Great Epics
              </h2>
              <p className="text-orange-700 text-center mb-8">
                Sacred texts dedicated to various deities, containing timeless
                wisdom and stories
              </p>
              <div className="max-w-4xl mx-auto">
                <div className="relative right-0 mb-4">
                  <ul
                    className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-orange-200"
                    data-tabs="tabs"
                    role="list"
                  >
                    <li className="z-30 flex-auto text-center">
                      <button
                        className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                          activeTab === "ramayana" ? "bg-white" : "bg-inherit"
                        }`}
                        onClick={() => setActiveTab("ramayana")}
                        role="tab"
                      >
                        Ramayana
                      </button>
                    </li>
                    <li className="z-30 flex-auto text-center">
                      <button
                        className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                          activeTab === "mahabharata"
                            ? "bg-white"
                            : "bg-inherit"
                        }`}
                        onClick={() => setActiveTab("mahabharata")}
                        role="tab"
                      >
                        Mahabharata
                      </button>
                    </li>
                  </ul>
                </div>

                {activeTab === "ramayana" && (
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-orange-50 border border-orange-400 rounded-xl p-6 shadow-md border border-orange-100"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="relative h-60 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            <img
                              loading="lazy"
                              src={imageLinks.ramayanaScene}
                              alt="Scene from Ramayana"
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute bottom-0 left-0 p-3 z-20">
                              <p className="text-white text-sm">
                                Rama, Sita and Lakshmana in the forest
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <h3 className="text-xl font-bold text-orange-700 mb-4">
                            The Ramayana
                          </h3>
                          <p className="text-gray-700 mb-4">
                            Traditionally attributed to the sage Valmiki, the
                            Ramayana narrates the life of Rama, the seventh
                            avatar of Vishnu. Composed around 500 BCE to 100
                            BCE, it consists of nearly 24,000 verses divided
                            into seven books (Kandas).
                          </p>
                          <p className="text-gray-700 mb-4">
                            The Ramayana is not just a tale of adventure and
                            divine intervention but also a guide to ideal
                            relationships and moral conduct. It explores themes
                            of duty (dharma), loyalty, righteousness, and the
                            ideal kingdom (Ram Rajya).
                          </p>
                          <p className="text-gray-700">
                            The epic follows Rama's journey from his birth in
                            Ayodhya to his exile in the forest, the abduction of
                            his wife Sita by the demon king Ravana, the epic
                            battle to rescue her, and finally his return to
                            Ayodhya to assume the throne.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <h4 className="text-xl md:text-2xl font-bold text-orange-700 mb-4 relative inline-flex items-center justify-center text-center w-full">
                      <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                        7
                      </span>
                      The Seven Books (Kandas) of the Ramayana
                    </h4>

                    <div className="mb-8">
                      {ramayanaKandas.map((kanda) => (
                        <div key={kanda.id} className="mb-2">
                          <motion.button
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium flex justify-between items-center transition-colors duration-300
                            ${
                              expandedKanda === kanda.id
                                ? "bg-orange-600 text-white"
                                : "bg-orange-200 text-orange-800 hover:bg-orange-600 hover:text-orange-50"
                            }`}
                            onClick={() => toggleKanda(kanda.id)}
                          >
                            {kanda.title}
                            <motion.span
                              animate={{
                                rotate: expandedKanda === kanda.id ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <RiArrowDropDownLine className="text-3xl" />
                            </motion.span>
                          </motion.button>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: expandedKanda === kanda.id ? 1 : 0,
                              height: expandedKanda === kanda.id ? "auto" : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="text-gray-700 bg-amber-50 border border-orange-300 italic p-4 shadow-md rounded-lg my-2">
                              <p>{kanda.content}</p>
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-orange-700 mb-4 relative inline-flex items-center justify-center text-center w-full">
                      <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                        ★
                      </span>
                      Key Characters
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {[
                        {
                          name: "Rama",
                          description:
                            "The protagonist, seventh avatar of Vishnu, epitome of dharma and ideal man.",
                        },
                        {
                          name: "Sita",
                          description:
                            "Rama's wife, daughter of Earth, symbol of feminine strength and purity.",
                        },
                        {
                          name: "Lakshmana",
                          description:
                            "Rama's loyal brother who accompanies him in exile.",
                        },
                        {
                          name: "Hanuman",
                          description:
                            "The monkey deity known for his devotion to Rama and extraordinary abilities.",
                        },
                        {
                          name: "Ravana",
                          description:
                            "The ten-headed king of Lanka who abducts Sita.",
                        },
                        {
                          name: "Dasharatha",
                          description: "King of Ayodhya and father of Rama.",
                        },
                      ].map((character, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <div className="bg-orange-50 border border-orange-500 p-6 h-40 hover:shadow-md transition-all rounded-xl overflow-hidden text-center">
                            <h3 className="text-orange-600 text-xl font-bold mb-2">
                              {character.name}
                            </h3>
                            <p className="text-gray-700">
                              {character.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-orange-700 mb-4 relative inline-flex items-center justify-center text-center w-full">
                      <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                        🌍
                      </span>
                      Cultural Impact
                    </div>
                    <div className="bg-orange-50 border border-orange-500 p-6 rounded-xl shadow-sm border border-orange-100">
                      <p className="text-gray-700 mb-4">
                        The Ramayana has had an immeasurable impact on Indian
                        culture and beyond:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
                        <li>
                          It has inspired countless works of literature, art,
                          dance, and drama across South and Southeast Asia.
                        </li>
                        <li>
                          The festival of Diwali celebrates Rama's return to
                          Ayodhya after defeating Ravana.
                        </li>
                        <li>
                          Ramlila, the dramatic reenactment of the Ramayana, is
                          performed annually across North India.
                        </li>
                        <li>
                          The epic has been adapted into various regional
                          versions, each with its own unique elements.
                        </li>
                        <li>
                          Characters like Rama and Hanuman are widely worshipped
                          as deities throughout India.
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {activeTab === "mahabharata" && (
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md border border-orange-100"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="relative h-60 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            <img
                              loading="lazy"
                              src={imageLinks.mahabharataScene}
                              alt="Scene from Mahabharata"
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute bottom-0 left-0 p-3 z-20">
                              <p className="text-white text-sm">
                                Krishna revealing the Bhagavad Gita to Arjuna
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <h3 className="text-xl font-bold text-orange-700 mb-4">
                            The Mahabharata
                          </h3>
                          <p className="text-gray-700 mb-4">
                            Attributed to the sage Vyasa, the Mahabharata is one
                            of the longest epic poems ever written, with
                            approximately 100,000 verses divided into 18 books
                            (Parvas). Composed between 400 BCE and 400 CE, it is
                            about ten times the length of the Iliad and Odyssey
                            combined.
                          </p>
                          <p className="text-gray-700 mb-4">
                            At its core, the Mahabharata narrates the struggle
                            for succession between two groups of cousins—the
                            Kauravas and the Pandavas. This conflict culminates
                            in the great Kurukshetra War, which serves as the
                            backdrop for profound philosophical and ethical
                            discussions, most notably the Bhagavad Gita.
                          </p>
                          <p className="text-gray-700">
                            The epic explores complex themes of duty, justice,
                            fate, and the consequences of one's actions,
                            presenting characters with moral dilemmas that
                            continue to resonate with readers today.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <h4 className="text-xl md:text-2xl font-bold text-orange-700 mb-4 relative inline-flex items-center justify-center text-center w-full">
                      <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                        18
                      </span>
                      The Eighteen Books (Parvas) of the Mahabharata
                    </h4>

                    <div className="mb-8">
                      {mahabharataParvas.map((parva) => (
                        <div key={parva.id} className="mb-2">
                          <motion.button
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium flex justify-between items-center transition-colors duration-300
                            ${
                              expandedParva === parva.id
                                ? "bg-orange-600 text-white"
                                : "bg-orange-200 text-orange-800 hover:bg-orange-600 hover:text-orange-50"
                            }`}
                            onClick={() => toggleParva(parva.id)}
                          >
                            {parva.title}
                            <motion.span
                              animate={{
                                rotate: expandedParva === parva.id ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <RiArrowDropDownLine className="text-3xl" />
                            </motion.span>
                          </motion.button>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: expandedParva === parva.id ? 1 : 0,
                              height: expandedParva === parva.id ? "auto" : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="text-gray-700 bg-amber-50 border border-orange-300 italic p-4 shadow-md rounded-lg my-2">
                              <p>{parva.content}</p>
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-orange-700 mb-4 relative inline-flex items-center justify-center text-center w-full">
                      <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                        ★
                      </span>
                      Key Characters
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {[
                        {
                          name: "Pandavas",
                          description:
                            "The five sons of King Pandu: Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva.",
                        },
                        {
                          name: "Kauravas",
                          description:
                            "The 100 sons of Dhritarashtra, led by the eldest, Duryodhana.",
                        },
                        {
                          name: "Krishna",
                          description:
                            "Avatar of Vishnu who serves as Arjuna's charioteer and delivers the Bhagavad Gita.",
                        },
                        {
                          name: "Draupadi",
                          description:
                            "Wife of all five Pandavas, born from fire, whose humiliation fuels the conflict.",
                        },
                        {
                          name: "Bhishma",
                          description:
                            "Grand uncle to both Pandavas and Kauravas, bound by his vow of celibacy and loyalty to the throne.",
                        },
                        {
                          name: "Karna",
                          description:
                            "Pandavas' half-brother who allies with the Kauravas, known for his generosity and skill.",
                        },
                      ].map((character, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <div className="bg-orange-50 border border-orange-500 p-6 h-40 hover:shadow-md transition-all rounded-xl overflow-hidden text-center">
                            <h3 className="text-orange-600 text-xl font-bold mb-2">
                              {character.name}
                            </h3>
                            <p className="text-gray-700">
                              {character.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-orange-700 mb-4 relative inline-flex items-center justify-center text-center w-full">
                      <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                        📜
                      </span>
                      The Bhagavad Gita
                    </h4>
                    <div className="bg-orange-50 border border-orange-500 p-6 rounded-xl shadow-md border border-orange-100 mb-8">
                      <p className="text-gray-700 mb-4">
                        The Bhagavad Gita ("Song of God") is a{" "}
                        <span className="text-orange-500 font-semibold">
                          700-verse scripture
                        </span>{" "}
                        that is part of the Mahabharata. It is a philosophical
                        dialogue{" "}
                        <span className="text-orange-500 font-semibold">
                          between Prince Arjuna and his guide and charioteer
                          Krishna
                        </span>{" "}
                        that takes place on the battlefield just before the
                        start of the Kurukshetra War.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Facing the prospect of fighting his relatives, friends,
                        and revered teachers, Arjuna is overcome with moral
                        dilemma and despair. Krishna counsels him about the
                        nature of the self, the universe, duty (dharma), and the
                        proper ways to act in the world.
                      </p>
                      <p className="text-gray-700">
                        The Gita synthesizes several important philosophical
                        concepts including Karma Yoga (the path of action),
                        Bhakti Yoga (the path of devotion), and Jnana Yoga (the
                        path of knowledge), presenting them as different but
                        complementary approaches to spiritual realization.
                      </p>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-orange-700 mb-4 relative inline-flex items-center justify-center text-center w-full">
                      <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                        🌍
                      </span>
                      Cultural Impact
                    </h4>
                    <div className="bg-orange-50 border border-orange-500 p-6 rounded-xl shadow-sm border border-orange-100">
                      <p className="text-gray-700 mb-4">
                        The Mahabharata's influence on Indian culture is
                        profound and far-reaching:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
                        <li>
                          It has shaped Hindu law, ethics, and philosophy for
                          centuries.
                        </li>
                        <li>
                          The Bhagavad Gita is one of the most revered spiritual
                          texts in Hinduism.
                        </li>
                        <li>
                          Characters and stories from the epic are depicted in
                          various art forms across India.
                        </li>
                        <li>
                          Many temples feature scenes and characters from the
                          Mahabharata in their sculptures.
                        </li>
                        <li>
                          Modern adaptations include television series, films,
                          novels, and plays.
                        </li>
                        <li>
                          Its moral dilemmas and ethical questions continue to
                          be relevant in contemporary discussions.
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          </div>
        </section>

        <section className="py-8 md:py-10 lg:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-8 text-center">
                Philosophical Teachings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md border border-orange-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                      1
                    </span>
                    Dharma (Righteousness)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Both epics explore the concept of dharma—the moral order
                    that sustains the cosmos, society, and the individual.
                    Characters often face difficult choices between competing
                    duties, illustrating the complexity of dharma.
                  </p>
                  <p className="text-gray-700">
                    The epics show that dharma is not rigid but contextual,
                    requiring wisdom to determine the right action in each
                    situation. This is exemplified by Rama's adherence to his
                    duties as a son and king, and by Yudhishthira's struggles
                    with the dharma of a ruler.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-orange-50 border border-orange-500 rounded-xl p-6 shadow-md border border-orange-100"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                      2
                    </span>
                    Karma and Consequences
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The epics illustrate the law of karma—that actions have
                    consequences that may unfold over time or even across
                    lifetimes. Characters' fates are often tied to their past
                    actions or those of their ancestors.
                  </p>
                  <p className="text-gray-700">
                    The Mahabharata particularly emphasizes how seemingly small
                    moral compromises can lead to catastrophic outcomes, as seen
                    in the gradual ethical decline that leads to the devastating
                    war.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-8 md:py-10 lg:py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 md:mb-10 text-center">
                Regional Variations
              </h2>
              <div className="bg-orange-50 border border-orange-500 rounded-xl p-8 shadow-md border border-orange-100">
                <p className="text-gray-700 text-center mb-8">
                  As the epics spread throughout South and Southeast Asia, they
                  were adapted to local cultures and languages, resulting in
                  numerous regional variations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                      <span className="text-3xl text-orange-500 mr-2">🇮🇳</span>
                      Indian Variations
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <span className="font-semibold">Ramcharitmanas</span> -
                        Tulsidas's Hindi version of the Ramayana
                      </li>
                      <li>
                        <span className="font-semibold">Kamba Ramayanam</span> -
                        Tamil adaptation by poet Kamban
                      </li>
                      <li>
                        <span className="font-semibold">
                          Bengali Mahabharata
                        </span>{" "}
                        - Kashiram Das's regional retelling
                      </li>
                      <li>
                        <span className="font-semibold">Randamoozham</span> -
                        Malayalam novel retelling the Mahabharata from Bhima's
                        perspective
                      </li>
                    </ul>
                  </div>
                  <div className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                      <span className="text-3xl text-orange-500 mr-2">🌏</span>
                      Southeast Asian Versions
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <span className="font-semibold">Ramakien</span> - Thai
                        version of the Ramayana
                      </li>
                      <li>
                        <span className="font-semibold">Kakawin Ramayana</span>{" "}
                        - Old Javanese adaptation
                      </li>
                      <li>
                        <span className="font-semibold">Hikayat Seri Rama</span>{" "}
                        - Malay version
                      </li>
                      <li>
                        <span className="font-semibold">Phra Lak Phra Ram</span>{" "}
                        - Lao version of the Ramayana
                      </li>
                    </ul>
                  </div>
                  <div className="bg-orange-100 border border-orange-500 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                      <span className="text-3xl text-orange-500 mr-2">🎭</span>
                      Performance Traditions
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <span className="font-semibold">Wayang Kulit</span> -
                        Indonesian shadow puppet theater
                      </li>
                      <li>
                        <span className="font-semibold">Kathakali</span> -
                        Classical dance-drama from Kerala
                      </li>
                      <li>
                        <span className="font-semibold">Ramlila</span> -
                        Traditional performance of the Ramayana
                      </li>
                      <li>
                        <span className="font-semibold">Kecak</span> - Balinese
                        dance based on the Ramayana
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </section>

        <section className="py-8 md:py-10 lg:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-8 text-center">
                Modern Interpretations
              </h2>
              <div className="bg-orange-50 border border-orange-500 p-6 rounded-xl shadow-md border border-orange-100">
                <p className="text-gray-700 mb-4">
                  The epics continue to be reinterpreted and reimagined in
                  contemporary media and literature:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <span className="font-semibold">Literature</span> - Modern
                    novels like Shashi Tharoor's "The Great Indian Novel" and
                    Chitra Banerjee Divakaruni's "The Palace of Illusions" offer
                    fresh perspectives on the epics.
                  </li>
                  <li>
                    <span className="font-semibold">Television</span> - TV
                    adaptations like B.R. Chopra's "Mahabharat" and Ramanand
                    Sagar's "Ramayan" reached massive audiences in India.
                  </li>
                  <li>
                    <span className="font-semibold">Cinema</span> - Films based
                    on episodes from the epics continue to be produced across
                    Indian languages.
                  </li>
                  <li>
                    <span className="font-semibold">Comics and Animation</span>{" "}
                    - Series like Amar Chitra Katha and animated films have
                    introduced the epics to younger generations.
                  </li>
                  <li>
                    <span className="font-semibold">Digital Media</span> - Web
                    series, podcasts, and digital comics offer new ways to
                    engage with these ancient stories.
                  </li>
                </ul>
              </div>
            </motion.section>
          </div>
        </section>

        {/* Explore Other Texts Section */}
        <section className="py-8 md:py-10 lg:py-16 bg-orange-100">
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
                    <Link to={"/resources/vedas"}>
                      <button className="w-full px-4 py-2 border border-orange-600 text-orange-50 rounded-md bg-orange-600">
                        Learn More
                      </button>
                    </Link>
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
                     <Link to={"/resources/puranas"}> 
                      <button className="w-full px-4 py-2 border border-orange-600 text-orange-50 rounded-lg bg-orange-600">
                        Learn More
                      </button>
                    </Link>
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
                      loading="lazy"
                      src={imageLinks.upanishads}
                      alt="The Puranas"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="p-4">
                    <Link to={"/resources/upanishads"}>
                      <button className="w-full px-4 py-2 border border-orange-600 text-orange-50 rounded-md bg-orange-600">
                        Learn More
                      </button>
                    </Link>
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

export default EpicsPage;
