// src/pages/index.tsx
import { useState } from "react";
import Search from "../components/Search";
import { searchUsers } from "../services/githubService";

export default function Home() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (query: string) => {
    try {
      setError("");
      const data = await searchUsers(query);
      setResults(data.items);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <div className="grid gap-4 mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {results.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-sm">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto" />
            <h2 className="text-center mt-2 font-semibold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500 text-center"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
