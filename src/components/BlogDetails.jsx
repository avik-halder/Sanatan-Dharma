import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLanguage } from "react-icons/fa";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Install uuid if you haven't: npm install uuid

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTranslated, setIsTranslated] = useState(false);
  const [translatedBlog, setTranslatedBlog] = useState(null);
  const [translationLoading, setTranslationLoading] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState(null);

  const APIkey = "2Ah2hYh9WbUVxrf07UT6rMrj13BPxQAYWD5K844dOJWluNyjenFnJQQJ99BEACqBBLyXJ3w3AAAbACOG2mpy";
  const endpoint = "https://api.cognitive.microsofttranslator.com";
  const location = "southeastasia";

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://sanatan-dharma-backend-nste.onrender.com/blogs/${blogId}`
        );
        const data = await response.json();
        setBlog(data);
        detectLanguage(data.blog_title);
      } catch (err) {
        setError("Error fetching blog details");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  const detectLanguage = (text) => {
    const bengaliRange = /[\u0980-\u09FF]/;
    if (bengaliRange.test(text)) {
      setSourceLanguage("bn");
      setTargetLanguage("en");
    } else {
      setSourceLanguage("en");
      setTargetLanguage("bn");
    }
  };

  const formatText = (text) => {
    if (!text) return null;

    const applyStyles = (part) => {
      if (/^##(.*?)##/.test(part)) {
        return <span className="text-2xl">{applyStyles(part.slice(2, -2))}</span>;
      }
      if (/^#(.*?)#/.test(part)) {
        return <span className="text-xl">{applyStyles(part.slice(1, -1))}</span>;
      }
      if (/^~~(.*?)~~/.test(part)) {
        return <span className="text-sm">{applyStyles(part.slice(2, -2))}</span>;
      }
      if (/\*\*\*(.*?)\*\*\*/.test(part)) {
        const content = part.replace(/\*\*\*(.*?)\*\*\*/g, "$1");
        return (
          <strong>
            <em>{content}</em>
          </strong>
        );
      }
      if (/\*\*(.*?)\*\*/.test(part)) {
        const content = part.replace(/\*\*(.*?)\*\*/g, "$1");
        return <strong>{content}</strong>;
      }
      if (/\*(.*?)\*/.test(part)) {
        const content = part.replace(/\*(.*?)\*/g, "$1");
        return <em>{content}</em>;
      }
      return part;
    };

    return (
      <div className="leading-loose">
        {text.split("\n").map((line, index) => (
          <span key={index}>
            {line
              .split(
                /(##.*?##|#.*?#|~~.*?~~|\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*)/g
              )
              .map((part, idx) => (
                <React.Fragment key={idx}>{applyStyles(part)}</React.Fragment>
              ))}
            <br />
          </span>
        ))}
      </div>
    );
  };

  const translateBlog = async () => {
    if (isTranslated && translatedBlog) {
      setIsTranslated(false);
      return;
    }
    setTranslationLoading(true);
    try {
      if (translatedBlog) {
        setIsTranslated(true);
        setTranslationLoading(false);
        return;
      }
      const textToTranslate = {};
      textToTranslate.blog_title = blog.blog_title;
      textToTranslate.blog_subtitle = blog.blog_subtitle;
      Object.keys(blog).forEach((key) => {
        if (key.startsWith("para") && blog[key]) {
          textToTranslate[key] = blog[key];
        }
      });
      const newTranslatedBlog = { ...blog };
      for (const [key, text] of Object.entries(textToTranslate)) {
        const response = await axios({
          baseURL: endpoint,
          url: "/translate",
          method: "post",
          headers: {
            "Ocp-Apim-Subscription-Key": APIkey,
            "Ocp-Apim-Subscription-Region": location,
            "Content-type": "application/json",
            "X-ClientTraceId": uuidv4(),
          },
          params: {
            "api-version": "3.0",
            from: sourceLanguage,
            to: targetLanguage,
          },
          data: [
            {
              text: text,
            },
          ],
          responseType: "json",
        });
        const translatedText = response.data[0].translations[0].text;
        newTranslatedBlog[key] = translatedText;
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
      setTranslatedBlog(newTranslatedBlog);
      setIsTranslated(true);
    } catch (error) {
      console.error("Translation error:", error);
      alert("Translation failed. Please try again later.");
    } finally {
      setTranslationLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="bg-orange-100 border border-orange-500 rounded-xl shadow-xl m-12 p-12 flex items-center justify-center text-center max-w-4xl mx-auto mt-36">
          <span className="text-2xl text-orange-800 font-semibold italic">
            Loading...
            <br />
            Please Wait🙂
          </span>
        </div>
        <motion.div
          className="mt-6 inline-block flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium"
          >
            👈🏻 Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-orange-100 border border-orange-500 rounded-xl shadow-xl m-12 p-12 flex items-center justify-center text-center max-w-4xl mx-auto mt-36">
          <span className="text-2xl text-orange-800 font-semibold italic">
            Server Error...
            <br />
            Please Wait🙂
          </span>
        </div>
        <motion.div
          className="mt-6 inline-block flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium"
          >
            👈🏻 Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <section id="blog-details" className="py-16 px-4 mt-16">
      <div className="container mx-auto px-4">
        {/* MOBILE VIEW DATE/TITLE/SUBTITLE */}
        <div className="block md:hidden mb-6">
          <div className="text-orange-800 font-semibold mb-3 italic flex items-center">
            Date: {blog.blog_date}
            <motion.button
              onClick={translateBlog}
              disabled={translationLoading}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${
                isTranslated ? "text-blue-600" : "text-orange-600"
              } text-4xl ml-4`}
              title={
                isTranslated
                  ? sourceLanguage === "bn"
                    ? "Show Original (বাংলা)"
                    : "Show Original (English)"
                  : sourceLanguage === "bn"
                  ? "Translate to English"
                  : "অনুবাদ করুন (বাংলায়)"
              }
            >
              {translationLoading ? (
                <span className="text-sm">Translating...</span>
              ) : (
                <FaLanguage />
              )}
            </motion.button>
          </div>
          <h1 className="text-3xl text-orange-800 mb-2 font-bold">
            {isTranslated && translatedBlog
              ? translatedBlog.blog_title
              : blog.blog_title}
          </h1>
          <h2 className="text-md font-medium text-amber-600 mb-6">
            {isTranslated && translatedBlog
              ? translatedBlog.blog_subtitle
              : blog.blog_subtitle}
          </h2>
        </div>

        {/* IMAGE */}
        <motion.div
          className="float-right ml-8 mb-6 w-full md:w-2/5 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={blog.blog_image}
            alt={blog.blog_title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* DESKTOP VIEW DATE/TITLE/SUBTITLE */}
        <div className="hidden md:block text-orange-800 font-semibold mb-3 italic lg:flex lg:items-center">
          Date: {blog.blog_date}
          <motion.button
            onClick={translateBlog}
            disabled={translationLoading}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${
              isTranslated ? "text-blue-600" : "text-orange-600"
            } text-4xl ml-4`}
            title={
              isTranslated
                ? sourceLanguage === "bn"
                  ? "Show Original (বাংলা)"
                  : "Show Original (English)"
                : sourceLanguage === "bn"
                ? "Translate to English"
                : "অনুবাদ করুন (বাংলায়)"
            }
          >
            {translationLoading ? (
              <span className="text-sm">Translating...</span>
            ) : (
              <FaLanguage />
            )}
          </motion.button>
        </div>
        <h1 className="hidden md:block text-3xl md:text-5xl text-orange-800 mb-2 md:mb-3 font-bold">
          {isTranslated && translatedBlog
            ? translatedBlog.blog_title
            : blog.blog_title}
        </h1>
        <h2 className="hidden md:block text-md md:text-lg font-medium text-amber-600 mb-6">
          {isTranslated && translatedBlog
            ? translatedBlog.blog_subtitle
            : blog.blog_subtitle}
        </h2>

        {/* Blog paragraphs */}
        {Object.keys(blog).map((key) => {
          if (key.startsWith("para") && blog[key]) {
            const content =
              isTranslated && translatedBlog ? translatedBlog[key] : blog[key];
            return (
              <p key={key} className="text-md text-gray-600 mb-3">
                {formatText(content)}
              </p>
            );
          }
          return null;
        })}

        {/* Buttons */}
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <motion.div
              className="mt-6 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-orange-600 hover:bg-orange-700 text-orange-50 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-md font-medium"
              >
                <span className="hidden sm:inline">👈🏻 Back to Home</span>
                <span className="sm:hidden">👈🏻 Home</span>
              </button>
            </motion.div>
            <motion.div
              className="mt-6 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => (window.location.href = "/blogs")}
                className="border border-orange-600 hover:bg-orange-700 text-orange-700 hover:text-orange-50 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-md font-medium"
              >
                <span className="hidden sm:inline">Explore All Blogs</span>
                <span className="sm:hidden">All Blogs</span>
              </button>
            </motion.div>
          </div>
          <motion.div
            className="mt-6 inline-block ml-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={translateBlog}
              disabled={translationLoading}
              className={`${
                isTranslated
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-orange-600 hover:bg-orange-700"
              } text-orange-50 text-sm sm:text-base px-4 py-3 rounded-md font-medium flex items-center justify-center`}
            >
              {translationLoading ? (
                <span>Translating...</span>
              ) : isTranslated ? (
                <span>
                  {sourceLanguage === "bn"
                    ? "Show Original (বাংলা)"
                    : "Show Original (English)"}
                </span>
              ) : (
                <span>
                  {sourceLanguage === "bn"
                    ? "Translate to English"
                    : "অনুবাদ করুন (বাংলায়)"}
                </span>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
