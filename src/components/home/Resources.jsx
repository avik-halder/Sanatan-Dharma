import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Resources = () => {
  const sacredTexts = [
    "Vedas",
    "Upanishads",
    "Bhagavad Gita",
    "Puranas",
    "Ramayana",
    "Mahabharata",
  ];
  const concepts = ["Dharma", "Karma", "Samsara", "Moksha", "Atman", "Brahman"];

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all blogs from the server
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://sanatan-dharma-backend-nste.onrender.com/blogs"
        ); // Replace with your actual API endpoint
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="resources" className="py-16">
      <div className="w-full px-4 lg:px-32 3xl:px-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-12">
            Educational Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sacred Texts Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-orange-100 rounded-lg p-6 border-[1px] border-orange-500"
            >
              <h3 className="text-xl font-bold text-orange-700 mb-4">
                Sacred Texts
              </h3>
              <ul className="space-y-3">
                {sacredTexts.map((text) => (
                  <li key={text} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => (window.location.href = "/resources")}
                className="mt-6 border border-orange-600 text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 hover:text-white duration-300 transition"
              >
                Explore Texts
              </button>
            </motion.div>

            {/* Philosophy & Concepts Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-orange-100 rounded-lg p-6 border-[1px] border-orange-500"
            >
              <h3 className="text-xl font-bold text-orange-700 mb-4">
                Philosophy & Concepts
              </h3>
              <ul className="space-y-3">
                {concepts.map((concept) => (
                  <li key={concept} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <span>{concept}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => (window.location.href = "/practices")}
                className="mt-6 border border-orange-600 text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 hover:text-white duration-300 transition"
              >
                Learn Concepts
              </button>
            </motion.div>

            {/* Blogs Block (Replaces Courses) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-orange-100 rounded-lg p-6 border-[1px] border-orange-500"
            >
              <h3 className="text-xl font-bold text-orange-700 mb-4">Blogs</h3>
              <div className="space-y-4">
                {loading && (
                  <div className="flex mt-12">
                    <div className="bg-orange-100 border-2 border-dashed border-orange-500 rounded-xl shadow-xl p-12 text-center max-w-4xl mx-auto">
                      <span className="text-2xl text-orange-800 font-semibold italic">
                        Blogs are Loading...
                        <br />
                        Please Wait🙂
                      </span>
                    </div>
                  </div>
                )}
                {error && (
                  <div className="flex mt-12">
                    <div className="bg-orange-100 border-2 border-dashed border-orange-500 rounded-xl shadow-xl p-12 text-center max-w-4xl mx-auto">
                      <span className="text-2xl text-orange-800 font-semibold italic">
                        Server Error...
                        <br />
                        Please Wait🙂
                      </span>
                    </div>
                  </div>
                )}
                {blogs.length === 0 && !loading && !error && (
                  <p>No blogs available</p>
                )}
                {blogs.slice(0, 3).map((blog) => (
                  <a
                    key={blog.blog_id} // Assuming blog object has an id
                    href={`/blogs/${blog.blog_id}`} // This will navigate to the blog details page
                    className="block pb-3 border-b border-orange-200 hover:text-orange-700 transition"
                  >
                    <p className="font-medium text-orange-800">
                      {blog.blog_title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Click to read more about {blog.blog_title}.
                    </p>
                  </a>
                ))}
              </div>
              {!error && !loading && (
                <a
                  href="/blogs"
                  className="mt-6 inline-block border border-orange-600 text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 hover:text-white duration-300 transition"
                >
                  View All Blogs
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
