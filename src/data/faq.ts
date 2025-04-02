import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Who are the ${siteDetails.siteName} mentors?`,
        answer: 'Our team consists of current students and recent graduates from Ivy League+ universities who have successfully navigated the competitive admissions process.',
    },
    {
        question: `How does your consulting process work?`,
        answer: 'We begin with an assessment of your profile, match you with a mentor specializing in your target schools, and create a personalized roadmap for your application journey.',
    },
    {
        question: 'When should I start working with you?',
        answer: 'Ideally during sophomore or junior year, though we offer specialized programs for seniors during application season. The earlier you start, the more comprehensive our support.',
    },
    {
        question: 'What makes your service different?',
        answer: 'Our mentors provide insider perspectives having recently succeeded in the current admissions landscape. We offer personalized 1:1 mentorship rather than generic counseling.',
    },
    {
        question: 'Do you help with financial aid?',
        answer: 'Yes. Our comprehensive packages include guidance on financial aid applications and scholarship opportunities.',
    },
    {
        question: 'How are sessions conducted?',
        answer: 'All mentoring sessions are conducted virtually, with documents shared securely through our client portal.',
    }
];