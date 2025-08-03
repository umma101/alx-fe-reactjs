<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore'; // adjust the path if needed

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmDelete) {
      deleteRecipe(id);
      navigate('/'); // Redirect to home after deletion
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
=======
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return <button onClick={handleDelete}>Delete</button>;
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
};

export default DeleteRecipeButton;
