import { Link } from 'react-router-dom';

import { SvgIcon } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

import { useCurrentUser } from '../../hooks/useCurrentUser';

import Avatar from '../Avatar';
import SideBarItems from './SideBarItems';

const SideBar: React.FC = () => {
  const user = useCurrentUser();

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

  if (!user || user.error) return null;

  const { display_name, images, followers } = user.data;

  return (
    <div className='SideBar'>
      <ul className='SideBar__list'>
        {links.map((link, index) => (
          <Link className='SideBar__list--item' key={index} to={link.to}>
            <SvgIcon>{link.icon}</SvgIcon>
            <span>{link.label}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
