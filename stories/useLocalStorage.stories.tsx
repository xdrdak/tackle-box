import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { useLocalStorage } from '../src';

const UseLocalStorage = () => {
  const [state, setState] = useLocalStorage('use-local-storage', 0);

  return (
    <div>
      Behold as this counter persists across time and space!
      <br />
      Counter: {state}
      <br />
      <button type="button" onClick={() => setState(state + 1)}>
        Add
      </button>
      <button type="button" onClick={() => setState(0)}>
        Reset
      </button>
    </div>
  );
};

storiesOf('UseLocalStorage', module).add('story', () => <UseLocalStorage />);
