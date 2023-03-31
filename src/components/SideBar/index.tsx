import Drawer from '@mui/material/Drawer';

import { useCurrentUser } from '../../hooks/useCurrentUser';

import Avatar from '../Avatar';

import SideBarItems from './SideBarItems';

const SideBar: React.FC = () => {
  const user = useCurrentUser();

  if (!user || user.error) return null;

  const { display_name, images, followers } = user.data;

  return (
    <div className='SideBar'>
      <Drawer
        variant='permanent'
        anchor='left'
        open={true}
        PaperProps={{
          sx: { background: '#18031D', color: '#fff', width: 250 },
        }}
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
      </Drawer>
    </div>
  );
};

export default SideBar;
