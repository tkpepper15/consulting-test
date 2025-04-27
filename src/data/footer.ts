import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Expert college admissions guidance to help you get into your dream school.",
    quickLinks: [
        {
            text: "Services",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "Success Stories",
            url: "#testimonials"
        },
        {
            text: "FAQ",
            url: "#faq"
        },
        {
            text: "Contact",
            url: "#contact"
        }
    ],
    email: 'contact@uniprep.com',
    telephone: '+1 (800) 555-0123',
    socials: {
        instagram: 'https://www.instagram.com/uniprep',
        twitter: 'https://twitter.com/uniprep',
        linkedin: 'https://www.linkedin.com/company/uniprep'
    }
}