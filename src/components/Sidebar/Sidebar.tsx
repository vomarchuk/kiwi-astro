import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
  Box,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { PAGES } from "../../constants/PAGES";
import { Link } from "@tanstack/react-router";

const Sidebar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  //
  return (
    <>
      <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            padding: "5px 0px",
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
              width: "45px",
              height: "45px",
              color: "white",
            }}
          >
            <MenuIcon sx={{ fill: "white", width: "35px", height: "35px" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {PAGES.map((page) => (
              <LinkStyled key={page.id} to={`/services?id=${page.id}`}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <img
                    src="/favicon.svg"
                    alt="favicon"
                    style={{
                      width: "10px",
                      height: "10px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography sx={{ textAlign: "center" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              </LinkStyled>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </>
  );
};

export default Sidebar;
const LinkStyled = styled(Link)`
  outline: 1px solid red;
  text-decoration: none;
  color: black;
`;
