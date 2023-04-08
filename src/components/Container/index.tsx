import { useContext } from 'react';
import { SpotifyContext } from '../../context';

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { currentTrack } = useContext(SpotifyContext);

  return (
    <div
      className='Container'
      style={{
        height: currentTrack ? 'calc(100vh - 60px)' : '100vh',
      }}
    >
      <div className='Container__content'>{children}</div>
    </div>
  );
};

export default Container;
