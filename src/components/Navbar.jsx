export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#5f7c3a]/80 to-[#4f6f52]/80 backdrop-blur-md px-6 py-4 shadow-md border-b border-[#a8c29a]/20 text-white sticky top-0 z-50 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo + Brand */}
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-wide drop-shadow-sm"
        >
          <img
            src="/logo-ayurlearn.png"
            alt="AyurLearn Logo"
            className="w-10 h-10 object-contain"
          />
          <span>
            Ayur<span className="text-[#e6f4d2]">Learn</span>
          </span>
        </a>

        {/* Right: Nav Links */}
        <div className="space-x-6 flex items-center text-sm font-medium">
          <a
            href="/login"
            className="text-white/90 hover:text-white underline-offset-4 hover:underline transition duration-200"
          >
            Login
          </a>

          <a
            href="/register"
            className="bg-white/90 hover:bg-white text-[#4f6f52] font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
