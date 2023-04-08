import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SideBar from '../components/SideBar';

import AlbumDetails from '../screens/AlbumDetails';
import ArtistDetails from '../screens/ArtistDetails';
import Home from '../screens/Home';
import Player from '../components/Player';
import PlaylistDetails from '../screens/PlaylistDetails';
import Top from '../screens/Top';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <SideBar />

      <Routes>
        <Route path='/top' element={<Top />} />
        <Route path='/playlist/:playlistId' element={<PlaylistDetails />} />
        <Route path='/album/:albumId' element={<AlbumDetails />} />
        <Route path='/artist/:artistId' element={<ArtistDetails />} />
        <Route path='/' element={<Home />} />
      </Routes>

      <Player />
    </BrowserRouter>
  );
};

export default Router;
