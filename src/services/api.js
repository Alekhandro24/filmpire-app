import axios from 'axios';
export const API_URL = 'http://www.omdbapi.com/?apikey=2adf7482';

export const apiSearch = async title => {
  const { data } = await axios.get(`${API_URL}&s=${title}`);
  return data.Search;
};

const api = {
  apiSearch,
};

export default api;
