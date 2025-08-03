import React, { useState } from 'react';
import { fetchUsersByQuery, fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const query = buildQuery(username, location, minRepos);
      const results = await fetchUsersByQuery(query);

      // Fetch detailed user info using fetchUserData
      const detailedUsers = await Promise.all(
        results.map((user) => fetchUserData(user.login))
      );

      setUsers(detailedUsers);
    } catch (err) {
      console.error(err);
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  const buildQuery = (username, location, minRepos) => {
    let query = '';
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;
    return query.trim();
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-md"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error} Looks like we cant find the user</p>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.length > 0 &&
          users.map((user) => (
            <div key={user.id} className="bg-gray-100 p-4 rounded shadow">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-2" />
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <p><strong>Location:</strong> {user.location || 'N/A'}</p>
              <p><strong>Public Repos:</strong> {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
