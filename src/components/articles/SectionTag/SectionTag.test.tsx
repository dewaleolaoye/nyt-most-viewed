import { screen } from '@testing-library/react';
import { render } from '@/utils/test-utils';
import '@testing-library/jest-dom';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import SectionTag from '.';

describe('SectionTag', () => {
  it('renders the title text', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <SectionTag title='Politics' />
      </ChakraProvider>
    );
    expect(screen.getByText('Politics')).toBeInTheDocument();
  });
});
