import { formatByline, normalizeToArray } from "./articles";

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
