import React from 'react';
import LeftMenu from '@/components/LeftMenu';

export default {
  title: 'Components/Left Menu',
  component: LeftMenu,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <LeftMenu {...args} />;


const props = {
  
}

export const Mobile = Template.bind({});

Mobile.args = props

export const Web = Template.bind({})