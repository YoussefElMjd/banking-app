import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import ProgressBar from '.';
import Text from '../text';
import COLORS from '../../../constant/colors';
import { Box, HStack } from '@chakra-ui/react';

export default {
    title: 'Contents/ProgressBar',
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
    <ProgressBar {...args} />
);

export const Progress = Template.bind({});

Progress.args = {
    element: (
        <>
            <Text
                fontSize='14px'
                fontWeight='400'
                color={COLORS.Secondary.Light.value}
            >
                Transfer Limit
            </Text>
            <Text
                fontSize={'16px'}
                fontWeight={'500'}
                color={COLORS.Secondary.Light.value}
            >
                $ 60,000.00
            </Text>
        </>
    ),
    userLimit: 60000,
    value: 50000,
    widthBar: '150px',
};
