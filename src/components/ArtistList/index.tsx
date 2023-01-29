import { Link } from 'react-router-dom';

import { Artist } from '../../types';

import Cover from '../../components/Cover';

interface ArtistListProps {
  artists: Artist[];
}

const ArtistList: React.FC<ArtistListProps> = ({ artists }) => {
  return (
    <div className='ArtistList'>
      <h1>Favorite artists</h1>

      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            <Link to={`/artist/${artist.id}`}>
              <Cover src={artist.images[0].url} />
              <div>{artist.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
