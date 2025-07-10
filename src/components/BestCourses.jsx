const dummyCourses = [
  {
    id: 1,
    title: "Foundations of Ayurveda",
    instructor: "Dr. Neha Sharma",
    duration: "4 weeks",
    image:
      "https://alliedhealthcouncil.com/wp-content/uploads/2023/07/ayurvedic-courses-in-chennai.jpg",
  },
  {
    id: 3,
    title: "Ayurvedic Nutrition",
    instructor: "Dr. Meera Iyer",
    duration: "3 weeks",
    image:
      "https://aatreyaayurved.com/wp-content/uploads/2021/03/experties-ayurveda-2.jpg",
  },
  {
    id: 5,
    title: "Marma Therapy Workshop",
    instructor: "Dr. Sushmita Rao",
    duration: "2 weeks",
    image:
      "https://www.cghearth.com/uploads/TourismImg/20241123074206amswaswara(2).png",
  },
];

export default function BestCourses() {
  return (
    <section className="py-20 px-6 bg-[#f4f8f0] text-[#2f3f2f] dark:bg-[#121b14] dark:text-[#f0eadc]">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-[#6b8e23] dark:text-[#b5e9a3] mb-12">
        Free Ayurvedic Courses for You 🌿
      </h3>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {dummyCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-[#1f1c18] border border-[#dae5d2] dark:border-[#355234] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-[#4f6f52] dark:text-[#c0e7ac] group-hover:text-[#6b8e23] transition">
                {course.title}
              </h4>
              <p className="text-sm text-[#5c5045] dark:text-[#cfc9bc] mt-1">
                Instructor: {course.instructor}
              </p>
              <p className="text-sm text-[#867a67] dark:text-[#a29481] mb-4">
                Duration: {course.duration}
              </p>
              <a
                href={`/courses/${course.id}`}
                className="inline-block mt-2 px-5 py-2 bg-[#6b8e23] hover:bg-[#567d1f] text-white rounded-full text-sm font-medium transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
