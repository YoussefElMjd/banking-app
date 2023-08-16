import { StackProps } from '@chakra-ui/react';
import { Option } from './type';
export interface ISelect extends Omit<StackProps, 'children'> {
    endEnhancer?: React.ReactElement;
    options?: Option[];
    selectedValue: string;
    changeSelectedValue: (value: string) => void;
}
