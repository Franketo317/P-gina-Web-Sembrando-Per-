# CAPTCHA de producción para Súmate

Dominio autorizado: https://sembrando-peru-oficial.vercel.app
El frontend y la función rechazan el envío desde localhost y otros dominios,
incluyendo despliegues de preview. CORS no sustituye la validación: la función
comprueba también el hostname y action del token con Cloudflare.

## 1. Cloudflare Turnstile

Crea un widget Managed y autoriza únicamente este hostname (sin protocolo ni ruta):

    sembrando-peru-oficial.vercel.app

Guarda Site key y Secret key. No necesitas cambiar DNS para usar Turnstile.

## 2. Vercel

En Settings > Environment Variables, selecciona Production y configura:

    VITE_TURNSTILE_SITE_KEY=Site key de Cloudflare
    VITE_SUPABASE_URL=URL de tu proyecto Supabase
    VITE_SUPABASE_ANON_KEY=clave pública anon de Supabase

`.env.production.example` es solo una plantilla de referencia. No hace falta
copiarla a `.env.local` ni agregar claves al repositorio. Vercel compila con
sus variables de Production. No pongas claves secretas en variables VITE_.

## 3. Supabase: tabla y secreto

En SQL Editor ejecuta una vez `migrations/20261016000000_join_requests.sql`.
Si la tabla ya existe, revisa su esquema antes de ejecutar; no la borres.
RLS queda activado sin políticas públicas: únicamente el servidor puede insertar.

En Edge Functions > Secrets añade:

    TURNSTILE_SECRET_KEY=Secret key de Cloudflare

SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY están disponibles en el entorno de
Edge Functions. No las copies al frontend. El dominio autorizado está fijado
en `functions/submit-join/handler.ts`; no utiliza ALLOWED_ORIGINS.

## 4. Publicar la función

Con Supabase CLI disponible, desde la raíz del repositorio:

    supabase login
    supabase link --project-ref TU_REFERENCIA_REAL_DE_SUPABASE
    supabase functions deploy submit-join --no-verify-jwt

`config.toml` configura la función como pública porque no requiere inicio de
sesión. La función valida origen, campos y CAPTCHA antes de insertar.

## 5. Publicar el frontend y comprobar

Despliega los cambios en Vercel después de configurar sus variables. Abre
https://sembrando-peru-oficial.vercel.app/sumate y envía una solicitud de prueba.
Confirma la fila en Supabase > Table Editor > join_requests. El guardado no
envía un correo de aviso al equipo. Ante un error, revisa Edge Functions > Logs
y Network en el navegador. Sin las claves, la tabla y la función publicadas,
el envío todavía no funcionará.

Pruebas con servicios simulados, sin enviar solicitudes reales:

    node --test src/pages/joinValidation.test.mjs supabase/functions/submit-join/handler.test.mjs
    npm run build

Referencias oficiales:
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- https://supabase.com/docs/guides/functions/deploy
