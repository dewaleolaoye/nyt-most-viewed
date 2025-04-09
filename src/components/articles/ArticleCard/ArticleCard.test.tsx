import { screen, act } from '@testing-library/react';
import ArticleCard from '.';
import { render } from '@/utils';
import { IArticles } from '@/types';

describe('ArticleCard', () => {
  const mockArticle: IArticles = {
    uri: 'nyt://article/13baf81b-0702-544a-91f0-77cca10ca7dd',
    url: 'https://www.nytimes.com/2025/04/08/business/trump-tariff-wall-street-reaction.html',
    id: 100000010096359,
    asset_id: 100000010096359,
    source: 'New York Times',
    published_date: '2025-04-08',
    updated: '2025-04-08 23:59:47',
    section: 'Business',
    subsection: '',
    nytdsection: 'business',
    adx_keywords: 'United States Politics and Government;Hedge Funds;',
    byline: 'By Rob Copeland',
    type: 'Article',
    title: 'Wall Street',
    abstract: 'Billionaire investors',
    des_facet: [
      'United States Politics and Government',
      'Hedge Funds',
      'Banking and Financial Institutions',
      'United States Economy',
      "Standard & Poor's 500-Stock Index",
      'High Net Worth Individuals',
    ],
    org_facet: [],
    per_facet: [
      'Ackman, William A',
      'Bessent, Scott',
      'Dimon, James',
      'Fink, Laurence D',
      'Lutnick, Howard W',
      'Trump, Donald J',
      'Wiles, Susie',
    ],
    geo_facet: [],
    media: [
      {
        type: 'image',
        subtype: 'photo',
        caption: 'The Caption',
        copyright: 'Ashley Gilbertson for The New York Times',
        approved_for_syndication: 1,
        'media-metadata': [
          {
            url: 'thumbStandard.jpg',
            format: 'Standard Thumbnail',
            height: 75,
            width: 75,
          },
          {
            url: 'mediumThreeByTwo210.jpg',
            format: 'mediumThreeByTwo210',
            height: 140,
            width: 210,
          },
          {
            url: 'mediumThreeByTwo440.jpg',
            format: 'mediumThreeByTwo440',
            height: 293,
            width: 440,
          },
        ],
      },
    ],
    eta_id: 0,
  };

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
