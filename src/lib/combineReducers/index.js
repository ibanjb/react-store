import getUnexpectedInvocationParameterMessage from './getUnexpectedInvocationParameterMessage';
import validateNextState from './validateNextState';
import Immutable from 'immutable';

export default (reducers) => {
  const reducerKeys = Object.keys(reducers);

  return (inputState, action) => {
    let _inputState = inputState;

    if (_inputState === undefined) {
      _inputState = new Immutable.Map();
    }

    if (process.env.NODE_ENV === 'development') {
      const warningMessage = getUnexpectedInvocationParameterMessage(_inputState, reducers, action);

      if (warningMessage) {
        console.error(warningMessage); // eslint-disable-line no-console
      }
    }

    return _inputState
      .withMutations((temporaryState) => {
        reducerKeys.forEach((reducerName) => {
          const reducer = reducers[reducerName];
          const currentDomainState = temporaryState.get(reducerName);
          const nextDomainState = reducer(currentDomainState, action);

          validateNextState(nextDomainState, reducerName, action);
          temporaryState.set(reducerName, nextDomainState);
        });
      });
  };
};
