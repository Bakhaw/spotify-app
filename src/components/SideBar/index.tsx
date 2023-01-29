import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

import { User } from '../../types';
import { fetchUserProfile } from '../../API/routes/user';

import SideBarItems from './SideBarItems';
import Avatar from '../Avatar';

const SideBar: React.FC = () => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isSideBarOpen, setSideBarOpen] = React.useState(false);

  // React.useEffect(() => {
  //   getUser();
  // }, []);

  // async function getUser() {
  //   const data = await fetchUserProfile();
  //   setUser(data);
  // }

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

  if (!user) return null;

  return (
    <div className='SideBar'>
      <Button onClick={toggleDrawer(true)}>Open SideBar</Button>
      <SwipeableDrawer
        anchor='left'
        open={isSideBarOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className='SideBar__content'>
          <div className='SideBar__content__user'>
            {/* <Avatar alt={user.display_name} src={user.images[0].url} />

            <div>
              <p>{user.display_name}</p>
              <p>{user.followers.total} followers</p>
            </div> */}
          </div>

          <SideBarItems toggleDrawer={toggleDrawer} />
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default SideBar;
