import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import diwali from '../assets/Festivals/diwali.webp';
import holi from '../assets/Festivals/holi.webp';
import durgaPuja from '../assets/Festivals/durga_puja.webp';
import janmashtami from '../assets/Festivals/janmashtami.webp';
import mahaShivaratri from '../assets/Festivals/maha_shivratri.webp';
import ganeshChaturthi from '../assets/Festivals/ganesh chaturthi.webp';

export default function FestivalsPage() {
  const [selectedTab, setSelectedTab] = useState('spring');

  useEffect(() => {
    // Wait for the page to load and check the hash
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <main>
        {/* Page Header */}
        <section className="py-16 mt-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">Major Festivals</h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Hindu festivals celebrate various aspects of life, mythology, and cosmic events
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[ 
                // { name: "Navratri", description: "Nine Nights dedicated to the worship of the divine feminine in her various forms", date: "September/October", duration: "9 days", image: navratri, link:"festivals/navratri" },
                { name: "Durga Puja", description: "Celebrating the victory of Goddess Durga over the demon Mahishasura", date: "September/October", duration: "5 days", image: durgaPuja, link: "festivals/durga-puja" },
                { name: "Diwali", description: "Festival of Lights celebrating the victory of light over darkness and good over evil", date: "October/November", duration: "5 days", image: diwali, link:"festivals/diwali" },
                { name: "Holi", description: "Festival of Colors celebrating the arrival of spring and the triumph of good over evil", date: "March", duration: "2 days", image: holi, link:"festivals/holi" },
                { name: "Janmashtami", description: "Celebration of Lord Krishna's birth with fasting, devotional songs, and reenactments", date: "August/September", duration: "1 day", image: janmashtami, link:"festivals/janmashtami" },
                { name: "Maha Shivaratri", description: "The Great Night of Shiva, marked by fasting, meditation, and all-night vigils", date: "February/March", duration: "1 day", image: mahaShivaratri, link:"festivals/shivaratri" },
                { name: "Ganesh Chaturthi", description: "Celebration of Lord Ganesha's birth with elaborate installations and processions", date: "August/September", duration: "10 days", image: ganeshChaturthi, link:"festivals/ganesh-chaturthi" }
              ].map((festival, index) => (
                <motion.div
                  key={festival.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <img src={festival.image || "/placeholder.svg"} alt={festival.name} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{festival.date}</p>
                      <p className="text-xs">{festival.duration}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-2">{festival.name}</h3>
                    <p className="text-gray-700 mb-4">{festival.description}</p>
                    <button onClick={() => window.location.href = festival.link} className="text-orange-600 p-0 underline">
                      Learn more about {festival.name}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Festival Calendar Section */}
        <section className="py-16 bg-orange-100" id="festival-calendar">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">Festival Calendar</h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Hindu festivals follow the lunar calendar and vary by region and tradition
              </p>
            </motion.div>

            {/* Centered Tabs Navigation */}
            <div className="max-w-2xl mx-auto mb-4">
              <div className="relative right-0">
                <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-orange-200" data-tabs="tabs" role="list">
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${selectedTab === 'spring' ? 'bg-white' : 'bg-inherit'}`}
                      onClick={() => setSelectedTab('spring')}
                      role="tab"
                    >
                      Spring
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-md font-medium sm:font-semibold transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${selectedTab === 'summer' ? 'bg-white' : 'bg-inherit'}`}
                      onClick={() => setSelectedTab('summer')}
                      role="tab"
                    >
                      Summer
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${selectedTab === 'autumn' ? 'bg-white' : 'bg-inherit'}`}
                      onClick={() => setSelectedTab('autumn')}
                      role="tab"
                    >
                      Autumn
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button
                      className={`z-30 flex items-center justify-center w-full px-0 py-2 text-md font-medium sm:font-semibold mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-orange-800 ${selectedTab === 'winter' ? 'bg-white' : 'bg-inherit'}`}
                      onClick={() => setSelectedTab('winter')}
                      role="tab"
                    >
                      Winter
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tab Content with Fixed Width */}
            <div className="flex justify-center">
              <div className="max-w-2xl w-full">
                {selectedTab === 'spring' && (
                  <div className="grid gap-8 bg-white border-[1px] border-orange-500 p-6 rounded-md shadow-md">
                    {[ 
                      { name: "Holi", date: "Phalgun Purnima (February/March)", description: "The festival of colors celebrating the arrival of spring and the victory of good over evil." },
                      { name: "Ugadi/Gudi Padwa", date: "Chaitra Shukla Pratipada (March/April)", description: "New Year's Day for many Hindus, especially in South and Western India." },
                      { name: "Ram Navami", date: "Chaitra Shukla Navami (March/April)", description: "Celebration of Lord Rama's birth." },
                      { name: "Hanuman Jayanti", date: "Chaitra Purnima (March/April)", description: "Birthday of Lord Hanuman." },
                    ].map((festival, index) => (
                      <div key={festival.name} className="border-b-2 border-dashed border-orange-200 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-orange-700">{festival.name}</h4>
                            <p className="text-sm text-gray-600">{festival.date}</p>
                          </div>
                          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Spring</span>
                        </div>
                        <p className="mt-2 text-gray-700">{festival.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {selectedTab === 'summer' && (
                  <div className="grid gap-8 bg-white border-[1px] border-orange-500 p-6 rounded-md shadow-md">
                    {[ 
                      { name: "Rath Yatra", date: "Ashadha Shukla Dwitiya (June/July)", description: "Chariot festival of Lord Jagannath." },
                      { name: "Guru Purnima", date: "Ashadha Purnima (July)", description: "Day to honor spiritual and academic teachers." },
                      { name: "Nag Panchami", date: "Shravan Shukla Panchami (July/August)", description: "Worship of serpent deities." },
                      { name: "Raksha Bandhan", date: "Shravan Purnima (August)", description: "Celebration of the bond between brothers and sisters." },
                      { name: "Janmashtami", date: "Bhadrapada Krishna Ashtami (August/September)", description: "Birth of Lord Krishna." },
                    ].map((festival, index) => (
                      <div key={festival.name} className="border-b-2 border-dashed border-orange-200 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-orange-700">{festival.name}</h4>
                            <p className="text-sm text-gray-600">{festival.date}</p>
                          </div>
                          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Summer</span>
                        </div>
                        <p className="mt-2 text-gray-700">{festival.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {selectedTab === 'autumn' && (
                  <div className="grid gap-8 bg-white border-[1px] border-orange-500 p-6 rounded-md shadow-md">
                    {[ 
                      { name: "Ganesh Chaturthi", date: "Bhadrapada Shukla Chaturthi (August/September)", description: "Birth of Lord Ganesha." },
                      { name: "Onam", date: "Bhadrapada/Ashwin (August/September)", description: "Harvest festival celebrated in Kerala." },
                      { name: "Durga Puja", date: "Ashwin Shukla Pratipada to Navami (September/October)", description: "Worship of Goddess Durga, particularly in Bengal." },
                      { name: "Navratri", date: "Ashwin Shukla Pratipada to Navami (September/October)", description: "Nine nights dedicated to the Goddess Durga." },
                      { name: "Dussehra", date: "Ashwin Shukla Dashami (September/October)", description: "Victory of Lord Rama over Ravana." },
                      { name: "Diwali", date: "Kartika Amavasya (October/November)", description: "Festival of lights celebrating the victory of light over darkness." },
                    ].map((festival, index) => (
                      <div key={festival.name} className="border-b-2 border-dashed border-orange-200 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-orange-700">{festival.name}</h4>
                            <p className="text-sm text-gray-600">{festival.date}</p>
                          </div>
                          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Autumn</span>
                        </div>
                        <p className="mt-2 text-gray-700">{festival.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {selectedTab === 'winter' && (
                  <div className="grid gap-8 bg-white border-[1px] border-orange-500 p-6 rounded-md shadow-md">
                    {[ 
                      { name: "Pancha Ganapati", date: "December 21-25", description: "Five-day festival honoring Lord Ganesha." },
                      { name: "Lohri", date: "January 13", description: "Harvest festival celebrated in North India." },
                      { name: "Makar Sankranti", date: "January 14", description: "Harvest festival marking the transition of the sun into Capricorn." },
                      { name: "Vasant Panchami", date: "Magha Shukla Panchami (January/February)", description: "Festival honoring Saraswati, the goddess of knowledge." },
                      { name: "Maha Shivaratri", date: "Phalguna Krishna Chaturdashi (February/March)", description: "The great night of Lord Shiva." },
                    ].map((festival, index) => (
                      <div key={festival.name} className="border-b-2 border-dashed border-orange-200 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-orange-700">{festival.name}</h4>
                            <p className="text-sm text-gray-600">{festival.date}</p>
                          </div>
                          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Winter</span>
                        </div>
                        <p className="mt-2 text-gray-700">{festival.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
