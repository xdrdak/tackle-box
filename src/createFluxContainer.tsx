import * as React from 'react';

type Reducer<State, Action> = (state: State, action: Action) => any;
type ProviderValue<State, Type> = {
  state: State;
  dispatch?: (action: Type) => void;
};

function createFluxContainer<State, Action, InitialState>(
  reducer: Reducer<State, Action>,
  initialState: InitialState,
) {
  const Context = React.createContext<ProviderValue<InitialState, Action>>({
    state: initialState,
  });

  const Container: React.FunctionComponent = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useFluxContext = () => React.useContext(Context);

  return {
    Container,
    Consumer: Context.Consumer,
    useFluxContext,
  };
}

export default createFluxContainer;
