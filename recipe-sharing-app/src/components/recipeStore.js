import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',

  favorites: [],
  recommendations: [],
  
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  
  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }), 

  get filteredRecipes() {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;
    
    return recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (recipe.ingredients?.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  },

  // Favorites functionality
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  isFavorite: (recipeId) => get().favorites.includes(recipeId),

  // Recommendations
  generateRecommendations: () => set(state => {
    // Simple algorithm: recommend recipes with similar tags to favorites
    const favoriteRecipes = state.recipes.filter(r => state.favorites.includes(r.id));
    const favoriteTags = [...new Set(favoriteRecipes.flatMap(r => r.tags || []))];
    
    const recommended = state.recipes
      .filter(recipe => 
        !state.favorites.includes(recipe.id) &&
        (recipe.tags || []).some(tag => favoriteTags.includes(tag))
      )
      .sort((a, b) => {
          const aMatches = (a.tags || []).filter(tag => favoriteTags.includes(tag)).length;
          const bMatches = (b.tags || []).filter(tag => favoriteTags.includes(tag)).length;
          return bMatches - aMatches;
        })
      .slice(0, 5); // Limit to 5 recommendations
      
    return { recommendations: recommended };
  }),

}));