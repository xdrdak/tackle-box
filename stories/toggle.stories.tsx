import * as React from 'react';

import { storiesOf } from '@storybook/react';

import useToggle from '../src/useToggle';

const ToggleExample = () => {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <span>{isToggled ? '☀️' : '🌙'}</span>
    </div>
  );
};

storiesOf('ToggleExample', module).add('story', () => <ToggleExample />);
