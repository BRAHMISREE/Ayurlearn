import { motion } from "framer-motion";

export default function WebinarSection() {
  return (
      <section className="bg-[#f4f9f1] dark:bg-[#121a13] text-[#2f3f2f] dark:text-[#eae2cf] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left - Webinar Info */}
          <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-bold text-[#6b8e23] dark:text-[#b5e9a3]">
              🌿 Upcoming Ayurveda Webinar
            </h2>
            <p className="text-base text-[#5c5045] dark:text-[#d4c7b4] leading-relaxed">
              Dive deep into the ancient wisdom of Ayurveda with our expert-led live webinar. Learn practical healing techniques, ask questions, and connect with a community passionate about holistic health.
            </p>
            <a
                href="/webinar"
                className="inline-block bg-[#6b8e23] hover:bg-[#567d1f] text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
            >
              Join the Webinar
            </a>
          </motion.div>

          {/* Right - Image */}
          <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#d5e4d0] dark:border-[#355234]">
              <img
                  src="/webinar-illustration.svg" // Change this to your new webinar image path
                  alt="Webinar Illustration"
                  className="w-full max-w-md object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
  );
}
