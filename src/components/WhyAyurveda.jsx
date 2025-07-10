export default function WhyAyurveda() {
  return (
    <section className="py-16 bg-[#eaf5e5] dark:bg-[#1a241a] px-6 text-center text-[#2e3b2e] dark:text-[#e7f0e7] transition-colors duration-500">
      <h2 className="text-3xl font-bold text-[#4f6f52] dark:text-[#b2e2b2] mb-6">
        Why Learn Ayurveda?
      </h2>
      <p className="text-[#5c5045] dark:text-[#d6cab3] max-w-3xl mx-auto mb-10 text-sm md:text-base">
        Ayurveda is not just medicine — it's a timeless way of living in balance with nature.
        Discover tools to improve your health, energy, and inner peace through ancient wisdom.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {[
          "100% Natural Healing",
          "Personalized Learning",
          "Beginner Friendly",
          "Trusted by Experts",
        ].map((item, i) => (
          <span
            key={i}
            className="bg-[#d6e8c9] dark:bg-[#2f3b2f] text-[#4f6f52] dark:text-[#cce3cc] px-4 py-2 rounded-full shadow-md font-medium text-sm transition"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
