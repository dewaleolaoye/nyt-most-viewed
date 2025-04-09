import { IArticlesRO } from "@/types";

export const mockArticle: IArticlesRO = {
  copyright: 'Copyright (c) 2022 The New York Times Company. All Rights Reserved.',
  results: [{
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
  }],
  num_results: 20,
  status: 'OK',
  // errror
  data: {
    fault: {
      detail: {
        errorcode: '400',
      },
      faultstring: 'An unexpected error occurred'
    }
  }
};