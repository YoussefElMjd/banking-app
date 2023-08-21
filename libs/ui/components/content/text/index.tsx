import { VStack, Text as ChakraText } from '@chakra-ui/react';
import React from 'react';
import IIconText from './props';
import COLORS from './../../../constant/colors';

export default function Text({
    children,
    fontSize = '12px',
    fontWeight = '700',
    color = COLORS.Primary.value,
}: IIconText) {
    return (
        <ChakraText
            whiteSpace={'pre-line'}
            marginBlockStart={0}
            marginBlockEnd={0}
            color={color}
            fontSize={fontSize}
            fontFamily={'Outfit'}
            fontWeight={fontWeight}
            fontStyle={'normal'}
            lineHeight={'normal'}
        >
            {children}
        </ChakraText>
    );
}
