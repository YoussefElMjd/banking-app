import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { ISelectOption } from './props';
import COLORS from './../../../../constant/colors';

export default function SelectOption({
    h,
    w,
    onClick,
    value,
    bgColor,
    isSelected = false,
    isLast,
    ...rest
}: ISelectOption) {
    return (
        <HStack
            h={h}
            w={w}
            maxH={h}
            maxW={w}
            justifyContent={'center'}
            alignItems={'center'}
            onClick={onClick}
            spacing={'80px'}
            borderBottomLeftRadius={isLast ? '18px' : 0}
            borderBottomRightRadius={isLast ? '18px' : 0}
            bgColor={isSelected ? COLORS.Primary.value : 'transparent'}
            _hover={{
                bgColor: COLORS.Primary.value,
            }}
            {...rest}
        >
            <Text
                color={'white'}
                fontSize={'12px'}
                fontFamily={'Outfit'}
                fontWeight={'500'}
                fontStyle={'normal'}
                lineHeight={'normal'}
            >
                {value}
            </Text>
        </HStack>
    );
}
