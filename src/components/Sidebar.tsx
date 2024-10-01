// src/components/Sidebar.jsx
import React, { useEffect, useState } from 'react'
import { fetchItems } from '../api/firebaseFunctions'
import styled from '@emotion/styled'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { LogoType } from './LogoType/LogoType'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link, List, ListItem } from '@mui/material'
import { SOCIAL_LINKS } from '../constants/SOCIAL_LINKS'
import { theme } from '../theme'
const pages = ['category', 'Pricing', 'Blog']

const Sidebar = () => {
  const [categories, setCategories] = useState('') as any
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  useEffect(() => {
    fetchItems('categories').then((categories) => setCategories(categories))
  }, [])
  return (
    <AppBar position="static" sx={{ backgroundColor: `${theme.accentColor}` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#test"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <LogoType width={100} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={`/${page}`}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none', padding: '5px ' },
              flexGrow: 1,
            }}
          >
            <LogoType width={150} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <SocialListStyled sx={{ flexGrow: 0 }}>
            <SocialListItemStyled>
              <SocialLinkStyled
                target="_blank"
                rel="nofollow"
                href={SOCIAL_LINKS.FACEBOOK}
              >
                <FacebookIcon sx={{ fill: 'white' }} />
              </SocialLinkStyled>
            </SocialListItemStyled>
            <SocialListItemStyled>
              <SocialLinkStyled
                target="_blank"
                rel="nofollow"
                href={SOCIAL_LINKS.INSTAGRAM}
              >
                <InstagramIcon sx={{ fill: 'white' }} />
              </SocialLinkStyled>
            </SocialListItemStyled>
          </SocialListStyled>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Sidebar

const SocialListStyled = styled(List)`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 10%;
`
const SocialListItemStyled = styled(ListItem)`
  padding: 0;
  margin: 0;
`
const SocialLinkStyled = styled(Link)`
  display: flex;
  &:hover {
    & > svg {
      fill: black};
    }
  }
`
