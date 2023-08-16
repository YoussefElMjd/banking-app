import React, { useState } from 'react';
import Select from '.';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import Icon from '../../../contents/icon/index';
import COLORS from '../../../constant/colors';
import { Option } from './type';
export default {
    title: 'Components/Inputs/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => {
    const [selectedValue, setSelectedValue] = useState<string>('This Month');
    const options: Option[] = [
        { value: 'This Month', label: 'This Month' },
        { value: 'Last 30 Days', label: 'Last 30 Days' },
        { value: 'Last Year', label: 'Last Year' },
        { value: 'Last Week', label: 'Last Week' },
    ];
    return (
        <Select
            bg={COLORS.Secondary.T15.value}
            endEnhancer={<Icon name='arrowDown' />}
            w='198px'
            h='32px'
            selectedValue={selectedValue}
            options={options}
            changeSelectedValue={setSelectedValue}
        />
    );
};
export const SelectClassic = Template.bind({});
