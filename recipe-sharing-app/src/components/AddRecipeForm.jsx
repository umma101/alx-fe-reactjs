import { useState } from 'react';
<<<<<<< HEAD
import { useRecipeStore } from '../store/recipeStore';
=======
import { useRecipeStore } from '../recipeStore';
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

<<<<<<< HEAD
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654

    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
=======
    <form onSubmit={handleSubmit}>
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
      <h2>Add New Recipe</h2>
      <input
        type="text"
        value={title}
<<<<<<< HEAD
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
=======
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
<<<<<<< HEAD
=======


>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
