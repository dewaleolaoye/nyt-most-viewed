import { screen } from '@testing-library/react';
import AppProvider from '@/components/common/AppProvider';
import { render } from '@/utils';

describe('AppProvider', () => {
  it('renders children correctly', () => {
    render(
      <AppProvider>
        <div>Render children</div>
      </AppProvider>
    );

    expect(screen.getByText('Render children')).toBeInTheDocument();
  });
});
