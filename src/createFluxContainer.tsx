import * as React from 'react';

interface ContainerProps {
  initialState: any;
  children: any;
}

function createFluxContainer(reducer: any, initialState: any) {
  const Context = React.createContext(initialState);

  const Container: React.FunctionComponent<ContainerProps> = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    );
  };

  const useFluxContext = () => React.useContext(Context);

  return {
    Container,
    Consumer: Context.Consumer,
    useFluxContext,
  };
}

export default createFluxContainer;
