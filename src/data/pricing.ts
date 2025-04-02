import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Essential',
        monthlyPrice: 79,
        yearlyPrice: 799,
        features: [
            'Common App strategy',
            'Personal statement review',
            '2 supplemental essays',
            'Mock interview',
            'College list (10 schools)',
            'Email support'
        ],
    },
    {
        name: 'Advantage',
        monthlyPrice: 149,
        yearlyPrice: 1499,
        popular: true,
        features: [
            'Complete application guidance',
            'Personal statement development',
            '5 supplemental essays',
            '2 mock interviews',
            'Resume optimization',
            'College list with fit analysis',
            'Bi-weekly strategy calls',
            'Scholarship guidance'
        ],
    },
    {
        name: 'Elite',
        monthlyPrice: 299,
        yearlyPrice: 2999,
        features: [
            'Full application management',
            'Unlimited essay support',
            'Weekly 1:1 mentoring',
            'Interview preparation',
            'Complete application review',
            'Extended college list',
            'Scholarship strategy',
            'Priority 24/7 support',
            'Decision guidance'
        ],
    },
]