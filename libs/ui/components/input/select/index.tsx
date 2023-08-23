import { HStack, Text, VStack, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ISelect } from './props';
import COLORS from '../../../constant/colors';
import { motion } from 'framer-motion';
import Option from '../option';
import { OptionType } from '../option/type';

export default function Select({
    h,
    w,
    endEnhancer,
    options,
    selectedValue,
    changeSelectedValue,
    spacing = '80px',
    borderRadius = '15px',
    ...rest
}: ISelect) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleIsMenuOpent() {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <VStack w={w} spacing='0'>
            <HStack
                h={h}
                w={w}
                maxH={h}
                maxW={w}
                borderStyle='none'
                borderTopLeftRadius={borderRadius}
                borderTopRightRadius={borderRadius}
                borderBottomLeftRadius={isMenuOpen ? 0 : borderRadius}
                borderBottomRightRadius={isMenuOpen ? 0 : borderRadius}
                justifyContent={'center'}
                alignItems={'center'}
                onClick={toggleIsMenuOpent}
                spacing={spacing}
                {...rest}
            >
                <Box w={'80px'}>
                    <Text
                        color={'white'}
                        fontSize={'12px'}
                        fontFamily={'Outfit'}
                        fontWeight={'500'}
                        fontStyle={'normal'}
                        lineHeight={'normal'}
                    >
                        {selectedValue}
                    </Text>
                </Box>
                {endEnhancer}
            </HStack>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <VStack
                        w={w}
                        spacing='0px'
                        bg={rest.bgColor}
                        borderBottomLeftRadius={'18px'}
                        borderBottomRightRadius={'18px'}
                    >
                        {options?.map((option: OptionType, i) => (
                            <Option
                                key={i}
                                w='100%'
                                value={option.value}
                                isSelected={option.value == selectedValue}
                                onClick={() =>
                                    changeSelectedValue(option.value)
                                }
                                isLast={i === options.length - 1}
                            />
                        ))}
                    </VStack>
                </motion.div>
            )}
        </VStack>
    );
}
