import { Plateau } from './plateau';

describe('Plateau', () => {
  it('creates a rectangular', () => {
    const plateau = new Plateau({ width: 10, height: 9 });
    expect(plateau.width).toEqual(10);
    expect(plateau.height).toEqual(9);
  });

  it('should accept 0s', () => {
    const plateau = new Plateau({ width: 0, height: 0 });
    expect(plateau).toBeDefined();
  });

  it('should throw error when params are not integer or less than 0', () => {
    expect(() => new Plateau({ width: -1, height: 0.8 })).toThrow();
  });

  describe('isValid', () => {
    it('should return true when coordinates inside the Plateau boundaries', () => {
      const plateau = new Plateau({ width: 5, height: 5 });
      expect(plateau.isValid(5, 5)).toBeTruthy();
      expect(plateau.isValid(0, 0)).toBeTruthy();
      expect(plateau.isValid(0, -1)).toBeFalsy();
      expect(plateau.isValid(6, 4)).toBeFalsy();
      expect(plateau.isValid(6, 4)).toBeFalsy();
    });
  });
});
