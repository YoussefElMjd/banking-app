import { HStack, Text, VStack, Box, Input, filter } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ISearchInput } from './props';
import COLORS from '../../../constant/colors';
import { motion } from 'framer-motion';
import Option from '../option';
import { OptionType } from '../option/type';

export default function SearchInput({
    h,
    w,
    endEnhancer,
    options,
    selectedValue,
    filterValue,
    changeSelectedValue,
    changeFilterValue,
    ...rest
}: ISearchInput) {
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
                    <Input
                        variant={'unstyled'}
                        w={'150px'}
                        bgColor='transparent'
                        textColor={'white'}
                        border='none'
                        outline='none'
                        fontSize={'12px'}
                        fontFamily={'Outfit'}
                        fontWeight={'500'}
                        fontStyle={'normal'}
                        lineHeight={'normal'}
                        placeholder={'Search'}
                        onChange={(value) => {
                            changeFilterValue(value.currentTarget.value);
                        }}
                    />
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
                        bg={COLORS.Secondary.Light.value}
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
