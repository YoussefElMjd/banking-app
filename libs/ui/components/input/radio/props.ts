import { StackProps } from '@chakra-ui/react';
export interface IRadio extends Omit<StackProps, 'children'> {
    handleOnClick?: () => void;
    isClicked: boolean;
}
