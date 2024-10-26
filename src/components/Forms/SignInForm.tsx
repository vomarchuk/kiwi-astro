import { Box, Button, InputLabel, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { REGEX_EMAIL } from '../../constants/REGEX'
import styled from '@emotion/styled'
import { theme } from 'src/theme'
interface IInputs {
  email: string
  password: string
}
interface LoginFormProps {
  onSubmit: any
}

export const SignInForm = ({ onSubmit }: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<IInputs>()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: true,
          pattern: {
            value: REGEX_EMAIL,
            message: 'Pole nie może zawierać specjalnych znaków',
          },
        }}
        render={() => (
          <BoxStyled>
            <InputLabel>Email</InputLabel>
            <TextFieldStyled placeholder="email" {...register('email')} />
          </BoxStyled>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={() => (
          <BoxStyled>
            <InputLabel>Hasło</InputLabel>
            <TextFieldStyled placeholder="hasło" {...register('password')} />
          </BoxStyled>
        )}
      />
      <SignInButton type="submit" disabled={!isValid}>
        Zaloguj się
      </SignInButton>
    </form>
  )
}
const BoxStyled = styled(Box)`
  margin-top: 10px;
`
const TextFieldStyled = styled(TextField)`
  width: 100%;
`

const SignInButton = styled(Button)`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 10px;
  background-color: ${theme.accentColor};
  color: white;
  &:hover {
    background-color: green;
  }
  :disabled {
    background-color: grey;
  }
`
