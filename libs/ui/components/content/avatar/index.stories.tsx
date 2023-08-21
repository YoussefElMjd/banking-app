import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import Avatar from '.';

export default {
    title: 'Contents/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const NoPicture = Template.bind({});

NoPicture.args = {
    w: '50px',
    h: '50px',
    imgSrc: '/assets/images/profile.png',
};
