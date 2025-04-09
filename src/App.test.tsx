import { screen } from '@testing-library/react';
import { render } from '@/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

jest.mock('@/config', () => ({
  config: {
    API_URL: 'https://api.nytimes.com/svc/mostpopular/v2/viewed',
    API_KEY: 'mock-api-key',
  },
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
};

describe('App', () => {
  beforeEach(() => {
    queryClient.clear();
    mockedAxios.get.mockResolvedValue({
      data: {
        results: [],
        status: '',
        copyright: '',
        num_results: 0,
      },
    });
  });

  afterEach(() => {
    queryClient.cancelQueries();
    queryClient.clear();
    jest.clearAllMocks();
  });

  it('renders the heading and default ArticleList with period 1', () => {
    renderWithProviders(<App />);
    expect(screen.getByText('Most Viewed Articles')).toBeInTheDocument();
  });

  it('updates ArticleList data when FilterSelect changes value', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    const select = screen.getByRole('combobox');
    await user.click(select);

    const option = screen.getAllByText('Last 7 days')[0];
    await user.click(option);

    expect(screen.getByRole('combobox')).toHaveTextContent('Period');
  });
});
