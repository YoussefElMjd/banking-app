import {
    HStack,
    Input,
    NumberInput,
    NumberInputField,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { IInputText } from './props';
import Text from '../../content/text';
export default function InputText({
    h = 'fit-content',
    w = 'fit-content',
    borderRadius = '15px',
    onChange,
    type,
    placeholder,
    placeholderColor,
    label,
    labelColor,
    bgColor,
    color,
    ...rest
}: IInputText) {
    return (
        <VStack
            spacing={'6px'}
            justifyContent={'left'}
            alignItems={'left'}
            width={w}
            height={h}
        >
            <Text
                marginLeft={'16px'}
                fontSize={'12px'}
                fontWeight={'400'}
                color={labelColor}
            >
                {label}
            </Text>

            {type === 'number' ? (
                <NumberInput w={w} h={h}>
                    <NumberInputField
                        w={w}
                        h={h}
                        border='none'
                        padding='5px 16px'
                        gap='12px'
                        borderRadius={'24px'}
                        color={color}
                        bgColor={bgColor}
                        placeholder={placeholder}
                        _placeholder={{ color: placeholderColor }}
                        outline={'none'}
                        onChange={(e) => {
                            onChange && onChange(e.currentTarget.value);
                        }}
                        {...rest}
                    />
                </NumberInput>
            ) : (
                <Input
                    variant={'unstyled'}
                    border='none'
                    padding='5px 16px'
                    gap='12px'
                    borderRadius={'24px'}
                    color={color}
                    bgColor={bgColor}
                    placeholder={placeholder}
                    _placeholder={{ color: placeholderColor }}
                    outline={'none'}
                    onChange={(e) => {
                        onChange && onChange(e.currentTarget.value);
                    }}
                    {...rest}
                />
            )}
        </VStack>
    );
}
