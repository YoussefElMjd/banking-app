import { StackProps } from '@chakra-ui/react';
export interface IOption extends Omit<StackProps, 'children'> {
    value: string;
    isSelected: boolean;
    isLast: boolean;
    onClick?: () => void;
}
