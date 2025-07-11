import { motion } from "framer-motion";

export default function WebinarConfirmation() {
    const userData = JSON.parse(localStorage.getItem("webinarUser"));

    return (
        <section className="min-h-screen bg-[#f4f9f1] dark:bg-[#121a13] flex items-center justify-center py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-[#1e2a1e] p-10 rounded-2xl shadow-2xl w-full max-w-xl border border-[#d5e4d0] dark:border-[#355234]"
            >
                <h2 className="text-3xl font-bold mb-4 text-[#6b8e23] dark:text-[#b5e9a3] text-center">
                    🎉 You're Registered!
                </h2>

                <p className="text-center text-[#4c453a] dark:text-[#d4c7b4] mb-6">
                    Thank you {userData?.name || "Guest"} for registering for our upcoming Ayurveda webinar.
                </p>

                <div className="bg-[#eef8e8] dark:bg-[#223322] p-6 rounded-xl border border-[#cbe6bd] dark:border-[#446944] space-y-4 text-[#2f3f2f] dark:text-[#eae2cf]">
                    <div>
                        <strong>📅 Date:</strong> Sunday, July 21, 2025
                    </div>
                    <div>
                        <strong>🕓 Time:</strong> 4:00 PM – 5:30 PM IST
                    </div>
                    <div>
                        <strong>🔗 Join Link:</strong>{" "}
                        <a
                            href="https://zoom.us/sample-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2f6e32] dark:text-[#9de48c] underline"
                        >
                            Click here to join
                        </a>
                    </div>
                    <div>
                        <strong>🔒 Meeting Passcode:</strong> <code className="bg-[#d9f2d1] dark:bg-[#334d33] px-2 py-1 rounded">AYUR199</code>
                    </div>
                </div>

                <p className="mt-6 text-sm text-center text-[#5c5045] dark:text-[#bfb9ab]">
                    We'll also send a reminder to your email: <br />
                    <span className="font-medium">{userData?.email}</span>
                </p>
            </motion.div>
        </section>
    );
}
