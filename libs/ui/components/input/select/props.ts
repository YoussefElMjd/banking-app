import { StackProps } from '@chakra-ui/react';
import { OptionType } from './../option/type';
export interface ISelect extends Omit<StackProps, 'children'> {
    endEnhancer?: React.ReactElement;
    options?: OptionType[];
    selectedValue: string;
    changeSelectedValue: (value: string) => void;
    label?: string;
    labelColor?: string;
}
