const experiencesWithoutProjects = [
    {
        company: "DiproTech Co., Ltd", workTimes: "August 2024 - June 2026",
        role: "Senior Fullstack Developer",
        skills: [ "Nestjs", "NextJS", "PHP", "C#", "CI/CD", "Terraform", "AWS", "GCP", "Docker", "Flutter", "React Native"],
        description: [
            "Led technical architecture and end-to-end delivery for 3+ simultaneous product lines as Team Leader on teams of 4–10 engineers, owning decisions from system design to production release.",
            "Established code review processes, mentoring frameworks, and engineering best practices across all projects.",
            "Architected and provisioned scalable cloud infrastructure on AWS and GCP using Terraform (IaC), supporting 6,000+ active users; automated deployments across staging and production with GitHub Actions CI/CD pipelines.",
            "Integrated GitHub Copilot to assist code reviews, identify infrastructure cost optimization opportunities, and strengthen observability across all production workloads.",
            "Partnered with pre-sales teams to design and present technical proposals, translating client requirements into actionable architecture plans and effort estimations.",
            "Enforced Test-Driven Development (TDD) across all projects, achieving >= 80% unit test coverage consistently and driving measurable improvements in code stability and maintainability."
        ]
    },
    {
        company: "SupremeTech Co., Ltd", workTimes: "February 2023 - August 2024",
        role: "Senior Fullstack Developer",
        skills: [ "Nestjs", "NextJS", "PHP", "C#", "CI/CD", "Terraform", "AWS", "GCP", "Docker", ],
        description: [
            "Designed and delivered 4 concurrent products — an internal social platform, a Starbucks JP store management system, a talent recruitment platform, and a social travel blog network.",
            "Architected multi-cloud infrastructure on AWS and GCP with Terraform, ensuring high availability, auto-scaling, and disaster recovery for all production workloads.",
            "Implemented an Elasticsearch data synchronization pipeline for the Starbucks JP project using AWS Lambda, enabling real-time product search and operational reporting.",
            "Built end-to-end CI/CD pipelines with GitHub Actions, reducing manual deployment effort, accelerating release cycles, and increasing deployment reliability.",
            "Achieved >= 80% unit test coverage across all projects through structured code reviews, developer mentoring, and enforced quality gates."
        ]
    },
    {
        company: "rakumo Co., Ltd", workTimes: "February 2021 - January 2023",
        role: "Senior Fullstack Developer",
        skills: ["React", "PHP", "Node.js", "AWS", "Docker"],
        description: [
            "Developed and maintained 2 enterprise-grade products: a Google Calendar synchronization platform, a construction task-management checklist app.",
            "Led infrastructure setup using Docker and GCP with Terraform, ensuring environment parity between development and production and streamlining onboarding for new engineers.",
            "Implemented CI/CD workflows on GitHub Actions integrated with GCP, automating testing and deployment pipelines and reducing manual release effort.",
            "Maintained >= 80% unit test coverage across all projects and authored comprehensive system design, database design, and setup documentation to enable knowledge transfer."
        ]
    },
    {
        company: "Hoa Binh Joint Stock Company", workTimes: "February 2020 - February 2021",
        role: "Junior Fullstack Developer",
        skills: ["React", "Node.js", "On-premise Server", "Docker", "Kafka", "Zookeeper"],
        description: [
            "Built an internal ERP web application that bridged company employees to SAP workflows through a modern browser interface, eliminating dependency on the SAP desktop client and improving adoption across departments.",
            "Engineered event-driven data pipelines with Kafka and Zookeeper to synchronize data from multiple source systems into a centralized data warehouse, ensuring consistency and availability for business analytics.",
            "Containerized development and production environments with Docker, standardizing deployments and reducing environment-related failures.",
            "Designed and executed SQL-based reporting dashboards for management, translating raw operational data into actionable business insights."
        ]
    },
    {
        company: "Vien Dong Investment and Trade Development Joint Stock Company", workTimes: "March 2018 - February 2020",
        role: "Fresher Fullstack Developer",
        skills: ["HTML", "CSS", "JavaScript", "Node.js", "On-Premise Server", "Laravel"],
        description: [
            "Delivered full-stack features across multiple web projects using Laravel, Node.js, and JavaScript, building a solid foundation in software architecture, coding best practices, and the full software development lifecycle.",
            "Managed on-premise server deployments and routine maintenance — including configuration, monitoring, and troubleshooting — gaining practical hands-on infrastructure experience.",
            "Collaborated with PMs and cross-functional teams to ship features on schedule, developing strong habits in agile delivery, requirement analysis, and stakeholder communication."
        ]
    }
]


const experiences = [
    // {
    //     company: "DiproTech Co., Ltd", workTimes: "August 2024 - June 2026",
    //     projects: [
    //        {
    //             projectName: "Medical Device Software – C# / WPF Project",
    //             teamSize: 8,
    //             role: 'Team Leader',
    //             workingTime: 'Aug 2024 - June 2026',
    //             description: "Developed a desktop application to control and monitor a medical eye examination machine, enabling real-time image acquisition, device operation, and examination workflow management for clinical use.",
    //             mainResponsibilities: [
    //                 'RnD computer vision to apply Eye image proccessing.',
    //                 'Manage task assignments and ensure timely project delivery.',
    //                 'Implement new features based on client requirements.',
    //                 'Review code of team members.'
    //             ],
    //             techs: ['C#', 'WPF', 'Sqlite3', 'AvaloniaUI'] 
    //        },
    //        {
    //             projectName: "E-Learning Course Platform Project",
    //             teamSize: 6,
    //             role: 'Fullstack Developer',
    //             workingTime: 'Aug 2024 - Present',
    //             description: "Maintenance and development of an e-learning course platform. The platform allows users to access a variety of online courses, track their progress, and engage with interactive learning materials.",
    //             mainResponsibilities: [
    //                 'Optimize API performance and refactoring.',
    //                 'Implement new features based on client requirements.',
    //                 'Manage server deployment and maintenance.',
    //             ],
    //             techs: ['PHP', 'CodeIgniter 3', 'MySQL', 'React Native'] 
    //        }
    //     ]
    // },
    // {
    //     company: "SupremeTech Co., Ltd", workTimes: "February 2023 - August 2024",
    //     projects: [
    //         {
    //             projectName: "Supremetech Hub",
    //             teamSize: 4,
    //             role: 'Project Techinical Leader',
    //             workingTime: 'Jun 2024 - Aug 2024',
    //             description: "Supremetech Hub is a internal social networking like Facebook and StackOverflow",
    //             mainResponsibilities: [
    //                 'Design Infrastructure has the ability to scale up.',
    //                 "Build CI/CD process using Github Actions and AWS.",
    //                 "Set up docker environment for development.",
    //                 "Ensuring the structure of the BE/FE source code is easy to maintain and scale up.",
    //                 "Write Unit Tests to coverage above 80%"
    //             ],
    //             techs: ['NestJS', 'NextJS', 'Terraform', 'AWS', 'Docker']
    //         },
    //         {
    //             projectName: "Starbucks JP project",
    //             teamSize: 15,
    //             role: 'BE Developer',
    //             workingTime: 'Feb 2023 - Aug 2024',
    //             description: "The project gives administrators the ability to manage Starbucks stores and products.",
    //             mainResponsibilities: [
    //                 "Maintenance and implement new features Backend project.",
    //                 "Writing unit tests to coverage above 80%.",
    //                 "Implement the synchronizing data system of Starbucks to Elasticsearch using AWS Lambda."
    //             ],
    //             techs: ['Laravel 8', 'AWS Lambda', 'NodeJS']
    //         },
    //         {
    //             projectName: "Talenten Project",
    //             teamSize: 10,
    //             role: 'Project Techinical Leader',
    //             workingTime: 'Feb 2023 - Jul 2023',
    //             description: "Talenten is a project to connect candidates and recruiters together. It provides resources for hiring and finding jobs.",
    //             mainResponsibilities: [
    //                 'Design Infrastructure has the ability to scale up.',
    //                 "Build CI/CD process using Github Actions and GCP.",
    //                 "Set up docker environment for development.",
    //                 "Ensuring the structure of the BE/FE source code is easy to maintain and scale up.",
    //                 "Write Unit Tests to coverage above 80%"
    //             ],
    //             techs: ['NestJS', 'NextJS', 'Terraform', 'GCP', 'Docker']
    //         },
    //         {
    //             projectName: "Notabi Graphy",
    //             teamSize: 14,
    //             workingTime: 'Nov 2023 - Feb 2024',
    //             role: 'BE Developer',
    //             description: "Notabi Graphy is a social traveling network that users can upload and write blogs on.",
    //             mainResponsibilities: [
    //                 "Maintenance and implement new APIs",
    //                 "Writing unit tests to coverage above 80%",
    //             ],
    //             techs: ['NestJS', 'AWS', 'NextJS']
    //         }
    //     ],
    // },
    // {
    //     company: "rakumo Co., Ltd", workTimes: "November 2021 - January 2023",
    //     projects: [
    //         {
    //             projectName: "KoteiCalendar Project",
    //             workingTime: 'November 2021 - January 2023',
    //             role: 'Senior Fullstack Developer',
    //             teamSize: 4,
    //             description: `Kotei is a project for synchronizing data from master data system which uses cron job in Laravel and Google APIs. It make sure all of Calendar's events have been added into Calendar to workers can see tasks of theirs in that day.`,
    //             mainResponsibilities: [
    //                 "Implement Architecture of Project using Laravel Framework version 8",
    //                 "Implement new features",
    //                 "Set up Docker environment for development and deployment",
    //                 "Writing document for System Design, Database Design, Setup Document",
    //                 "Set up CI/CD on Github Actions and Google Cloud Platform",
    //                 "Write Unit Test and make sure coverage above 80%",
    //             ],
    //             techs: ["Laravel 8", "GCP", "Terraform", "Docker"]
    //         },
    //         {
    //             projectName: "CheckApp Project",
    //             workingTime: 'November 2021 - January 2023',
    //             role: 'Senior Fullstack Developer',
    //             teamSize: 4,
    //             description: `Check App is a project for workers can view and checklist all tasks such as doing, done, etc in a building process. On other hands, as a manager they also can view and follow progress and manage documents.`,
    //             mainResponsibilities: [
    //                 "Maintenance APIs, UI using CakePHP version 3",
    //                 "Set up Docker environment for development and deployment",
    //                 "Set up CI/CD on Github Actions and Google Cloud Platform",
    //                 "Write Unit Test and make sure coverage above 80%",
    //                 "Refactor source code"
    //             ],
    //             techs: ["Laravel 8", "GCP", "Terraform", "Docker"]
    //         },
    //         {
    //             projectName: "HiWorker Project",
    //             workingTime: 'November 2021 - January 2023',
    //             role: 'BE Developer',
    //             teamSize: 4,
    //             description: `The project is an application that allows users to hire workers near them based on their location as a seeder role. On the other hand, as a worker, they can also find jobs near them.`,
    //             mainResponsibilities: [
    //                 "Implement Architecture of Project using Java Spring Framework",
    //                 "Implement new features",
    //                 "Set up Docker environment for development and deployment",
    //                 "Writing document for System Design, Database Design, Setup Document"
    //             ],
    //             techs: ["Java", "Spring", "Jenkins", "AWS"]
    //         },

    //     ]
    // },
    // {
    //     company: "Golden Owl Consulting Company", workTimes: "February 2021 - November 2021",
    //     projects: [
    //         {
    //             projectName: "IPoker Project",
    //             teamSize: 7,
    //             workingTime: "February 2021 - November 2021",
    //             role: 'BE Developer',
    //             description: `iPoker is an app for online poker players.There are about 8 games in the iPoker app and are builton the finest of features, UX properties, and motionnuances to reveal the best of digital gaming experience.`,
    //             mainResponsibilities: [
    //                 "Implement UI to Game",
    //                 "Maintenance APIs, UI"
    //             ],
    //             techs: ["JS", "React", "AWS"]
    //         },
    //         {
    //             projectName: "GIG Project",
    //             teamSize: 4,
    //             description: `GIG is UK's largest app for employees tofind part time shift work and for employers to hireworkers`,
    //             mainResponsibilities: [
    //                 "Maintenance APIs, UI",
    //                 "Implement new features"
    //             ],
    //             techs: ["Laravel 7", "ReactJS", "React Native", "AWS"]
    //         },
    //         {
    //             projectName: "AURORA SPECIALIST",
    //             teamSize: 4,
    //             description: `Aurora is an admin platform that offerspractice managers,
    //             specialists, employees working inAustralian hospitals and clinics the ability to
    //             bookappointments for patients, save medical records, sendand receive emails
    //             from the stakeholders, do billing,etc.`,
    //             mainResponsibilities: [
    //                 "Maintenance APIs, UI",
    //                 "Implement new features"
    //             ],
    //             techs: ["Yii2", "PosgreSQL"]
    //         },
    //     ]
    // },
    // {
    //     company: "Hoa Binh Joint Stock Company", workTimes: "February 2020 - February 2021",
    //     projects: [
    //         {
    //             projectName: "Internal ERP Web Application",
    //             workingTime: 'February 2020 - February 2021',
    //             role: 'Junior Fullstack Developer',
    //             teamSize: 4,
    //             description: `The project is a web application that provides a UI that allows users in its company to use features in SAP without going through the SAP Desktop Application.`,
    //             mainResponsibilities: [
    //                 "Implement new features",
    //                 "Set up Docker environment for development and deployment",
    //                 "Set up CI/CD on Github Actions and Google Cloud Platform"
    //             ],
    //             techs: ["Node JS", "React", "Docker"]
    //         }

    //     ]
    // },
    // {
    //     company: "Vien Dong Investment and Trade Development Joint Stock Company", workTimes: "March 2018 - February 2020",
    //     projects: [
    //         {
    //             projectName: "Internal ERP Web Application",
    //             workingTime: 'March 2018 - February 2020',
    //             role: "Fresher BE Developer",
    //             teamSize: 4,
    //             description: `The project is a Web Application about ERP includes: HR Management, KPI, Performance Rank Management,etc. `,
    //             mainResponsibilities: [
    //                 "Implement new features from scratch",
    //                 "Setup Development Environment",
    //                 "Deploy on premise with private network company",
    //             ],
    //             techs: ["Laravel", "Node JS", "React"]
    //         }

    //     ]
    // },
]

export { experiencesWithoutProjects };
export default experiences;
