import { Button as ChakraButton, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ICheckbox } from './props';
import Icon from '../../../contents/icon';

export default function Checkbox({
    h = '20px',
    w = '20px',
    handleOnClick,
    isChecked,
    ...rest
}: ICheckbox) {
    return (
        <HStack
            h={h}
            w={w}
            borderStyle='none'
            bgColor='transparent'
            justifyContent={'center'}
            alignItems={'center'}
            onClick={handleOnClick}
            {...rest}
        >
            {isChecked ? (
                <Icon name='checkboxOn' />
            ) : (
                <Icon name='checkboxOff' />
            )}
        </HStack>
    );
}
