import React from "react";
import { motion } from "framer-motion";
import imageLinks from "../../utils/ImageLinks";

function LakshmiPage() {
  return (
    <div className="min-h-screen mt-16">
      <main>
        <section className="py-8 lg:py-16">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h1 className="text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold text-center lg:text-start">
                  Goddess Lakshmi
                </h1>
                <h2 className="text-md md:text-lg font-medium text-amber-600 mb-4 md:mb-8 text-center lg:text-start">
                  The Divine Goddess of Wealth, Fortune, and Prosperity
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Goddess Lakshmi is the Hindu goddess of wealth, fortune,
                    power, beauty, fertility, and prosperity. She is the wife
                    and active energy (shakti) of Lord Vishnu, the supreme being
                    of preservation. Her four hands represent the four goals of
                    human life considered important to the Hindu way of life:
                    dharma (righteousness), kama (desires), artha (wealth), and
                    moksha (liberation from the cycle of birth and death).
                  </p>
                  <p>
                    Lakshmi is depicted as a beautiful woman of golden
                    complexion, with four hands, sitting or standing on a lotus
                    flower, dressed in fine garments and precious jewels. Her
                    four hands represent the four goals of human life considered
                    important to the Hindu way of life.
                  </p>
                  <p>
                    According to Hindu mythology, Lakshmi was born from the
                    churning of the cosmic ocean of milk (Samudra Manthan) by
                    the devas (gods) and asuras (demons). She chose Vishnu as
                    her eternal consort and accompanies him in all his
                    incarnations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative lg:h-[500px] rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2"
              >
                <img
                  loading="lazy"
                  src={imageLinks.Lakshmi}
                  alt="Goddess Lakshmi"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
                The Eight Forms of Lakshmi
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                Ashta Lakshmi represents the eight forms or manifestations of
                Goddess Lakshmi
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Adi Lakshmi",
                  description:
                    "The primordial form of Lakshmi, representing the original source of all wealth and prosperity.",
                  image: imageLinks.AdiLakshmi,
                },
                {
                  name: "Dhanya Lakshmi",
                  description:
                    "The goddess of agricultural wealth, representing the bounty of harvests and grains.",
                  image: imageLinks.DhanyaLakshmi,
                },
                {
                  name: "Dhairya Lakshmi",
                  description:
                    "The goddess of courage and patience, bestowing the wealth of inner strength and fortitude.",
                  image: imageLinks.DhairyaLakshmi,
                },
                {
                  name: "Gaja Lakshmi",
                  description:
                    "The goddess of animal wealth, depicted with elephants symbolizing royal power and abundance.",
                  image: imageLinks.GajaLakshmi,
                },
                {
                  name: "Santana Lakshmi",
                  description:
                    "The goddess of progeny, bestowing the wealth of children and family prosperity.",
                  image: imageLinks.SantanaLakshmi,
                },
                {
                  name: "Vijaya Lakshmi",
                  description:
                    "The goddess of victory, bestowing success in endeavors and triumph over obstacles.",
                  image: imageLinks.VijayaLakshmi,
                },
                {
                  name: "Vidya Lakshmi",
                  description:
                    "The goddess of knowledge and wisdom, representing the wealth of learning and education.",
                  image: imageLinks.VidyaLakshmi,
                },
                {
                  name: "Dhana Lakshmi",
                  description:
                    "The goddess of monetary wealth, bestowing material prosperity and financial abundance.",
                  image: imageLinks.DhanaLakshmi,
                },
              ].map((form, index) => (
                <motion.div
                  key={form.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-50 border border-orange-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="relative h-48 w-48 mx-auto mt-6">
                    <img
                      loading="lazy"
                      src={form.image}
                      alt={form.name}
                      className="object-cover rounded-full w-full h-full shadow-xl border-2 border-orange-600 rounded-full hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-orange-700 mb-1">
                      {form.name}
                    </h3>
                    <p className="text-gray-700 text-sm">{form.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Symbolism and Attributes
              </h2>
              <p className="text-orange-700 max-w-3xl mx-auto">
                The divine symbols and attributes associated with Goddess
                Lakshmi
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lotus Flower",
                  description:
                    "Lakshmi is often depicted sitting or standing on a lotus, symbolizing purity, spiritual awakening, and fertility amidst the chaos of material existence.",
                  icon: "🪷",
                },
                {
                  title: "Gold Coins",
                  description:
                    "Flowing from her hands, these represent material wealth and prosperity that she bestows upon her devotees.",
                  icon: "🪙",
                },
                {
                  title: "White Elephant",
                  description:
                    "Often shown accompanying Lakshmi, elephants symbolize royal power, fertility, and abundant rainfall for crops.",
                  icon: "🐘",
                },
                {
                  title: "Owl",
                  description:
                    "Lakshmi's vahana (vehicle) represents wisdom, patience, and the ability to see wealth even in darkness.",
                  icon: "🦉",
                },
                {
                  title: "Four Arms",
                  description:
                    "Representing the four goals of human life: dharma (righteousness), kama (desires), artha (wealth), and moksha (liberation).",
                  icon: "💪",
                },
                {
                  title: "Red Garments",
                  description:
                    "The red or pink sari worn by Lakshmi symbolizes activity and the active principle of prosperity.",
                  icon: (
                    <>
                      <span className="flex justify-center">
                        <img
                          loading="lazy"
                          src={imageLinks.redSaree}
                          alt=""
                          className="w-12 h-12 sm:w-10 sm:h-10"
                        />
                      </span>
                    </>
                  ),
                },
              ].map((symbol, index) => (
                <motion.div
                  key={symbol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 border border-orange-500 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-4xl mb-4">{symbol.icon}</div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">
                    {symbol.title}
                  </h3>
                  <p className="text-gray-700">{symbol.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-orange-100">
          <div className="w-full px-4 lg:px-32 3xl:px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 text-center lg:text-start">
                  Worship and Festivals
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Goddess Lakshmi is widely worshipped throughout India and by
                    Hindus worldwide. Her blessings are sought for prosperity,
                    abundance, and good fortune in all aspects of life.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">Diwali:</span>{" "}
                    The most important festival dedicated to Lakshmi is Diwali,
                    the Festival of Lights. On this auspicious night, homes are
                    cleaned and decorated with lamps, candles, and rangoli to
                    welcome Lakshmi. It is believed that Lakshmi visits the
                    cleanest houses first, so thorough cleaning is an essential
                    part of Diwali preparations.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Lakshmi Puja:
                    </span>{" "}
                    Performed on the full moon day of the Hindu lunar month of
                    Ashwin (September-October), this ritual worship is dedicated
                    specifically to Goddess Lakshmi. It involves offerings of
                    flowers, fruits, sweets, and the recitation of mantras and
                    prayers.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Varalakshmi Vratam:
                    </span>{" "}
                    Observed by married women in many parts of India,
                    particularly in the south, this ritual is performed on the
                    Friday before the full moon in the month of Shravana
                    (July-August) to seek blessings for the well-being of family
                    members.
                  </p>
                  <p>
                    <span className="font-medium text-orange-700">
                      Akshaya Tritiya:
                    </span>{" "}
                    Considered one of the most auspicious days for Hindus, this
                    festival celebrates the birthday of Lord Parasurama, an
                    incarnation of Vishnu, but is also associated with Lakshmi
                    and considered an excellent day to begin new ventures or
                    make investments.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="/deities"
                    className="px-4 py-2 border border-orange-600 text-orange-600 rounded-md"
                  >
                    Back to Deities
                  </a>
                  <a
                    href="/deities/saraswati"
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md"
                  >
                    Explore Goddess Saraswati
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative lg:h-[500px] rounded-2xl overflow-hidden shadow-lg order-1 lg:2"
              >
                <img
                  loading="lazy"
                  src={imageLinks.lakshmiPuja}
                  alt="Lakshmi Puja During Diwali"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LakshmiPage;
