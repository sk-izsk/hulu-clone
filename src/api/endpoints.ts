import { apiKey } from '.';

export interface Endpoints {
  trending: string;
  topRated: string;
  actionMovies: string;
  comedyMovies: string;
  horrorMovies: string;
  romanceMovies: string;
  mystery: string;
  sciFi: string;
  western: string;
  animation: string;
  tv: string;
}

const baseURL: string = 'https://api.themoviedb.org/3';

const endpoints: Endpoints = {
  trending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  topRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  mystery: `/discover/movie?api_key=${apiKey}&with_genres=9648`,
  sciFi: `/discover/movie?api_key=${apiKey}&with_genres=878`,
  western: `/discover/movie?api_key=${apiKey}&with_genres=37`,
  animation: `/discover/movie?api_key=${apiKey}&with_genres=16`,
  tv: `/discover/movie?api_key=${apiKey}&with_genres=10070`,
};

export { endpoints, baseURL };
