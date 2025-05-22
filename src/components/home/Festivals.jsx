import React from "react";
import { motion } from "framer-motion";
import imageLinks from "../../utils/ImageLinks";

const Festivals = () => {
  const festivals = [
    {
      name: "Diwali",
      description: "Festival of Lights",
      date: "October/November",
      image: imageLinks.diwali,
      additional:
        "Diwali is celebrated with lights, fireworks, and prayers to Lakshmi, the goddess of wealth.",
      link: "/festivals/diwali",
    },
    {
      name: "Holi",
      description: "Festival of Colors",
      date: "March",
      image: imageLinks.holi,
      additional:
        "Holi celebrates the arrival of spring and the victory of good over evil with vibrant colors.",
      link: "/festivals/holi",
    },
    {
      name: "Durga Puja",
      description: "Worship of Goddess Durga",
      date: "September/October",
      image: imageLinks.durgaPuja,
      additional:
        "Durga Puja celebrates the victory of Goddess Durga over the buffalo demon Mahishasura, symbolizing the triumph of good over evil.",
      link: "/festivals/durga-puja",
    },
    {
      name: "Janmashtami",
      description: "Birth of Lord Krishna",
      date: "August/September",
      image: imageLinks.janmashtami,
      additional:
        "Janmashtami marks the birth of Lord Krishna, often celebrated with dancing, singing, and feasts.",
      link: "/festivals/janmashtami",
    },
    {
      name: "Maha Shivaratri",
      description: "The Great Night of Shiva",
      date: "February/March",
      image: imageLinks.shivaratri,
      additional:
        "Maha Shivaratri is a night dedicated to the worship of Lord Shiva, marked by fasting and prayers.",
      link: "/festivals/shivaratri",
    },
    {
      name: "Raksha Bandhan",
      description: "Bond of Protection",
      date: "August",
      image: imageLinks.rakshaBandhan,
      additional:
        "Raksha Bandhan celebrates the bond between brothers and sisters with the tying of a protective thread.",
      link: "/festivals",
    },
  ];

  return (
    <section id="festivals" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }} // Animation on every scroll into view
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">
            Major Festivals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((festival, index) => (
              <motion.div
                key={festival.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }} // Animation on every scroll into view
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-orange-100 border border-orange-500 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    loading="lazy"
                    src={festival.image || "/placeholder.svg"}
                    alt={festival.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{festival.date}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-orange-700 mb-1">
                    {festival.name}
                  </h3>
                  <p className="text-orange-600 mb-3">{festival.description}</p>
                  <p className="text-gray-600 text-sm">{festival.additional}</p>
                  <button
                    onClick={() => (window.location.href = festival.link)}
                    className="text-orange-600 underline hover:text-orange-800 mt-2 p-0 transition"
                  >
                    Read more
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 hover:scale-105 duration-300">
            <a
              href="/festivals#festival-calendar"
              className="bg-orange-600 text-orange-50 p-3 rounded-lg hover:bg-orange-700 transition"
            >
              View Festival Calendar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Festivals;
