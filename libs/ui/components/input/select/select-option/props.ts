import { StackProps } from '@chakra-ui/react';
import { uuid } from 'uuidv4';
export interface ISelectOption extends Omit<StackProps, 'children'> {
    value: string;
    isSelected: boolean;
    isLast: boolean;
    onClick?: () => void;
}
