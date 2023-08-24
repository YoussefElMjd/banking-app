import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import Card from '.';

export default {
    title: 'Contents/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Cards = Template.bind({});

Cards.args = {
    w: '50px',
    h: '50px',
    imgSrc: '/assets/images/profile.png',
};
