import enrolledCourses from "../data/enrolledDummyData";
import { useLocation } from "wouter";

export default function EnrolledCourses() {
    const [, setLocation] = useLocation();

    return (
        <section className="min-h-screen bg-green-50">
            {/* Navbar same as dashboard */}
            <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
                <h1
                    className="text-xl font-bold text-green-800 cursor-pointer"
                    onClick={() => setLocation("/dashboard")}
                >
                    AyurLearn
                </h1>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setLocation("/dashboard")}
                        className="px-4 py-1.5 text-sm font-medium rounded-full border border-green-700 text-green-700 hover:bg-green-100 transition-all"
                    >
                        Dashboard
                    </button>
                    <button
                        onClick={() => setLocation("/edit-profile")}
                        className="px-4 py-1.5 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                        Edit Profile
                    </button>
                </div>
            </header>

            {/* Title */}
            <div className="text-center py-10 px-4">
                <h2 className="text-3xl font-bold text-green-800 mb-2">
                    Your Enrolled Courses
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    Explore your ongoing courses and track your progress.
                </p>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                {enrolledCourses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            className="h-40 w-full object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-green-700">{course.title}</h3>
                            <p className="text-sm text-gray-600 mb-1">
                                Instructor: {course.instructor}
                            </p>
                            <div className="w-full bg-gray-200 h-3 rounded-full mb-2">
                                <div
                                    className="bg-green-600 h-3 rounded-full transition-all duration-500"
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">
                                Progress: {course.progress}% completed
                            </p>
                            <button
                                onClick={() => setLocation(`/course/${course.id}/learn`)}
                                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
                            >
                                Continue Learning
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Enroll More Courses */}
            <div className="text-center mt-10 mb-12">
                <button
                    onClick={() => setLocation("/courses")}
                    className="px-6 py-2 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition"
                >
                    Enroll More Courses
                </button>
            </div>
        </section>
    );
}
