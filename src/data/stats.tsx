import { BsFillStarFill } from "react-icons/bs";
import { FaUniversity, FaUserFriends, FaAward } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "100%",
        icon: <FaUniversity size={34} className="text-blue-500" />,
        description: "Success rate in Ivy League+ admissions with multiple acceptances to top universities and colleges."
    },
    {
        title: "$500k+",
        icon: <FaAward size={34} className="text-green-600" />,
        description: "In merit scholarships and awards secured by our mentors, including prestigious full-ride opportunities."
    },
    {
        title: "15+",
        icon: <FaUserFriends size={34} className="text-indigo-500" />,
        description: "Major national and international awards, including ISEF, EUCYS, Earth Prize, and Presidential Scholarships."
    },
    {
        title: "1590",
        icon: <FiPercent size={34} className="text-purple-600" />,
        description: "Perfect and near-perfect SAT scores from our mentors who understand what it takes to excel academically."
    },
    {
        title: "5",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Ivy League+ mentors with dual-degree experience in specialized programs like M&T and LSM at UPenn."
    }
];