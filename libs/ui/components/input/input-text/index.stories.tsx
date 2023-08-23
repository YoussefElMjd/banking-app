import React, { useState } from 'react';
import Select from '.';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import Icon from '../../../contents/icon/index';
import COLORS from '../../../constant/colors';
import { OptionType } from '../option/type';
import InputText from '.';

export default {
    title: 'Components/Inputs/InputText',
    component: InputText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => {
    const [value, setValue] = useState('');
    console.log(value);

    return <InputText {...args} onChange={setValue} />;
};
export const SelectClassic = Template.bind({});
