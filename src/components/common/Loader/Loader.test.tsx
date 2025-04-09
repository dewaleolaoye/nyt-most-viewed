import { screen } from '@testing-library/react';
import { render } from '@/utils';
import Loader from '.';

describe('Loader', () => {
  it('renders the loader', () => {
    render(<Loader />);
    const spinner = screen.getByRole('loader');
    expect(spinner).toBeInTheDocument();
  });
});
