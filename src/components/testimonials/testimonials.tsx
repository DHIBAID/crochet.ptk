"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    name: "Alice Johnson",
    text: "This service has been a game-changer! Highly recommended.",
  },
  {
    name: "Rahul Sharma",
    text: "Incredible experience, excellent support, and very reliable.",
  },
  {
    name: "Emma Watson",
    text: "Clean design and super intuitive. I love it!",
  },
  {
    name: "Dhiraj Baid",
    text: "This thing so good me like it bery much.",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="w-[90%] max-w-xl mx-auto mt-5 mb-10 p-6 bg-white border border-gray-200 rounded-2xl">
      <div className="flex justify-center">
        <FormatQuoteIcon style={{ fontSize: 40, color: "#4a4a4a" }} />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p className="text-xl italic text-gray-800 mt-4 mb-6">
            “{testimonials[index].text}”
          </p>
          <p className="font-semibold text-[#4a4a4a]">
            — {testimonials[index].name}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="mt-6 flex justify-center space-x-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "#4a4a4a",
              opacity: i === index ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
