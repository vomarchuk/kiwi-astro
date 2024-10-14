import { Container, Modal } from '@mui/material'
import { SignInForm } from '../Forms/SignInForm'
import styled from '@emotion/styled'
import { theme } from 'src/theme'
import type { SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import {
  fetchUserData,
  getCurrentUserUid,
  signInWithEmail,
} from 'src/api/userOperations'
import { useQueryClient } from '@tanstack/react-query'
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
  const [currentUserId, setCurrentUserId] = useState<any>()

  const queryClient = useQueryClient()
  const onSubmit: SubmitHandler<IInputs> = async ({ email, password }) => {
    signInWithEmail(email, password, setLoginErrors, setIsLoggedIn)
    handleClose()
  }
  if (currentUserId) {
    fetchUserData(currentUserId).then((data) => {
      queryClient.setQueryData(['user'], data)
    })
  }

  useEffect(() => {
    if (isLoggedIn) {
      getCurrentUserUid().then((user) => setCurrentUserId(user))
    }
  }, [isLoggedIn])

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
