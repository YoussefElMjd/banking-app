import { StackProps } from '@chakra-ui/react';
export interface IToggleSwitch extends Omit<StackProps, 'children'> {
    handleOnClick?: () => void;
    isSelected: boolean;
}
