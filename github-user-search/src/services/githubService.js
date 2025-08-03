import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUsersByQuery = async (query, location = '', minRepos = 0) => {
  try {
    const searchQuery = `${query}+location:${location}+repos:>${minRepos}`; // includes "location" and "minRepos"
    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(searchQuery)}`);
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
