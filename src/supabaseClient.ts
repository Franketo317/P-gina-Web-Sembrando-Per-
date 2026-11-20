import { createClient } from '@supabase/supabase-js'

// Lee las variables de entorno definidas en tu .env.local
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Faltan las variables de entorno de Supabase en .env.local')
}

// El sitio también debe poder ejecutarse sin credenciales locales de Supabase.
// El cliente solo se crea cuando ambas variables están configuradas.
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
