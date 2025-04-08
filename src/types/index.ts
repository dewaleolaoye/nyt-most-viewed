interface IMedum {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": Metadaum[];
}


export type IFormat = "Standard Thumbnail" | "mediumThreeByTwo210" | "mediumThreeByTwo440";

interface Metadaum {
  url: string;
  format: IFormat;
  height: number;
  width: number;
}

export interface IArticles {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: IMedum[] | IMedum;
  eta_id: number;
}

export interface IError {
  data: {
    fault: {
      faultstring: string;
      detail: {
        errorcode: string;
      };
    };
  };
}

export interface IArticlesRO extends IError {
  status: string;
  copyright: string;
  num_results: number;
  results: IArticles[];
}
