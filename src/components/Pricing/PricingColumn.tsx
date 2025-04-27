import { HiCheck } from "react-icons/hi";
import { IPricing } from "@/types";

type PricingColumnProps = {
    tier: IPricing;
    highlight?: boolean;
    tierColor: string;
    tierName: string;
}

const PricingColumn: React.FC<PricingColumnProps> = ({ tier, highlight, tierColor, tierName }) => {
    const price = tier.monthlyPrice;
    
    return (
        <div className="relative">
            {/* Most Popular tag */}
            {highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center">
                    <div className="text-xs font-medium bg-primary text-white rounded-full py-1 px-3 shadow-sm">
                        Most Popular
                    </div>
                </div>
            )}
            
            <div className={`relative flex flex-col rounded-xl shadow-sm mt-4 overflow-hidden ${highlight ? 'bg-primary/[0.08] border-2 border-primary/30' : 'bg-white border border-slate-200'}`}>
                {/* Tier color bar at top */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${tierColor}`}></div>
                
                <div className="p-5 md:p-6 flex-grow">
                    {/* Header with tier name */}
                    <div className="mb-4">
                        <span className="text-xs uppercase font-semibold tracking-wider mb-1 inline-block rounded px-2 py-0.5 bg-slate-100">{tierName}</span>
                        <h3 className="text-lg font-semibold text-heading mb-1 relative inline-block">
                            {tier.name}
                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/20 transform skew-x-12"></div>
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
                                <HiCheck className={`h-4 w-4 ${highlight ? 'text-primary' : 'text-accent'} shrink-0 mt-0.5 mr-2`} />
                                <span className="text-sm text-muted">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Button */}
                <div className={`p-5 md:p-6 border-t ${highlight ? 'border-primary/20' : 'border-slate-200'}`}>
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