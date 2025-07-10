import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of courses are offered on AyurLearn?",
    answer:
      "AyurLearn offers beginner to advanced level courses on Ayurveda, including topics like herbs, natural healing, diet, lifestyle, yoga, and more.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes! The 'Ayur Free' plan allows access to selected basic courses at no cost. You can upgrade anytime.",
  },
  {
    question: "What does the Ayur Pro subscription include?",
    answer:
      "With Ayur Pro, you get access to all courses, weekly live expert sessions, tests, certifications, and lifetime access to the community.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes. Both Ayur Plus and Ayur Pro members receive a certificate upon completing a course successfully.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel or switch plans anytime from your dashboard. No questions asked!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if clicked again
  };

  return (
    <section className="bg-[#f5f9f3] dark:bg-[#141e14] text-[#2e3b2e] dark:text-[#e4dcc9] px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#6b8e23] dark:text-[#b2e2b2] mb-10">
          Frequently Asked Questions 🌿
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  boxShadow: isOpen
                    ? "0 0 0 3px rgba(107, 142, 35, 0.3)"
                    : "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className={`border ${
                  isOpen ? "border-[#6b8e23]" : "border-[#d7e6d1] dark:border-[#3f5d35]"
                } dark:border transition-all duration-300 rounded-xl p-5 bg-white dark:bg-[#1f231d]`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left font-medium text-[#3b4b3b] dark:text-[#e9e2d4]"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#6b8e23]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-sm text-[#5c5045] dark:text-[#cabfae]"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
