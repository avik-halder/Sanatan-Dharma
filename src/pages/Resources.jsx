import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imageLinks from "../utils/ImageLinks";

const formatText = (text) => {
  // Split the text by new lines and replace bold syntax **text** with <strong>text</strong>
  return text.split("\n").map((line, index) => (
    <span key={index}>
      {line
        .split("**")
        .map((part, idx) =>
          idx % 2 === 0 ? part : <strong key={idx}>{part}</strong>
        )}
      <br />
    </span>
  ));
};

export default function ResourcesPage() {
  const [selectedTab, setSelectedTab] = useState("vedas");
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [error, setError] = useState(null);

  // Fetch first 5 blogs from the server
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://sanatan-dharma-backend-nste.onrender.com/blogs"
        );
        const data = await response.json();
        setBlogs(data.slice(0, 6)); // Limit to first 5 blogs
      } catch (err) {
        setError("Error fetching blogs");
      } finally {
        setLoadingBlogs(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen">
      <main>
        <section className="py-16 mt-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Sacred Texts
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The foundational scriptures and philosophical works of Hinduism
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
                        selectedTab === "vedas" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("vedas")}
                      role="tab"
                    >
                      Vedas
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "upanishads" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("upanishads")}
                      role="tab"
                    >
                      Upanishads
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "epics" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("epics")}
                      role="tab"
                    >
                      Epics
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${
                        selectedTab === "puranas" ? "bg-white" : "bg-inherit"
                      }`}
                      onClick={() => setSelectedTab("puranas")}
                      role="tab"
                    >
                      Puranas
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tab Content: Vedas */}
            <div className="max-w-4xl mx-auto">
              {selectedTab === "vedas" && (
                <div className="space-y-6">
                  <div className="bg-orange-100 border border-orange-500 rounded-lg p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-60 rounded-lg overflow-hidden">
                          <img
                            loading="lazy"
                            src={imageLinks.vedas}
                            alt="Vedas"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          The Vedas
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The Vedas are the oldest sacred texts of Hinduism,
                          composed in Vedic Sanskrit between 1500-500 BCE. They
                          are considered apauruṣeya (not of human origin) and
                          are regarded as revelations heard by ancient sages
                          after intense meditation.
                        </p>
                        <p className="text-gray-700 mb-4">
                          There are four Vedas:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            <span className="font-medium text-orange-700">
                              Rigveda:
                            </span>{" "}
                            Contains hymns to the deities
                          </li>
                          <li>
                            <span className="font-medium text-orange-700">
                              Yajurveda:
                            </span>{" "}
                            Contains liturgical texts for rituals
                          </li>
                          <li>
                            <span className="font-medium text-orange-700">
                              Samaveda:
                            </span>{" "}
                            Contains melodies and chants
                          </li>
                          <li>
                            <span className="font-medium text-orange-700">
                              Atharvaveda:
                            </span>{" "}
                            Contains spells, incantations, and speculative hymns
                          </li>
                        </ul>
                        <button
                          onClick={() =>
                            (window.location.href = "/resources/vedas")
                          }
                          className="mt-6 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
                        >
                          Explore Vedic Texts
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: Upanishads */}
              {selectedTab === "upanishads" && (
                <div className="space-y-6">
                  <div className="bg-orange-100 border border-orange-500 rounded-lg p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-60 rounded-lg overflow-hidden">
                          <img
                            loading="lazy"
                            src={imageLinks.upanishads}
                            alt="Upanishads"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          The Upanishads
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The Upanishads are a collection of philosophical texts
                          that form the theoretical basis for Hinduism. They are
                          considered the culmination of the Vedas and are also
                          known as Vedanta (the end of the Vedas).
                        </p>
                        <p className="text-gray-700 mb-4">
                          There are over 200 Upanishads, but 13-14 are
                          considered the principal ones. They explore concepts
                          such as:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            <span className="font-medium text-orange-700">
                              Brahman:
                            </span>{" "}
                            The ultimate reality
                          </li>
                          <li>
                            <span className="font-medium text-orange-700">
                              Atman:
                            </span>{" "}
                            The individual soul or self
                          </li>
                          <li>
                            <span className="font-medium text-orange-700">
                              Moksha:
                            </span>{" "}
                            Liberation from the cycle of rebirth
                          </li>
                          <li>
                            <span className="font-medium text-orange-700">
                              Karma:
                            </span>{" "}
                            The law of cause and effect
                          </li>
                          <li>
                            <span className="font-medium text-orange-700">
                              Samsara:
                            </span>{" "}
                            The cycle of birth, death, and rebirth
                          </li>
                        </ul>
                        <button
                          onClick={() =>
                            (window.location.href = "/resources/upanishads")
                          }
                          className="mt-6 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
                        >
                          Explore Upanishads
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: Epics */}
              {selectedTab === "epics" && (
                <div className="space-y-6">
                  <div className="bg-orange-100 border border-orange-500 rounded-lg p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-60 rounded-lg overflow-hidden">
                          <img
                            loading="lazy"
                            src={imageLinks.epics}
                            alt="Hindu Epics"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          The Epics
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The two great epics of Hinduism are the Ramayana and
                          the Mahabharata. These narratives have profoundly
                          influenced Hindu culture, values, and beliefs.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-orange-700">
                              Ramayana
                            </h4>
                            <p className="text-gray-700">
                              Composed by sage Valmiki, it tells the story of
                              Lord Rama, his exile, the abduction of his wife
                              Sita, and his eventual victory over the demon king
                              Ravana. It emphasizes ideals of righteousness,
                              duty, and devotion.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-orange-700">
                              Mahabharata
                            </h4>
                            <p className="text-gray-700">
                              Attributed to sage Vyasa, it is one of the longest
                              epic poems in the world. It narrates the struggle
                              between two groups of cousins, the Kauravas and
                              the Pandavas. The Bhagavad Gita, a 700-verse
                              scripture that is part of the Mahabharata,
                              contains the philosophical teachings of Lord
                              Krishna to Arjuna on the battlefield.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            (window.location.href = "/resources/epics")
                          }
                          className="mt-6 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
                        >
                          Explore Hindu Epics
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: Puranas */}
              {selectedTab === "puranas" && (
                <div className="space-y-6">
                  <div className="bg-orange-100 border border-orange-500 rounded-lg p-6 shadow-md">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-60 rounded-lg overflow-hidden">
                          <img
                            loading="lazy"
                            src={imageLinks.puranas}
                            alt="Puranas"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">
                          The Puranas
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The Puranas are ancient texts that narrate the history
                          of the universe from creation to destruction,
                          genealogies of kings, heroes, sages, and demigods, and
                          descriptions of Hindu cosmology, philosophy, and
                          geography.
                        </p>
                        <p className="text-gray-700 mb-4">
                          There are 18 major Puranas and 18 minor Puranas. They
                          are traditionally categorized according to the three
                          deities:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>
                            <span className="font-medium text-orange-700">
                              Brahma Puranas:
                            </span>{" "}
                            Focused on the creator god Brahma
                          </li>
                          <li>
                            <span className="font-medium text-orange-700">
                              Vishnu Puranas:
                            </span>{" "}
                            Focused on the preserver god Vishnu
                          </li>
                          <li>
                            <span className="font-medium text-orange-700">
                              Shiva Puranas:
                            </span>{" "}
                            Focused on the transformer god Shiva
                          </li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                          The Puranas make the abstract philosophical concepts
                          of the Vedas and Upanishads accessible through
                          stories, myths, and legends.
                        </p>
                        <button
                          onClick={() =>
                            (window.location.href = "/resources/puranas")
                          }
                          className="mt-6 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
                        >
                          Explore Puranas
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* First 5 Blogs Section */}
        <section className="">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Latest Blogs
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto mb-8">
                Explore our most recent blog posts about sacred texts and
                spiritual wisdom.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <motion.div
                  key={blog.blog_id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-orange-100 rounded-xl p-6 border-[1px] border-orange-500"
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    {blog.blog_title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {blog.para1
                      ? formatText(blog.para1.substring(0, 150) + "...")
                      : "No preview available."}
                  </p>
                  <Link
                    to={`/blogs/${blog.blog_id}`}
                    className="inline-block border border-orange-600 text-orange-50 px-4 py-2 rounded-lg font-semibold bg-orange-500 hover:scale-105 duration-300 transition"
                  >
                    Read more
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Books Section */}
        <section className="py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Recommended Books
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Essential readings for understanding Hindu traditions
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "The Bhagavad Gita",
                  author: "Translated by Eknath Easwaran",
                  description:
                    "A poetic translation of the 700-verse Hindu scripture that is part of the epic Mahabharata.",
                  image: imageLinks.gita, // Use actual path of the image
                },
                {
                  title: "The Upanishads",
                  author: "Translated by Patrick Olivelle",
                  description:
                    "A scholarly translation of the principal Upanishads with detailed notes and commentary.",
                  image: imageLinks.upanishad, // Use actual path of the image
                },
                {
                  title: "Hinduism: A Very Short Introduction",
                  author: "Kim Knott",
                  description:
                    "A concise yet comprehensive overview of Hinduism, explaining its practices, beliefs, and history.",
                  image: imageLinks.hinduism, // Use actual path of the image
                },
                {
                  title: "The Yoga Sutras of Patanjali",
                  author: "Translated by Edwin F. Bryant",
                  description:
                    "A comprehensive translation and commentary on the foundational text of yoga philosophy.",
                  image: imageLinks.patanjali, // Use actual path of the image
                },
                {
                  title: "The Ramayana",
                  author: "Translated by Ramesh Menon",
                  description:
                    "A modern prose rendition of the ancient epic of Rama, making it accessible to contemporary readers.",
                  image: imageLinks.ramayana, // Use actual path of the image
                },
                {
                  title: "Hindu Myths",
                  author: "Wendy Doniger",
                  description:
                    "A collection of Hindu myths from the Vedas, Puranas, and epics with insightful analysis.",
                  image: imageLinks.hinduMyths, // Use actual path of the image
                },
                {
                  title: "Autobiography of a Yogi",
                  author: "Paramahansa Yogananda",
                  description:
                    "A spiritual classic that introduces Hindu spiritual concepts through personal narrative.",
                  image: imageLinks.yogi, // Use actual path of the image
                },
                {
                  title: "The Hindu Temple",
                  author: "Stella Kramrisch",
                  description:
                    "A classic study of Hindu temple architecture and its symbolic significance.",
                  image: imageLinks.hinduTemple, // Use actual path of the image
                },
              ].map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col bg-orange-100 border-[1px] border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full group"
                >
                  <div className="relative h-64 mx-auto p-4">
                    <img
                      loading="lazy"
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="object-cover w-full h-full rounded-md group-hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="p-4 flex-grow text-center">
                    <h3 className="text-lg font-bold text-orange-700 mb-1">
                      {book.title}
                    </h3>
                    <p className="text-sm text-orange-600 mb-2">
                      {book.author}
                    </p>
                    <p className="text-gray-700 text-sm">{book.description}</p>
                  </div>
                  <div className="p-4 pt-0">
                    <button
                      variant="outline"
                      className="w-full p-2 bg-[#CE6400] rounded-lg text-orange-100 hover:scale-105 duration-500"
                    >
                      Find Book
                    </button>
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
