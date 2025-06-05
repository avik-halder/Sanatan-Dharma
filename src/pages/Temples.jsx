import React, { useState } from "react";
import { motion } from "framer-motion";
import imageLinks from "../utils/ImageLinks";
import { ToastContainer, toast } from 'react-toastify';

export default function TemplesPage() {
  return (
    <div className="min-h-screen mt-16">
      <main>
        <section className="py-8 md:py-10 lg:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-orange-800 mb-4">
                Temple Architecture
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Hindu temples are not just places of worship but architectural
                representations of the cosmos and divine principles
              </p>
            </motion.div>

            {/* Temple Architecture Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="space-y-4 text-gray-700">
                  <p>
                    Hindu temple architecture reflects the belief that the
                    temple represents the cosmos and the body of the divine. The
                    structure is designed to lead the devotee from the outer
                    world to the inner sanctum, symbolizing the journey from the
                    material to the spiritual realm.
                  </p>
                  <p>Key elements of Hindu temple architecture include:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium text-orange-700">
                        Garbhagriha (Sanctum Sanctorum):
                      </span>{" "}
                      The innermost chamber housing the main deity.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Shikhara/Vimana:
                      </span>{" "}
                      The tower or spire above the sanctum.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Mandapa:
                      </span>{" "}
                      Hall or pavilion for devotees and rituals.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Gopuram:
                      </span>{" "}
                      Monumental entrance tower, especially in South Indian
                      temples.
                    </li>
                    <li>
                      <span className="font-medium text-orange-700">
                        Pradakshina Path:
                      </span>{" "}
                      Circumambulatory passage around the sanctum.
                    </li>
                  </ul>
                  <p>
                    Different regions of India developed distinct architectural
                    styles, including Nagara (North Indian), Dravida (South
                    Indian), and Vesara (hybrid style in central India).
                  </p>
                </div>
                <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded" onClick={() => toast.info('Coming Soon!')}>
                  Learn More About Temple Architecture
                </button>
              </motion.div>

              {/* Image Grid */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 gap-4 order-1 lg:order-2"
              >
                {[
                  { name: "Nagara Style", image: imageLinks.nagara },
                  { name: "Dravida Style", image: imageLinks.dravida },
                  { name: "Temple Carvings", image: imageLinks.carvings },
                  { name: "Temple Layout", image: imageLinks.layout },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="relative md:h-[215px] rounded-lg overflow-hidden group"
                  >
                    <img
                      loading="lazy"
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <p className="text-white font-medium p-3">{item.name}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Famous Temples Section */}
        <section className="py-8 lg:py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Famous Temples
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Explore some of the most renowned Hindu temples from across
                India and Bangladesh
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Kashi Vishwanath Temple",
                  location: "Varanasi, Uttar Pradesh",
                  deity: "Lord Shiva",
                  description:
                    "One of the most famous Hindu temples dedicated to Lord Shiva, located on the western bank of the holy river Ganga.",
                  image: imageLinks.KashiVishwanath2,
                },
                {
                  name: "Meenakshi Temple",
                  location: "Madurai, Tamil Nadu",
                  deity: "Goddess Meenakshi and Lord Sundareswarar",
                  description:
                    "A historic temple known for its stunning architecture with thousands of colorful sculptures and 14 gateway towers.",
                  image: imageLinks.Meenakshi2,
                },
                {
                  name: "Jagannath Temple",
                  location: "Puri, Odisha",
                  deity: "Lord Jagannath",
                  description:
                    "Famous for its annual Rath Yatra (chariot festival) and one of the Char Dham pilgrimage sites.",
                  image: imageLinks.JagannathIN,
                },
                {
                  name: "Brihadeeswara Temple",
                  location: "Thanjavur, Tamil Nadu",
                  deity: "Lord Shiva",
                  description:
                    "A UNESCO World Heritage Site known for its architectural grandeur and massive Vimana (tower).",
                  image: imageLinks.Brihadeeswara,
                },
                {
                  name: "Somnath Temple",
                  location: "Gir Somnath, Gujarat",
                  deity: "Lord Shiva",
                  description:
                    "One of the twelve Jyotirlingas (devotional shrines of Shiva) with a rich and tumultuous history.",
                  image: imageLinks.Somnath,
                },
                {
                  name: "Akshardham Temple",
                  location: "Delhi",
                  deity: "Swaminarayan",
                  description:
                    "A modern architectural marvel showcasing millennia of traditional Hindu and Indian culture.",
                  image: imageLinks.Akshardham,
                },
                // Added Bangladeshi Temples
                {
                  name: "Dhakeshwari Temple",
                  location: "Dhaka, Bangladesh",
                  deity: "Goddess Durga",
                  description:
                    "One of the oldest and most significant temples in Dhaka, Bangladesh, dedicated to Goddess Durga.",
                  image: imageLinks.Dhakeshwari, // Replace with your image
                },
                {
                  name: "Kantajew Temple",
                  location: "Kantanagar, Bangladesh",
                  deity: "Lord Krishna",
                  description:
                    "Famous for its beautiful terracotta carvings, this 18th-century temple is a UNESCO World Heritage Site.",
                  image: imageLinks.Kantajew, // Replace with your image
                },
                {
                  name: "Jagannath Temple",
                  location: "Chittagong, Bangladesh",
                  deity: "Lord Jagannath",
                  description:
                    "A significant temple dedicated to Lord Jagannath in the coastal city of Chittagong.",
                  image: imageLinks.JagannathBD, // Replace with your image
                },
              ].map((temple, index) => (
                <motion.div
                  key={temple.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg h-full">
                    <div className="relative h-60 md:h-40 lg:h-60">
                      <img
                        loading="lazy"
                        src={temple.image || "/placeholder.svg"}
                        alt={temple.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-orange-700">
                        {temple.name}
                      </h3>
                      <p className="text-gray-600 text-sm p-1 pl-0">
                        {temple.location}
                      </p>
                      <p className="text-sm font-medium text-orange-600 mb-2">
                        Deity: {temple.deity}
                      </p>
                      <p className="text-gray-700">{temple.description}</p>
                      <button className="text-orange-600 mt-4 p-0 underline" onClick={() => toast.info('Coming Soon!')}>
                        Learn more
                      </button>
                    </div>  
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Temple Etiquette Section */}
        <section className="py-8 lg:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                Temple Etiquette
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Guidelines for respectful temple visits
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Dress Code",
                  description:
                    "Wear modest clothing that covers shoulders and knees. Remove footwear before entering the temple premises.",
                  icon: "👕",
                },
                {
                  title: "Behavior",
                  description:
                    "Maintain a quiet and respectful demeanor. Avoid loud conversations, photography (where prohibited), and physical displays of affection.",
                  icon: "🙏",
                },
                {
                  title: "Rituals",
                  description:
                    "Follow the temple's customs for darshan (viewing the deity). Accept prasad (blessed food) with your right hand.",
                  icon: "🔔",
                },
                {
                  title: "Respect",
                  description:
                    "Walk clockwise around shrines. Do not touch idols or other sacred objects unless invited to do so by priests.",
                  icon: "🕉️",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <ToastContainer />
      </main>
    </div>
  );
}
