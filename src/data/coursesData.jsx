const courses = [
    {
        id: 1,
        title: "Foundations of Ayurveda",
        instructor: "Dr. Neha Sharma",
        duration: "4 weeks",
        price: 0,
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
        price: 499,
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
        price: 299,
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
        price: 599,
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
        price: 0,
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
        price: 499,
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
    },

    {
        id: 7,
        title: "Ayurveda for Mental Wellness",
        instructor: "Dr. Aparna Desai",
        duration: "4 weeks",
        price: 0,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        rating: 4.7,
        students: 1325,
        description:
            "Explore Ayurvedic approaches to reduce anxiety, improve focus, and restore mental harmony through herbs, routines, and meditations.",
        whatYouWillLearn: [
            "Use Ayurvedic herbs to support mental health",
            "Balance the mind using daily rituals",
            "Understand the mind-dosha connection",
            "Practice meditations for clarity and calm"
        ],
        includes: [
            "15 video lessons",
            "Daily routine planner",
            "Mind-calming techniques",
            "Free eBook"
        ],
        language: "English",
        level: "Beginner",
        modules: [
            {
                title: "Module 1: Mind & Doshas",
                lessons: [
                    { title: "How Doshas Affect Mind", duration: "9 min" },
                    { title: "Subtle Energies & Sattva", duration: "10 min" }
                ]
            },
            {
                title: "Module 2: Healing the Mind",
                lessons: [
                    { title: "Triphala & Brahmi", duration: "11 min" },
                    { title: "Guided Meditation", duration: "12 min" }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Ayurvedic Beauty Rituals",
        instructor: "Dr. Kavitha Menon",
        duration: "3 weeks",
        price: 349,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
        rating: 4.6,
        students: 940,
        description:
            "Unlock glowing skin and healthy hair with ancient beauty secrets of Ayurveda using herbal masks, oils, and seasonal practices.",
        whatYouWillLearn: [
            "DIY Ayurvedic skincare routines",
            "Hair oils and natural treatments",
            "Detox techniques for radiant skin",
            "Secrets of inner beauty through diet"
        ],
        includes: [
            "Skincare recipe book",
            "Video guides",
            "Oil massage tutorials",
            "Free consultation invite"
        ],
        language: "English",
        level: "All levels",
        modules: [
            {
                title: "Module 1: Outer Radiance",
                lessons: [
                    { title: "Face & Body Packs", duration: "8 min" },
                    { title: "Seasonal Skin Rituals", duration: "9 min" }
                ]
            },
            {
                title: "Module 2: Inner Glow",
                lessons: [
                    { title: "Foods for Beauty", duration: "10 min" },
                    { title: "Oil Pulling & Massage", duration: "12 min" }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Ayurvedic Cooking Masterclass",
        instructor: "Chef Sandeep Raj",
        duration: "5 weeks",
        price: 499,
        image: "https://images.unsplash.com/photo-1607013251379-2e4a29b19f8d",
        rating: 4.9,
        students: 1620,
        description:
            "Learn how to cook nourishing Ayurvedic meals for every dosha using spices, ghee, and sattvic ingredients that heal from within.",
        whatYouWillLearn: [
            "Cook tridoshic meals with balance",
            "Use healing spices like turmeric, cumin",
            "Create sattvic desserts and teas",
            "Understand food energy & digestion"
        ],
        includes: [
            "Recipe PDFs",
            "Step-by-step cooking videos",
            "Grocery shopping list",
            "Access to chef Q&A"
        ],
        language: "English",
        level: "Intermediate",
        modules: [
            {
                title: "Module 1: Kitchen Setup",
                lessons: [
                    { title: "Spices & Essentials", duration: "10 min" },
                    { title: "Meal Prepping Basics", duration: "9 min" }
                ]
            },
            {
                title: "Module 2: Healing Recipes",
                lessons: [
                    { title: "Vata Balancing Meals", duration: "12 min" },
                    { title: "Sattvic Desserts", duration: "11 min" }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Ayurveda for Women's Health",
        instructor: "Dr. Shruthi Nair",
        duration: "4 weeks",
        price: 0,
        image: "https://images.unsplash.com/photo-1552089123-2a03a1c8bb80",
        rating: 4.8,
        students: 1088,
        description:
            "Support hormonal balance, fertility, and menstrual wellness through tailored Ayurvedic herbs, nutrition, and routines.",
        whatYouWillLearn: [
            "Balance hormones naturally",
            "Support reproductive health",
            "Manage PMS with herbs",
            "Build a nourishing daily routine"
        ],
        includes: [
            "PDF hormone charts",
            "Video walkthroughs",
            "Ayurvedic detox plan",
            "Lifetime access"
        ],
        language: "English",
        level: "Beginner",
        modules: [
            {
                title: "Module 1: Cycle Wisdom",
                lessons: [
                    { title: "Phases of Menstrual Cycle", duration: "9 min" },
                    { title: "Food for Hormones", duration: "8 min" }
                ]
            },
            {
                title: "Module 2: Women's Tonics",
                lessons: [
                    { title: "Shatavari & Ashoka", duration: "10 min" },
                    { title: "Stress & Hormone Link", duration: "9 min" }
                ]
            }
        ]
    },
    {
        id: 11,
        title: "Dinacharya: Ayurvedic Daily Routine",
        instructor: "Dr. Manoj Krishnan",
        duration: "2 weeks",
        price: 199,
        image: "https://images.unsplash.com/photo-1576092768243-bc3c0b938f52",
        rating: 4.5,
        students: 780,
        description:
            "Build an Ayurvedic morning-to-evening schedule that aligns your body clock with nature for better sleep, energy, and digestion.",
        whatYouWillLearn: [
            "Design a morning routine (Dinacharya)",
            "Sleep & wake cycle optimization",
            "Detox and cleansing habits",
            "Enhance digestion and clarity"
        ],
        includes: [
            "Printable routine template",
            "Audio guidance",
            "Self-assessment quiz",
            "Access to discussion board"
        ],
        language: "English",
        level: "All levels",
        modules: [
            {
                title: "Module 1: Morning Rituals",
                lessons: [
                    { title: "Oil Pulling & Tongue Scraping", duration: "7 min" },
                    { title: "Meditation & Journaling", duration: "10 min" }
                ]
            },
            {
                title: "Module 2: Evening Wind-down",
                lessons: [
                    { title: "Food Timing Tips", duration: "8 min" },
                    { title: "Nighttime Calm Practices", duration: "9 min" }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "Ayurvedic First Aid Essentials",
        instructor: "Dr. Rohit Pillai",
        duration: "1 week",
        price: 149,
        image: "https://images.unsplash.com/photo-1597764699510-1eec56e9ecf7",
        rating: 4.6,
        students: 654,
        description:
            "Get equipped with fast and effective Ayurvedic remedies for burns, cuts, fevers, indigestion, and everyday emergencies.",
        whatYouWillLearn: [
            "Remedies for cuts, bruises, headaches",
            "Natural fever relief with herbs",
            "Digestive emergencies & solutions",
            "Make your own herbal first-aid box"
        ],
        includes: [
            "Printable first aid cheat sheet",
            "Video lessons",
            "Herb guidebook",
            "Live Q&A access"
        ],
        language: "English",
        level: "All levels",
        modules: [
            {
                title: "Module 1: Quick Relief",
                lessons: [
                    { title: "Cuts, Wounds, and Burns", duration: "8 min" },
                    { title: "Fever & Cough Relief", duration: "10 min" }
                ]
            },
            {
                title: "Module 2: Emergency Kit",
                lessons: [
                    { title: "What to Include", duration: "9 min" },
                    { title: "When to Use What", duration: "10 min" }
                ]
            }
        ]
    }
];

export default courses;
