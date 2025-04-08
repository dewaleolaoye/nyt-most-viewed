import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SectionTag from '.';

describe('SectionTag', () => {
  it('renders the title text', () => {
    render(<SectionTag title='Top Stories' />);
    expect(screen.getByText('Top Stories')).toBeInTheDocument();
  });
});
