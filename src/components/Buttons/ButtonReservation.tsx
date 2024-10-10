import { Button, Link } from '@mui/material'
import styled from '@emotion/styled'
import { theme } from '../../theme'
export const ButtonReservation = () => (
  <Link
    target="_blank"
    rel="nofollow"
    href="https://booksy.com/pl-pl/102743_kiwi-beauty-center_depilacja_3_warszawa#ba_s=seo"
  >
    <ReservationButtonStyled>Umów wizyte online</ReservationButtonStyled>
  </Link>
)

const ReservationButtonStyled = styled(Button)`
  width: 100%;
  font-size: 13px;
  color: black;
  border-radius: 0;
  font-weight: 600;
  background-color: ${theme.accentColorLight};
`
