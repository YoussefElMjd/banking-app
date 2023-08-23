import { InputProps } from '@chakra-ui/react';
export interface IInputText extends Omit<InputProps, 'onChange'> {
    onChange: (value: string) => void;
}
