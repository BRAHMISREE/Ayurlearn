import { useState } from "react";
import { useLocation } from "wouter";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    setLocation("/dashboard");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f1f6f1] to-[#d7e3d7] dark:from-[#1a211a] dark:to-[#2d392d] px-4 transition-all duration-500">
      <div className="w-full max-w-md bg-white/90 dark:bg-[#2c2f28]/80 backdrop-blur-xl border border-[#cce3c0] dark:border-[#3c493c] rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#4f6f52] dark:text-[#c4f0c4] mb-6 drop-shadow-sm">
          Create Your Account 🌿
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-[#4f6f52] dark:text-[#cde2cd]">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl border border-[#bcd4bc] dark:border-[#4a574a] bg-white/70 dark:bg-[#1e251e] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b8e23] text-[#2c3e2c] dark:text-[#e0f1e0]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#4f6f52] dark:text-[#cde2cd]">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#bcd4bc] dark:border-[#4a574a] bg-white/70 dark:bg-[#1e251e] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b8e23] text-[#2c3e2c] dark:text-[#e0f1e0]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#4f6f52] dark:text-[#cde2cd]">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-[#bcd4bc] dark:border-[#4a574a] bg-white/70 dark:bg-[#1e251e] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b8e23] text-[#2c3e2c] dark:text-[#e0f1e0]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#4f6f52] dark:text-[#cde2cd]">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-[#bcd4bc] dark:border-[#4a574a] bg-white/70 dark:bg-[#1e251e] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b8e23] text-[#2c3e2c] dark:text-[#e0f1e0]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6b8e23] hover:bg-[#5c7d1e] text-white py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-5">
          Already have an account?{" "}
          <a href="/login" className="text-[#6b8e23] hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </section>
  );
}
