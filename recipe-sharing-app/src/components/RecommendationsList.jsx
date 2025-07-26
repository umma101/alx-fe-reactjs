import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div className="recommendations-container">
      <h2 className="section-title">✨ Recommended For You</h2>
      
      {recommendations.length === 0 ? (
        <p className="empty-message">
          Save some favorites to get personalized recommendations!
        </p>
      ) : (
        <div className="recommendations-grid">
          {recommendations.map(recipe => (
            <div key={recipe.id} className="recommendation-card">
              <h3>{recipe.title}</h3>
              <p className="recipe-description">{recipe.description}</p>
              <div className="recommendation-reason">
                Recommended because you like similar recipes
              </div>
              <div className="recipe-meta">
                <span>⏱️ {recipe.cookingTime} mins</span>
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

export default RecommendationsList;