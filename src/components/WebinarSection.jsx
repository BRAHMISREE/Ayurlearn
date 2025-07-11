import { motion } from "framer-motion";

export default function WebinarSection() {
  return (
      <section className="bg-[#f4f9f1] dark:bg-[#121a13] text-[#2f3f2f] dark:text-[#eae2cf] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-[#1e2a1e] p-10 md:p-12 rounded-3xl shadow-xl border border-[#d5e4d0] dark:border-[#355234] text-center space-y-8"
          >
            <h2 className="text-4xl font-bold text-[#6b8e23] dark:text-[#b5e9a3]">
              🌿 Upcoming Ayurveda Webinar
            </h2>

            <p className="text-lg leading-relaxed text-[#4c453a] dark:text-[#d4c7b4]">
              Join us for an exclusive <strong>live session</strong> on the healing power of Ayurveda, hosted by
              <strong> Dr. Meera Nair</strong>, a renowned Ayurvedic expert with 20+ years of experience.
              <br /><br />
              🗓️ <strong>Date:</strong> Sunday, July 21st<br />
              🕕 <strong>Time:</strong> 6:00 PM – 7:30 PM IST<br />
              🧘‍♀️ <strong>Topic:</strong> *Balancing Doshas: Practical Insights for Everyday Life*<br /><br />
              Learn practical techniques, get your questions answered, and receive exclusive post-session resources!
            </p>

            <a
                href="/webinar"
                className="inline-block bg-[#6b8e23] hover:bg-[#567d1f] text-white px-8 py-4 rounded-full font-semibold shadow-md transition-all duration-300"
            >
              Join the Webinar
            </a>
          </motion.div>
        </div>
      </section>
  );
}
