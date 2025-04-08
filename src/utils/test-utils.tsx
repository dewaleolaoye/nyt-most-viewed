import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>,
    ...options,
  });

export { customRender as render };
