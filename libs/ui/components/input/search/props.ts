import { StackProps } from '@chakra-ui/react';
import { OptionType } from '../option/type';

export interface ISearchInput extends Omit<StackProps, 'children'> {
    endEnhancer?: React.ReactElement;
    options?: OptionType[];
    selectedValue: string;
    filterValue?: string;
    changeFilterValue: (value: string) => void;
    changeSelectedValue: (value: string) => void;
}
