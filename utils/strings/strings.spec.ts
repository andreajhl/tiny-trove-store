import { normalizeText } from '.';

describe('strings', () => {
  describe('normalizeText', () => {
    test('validates that the text exists and returns in uppercase', () => {
      expect(normalizeText(' TeSt ')).toEqual('test');
    });
  });
});
