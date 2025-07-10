import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f9f8f2] dark:bg-[#0b1807] text-[#4f6f52] dark:text-[#b2e2b2] px-6 py-14 border-t border-[#ded6c7] dark:border-[#3a342e] transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold text-[#4f6f52] dark:text-[#b2e2b2] mb-3">AyurLearn 🌿</h3>
          <p className="text-[#4f6f52] dark:text-[#c3b091] leading-relaxed">
            Learn Ayurveda the modern way. Trusted by thousands of holistic learners worldwide.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li><a href="/courses" className="hover:text-[#6b8e23] transition">Courses</a></li>
            <li><a href="/register" className="hover:text-[#6b8e23] transition">Join Now</a></li>
            <li><a href="/plans" className="hover:text-[#6b8e23] transition">Subscription Plans</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-2">Help</h4>
          <ul className="space-y-1">
            <li><a href="/faq" className="hover:text-[#6b8e23] transition">FAQs</a></li>
            <li><a href="/support" className="hover:text-[#6b8e23] transition">Support</a></li>
            <li><a href="/contact" className="hover:text-[#6b8e23] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Community with Green Icons */}
        <div>
          <h4 className="font-semibold mb-2">Community</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaDiscord className="text-[#6b8e23]" />
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6b8e23] transition"
              >
                Join our Discord
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube className="text-[#6b8e23]" />
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6b8e23] transition"
              >
                YouTube Channel
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-[#6b8e23]" />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6b8e23] transition"
              >
                Follow on Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-[#4f6f52] dark:text-[#a1b89f]">
        © {new Date().getFullYear()} AyurLearn. All rights reserved.
      </div>
    </footer>
  );
}
