import { IArticles, IFormat } from '@/types';

interface IMetaData {
  filter: IFormat;
  articles: IArticles;
}
export const mediaMetaData = ({ articles, filter }: IMetaData) => {
  const { media } = articles;
  const metadata = media[0]['media-metadata'];

  const { caption, copyright, subtype, type } = media[0];

  const result = metadata.filter(({ format }) => {
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

