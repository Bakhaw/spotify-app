import { useEffect, useState } from 'react';
import { IconButton, Slider } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import SpotifyWebApi from 'spotify-web-api-node';

import { CurrentlyPlaying } from '../../types';
import { currentlyPlaying, pauseSong, playSong } from '../../API/routes/player';
import Cover from '../Cover';

const Player: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<CurrentlyPlaying | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState<boolean | null>(null);
  const [volume, setVolume] = useState<number>(30);

  const changeVolume = (event: Event, newValue: number | number[]) => {
    // todo debounce this function
    setVolume(newValue as number);
  };

  const spotifyApi = new SpotifyWebApi();

  async function playPause() {
    const data = await spotifyApi.getMyCurrentPlaybackState();

    if (data.body.is_playing) {
      spotifyApi.pause();
      setIsPlaying(false);
    } else {
      spotifyApi.play();
      setIsPlaying(true);
    }
  }

  async function onPlayClick() {
    if (currentTrack) {
      spotifyApi.setAccessToken(
        'BQDYPEARzwwEgNKON2TRicRFE5OC6U6RJD6z5HaL3elFPZfqa8LoPGZijEtSSpcTGaNoUzNW6Dje_66HZeMPsD0BBq86mYFlmYOnILFcpyDobZCdO1RG1BQKEp7SJIXvDGDS0U0cyHxetHr7YPPPQoXueLgtRioKp1Crbt-qOKfWpDX9GpXNF7ljEWt-UjCtnDMw5n9ib-BPbvNl-PHP5Z-m8KZ8feE'
      );

      spotifyApi.play({
        context_uri: currentTrack.item.album.uri,
      });

      setIsPlaying(true);
    }

    // if (currentTrack) {
    //   console.log('here', {
    //     contextUri: currentTrack.item.album.uri,
    //     positionMs: currentTrack.progress_ms,
    //     uris: currentTrack.item.uri,
    //   });

    //   await playSong({
    //     contextUri: currentTrack.item.album.uri,
    //     positionMs: currentTrack.progress_ms,
    //     uris: currentTrack.item.uri,
    //   });

    //   setIsPlaying(true);
    // }
  }

  async function onPauseClick() {
    spotifyApi.setAccessToken(
      'BQDYPEARzwwEgNKON2TRicRFE5OC6U6RJD6z5HaL3elFPZfqa8LoPGZijEtSSpcTGaNoUzNW6Dje_66HZeMPsD0BBq86mYFlmYOnILFcpyDobZCdO1RG1BQKEp7SJIXvDGDS0U0cyHxetHr7YPPPQoXueLgtRioKp1Crbt-qOKfWpDX9GpXNF7ljEWt-UjCtnDMw5n9ib-BPbvNl-PHP5Z-m8KZ8feE'
    );
    spotifyApi.pause();
    setIsPlaying(false);

    // if (currentTrack) {
    //   await pauseSong();

    //   setIsPlaying(false);
    // }
  }

  async function getCurrentPlaying() {
    const { data } = await currentlyPlaying();

    console.log('get current playing', data);

    setCurrentTrack(data);
    setIsPlaying(data.is_playing);
  }

  useEffect(() => {
    getCurrentPlaying();
  }, []);

  // console.log(currentTrack?.item);

  return (
    <div className='Player'>
      {currentTrack && (
        <div className='Player__current-track'>
          <div className='Player__current-track__left'>
            <Cover size='small' src={currentTrack.item.album.images[0].url} />
            <div>
              <p>{currentTrack.item.name}</p>
              <p>{currentTrack.item.artists[0].name}</p>
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
      )}
    </div>
  );
};

export default Player;
