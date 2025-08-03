<<<<<<< HEAD
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by title..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
=======
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  
  return (
    <input
      type="text"
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search recipes..."
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
    />
  );
};

<<<<<<< HEAD
export default SearchBar;
=======
export default SearchBar;
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
