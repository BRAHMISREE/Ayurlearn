import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../components/Footer.jsx";
import BestCourses from "../components/BestCourses.jsx";
import ReviewSection from "../components/ReviewSection.jsx";
import WebinarSection from "../components/WebinarSection.jsx";
import FAQSection from "../components/FAQSection";
import SubscriptionPlans from "../components/SubscriptionPlans";
import WhyAyurveda from "../components/WhyAyurveda.jsx";
import MotivationSection from "../components/MotivationSection";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MotivationSection />
      <BestCourses />
      <WhyAyurveda />
      <WebinarSection />
      <SubscriptionPlans />
      <ReviewSection />
      <FAQSection />
      <Footer />
    </>
  );
}
