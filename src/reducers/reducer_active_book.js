// state arg is not app state, only the state this reducer is responsible for
// es6 shortcut: if state is undef, set to null
export default function(state = null, action) {
  // do care about action
  switch (action.type) {
    case 'BOOK_SELECTED':
    // change the state (by returning a new one)
    // if changing state you want to return a fresh object, don't just change state
      return action.payload;
  }
  // base case: don't care about action, return current state
  return state;
}
