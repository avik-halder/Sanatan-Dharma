import React from "react";
import { motion } from "framer-motion";
import imageLinks from "../../utils/ImageLinks";

const Deities = () => {
  const deities = [
    {
      name: "Brahma",
      role: "The Creator",
      description:
        "Brahma is the creator god, often depicted with four faces representing the Vedas. He creates the universe and all living beings.",
      image: imageLinks.brahma,
      link: "/deities/brahma",
    },
    {
      name: "Vishnu",
      role: "The Preserver",
      description:
        "Vishnu is the god of preservation, ensuring balance and harmony in the universe. He is often shown holding a conch, chakra, lotus, and mace.",
      image: imageLinks.Vishnu,
      link: "/deities/vishnu",
    },
    {
      name: "Shiva",
      role: "The Transformer",
      description:
        "Shiva is the god of destruction and transformation. Known for his asceticism, he represents both destruction and regeneration.",
      image: imageLinks.Shiva,
      link: "/deities/shiva",
    },
  ];

  return (
    <section id="deities" className="py-10 lg:py-16">
      <div className="w-full px-4 lg:px-32 3xl:px-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }} // Change to false to make it animate on each scroll
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">
            Principal Deities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deities.map((deity, index) => (
              <motion.div
                key={deity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} // Ensures animation happens on every scroll
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-orange-100 border-[1px] border-orange-500 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 hover:scale-110 duration-500">
                  <img
                    loading="lazy"
                    src={deity.image}
                    alt={deity.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-orange-700 mb-2">
                  {deity.name}
                </h3>
                <p className="text-orange-600">{deity.role}</p>
                <p className="mt-4 text-gray-700">{deity.description}</p>
                <button
                  onClick={() => (window.location.href = deity.link)}
                  className="mt-2 text-orange-600 underline hover:text-orange-800 transition"
                >
                  Learn more
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => (window.location.href = "/deities")}
              className="border border-orange-600 text-white p-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition"
            >
              Explore More Deities
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Deities;
