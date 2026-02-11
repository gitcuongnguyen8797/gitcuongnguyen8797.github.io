import React from 'react';
import EducationList from '../components/EducationList';

export default {
    title: 'Components/EducationList',
    component: EducationList,
    argTypes: {
        title: { control: 'text' },
    },
};

const Template = (args) => <EducationList {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Education",
    educations: [
        {
            degree: "Bachelor of Computer Science",
            institution: "University of Science and Technology",
            location: "Da Nang, Vietnam",
            period: "2015 - 2019",
            gpa: "3.6/4.0",
            description: "Focused on Software Engineering, Data Structures, Algorithms, and Web Development. Completed capstone project on Full-Stack E-commerce Platform."
        },
        {
            degree: "High School Diploma",
            institution: "Nguyen Hue High School",
            location: "Da Nang, Vietnam",
            period: "2012 - 2015",
            gpa: "8.5/10.0",
            description: "Specialized in Mathematics and Computer Science. Active member of the programming club."
        }
    ]
};

export const SingleEducation = Template.bind({});
SingleEducation.args = {
    title: "Education",
    educations: [
        {
            degree: "Master of Software Engineering",
            institution: "Stanford University",
            location: "California, USA",
            period: "2020 - 2022",
            gpa: "3.9/4.0",
            description: "Advanced studies in Distributed Systems, Machine Learning, and Software Architecture. Research focused on scalable web applications."
        }
    ]
};

export const WithoutGPA = Template.bind({});
WithoutGPA.args = {
    title: "Education",
    educations: [
        {
            degree: "Full Stack Web Development Bootcamp",
            institution: "Le Wagon Coding Bootcamp",
            location: "Da Nang, Vietnam",
            period: "2019",
            description: "Intensive 9-week coding bootcamp covering Ruby on Rails, JavaScript, HTML/CSS, and SQL."
        }
    ]
};

export const MultipleEducations = Template.bind({});
MultipleEducations.args = {
    title: "Education & Certifications",
    educations: [
        {
            degree: "Ph.D. in Computer Science",
            institution: "MIT",
            location: "Massachusetts, USA",
            period: "2020 - 2024",
            gpa: "4.0/4.0",
            description: "Dissertation on Advanced Machine Learning Algorithms for Natural Language Processing."
        },
        {
            degree: "Master of Science in Software Engineering",
            institution: "Carnegie Mellon University",
            location: "Pennsylvania, USA",
            period: "2018 - 2020",
            gpa: "3.9/4.0",
            description: "Specialized in distributed systems and cloud computing."
        },
        {
            degree: "Bachelor of Science in Computer Engineering",
            institution: "UC Berkeley",
            location: "California, USA",
            period: "2014 - 2018",
            gpa: "3.8/4.0",
            description: "Focus on computer architecture, algorithms, and software development."
        }
    ]
};

export const Empty = Template.bind({});
Empty.args = {
    title: "Education",
    educations: []
};
