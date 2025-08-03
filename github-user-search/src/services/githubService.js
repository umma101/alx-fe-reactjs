import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = '';

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}&per_page=20`);
    return { data: response.data.items, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
