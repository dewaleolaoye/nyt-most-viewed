import '@testing-library/jest-dom';

// Mock scrollTo function for JSDOM
Element.prototype.scrollTo = jest.fn();

if (typeof structuredClone === 'undefined') {
  global.structuredClone = (obj) => {
    if (obj === undefined) return undefined;
    return JSON.parse(JSON.stringify(obj));
  };
}