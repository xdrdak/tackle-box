import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { createFluxContainer } from '../src';

const initialState = {
  animals: ['serval', 'caracal', 'fennec'],
  currentZoo: 'japari park',
  currentZooKeeper: 'You!',
};

type Action = { type: 'help' } | { type: 'what'; payload: string };

function reducer(state: any, action: Action) {
  switch (action.type) {
    case 'help':
      return {
        ...state,
        currentZooKeeper: 'Not you',
      };
    default:
      return state;
  }
}
const { Container, useFluxContext } = createFluxContainer(
  reducer,
  initialState,
);

const AnimalLister = () => {
  const { state } = useFluxContext();

  return (
    <ul>
      {state.animals.map((animal: any) => (
        <li key={animal}>{animal}</li>
      ))}
    </ul>
  );
};

const ZooKeeper = () => {
  const { state, dispatch } = useFluxContext();

  return (
    <div>
      Current zoo keeper: {state.currentZooKeeper}
      <button
        onClick={() => {
          dispatch({ type: 'help' });
        }}
      >
        I don&lsquo;t wanna be the keeper any more!
      </button>
    </div>
  );
};

const CreateFluxContainerExample = () => {
  return (
    <Container>
      <div>
        what is the park name?&nbsp;
        <ZooKeeper />
        <AnimalLister />
      </div>
    </Container>
  );
};

storiesOf('CreateFluxContainerExample', module).add('story', () => (
  <CreateFluxContainerExample />
));
