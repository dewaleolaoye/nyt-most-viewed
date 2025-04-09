import { IArticles, IFormat } from '@/types';

interface IMetaData {
  filter: IFormat;
  media: IArticles['media'];
}
export function normalizeToArray<T>(data: T | T[]): T[] {
  return Array.isArray(data) ? data : [data];
}

export const mediaMetaData = ({ media, filter }: IMetaData) => {
  const _media = normalizeToArray(media);

  const metadata = _media[0] ? _media[0]['media-metadata'] : [{
    url: '',
    format: '',
    height: '',
    width: ''
  }];

  const { caption, copyright, subtype, type } = _media[0] ?? {};

  const result = metadata?.filter(({ format }) => {
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

export const formatByline = (byline: string) => {
  return byline.replace('By', '');
};