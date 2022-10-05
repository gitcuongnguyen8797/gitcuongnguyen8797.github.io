import React from 'react';
import Footer from '@/components/Footer';

export default {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
};


const Template = (args) => <Footer {...args} />;
const props = {}

export const Default = Template.bind({});

Default.args = props