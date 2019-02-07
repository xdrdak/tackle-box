import { useReducer } from 'react';

interface ToggleKeys {
  [key: string]: boolean;
}

enum ActionTypes {
  TOGGLE_SINGLE = 'TOGGLE_SINGLE',
  SELECT_ALL = 'SELECT_ALL',
  DESELECT_ALL = 'DESELECT_ALL',
}

type Actions = {
  type: ActionTypes;
  payload?: string;
};

function reducer(state: ToggleKeys, action: Actions) {
  switch (action.type) {
    case ActionTypes.TOGGLE_SINGLE:
      if (action.payload === undefined || action.payload in state === false) {
        console.warn('Key not found');
        return state;
      }

      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    case ActionTypes.DESELECT_ALL:
      return Object.keys(state).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
    case ActionTypes.SELECT_ALL:
      return Object.keys(state).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
    default:
      throw new Error(
        'useMultiToggle dispatch: action or action type not found',
      );
  }
}

function useMultiToggle(initialState: ToggleKeys) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state: state as ToggleKeys,
    toggle: (key: string) =>
      dispatch({ type: ActionTypes.TOGGLE_SINGLE, payload: key }),
    selectAll: () => dispatch({ type: ActionTypes.SELECT_ALL, payload: '' }),
    deselectAll: () =>
      dispatch({ type: ActionTypes.DESELECT_ALL, payload: '' }),
  };
}

export default useMultiToggle;
