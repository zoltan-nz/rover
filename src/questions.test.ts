import { parseArea, parseInstructions, parseLandingPosition } from './questions';

describe('parseArea', () => {
  test.each([
    ['5 5', { width: 5, height: 5 }],
    ['7888 9999', { width: 7888, height: 9999 }],
    ['', undefined],
    ['55', undefined],
    ['AF', undefined],
    ['1.2 3.4', undefined],
  ])('input: %s, expected: %o', (input, expected) => {
    expect(parseArea(input)).toEqual(expected);
  });
});

describe('parseLandingPosition', () => {
  test.each([
    ['5 4 E', { x: 5, y: 4, direction: 'E' }],
    ['578 4329 E', { x: 578, y: 4329, direction: 'E' }],
    ['', undefined],
    ['ASDF', undefined],
    ['1 2 A', undefined],
  ])('input: %s, expected: %o', (input, expected) => {
    expect(parseLandingPosition(input)).toEqual(expected);
  });
});

describe('parseInstructions', () => {
  test.each([
    ['MLR', ['M', 'L', 'R']],
    ['MMMM', ['M', 'M', 'M', 'M']],
    ['MMMLLLRRFFF', undefined],
    ['', undefined],
    ['ASDF', undefined],
    ['1 2 A', undefined],
  ])('input: %s, expected: %o', (input, expected) => {
    expect(parseInstructions(input)).toEqual(expected);
  });
});
