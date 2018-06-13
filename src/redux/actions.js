import * as actions from '../actions';
import isFunction from 'lodash/isFunction';
import pickBy from 'lodash/pickBy';

export default pickBy(actions, action => isFunction(action));
