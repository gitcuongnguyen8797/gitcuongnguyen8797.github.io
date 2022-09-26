import React from 'react';
import ListProgress from '@/components/ListProgress';

export default {
  title: 'Components/List Progress',
  component: ListProgress,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <ListProgress {...args} />;


const props = {
  title: "Skills",
  listItems: [
    {label: "PHP", percent: 100},
    {label: "Java", percent: 20},
    {label: "React", percent: 30},
    {label: "System", percent: 40},
  ]
}

export const Mobile = Template.bind({});

Mobile.args = props

export const Web = Template.bind({})