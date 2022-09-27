const userInfo = {
    avatar: require('../../public/images/profile.jpg'),
    name: "Nguyen Hai Cuong",
    title: "Full-Stack Developer",
    socials: [
        { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../../public/icons/icons-facebook.svg') },
        { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../../public/icons/icons-instagram.svg') },
        { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../../public/icons/icons-linkedin.svg') },
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
            { label: "PHP", percent: 95 },
            { label: "Java", percent: 85 },
            { label: "React", percent: 85 },
            { label: "Redux", percent: 85 },
            { label: "Redux-Saga", percent: 85 },
            { label: "Cloud", percent: 70 },
            { label: "CSS/SCSS", percent: 70 },
        ]
    }
}

export default userInfo;