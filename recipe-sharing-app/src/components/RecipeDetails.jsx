import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.id}</h1>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;
