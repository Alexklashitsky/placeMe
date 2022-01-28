export function updateText(msg) {
  return (dispatch, getState) => {
    const action = { type: 'SET_MSG', msg };
    console.log('action:', action);

    dispatch(action);
  };
}
