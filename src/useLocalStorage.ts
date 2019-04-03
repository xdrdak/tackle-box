import * as React from 'react';

function useLocalStorage(key: string, initialState: any = '') {
  const item = window.localStorage.getItem(key) || initialState;
  const [state, setState] = React.useState(JSON.parse(item));

  const augmentedSetState = (nextState: any) => {
    window.localStorage.setItem(key, JSON.stringify(nextState));
    setState(nextState);
  };

  return [state, augmentedSetState];
}

export default useLocalStorage;
