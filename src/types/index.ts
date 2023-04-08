export type AccessToken = string;

export interface ApiResponse<T> {
  data: T;
  error: any;
  status: number;
}

export interface ApiListResponse<T> {
  data: {
    items: T[];
  };
  error: any;
  status: number;
}

export enum AlbumType {
  album = 'album',
  compilation = 'compilation',
  single = 'single',
}

export interface Album {
  album_type: AlbumType;
  artists: Artist[];
  available_markets: []; // todo: create Market
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string; // date format: "YYYY-MM-DD"
  release_date_precision: string; // todo: understand what "precision" means
  total_tracks: number;
  tracks: {
    href: string;
    items: Track[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  type: string; // todo: create type enum?
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  followers: {
    href?: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string; // todo: create type enum?
  uri: string;
}

export interface CurrentlyPlaying {
  device: {}; // todo create Device interface
  repeat_state: string;
  shuffle_state: boolean;
  context: {}; // todo create Context interface
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: Track; // todo it also can be EpisodeObject => create Episode interface
  currently_playing_type: 'track' | 'episode' | 'ad' | 'unknown';
  actions: {}; // create Actions object
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: User;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string; // playlist
  uri: string;
}

export interface RecentlyPlayed {
  context: []; // todo: create Context type
  played_at: string;
  track: Track;
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

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: []; // todo: create Market type
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: 0;
  preview_url: string;
  track_number: number;
  type: string; // todo create type enum?
  uri: string;
}

export interface User {
  display_name: string;
  external_urls: ExternalUrls;
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
}

export interface CurrentUser {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: ExternalUrls;
  followers: {
    href: number;
    total: number;
  };
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}
