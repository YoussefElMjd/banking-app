import { StackProps } from '@chakra-ui/react';

export default interface IColorPicker extends StackProps {
    actualBgColor: string;
    setBgCardColor: (color: string) => void;
}
