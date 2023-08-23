import { HStack, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IInputText } from './props';
import Text from '../../content/text';
import COLORS from '../../../constant/colors';

export default function InputText({
    h,
    w,
    borderRadius = '15px',
    onChange,
    ...rest
}: IInputText) {
    return (
        <VStack
            spacing={'6px'}
            justifyContent={'left'}
            alignItems={'left'}
            width={'fit-content'}
            height={'fit-content'}
        >
            <Text
                marginLeft={'16px'}
                fontSize={'12px'}
                fontWeight={'400'}
                color={COLORS.TextDark.T3.value}
            >
                Account name
            </Text>
            <Input
                variant={'unstyled'}
                border='none'
                padding='5px 16px'
                gap='12px'
                borderRadius={'24px'}
                color={COLORS.White.value}
                bgColor={COLORS.TextDark.T25.value}
                placeholder='Enter Account Name'
                _placeholder={{ color: COLORS.TextDark.T3.value }}
                outline={'none'}
                onChange={(e) => {
                    onChange && onChange(e.currentTarget.value);
                }}
                {...rest}
            />
        </VStack>
    );
}
