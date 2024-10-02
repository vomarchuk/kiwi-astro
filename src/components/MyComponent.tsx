import React, { useState, useEffect } from 'react'
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
import { getQueryParam } from '../helpers/getQueryParam'

interface IService {
  name: string
  id: string
  categoryId: string
  categoryName: string
  duration: string
  price: string
}
interface ICategory {
  name: string
}
const MyComponent: React.FC = () => {
  const [services, setServices] = useState<IService[]>()
  const [currentCategory, setCurrentCategory] = useState<ICategory>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const serviceId = getQueryParam('id')
    const fetchData = async () => {
      if (serviceId) {
        const fetchedItems: IService[] | undefined = await fetchItemsById(
          'services',
          serviceId,
        )
        const fetchedCategory: ICategory | undefined = await fetchItem(
          'categories',
          serviceId,
        )
        setCurrentCategory(fetchedCategory)
        setServices(fetchedItems)
        console.log(fetchedItems)
      }
    }
    fetchData()
  }, [])
  return (
    <Container sx={{ pt: '80px', textAlign: 'center' }}>
      {currentCategory && (
        <Typography
          component={'h1'}
          sx={{ fontSize: '24px', fontWeight: '600' }}
        >
          {currentCategory.name}
        </Typography>
      )}

      <TableContainer component={Paper} sx={{ mt: '15px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Usługa</TableCell>
              <TableCell>Cena</TableCell>
              <TableCell>Czas wykonania</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services &&
              services.map((service) => {
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
    </Container>
  )
}

export default MyComponent
