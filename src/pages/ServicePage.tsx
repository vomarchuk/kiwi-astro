import React, { useEffect, useState } from 'react'
import { fetchItem, fetchItemsById, removeItem } from '../api/firebaseFunctions'
import {
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useSearch } from '@tanstack/react-router'
import { queryClientParams } from '../helpers/queryClientParams'
import styled from '@emotion/styled'
import { fetchUserData, getCurrentUserUid } from 'src/api/userOperations'
import { theme } from 'src/theme'
import { AddIconButton } from 'src/components/Buttons/AddIconButton'
import { CreateEditServicesModal } from 'src/components/Modals/CreateEditServicesModal'
const MyComponent: React.FC = () => {
  const { id } = useSearch({ from: '/services' }) as any
  const [currentUserId, setCurrentUserId] = useState<any>()
  const [currentUser, setCurrentUser] = useState<any>()
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const [editItemId, setEditItemId] = useState<null | string>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setEditItemId(null)
  }

  const editItemById = (serviceId: string) => {
    setAnchorEl(null)
    setEditItemId(serviceId)
    handleClickOpen()
  }
  const removeItemById = (serviceId: string) => {
    removeItem('services', serviceId)
    queryClient.invalidateQueries({ queryKey: ['services'] })
    handleClose()
  }

  const { data: dataCurrentUser } = useQuery(
    {
      queryKey: ['user'],
      queryFn: async () => await fetchUserData(currentUserId),
    },
    queryClientParams,
  )
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

  useEffect(() => {
    getCurrentUserUid().then((user) => {
      if (user) {
        setCurrentUserId(user)
      }
    })
  }, [])

  return (
    <Container
      component={'main'}
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
      {dataCurrentUser && <AddIconButton onClick={handleClickOpen} />}
      <CreateEditServicesModal
        open={open}
        handleClose={handleClose}
        title={'test'}
        editItemId={editItemId}
      />
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
              {dataCurrentUser && <TableCell>Edytuj</TableCell>}
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
                      {dataCurrentUser && (
                        <TableCallStyled sx={{ display: 'flex' }}>
                          <IconButton
                            aria-label="edit service"
                            sx={{
                              '&:hover': {
                                '& > svg': {
                                  fill: 'green',
                                },
                              },
                            }}
                            onClick={() => editItemById(service.id)}
                          >
                            <EditIcon
                              sx={{
                                fill: `${theme.accentColor}`,
                              }}
                            />
                          </IconButton>
                          <IconButton
                            sx={{
                              '&:hover': {
                                '& > svg': {
                                  fill: 'tomato',
                                },
                              },
                            }}
                            aria-label="remove service"
                            onClick={() => removeItemById(service.id)}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </TableCallStyled>
                      )}
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
