import PricingColumn from "./PricingColumn";
import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    // Define tier colors for bronze, silver, gold
    const tierColors = [
        { name: "Bronze", color: "from-amber-700 to-amber-500" },
        { name: "Silver", color: "from-slate-400 to-slate-300" },
        { name: "Gold", color: "from-yellow-500 to-yellow-300" }
    ];

    return (
        <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-1/3 -right-3 w-10 h-10 bg-primary/5 rounded transform skew-x-12 -z-10"></div>
            <div className="absolute bottom-1/3 -left-3 w-10 h-10 bg-accent/5 rounded transform -skew-x-12 -z-10"></div>
            
            {/* Pricing columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-5 relative z-10 px-4 sm:px-6">
                {tiers.map((tier, index) => (
                    <div 
                        key={tier.name} 
                        className={`mx-auto w-full max-w-lg ${tier.popular ? 'lg:-mt-3 lg:-mb-3 lg:z-10' : ''}`}
                    >
                        <PricingColumn 
                            tier={tier} 
                            highlight={tier.popular}
                            tierColor={tierColors[index].color}
                            tierName={tierColors[index].name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;