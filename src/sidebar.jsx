import {
  Brightness4Rounded,
  CarRental,
  Games,
  Home,
  LocationCity,
  Mail,
  Map,
  Person,
  Phone,
  Room,
  School,
} from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
const sidebarLinks = {
  Homepage: <Home />,
  Person: <Person />,
  Phone: <Phone />,
  'E-mail': <Mail />,
  Address: <LocationCity />,
  Map: <Map />,
  University: <School />,
  Car: <CarRental />,
  Room: <Room />,
  Games: <Games />,
  mood: <Brightness4Rounded />,
};

const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex="2" p={2} sx={{display: {xs: 'none', sm: 'block'}}}>
      <List sx={{position: 'fixed'}}>
        {Object.keys(sidebarLinks).map((key) => (
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>{sidebarLinks[key]}</ListItemIcon>
              {key !== 'mood' ? (
                <ListItemText primary={key} />
              ) : (
                <Switch
                  defaultChecked
                  color="info"
                  onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
