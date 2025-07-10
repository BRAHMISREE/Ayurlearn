import { useState } from "react";
import { useLocation, Link } from "wouter";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    // Placeholder auth logic
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    setLocation("/dashboard");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f1f6f1] to-[#d7e3d7] dark:from-[#1a211a] dark:to-[#2d392d] px-4 transition-colors duration-500">
      <div className="w-full max-w-md bg-white/90 dark:bg-[#2c2f28]/80 backdrop-blur-md rounded-2xl shadow-xl border border-[#cce3c0] dark:border-[#3c493c] p-8">
        <h2 className="text-3xl font-bold text-center text-[#4f6f52] dark:text-[#c4f0c4] mb-6 drop-shadow-sm">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-[#4f6f52] dark:text-[#cde2cd]">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#bcd4bc] dark:border-[#4a574a] bg-white/70 dark:bg-[#1e251e] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b8e23] text-[#2c3e2c] dark:text-[#e0f1e0] placeholder:text-gray-500 dark:placeholder:text-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#4f6f52] dark:text-[#cde2cd]">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-[#bcd4bc] dark:border-[#4a574a] bg-white/70 dark:bg-[#1e251e] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b8e23] text-[#2c3e2c] dark:text-[#e0f1e0] placeholder:text-gray-500 dark:placeholder:text-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6b8e23] hover:bg-[#5c7d1e] text-white py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-5">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#6b8e23] hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
