import * as React from 'react';

import { storiesOf } from '@storybook/react';

import createFluxContainer from '../src/createFluxContainer';

const initialState = {
  animals: ['serval', 'caracal', 'fennec'],
  currentZoo: 'japari park',
  currentZooKeeper: 'You!',
};

function reducer(state: any, action: any) {
  console.log(state, action);
  return state;
}
const { Container, Consumer, useFluxContext }: any = createFluxContainer(reducer, initialState);

const AnimalLister = () => {
  const { state }: { state: any } = useFluxContext();

  return (
    <ul>
      {state.animals.map((animal: any) => (
        <li key={animal}>{animal}</li>
      ))}
    </ul>
  );
};

const ZooKeeper = () => {
  const { state, dispatch }: { state: any, dispatch: any } = useFluxContext();

  return (
    <div>
      Current zoo keeper: {state.currentZooKeeper}
      <button onClick={() => dispatch('help')}>I don't wanna be the keeper any more!</button>
    </div>
  );
}

const CreateFluxContainerExample = () => {
  return (
    <Container>
      <div>
        what is the park name?
        <Consumer>
          {({ state }: { state: any }) => state.currentZoo}
        </Consumer>
        <ZooKeeper />
        <AnimalLister />
      </div>
    </Container>
  );
};

storiesOf('CreateFluxContainerExample', module).add('story', () => (
  <CreateFluxContainerExample />
));
