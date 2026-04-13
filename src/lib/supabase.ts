import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://xgzbawqxazinclojbhly.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_VaQ1TgSD9PTnTEjxF_UBiQ_DGS9dgai";

export const supabase = createClient(supabaseUrl, supabaseKey);
