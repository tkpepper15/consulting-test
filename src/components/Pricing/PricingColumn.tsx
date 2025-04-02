import { HiCheck } from "react-icons/hi";
import { IPricing } from "@/types";

type PricingColumnProps = {
    tier: IPricing;
    highlight?: boolean;
    billingCycle: 'monthly' | 'yearly';
}

const PricingColumn: React.FC<PricingColumnProps> = ({ tier, highlight, billingCycle }) => {
    const price = billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;
    
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
                {/* Decorative elements */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${highlight ? 'bg-gradient-to-r from-primary via-primary to-accent' : 'bg-gradient-to-r from-primary/30 to-accent/30'}`}></div>
                
                <div className="p-5 md:p-6 flex-grow">
                    {/* Header */}
                    <div className="mb-4">
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
                            <span className="text-sm text-muted ml-1">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                        </div>
                        {billingCycle === 'yearly' && (
                            <div className="mt-1 text-xs text-green-600 font-medium">
                                Save ${Math.round(tier.monthlyPrice * 12 - tier.yearlyPrice)} per year
                            </div>
                        )}
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
                        href="#" 
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
        case 'Essential':
            return 'Basic application support';
        case 'Advantage':
            return 'Comprehensive guidance';
        case 'Elite':
            return 'Premium concierge service';
        default:
            return 'Application support';
    }
}

export default PricingColumn;