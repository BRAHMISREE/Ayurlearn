import courses from "../data/coursesData";
import Navbar from "../components/Navbar.jsx";

export default function Courses() {
    // Filter only free courses
    const freeCourses = courses.filter(course => course.isFree);

    return (
        <>
            <Navbar />

            <section className="py-16 px-4 bg-[#f9f8f2] min-h-screen">
                <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
                    Free Ayurvedic Courses 🌿
                </h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {freeCourses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white border border-green-100 rounded-xl overflow-hidden shadow hover:shadow-md transition-all"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="h-44 w-full object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-green-800 mb-2">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                    {course.description || "Discover the ancient secrets of holistic wellness."}
                                </p>
                                <a
                                    href={`/courses/${course.id}`}
                                    className="inline-block px-4 py-1.5 bg-green-600 text-white rounded-full text-sm hover:bg-green-700 transition"
                                >
                                    View Course
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
