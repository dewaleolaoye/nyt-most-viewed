
import { IArticles } from "@/types";
import { formatByline, mediaMetaData, normalizeToArray } from "./articles";

describe('normalizeToArray', () => {
  it('should return the array as-is if already an array', () => {
    const input = ['a', 'b', 'c'];
    const result = normalizeToArray(input);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('should wrap a non-array item in an array', () => {
    const input = 'hello';
    const result = normalizeToArray(input);
    expect(result).toEqual(['hello']);
  });

  it('should handle objects', () => {
    const input = { key: 'value' };
    const result = normalizeToArray(input);
    expect(result).toEqual([{ key: 'value' }]);
  });

  it('should handle undefined', () => {
    const input = undefined;
    const result = normalizeToArray(input);
    expect(result).toEqual([undefined]);
  });

  it('should handle null', () => {
    const input = null;
    const result = normalizeToArray(input);
    expect(result).toEqual([null]);
  });
});

describe('formatByline', () => {
  it('should remove "By" from beginning of string', () => {
    expect(formatByline('By Adewale Olaoye')).toBe(' Adewale Olaoye');
    expect(formatByline('ByAdewale Olaoye')).toBe('Adewale Olaoye');
    expect(formatByline('Adewale Olaoye')).toBe('Adewale Olaoye');
  });
});

describe('mediaMetaData', () => {
  const mockMedia: IArticles['media'] = {
    type: 'image',
    subtype: 'photo',
    caption: 'The New York Stock Exchange on Monday',
    copyright: 'Ashley Gilbertson for The New York Times',
    approved_for_syndication: 1,
    'media-metadata': [
      { format: 'Standard Thumbnail', url: 'https://static01.nyt.com/images/2025/04/07/multimedia/00BIZ-TARIFFS-INVESTORS-qklv/00BIZ-TARIFFS-INVESTORS-qklv-thumbStandard.jpg', height: 75, width: 75 },
      { format: 'mediumThreeByTwo210', url: 'https://static01.nyt.com/images/2025/04/07/multimedia/00BIZ-TARIFFS-INVESTORS-qklv/00BIZ-TARIFFS-INVESTORS-qklv-thumbStandard.jpg', height: 140, width: 210 }
    ]
  };

  it('handles single media object', () => {
    const result = mediaMetaData({
      media: mockMedia,
      filter: 'Standard Thumbnail'
    });

    expect(result).toEqual({
      caption: 'The New York Stock Exchange on Monday',
      copyright: 'Ashley Gilbertson for The New York Times',
      type: 'image',
      subtype: 'photo',
      metadata: {
        format: 'Standard Thumbnail',
        url: 'https://static01.nyt.com/images/2025/04/07/multimedia/00BIZ-TARIFFS-INVESTORS-qklv/00BIZ-TARIFFS-INVESTORS-qklv-thumbStandard.jpg',
        height: 75,
        width: 75
      }
    });
  });

  it('handles media array', () => {
    const result = mediaMetaData({
      media: [mockMedia],
      filter: 'mediumThreeByTwo210'
    });

    expect(result).toEqual({
      caption: 'The New York Stock Exchange on Monday',
      copyright: 'Ashley Gilbertson for The New York Times',
      type: 'image',
      subtype: 'photo',
      metadata: {
        format: 'mediumThreeByTwo210',
        url: 'https://static01.nyt.com/images/2025/04/07/multimedia/00BIZ-TARIFFS-INVESTORS-qklv/00BIZ-TARIFFS-INVESTORS-qklv-thumbStandard.jpg',
        height: 140,
        width: 210
      }
    });
  });

  it('returns default values for empty media array', () => {
    const result = mediaMetaData({
      media: [],
      filter: 'Standard Thumbnail'
    });

    expect(result).toEqual({
      caption: undefined,
      copyright: undefined,
      type: undefined,
      subtype: undefined,
      metadata: undefined
    });
  });

  it('returns undefined metadata when format not found', () => {
    const result = mediaMetaData({
      media: mockMedia,
      filter: 'mediumThreeByTwo440'
    });

    expect(result).toEqual({
      caption: 'The New York Stock Exchange on Monday',
      copyright: 'Ashley Gilbertson for The New York Times',
      type: 'image',
      subtype: 'photo',
      metadata: undefined
    });
  });
});