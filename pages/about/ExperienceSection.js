import React from "react";

const experiences = [
    {
        company: "rakumo Co., Ltd", workTimes: "Feburay 2021 - Present",
        projects: [
            {
                projectName: "KoteiCalendar Project",
                teamSize: 4,
                description: `Kotei is a project for synchronizing data from master data system which uses cron job in Laravel and Google APIs. It make sure all of Calendar's events have been added into Calendar to workers can see tasks of theirs in that day.`,
                mainResponsibilities: [
                    "Implement Architecture of Project using Laravel Framework version 8",
                    "Implement new features",
                    "Set up Docker environment for development and deployment",
                    "Set up CI/CD on Github Actions and Google Cloud Platform"
                ],
                techs: ["Laravel 8", "GCP", "AWS", "Terraform", "Docker"]
            },
            {
                projectName: "CheckApp Project",
                teamSize: 4,
                description: `Check App is a project for workers can view and checklist all tasks such as doing, done, etc in a building process. On other hands, as a manager they also can view and follow progress and manage documents.`,
                mainResponsibilities: [
                    "Maintenance APIs, UI using CakePHP version 3",
                    "Set up Docker environment for development and deployment",
                    "Set up CI/CD on Github Actions and Google Cloud Platform"
                ]
            },
            {
                projectName: "HiWorker Project",
                teamSize: 4,
                description: `The project is an application that allows users to hire workers near them based on their location as a seeder role. On the other hand, as a worker, they can also find jobs near them.`,
                mainResponsibilities: [
                    "Implement Architecture of Project using Java Spring Framework",
                    "Implement new features",
                    "Set up Docker environment for development and deployment"
                ],
                techs: ["Java", "Spring", "Jenkins", "AWS"]
            },

        ]
    },
    {
        company: "Golden Owl Consulting Company", workTimes: "February 2021 - February 2022",
        projects: [
            {
                projectName: "IPoker Project",
                teamSize: 7,
                description: `iPoker is an app for online poker players.There are about 8 games in the iPoker app and are builton the finest of features, UX properties, and motionnuances to reveal the best of digital gaming experience.`,
                mainResponsibilities: [
                    "Implement UI to Game",
                    "Maintenance APIs, UI"
                ],
                techs: ["Java", "React", "AWS"]
            },
            {
                projectName: "GIG Project",
                teamSize: 4,
                description: `GIG is UK's largest app for employees tofind part time shift work and for employers to hireworkers`,
                mainResponsibilities: [
                    "Maintenance APIs, UI",
                    "Implement new features"
                ],
                techs: ["Laravel 7", "ReactJS", "React Native", "AWS"]
            },
            {
                projectName: "AURORA SPECIALIST",
                teamSize: 4,
                description: `Aurora is an admin platform that offerspractice managers,
                specialists, employees working inAustralian hospitals and clinics the ability to
                bookappointments for patients, save medical records, sendand receive emails
                from the stakeholders, do billing,etc.`,
                mainResponsibilities: [
                    "Maintenance APIs, UI",
                    "Implement new features"
                ],
                techs: ["Yii2", "PosgreSQL"]
            },
        ]
    },
    {
        company: "Hoa Binh Joint Stock Company", workTimes: "February 2020 - February 2021",
        projects: [
            {
                projectName: "Internal ERP Web Application",
                teamSize: 4,
                description: `The project is a web application that provides a UI that allows users in its company to use features in SAP without going through the SAP Desktop Application.`,
                mainResponsibilities: [
                    "Implement new features",
                    "Set up Docker environment for development and deployment",
                    "Set up CI/CD on Github Actions and Google Cloud Platform"
                ],
                techs: ["Node JS", "React", "Docker"]
            }

        ]
    },
    {
        company: "Vien Dong Investment and Trade Development Joint Stock Company", workTimes: "March 2018 - February 2020",
        projects: [
            {
                projectName: "Internal ERP Web Application",
                teamSize: 4,
                description: `The project is a web application that provides a UI that allows users in its company to use features in SAP without going through the SAP Desktop Application.`,
                mainResponsibilities: [
                    "Implement new features",
                    "Set up Docker environment for development and deployment",
                    "Set up CI/CD on Github Actions and Google Cloud Platform"
                ],
                techs: ["Node JS", "React", "Docker"]
            }

        ]
    },
]


const ExperienceItem = ({ projectName, description, teamSize, mainResponsibilities, techs = [] }) => (
    <div className="experience-item">
        <h5 className="experience-item__title">{projectName}</h5>
        <div className="">
            <ul className="tag-skill">
                {techs.map((value, index) => <li key={index} className="tag-skill__label txt--white">{value}</li>)}
            </ul>
        </div>
        <div className="experience-item__content">
            <p> Description: {description} </p>
            <p>Team size: {teamSize}</p>
            <span>Main responsibilities:</span>
            <ul> {mainResponsibilities.map((value, index) => <li key={index}> - {value} </li>)} </ul>
        </div>
    </div>
);


const ListExperiences = () => {
    return (
        <div className="card mt-3">
            <div className="card-body">
                {
                    experiences.map((value, index) => (
                        <div key={index}>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <h5>{value.company}</h5>
                                    <span className="txt--muted">{value.workTimes}</span>
                                </div>
                                <div className="col-8"> {value.projects.map((value, index) => <ExperienceItem key={index} {...value} />)} </div>
                            </div>
                            <hr style={{ opacity: 0.15 }} />
                        </div>
                    ))
                }
            </div>
        </div>
    )

};


export default function ExperienceSection() {
    return (
        <div className="row d-flex justify-content-center">
            <h1 className="text-center">Experiences</h1>
            <p className="text-center text">Janurary 2018 - Present </p>
            <div className="col-12"><ListExperiences /></div>
        </div>
    )
}