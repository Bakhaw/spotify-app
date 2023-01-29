import * as React from 'react';

import { fetchUserProfile } from './API/routes/user';
import { User } from './types';

import Router from './router';

function App() {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const data = await fetchUserProfile();
    // setUser(data);

    // console.log('getUser()', data);
  }

  return <Router />;
}

export default App;
