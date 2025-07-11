import { useParams } from "wouter";
import courses from "../data/coursesData.jsx";
import Navbar from "../components/Navbar.jsx";

export default function CourseDetails() {
    const { id } = useParams();
    const course = courses.find((c) => c.id === parseInt(id));

    if (!course)
        return (
            <p className="text-center mt-10 text-red-600">Course not found.</p>
        );

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-white px-4 py-10 md:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Left content */}
                    <div className="md:col-span-2">
                        <h1 className="text-3xl font-bold text-green-800 mb-4">
                            {course.title}
                        </h1>
                        <p className="text-gray-600 mb-2">
                            Instructor: <strong>{course.instructor}</strong>
                        </p>
                        <p className="text-gray-600 mb-6">
                            Duration: <strong>{course.duration}</strong>
                        </p>

                        <h3 className="text-xl font-semibold text-green-700 mb-2">
                            What you'll learn
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                            {course.whatYouWillLearn?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-semibold text-green-700 mb-2">
                            Description
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {course.description}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            You will explore case studies, herbal combinations, and practical
                            applications to implement Ayurveda in everyday life.
                        </p>
                    </div>

                    {/* Right sidebar */}
                    <div className="bg-green-50 border border-green-100 rounded-xl shadow p-4">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />

                        <p className="text-lg font-bold text-green-700 mb-2">
                            {course.price === 0 ? "Free" : `Price: ₹${course.price}`}
                        </p>

                        <button className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition mb-4">
                            {course.price === 0 ? "Enroll for Free" : "Buy Now"}
                        </button>

                        <p className="text-green-800 font-semibold mb-2">
                            ⭐ {course.rating} | {course.students} students enrolled
                        </p>

                        <h4 className="font-semibold text-gray-800 mb-2">
                            This course includes:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {course.includes?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


// import { useParams } from "wouter";
// import courses from "../data/coursesData.jsx";
// import Navbar from "../components/Navbar.jsx";
//
// export default function CourseDetails() {
//     const { id } = useParams();
//     const course = courses.find((c) => c.id === parseInt(id));
//
//     if (!course) return <p className="text-center mt-10 text-red-600">Course not found.</p>;
//
//     return (
// <>
//     <Navbar/>
//         <div className="min-h-screen bg-white px-4 py-10 md:px-10">
//             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//                 {/* Left content */}
//                 <div className="md:col-span-2">
//                     <h1 className="text-3xl font-bold text-green-800 mb-4">{course.title}</h1>
//                     <p className="text-gray-600 mb-2">Instructor: <strong>{course.instructor}</strong></p>
//                     <p className="text-gray-600 mb-6">Duration: <strong>{course.duration}</strong></p>
//
//                     <h3 className="text-xl font-semibold text-green-700 mb-2">What you'll learn</h3>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
//                         <li>Gain in-depth understanding of Ayurvedic principles.</li>
//                         <li>Learn natural remedies and treatments.</li>
//                         <li>Understand Ayurvedic diet & nutrition.</li>
//                         <li>Implement lifestyle changes for better wellness.</li>
//                     </ul>
//
//                     <h3 className="text-xl font-semibold text-green-700 mb-2">Description</h3>
//                     <p className="text-gray-700 leading-relaxed mb-4">
//                         This course offers a deep dive into traditional Ayurveda practices. Whether you're a beginner or looking to expand your knowledge, you'll gain valuable insights into holistic health.
//                     </p>
//                     <p className="text-gray-700 leading-relaxed">
//                         You will explore case studies, herbal combinations, and practical applications to implement Ayurveda in everyday life.
//                     </p>
//                 </div>
//
//                 {/* Right sidebar */}
//                 <div className="bg-green-50 border border-green-100 rounded-xl shadow p-4">
//                     <img
//                         src={course.image}
//                         alt={course.title}
//                         className="w-full h-48 object-cover rounded-md mb-4"
//                     />
//
//                     <button className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition mb-4">
//                         Buy Now
//                     </button>
//
//                     <p className="text-green-800 font-semibold mb-2">⭐ 4.9 | 1,762 students enrolled</p>
//
//                     <h4 className="font-semibold text-gray-800 mb-2">This course includes:</h4>
//                     <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
//                         <li>12 hours of on-demand video</li>
//                         <li>Downloadable Ayurvedic recipes</li>
//                         <li>Customized diet charts</li>
//                         <li>Access on mobile & desktop</li>
//                         <li>Certificate of completion</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
// </>
//     );
// }


