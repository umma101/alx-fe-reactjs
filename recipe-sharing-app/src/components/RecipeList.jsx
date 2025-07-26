import { Link } from 'react-router-dom';
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
    </div>
  );
};

export default RecipeList;


