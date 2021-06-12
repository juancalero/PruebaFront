export interface FilmSearchResponse {
  page: number;
  results: FilmSearch[];
  total_pages: number;
  total_results: number;
}

export interface FilmSearch {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenerosResponse {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}