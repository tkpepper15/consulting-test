import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"

const childVariants = {
    offscreen: {
        opacity: 0,
        y: 10,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.4,
        }
    },
};

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex flex-col items-center mt-8 gap-3 lg:gap-5 lg:flex-row lg:items-start"
            variants={childVariants}
        >
            <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 mt-3 w-fit">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold">
                    {title}
                </h4>
                <p className="text-base text-foreground-accent">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet