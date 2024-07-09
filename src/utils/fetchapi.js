import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'b1f38ec2eemshef1f7943d276d66p17bd38jsne0b108be570a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`,options);

  return data;
};
export default fetchApi;