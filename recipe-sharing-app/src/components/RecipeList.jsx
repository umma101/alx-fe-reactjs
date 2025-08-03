import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
=======
import { useRecipeStore } from '../recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      <Link to="/add">➕ Add Recipe</Link>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <Link to={`/edit/${recipe.id}`}>✏️ Edit</Link>{' '}
          <DeleteRecipeButton id={recipe.id} />
        </div>
      ))}
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
    </div>
  );
};

export default RecipeList;
<<<<<<< HEAD
=======



>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
