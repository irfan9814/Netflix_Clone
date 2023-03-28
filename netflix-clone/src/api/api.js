const API_KEY = "bc9e059f971b065b250c88764c4fb826";

const api ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchSciFi:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchAnime:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
};

export default api;