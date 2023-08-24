import { InputProps, NumberInputFieldProps } from '@chakra-ui/react';
export interface IInputText
    extends Omit<InputProps, 'onChange' | 'size'>,
        Omit<NumberInputFieldProps, 'size' | 'onChange'> {
    onChange: (value: string) => void;
    label?: string;
    labelColor?: string;
    placeholderColor?: string;
}
