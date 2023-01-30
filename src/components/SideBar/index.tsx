import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import { useCurrentUser } from '../../hooks/useCurrentUser';

import Avatar from '../Avatar';

import SideBarItems from './SideBarItems';

const SideBar: React.FC = () => {
  const [isSideBarOpen, setSideBarOpen] = React.useState(false);

  const user = useCurrentUser();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setSideBarOpen(open);
    };

  if (!user || user.error) return null;

  const { display_name, images, followers } = user.data;

  return (
    <div className='SideBar'>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor='left'
        open={isSideBarOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className='SideBar__content'>
          <div className='SideBar__content__user'>
            <Avatar alt={display_name} src={images[0].url} />

            <div>
              <p>{display_name}</p>
              <p>{followers.total} followers</p>
            </div>
          </div>

          <SideBarItems />
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default SideBar;
