export type AccessToken = string;

export interface Album {
  id: string;
}

export interface Artist {
  id: string;
}

export interface Search {
  query: string;
  type: SearchType;
}

export enum SearchType {
  album = 'album',
  artist = 'artist',
  playlist = 'playlist',
  track = 'track',
  show = 'show',
  episode = 'episode',
  audiobook = 'audiobook',
}

export enum TimeRange {
  longTerm = 'long_term',
  mediumTerm = 'medium_term',
  shortTerm = 'short_term',
}
