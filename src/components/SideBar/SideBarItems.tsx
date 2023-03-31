import { Link } from 'react-router-dom';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

const SideBarItems: React.FC = () => {
  const links = [
    {
      icon: <HomeIcon />,
      label: 'Home',
      to: '/',
    },
    {
      icon: <SearchIcon />,
      label: 'Search',
      to: '/search',
    },
    {
      icon: <LibraryMusicIcon />,
      label: 'Library',
      to: '/library',
    },
    {
      icon: <BarChartIcon />,
      label: 'Top',
      to: '/top',
    },
  ];

  const userLinks = [
    {
      icon: <PersonIcon />,
      label: 'Profile',
      to: '/profile',
    },
    {
      icon: <LogoutIcon />,
      label: 'Logout',
      to: '/logout',
    },
  ];

  return (
    <Box role='presentation'>
      <List>
        {links.map((link, index) => (
          <Link key={index} to={link.to}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider color='#fff' />

      <List>
        {userLinks.map((link, index) => (
          <Link key={index} to={link.to}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default SideBarItems;
