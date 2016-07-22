export default (action) => (
  action && action.type === '@@redux/INIT'
    ? 'initialState argument passed to createStore'
    : 'previous state received by the reducer'
);
