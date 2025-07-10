import React from "react";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 mt-2">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#6b8e23]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.449a1 1 0 00.95.69h3.631c.969 0 1.371 1.24.588 1.81l-2.937 2.134a1 1 0 00-.364 1.118l1.12 3.449c.3.921-.755 1.688-1.54 1.118l-2.937-2.134a1 1 0 00-1.176 0l-2.937 2.134c-.784.57-1.838-.197-1.54-1.118l1.12-3.449a1 1 0 00-.364-1.118L2.49 8.876c-.783-.57-.38-1.81.588-1.81h3.631a1 1 0 00.95-.69l1.12-3.449z" />
        </svg>
      ))}
    </div>
  );
}

const reviews = [
  {
    id: 1,
    name: "Aarthi S",
    initials: "AS",
    feedback:
      "This Ayurveda Basics course gave me so much clarity. I feel more connected to holistic healing now.",
    course: "Ayurveda Basics",
    rating: 5,
  },
  {
    id: 2,
    name: "Karthik R",
    initials: "KR",
    feedback:
      "Loved the way concepts were explained. The detox & herbs module was especially useful!",
    course: "Ayurvedic Detox & Herbs",
    rating: 4,
  },
  {
    id: 3,
    name: "Divya M",
    initials: "DM",
    feedback:
      "I joined to learn about self-healing and ended up recommending this course to all my friends!",
    course: "Self-Healing Techniques",
    rating: 5,
  },
  {
    id: 4,
    name: "Sanjay P",
    initials: "SP",
    feedback:
      "Ayurvedic diet plan section was a game changer for me. Thanks to the mentors!",
    course: "Nutrition in Ayurveda",
    rating: 4,
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-[#eef6e7] dark:bg-[#1b241b] text-[#2e3b2e] dark:text-[#e8e0d0] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#6b8e23] dark:text-[#a8e38b] mb-4">
          Trusted by Thousands of Ayurveda Learners
        </h2>
        <p className="text-center text-[#4b4038] dark:text-[#c6bb99] mb-12 text-sm sm:text-base max-w-xl mx-auto">
          See how our subscribers are transforming their lives through holistic healing. These are real stories powered by Ayurveda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-[#2c2722] border border-[#d7d2c2] dark:border-[#3a362f] rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-3xl text-[#6b8e23] mb-3">“</div>
              <p className="text-sm text-[#4b4038] dark:text-[#d4c7b6] mb-4 leading-relaxed">
                {review.feedback}
              </p>

              <StarRating rating={review.rating} />

              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-[#6b8e23] text-white flex items-center justify-center font-bold text-sm shadow-inner">
                  {review.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2e3b2e] dark:text-[#e2d9ca]">
                    {review.name}
                  </div>
                  <div className="text-xs text-[#7e725d] dark:text-[#a69885]">
                    Verified Learner ✔
                  </div>
                </div>
              </div>

              <a
                href="/courses"
                className="block mt-4 text-sm text-[#6b8e23] hover:text-[#4f6f52] font-semibold transition"
              >
                View {review.course} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
