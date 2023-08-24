import { Image, Stack, HStack, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import COLORS from './../../../constant/colors';
import Icon from './../../../contents/icon/index';
import ICard from './props';
import { OptionType } from '../../input/option/type';
import Select from '../../input/select';
import InputText from '../../input/input-text';
import ColorPicker from './color-picker/index';

export default function Card({ w, h }: ICard) {
    const [selectCardType, setSelectCardType] = useState<string>('Eco');
    const [selectWalletType, setSelectWalletType] = useState<string>('Pay');
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [expireOn, setExpireOn] = useState('');
    const [cvv, setCvv] = useState('');
    const [actualBgColor, setActualBgColor] = useState(
        COLORS.TextDark.T25.value,
    );

    const options: OptionType[] = [
        { value: 'Eco', label: 'Eco' },
        { value: 'Flex', label: 'Flex' },
        { value: 'Premium', label: 'Premium' },
    ];

    const optionsWallet: OptionType[] = [
        { value: 'Apple Pay', label: 'Apple Pay' },
        { value: 'Google Pay', label: 'Google Pay' },
    ];

    return (
        <HStack
            w='578px'
            h={'371px'}
            padding={'36px 48px'}
            borderRadius={'28px'}
            bgColor={actualBgColor}
            justifyContent={'left'}
            alignItems={'center'}
            bgImage={'./assets/images/Blurs.png'}
            spacing={'30px'}
        >
            {/* Need to place the color changer */}
            <ColorPicker
                actualBgColor={actualBgColor}
                setBgCardColor={setActualBgColor}
            />
            <VStack spacing='30px' justifyContent={'left'} alignItems={'left'}>
                <Select
                    bgColor={COLORS.TextDark.T25.value}
                    endEnhancer={
                        <Icon
                            name='arrowDown'
                            stroke={COLORS.TextDark.T3.value}
                        />
                    }
                    w='170px'
                    h='32px'
                    spacing='40px'
                    borderRadius={'24px'}
                    selectedValue={selectCardType}
                    options={options}
                    changeSelectedValue={setSelectCardType}
                />
                <VStack
                    spacing='8px'
                    justifyContent={'left'}
                    alignItems={'left'}
                >
                    <InputText
                        onChange={setAccountName}
                        label={'Account Name'}
                        labelColor={COLORS.White.value}
                        placeholder={'Enter Account Name'}
                        bgColor={COLORS.TextDark.T25.value}
                        placeholderColor={COLORS.TextDark.T3.value}
                        color={COLORS.White.value}
                    />
                    <InputText
                        onChange={setAccountNumber}
                        type={'number'}
                        label={'Account Number'}
                        labelColor={COLORS.White.value}
                        placeholder={'Enter Account Number'}
                        bgColor={COLORS.TextDark.T25.value}
                        placeholderColor={COLORS.TextDark.T3.value}
                        color={COLORS.White.value}
                    />
                </VStack>
                <HStack spacing='112px' marginInlineStart={'0px'}>
                    <HStack
                        spacing={'16px'}
                        justifyContent={'left'}
                        alignItems={'left'}
                    >
                        <InputText
                            onChange={setExpireOn}
                            label={'Expire On'}
                            labelColor={COLORS.White.value}
                            placeholder={'Expire'}
                            bgColor={COLORS.TextDark.T25.value}
                            placeholderColor={COLORS.TextDark.T3.value}
                            color={COLORS.White.value}
                            w='118px'
                        />

                        <InputText
                            type={'number'}
                            onChange={setCvv}
                            label={'CVV'}
                            labelColor={COLORS.White.value}
                            placeholder={'CVV'}
                            bgColor={COLORS.TextDark.T25.value}
                            placeholderColor={COLORS.TextDark.T3.value}
                            color={COLORS.White.value}
                            w='88px'
                        />
                    </HStack>
                    <Select
                        bgColor={COLORS.TextDark.T25.value}
                        endEnhancer={
                            <Icon
                                name='arrowDown'
                                stroke={COLORS.TextDark.T3.value}
                            />
                        }
                        w='130px'
                        h='32px'
                        spacing='0px'
                        borderRadius={'24px'}
                        selectedValue={selectWalletType}
                        options={optionsWallet}
                        changeSelectedValue={setSelectWalletType}
                        label='Wallet Type'
                        labelColor={COLORS.White.value}
                    />
                </HStack>
            </VStack>
        </HStack>
    );
}
