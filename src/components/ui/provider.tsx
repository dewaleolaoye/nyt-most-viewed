'use client';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}
export function Provider({ children }: Props) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
