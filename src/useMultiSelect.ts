import * as React from 'react';

type ToggleKeys<T> = { [key in keyof T]: boolean };

enum ActionTypes {
  TOGGLE_SINGLE = 'TOGGLE_SINGLE',
  SELECT_ALL = 'SELECT_ALL',
  DESELECT_ALL = 'DESELECT_ALL',
}

interface Actions {
  type: ActionTypes;
  payload?: string;
}

function reducer(state: ToggleKeys<any>, action: Actions) {
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
        'useMultiSelect dispatch: action or action type not found',
      );
  }
}

/**
 * Quickly create a controlled multi-select state
 *
 * @param initialState object with booleans as values
 *
 */
function useMultiSelect<T>(initialState: ToggleKeys<T>) {
  const [state, dispatch] = React.useReducer<
    React.Reducer<ToggleKeys<T>, Actions>
  >(reducer, initialState);

  return {
    state,
    toggle: (key: keyof T) =>
      dispatch({ type: ActionTypes.TOGGLE_SINGLE, payload: key as string }),
    selectAll: () => dispatch({ type: ActionTypes.SELECT_ALL, payload: '' }),
    deselectAll: () =>
      dispatch({ type: ActionTypes.DESELECT_ALL, payload: '' }),
  };
}

export default useMultiSelect;
