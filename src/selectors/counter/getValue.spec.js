import getValue from './getValue';

it('returns the value from the state with the specified identifier', () => {
  expect(getValue({ counter: { zero: 0 } }, 'zero')).toEqual(0);
  expect(getValue({ counter: { example: 1234 } }, 'example')).toEqual(1234);
});

it("defaults a counter's value to zero if it's identifier is not present in the state", () => {
  expect(getValue({ counter: { zero: 0 } }, 'value')).toEqual(0);
  expect(getValue({ counter: { example: 1234 } }, 'anotherValue')).toEqual(0);
});

it('has a default counter identifier of "default"', () => {
  expect(getValue({ counter: { default: 1234 } })).toEqual(1234);
});
