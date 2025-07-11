

import courses from "../data/coursesData";
import Navbar from "../components/Navbar.jsx";

export default function Courses() {

    return (
        <>

            <Navbar/>

            <section className="py-16 px-4 bg-white min-h-screen">
                <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
                    Explore Our Courses
                </h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-green-700 mb-1">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Instructor: {course.instructor}
                                </p>
                                <p className="text-sm text-gray-600 mb-4">
                                    Duration: {course.duration}
                                </p>

                                <a
                                    href={`/courses/${course.id}`}
                                    className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm hover:bg-green-700 transition"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
