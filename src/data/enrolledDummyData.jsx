// src/data/enrolledDummyData.js

const enrolledCourses = [
    {
        id: 1,
        title: "Foundations of Ayurveda",
        instructor: "Dr. Neha Sharma",
        duration: "4 weeks",
        image: "https://alliedhealthcouncil.com/wp-content/uploads/2023/07/ayurvedic-courses-in-chennai.jpg",
        rating: 4.8,
        students: 1524,
        description:
            "Dive into the fundamental principles of Ayurveda, exploring doshas, natural balance, and lifestyle alignment for better health.",
        whatYouWillLearn: [
            "Understand the three doshas and body constitution",
            "Discover daily and seasonal routines for balance",
            "Explore Ayurvedic diagnosis and treatment principles",
            "Learn the philosophy behind Ayurvedic healing"
        ],
        includes: [
            "20 hours on-demand video",
            "Downloadable resources",
            "Access on mobile & desktop",
            "Certificate of completion"
        ],
        language: "English",
        level: "Beginner",
        modules: [
            {
                title: "Module 1: Introduction to Ayurveda",
                lessons: [
                    { title: "What is Ayurveda?", duration: "8 min" },
                    { title: "History and Origins", duration: "10 min" },
                    { title: "Core Principles of Ayurveda", duration: "12 min" }
                ]
            },
            {
                title: "Module 2: The Three Doshas",
                lessons: [
                    { title: "Understanding Vata", duration: "9 min" },
                    { title: "Understanding Pitta", duration: "11 min" },
                    { title: "Understanding Kapha", duration: "10 min" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Healing Herbs & Remedies",
        instructor: "Dr. Ravi Menon",
        duration: "6 weeks",
        image: "https://cdn.narendramodi.in/cmsuploads/0.73877400_1523541569_attachref.png",
        rating: 4.6,
        students: 1378,
        description:
            "Master the use of Ayurvedic herbs for immunity, digestion, stress relief, and common ailments with practical home applications.",
        whatYouWillLearn: [
            "Identify 25+ essential Ayurvedic herbs",
            "Formulate home remedies for common conditions",
            "Understand herb safety and dosages",
            "Use herbs for detox, immunity, and vitality"
        ],
        includes: [
            "25 hours video lessons",
            "Herb guide PDF",
            "Lifetime access",
            "Q&A with instructor"
        ],
        language: "English",
        level: "Intermediate",
        modules: [
            {
                title: "Module 1: Herbal Foundations",
                lessons: [
                    { title: "Herb Classification", duration: "9 min" },
                    { title: "Collection & Preservation", duration: "7 min" }
                ]
            },
            {
                title: "Module 2: Home Remedies",
                lessons: [
                    { title: "Digestive Tonics", duration: "10 min" },
                    { title: "Anti-Stress Blends", duration: "8 min" }
                ]
            }
        ]
    }
];

export default enrolledCourses;
