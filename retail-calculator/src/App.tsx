import React from 'react';
import '@mantine/core/styles.css';
import { Button, MantineProvider, NumberInput, Select, Text } from '@mantine/core';
import { SelectRegion } from './constants/pricing';

function App() {

  return (
    <>
      <MantineProvider>
        <div style={{ width:'25%', margin: 'auto',}}>
          <Text c={'black'} fz={25}> Retail Calculator </Text>
          <NumberInput  label="Number of Items" placeholder="Enter Number of Items" />
          <NumberInput  label="Price Per Item" placeholder="Enter Price Per Item" />
          <Select label="Select Region" placeholder={'Select Region'} data={SelectRegion} />
        </div>

      </MantineProvider>
    </>
  )
}

export default App
