// src/App.tsx
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthStore } from "./stores/auth";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import NotFound from "./pages/NotFound";
import MateriBacaan from "./pages/MateriBacaan";
import MateriPenalaran from "./pages/MateriPenalaran";
import MateriKognitif from "./pages/MateriKognitif";

function App() {
  const { initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <Router>
      <Routes>
        {/* Landing */}
        <Route
          path="/"
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />

        {/* Auth pages */}
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/daftar"
          element={
            <Layout>
              <Daftar />
            </Layout>
          }
        />

        {/* Public pages */}
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <Terms />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />

        {/* Protected pages */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/materi/bacaan"
          element={
            <ProtectedRoute>
              <Layout>
                <MateriBacaan />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/materi/penalaran"
          element={
            <ProtectedRoute>
              <Layout>
                <MateriPenalaran />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/materi/kognitif"
          element={
            <ProtectedRoute>
              <Layout>
                <MateriKognitif />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Fallback route */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
