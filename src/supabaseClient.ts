import { createClient } from '@supabase/supabase-js'

// Lee las variables de entorno definidas en tu .env.local
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Faltan las variables de entorno de Supabase en .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)