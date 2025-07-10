import { useEffect, useState } from "react";
import heroSlides from "../data/heroSlides";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative overflow-hidden bg-[#e6f4e6] dark:bg-[#0f1a0f] text-[#2e3b2e] dark:text-[#e7f0e7] transition-colors duration-500">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[32rem] h-[32rem] bg-[#6b8e23]/20 rounded-full blur-[150px] z-0 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[32rem] h-[32rem] bg-[#4f6f52]/20 rounded-full blur-[150px] z-0 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-32 gap-14">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-4xl sm:text-5xl font-bold text-[#4f6f52] dark:text-[#b2e2b2] drop-shadow-sm"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slide.heading}
              </motion.h1>
              <motion.p
                className="text-lg text-[#6b5e4e] dark:text-[#d0c6b0]"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {slide.sub}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6b8e23] hover:bg-[#5c7d1e] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-2xl transition-all duration-300"
              >
                {slide.btn} <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Logo / Visual */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            key={index}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-72 h-72 rounded-[2rem] bg-gradient-to-br from-[#6b8e23]/20 to-[#4f6f52]/20 backdrop-blur-xl dark:bg-[#2f2a24]/60 shadow-[0_0_60px_rgba(107,142,35,0.4)] flex items-center justify-center"
          >
            <motion.img
              src=""
              alt="course thumbnails"
              className="w-32 md:w-40 z-10 drop-shadow-md"
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-[#6b8e23]/10 blur-2xl rounded-[2rem] z-0 animate-ping" />
          </motion.div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-[#4f6f52] scale-110 shadow-md"
                : "bg-[#c3b091]/40"
            }`}
            layout
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </div>
    </section>
  );
}
