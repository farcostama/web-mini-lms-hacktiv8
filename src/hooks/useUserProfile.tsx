import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

interface Profile {
  role: string;
}

export default function useUserProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      const user = supabase.auth.user();
      if (!user) return;

      const { data, error } = await supabase.from<Profile>("profiles").select("role").eq("id", user.id).single();

      if (error) {
        console.error("Error fetching profile:", error.message);
      } else {
        setProfile(data);
      }
    }

    fetchProfile();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      fetchProfile();
    });

    return () => listener?.unsubscribe();
  }, []);

  return profile;
}
