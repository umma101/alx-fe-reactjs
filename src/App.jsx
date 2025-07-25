import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

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
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

