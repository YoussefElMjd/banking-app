import { HStack, VStack, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ISelect } from './props';
import COLORS from '../../../constant/colors';
import { motion } from 'framer-motion';
import Option from '../option';
import { OptionType } from '../option/type';
import Text from '../../content/text';

export default function Select({
    h,
    w,
    endEnhancer,
    options,
    selectedValue,
    changeSelectedValue,
    spacing = '80px',
    borderRadius = '15px',
    label,
    labelColor,
    ...rest
}: ISelect) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleIsMenuOpent() {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <VStack
            w={w}
            spacing='6px'
            position={'relative'}
            justifyContent={'left'}
            alignItems={'left'}
        >
            <Text
                marginLeft={'16px'}
                fontSize={'12px'}
                fontWeight={'400'}
                color={labelColor}
            >
                {label}
            </Text>
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
                    style={{
                        position: 'absolute', // Position the menu options absolutely
                        top: '100%',
                        left: 0,
                        zIndex: 1, // Ensure it's above other content
                    }}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <VStack
                        position={'absolute'}
                        left={0}
                        zIndex={1}
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
