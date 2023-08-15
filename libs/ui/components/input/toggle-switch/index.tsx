import { HStack } from '@chakra-ui/react';
import React from 'react';
import { IToggleSwitch } from './props';
import Icon from '../../../contents/icon';

export default function ToggleSwitch({
    w = '32px',
    h = '16px',
    handleOnClick,
    isSelected,
    ...rest
}: IToggleSwitch) {
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
            {isSelected ? (
                <Icon name='switchInputOn' />
            ) : (
                <Icon name='switchInputOff' />
            )}
        </HStack>
    );
}
