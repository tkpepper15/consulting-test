import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Introductory Session',
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: [
            'Brief overview + Q&A',
            'Personalized feedback',
            'Application strategy assessment',
            'School fit analysis',
            'One-time ONLY'
        ],
    },
    {
        name: 'Single Session',
        monthlyPrice: 75,
        yearlyPrice: 75,
        popular: true,
        features: [
            '1-hour mentoring session',
            'Offline editing before session',
            'Targeted essay review',
            'Profile strengthening',
            'Activity list optimization',
            'Personalized action plan'
        ],
    },
    {
        name: 'Comprehensive Package',
        monthlyPrice: 300,
        yearlyPrice: 300,
        features: [
            'Five 1-hour mentoring sessions',
            'Offline editing before each session',
            'Complete application review',
            'Essay development and refinement',
            'Interview preparation',
            'Scholarship application guidance',
            'Monthly check-ins and progress tracking'
        ],
    },
]