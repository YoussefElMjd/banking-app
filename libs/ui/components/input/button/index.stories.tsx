import React from 'react';
import Button from '.';
import { ComponentMeta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';
import Icon from './../../../contents/icon/index';
import COLORS from '../../../constant/colors';
import { HStack } from '@chakra-ui/react';
import Text from './../../content/text/index';
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

export const ThreedDotVertical = Template.bind({});
ThreedDotVertical.args = {
    w: 'fit-content',
    h: '24px',
    bgColor: 'transparent',
    borderRadius: '18px',
    children: <Icon name='threeDotVertical'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {
        console.log('test');
    },
};

export const ThreedDotHorizontal = Template.bind({});
ThreedDotHorizontal.args = {
    w: 'fit-content',
    h: '24px',
    bgColor: 'transparent',
    borderRadius: '18px',
    children: <Icon name='threeDotHorizontal'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {
        console.log('test');
    },
};

export const NotificationOn = Template.bind({});
NotificationOn.args = {
    w: 'fit-content',
    h: '24px',
    bgColor: 'transparent',
    children: <Icon name='notificationOn'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {
        console.log('test');
    },
};
export const NotificationOff = Template.bind({});
NotificationOff.args = {
    w: 'fit-content',
    h: '24px',
    bgColor: 'transparent',
    children: <Icon name='notificationOff'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {
        console.log('test');
    },
};

export const Water = Template.bind({});
Water.args = {
    w: 'fit-content',
    h: '32px',
    bgColor: 'transparent',
    children: <Icon name='water'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {
        console.log('water');
    },
};
export const Electricity = Template.bind({});
Electricity.args = {
    w: 'fit-content',
    h: '32px',
    bgColor: 'transparent',
    children: <Icon name='electricity'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {
        console.log('electricity');
    },
};
export const Gas = Template.bind({});
Gas.args = {
    w: 'fit-content',
    h: '32px',
    bgColor: 'transparent',
    children: <Icon name='gas'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {
        console.log('gas');
    },
};
export const Internet = Template.bind({});
Internet.args = {
    w: 'fit-content',
    h: '32px',
    bgColor: 'transparent',
    children: <Icon name='internet'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {
        console.log('internet');
    },
};
export const Phone = Template.bind({});
Phone.args = {
    w: 'fit-content',
    h: '32px',
    bgColor: 'transparent',
    children: <Icon name='phone'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {
        console.log('phone');
    },
};

export const QuickActionBanking = Template.bind({});
QuickActionBanking.args = {
    w: '36px',
    h: '36px',
    bgColor: 'black',
    borderRadius: '0px',
    children: <Icon name='banking'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {},
};
export const QuickActionMessageCenter = Template.bind({});
QuickActionMessageCenter.args = {
    w: '36px',
    h: '36px',
    bgColor: 'black',
    borderRadius: '0px',
    children: <Icon name='messageCenter'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {},
};
export const QuickActionFundTransfer = Template.bind({});
QuickActionFundTransfer.args = {
    w: '36px',
    h: '36px',
    bgColor: 'black',
    borderRadius: '0px',
    children: <Icon name='fundTransfer'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {},
};
export const Warning = Template.bind({});
Warning.args = {
    w: 'fit-content',
    h: 'fit-content',
    padding: '8px',
    borderRadius: '100%',
    bgColor: COLORS.Secondary.T75.value,
    children: <Icon name='warning'></Icon>,
    boxShadow: 'none',
    spacing: '0px',
    handleOnClick: () => {},
};

export const WarningSmall = Template.bind({});
WarningSmall.args = {
    w: '36px',
    h: '36px',
    bgColor: COLORS.Secondary.T75.value,
    children: <Icon name='warningSmall'></Icon>,
    boxShadow: 'none',
    handleOnClick: () => {},
};

export const WarningSmallOtherColor = Template.bind({});
WarningSmallOtherColor.args = {
    w: '36px',
    h: '36px',
    bgColor: COLORS.Primary.value,
    children: (
        <Icon name='warningSmall' stroke={COLORS.Secondary.T75.value}></Icon>
    ),
    boxShadow: 'none',
    handleOnClick: () => {},
};

export const ArrowPropertyUp = Template.bind({});
ArrowPropertyUp.args = {
    w: 'fit-content',
    h: 'fit-content',
    bgColor: 'transparent',
    children: <Icon name='arrowPropertyUp' />,
    boxShadow: 'none',
    handleOnClick: () => {},
};
export const ArrowPropertyDown = Template.bind({});
ArrowPropertyDown.args = {
    w: 'fit-content',
    h: 'fit-content',
    bgColor: 'transparent',
    children: <Icon name='arrowPropertyDown' />,
    boxShadow: 'none',
    handleOnClick: () => {},
};

export const RegisterWithCard = Template.bind({});
RegisterWithCard.args = {
    w: 'fit-content',
    h: 'fit-content',
    bgColor: 'transparent',
    children: (
        <Text
            color={COLORS.Primary.value}
            fontSize={'12px'}
            fontFamily={'Outfit'}
            fontWeight={'700'}
            fontStyle={'normal'}
            lineHeight={'normal'}
            textTransform={'uppercase'}
            _hover={{
                filter: 'opacity(60%)',
            }}
        >
            Register with card
        </Text>
    ),
    boxShadow: 'none',
    handleOnClick: () => {},
};
export const IconAndText = Template.bind({});
IconAndText.args = {
    w: 'fit-content',
    h: 'fit-content',
    bgColor: 'transparent',
    padding: '8px',
    spacing: '10px',
    children: (
        <Icon
            name='transaction'
            stroke={COLORS.Secondary.Light.value}
            width={'32px'}
            height={'32px'}
        />
    ),
    endEnhancer: (
        <Text
            color={COLORS.Secondary.Light.value}
            fontSize={'16px'}
            fontWeight={'500'}
            _hover={{
                filter: 'opacity(60%)',
            }}
            children={'Recent\n Transactions'}
        />
    ),
    boxShadow: 'none',
    handleOnClick: () => {},
};
