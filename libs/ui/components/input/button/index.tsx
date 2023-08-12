import { Button as ChakraButton  } from '@chakra-ui/react';
import React from 'react'
import { IButton } from './props';

export default function Button({children,...rest} : IButton){
    return <ChakraButton {...rest}>{children}</ChakraButton>
}