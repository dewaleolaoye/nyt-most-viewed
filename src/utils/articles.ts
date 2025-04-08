import { IArticles, IFormat } from '@/types';

interface IMetaData {
  filter: IFormat;
  articles: IArticles;
}
function normalizeToArray<T>(data: T | T[]): T[] {
  return Array.isArray(data) ? data : [data];
}

export const mediaMetaData = ({ articles, filter }: IMetaData) => {
  const { media: articleMedia } = articles;
  const media = normalizeToArray(articleMedia);

  const metadata = media[0] ? media[0]['media-metadata'] : [{
    url: '',
    format: '',
    height: '',
    width: ''
  }];

  const { caption, copyright, subtype, type } = media[0] ?? {};

  const result = metadata?.filter(({ format, }) => {
    return format === filter;
  });

  return {
    caption,
    copyright,
    type,
    subtype,
    metadata: result[0],
  };
};

