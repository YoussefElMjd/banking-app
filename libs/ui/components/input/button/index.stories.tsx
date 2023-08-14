import React from 'react';
import Button from '.';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import Icon from './../../../contents/icon/index';
import COLORS from '../../../constant/colors';
import { HStack, Text } from '@chakra-ui/react';
export default {
    title: 'Components/Inputs/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryIcon = Template.bind({});

PrimaryIcon.args = {
    bgColor: COLORS.Primary.value,
    w: '44px',
    h: '24px',
    children: (
        <HStack>
            <Icon name='add' />
        </HStack>
    ),
    handleOnClick: () => {
        console.log('test');
    },
};

export const SecondaryIcon = Template.bind({});

SecondaryIcon.args = {
    bgColor: COLORS.Secondary.T15.value,
    w: '44px',
    h: '24px',
    children: (
        <HStack>
            <Icon name='add' stroke={COLORS.Primary.value} />
        </HStack>
    ),
    handleOnClick: () => {
        console.log(COLORS.Secondary);
    },
};

export const PrimaryIconLarge = Template.bind({});
PrimaryIconLarge.args = {
    bgColor: COLORS.Primary.value,
    h: '80px',
    w: '40px',
    gap: '6px',
    children: (
        <HStack>
            <Icon name='add' />
        </HStack>
    ),
    handleOnClick: () => {
        console.log('test');
    },
};

export const SecondaryIconLarge = Template.bind({});
SecondaryIconLarge.args = {
    bgColor: COLORS.Secondary.T15.value,
    h: '80px',
    w: '40px',
    gap: '6px',
    children: (
        <HStack>
            <Icon name='add' stroke={COLORS.Primary.value} />
        </HStack>
    ),
    handleOnClick: () => {
        console.log(COLORS.Secondary);
    },
};
export const PrimaryText = Template.bind({});
PrimaryText.args = {
    bgColor: COLORS.Primary.value,
    h: '24px',
    w: '51PX',
    padding: '4px 12px',
    gap: '2px',
    children: (
        <Text
            color={COLORS.Secondary.T15.value}
            fontSize={'12px'}
            fontFamily={'Outfit'}
            fontWeight={'700'}
            fontStyle={'normal'}
            lineHeight={'normal'}
            textTransform={'uppercase'}
        >
            add
        </Text>
    ),
    handleOnClick: () => {
        console.log('test');
    },
};
export const SecondaryText = Template.bind({});
SecondaryText.args = {
    bgColor: COLORS.Secondary.T75.value,
    h: '24px',
    w: '51PX',
    padding: '4px 12px',
    gap: '2px',
    children: (
        <Text
            color={COLORS.Primary.value}
            fontSize={'12px'}
            fontFamily={'Outfit'}
            fontWeight={'700'}
            fontStyle={'normal'}
            lineHeight={'normal'}
            textTransform={'uppercase'}
        >
            add
        </Text>
    ),
    handleOnClick: () => {
        console.log('test');
    },
};

export const Circle = Template.bind({});
Circle.args = {
    w: '32px',
    h: '32px',
    gap: '6px',
    alignSelf: 'stretch',
    borderRadius: '100%',
    bgColor: COLORS.Secondary.T75.value,
    children: (
        <HStack>
            <Icon name='arrowLeft' />
        </HStack>
    ),
};
export const CircleSmall = Template.bind({});
CircleSmall.args = {
    w: '24px',
    h: '24px',
    gap: '6px',
    alignSelf: 'stretch',
    borderRadius: '100%',
    bgColor: COLORS.Secondary.T75.value,
    children: (
        <HStack w={'12px'} h={'12px'}>
            <Icon name='arrowLeft' />
        </HStack>
    ),
};

export const PrimaryWithIcons = Template.bind({});
PrimaryWithIcons.args = {
    w: 'fit-content',
    h: '24px',
    bgColor: COLORS.Primary.value,
    borderRadius: '18px',
    startEnhancer: <Icon name='add' />,
    endEnhancer: <Icon name='add' />,
    padding: '2px 12px',
    spacing: '2px',
    children: (
        <Text
            color={COLORS.Secondary.T75.value}
            fontSize={'12px'}
            fontFamily={'Outfit'}
            fontWeight={'700'}
            fontStyle={'normal'}
            lineHeight={'normal'}
            textTransform={'uppercase'}
        >
            add
        </Text>
    ),
};

export const SecondaryWithIcons = Template.bind({});
SecondaryWithIcons.args = {
    w: 'fit-content',
    h: '24px',
    bgColor: COLORS.Secondary.T75.value,
    borderRadius: '18px',
    startEnhancer: <Icon name='add' stroke={COLORS.Primary.value} />,
    endEnhancer: <Icon name='add' stroke={COLORS.Primary.value} />,
    padding: '2px 12px',
    spacing: '2px',
    children: (
        <Text
            color={COLORS.Primary.value}
            fontSize={'12px'}
            fontFamily={'Outfit'}
            fontWeight={'700'}
            fontStyle={'normal'}
            lineHeight={'normal'}
            textTransform={'uppercase'}
        >
            add
        </Text>
    ),
    handleOnClick: () => {
        console.log('test');
    },
};
