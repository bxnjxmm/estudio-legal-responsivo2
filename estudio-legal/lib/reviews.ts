import { site } from '@/lib/site';

export type Resena = { autor: string; comuna: string; calificacion: number; texto: string; relativo: string };

export type ResumenResenas = { promedio: number; total: number; resenas: Resena[]; enVivo: boolean };

// Sin reseñas reales no se muestra nada: el sitio nunca publica reseñas de ejemplo ni una calificación inventada.
const SIN_RESENAS: ResumenResenas = { promedio: 0, total: 0, resenas: [], enVivo: false };

/**
 * Trae las reseñas reales desde Google (Places API - New) si GOOGLE_PLACE_ID y
 * GOOGLE_PLACES_API_KEY están configuradas en Vercel. Si no, o si la consulta falla, devuelve un resumen
 * vacío (`enVivo: false`) y la sección de reseñas no se muestra. Instrucciones de conexión: ver README.
 */
export async function obtenerResenas(): Promise<ResumenResenas> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) return SIN_RESENAS;

  try {
    const r = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews.rating,reviews.text,reviews.authorAttribution,reviews.relativePublishTimeDescription'
      },
      // Se cachea 24 h: alcanza de sobra para mantenerse dentro del nivel
      // gratuito mensual de Google para esta consulta. Ver README.
      next: { revalidate: 60 * 60 * 24 }
    });
    if (!r.ok) throw new Error(`Places API respondió ${r.status}`);
    const datos = await r.json();

    const resenas: Resena[] = (datos.reviews ?? []).map((r: any) => ({
      autor: r.authorAttribution?.displayName ?? 'Cliente de Google',
      comuna: '',
      calificacion: r.rating ?? 5,
      texto: r.text?.text ?? '',
      relativo: r.relativePublishTimeDescription ?? ''
    }));

    if (resenas.length === 0 || typeof datos.rating !== 'number') throw new Error('Sin reseñas o sin calificación en la respuesta');

    return { promedio: datos.rating, total: datos.userRatingCount ?? resenas.length, resenas, enVivo: true };
  } catch {
    // Si la API falla o las credenciales aún no están listas, no se rompe el sitio.
    return SIN_RESENAS;
  }
}

export const enlaceEscribirResena = site.googlePlaceId
  ? `https://search.google.com/local/writereview?placeid=${site.googlePlaceId}`
  : undefined;
