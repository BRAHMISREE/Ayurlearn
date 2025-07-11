import { useState } from "react";
import coursesData from "../data/coursesData";
import Navbar from "../components/Navbar.jsx";

export default function Courses() {
    const [sortBy, setSortBy] = useState("default");

    const sortedCourses = [...coursesData].sort((a, b) => {
        if (sortBy === "priceLow") return a.price - b.price;
        if (sortBy === "priceHigh") return b.price - a.price;

        if (sortBy === "durationShort") {
            const aWeeks = parseInt(a.duration);
            const bWeeks = parseInt(b.duration);
            return aWeeks - bWeeks;
        }
        if (sortBy === "durationLong") {
            const aWeeks = parseInt(a.duration);
            const bWeeks = parseInt(b.duration);
            return bWeeks - aWeeks;
        }
        return 0;
    });

    return (
        <>
            <Navbar />

            <section className="py-16 px-4 bg-white min-h-screen">
                {/* Header + Sort */}
                <div className="max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h2 className="text-3xl font-bold text-green-800 text-center sm:text-left">
                        Explore Our Courses
                    </h2>

                    {/* Sort Box with Icon */}
                    <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
                        <span className="text-gray-500 text-sm">↕</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="outline-none bg-transparent text-sm text-gray-700"
                        >
                            <option value="default">Sort By</option>
                            <option value="priceLow">Price: Low to High</option>
                            <option value="priceHigh">Price: High to Low</option>
                            <option value="durationShort">Duration: Short to Long</option>
                            <option value="durationLong">Duration: Long to Short</option>
                        </select>
                    </div>
                </div>

                {/* Course Cards */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {sortedCourses.map((course) => (
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
                                <p className="text-sm text-gray-600">
                                    Duration: {course.duration}
                                </p>
                                <p className="text-sm text-gray-700 mb-4 font-medium">
                                    {course.price === 0 ? "Free" : `₹${course.price}`}
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




// import courses from "../data/coursesData";
// import Navbar from "../components/Navbar.jsx";
//
// export default function Courses() {
//     return (
//         <>
//             <Navbar />
//
//             <section className="py-16 px-4 bg-white min-h-screen">
//                 <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
//                     Explore Our Courses
//                 </h2>
//
//                 <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//                     {courses.map((course) => (
//                         <div
//                             key={course.id}
//                             className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
//                         >
//                             <img
//                                 src={course.image}
//                                 alt={course.title}
//                                 className="h-48 w-full object-cover"
//                             />
//                             <div className="p-5">
//                                 <h3 className="text-lg font-bold text-green-700 mb-1">
//                                     {course.title}
//                                 </h3>
//                                 <p className="text-sm text-gray-600">
//                                     Instructor: {course.instructor}
//                                 </p>
//                                 <p className="text-sm text-gray-600">
//                                     Duration: {course.duration}
//                                 </p>
//                                 <p className="text-sm text-gray-700 mb-4 font-medium">
//                                     {course.price === 0 ? "Free" : `₹${course.price}`}
//                                 </p>
//                                 <a
//                                     href={`/courses/${course.id}`}
//                                     className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm hover:bg-green-700 transition"
//                                 >
//                                     View Details
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </>
//     );
// }
//
