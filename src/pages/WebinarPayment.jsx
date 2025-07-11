import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function WebinarPayment() {
    const [, navigate] = useLocation();

    const handlePayment = () => {
        // Simulate success — later integrate Razorpay etc.
        setTimeout(() => {
            navigate("/webinar/confirmation");
        }, 1000);
    };

    return (
        <section className="min-h-screen bg-[#f4f9f1] dark:bg-[#121a13] flex items-center justify-center py-20 px-6">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-[#1e2a1e] p-10 rounded-2xl shadow-2xl w-full max-w-md border border-[#d5e4d0] dark:border-[#355234]"
            >
                <h2 className="text-2xl font-bold mb-4 text-center text-[#6b8e23] dark:text-[#b5e9a3]">
                    Confirm Your Spot 🌿
                </h2>

                <p className="text-center text-[#4c453a] dark:text-[#d4c7b4] mb-6">
                    To join the live Ayurveda webinar, please complete the payment below.
                </p>

                {/* Payment Card */}
                <div className="bg-[#eef8e8] dark:bg-[#223322] p-6 rounded-xl mb-6 border border-[#cbe6bd] dark:border-[#446944]">
                    <div className="flex justify-between mb-2 text-[#2f3f2f] dark:text-[#eae2cf] font-medium">
                        <span>Webinar Access</span>
                        <span>₹199</span>
                    </div>
                    <div className="text-sm text-[#5a5a5a] dark:text-[#bcbcbc]">Includes all access to the upcoming live session + recording link</div>
                </div>

                {/* Pay Button */}
                <button
                    onClick={handlePayment}
                    className="w-full bg-[#6b8e23] hover:bg-[#567d1f] text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
                >
                    Pay ₹199 Now
                </button>
            </motion.div>
        </section>
    );
}
