const courses = [
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
    },
    {
        id: 3,
        title: "Ayurvedic Nutrition",
        instructor: "Dr. Meera Iyer",
        duration: "3 weeks",
        image: "https://aatreyaayurved.com/wp-content/uploads/2021/03/experties-ayurveda-2.jpg",
        rating: 4.9,
        students: 1762,
        description:
            "Discover the Ayurvedic approach to food, digestion, and nutrition tailored to your body type for lifelong wellness.",
        whatYouWillLearn: [
            "Customize your diet by dosha type",
            "Understand Agni (digestive fire) and its importance",
            "Learn food combinations & incompatible foods",
            "Plan seasonal & sattvic meals"
        ],
        includes: [
            "12 hours video content",
            "Ayurvedic recipes",
            "Diet charts",
            "Mobile access"
        ],
        language: "English",
        level: "All levels",
        modules: [
            {
                title: "Module 1: Nutrition & Doshas",
                lessons: [
                    { title: "Basics of Ayurvedic Diet", duration: "10 min" },
                    { title: "Foods by Dosha", duration: "9 min" }
                ]
            },
            {
                title: "Module 2: Meal Planning",
                lessons: [
                    { title: "Seasonal Diet Plans", duration: "11 min" },
                    { title: "Sattvic Cooking", duration: "8 min" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Panchakarma Therapy",
        instructor: "Dr. Aakash Bhat",
        duration: "5 weeks",
        image: "https://photos.tpn.to/qe/kj/hj/ir/fit=cover/536x357.jpg",
        rating: 4.7,
        students: 1256,
        description:
            "Understand the science, preparation, and procedures of Panchakarma — Ayurveda’s deep cleansing and detoxification therapy.",
        whatYouWillLearn: [
            "Stages of Panchakarma: Purvakarma, Pradhanakarma, Paschatkarma",
            "Therapies like Vamana, Virechana, Basti, Nasya, Raktamoksha",
            "Diet and post-therapy care",
            "Contraindications and precautions"
        ],
        includes: [
            "Hands-on therapy videos",
            "Step-by-step procedure guides",
            "Access to community forum",
            "Completion certificate"
        ],
        language: "English",
        level: "Advanced",
        modules: [
            {
                title: "Module 1: Detox Basics",
                lessons: [
                    { title: "What is Panchakarma?", duration: "12 min" },
                    { title: "Detox Prep", duration: "9 min" }
                ]
            },
            {
                title: "Module 2: Key Therapies",
                lessons: [
                    { title: "Nasya Therapy", duration: "10 min" },
                    { title: "Basti Techniques", duration: "11 min" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Marma Therapy Workshop",
        instructor: "Dr. Sushmita Rao",
        duration: "2 weeks",
        image: "https://www.cghearth.com/uploads/TourismImg/20241123074206amswaswara(2).png",
        rating: 4.5,
        students: 1110,
        description:
            "Learn the ancient art of Marma point therapy to release blocked energy and promote healing through pressure point stimulation.",
        whatYouWillLearn: [
            "Locate and apply pressure to 107 Marma points",
            "Heal pain, anxiety, and fatigue naturally",
            "Blend Marma with massage & yoga",
            "Safety & technique best practices"
        ],
        includes: [
            "Live demonstration videos",
            "Marma point chart PDF",
            "Hands-on practice routines",
            "Forum support"
        ],
        language: "English",
        level: "Intermediate",
        modules: [
            {
                title: "Module 1: Marma Basics",
                lessons: [
                    { title: "What are Marma Points?", duration: "8 min" },
                    { title: "Energy Flow in the Body", duration: "10 min" }
                ]
            },
            {
                title: "Module 2: Practical Therapy",
                lessons: [
                    { title: "Hands-On Techniques", duration: "12 min" },
                    { title: "Combining Marma with Yoga", duration: "9 min" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Yoga & Ayurveda Detox",
        instructor: "Dr. Kiran Shetty",
        duration: "6 weeks",
        image: "https://www.greenpearls.com/wp-content/uploads/2015/07/2c1.jpg",
        rating: 4.8,
        students: 1894,
        description:
            "Cleanse and rejuvenate the body and mind through an integrated Yoga & Ayurvedic lifestyle program designed for all.",
        whatYouWillLearn: [
            "Practice yoga kriyas for detox",
            "Follow Ayurvedic daily routines",
            "Adopt a detox-friendly plant-based diet",
            "Use herbs and lifestyle for long-term vitality"
        ],
        includes: [
            "Daily yoga + detox plans",
            "Meal planner & recipe kit",
            "Guided meditations",
            "Instructor Q&A access"
        ],
        language: "English",
        level: "All levels",
        modules: [
            {
                title: "Module 1: Yoga Cleansing",
                lessons: [
                    { title: "Kriya Practices", duration: "10 min" },
                    { title: "Mind-Body Detox", duration: "12 min" }
                ]
            },
            {
                title: "Module 2: Diet & Lifestyle",
                lessons: [
                    { title: "Detox Diet Planning", duration: "9 min" },
                    { title: "Ayurvedic Daily Routine", duration: "10 min" }
                ]
            }
        ]
    }
];

export default courses;