import axios from 'axios';

export const options = {
  baseURL: 'https://pixabay.com/api/',
  apiKey: '43420159-1afdbca13d56fe2b4831b985a',
};

export const getPictures = async (page = 1, query = 'Japan') => {
  const response = await axios.get(`${options.baseURL}?key=${options.apiKey}`, {
    params: {
      q: `${query}`,
      page: `${page}`,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '8',
    },
  });
  return response.data;
};
