import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import SectionTag from '.';

describe('SectionTag', () => {
  it('renders the title text', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <SectionTag title='Top Stories' />
      </ChakraProvider>
    );
    expect(screen.getByText('Top Stories')).toBeInTheDocument();
  });
});
