<<<<<<< HEAD
import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
=======
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore();
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div className="favorites-container">
      <h2 className="section-title">⭐ My Favorite Recipes</h2>
      
      {favoriteRecipes.length === 0 ? (
        <p className="empty-message">You haven't saved any favorites yet!</p>
      ) : (
        <div className="favorites-grid">
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id} className="favorite-card">
              <div className="card-header">
                <h3>{recipe.title}</h3>
                <button 
                  onClick={() => removeFavorite(recipe.id)}
                  className="remove-favorite"
                  aria-label={`Remove ${recipe.title} from favorites`}
                >
                  ❌
                </button>
              </div>
              <p className="recipe-description">{recipe.description}</p>
              <div className="recipe-meta">
                {recipe.tags?.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
      )}
    </div>
  );
};

<<<<<<< HEAD
export default FavoritesList;
=======
export default FavoritesList;
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
