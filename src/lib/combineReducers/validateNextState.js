export default (nextState, reducerName, action) => {
  if (typeof nextState === 'undefined') {
    throw new Error(
      `Reducer "${reducerName}" returned undefined when handling "${action.type}" action.
      To ignore an action, you must explicitly return the previous state.`
    );
  }

  return null;
};
