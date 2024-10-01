import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material'
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
      <Accordion>
        <AccordionSummary>1</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>2</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>3</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      {/* {items && items.map((item) => <p>{item.name}</p>)} */}
    </div>
  )
}

export default MyComponent
