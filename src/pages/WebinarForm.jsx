import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";

export default function WebinarForm() {
    const [, navigate] = useLocation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        note: "",
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("webinarUser", JSON.stringify(formData));
        navigate("/webinar/payment");
    };

    return (
        <section className="min-h-screen bg-[#f4f9f1] dark:bg-[#121a13] flex items-center justify-center py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white dark:bg-[#1e2a1e] p-10 rounded-2xl shadow-xl w-full max-w-2xl border border-[#d5e4d0] dark:border-[#355234]"
            >
                <h2 className="text-3xl font-bold mb-6 text-[#6b8e23] dark:text-[#b5e9a3] text-center">
                    🌿 Webinar Registration
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-[#2f3f2f] dark:text-[#eae2cf]">
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 border rounded-lg
                bg-[#f9fff5] dark:bg-[#1e2a1e]
                border-[#bdd6b8] dark:border-[#6f986a]
                placeholder:text-[#7a7a7a] dark:placeholder:text-[#7a7a7a]
                text-[#2f3f2f] dark:text-[#eae2cf]
                focus:outline-none focus:ring-2 focus:ring-[#6b8e23] shadow-sm"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-[#2f3f2f] dark:text-[#eae2cf]">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border rounded-lg
                bg-[#f9fff5] dark:bg-[#1e2a1e]
                border-[#bdd6b8] dark:border-[#6f986a]
                placeholder:text-[#7a7a7a] dark:placeholder:text-[#7a7a7a]
                text-[#2f3f2f] dark:text-[#eae2cf]
                focus:outline-none focus:ring-2 focus:ring-[#6b8e23] shadow-sm"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-[#2f3f2f] dark:text-[#eae2cf]">
                            Phone Number
                        </label>
                        <input
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 border rounded-lg
                bg-[#f9fff5] dark:bg-[#1e2a1e]
                border-[#bdd6b8] dark:border-[#6f986a]
                placeholder:text-[#7a7a7a] dark:placeholder:text-[#7a7a7a]
                text-[#2f3f2f] dark:text-[#eae2cf]
                focus:outline-none focus:ring-2 focus:ring-[#6b8e23] shadow-sm"
                        />
                    </div>

                    {/* Note */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-[#2f3f2f] dark:text-[#eae2cf]">
                            Anything you'd like to share?
                        </label>
                        <textarea
                            name="note"
                            rows="3"
                            value={formData.note}
                            onChange={handleChange}
                            placeholder="Type your message..."
                            className="w-full px-4 py-3 border rounded-lg
                bg-[#f9fff5] dark:bg-[#1e2a1e]
                border-[#bdd6b8] dark:border-[#6f986a]
                placeholder:text-[#7a7a7a] dark:placeholder:text-[#7a7a7a]
                text-[#2f3f2f] dark:text-[#eae2cf]
                focus:outline-none focus:ring-2 focus:ring-[#6b8e23] shadow-sm"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#6b8e23] hover:bg-[#567d1f] text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
                    >
                        Continue to Payment
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
