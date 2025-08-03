import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUsersByQuery = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};
