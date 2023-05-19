import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages here
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage';
import SingleBlogPage from './pages/SingleBlogPage';
import AddBlogPage from './pages/AddBlogpage.js';
import EditBlogPage from './pages/EditBlogPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Import NavBar
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/add-blog" element={<AddBlogPage />} />
        <Route path="/edit-blog/:id" element={<EditBlogPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;

