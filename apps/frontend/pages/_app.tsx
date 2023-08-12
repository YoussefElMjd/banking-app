// pages/_app.js
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export async function getInitialProps(context: AppContext) {
  return await App.getInitialProps(context);
}


export default MyApp;