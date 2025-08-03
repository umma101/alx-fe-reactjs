// src/services/githubService.ts
export async function searchUsers(query: string) {
  const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error("Failed to fetch users");
  return await response.json(); // returns { items: [...] }
}
