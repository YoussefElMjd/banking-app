import { HStack } from '@chakra-ui/react';
import React from 'react';
import { IRadio } from './props';
import Icon from '../../../contents/icon';

export default function Radio({
    h = '16px',
    w = '16px',
    handleOnClick,
    isClicked,
    ...rest
}: IRadio) {
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
            {isClicked ? (
                <Icon name='radioInputOn' />
            ) : (
                <Icon name='radioInputOff' />
            )}
        </HStack>
    );
}
