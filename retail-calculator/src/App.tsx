import React, { useState, useEffect } from 'react';
import '@mantine/core/styles.css';
import { Button, MantineProvider, NumberInput, Select, Text } from '@mantine/core';
import { SelectRegion, type RegionCode, type RegionPair } from './constants/pricing';
import { getDiscount, getTax, getTotal } from './utils/CalculatePricing';

function App() {

  const [quantity, setQuantity] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const [region, setRegion] = useState<RegionCode | null>(null)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {

    if (region) {
      const totalValue = getTotal(price, quantity, region)
      setTotal(totalValue)
    }
  }, [region, price, quantity])
  

  const onQuantity = (value: number | string) => {
    setQuantity(value)
  }

  const onPrice = (value: number | string) => {
    setPrice(value)
  }

  const onRegion = (value: string | null) => {
    setRegion(value)
  }


  return (
      <MantineProvider>
        <div style={{ width:'25%', margin: 'auto',}}>
          <Text c={'black'} fz={25}> Retail Calculator </Text>
          <NumberInput value={price} label="Price Per Item" placeholder="Enter Price Per Item" onChange={onPrice}/>
          <NumberInput value={quantity} label="Number of Items" placeholder="Enter Number of Items" onChange={onQuantity}/>
          <Select value={region} label="Select Region" placeholder={'Select Region'} data={SelectRegion} onChange={onRegion}/>
          <Text c={'black'} fz={25}>Total: {total}</Text>
        </div>

      </MantineProvider>
  )
}

export default App
