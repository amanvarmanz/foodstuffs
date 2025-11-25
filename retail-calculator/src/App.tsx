import React, { useState, useEffect } from 'react';
import '@mantine/core/styles.css';
import { Button, MantineProvider, NumberInput, Select, Text } from '@mantine/core';
import { SelectRegion, type RegionCode, type RegionPair } from './constants/pricing';
import { getAddedTax, getDiscountedPrice } from './utils/CalculatePricing';

function App() {

  const [quantity, setQuantity] = useState<string | number>(0)
  const [price, setPrice] = useState<string | number>(0)
  const [region, setRegion] = useState<string | null>(null)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {

    if (region) {
      const discountedPrice = getDiscountedPrice(price as number, quantity as number)
      const addedTax = getAddedTax(discountedPrice, region as RegionCode)
      setTotal(addedTax)
    }
  }, [region, price, quantity])
  

  const onQuantity = (value: string | number) => {
    setQuantity(value)
  }

  const onPrice = (value: string | number) => {
    setPrice(value)
  }

  const onRegion = (value: string | null) => {
    setRegion(value)
  }


  return (
      <MantineProvider>
        <div style={{ width:'25%', margin: 'auto',}}>
          <Text c={'black'} fz={25}> Retail Calculator </Text>
          <NumberInput value={quantity} label="Number of Items" placeholder="Enter Number of Items" onChange={onQuantity}/>
          <NumberInput value={price} label="Price Per Item" placeholder="Enter Price Per Item" onChange={onPrice}/>
          <Select value={region} label="Select Region" placeholder={'Select Region'} data={SelectRegion} onChange={onRegion}/>
          <Text c={'black'} fz={25}>Total: {total}</Text>
        </div>

      </MantineProvider>
  )
}

export default App
