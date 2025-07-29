import React, { useState } from 'react';

const EditRecipeForm = ({ recipe, onSave }) => {
  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ This line is required
    const updatedRecipe = { ...recipe, title, ingredients };
    onSave(updatedRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
