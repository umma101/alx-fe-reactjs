import useRecipeStore from './recipeStore';

const RecipeCard = ({ recipe }) => {
  const { addFavorite, removeFavorite, isFavorite } = useRecipeStore();
  const isFav = isFavorite(recipe.id);

  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <button 
        onClick={() => isFav ? removeFavorite(recipe.id) : addFavorite(recipe.id)}
        className={isFav ? 'favorite active' : 'favorite'}
      >
        {isFav ? '❤️' : '🤍'}
      </button>
      {/* Rest of card content */}
    </div>
  );
};