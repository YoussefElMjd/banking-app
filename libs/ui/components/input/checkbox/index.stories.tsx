import React, { useState } from 'react';
import Button from '.';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import Icon from '../../../contents/icon/index';
import COLORS from '../../../constant/colors';
import { HStack, Text } from '@chakra-ui/react';
import Checkbox from '.';
export default {
    title: 'Components/Inputs/Checkbox',
    component: Checkbox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    const [isChecked, setIsChecked] = useState(false);
    function handleToggleIsClicked() {
        setIsChecked(!isChecked);
    }
    return (
        <Checkbox isChecked={isChecked} handleOnClick={handleToggleIsClicked} />
    );
};

export const CheckboxOn = Template.bind({});
