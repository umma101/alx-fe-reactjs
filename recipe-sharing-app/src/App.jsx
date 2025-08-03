<<<<<<< HEAD
// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import EditRecipe from './pages/EditRecipe';
import NotFound from './pages/NotFound'; // optional

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes/:id/edit" element={<EditRecipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
=======
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
>>>>>>> 7816280772fd4f217e5b8897efdbb90bca864654

export default App;
