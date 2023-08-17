import { Image, Stack } from '@chakra-ui/react';
import React from 'react';
import IAvatarProps from './props';
import COLORS from './../../../constant/colors';
import Icon from './../../../contents/icon/index';

export default function Avatar({ w, h, imgSrc }: IAvatarProps) {
    return (
        <Stack
            borderRadius='100%'
            bgColor={COLORS.Secondary.T75.value}
            w={w}
            h={h}
            justifyContent={'center'}
            alignItems={'center'}
        >
            {imgSrc ? <Image src={imgSrc} /> : <Icon name='avatar' />}
        </Stack>
    );
}
