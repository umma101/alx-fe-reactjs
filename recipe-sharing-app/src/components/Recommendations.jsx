import { useEffect } from 'react';
import useRecipeStore from './recipeStore';
import RecipeCard from './RecipeCard';

const Recommendations = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div className="recommendations">
      <h2>Recommended For You</h2>
      {recommendations.length > 0 ? (
        <div className="recipe-grid">
          {recommendations.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>Save some favorites to get recommendations!</p>
      )}
    </div>
  );
};