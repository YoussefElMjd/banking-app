import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import Radio from '.';
export default {
    title: 'Components/Inputs/Radio',
    component: Radio,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
    const [isClicked, setIsClicked] = useState(false);
    function handleToggleIsClicked() {
        setIsClicked(!isClicked);
    }
    return (
        <Radio isClicked={isClicked} handleOnClick={handleToggleIsClicked} />
    );
};

export const RadioOn = Template.bind({});
