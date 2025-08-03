import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (criteria) => {
    setLoading(true);
    setError('');
    const result = await fetchUserData(criteria);

    if (result.error) {
      setError('Looks like we can’t find the user.');
      setUsers([]);
    } else {
      setUsers(result.data);
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500"Looks like we cant find the user>{error} Looks like we cant find the user</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white rounded shadow text-center">
            <img src={user.avatar_url} alt="avatar" className="w-20 h-20 mx-auto rounded-full" />
            <h2 className="font-semibold mt-2">{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">View Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
