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
  max-width: 300px;
  padding: 12px 30px;
  font-weight: bold;
  font-size: 13px;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  background-color: ${theme.accentColor};
`
