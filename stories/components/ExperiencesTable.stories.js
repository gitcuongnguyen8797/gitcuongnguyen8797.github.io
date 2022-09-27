import React from 'react';
import ExperiencesTable from '@/components/ExperiencesTable';

export default {
  title: 'Components/Experiences Table',
  component: ExperiencesTable,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <ExperiencesTable {...args} />;
const props = {
    experiences: [
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
                }   
            ]
        },
    ]
}

export const Default = Template.bind({});

Default.args = props