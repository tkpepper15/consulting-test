const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-lg font-medium text-center">Trusted by <span className="text-secondary">2000+</span> customers worldwide</p>
            <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
                {/* Logo placeholders instead of SVGs */}
                {['Notion', 'Stripe', 'Dropbox', 'Shopify', 'Slack'].map((name, index) => (
                    <div 
                        key={index}
                        className={`w-24 h-16 rounded flex items-center justify-center border border-gray-200 bg-primary/5 ${index % 2 === 0 ? 'animate-float' : 'animate-pulse-slow'}`}
                    >
                        <span className="font-medium text-primary/60 text-sm">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Logos