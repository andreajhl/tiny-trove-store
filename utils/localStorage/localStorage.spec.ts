import { getLocalStorage, setLocalStorage } from '.';

const key = 'testKey';
const data = { name: 'John', age: 25 };

afterEach(() => localStorage.clear());
beforeEach(() => localStorage.setItem(key, JSON.stringify(data)));

describe('localStorage', () => {

  describe('getLocalStorage', () => {
    test('getLocalStorage should return null for non-existent key', () => {
      const keyError = 'nonExistentKey';
      const result = getLocalStorage(keyError);
      expect(result).toBeUndefined();
    });

    test('getLocalStorage should return parsed data for existing key', () => {
      const result = getLocalStorage(key);
      expect(result).toBeDefined();
    });
  });

  describe('setLocalStorage', () => {
    test('setLocalStorage should store data in localStorage', () => {
      const key2 = 'testKey-2';

      setLocalStorage(key2, data);
      expect(window.localStorage.getItem(key2)).toBeDefined();
    });
  });
});
