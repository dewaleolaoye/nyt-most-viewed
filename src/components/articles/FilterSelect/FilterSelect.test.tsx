import { fireEvent, screen, act } from '@testing-library/react';
import { render } from '@/utils';
import FilterSelect from '.';

describe('FilterSelect', () => {
  it('renders the label and placeholder', () => {
    render(<FilterSelect onValueChange={jest.fn()} />);

    expect(screen.getByText('Filter Period')).toBeInTheDocument();
    expect(screen.getByText('Period')).toBeInTheDocument();
  });

  it('shows options when triggered and calls onValueChange on selection', async () => {
    const handleValueChange = jest.fn();

    render(<FilterSelect onValueChange={handleValueChange} />);

    await act(async () => {
      const trigger = screen.getByRole('combobox');
      fireEvent.click(trigger);
    });

    const option = screen.getByRole('option', { name: 'Last 7 days' });
    await act(async () => {
      fireEvent.click(option);
    });

    expect(handleValueChange).toHaveBeenCalledWith({
      items: [{ value: '7', label: 'Last 7 days' }],
      value: ['7'],
    });
  });
});
