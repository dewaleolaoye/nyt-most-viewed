import { formatDate } from './formatDate'; // adjust path if different

describe('formatDate', () => {
  it('formats date from YYYY-MM-DD to "MMM dd, yyyy"', () => {
    const result = formatDate('2025-04-08');
    expect(result).toBe('Apr 08, 2025');
  });

  it('throws an error for invalid date strings', () => {
    expect(() => formatDate('invalid-date')).toThrow();
  });
});
