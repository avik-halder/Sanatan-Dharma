import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imageLinks from "../../utils/ImageLinks";

const Practices = () => {
  const practices = [
    {
      name: "Yoga",
      description:
        "Union of individual consciousness with universal consciousness",
      additionalDescription:
        "Yoga enhances physical and mental well-being, fostering a deeper connection with self and the universe.",
      image: imageLinks.yoga,
    },
    {
      name: "Meditation",
      description:
        "Practice of focusing the mind on a particular object, thought or activity",
      additionalDescription:
        "Meditation brings inner peace, reduces stress, and improves concentration through mindful awareness.",
      image: imageLinks.meditation,
    },
    {
      name: "Puja",
      description: "Ritual worship involving offerings to deities",
      additionalDescription:
        "Puja is a spiritual practice that deepens devotion, connecting the worshipper to the divine through rituals and offerings.",
      image: imageLinks.puja,
    },
    {
      name: "Mantra Chanting",
      description: "Repetition of sacred sounds to transform consciousness",
      additionalDescription:
        "Mantra chanting helps to focus the mind, enhance positive vibrations, and bring spiritual tranquility.",
      image: imageLinks.mantra,
    },
  ];

  return (
    <section id="practices" className="py-10 lg:py-16 bg-orange-100">
      <div className="w-full px-4 lg:px-32 3xl:px-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }} // Change to false to allow animation on every scroll
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">
            Spiritual Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.name} // Ensure each item has a unique key
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }} // Ensure animation triggers each time it's scrolled into view
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 bg-orange-50 border border-orange-500 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full md:w-1/2 md:h-60">
                  <img
                    loading="lazy"
                    src={practice.image}
                    alt={practice.name}
                    className="w-full h-full object-cover md:rounded-br-xl"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-xl font-bold text-orange-700 mb-2">
                    {practice.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{practice.description}</p>
                  <p className="text-gray-600">
                    {practice.additionalDescription}
                  </p>
                  <button className="text-orange-600 underline hover:text-orange-800 mt-4 transition p-0 bg-transparent border-none cursor-pointer">
                    <a href="/practices">Learn more about {practice.name}</a>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Practices;
