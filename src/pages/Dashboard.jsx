import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import enrolledCourses from "../data/enrolledDummyData";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState("");
  const [, setLocation] = useLocation();

  const recentActivities = [
    { type: "Course Enrolled", detail: "Intro to Ayurveda", time: "2 days ago" },
    { type: "Live Webinar", detail: "Herbs for Immunity", time: "5 days ago" },
    { type: "Quiz Completed", detail: "Basics of Doshas", time: "1 week ago" },
  ];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userName = localStorage.getItem("userName") || "Ayur Student";
    const userEmail = localStorage.getItem("userEmail") || "";
    const image =
      localStorage.getItem("userImage") || "https://i.pravatar.cc/100?u=default";

    if (!isLoggedIn) {
      setLocation("/login");
    } else {
      setUser({ name: userName, email: userEmail });
      setUserImage(image);
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.clear();
    setLocation("/login");
  };

  const course = enrolledCourses[0];

  if (!user) return null;

  return (
    <section className="min-h-screen bg-[#f5f4ec]">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1
          className="text-2xl font-bold text-green-800 cursor-pointer tracking-tight"
          onClick={() => setLocation("/dashboard")}
        >
          AyurLearn
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLocation("/my-courses")}
            className="px-4 py-1.5 text-sm font-medium rounded-full border border-green-700 text-green-700 hover:bg-green-100 transition"
          >
            My Courses
          </button>

          <img
            src={userImage}
            alt="Profile"
            className="h-9 w-9 rounded-full cursor-pointer border-2 border-green-600 object-cover"
            onClick={() => setLocation("/edit-profile")}
          />

          <button
            onClick={handleLogout}
            className="px-4 py-1.5 text-sm font-medium rounded-full bg-red-600 text-white hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Welcome Section */}
      <div className="text-center py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-3">
          Welcome back, {user.name}! 🌿
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
          Continue your Ayurvedic journey—reconnect with nature, wisdom, and wellness.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-4 px-4">
        <div className="bg-green-100 text-green-800 p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold">4</h3>
          <p className="text-sm">Courses Enrolled</p>
        </div>
        <div className="bg-yellow-100 text-yellow-800 p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold">65%</h3>
          <p className="text-sm">Avg. Completion</p>
        </div>
        <div className="bg-blue-100 text-blue-800 p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold">2</h3>
          <p className="text-sm">Certificates Earned</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <h4 className="text-lg font-semibold text-green-800 mb-4">Recent Activity</h4>
        <ul className="space-y-3">
          {recentActivities.map((activity, idx) => (
            <li
              key={idx}
              className="bg-white border border-[#cde3cd] rounded-lg p-4 shadow flex justify-between items-center"
            >
              <div>
                <p className="font-medium text-[#4f6f52]">{activity.type}</p>
                <p className="text-sm text-gray-500">{activity.detail}</p>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Badges */}
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <h4 className="text-lg font-semibold text-green-800 mb-4">Your Badges</h4>
        <div className="flex gap-4 flex-wrap">
          <div className="bg-white border border-green-300 px-4 py-2 rounded-full shadow text-sm font-medium text-green-700">
            🏆 Herbalist Beginner
          </div>
          <div className="bg-white border border-yellow-300 px-4 py-2 rounded-full shadow text-sm font-medium text-yellow-800">
            🎓 Certified Ayur Enthusiast
          </div>
          <div className="bg-white border border-red-300 px-4 py-2 rounded-full shadow text-sm font-medium text-red-700">
            🔥 7-day Active Streak
          </div>
        </div>
      </div>

      {/* Enrolled Course Card */}
      {course && (
        <div className="max-w-5xl mx-auto px-4 mt-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition">
            <img
              src={course.image}
              alt={course.title}
              className="h-48 sm:h-auto sm:w-1/3 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-green-800 mb-1">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Instructor: {course.instructor}
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
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
                className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
              >
                Learn Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA - View All */}
      <div className="text-center mt-10 mb-12">
        <button
          onClick={() => setLocation("/my-courses")}
          className="px-6 py-2 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition"
        >
          View All Enrolled Courses
        </button>
      </div>
    </section>
  );
}
