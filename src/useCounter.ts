import * as React from 'react';

/**
 * Hook to quicly create a counter that increments over time
 * Particularly useful for triggering re-renders and checking for
 * memory leaks within the profiler.
 *
 * @param ms Milliseconds before an increase in the counter value
 */
function useCounter(ms = 1000) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, ms);
    return () => clearInterval(id);
  }, []);

  return count;
}

export default useCounter;
