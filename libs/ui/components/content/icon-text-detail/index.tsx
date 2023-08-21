import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import IIconTextDetail from './props';
import COLORS from '../../../constant/colors';
import Text from '../text';

export default function IconTextDetail({
    icon,
    text,
    detail,
}: IIconTextDetail) {
    return (
        <VStack
            bgColor={COLORS.Primary.value}
            w={'152px'}
            justifyContent={'start'}
            alignItems={'start'}
            spacing='35px'
        >
            <VStack
                w={'92px'}
                spacing={'4px'}
                justifyContent={'start'}
                alignItems={'start'}
            >
                <Box padding={'8px'}>{icon}</Box>
                <Text
                    fontSize={'16px'}
                    fontWeight={'500'}
                    color={COLORS.Secondary.Light.value}
                >
                    {text}
                </Text>
            </VStack>
            {detail}
        </VStack>
    );
}
