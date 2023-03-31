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

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
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
