import { Grid2, Typography } from '@mui/material'
import { theme } from '../../theme'
import styled from '@emotion/styled'
export const Footer = () => {
  return (
    <Grid2
      container
      component="footer"
      sx={{
        backgroundColor: theme.footerBgColor,
        m: '0',
        width: '100%',
        bottom: '0',
        left: '0',
        textAlign: 'center',
        color: theme.accentColor,
        padding: '10px 0px',
        zIndex: '9999',
        alignItems: 'flex-start',
      }}
    >
      <Grid2Styled size={4}>
        <Typography sx={{ fontSize: '13px' }}>
          ul. Floriańska 6/u7
          <br />
          03-707, Warszawa
        </Typography>
      </Grid2Styled>
      <Grid2Styled size={4}>
        <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: '600' }}>
          tel:
          <ContactLink href="tel:+48577205500"> +48 577 205 500</ContactLink>
        </Typography>
      </Grid2Styled>
      <Grid2Styled size={4}>
        <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: '600' }}>
          CODZIENNIE
          <br /> 9:00 - 20:00
        </Typography>
      </Grid2Styled>
    </Grid2>
  )
}

const ContactLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  color: ${theme.accentColor};
`
const Grid2Styled = styled(Grid2)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
