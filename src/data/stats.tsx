import { BsFillStarFill } from "react-icons/bs";
import { FaUniversity, FaUserFriends, FaAward } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "85%",
        icon: <FaUniversity size={34} className="text-blue-500" />,
        description: "Of our students are accepted to at least one of their top 3 choice schools."
    },
    {
        title: "4x",
        icon: <FiPercent size={34} className="text-purple-600" />,
        description: "Higher acceptance rate at Ivy League+ and top-10 universities compared to national average."
    },
    {
        title: "4.9",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Star rating from hundreds of satisfied students and families."
    },
    {
        title: "$12M+",
        icon: <FaAward size={34} className="text-green-600" />,
        description: "In scholarships and financial aid secured by our students in the last year."
    },
    {
        title: "500+",
        icon: <FaUserFriends size={34} className="text-indigo-500" />,
        description: "Students successfully placed at top-50 universities in the past 5 years."
    }
];