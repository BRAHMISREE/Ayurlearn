import { useState } from "react";
import { CheckCircle, Clock } from "lucide-react";

export default function SubscriptionPlans() {
  const [isYearly, setIsYearly] = useState(false);
  const formatPrice = (monthly, yearly) => (isYearly ? yearly : monthly);

  return (
    <section className="py-20 px-6  dark:bg-[#0b1807]  text-[#2f2f2f]">
      <h2 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-lg">
        AyurLearn Subscription Plans 🌿
      </h2>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/80 backdrop-blur-md rounded-full border border-green-300 p-1 flex gap-1 shadow-lg">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-5 py-1.5 rounded-full font-medium transition text-sm ${
              !isYearly ? "bg-green-700 text-white shadow" : "text-green-800"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-5 py-1.5 rounded-full font-medium transition text-sm ${
              isYearly ? "bg-green-700 text-white shadow" : "text-green-800"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Premium Plan */}
        <div className="relative bg-white rounded-3xl border-2 border-yellow-600 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 p-8">
          <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
            Premium
          </span>
          <h3 className="text-xl font-semibold text-yellow-800 mb-2 text-center">Ayur Pro</h3>
          <p className="text-3xl font-bold text-center text-yellow-900 mb-4">
            ₹{formatPrice("999", "9999")}/{isYearly ? "year" : "month"}
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><CheckCircle className="inline mr-2 text-green-600" />All Ayurvedic Courses</li>
            <li><Clock className="inline mr-2 text-green-600" />Weekly Live Webinars</li>
            <li><CheckCircle className="inline mr-2 text-green-600" />Personalized Test Plan</li>
            <li><CheckCircle className="inline mr-2 text-green-600" />Certificate after every course</li>
            <li><CheckCircle className="inline mr-2 text-green-600" />Lifetime community access</li>
          </ul>
          <div className="mt-6 text-center">
            <button className="bg-yellow-800 text-white px-6 py-2 rounded-full hover:bg-yellow-900 shadow transition">
              Get Ayur Pro
            </button>
          </div>
        </div>

        {/* Most Popular Plan */}
        <div className="relative bg-white rounded-3xl border-2 border-green-700 shadow-xl scale-105 z-10 ring-2 ring-green-700/20 p-8">
          <span className="absolute top-4 right-4 bg-green-700 text-white text-xs px-3 py-1 rounded-full shadow-md">
            Most Popular
          </span>
          <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">Ayur Plus</h3>
          <p className="text-3xl font-bold text-center text-green-900 mb-4">
            ₹{formatPrice("499", "4999")}/{isYearly ? "year" : "month"}
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><CheckCircle className="inline mr-2 text-green-600" />Intermediate + Basic Courses</li>
            <li><Clock className="inline mr-2 text-green-600" />Monthly Live Webinars</li>
            <li><CheckCircle className="inline mr-2 text-green-600" />Progress Tracker</li>
            <li><CheckCircle className="inline mr-2 text-green-600" />Completion Certificates</li>
          </ul>
          <div className="mt-6 text-center">
            <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 shadow transition">
              Get Ayur Plus
            </button>
          </div>
        </div>

        {/* Free Plan */}
        <div className="bg-white rounded-3xl border-2 border-green-300 shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 p-8">
          <h3 className="text-xl font-semibold text-green-700 mb-2 text-center">Ayur Free</h3>
          <p className="text-3xl font-bold text-center text-green-600 mb-4">₹0/month</p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><CheckCircle className="inline mr-2 text-green-600" />Limited Free Courses</li>
            <li><CheckCircle className="inline mr-2 text-green-600" />No Certificate/Test</li>
            <li><CheckCircle className="inline mr-2 text-green-600" />Basic Community Access</li>
            <li><CheckCircle className="inline mr-2 text-green-600" />No Webinar Access</li>
          </ul>
          <div className="mt-6 text-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 shadow transition">
              Start Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
