// utils/supabase/client.ts

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://alfljqjdwlomzepvepun.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZmxqcWpkd2xvbXplcHZlcHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc4MzA3MTEsImV4cCI6MTk4MzQwNjcxMX0.PQsUIVHXlt0P2lQ7ZGvYyHQioWZ-lz9uHKLdwVX-YYY"
);

export default supabase;
