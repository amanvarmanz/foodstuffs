import React from 'react';
import '@mantine/core/styles.css';
import { Button, MantineProvider, Text } from '@mantine/core';

function App() {

  return (
    <>
      <MantineProvider>
        <Text c={'black'} fz={100}> Hello World </Text>
        <Button> Click Me </Button>
      </MantineProvider>
    </>
  )
}

export default App
