import { Box, Button, InputLabel, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { REGEX_EMAIL } from '../../constants/REGEX'
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
  )
}
