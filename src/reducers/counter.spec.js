import { DECREMENT, INCREMENT, decrement, increment } from '../actions';
import reducer from './counter';

it(`should not affect other counters when incrementing or decrementing a counter with an identifier`, () => {
  expect(
    reducer({ notAffected: 1234, example: 5678 }, increment('example')),
  ).toEqual({
    notAffected: 1234,
    example: 5679,
  });

  expect(
    reducer({ notAffected: 1234, example: 5678 }, decrement('example')),
  ).toEqual({
    notAffected: 1234,
    example: 5677,
  });
});

it(`should increment the default counter when ${INCREMENT} is dispatched without an identifier`, () => {
  expect(reducer({}, increment())).toEqual({ default: 1 });
  expect(reducer({ default: 0 }, increment())).toEqual({ default: 1 });
  expect(reducer({ default: -1234 }, increment())).toEqual({ default: -1233 });
  expect(reducer({ default: 1234 }, increment())).toEqual({ default: 1235 });
});

it(`should increment the correct counter when ${INCREMENT} is dispatched with an identifier`, () => {
  expect(reducer({}, increment('example'))).toEqual({ example: 1 });
  expect(reducer({ example: 0 }, increment('example'))).toEqual({
    example: 1,
  });
  expect(reducer({ example: -1234 }, increment('example'))).toEqual({
    example: -1233,
  });
  expect(reducer({ example: 1234 }, increment('example'))).toEqual({
    example: 1235,
  });
});

it(`should decrement the default counter when ${DECREMENT} is dispatched without an identifier`, () => {
  expect(reducer({}, decrement())).toEqual({ default: -1 });
  expect(reducer({ default: 0 }, decrement())).toEqual({ default: -1 });
  expect(reducer({ default: -1234 }, decrement())).toEqual({ default: -1235 });
  expect(reducer({ default: 1234 }, decrement())).toEqual({ default: 1233 });
});

it(`sshould decrement the correct counter when ${DECREMENT} is dispatched with an identifier`, () => {
  expect(reducer({}, decrement('example'))).toEqual({ example: -1 });
  expect(reducer({ example: 0 }, decrement('example'))).toEqual({
    example: -1,
  });
  expect(reducer({ example: -1234 }, decrement('example'))).toEqual({
    example: -1235,
  });
  expect(reducer({ example: 1234 }, decrement('example'))).toEqual({
    example: 1233,
  });
});
