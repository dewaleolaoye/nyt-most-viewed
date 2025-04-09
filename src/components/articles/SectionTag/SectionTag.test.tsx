import { screen } from '@testing-library/react';
import { render } from '@/utils';
import SectionTag from '.';

describe('SectionTag', () => {
  it('renders the title text', () => {
    render(<SectionTag title='Politics' />);
    expect(screen.getByText('Politics')).toBeInTheDocument();
  });
});
