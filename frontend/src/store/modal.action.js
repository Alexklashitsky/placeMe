export function updateText(txt) {
  return (dispatch, getState) => {
    const action = { type: 'SET_MSG', txt };
    dispatch(action);
  };
}
