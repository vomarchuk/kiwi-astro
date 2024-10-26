import { Box, Modal, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { CreateEditServiceForm } from '../Forms/CreateEditServicesForm'
import { CloseIconButton } from '../Buttons/CloseIconButton'

interface ICreateServiceForm {
  open: boolean
  handleClose: () => void
  title?: string
  editItemId: string | null
}
export const CreateEditServicesModal = ({
  open,
  handleClose,
  title,
  editItemId = null,
}: ICreateServiceForm) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ContainerStyled
        sx={{
          maxHeight: { xs: '60vh', md: '80vh' },
        }}
      >
        <HeaderContainerStyled>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: 'center' }}
          >
            Dodaj usługe do kategorii {title?.toLocaleUpperCase()}
          </Typography>
          <CloseIconButton onClick={handleClose} />
        </HeaderContainerStyled>
        <CreateEditServiceForm
          handleCloseModal={handleClose}
          editServiceId={editItemId}
        />
      </ContainerStyled>
    </Modal>
  )
}

const ContainerStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  padding: 25px;
  background-color: white;
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow-y: auto;
`
const HeaderContainerStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
`
