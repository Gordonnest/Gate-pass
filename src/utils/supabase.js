import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hobfehrtufcjgmseatbr.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_OmEjWzscksODDao76oJMoQ_UnKOgxNQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
// made changes
