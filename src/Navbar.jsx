import styled from '@emotion/styled';
import {Mail, ShoppingBagSharp} from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';

import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  Badge,
  Avatar,
  Typography,
} from '@mui/material';
import React, {useState} from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const Search = styled('div')(({theme}) => ({
  backgroundColor: 'white',
  padding: '2px',
  borderRadius: '2px',
  width: '40%',
}));

const Icon = styled(Box)(({theme}) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {display: 'flex'},
}));
const UserBox = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {display: 'none'},
}));

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const HandleMenuOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Toolbar sx={{display: {xs: 'none', sm: 'flex'}}}>Juba</Toolbar>
        <BatteryCharging20Icon sx={{display: {xs: 'block', sm: 'none'}}} />
        <Search placeholder="Search">
          <InputBase placeholder="Search..." />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <ShoppingBagSharp color="action" />
          </Badge>
          <Avatar
            onClick={HandleMenuOpen}
            sx={{width: 40, height: 40}}
            src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
          />
        </Icon>
        <UserBox onClick={HandleMenuOpen}>
          <Avatar
            sx={{width: 40, height: 40}}
            src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
          />
          <Typography>Rami</Typography>
        </UserBox>
        <Menu
          open={Open}
          onClose={() => setOpen(false)}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
