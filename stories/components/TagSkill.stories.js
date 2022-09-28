import React from 'react';
import TagSkill from '@/components/TagSkill';

export default {
    title: 'Components/Tag Skills',
    component: TagSkill,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <TagSkill {...args} />;

const props = {
    skills: ["PHP", "Java", "NodeJs", "React", "Laravel", "Spring"]
}

export const Default = Template.bind({});

Default.args = props