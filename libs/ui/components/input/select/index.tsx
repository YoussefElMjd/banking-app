import { HStack, Text, VStack, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ISelect } from './props';
import SelectOption from './select-option';
import { Option } from './type';
import COLORS from '../../../constant/colors';
import { motion } from 'framer-motion';

export default function Select({
    h,
    w,
    endEnhancer,
    options,
    selectedValue,
    changeSelectedValue,
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
                borderTopLeftRadius={'15px'}
                borderTopRightRadius={'15px'}
                borderBottomLeftRadius={isMenuOpen ? 0 : '15px'}
                borderBottomRightRadius={isMenuOpen ? 0 : '15px'}
                justifyContent={'center'}
                alignItems={'center'}
                onClick={toggleIsMenuOpent}
                spacing={'80px'}
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
                        bg={COLORS.Secondary.T15.value}
                        borderBottomLeftRadius={'18px'}
                        borderBottomRightRadius={'18px'}
                    >
                        {options?.map((option: Option, i) => (
                            <SelectOption
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
