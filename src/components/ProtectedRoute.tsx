// src/components/ProtectedRoute.tsx
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, initializeAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    initializeAuth();
    if (!user) {
      navigate("/login"); // kalau belum login, redirect ke login
    }
  }, [user, initializeAuth, navigate]);

  if (!user) {
    return null; // sementara render null sampai auth di-load
  }

  return <>{children}</>;
}
