import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
  );
};

export default EditRecipeForm;

