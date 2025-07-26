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
      )}
    </div>
  );
};

export default FavoritesList;