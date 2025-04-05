"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const slides = [
  {
    src: "/logo.jpg",
    heading: "Explore the Mountains",
    subtext: "Breathe in the adventure.",
  },
  {
    src: "/logo.jpg",
    heading: "Chill by the Beach",
    subtext: "Sun, sea, and serenity.",
  },
  {
    src: "/logo.jpg",
    heading: "City Lights",
    subtext: "Feel the urban rhythm.",
  },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  // Autoplay logic
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <div className="relative w-full max-w-4xl h-[400px] mx-auto mt-4 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={slides[index].src}
            alt={slides[index].heading}
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />

          {/* Text Overlay at bottom */}
          <div className="absolute bottom-20 w-full px-6 text-white text-center z-10">
            <h2
              className="text-3xl font-bold drop-shadow-md"
              style={{ color: "#4a4a4a" }}
            >
              {slides[index].heading}
            </h2>
            <p className="mt-2 text-lg" style={{ color: "#4a4a4a" }}>
              {slides[index].subtext}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows + Dots in one row */}
      <div className="absolute bottom-4 w-full flex justify-center items-center gap-4 z-30">
        <button
          onClick={prevSlide}
          className="bg-black/30 hover:bg-black/50 text-black p-2 rounded-full backdrop-blur"
        >
          <ArrowBackIosNewIcon fontSize="small" style={{ color: "black" }} />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300`}
              style={{
                backgroundColor: "#4a4a4a",
                opacity: i === index ? 1 : 0.3,
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 text-black p-2 rounded-full backdrop-blur"
        >
          <ArrowForwardIosIcon fontSize="small" style={{ color: "black" }} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
