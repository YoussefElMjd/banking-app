import {
    ButtonProps,
    StackDirection,
    HStack,
    StackProps,
} from '@chakra-ui/react';
export interface IButton extends Omit<StackProps, 'children'> {
    children?: React.ReactElement | string;
    startEnhancer?: React.ReactElement;
    endEnhancer?: React.ReactElement;
    handleOnClick?: () => void;
}
