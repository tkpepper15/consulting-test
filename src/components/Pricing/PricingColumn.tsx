import { HiCheck } from "react-icons/hi";
import { IPricing } from "@/types";

type PricingColumnProps = {
    tier: IPricing;
    highlight?: boolean;
    tierName: string;
}

// Helper function to get tier-specific colors
const getTierColors = (tierName: string, highlight: boolean = false) => {
    switch(tierName.toLowerCase()) {
        case 'bronze':
            return {
                bg: 'bg-white',
                border: highlight ? 'border-amber-400' : 'border-amber-200',
                accent: 'bg-amber-500',
                text: 'text-amber-600',
                check: 'text-amber-500'
            };
        case 'silver':
            return {
                bg: 'bg-white',
                border: highlight ? 'border-slate-400' : 'border-slate-200',
                accent: 'bg-slate-500',
                text: 'text-slate-600',
                check: 'text-slate-500'
            };
        case 'gold':
            return {
                bg: 'bg-white',
                border: highlight ? 'border-yellow-500' : 'border-yellow-300',
                accent: 'bg-yellow-500',
                text: 'text-yellow-600',
                check: 'text-yellow-500'
            };
        default:
            return {
                bg: 'bg-white',
                border: highlight ? 'border-purple-400' : 'border-purple-200',
                accent: 'bg-purple-500',
                text: 'text-purple-600',
                check: 'text-purple-500'
            };
    }
};

const PricingColumn: React.FC<PricingColumnProps> = ({ tier, highlight, tierName }) => {
    const price = tier.monthlyPrice;
    const colors = getTierColors(tierName, highlight);
    
    return (
        <div className="relative">
            {/* Most Popular tag */}
            {highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center">
                    <div className={`text-xs font-medium ${colors.accent} text-white rounded-full py-1 px-3 shadow-sm`}>
                        Most Popular
                    </div>
                </div>
            )}
            
            <div className={`relative flex flex-col rounded-xl shadow-sm mt-4 overflow-hidden ${highlight ? `${colors.bg} border-2 ${colors.border}` : `${colors.bg} border ${colors.border}`}`}>
                {/* Accent bar at top based on tier */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${colors.accent}`}></div>
                
                <div className="p-5 md:p-6 flex-grow">
                    {/* Header with tier name */}
                    <div className="mb-4">
                        <span className={`text-xs uppercase font-semibold tracking-wider mb-1 inline-block rounded px-2 py-0.5 bg-white`}>{tierName}</span>
                        <h3 className="text-lg font-semibold text-heading mb-1 relative inline-block">
                            {tier.name}
                            <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${colors.accent}/20 transform skew-x-12`}></div>
                        </h3>
                        <p className="text-sm text-muted">{getTierDescription(tier.name)}</p>
                    </div>
                    
                    {/* Price */}
                    <div className="mt-2 mb-4">
                        <div className="flex items-baseline">
                            <span className="text-3xl font-bold text-heading">
                                ${price}
                            </span>
                            <span className="text-sm text-muted ml-2">one-time</span>
                        </div>
                    </div>
                    
                    {/* Feature list */}
                    <ul className="space-y-3 mb-5">
                        {tier.features.map((feature: string) => (
                            <li key={feature} className="flex items-start">
                                <HiCheck className={`h-4 w-4 ${colors.check} shrink-0 mt-0.5 mr-2`} />
                                <span className="text-sm text-muted">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Button */}
                <div className={`p-5 md:p-6 border-t ${highlight ? `${colors.border}` : 'border-slate-200'}`}>
                    <a 
                        href="#contact" 
                        className={`btn ${highlight ? 'btn-primary' : 'btn-secondary'} w-full`}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};

// Helper function for tier descriptions
function getTierDescription(tierName: string): string {
    switch(tierName) {
        case 'Free Consultation':
            return 'Initial guidance session';
        case 'Single Session':
            return 'Focused mentoring session';
        case 'Comprehensive Package':
            return 'Complete application support';
        default:
            return 'Application support';
    }
}

export default PricingColumn;