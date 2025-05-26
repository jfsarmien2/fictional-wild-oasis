import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sfzmyosiwvasfoekzeib.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmem15b3Npd3Zhc2ZvZWt6ZWliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNTk4MjMsImV4cCI6MjA2MzYzNTgyM30.p6y1VhE1h913rTcnTi3uX4mhbvz24R-1U6mgGHGi4HU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
