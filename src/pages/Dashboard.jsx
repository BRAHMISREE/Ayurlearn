import { LogOut, Home, BookOpen, User } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-[#f3f9f1] dark:bg-[#1a2b1a] text-[#2e3b2e] dark:text-[#f0e8d9] transition-colors duration-500">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#d5e6d0] dark:bg-[#223122] p-6 shadow-xl flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-[#4f6f52] dark:text-[#b9e4a3] tracking-wide">
          AyurLearn 🌿
        </h1>
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <a href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#c8e3ba] dark:hover:bg-[#324a32] transition">
            <Home size={18} /> Dashboard
          </a>
          <a href="/courses" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#c8e3ba] dark:hover:bg-[#324a32] transition">
            <BookOpen size={18} /> My Courses
          </a>
          <a href="/profile" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#c8e3ba] dark:hover:bg-[#324a32] transition">
            <User size={18} /> Profile
          </a>
          <a href="/logout" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f8d7da] text-red-700 dark:hover:bg-[#472727] transition">
            <LogOut size={18} /> Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold text-[#4f6f52] mb-6">Welcome to AyurLearn 🌱</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-[#2a392a] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#6b8e23] mb-2">Course Progress</h3>
            <p className="text-sm text-[#4b4038] dark:text-[#cfbfa3]">Track how far you’ve come in your healing journey.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-[#2a392a] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#6b8e23] mb-2">Test Progress</h3>
            <p className="text-sm text-[#4b4038] dark:text-[#cfbfa3]">check your test progress here </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-[#2a392a] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-[#6b8e23] mb-2">Certificates</h3>
            <p className="text-sm text-[#4b4038] dark:text-[#cfbfa3]">Download your course completion certificates.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
