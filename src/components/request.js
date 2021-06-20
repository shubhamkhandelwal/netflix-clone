// Enter your API key for TMDB
const API_KEY = ''
const request = {
	fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
	fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOrignals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
	fetchMovieForGenres: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=`,
	imageBaseUrl: 'https://image.tmdb.org/t/p/original',
}

export default request
