import * as React from 'react';

import { storiesOf } from '@storybook/react';

import useFetch from '../src/useFetch';

type ServerPayload = {
  userId: number;
  id: number;
  title: string;
  completed: string;
};

const UseFetch = () => {
  const { data, error, loading } = useFetch<ServerPayload>(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>err...</div>;
  }

  if (data) {
    return <div>{data.title}</div>;
  }

  return <div>No data!</div>;
};

storiesOf('UseFetch', module).add('story', () => <UseFetch />);
