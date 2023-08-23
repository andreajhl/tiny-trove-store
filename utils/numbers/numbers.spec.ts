import { showWithPoints, roundToTwoDecimals } from '.';

describe('numbers', () => {
  describe('showWithPoints', () => {
    test('should show with points separator', () => {
      expect(showWithPoints(12000)).toBe('12.000');
    });

    test('returns zero if the value is null or non-existent', () => {
      expect(showWithPoints()).toBe('0');
    });
  });

  describe('roundToTwoDecimals', () => {
    test('redondea un número con decimal a dos decimales', () => {
      expect(roundToTwoDecimals(2.47909)).toBe(2.48);
    });

    test('if the number is integer it does not add decimals', () => {
      expect(roundToTwoDecimals(4)).toBe(4);
    });
  });
});
