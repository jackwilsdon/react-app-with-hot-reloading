import * as actions from '../actions';
import pickBy from 'lodash/pickBy';
import isFunction from 'lodash/isFunction';

export default pickBy(actions, action => isFunction(action));
