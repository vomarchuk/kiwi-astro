import React from 'react'
import {
  Box,
  Button,
  Container,
  InputLabel,
  Modal,
  TextField,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

interface IInputs {
  email: string
  password: string
}
interface LoginFormProps {
  onSubmit: any
}

interface ISignInModal {
  open: boolean
  handleClose: () => void
}
export const SignInModal = ({ open, handleClose }: ISignInModal) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<IInputs>()
  const regex = /^[0-9a-zA-Z!@#$%^&*()-_+=,.<>:?/|[\]{}"'~`]*$/

  const onSubmit = async ({ email, password }: any) => {
    console.log(email, password)
  }
  return (
    <Modal open={open} onClose={handleClose}>
      <Container>
        <Box sx={{ backgroundColor: 'white', p: '50px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: regex,
                  message: 'Pole nie może zawierać specjalnych znaków',
                },
              }}
              render={() => (
                <Box>
                  <InputLabel>Email</InputLabel>
                  <TextField placeholder="email" {...register('email')} />
                </Box>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={() => (
                <Box>
                  <InputLabel>Hasło</InputLabel>
                  <TextField placeholder="hasło" {...register('password')} />
                </Box>
              )}
            />
            <Button type="submit" disabled={!isValid}>
              Zaloguj się
            </Button>
          </form>
        </Box>
      </Container>
    </Modal>
  )
}
