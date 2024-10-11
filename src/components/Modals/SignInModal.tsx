import { Container, Modal } from '@mui/material'
import { SignInForm } from '../Forms/SignInForm'
import styled from '@emotion/styled'
import { theme } from 'src/theme'
import type { SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { signInWithEmail } from 'src/api/userOperations'
interface ISignInModal {
  open: boolean
  handleClose: () => void
}
interface IInputs {
  email: string
  password: string
}
export const SignInModal = ({ open, handleClose }: ISignInModal) => {
  const [loginErrors, setLoginErrors] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onSubmit: SubmitHandler<IInputs> = async ({ email, password }) =>
    signInWithEmail(email, password, setLoginErrors, setIsLoggedIn)
  return (
    <Modal open={open} onClose={handleClose}>
      <ContainerStyled>
        <SignInForm onSubmit={onSubmit} />
      </ContainerStyled>
    </Modal>
  )
}

const ContainerStyled = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px ${theme.accentColor};
  border-radius: 5px;
`
