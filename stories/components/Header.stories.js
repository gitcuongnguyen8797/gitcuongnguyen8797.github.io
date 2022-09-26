import React from 'react';
import Header from 'components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;
const props = {
  menuList: [
    { href: "/home", title: "Home" },
    { href: "/about", title: "About Me" },
    { href: "/Blog", title: "Blog" },
    { href: "/Contact", title: "Contact" },
  ]
}

export const Mobile = Template.bind({});

Mobile.args = props

export const Web = Template.bind({})