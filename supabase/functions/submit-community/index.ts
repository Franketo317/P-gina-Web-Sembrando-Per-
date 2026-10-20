import { createCommunityHandler } from './handler.ts'

Deno.serve(createCommunityHandler({
  secret: Deno.env.get('TURNSTILE_SECRET_KEY') ?? '',
  supabaseUrl: Deno.env.get('SUPABASE_URL') ?? '',
  serviceKey: Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
}))
