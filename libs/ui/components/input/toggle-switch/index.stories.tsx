import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import ToggleSwitch from '.';
export default {
    title: 'Components/Inputs/ToggleSwitch',
    component: ToggleSwitch,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => {
    const [isSelected, setIsSelected] = useState(false);
    function handleToggleIsSelected() {
        setIsSelected(!isSelected);
    }
    return (
        <ToggleSwitch
            isSelected={isSelected}
            handleOnClick={handleToggleIsSelected}
        />
    );
};

export const SwitchOn = Template.bind({});
