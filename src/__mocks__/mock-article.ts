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
            url: 'https://static01.nyt.com/images/2025/04/03/multimedia/01Kilmer-1-zlpq-print10/01Kilmer-1-zlpq-mediumThreeByTwo440.jpg',
            format: 'Standard Thumbnail',
            height: 75,
            width: 75,
          },
          {
            url: 'https://static01.nyt.com/images/2025/04/03/multimedia/01Kilmer-1-zlpq-print10/01Kilmer-1-zlpq-mediumThreeByTwo440.jpg',
            format: 'mediumThreeByTwo210',
            height: 140,
            width: 210,
          },
          {
            url: 'https://static01.nyt.com/images/2025/04/03/multimedia/01Kilmer-1-zlpq-print10/01Kilmer-1-zlpq-mediumThreeByTwo440.jpg',
            format: 'mediumThreeByTwo440',
            height: 293,
            width: 440,
          },
        ],
      },
    ],
    eta_id: 0,
  },
  {
    "uri": "nyt://article/4ce67a20-a585-5813-a6e5-06d236275ff8",
    "url": "https://www.nytimes.com/2025/04/04/opinion/trump-tariff-economics-cost.html",
    "id": 100000010090525,
    "asset_id": 100000010090525,
    "source": "New York Times",
    "published_date": "2025-04-04",
    "updated": "2025-04-05 17:19:18",
    "section": "Opinion",
    "subsection": "",
    "nytdsection": "opinion",
    "adx_keywords": "Prices (Fares, Fees and Rates);Shopping and Retail;Customs (Tariff);International Trade and World Market;United States Economy;United States Politics and Government;Trump, Donald J",
    "byline": "By Justin Wolfers",
    "type": "Article",
    "title": "Your Life Will",
    "abstract": "Justin Wolfers on how the tariffs will radically change our daily lives.",
    "des_facet": [
      "Prices (Fares, Fees and Rates)",
      "Shopping and Retail",
      "Customs (Tariff)",
      "International Trade and World Market",
      "United States Economy",
      "United States Politics and Government"
    ],
    "org_facet": [],
    "per_facet": [
      "Trump, Donald J"
    ],
    "geo_facet": [],
    "media": [
      {
        "type": "image",
        "subtype": "photo",
        "caption": "",
        "copyright": "Damon Winter/The New York Times",
        "approved_for_syndication": 1,
        "media-metadata": [
          {
            "url": "https://static01.nyt.com/images/2025/04/06/multimedia/04wolfers-kvfh/04wolfers-kvfh-thumbStandard.jpg",
            "format": "Standard Thumbnail",
            "height": 75,
            "width": 75
          },
          {
            "url": "https://static01.nyt.com/images/2025/04/06/multimedia/04wolfers-kvfh/04wolfers-kvfh-mediumThreeByTwo210.jpg",
            "format": "mediumThreeByTwo210",
            "height": 140,
            "width": 210
          },
          {
            "url": "https://static01.nyt.com/images/2025/04/06/multimedia/04wolfers-kvfh/04wolfers-kvfh-mediumThreeByTwo440.jpg",
            "format": "mediumThreeByTwo440",
            "height": 293,
            "width": 440
          }
        ]
      }
    ],
    "eta_id": 0
  }

  ],
  num_results: 20,
  status: 'OK',
  data: {
    fault: {
      detail: {
        errorcode: '400',
      },
      faultstring: 'An unexpected error occurred'
    }
  }
};