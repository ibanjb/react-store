export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, ...rest } = action; // eslint-disable-line no-use-before-define

    if (!promise) { return next(action); }

    const SUCCESS = `${type}_SUCCESS`;
    const REQUEST = `${type}_REQUEST`;
    const FAILURE = `${type}_FAILURE`;

    next({ ...rest, type: REQUEST });

    return promise
      .then(result => next({ ...rest, result, type: SUCCESS }))
      .catch(error => next({ ...rest, error, type: FAILURE }));
  };
}
