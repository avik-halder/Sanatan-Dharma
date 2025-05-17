import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Function to handle bold text and line breaks
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

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all blogs from the server
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://sanatan-dharma-backend-nste.onrender.com/blogs"
        );
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

  if (loading) {
    return (
      <div className="bg-orange-100 border border-orange-500 m-12 p-12 flex items-center justify-center text-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-orange-100 border border-orange-500 m-12 p-12 flex items-center justify-center text-center">
        {error}
      </div>
    );
  }

  if (!blogs.length) {
    return <p>No blogs available</p>;
  }

  return (
    <section id="all-blogs" className="py-20 mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-8">
          All Blogs
        </h2>

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
                className="inline-block text-orange-50 px-4 py-2 rounded-lg font-semibold bg-orange-500 hover:scale-105 duration-300 transition"
              >
                Read more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
