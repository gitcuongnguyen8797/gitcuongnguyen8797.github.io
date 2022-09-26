import React from 'react';
import InformationCard from '@/components/InformationCard';

export default {
  title: 'Components/Information Card',
  component: InformationCard,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <InformationCard {...args} />;
const props = {
  avatar: require('../../public/images/profile.jpg'),
  name: "Nguyen Hai Cuong",
  title: "Full-Stack Developer",
  socials: [
    { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../../public/icons/icons-facebook.svg') },
    { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../../public/icons/icons-instagram.svg') },
    { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../../public/icons/icons-linkedin.svg') },
    { href: "https://www.facebook.com/profile.php?id=100003997881975", icon: require('../../public/icons/icons-twitter.svg') }
  ]
}

export const Mobile = Template.bind({});

Mobile.args = props

export const Web = Template.bind({})