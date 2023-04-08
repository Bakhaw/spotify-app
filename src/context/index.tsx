import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

import { pauseSong, playSong } from '../API/routes/player';
import { Track } from '../types';
import { CurrentlyPlaying } from '../types';

interface ContextValue {
  currentTrack: Track | null;
  isPlaying: boolean;
  handlePlaySong: (track: Track) => void;
  handleResumeSong: (track: Track) => void;
  handlePauseSong: (data: CurrentlyPlaying) => void;
  updateGlobalState: (data: CurrentlyPlaying) => void;
}

const initialContext: ContextValue = {
  currentTrack: null,
  isPlaying: false,
  handlePlaySong: () => {},
  handleResumeSong: () => {},
  handlePauseSong: () => {},
  updateGlobalState: () => {},
};

export const SpotifyContext = createContext<ContextValue>(initialContext);

interface ContextProviderProps {
  children: JSX.Element;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progressMs, setProgressMs] = useState<number>(0);

  function updateGlobalState(data: CurrentlyPlaying) {
    setCurrentTrack(data.item);
    setIsPlaying(data.is_playing);
    setProgressMs(data.progress_ms);
  }

  function handlePlaySong(track: Track) {
    playSong({
      contextUri: track.album.uri,
      positionMs: 0,
      uris: track.uri,
    });

    setCurrentTrack(track);
    setIsPlaying(true);
  }

  function handleResumeSong(track: Track) {
    playSong({
      contextUri: track.album.uri,
      positionMs: progressMs,
      uris: track.uri,
    });

    setCurrentTrack(track);
    setIsPlaying(true);
  }

  function handlePauseSong(data: CurrentlyPlaying) {
    setProgressMs(data.progress_ms);
    setIsPlaying(false);
    pauseSong();
  }

  const contextValue: ContextValue = {
    currentTrack,
    isPlaying,
    handlePlaySong,
    handleResumeSong,
    handlePauseSong,
    updateGlobalState,
  };

  return (
    <SpotifyContext.Provider value={contextValue}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default ContextProvider;
