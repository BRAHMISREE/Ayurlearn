import { motion } from "framer-motion";

export default function WebinarForm() {
    return (
        <section className="min-h-screen bg-[#f4f9f1] dark:bg-[#121a13] flex items-center justify-center py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white dark:bg-[#1e2a1e] p-10 rounded-2xl shadow-xl w-full max-w-2xl border border-[#d5e4d0] dark:border-[#355234]"
            >
                <h2 className="text-3xl font-bold mb-6 text-[#6b8e23] dark:text-[#b5e9a3] text-center">
                    🌿 Register for the Webinar
                </h2>

                <form className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className="w-full px-4 py-3 border rounded-lg bg-[#f9fff5] dark:bg-[#263a26] border-[#bdd6b8] dark:border-[#4a6a45] focus:outline-none focus:ring-2 focus:ring-[#6b8e23]"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border rounded-lg bg-[#f9fff5] dark:bg-[#263a26] border-[#bdd6b8] dark:border-[#4a6a45] focus:outline-none focus:ring-2 focus:ring-[#6b8e23]"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="e.g. +91 98765 43210"
                            className="w-full px-4 py-3 border rounded-lg bg-[#f9fff5] dark:bg-[#263a26] border-[#bdd6b8] dark:border-[#4a6a45] focus:outline-none focus:ring-2 focus:ring-[#6b8e23]"
                        />
                    </div>

                    {/* Optional Info - You can expand this later */}
                    <div>
                        <label className="block mb-2 text-sm font-medium">Any Questions or Expectations?</label>
                        <textarea
                            rows="4"
                            placeholder="Let us know..."
                            className="w-full px-4 py-3 border rounded-lg bg-[#f9fff5] dark:bg-[#263a26] border-[#bdd6b8] dark:border-[#4a6a45] focus:outline-none focus:ring-2 focus:ring-[#6b8e23]"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#6b8e23] hover:bg-[#567d1f] text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
                    >
                        Submit Registration
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
