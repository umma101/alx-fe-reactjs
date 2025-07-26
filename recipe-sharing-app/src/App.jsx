import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Favorites from './components/Favorites';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>🍲 Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <hr />
              <RecipeList />
              <Recommendations />
            </>
          } />
          {/* 2. Add the new route for recipe details */}
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

