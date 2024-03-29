import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SvgIcon } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

import { Playlist } from '../../types';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { fetchUserPlaylists } from '../../API/routes/playlists';

const SideBar: React.FC = () => {
  const user = useCurrentUser();
  const [userPlaylists, setUserPlaylists] = useState<Playlist[] | null>();

  async function getUserPlaylists() {
    const data = await fetchUserPlaylists();
    setUserPlaylists(data.items);
  }

  useEffect(() => {
    getUserPlaylists();
  }, []);

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

      {userPlaylists && (
        <ul className='SideBar__list'>
          {userPlaylists.map((playlist, index) => (
            <Link
              className='SideBar__list--item'
              key={index}
              to={`/playlist/${playlist.id}`}
            >
              <span>{playlist.name}</span>
            </Link>
          ))}
        </ul>
      )}

      <ul className='SideBar__list'>
        {userLinks.map((link, index) => (
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
