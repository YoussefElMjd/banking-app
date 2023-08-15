import { StackProps } from '@chakra-ui/react';
export interface ICheckbox extends Omit<StackProps, 'children'> {
    handleOnClick?: () => void;
    isChecked: boolean;
}
