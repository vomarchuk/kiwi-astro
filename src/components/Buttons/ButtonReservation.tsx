import React from 'react'
import styled from '@emotion/styled'
import { theme } from '../../theme'
import { Button } from '@mui/material'
export const ButtonReservation = () => (
  <ReservationButtonStyled>Umów wizyte online</ReservationButtonStyled>
)

const ReservationButtonStyled = styled(Button)`
  height: 100%;
  background-color: ${theme.accentColorLight};
  color: black;

  font-size: 13px;
  font-weight: 600;
`
