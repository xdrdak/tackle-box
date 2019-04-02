import * as React from 'react';

import { storiesOf } from '@storybook/react';

import useClickOutside from '../src/useClickOutside';

const ClickOutsideExample = () => {
  const [state, setState] = React.useState('wanna try clicking outside?');
  const targetEl = useClickOutside(() =>
    setState('you clicked outside the fabulous papayawhip box!'),
  );

  return (
    <div>
      <div
        ref={targetEl}
        style={{ height: '300px', width: '300px', background: 'papayawhip' }}
      >
        <div>{state}</div>
        <div style={{ marginTop: '18px', background: 'cyan' }}>
          this is inside the bigger box
        </div>
      </div>
    </div>
  );
};

storiesOf('ClickOutsideExample', module).add('story', () => (
  <ClickOutsideExample />
));
