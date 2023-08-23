import { calculateInitialPage } from ".";

describe('utils', () => {
  describe('calculateInitialPage', () => {
    test('calculates initial page correctly when offset is provided', () => {
      const offset = '20';
      const expectedPage = 2; 
  
      expect(calculateInitialPage(offset)).toEqual(expectedPage);
    });
  
    test('calculates initial page as 0 when offset is not provided', () => {
      const offset = '';
      const expectedPage = 0;
  
      expect(calculateInitialPage(offset)).toEqual(expectedPage);
    });
  });
});
