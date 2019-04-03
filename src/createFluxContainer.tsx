import * as React from 'react';

type Reducer<State, Action> = (state: State, action: Action) => any;
interface ProviderValue<State, Type> {
  state: State;
  dispatch?: (action: Type) => void;
}

type Props = {
  children: React.ReactNode;
};

function createFluxContainer<State, Action, InitialState>(
  reducer: Reducer<State, Action>,
  initialState: InitialState,
) {
  const Context = React.createContext<ProviderValue<InitialState, Action>>({
    state: initialState,
  });

  const Container: React.FunctionComponent<Props> = ({ children }: Props) => {
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
