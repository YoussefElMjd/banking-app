import { ProgressProps, StackProps } from '@chakra-ui/react';

export default interface IProgressBar extends ProgressProps {
    element: React.ReactElement;
    userLimit: number;
    widthBar: string;
}
