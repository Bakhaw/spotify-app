import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SideBar from '../components/SideBar';

import ArtistDetails from '../screens/ArtistDetails';
import Home from '../screens/Home';

function Router() {
  return (
    <BrowserRouter>
      <SideBar />

      <Routes>
        <Route path='/artist/:artistId' element={<ArtistDetails />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
