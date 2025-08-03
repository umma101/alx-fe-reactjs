// services/githubAPI.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchGitHubUser = async (username) => {
  try {
    const res = await axios.get(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_TOKEN}`
      }
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
