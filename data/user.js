const userInfo = {
    avatar: require('../public/images/avatar2.jpg'),
    name: "Nguyen Hai Cuong",
    phone: "0366.189.687 - 0925.521.115",
    email: 'cuongnguyen.work8797@gmail.com',
    location: 'Da Nang City',
    title: "Senior Full Stack Developer",
    socials: [
        { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../public/icons/icons-facebook.svg') },
        { href: "https://www.instagram.com/cuong08071997/", icon: require('../public/icons/icons-instagram.svg') },
        { href: "https://www.linkedin.com/in/cuong-nguyen-b2a5a11b4/", icon: require('../public/icons/icons-linkedin.svg') },
        { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../public/icons/icons-twitter.svg') }
    ],

    languages: {
        title: "Languages",
        listItems: [
            { label: "Vietnameses", percent: 95 },
            { label: "English", percent: 65 }
        ]
    },

    skills: {
        title: "Skills",
        listItems: [
            { label: "PHP", percent: 90 },
            { label: "NestJS", percent: 90},
            { label: "NextJS", percent: 85 },
            { label: "C#", percent: 85 },
            { label: "DevOps", percent: 85 },
            { label: "GCP", percent: 85 },
            { label: "AWS", percent: 85 },
            { label: "CSS/SCSS", percent: 75 },
            // { label: "Java", percent: 70 },
        ]
    },
    coreSkills: {
        title: "Core Skills",
        groups: [
            {
                label: "Backend",
                tags: ["PHP", "Laravel", "Node.js", "NestJS", "C#", "CakePHP", "Yii2", ],
                primary: ["PHP", "Laravel", "Node.js", "NestJS", "C#"]
            },
            {
                label: "Frontend",
                tags: ["React.js", "Next.js",  "TypeScript", "Redux", "CSS/SCSS", "React Native"],
                primary: ["React.js", "Next.js", "TypeScript"]
            },
            {
                label: "Cloud & DevOps",
                tags: ["AWS", "GCP", "Docker", "Terraform", "GitHub Actions", "Jenkins", "AWS Lambda", "Elasticsearch"],
                primary: ["AWS", "GCP", "Docker", "Terraform", "GitHub Actions"]
            },
            {
                label: "Databases",
                tags: ["MySQL", "PostgreSQL", "Redis"],
                primary: ["MySQL", "PostgreSQL"]
            }
        ]
    },
    description: {
        primaryTitle: `I'm Cuong Nguyen`,
        position: 'Full-Stack Developer',
        introduction: `As a software engineer with more than 5 years of experience in many languages such as PHP, Laravel, NodeJS, NestJS, React JS, etc., 
        I want to improve my work knowledge and maximize my capabilities to bring quality products and the best performance in my work.`
    },
    certification: {
        title: "Certifications",
        certs: [
            {
                title: 'HackerRank',
                score: '',
                link: '',
            },
            {
                title: 'IELTS',
                score: '',
                link: '',
            },
            {
                title: 'AWS',
                score: '',
                link: '',
            }
        ]
    },

    education: {
        title: "Education",
        educations: [
             {
                degree: "Master of Information Security",
                institution: "Academy of Cryptography Techniques",
                location: "TP HCM, Vietnam",
                period: "2020 - 2022",
                gpa: "8.5/10.0",
                description: "Specialized in Mathematics and Computer Science. Active member of the programming club.",
                logo: "/icons/logo_actvn.jpeg" // You can replace with actual institution logo
            },
            {
                degree: "Bachelor of Information Security",
                institution: "Academy of Cryptography Techniques",
                location: "TP HCM, Vietnam",
                period: "2015 - 2020",
                gpa: "3.6/4.0",
                description: "Focused on Software Engineering, Data Structures, Algorithms, and Web Development. Completed capstone project on Full-Stack E-commerce Platform.",
                logo: "/icons/logo_actvn.jpeg" // You can replace with actual institution logo
            },
           
        ]
    }
}

export default userInfo;
