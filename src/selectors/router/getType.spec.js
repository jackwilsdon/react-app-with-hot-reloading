import getType from './getType';

it('returns the current value from the state', () => {
  expect(getType({ location: { type: 'routes/home' } })).toEqual('routes/home');
  expect(getType({ location: { type: 'routes/example' } })).toEqual(
    'routes/example',
  );
});
