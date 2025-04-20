const userInfo = {
    avatar: require('../../public/images/profile2.jpg'),
    name: "Nguyen Hai Cuong",
    phone: "0366.189.687 - 0925.521.115",
    email: 'cuongnguyen.work8797@gmail.com',
    location: 'Da Nang City',
    title: "Full Stack Developer",
    socials: [
        { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../../public/icons/icons-facebook.svg') },
        { href: "https://www.instagram.com/cuong08071997/", icon: require('../../public/icons/icons-instagram.svg') },
        { href: "https://www.linkedin.com/in/cuong-nguyen-b2a5a11b4/", icon: require('../../public/icons/icons-linkedin.svg') },
        { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../../public/icons/icons-twitter.svg') }
    ],

    languages: {
        title: "Languages",
        listItems: [
            { label: "Vietnameses", percent: 90 },
            { label: "English", percent: 70 }
        ]
    },

    skills: {
        title: "Skills",
        listItems: [
            { label: "PHP", percent: 90 },
            { label: "Laravel", percent: 90 },
            { label: "NodeJS", percent: 90 },
            { label: "NestJS", percent: 90},
            { label: "React", percent: 85 },
            { label: "NextJS", percent: 85 },
            { label: "GCP", percent: 85 },
            { label: "AWS", percent: 85 },
            { label: "Redux", percent: 75 },
            { label: "CSS/SCSS", percent: 75 },
            { label: "Java", percent: 70 },
        ]
    },
    description: {
        primaryTitle: `I'm Cuong Nguyen`,
        position: 'Full-Stack Developer',
        introduction: `As a software engineer with 5 years of experience in many languages such as PHP, Laravel, NodeJS, NestJS, React JS, etc., 
        I want to improve my work knowledge and maximize my capabilities to bring quality products and the best performance in my work.`
    },
    educations: {
        title: "Education",
        educations: [
            {
                title: "Master's degree",
                time: "2021 - 2023",
                university: "Academy Of CryptographyTechniques",
                major: "Information Security"
            },
            {
                title: "Engineer's degree",
                time: "2015 - 2020",
                university: "Academy Of Cryptography Techniques",
                major: "Information Security"
            }
        ]
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
    }
}

export default userInfo;