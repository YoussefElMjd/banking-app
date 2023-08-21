import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import COLORS from '../../../constant/colors';
import IProgressBar from './props';
import ProgressBar from '@ramonak/react-progress-bar';
export default function CustomProgressBar({
    element,
    value = 0,
    userLimit = 100,
    widthBar,
}: IProgressBar) {
    return (
        <VStack
            bgColor={COLORS.Primary.value}
            w={'fit-content'}
            h='fit-content'
            justifyContent={'start'}
            alignItems={'start'}
        >
            <HStack>{element}</HStack>
            <ProgressBar
                completed={value}
                maxCompleted={userLimit}
                width={widthBar}
                customLabel=' '
                bgColor={COLORS.Secondary.Light.value}
                baseBgColor='#FFFFFF59'
                height='6px'
            />
        </VStack>
    );
}
