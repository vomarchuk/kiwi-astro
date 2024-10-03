// src/components/Sidebar.jsx
import React, { useState } from 'react'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { AppBar, Link, List, ListItem } from '@mui/material'
import { SOCIAL_LINKS } from '../../constants/SOCIAL_LINKS'
import { LogoType } from '../LogoType/LogoType'
import { theme } from '../../theme'

const pages = [
  {
    name: 'Manicure',
    id: 'W154NGGXXF3kHwwtgyY7',
  },
  {
    name: 'Pedicure',
    id: '48AGR5DdAwE7mcElvWXg',
  },
  {
    name: 'Zabiegi na twarz',
    id: '4UeXBlIEcT2PvQMzOsdt',
  },
  {
    name: 'Medycyna estetyczna',
    id: 'WSdqNQJdwoc7Wfw0fhUb',
  },
  {
    name: 'Depilacja woskiem miękkim',
    id: 'hrGLGqf4j0KLUoFwZVS0',
  },
  {
    name: 'Brwi / rzesy',
    id: '7IKnas48Kes3BUxo5ppv',
  },
]

const Sidebar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget)

  const handleCloseNavMenu = () => setAnchorElNav(null)

  return (
    <AppBar position="fixed" sx={{ backgroundColor: `${theme.accentColor}` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              padding: '5px 0px',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                width: '45px',
                height: '45px',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link
                    href={`/services?id=${page.id}`}
                    sx={{ textDecoration: 'none', color: 'black' }}
                  >
                    <Typography sx={{ textAlign: 'center' }}>
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            <LogoTypeS width={120} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <LogoType width={100} />
            <Box sx={{ display: 'flex', ml: '10px' }}>
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  href={`/services?id=${page.id}`}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontSize: { md: '10px', lg: '14px' },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Box>
          <List sx={{ display: 'flex', gap: '10%' }}>
            <ListItem disablePadding>
              <Link
                sx={{
                  display: 'flex',
                  '&:hover': {
                    '&>svg': { fill: 'red' },
                  },
                }}
                target="_blank"
                rel="nofollow"
                href={SOCIAL_LINKS.FACEBOOK}
              >
                <FacebookIcon sx={{ fill: 'blue' }} />
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                sx={{
                  display: 'flex',
                  '&:hover': {
                    '&>svg': { fill: 'red' },
                  },
                }}
                target="_blank"
                rel="nofollow"
                href={SOCIAL_LINKS.INSTAGRAM}
              >
                <InstagramIcon sx={{ fill: 'orange' }} />
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Sidebar

const LogoTypeS = styled(LogoType)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`
