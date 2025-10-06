const API_KEY = "YOUR_API_KEY_HERE";
const BASE_URL = "https://api.themoviedb.org/3";

async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
 return data.results;
};

