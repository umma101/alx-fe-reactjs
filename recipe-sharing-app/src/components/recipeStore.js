import { create } from 'zustand';

<<<<<<< HEAD
export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe],
  })),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated,
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
      filteredRecipes: state.filteredRecipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes,
    }),

  // ✅ Favorites logic
  addFavorite: (id) =>
    set((state) =>
      state.favorites.includes(id)
        ? state
        : { favorites: [...state.favorites, id] }
    ),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // ✅ Recommendation logic (mocked)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) =>
        favorites.includes(r.id) &&
        Math.random() > 0.4 // simple randomized mock
    );
    set({ recommendations: recommended });
  },
}));
=======
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
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654
