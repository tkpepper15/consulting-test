import { useState } from "react";
import PricingColumn from "./PricingColumn";
import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    
    const toggleBillingCycle = () => {
        setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
    };
    
    return (
        <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-1/3 -right-3 w-10 h-10 bg-primary/5 rounded transform skew-x-12 -z-10"></div>
            <div className="absolute bottom-1/3 -left-3 w-10 h-10 bg-accent/5 rounded transform -skew-x-12 -z-10"></div>
            
            {/* Pricing toggle */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg shadow-inner">
                    <button 
                        onClick={toggleBillingCycle}
                        className={`relative py-2 px-4 text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-primary bg-white shadow-sm rounded-md' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Monthly
                    </button>
                    <button 
                        onClick={toggleBillingCycle}
                        className={`relative py-2 px-4 text-sm font-medium transition-colors ${billingCycle === 'yearly' ? 'text-primary bg-white shadow-sm rounded-md' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Yearly <span className="text-xs font-semibold text-green-600 ml-1">Save 16%</span>
                    </button>
                </div>
            </div>
            
            {/* Pricing columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-5 relative z-10 px-4 sm:px-6">
                {tiers.map((tier) => (
                    <div 
                        key={tier.name} 
                        className={`mx-auto w-full max-w-lg ${tier.popular ? 'lg:-mt-3 lg:-mb-3 lg:z-10' : ''}`}
                    >
                        <PricingColumn 
                            tier={tier} 
                            highlight={tier.popular} 
                            billingCycle={billingCycle} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;