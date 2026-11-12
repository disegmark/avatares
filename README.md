# Avatares — Estudio creativo iA

App web (Next.js 16) para crear contenido con inteligencia artificial:

- **Avatares** (HeyGen): avatares hiperrealistas de catálogo o creados desde una sola foto. El guion se divide en escenas (línea en blanco, hasta 20) para videos largos, con la voz de ElevenLabs sincronizada en los labios.
- **Voces** (ElevenLabs): texto a voz en 25+ idiomas con control de estabilidad/estilo, y clonación instantánea de voz.
- **Video largo** (fal.ai → PixVerse, Kling, Veo 3): guion por escenas generado con Claude a partir de una idea, continuidad encadenando el último fotograma de cada escena con la siguiente, vista previa continua y unión final en un solo MP4.

La app no ejecuta modelos propios: orquesta las APIs de esos proveedores con tus claves.

## Puesta en marcha

```bash
npm install
cp .env.local.example .env.local   # completa las claves
npm run dev
```

Abre http://localhost:3000 e ingresa la clave definida en `STUDIO_ACCESS_KEY`.

## Configuración

| Variable | Para qué |
| --- | --- |
| `STUDIO_ACCESS_KEY` | Obligatoria. Clave de acceso; sin ella la app queda bloqueada. |
| `HEYGEN_API_KEY` | Pestaña Avatares. |
| `ELEVENLABS_API_KEY` | Pestaña Voces y voz de los avatares (si falta, se usan voces de HeyGen). |
| `FAL_KEY` | Pestaña Video largo. |
| `ANTHROPIC_API_KEY` | Guion automático por escenas (opcional). |

Cada pestaña se activa solo si su proveedor está configurado. Los ids de los modelos de video están en `src/lib/studio/config.ts`; actualízalos cuando fal publique versiones nuevas.

## Despliegue

Funciona en cualquier hosting de Next.js (p. ej. Vercel). Los videos de avatar con voz de ElevenLabs preparan el audio de cada escena antes de enviarlo a HeyGen, por eso esa ruta usa `maxDuration = 300`: el plan del hosting debe permitir funciones de hasta 5 minutos.

## Estructura

- `src/app/page.tsx` — la app (pestañas Avatares, Voces, Video largo).
- `src/components/studio/` — interfaz.
- `src/app/api/studio/` — rutas del servidor que llaman a los proveedores.
- `src/lib/studio/` — clientes de HeyGen, ElevenLabs y fal.ai, configuración y control de acceso.
