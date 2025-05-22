import React from "react";
import { motion } from "framer-motion";
import imageLinks from "../../utils/ImageLinks";

const Temples = () => {
  const temples = [
    {
      name: "Kashi Vishwanath",
      location: "Varanasi, India",
      image: imageLinks.KashiVishwanath,
    },
    {
      name: "Meenakshi Temple",
      location: "Madurai, India",
      image: imageLinks.Meenakshi,
    },
    {
      name: "Akshardham",
      location: "Delhi, India",
      image: imageLinks.Akshardham,
    },
    {
      name: "Brihadeeswara Temple",
      location: "Thanjavur, India",
      image: imageLinks.Brihadeeswara,
    },
  ];

  return (
    <section id="temples" className="py-16 bg-orange-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">
            Sacred Temples
          </h2>

          <div className="relative h-[500px] mb-12 rounded-xl overflow-hidden">
            <img
              loading="lazy"
              src={imageLinks.temple}
              alt="Famous Hindu Temple"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
              <div className="text-white p-8 md:p-16 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Explore Sacred Sites
                </h3>
                <p className="mb-6">
                  Hindu temples are not just places of worship but architectural
                  marvels that represent the cosmos. Discover the spiritual and
                  cultural significance of these sacred spaces.
                </p>
                <button className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded">
                  Find Temples Near You
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {temples.map((temple, index) => (
              <motion.div
                key={temple.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative h-60 rounded-lg overflow-hidden group"
              >
                <img
                  loading="lazy"
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{temple.name}</h3>
                  <p className="text-sm">{temple.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Temples;
