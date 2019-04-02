import * as React from 'react';

type FetchState<Payload> = {
  loading?: boolean;
  error?: any;
  data?: Payload;
}

function useFetch<Payload>(url: string) {
  const [state, setState] = React.useState<FetchState<Payload>>({
    loading: true,
    error: null,
    data: undefined,
  });

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {
        setState({
          loading: false,
          data: jsonData,
        });
      })
      .catch(e => {
        setState({
          loading: false,
          error: e,
        });
      });
  }, []);

  return state;
}

export default useFetch;
