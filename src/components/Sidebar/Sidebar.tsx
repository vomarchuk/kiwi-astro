// src/components/Sidebar.jsx
import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  Button,
  Container,
  Menu,
  MenuItem,
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { LogoType } from '../LogoType/LogoType'
import { theme } from '../../theme'
import { PAGES } from '../../constants/PAGES'
import { Link } from '@tanstack/react-router'
import { ButtonReservation } from '../Buttons/ButtonReservation'
import { SocialList } from '../SocialList/SocialList'
import { SignInModal } from '../Modals/SignInModal'
const Sidebar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget)

  const handleOpenSignInModal = () => setOpen(true)
  const handleCloseSignInModal = () => setOpen(false)
  const handleCloseNavMenu = () => setAnchorElNav(null)

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: `${theme.accentColor}`, paddingRight: '0px' }}
    >
      <Container maxWidth="xl">
        <SignInModal open={open} handleClose={handleCloseSignInModal} />
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
              {PAGES.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <LinkStyled to={`/services?id=${page.id}`}>
                    <Typography sx={{ textAlign: 'center' }}>
                      {page.name}
                    </Typography>
                  </LinkStyled>
                </MenuItem>
              ))}
            </Menu>
            <LogoTypeS width={120} onClick={handleOpenSignInModal} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <LogoType width={100} onClick={handleOpenSignInModal} />
            <Box
              sx={{
                display: 'flex',
                ml: '10px',
                alignItems: 'center',
              }}
            >
              {PAGES.map((page) => (
                <LinkMobileStyled
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  to={`/services?id=${page.id}`}
                >
                  <Button
                    sx={{
                      my: 2,
                      display: 'block',
                      color: 'white',
                      fontSize: { md: '8px', lg: '11px' },
                    }}
                  >
                    {page.name}
                  </Button>
                </LinkMobileStyled>
              ))}
            </Box>
          </Box>
          <SocialList />
        </Toolbar>
      </Container>
      <ButtonReservation />
    </AppBar>
  )
}

export default Sidebar

const LogoTypeS = styled(LogoType)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`
const LinkMobileStyled = styled(Link)`
  text-decoration: none;
`
