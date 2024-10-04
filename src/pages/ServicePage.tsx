import React from 'react'
import { fetchItem, fetchItemsById } from '../api/firebaseFunctions'
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import { useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useSearch } from '@tanstack/react-router'
import { queryClientParams } from '../helpers/queryClientParams'

const MyComponent: React.FC = () => {
  const { id } = useSearch({ from: '/services' }) as any
  const { data: dataCategory } = useQuery<any>(
    {
      queryKey: ['categories', id],
      queryFn: async () => await fetchItem('categories', id),
    },
    queryClientParams,
  )
  const { data: serviceData } = useQuery(
    {
      queryKey: ['services', id],
      queryFn: async () => await fetchItemsById('services', id),
    },
    queryClientParams,
  )
  return (
    <Container
      sx={{
        pt: '80px',
        textAlign: 'center',
        fontFamily: 'Raleway, sans-serif',
      }}
    >
      {dataCategory && (
        <Typography
          component={'h1'}
          sx={{ fontSize: '18px', fontWeight: '600' }}
        >
          {dataCategory.name}
        </Typography>
      )}

      <TableContainer component={Paper} sx={{ mt: '15px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '65%' }}>Usługa</TableCell>
              <TableCell sx={{ width: '25%' }}>Cena</TableCell>
              <TableCell sx={{ width: '10%' }}>Czas wykonania</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceData &&
              serviceData.map((service: any) => {
                return (
                  <TableRow key={service.id}>
                    <TableCell>{service.name}</TableCell>
                    <TableCell>{service.price} zł</TableCell>
                    <TableCell>{service.duration} min</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <ReactQueryDevtools client={queryClientParams} />
    </Container>
  )
}

export default MyComponent
