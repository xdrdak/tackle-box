import * as React from 'react';

import { storiesOf } from '@storybook/react';

import useToggle from '../src/useToggle';
import useMultiToggle from '../src/useMultiToggle';

const ToggleExample = () => {
  const { isToggled, toggle } = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <span>{isToggled ? '☀️' : '🌙'}</span>
    </div>
  );
};

const MultiToggleExample = () => {
  const { state, toggle, selectAll, deselectAll } = useMultiToggle({
    lion: false,
    tiger: false,
    bear: false,
  });

  return (
    <div>
      <button onClick={selectAll}>Reveal All</button>
      <button onClick={deselectAll}>Close All</button>
      <button onClick={() => toggle('lion')}>
        What animal is hiding here?
      </button>
      <span>{state.lion ? '🦁' : '🚪'}</span>
      <button onClick={() => toggle('tiger')}>
        What animal is hiding here?
      </button>
      <span>{state.tiger ? '🐯' : '🚪'}</span>
      <button onClick={() => toggle('bear')}>
        What animal is hiding here?
      </button>
      <span>{state.bear ? '🐻' : '🚪'}</span>
    </div>
  );
};

storiesOf('ToggleExample', module).add('story', () => <ToggleExample />);

storiesOf('MultiToggleExample', module).add('story', () => (
  <MultiToggleExample />
));
