import getValue from './getValue';

it('returns the current value from the state', () => {
  expect(getValue({ counter: 0 })).toEqual(0);
  expect(getValue({ counter: 1234 })).toEqual(1234);
});
