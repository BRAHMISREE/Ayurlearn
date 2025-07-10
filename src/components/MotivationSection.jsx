import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MotivationSection() {
  return (
    <section className="bg-[#eef6e7] dark:bg-[#1b241b] text-[#2e3b2e] dark:text-[#f0e8d9] py-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4f6f52] dark:text-[#b9e4a3] leading-snug">
            Why wait to heal <span className="text-[#6b8e23] drop-shadow">naturally?</span>
          </h2>
          <p className="text-lg text-[#4b4038] dark:text-[#cfbfa3] mb-4">
            Ayurveda has helped millions rediscover balance. If they can heal with nature’s wisdom,
            <span className="font-semibold text-[#6b8e23]"> why not you?</span>
          </p>
          <p className="text-sm text-[#6e614f] dark:text-[#b7ab91] mb-8">
            Rooted in 5000+ years of holistic insight — made practical for today’s lifestyle. Learn Ayurveda, apply it, and feel the shift from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/register"
              className="bg-[#6b8e23] hover:bg-[#5c7d1e] text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
            >
              Start Healing Today
            </a>
            <a
              href="https://www.youtube.com/watch?v=B0bZvBgHzA0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#6b8e23] text-[#4f6f52] hover:text-white px-6 py-3 rounded-full font-medium hover:bg-[#6b8e23] transition-all duration-300"
            >
              <span>Watch Stories</span> <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Video Embed */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg border border-[#cde3be] dark:border-[#39613f]"
        >
          <iframe
            className="w-full h-64 md:h-80 rounded-xl"
            src="https://www.youtube.com/embed/B0bZvBgHzA0"
            title="Ayurveda Healing Story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            aria-label="Watch success story on Ayurvedic healing"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
