import React, { useState } from 'react';
import Select from '.';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import Icon from '../../../contents/icon/index';
import COLORS from '../../../constant/colors';
import { OptionType } from '../option/type';
import SearchInput from '.';
export default {
    title: 'Components/Inputs/SearchInput',
    component: SearchInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [filterValue, setFilterValue] = useState<string>('');
    const [optionsValues, setOptionsValues] = useState<OptionType[]>([
        { value: 'This Month', label: 'This Month' },
        { value: 'Last 30 Days', label: 'Last 30 Days' },
        { value: 'Last Year', label: 'Last Year' },
        { value: 'Last Week', label: 'Last Week' },
    ]);
    const options: OptionType[] = [
        { value: 'This Month', label: 'This Month' },
        { value: 'Last 30 Days', label: 'Last 30 Days' },
        { value: 'Last Year', label: 'Last Year' },
        { value: 'Last Week', label: 'Last Week' },
    ];

    function onChangeFilterInput(value: string) {
        setFilterValue(value);
        setOptionsValues(
            options.filter((option) =>
                option.value.toLowerCase().includes(value.toLowerCase()),
            ),
        );
    }

    return (
        <SearchInput
            bg={COLORS.Secondary.Light.value}
            endEnhancer={<Icon name='search' />}
            w='198px'
            h='32px'
            selectedValue={selectedValue}
            options={optionsValues}
            changeSelectedValue={setSelectedValue}
            changeFilterValue={onChangeFilterInput}
            filterValue={filterValue}
        />
    );
};
export const SelectClassic = Template.bind({});
