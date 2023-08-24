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

    return (
        <InputText
            {...args}
            onChange={setValue}
            label={'Account Name'}
            labelColor={COLORS.TextDark.T3.value}
            placeholder={'Enter Account Name'}
            bgColor={COLORS.TextDark.T25.value}
            placeholderColor={COLORS.TextDark.T3.value}
            color={COLORS.White.value}
        />
    );
};
export const Text = Template.bind({});
const TemplateNumber: ComponentStory<typeof InputText> = (args) => {
    const [value, setValue] = useState('');
    console.log(value);

    return (
        <InputText
            {...args}
            onChange={setValue}
            type={'number'}
            label={'Account Number'}
            labelColor={COLORS.TextDark.T3.value}
            placeholder={'Enter Account Number'}
            bgColor={COLORS.TextDark.T25.value}
            placeholderColor={COLORS.TextDark.T3.value}
            color={COLORS.White.value}
        />
    );
};
export const Number = TemplateNumber.bind({});
