import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Alex C.',
        role: 'Harvard \'26',
        message: `${siteDetails.siteName} helped me highlight experiences I would have never thought were important. The mentorship completely transformed my application.`
    },
    {
        name: 'Sophia R.',
        role: 'Princeton \'25',
        message: `After being waitlisted, I worked with ${siteDetails.siteName} for my transfer application. Their guidance on showcasing growth in my essays made all the difference.`
    },
    {
        name: 'Jamal W.',
        role: 'UPenn \'25',
        message: `Having a current student guide me through each step made the process less intimidating and more strategic. The interview prep was invaluable.`
    },
    {
        name: 'Emma T.',
        role: 'Yale \'24',
        message: `The essay coaching I received was superb. My mentor helped me craft a narrative that stood out while remaining authentic to my experiences.`
    },
    {
        name: 'Daniel K.',
        role: 'Duke \'26',
        message: `As a first-generation college student, I had no idea where to start. ${siteDetails.siteName} provided structure and confidence throughout the entire process.`
    },
    {
        name: 'Mei L.',
        role: 'Cornell \'25',
        message: `The personalized approach to my application strategy made all the difference. They recognized strengths in my profile that other counselors missed.`
    }
];