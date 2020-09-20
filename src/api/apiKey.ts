const apiKey = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_MOVIE_API_KEY : 'undefined';

export { apiKey };
