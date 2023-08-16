import React from 'react';
import Select from '.';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import SelectOption from '.';
import COLORS from '../../../../constant/colors';

export default {
    title: 'Components/Inputs/Select/Option',
    component: SelectOption,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SelectOption>;

const Template: ComponentStory<typeof SelectOption> = (args) => (
    <SelectOption {...args} />
);

export const Option = Template.bind({});

Option.args = {
    bgColor: COLORS.Secondary.T15.value,
    w: '195px',
    h: '25px',
    value: 'This month',
    OnClick: () => {
        console.log('test');
    },
};
