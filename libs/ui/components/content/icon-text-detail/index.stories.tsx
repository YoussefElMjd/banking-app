import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import Avatar from '.';
import IconTextDetail from '.';
import Icon from '../../../contents/icon';
import { VStack } from '@chakra-ui/react';
import Text from '../text';
import COLORS from '../../../constant/colors';

export default {
    title: 'Contents/IconTextDetail',
    component: IconTextDetail,
} as ComponentMeta<typeof IconTextDetail>;

const Template: ComponentStory<typeof IconTextDetail> = (args) => (
    <IconTextDetail {...args} />
);

export const RecentTransaction = Template.bind({});

RecentTransaction.args = {
    icon: (
        <Icon
            height='48px'
            width='48px'
            name='recentBills'
            stroke={COLORS.Secondary.Light.value}
        />
    ),
    text: 'Recent\n Bills',
    detail: (
        <VStack justifyContent={'start'} alignItems={'start'} spacing='2px'>
            <Text
                fontSize='14px'
                fontWeight='500'
                color={COLORS.Secondary.Light.value}
            >
                $245 total
            </Text>
            <Text
                fontSize='12px'
                fontWeight='400'
                color={COLORS.Secondary.Light.value}
            >
                +$24 from last month
            </Text>
        </VStack>
    ),
};
