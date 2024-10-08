import { Button, Grid2, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import styled from '@emotion/styled'
export const Footer = () => {
  return (
    <Grid2
      container
      component="footer"
      sx={{
        backgroundColor: theme.accentColor,
        p: '10px',
        m: '0',
        position: 'fixed',
        width: '100%',
        bottom: '0',
        left: '0',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0px 0px 4px 4px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Grid2 size={4}>
        <Typography sx={{ fontSize: '10px', mt: '3px' }}>
          ul. Floriańska 6/u7
          <br />
          03-707, Warszawa
          <br />
          tel:
          <ContactLink href="tel:+48577205500"> +48 577 205 500</ContactLink>
        </Typography>
      </Grid2>
      <Grid2 size={4}>
        <Button
          sx={{
            border: '1px solid black',
            color: 'white',
            fontSize: '13px',
            fontWeight: '600',
          }}
        >
          Umów wizyte online
        </Button>
      </Grid2>
      <Grid2 size={4}>
        <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: '600' }}>
          CODZIENNIE
        </Typography>
        <Typography sx={{ fontSize: '11px', mt: '3px' }}>
          9:00 - 20:00
        </Typography>
      </Grid2>
    </Grid2>
  )
}

const ContactLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
`
