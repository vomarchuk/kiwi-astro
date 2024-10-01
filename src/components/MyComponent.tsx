import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'

const MyComponent = () => {
  const [items, setItems] = useState<any>()
  const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedItems = await fetchItemsByCategoryId(
  //       'services',
  //       'W154NGGXXF3kHwwtgyY7',
  //     )
  //     setItems(fetchedItems)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div>
      DIV
      <Button>Click</Button>
      {/* {items && items.map((item) => <p>{item.name}</p>)} */}
    </div>
  )
}

export default MyComponent
