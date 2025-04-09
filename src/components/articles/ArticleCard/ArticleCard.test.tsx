import { screen, act } from '@testing-library/react';
import ArticleCard from '.';
import { render } from '@/utils';
import { mockArticle } from '@/__mocks__/mock-article';

describe('ArticleCard', () => {
  it('renders article card with different image format', async () => {
    await act(async () => {
      render(
        <ArticleCard
          articles={mockArticle}
          filter='mediumThreeByTwo210'
        />
      );
    });

    const image = screen.getAllByAltText('The Caption')[0];
    expect(image).toHaveAttribute('src', 'mediumThreeByTwo210.jpg');
  });

  it('renders article card with all content', async () => {
    await act(async () => {
      render(
        <ArticleCard
          articles={mockArticle}
          filter='Standard Thumbnail'
        />
      );
    });

    expect(screen.getByText('Wall Street')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockArticle.url);
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders article card with section tag', async () => {
    const article = {
      ...mockArticle,
      subsection: 'Markets',
    };

    await act(async () => {
      render(
        <ArticleCard
          articles={article}
          filter='Standard Thumbnail'
        />
      );
    });

    expect(screen.getByText('Business - Markets')).toBeInTheDocument();
  });

  it('renders article card with abstract', async () => {
    await act(async () => {
      render(
        <ArticleCard
          articles={mockArticle}
          filter='Standard Thumbnail'
        />
      );
    });

    expect(screen.getByText('Billionaire investors')).toBeInTheDocument();
  });

  it('renders article card with formatted date', async () => {
    await act(async () => {
      render(
        <ArticleCard
          articles={mockArticle}
          filter='mediumThreeByTwo440'
        />
      );
    });

    expect(screen.getByText('Apr 08, 2025')).toBeInTheDocument();
  });

  it('renders article card with formatted byline', async () => {
    await act(async () => {
      render(
        <ArticleCard
          articles={mockArticle}
          filter='Standard Thumbnail'
        />
      );
    });

    expect(screen.getByText('Rob Copeland')).toBeInTheDocument();
  });

  it('renders N/A when byline is empty', async () => {
    const articleWithoutByline = {
      ...mockArticle,
      byline: '',
    };

    await act(async () => {
      render(
        <ArticleCard
          articles={articleWithoutByline}
          filter='Standard Thumbnail'
        />
      );
    });

    expect(screen.getByText('N/A')).toBeInTheDocument();
    const avatar = screen.getByRole('img', {
      hidden: true,
      name: '',
    });
    expect(avatar).toBeInTheDocument();
  });
});
