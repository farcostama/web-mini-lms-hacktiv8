// src/stores/auth.ts
import { create } from "zustand";
import { supabase } from "../lib/supabaseClient";

interface User {
  id: string;
  email: string;
  email_confirmed_at?: string | null;
}

interface AuthState {
  user: User | null;
  initializeAuth: () => void;
  login: (email: string, password: string) => Promise<{ error?: Error | null }>;
  register: (email: string, password: string) => Promise<{ error?: Error | null }>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  initializeAuth: () => {
    supabase.auth.getSession().then(({ data }) => {
      const sessionUser = data.session?.user;
      if (sessionUser) {
        set({
          user: {
            id: sessionUser.id,
            email: sessionUser.email ?? "",
            email_confirmed_at: sessionUser.email_confirmed_at,
          },
        });
      }
    });
  },

  login: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      if (data.user) {
        set({
          user: {
            id: data.user.id,
            email: data.user.email ?? "",
            email_confirmed_at: data.user.email_confirmed_at,
          },
        });
      }
      return { error: null };
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error("Terjadi kesalahan");
      return { error };
    }
  },

  register: async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      return { error: null };
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error("Terjadi kesalahan");
      return { error };
    }
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));
