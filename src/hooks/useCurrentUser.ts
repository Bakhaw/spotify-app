import * as React from 'react';
import { fetchUserProfile } from '../API/routes/user';
import { ApiResponse, User } from '../types';

export function useCurrentUser() {
  const [currentUser, setCurrentUser] =
    React.useState<ApiResponse<User> | null>(null);

  React.useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const data = await fetchUserProfile();
    setCurrentUser(data);
  }

  return currentUser;
}
