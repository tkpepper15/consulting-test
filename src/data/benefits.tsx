import { FiEdit, FiFileText, FiMessageSquare, FiStar, FiUsers, FiCheckCircle } from "react-icons/fi";
import { FaUniversity } from "react-icons/fa";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Application Strategy",
        description: "Personalized roadmap for your entire college application journey with deadline management and strategic planning.",
        image: "",
        features: [
            "Timeline Planning: Custom schedule for deadlines and requirements",
            "School Selection: Data-driven approach to finding ideal college matches",
            "Application Management: Organized tracking of all application components"
        ]
    },
    {
        title: "Essay Development",
        description: "Expert guidance to craft compelling narratives that showcase your unique voice and strengths to admissions officers.",
        image: "",
        features: [
            "Personal Statement: Craft an authentic, memorable narrative",
            "Supplemental Essays: Tailored responses showing fit with each school",
            "Activity Descriptions: Highlight leadership and impact in extracurriculars"
        ]
    },
    {
        title: "Interview Preparation",
        description: "Build confidence with comprehensive interview training from mentors who understand admissions committees.",
        image: "",
        features: [
            "Mock Interviews: Practice with experienced mentors in realistic settings",
            "Response Techniques: Strategic approaches to highlight strengths",
            "Question Preparation: Develop thoughtful questions showing genuine interest"
        ]
    }
]