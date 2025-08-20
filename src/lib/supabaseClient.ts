import { createClient } from "@supabase/supabase-js";

// Ganti dengan URL dan Anon Key dari dashboard Supabase Anda
const supabaseUrl = "https://gpogpwqmygfspywluagn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdwb2dwd3FteWdmc3B5d2x1YWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2OTQ4MTksImV4cCI6MjA3MTI3MDgxOX0.zzmyy83M5HaLkiTp4yk5QG0ncl8Y-sHH--ys2oBiJHA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
