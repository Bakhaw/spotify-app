import { Track } from '../../types';

interface PlayerProps {
  track?: Track;
}

const Player: React.FC<PlayerProps> = ({ track }) => {
  return <div className='Player'>Player</div>;
};

export default Player;
