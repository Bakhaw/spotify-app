import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SideBar from '../components/SideBar';

import ArtistDetails from '../screens/ArtistDetails';
import Home from '../screens/Home';
import Player from '../components/Player';
import Top from '../screens/Top';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Player />

      <Routes>
        <Route path='/top' element={<Top />} />
        <Route path='/artist/:artistId' element={<ArtistDetails />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
