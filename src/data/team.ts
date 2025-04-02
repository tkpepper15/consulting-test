interface TeamMember {
    name: string;
    role: string;
    education: string;
    accomplishments: string[];
}

export const teamMembers: TeamMember[] = [
    {
        name: "Sumedh",
        role: "Co-Founder & Head Mentor",
        education: "UPenn LSM Program",
        accomplishments: [
            "Life Sciences & Management Dual Degree", 
            "Wharton Leadership Fellow",
            "Helped 40+ students enter dual-degree programs",
            "Published Research in Biotech Innovation"
        ]
    },
    {
        name: "Shubhan",
        role: "Co-Founder & Strategy Director",
        education: "UPenn M&T Program",
        accomplishments: [
            "M&T (Management & Technology) Graduate",
            "Jerome Fisher Program Scholar",
            "Engineering & Business Integration Expert", 
            "Mentored 35+ STEM applicants to top schools"
        ]
    },
    {
        name: "James",
        role: "Senior Application Strategist",
        education: "Duke University",
        accomplishments: [
            "Former Duke Admissions Committee Member",
            "Robertson Scholar Alumni",
            "Perfect SAT/ACT Scores",
            "10+ Years in Elite College Counseling"
        ]
    },
    {
        name: "Nikhil",
        role: "Interview & Essay Specialist",
        education: "Harvard University",
        accomplishments: [
            "Harvard College Alumni Interviewer",
            "John Harvard Scholar",
            "Specialized in STEM Applications",
            "Helped 30+ Students Secure Merit Scholarships"
        ]
    }
]; 