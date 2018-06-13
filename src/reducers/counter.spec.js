import { DECREMENT, INCREMENT, decrement, increment } from '../actions';
import reducer from './counter';

it(`should increment the counter when ${INCREMENT} is dispatched`, () => {
  expect(reducer(-1234, increment())).toEqual(-1233);
  expect(reducer(0, increment())).toEqual(1);
  expect(reducer(1234, increment())).toEqual(1235);
});

it(`should decrement the counter when ${DECREMENT} is dispatched`, () => {
  expect(reducer(-1234, decrement())).toEqual(-1235);
  expect(reducer(0, decrement())).toEqual(-1);
  expect(reducer(1234, decrement())).toEqual(1233);
});
