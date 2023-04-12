import { useContext, useEffect, useState } from 'react';
import { IconButton, Slider } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import { SpotifyContext } from '../../context';
import Cover from '../Cover';
import { currentlyPlaying } from '../../API/routes/player';

const Player: React.FC = () => {
  const {
    currentTrack,
    handlePauseSong,
    handleResumeSong,
    handlePlaySong,
    isPlaying,
    updateGlobalState,
  } = useContext(SpotifyContext);

  const [volume, setVolume] = useState<number>(30);

  const changeVolume = (event: Event, newValue: number | number[]) => {
    // todo debounce this function
    setVolume(newValue as number);
  };

  async function playPause() {
    if (!currentTrack || !handlePlaySong) return;

    if (isPlaying) {
      const { data } = await currentlyPlaying();
      handlePauseSong(data);
    } else {
      handleResumeSong(currentTrack);
    }
  }

  async function getCurrentPlaying() {
    const { data } = await currentlyPlaying();

    updateGlobalState(data);
  }

  useEffect(() => {
    getCurrentPlaying();
  }, []);

  if (!currentTrack) return null;

  return (
    <div className='Player'>
      <div className='Player__current-track'>
        <div className='Player__current-track__left'>
          <Cover size='small' src={currentTrack.album.images[0].url} />
          <div>
            <span>{currentTrack.name}</span>
            <span>{currentTrack.artists[0].name}</span>
          </div>
        </div>

        <div className='Player__current-track__center'>
          <ShuffleIcon />
          <SkipPreviousIcon fontSize='large' />
          {isPlaying ? (
            <IconButton onClick={playPause}>
              <PauseCircleIcon fontSize='large' />
            </IconButton>
          ) : (
            <IconButton onClick={playPause}>
              <PlayCircleIcon fontSize='large' />
            </IconButton>
          )}
          <SkipNextIcon fontSize='large' />
          <LoopIcon />
        </div>

        <div className='Player__current-track__right'>
          <VolumeDownIcon />
          <Slider
            aria-label='Volume'
            onChange={changeVolume}
            style={{ width: 120 }}
            value={volume}
          />
          <VolumeUpIcon />
        </div>
      </div>
    </div>
  );
};

export default Player;
