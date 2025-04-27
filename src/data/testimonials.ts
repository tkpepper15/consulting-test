import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Jordan S.',
        role: 'Harvard \'27',
        message: `With ${siteDetails.siteName}'s guidance, I was able to craft a compelling research narrative that helped me stand out. Their expertise was instrumental in my Harvard acceptance.`
    },
    {
        name: 'Taylor W.',
        role: 'UPenn LSM Program \'26',
        message: `The mentors at ${siteDetails.siteName} understood exactly what it takes to get into competitive dual-degree programs. Their insider perspective on UPenn's LSM was game-changing.`
    },
    {
        name: 'Avery C.',
        role: 'Duke \'27',
        message: `As a STEM student with research interests, ${siteDetails.siteName} helped me position my accomplishments effectively. I received over $200,000 in scholarship offers thanks to their guidance.`
    },
];