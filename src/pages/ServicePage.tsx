import React, { useEffect, useState } from 'react'
import { fetchItem, fetchItemsById, removeItem } from '../api/firebaseFunctions'
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Fab,
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
import { AddIconButton } from 'src/components/Buttons/AddIconButton'
import { CreateEditServicesModal } from 'src/components/Modals/CreateEditServicesModal'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const MyComponent: React.FC = () => {
  const { id } = useSearch({ from: '/services' }) as any
  const [currentUserId, setCurrentUserId] = useState<any>()
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [editItemId, setEditItemId] = useState<any>(null)
  const [currentRemoveItem, setCurrentRemoveItem] = useState<any>(null)
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
  const handleClickOpenDialog = () => {
    const findRemoveItem = serviceData?.find(
      (item: any) => item.id === editItemId,
    )
    setCurrentRemoveItem(findRemoveItem)
    setOpenDialog(true)
  }
  const handleClickCloseDialog = () => setOpenDialog(false)

  const editItemById = () => {
    setAnchorEl(null)
    handleClickOpen()
  }
  const removeItemById = () => {
    removeItem('services', editItemId)
    queryClient.invalidateQueries({ queryKey: ['services'] })
    setCurrentRemoveItem(null)
    setOpenDialog(false)
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
      {dataCategory && (
        <CreateEditServicesModal
          open={open}
          handleClose={handleClose}
          title={dataCategory.name}
          editItemId={editItemId}
        />
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
              {dataCurrentUser && <TableCallStyled>Edytuj</TableCallStyled>}
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceData &&
              serviceData
                .sort((a: any, b: any) => a.name.localeCompare(b.name))
                .map((service: any) => {
                  // console.log(service.displayOrder)

                  return (
                    <TableRow key={service.id}>
                      <TableCallStyled>{service.name}</TableCallStyled>
                      <TableCallStyled>{service.price} zł</TableCallStyled>
                      <TableCallStyled>{service.duration} min</TableCallStyled>
                      {dataCurrentUser && (
                        <TableCallStyled
                          sx={{
                            display: 'table-cell',
                            alignItems: 'center',
                          }}
                        >
                          <Fab
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
                          </Fab>
                          <Menu
                            open={openOptionsMenu}
                            onClose={handleCloseSelectionsMenu}
                            anchorEl={anchorEl}
                            slotProps={{
                              paper: {
                                style: {
                                  backgroundColor: 'transparent',
                                  boxShadow: 'none',
                                },
                              },
                            }}
                          >
                            <MenuItemStyled disableGutters>
                              <Fab
                                color="primary"
                                aria-label="edit"
                                onClick={editItemById}
                                sx={{ boxShadow: 'none' }}
                              >
                                <EditIcon />
                              </Fab>
                            </MenuItemStyled>
                            <MenuItemStyled
                              disableGutters
                              sx={{
                                marginTop: '5px',
                              }}
                            >
                              <Fab
                                color="error"
                                aria-label="remove"
                                onClick={handleClickOpenDialog}
                                sx={{ boxShadow: 'none' }}
                              >
                                <DeleteForeverIcon />
                              </Fab>
                            </MenuItemStyled>
                            <Dialog
                              open={openDialog}
                              // TransitionComponent={Transition}
                              keepMounted
                              onClose={handleClose}
                              aria-describedby="alert-dialog-slide-description"
                            >
                              <DialogTitle>
                                Czy na pewno chcesz usunąć:{' '}
                                <Span>
                                  {currentRemoveItem && currentRemoveItem.name}
                                </Span>
                                ?
                              </DialogTitle>
                              <DialogActions>
                                <Button onClick={handleClickCloseDialog}>
                                  Nie
                                </Button>
                                <Button onClick={removeItemById}>Tak</Button>
                              </DialogActions>
                            </Dialog>
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
  min-height: 50px;
`
const Span = styled.span`
  color: red;
  font-weight: bold;
`
const MenuItemStyled = styled(MenuItem)`
  border-radius: 50%;
  width: 56px;
  height: 56px;
  padding: 0px;
`
