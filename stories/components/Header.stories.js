import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import Header from 'components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Mobile = Template.bind({});

export const Web = Template.bind({})