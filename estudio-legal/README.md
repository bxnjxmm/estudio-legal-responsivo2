# Estudio Jurídico — Maqueta web premium (Next.js 14 + Tailwind + Framer Motion)

Esta es una **maqueta** para mostrarle a la clienta antes de cargar sus datos reales. Todo lo que
suena a dato personal (universidad, dirección, biografía) está marcado abajo como inventado —
reemplázalo apenas ella te confirme la información real.

## 0. Qué es inventado y hay que reemplazar

| Dato | Dónde está | Qué hacer |
|---|---|---|
| Formación de la fundadora, marca, teléfono, correo y dirección | `lib/site.ts` → `site`, `formacion` | Ya son datos reales de Defensas Pavez Abogados |
| Reseñas de la sección "Reseñas" | `lib/reviews.ts` → `RESPALDO` | Se reemplazan solas al conectar Google (paso 5); mientras tanto son de referencia |
| Testimonios del blog / artículos | `lib/posts.ts` | Textos genéricos de ejemplo; se pueden reemplazar por casos reales (anonimizados) |

## 1. Contenido editable del día a día

| Archivo | Qué contiene |
|---|---|
| `lib/site.ts` | Marca, contacto, mapa, mensajes de WhatsApp, las 8 materias y la formación de la fundadora |
| `lib/posts.ts` | Artículos del blog |
| `lib/reviews.ts` | Reseñas de referencia y conexión con Google |

## 2. Correr en local

```bash
npm install
cp .env.example .env.local
npm run dev                  # http://localhost:3000
```

## 3. Subir a GitHub y desplegar en Vercel

```bash
git init && git add . && git commit -m "Sitio web estudio jurídico"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

En [vercel.com](https://vercel.com): **Add New → Project** → importa el repo → Framework **Next.js**
(se detecta solo) → agrega las variables de `.env.example` → **Deploy**. Cada `git push` a `main`
vuelve a desplegar automáticamente. Dominio temporal `*.vercel.app` incluido; el definitivo se
agrega en **Settings → Domains**.

## 4. Formulario de contacto

Funciona sin configuración: valida los datos y deja la consulta en los logs de Vercel. Para que
llegue por correo, crea una cuenta en [resend.com](https://resend.com) y agrega `RESEND_API_KEY`
y `CORREO_DESTINO` en Vercel — no requiere tocar código.

## 5. Conectar las reseñas reales de Google

La sección "Reseñas" ya está programada para mostrar las reseñas reales del Perfil de Negocio de
Google apenas se configure. Mientras tanto, muestra las de referencia y lo dice discretamente al
pie de la sección.

**Pasos:**

1. **Crear o reclamar el Perfil de Negocio de Google** de la abogada/estudio en
   [business.google.com](https://business.google.com). Si ya existe (por ejemplo, alguien lo creó
   automáticamente), se puede reclamar desde ahí mismo.
2. **Obtener el Place ID**: busca el negocio en el
   [buscador de Place ID de Google](https://developers.google.com/maps/documentation/places/web-service/place-id)
   y copia el código (empieza con `ChIJ...`).
3. **Habilitar la API**: en [Google Cloud Console](https://console.cloud.google.com/), activa
   **"Places API (New)"** y genera una API key. Restríngela para que solo funcione desde el dominio
   del sitio (Application restrictions → HTTP referrers).
4. **Agregar las variables en Vercel** (Settings → Environment Variables):
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID` → el Place ID (se usa para el botón "Danos tu opinión en Google")
   - `GOOGLE_PLACE_ID` → el mismo Place ID (lado servidor)
   - `GOOGLE_PLACES_API_KEY` → la API key
5. Vuelve a desplegar. La sección "Reseñas" empieza a mostrar la calificación y las reseñas reales.

**Costo — léelo antes de activarlo:** Google cobra por esta consulta según el volumen (tarifa
publicada por Google, sujeta a cambio), pero incluye una cuota gratuita mensual. El sitio pide estos
datos una sola vez al día (no en cada visita), así que para el tráfico normal de un estudio jurídico
suele mantenerse dentro de la cuota gratis. Si prefieres no arriesgar ningún cargo, puedes omitir
este paso: el sitio sigue funcionando perfecto con las reseñas de referencia hasta que decidas
conectarlo. Una alternativa 100% gratuita es no conectar la API y en su lugar copiar manualmente,
cada cierto tiempo, las 3-5 mejores reseñas reales al array `RESPALDO` de `lib/reviews.ts`.

**Limitación de Google:** la API entrega como máximo 5 reseñas por negocio (las más relevantes según
Google), no el listado completo. Para mostrar todas, hay que enlazar directamente al perfil de Google.

## 6. Cómo conseguir que los clientes califiquen

- **Link directo para pedir la reseña**: `https://search.google.com/local/writereview?placeid=TU_PLACE_ID`
  (es el mismo que ya usa el botón "Danos tu opinión en Google" de la sección Reseñas). Se puede
  acortar con un servicio como Bitly para mandarlo por WhatsApp.
- **El momento importa más que el mensaje**: pide la reseña justo después de una audiencia con
  buen resultado o al cerrar el caso — no meses después.
- **Un mensaje simple funciona mejor que uno largo**: algo como *"Si te sirvió el proceso, me
  ayudaría mucho que dejaras una reseña acá: [link]. Toma menos de un minuto."* enviado por
  WhatsApp tiene mejor tasa de respuesta que el correo.
- **Código QR en la oficina**: genera uno gratis (por ejemplo en qr-code-generator.com) apuntando
  al mismo link, e imprímelo en la sala de espera o en la tarjeta de presentación.
- Nunca ofrezcas nada a cambio de una reseña positiva ni filtres reseñas negativas antes de
  publicarlas — Google lo prohíbe expresamente y puede penalizar o eliminar el perfil.

## 7. Dónde agregar fotografías (y en qué formato)

| Ubicación en el sitio | Qué foto poner | Tamaño recomendado |
|---|---|---|
| Sección "Sobre la fundadora" (`components/sections/SobreAbogada.tsx`, foto en `public/images/baitiare-pavez.jpg`) | Retrato profesional de la abogada — fondo simple, buena luz, actitud cercana pero seria | Vertical, mínimo 1000×1250 px |
| Cada artículo del blog (`app/blog/[slug]/page.tsx`) | Una imagen genérica por categoría (una sala de audiencia, un escritorio con documentos, una firma de contrato) — no hace falta que sea del caso real | 1200×675 px (16:9) |
| Miniaturas de blog en portada (`components/sections/Publicaciones.tsx`) | Las mismas imágenes de cada artículo, recortadas | 800×450 px |
| Imagen para compartir en redes (Open Graph) | Una sola imagen con el nombre, foto y una frase corta — es lo que se ve al compartir el link en WhatsApp o Instagram | 1200×630 px, guardar como `public/og.jpg` |
| Favicon | Un ícono simple (inicial, escudo, balanza) | 512×512 px, convertir a `.ico` |

**Sobre las reseñas y testimonios**: se recomienda **no** usar fotos reales de clientes, aunque las
tengan. El secreto profesional y la privacidad del cliente pesan más que el efecto visual — por
eso el diseño usa solo nombre, comuna y estrellas, sin avatar.

Para insertar una foto donde hoy hay un placeholder, reemplaza el bloque marcado con el comentario
`{/* Placeholder de fotografía */}` por:

```tsx
import Image from 'next/image';
<Image src="/fotos/abogada.jpg" alt="Baitiare Scarleth Pavez, abogada fundadora de Defensas Pavez Abogados" fill className="object-cover" />
```

Deja los archivos en `public/fotos/`. Si vas a usar fotografías de Unsplash mientras consigues las
reales, el dominio ya está habilitado en `next.config.mjs`.

## 8. Mapa de la oficina (embed de Google Maps en modo oscuro)

La sección de Contacto trae un mapa embebido con la dirección de la oficina (Paseo Ahumada 370,
Santiago), con estilo oscuro a juego con la paleta del sitio, más un botón "Cómo llegar" que abre la
ruta directamente en Google Maps. No requiere API key ni configuración. Si la oficina cambia de
dirección, se editan los enlaces `mapa.embed` y `mapa.ruta` en `lib/site.ts`.

## 9. Sistema de citas (agendamiento conectado a Google Calendar)

La sección "Agenda tu hora" deja elegir la materia del caso y reservar directo en un calendario con
disponibilidad real — sin mensajes de ida y vuelta para cuadrar un horario. Para esto se usa
[Cal.com](https://cal.com), gratis para un solo profesional, que se conecta al Google Calendar real
de la abogada y sincroniza la disponibilidad en tiempo real.

**Por qué Cal.com y no una integración directa con la API de Google Calendar:** una integración
directa requiere que la clienta autorice permisos de Google (OAuth) y que exista un servidor que
gestione esos permisos de forma segura — es una pieza de infraestructura aparte, no algo que deba
vivir en el código de un sitio de marketing. Cal.com (o Calendly, que funciona de forma muy similar)
ya resuelve eso de forma profesional y gratuita para un solo usuario.

**Pasos para conectarlo:**

1. Crear una cuenta gratis en [cal.com](https://cal.com) con el correo de la abogada.
2. En **Apps → Calendar**, conectar su Google Calendar (autoriza con su cuenta de Google; desde
   ahí, Cal.com solo agenda en los horarios que ella deje libres).
3. Crear **un tipo de evento por cada materia**, con el mismo slug que ya está definido en
   `lib/site.ts` (campo `calSlug` de cada área):

   | Materia | Slug a crear en Cal.com |
   |---|---|
   | Derecho Penal | `consulta-penal` |
   | Derecho Civil | `consulta-civil` |
   | Migración | `consulta-migracion` |
   | Derecho Laboral | `consulta-laboral` |
   | Derecho de Familia | `consulta-familia` |
   | Juzgado de Policía Local | `consulta-policia-local` |
   | Ley de Copropiedad | `consulta-copropiedad` |
   | Asesoría Inmobiliaria | `consulta-inmobiliaria` |

   En cada tipo de evento se define la duración (por ejemplo, 30 min) y el horario disponible —
   distinto para cada materia si conviene, por ejemplo una consulta penal más larga que una de
   Policía Local.
4. Copiar el nombre de usuario de Cal.com (aparece en la URL de su perfil,
   `cal.com/TU-USUARIO`) y agregarlo en Vercel como `NEXT_PUBLIC_CAL_USERNAME`.
5. Volver a desplegar. La sección "Agenda tu hora" empieza a mostrar el calendario real: el
   visitante elige la materia, ve los horarios realmente libres y reserva ahí mismo. La cita queda
   en el Google Calendar de la abogada al instante.

Sin `NEXT_PUBLIC_CAL_USERNAME` configurada, esa sección muestra en su lugar un botón para agendar
por WhatsApp, con la materia elegida ya incluida en el mensaje — el sitio nunca se ve roto ni vacío.

**Alternativa:** si se prefiere Calendly en vez de Cal.com, el reemplazo es directo: Calendly
también se conecta a Google Calendar y ofrece un embed muy similar
(`react-calendly` en vez de `@calcom/embed-react`); la lógica de selección de materia en
`components/sections/Citas.tsx` no cambia, solo el componente del calendario.

## Decisiones de diseño

- **Sin preloader.** El H1 se pinta en el primer frame; las animaciones ocurren sobre contenido ya
  visible, nunca lo esconden.
- **Sin foco en precio.** Todo el texto evita hablar de honorarios o costos: la propuesta de valor
  es cercanía, trato honesto y formación verificable.
- **"Manifiesto" como quiebre de ritmo.** Entre las ventajas y las reseñas hay una frase potente a
  pantalla completa — evita que el scroll se sienta monótono y deja una idea memorable.
- **Reseñas de Google en vez de testimonios inventados.** En cuanto se conecta el Perfil de
  Negocio, la prueba social pasa de "confía en mí" a "mira lo que dicen en Google", que es más
  persuasivo y verificable para un visitante nuevo.
- **Datos estructurados (JSON-LD) sin inventar calificación.** El `aggregateRating` del schema solo
  se publica cuando hay reseñas reales de Google — publicar una calificación de referencia como si
  fuera real puede penalizar el posicionamiento en buscadores.
- **Agendamiento con disponibilidad real, no un formulario más.** "Agenda tu hora" resuelve el
  paso que más fricción genera en un sitio de servicios: saber cuándo se puede reunir alguien.
  Elegir la materia primero también hace que la abogada llegue a la reunión sabiendo de qué se
  trata.
- **Mapa sin configuración.** El mapa embebido por dirección y el botón "Cómo llegar" funcionan sin
  API key de Google Maps.
- **Accesibilidad.** Foco visible, contraste AA sobre fondo oscuro, `prefers-reduced-motion`
  respetado.
