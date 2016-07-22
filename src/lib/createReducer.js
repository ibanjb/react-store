import Immutable from 'immutable';

/**
 * Create a handler (action) map reducer for the given list of handlers
 *
 * @param  {object} initialState - The initial state of the reducer, expecting an Immutable.
 * Iterable instance, otherwise given initialState is converted to immutable. (Required)
 * @param  {object} handlers - A map of actions where key is action name and value is a
 * reducer function. (Required)
 * @param  {boolean} enforceImmutable = true - if to enforce immutable, in other words a TypeError
 * is thrown in case a handler returned anything that is not an Immutable.Iterable type.
 * @param  {function} constructor - A function to process non-immutable state,
 * defaults to Immutable.fromJS.
 * @return {object} The calculated next state
 */
export default function createReducer(initialState, handlers, enforceImmutable = true,
                                      constructor = Immutable.fromJS) {
  return (state = initialState, action) => {
    // _state => local state
    let _state = state;

    // convert the initial state to immutable, useful in universal apps where states were serialized
    if (!Immutable.Iterable.isIterable(_state)) {
      _state = constructor(_state);
    }

    // Gets the handler
    const handler = (action && action.type && handlers && handlers[action.type]) || undefined;
    // Default action
    if (!handler) { return _state; }
    // Execute handler
    _state = handler(_state, action);

    // Check if the handler returns an Immutable instance
    if (enforceImmutable && !Immutable.Iterable.isIterable(_state)) {
      throw new TypeError('Reducers must return Immutable objects.');
    }

    return _state;
  };
}
