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
import { useSearch } from '@tanstack/react-router'
import { queryClientParams } from '../helpers/queryClientParams'
import styled from '@emotion/styled'
import type { IService } from '../helpers/types'
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
        pt: '100px',
        pb: '80px',
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
              <TableCallStyled sortDirection={'asc'} sx={{ width: '68%' }}>
                Usługa
              </TableCallStyled>
              <TableCallStyled sx={{ width: '22%' }}>Cena</TableCallStyled>
              <TableCallStyled sx={{ width: '10%' }}>
                Czas wykonania
              </TableCallStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceData &&
              serviceData
                .sort((a: any, b: any) => a.name.localeCompare(b.name))
                .map((service: any) => {
                  return (
                    <TableRow key={service.id}>
                      <TableCallStyled>{service.name}</TableCallStyled>
                      <TableCallStyled>{service.price} zł</TableCallStyled>
                      <TableCallStyled>{service.duration} min</TableCallStyled>
                    </TableRow>
                  )
                })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default MyComponent

const TableCallStyled = styled(TableCell)`
  padding: 15px 10px;
`
