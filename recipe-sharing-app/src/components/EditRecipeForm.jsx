<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore'; // adjust the path if your store file is elsewhere
=======
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
<<<<<<< HEAD

  const recipes = useRecipeStore(state => state.recipes);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    const recipeToEdit = recipes.find(recipe => recipe.id === id);
    if (recipeToEdit) {
      setTitle(recipeToEdit.title);
      setIngredients(recipeToEdit.ingredients);
      setInstructions(recipeToEdit.instructions);
    }
  }, [id, recipes]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(id, { title, ingredients, instructions });
    navigate('/'); // redirect to home or recipe list after update
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea
            value={ingredients}
            onChange={e => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Recipe</button>
      </form>
    </div>
=======
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: parseInt(id), title, description });
    navigate('/');
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save Changes</button>
    </form>
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
  );
};

export default EditRecipeForm;
<<<<<<< HEAD
=======

>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
