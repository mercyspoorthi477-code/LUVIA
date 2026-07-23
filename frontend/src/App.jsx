import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PeriodTracker from './pages/PeriodTracker';
import MoodTracker from './pages/MoodTracker';
import HealthHub from './pages/HealthHub';
import Diet from './pages/Diet';
import ProductReviews from './pages/ProductReviews';
import Caregiver from './pages/Caregiver';
import Notifications from './pages/Notifications';
import ArticleDetails from "./pages/ArticleDetails";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="relative min-h-screen bg-[#090B1A] text-white selection:bg-[#B794F4] selection:text-[#090B1A]">
          {/* Animated Midnight Night Sky & Cosmic Flower Particle Canvas */}
          <StarBackground />

          {/* Glassmorphic Navbar Header */}
          <Navbar />

          {/* Main Application Routes */}
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/tracker" element={<PeriodTracker />} />
              <Route path="/mood" element={<MoodTracker />} />
              <Route path="/health" element={<HealthHub />} />
              <Route path="/diet" element={<Diet />} />
              <Route path="/reviews" element={<ProductReviews />} />
              <Route path="/caregiver" element={<Caregiver />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/health" element={<HealthHub />} />

<Route
  path="/article/:id"
  element={<ArticleDetails />}
/>
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
