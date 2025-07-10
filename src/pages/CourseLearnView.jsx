import { useParams } from "wouter";
import { useState } from "react";
import courseData from "../data/coursesData.jsx"; // assuming a path
import NotFound from "./NotFound";

export default function CourseLearnView() {
    const params = useParams();
    const courseId = parseInt(params.id);
    const course = courseData.find((c) => c.id === courseId);

    const [expandedModules, setExpandedModules] = useState([]);
    const [completedTopics, setCompletedTopics] = useState([]);

    if (!course) return <NotFound />;

    const toggleModule = (index) => {
        setExpandedModules((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const toggleTopic = (topicTitle) => {
        setCompletedTopics((prev) =>
            prev.includes(topicTitle)
                ? prev.filter((t) => t !== topicTitle)
                : [...prev, topicTitle]
        );
    };

    return (
        <section className="min-h-screen bg-white flex flex-col lg:flex-row">
            {/* Video Side */}
            <div className="flex-1 p-6">
                <div className="w-full aspect-video bg-black flex items-center justify-center text-white rounded">
                    <p className="text-lg">🔒 Course Video Player (Dummy)</p>
                </div>

                <h2 className="text-2xl font-bold text-green-800 mt-6">
                    {course.title}
                </h2>

                <div className="flex gap-6 mt-6 border-b">
                    <button className="py-2 text-green-700 border-b-2 border-green-600 font-medium">
                        Overview
                    </button>
                    <button className="py-2 text-gray-600 hover:text-green-600">
                        Q&A
                    </button>
                    <button className="py-2 text-gray-600 hover:text-green-600">
                        Reviews
                    </button>
                </div>

                <div className="mt-4 text-gray-700">
                    <p>{course.description}</p>
                </div>
            </div>

            {/* Content Side */}
            <aside className="lg:w-1/3 p-6 bg-green-50">
                <h3 className="text-lg font-bold text-green-800 mb-4">
                    Course Content
                </h3>

                <div className="space-y-4">
                    {course.modules.map((mod, idx) => (
                        <div key={idx} className="border rounded-lg overflow-hidden">
                            <div
                                onClick={() => toggleModule(idx)}
                                className="bg-green-100 cursor-pointer px-4 py-2 font-semibold text-green-800"
                            >
                                {mod.title}
                            </div>

                            {expandedModules.includes(idx) && (
                                <div className="bg-white divide-y">
                                    {mod.lessons.map((topic, tIndex) => (
                                        <div
                                            key={tIndex}
                                            className="flex justify-between items-center px-4 py-2 hover:bg-green-50"
                                        >
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={completedTopics.includes(topic.title)}
                                                    onChange={() => toggleTopic(topic.title)}
                                                    className="accent-green-600"
                                                />
                                                <span
                                                    className={`${
                                                        completedTopics.includes(topic.title)
                                                            ? "line-through text-gray-500"
                                                            : "text-gray-800"
                                                    }`}
                                                >
                                                    {topic.title}
                                                </span>
                                            </label>
                                            <span className="text-sm text-gray-500">
                                                {topic.duration}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </aside>
        </section>
    );
}
