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
  Drawer,
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

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <Container>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="inherit"
        sx={{
          width: '45px',
          height: '45px',
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {/* // {DrawerList} */}
        {PAGES.map((page) => (
          <MenuItem key={page.id} onClick={handleCloseNavMenu}>
            <LinkStyled to={`/services?id=${page.id}`}>
              <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
            </LinkStyled>
          </MenuItem>
        ))}
      </Drawer>
      {/* <SignInModal open={open} handleClose={handleCloseSignInModal} /> */}
      {/* <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
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
        <SocialList />
      </Toolbar> */}
    </Container>
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

// import * as React from 'react'
// import Box from '@mui/material/Box'
// import Drawer from '@mui/material/Drawer'
// import Button from '@mui/material/Button'
// import List from '@mui/material/List'
// import Divider from '@mui/material/Divider'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
// import InboxIcon from '@mui/icons-material/MoveToInbox'
// import MailIcon from '@mui/icons-material/Mail'

// export default function TemporaryDrawer() {
//   const [open, setOpen] = React.useState(false)

//   const toggleDrawer = (newOpen: boolean) => () => {
//     setOpen(newOpen)
//   }

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   )

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)}>Open drawer</Button>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   )
// }
