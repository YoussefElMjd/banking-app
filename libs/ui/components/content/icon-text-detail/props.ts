import { StackProps } from '@chakra-ui/react';

export default interface IIconTextDetail extends StackProps {
    icon: React.ReactElement;
    text: string;
    detail: React.ReactElement;
}
