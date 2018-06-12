import * as counterActions from '../counter/ducks/actions';

const actions = {
  counter: counterActions,
};

// Map each action creator into an attribute named 'group/actionCreator'.
Object.keys(actions).forEach(group => {
  // Loop through each action creator in this group.
  Object.keys(actions[group]).forEach(actionCreator => {
    // It's not an action creator if it's not a function!
    if (typeof actions[group][actionCreator] !== 'function') {
      return;
    }

    actions[`${group}/${actionCreator}`] = actions[group][actionCreator];
  });

  // Remove the group when we're done.
  delete actions[group];
});

export default actions;
