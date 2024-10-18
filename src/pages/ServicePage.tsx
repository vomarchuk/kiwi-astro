import React, { useEffect, useState } from 'react'
import { fetchItem, fetchItemsById, removeItem } from '../api/firebaseFunctions'
import {
  Container,
  IconButton,
  Menu,
  MenuItem,
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
import MoreVertIcon from '@mui/icons-material/MoreVert'

const MyComponent: React.FC = () => {
  const { id } = useSearch({ from: '/services' }) as any
  const [currentUserId, setCurrentUserId] = useState<any>()
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const [editItemId, setEditItemId] = useState<any>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setEditItemId(null)
  }
  const openOptionsMenu = Boolean(anchorEl)
  const handleOpenSelectionsMenu = (
    event: React.MouseEvent<HTMLElement>,
    itemId: string,
  ) => {
    setEditItemId(itemId)
    setAnchorEl(event.currentTarget)
  }
  const handleCloseSelectionsMenu = () => {
    setAnchorEl(null)
    setEditItemId(null)
  }

  const editItemById = () => {
    setAnchorEl(null)
    handleClickOpen()
  }
  const removeItemById = () => {
    console.log(editItemId)

    removeItem('services', editItemId)
    queryClient.invalidateQueries({ queryKey: ['services'] })
    setAnchorEl(null)
    setEditItemId(null)
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
              {dataCurrentUser && <TableCallStyled>Edytuj</TableCallStyled>}
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
                        <TableCallStyled
                          sx={{ display: 'flex', height: '100px' }}
                        >
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={
                              openOptionsMenu ? 'long-menu' : undefined
                            }
                            aria-expanded={openOptionsMenu ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={(e) => {
                              handleOpenSelectionsMenu(e, service.id)
                            }}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            open={openOptionsMenu}
                            onClose={handleCloseSelectionsMenu}
                            anchorEl={anchorEl}
                            slotProps={{
                              paper: {
                                style: {
                                  width: '20ch',
                                },
                              },
                            }}
                          >
                            <MenuItem>
                              <IconButtonEdit
                                aria-label="edit service"
                                onClick={editItemById}
                              >
                                <EditIcon />
                              </IconButtonEdit>
                            </MenuItem>
                            <MenuItem>
                              <IconButtonRemove
                                aria-label="remove service"
                                onClick={removeItemById}
                              >
                                <DeleteForeverIcon />
                              </IconButtonRemove>
                            </MenuItem>
                          </Menu>
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
const IconButtonRemove = styled(IconButton)`
  &:hover {
    & > svg {
      fill: tomato;
    }
  }
`
const IconButtonEdit = styled(IconButton)`
  & > svg {
    fill: ${theme.accentColor};
  }
  &:hover {
    & > svg {
      fill: tomato;
    }
  }
`
