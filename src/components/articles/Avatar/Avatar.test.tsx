import { screen, waitFor } from '@testing-library/react';
import { render } from '@/utils';
import '@testing-library/jest-dom';
import Avatar from '.';

describe('Avatar', () => {
  it('renders the avatar with fallback name', async () => {
    render(<Avatar name='Adewale Olaoye' />);

    await waitFor(() => {
      expect(screen.getByText('AO')).toBeInTheDocument();
    });
  });
});
