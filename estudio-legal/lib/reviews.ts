import { site } from '@/lib/site';

export type Resena = { autor: string; comuna: string; calificacion: number; texto: string; relativo: string };

// Reseñas de referencia para esta maqueta — se muestran solo mientras no haya
// un Perfil de Negocio de Google conectado. Ver README, sección "Reseñas de Google".
const RESPALDO: Resena[] = [
  { autor: 'Marcela R.', comuna: 'Maipú', calificacion: 5, texto: 'Llevaba dos años tratando de resolver esto sola. En la primera reunión me explicó todo el proceso y qué esperar en cada etapa.', relativo: 'hace 2 meses' },
  { autor: 'Jorge V.', comuna: 'Valparaíso', calificacion: 5, texto: 'Me despidieron después de seis años. Llegamos a conciliación antes del juicio y recuperé lo que correspondía.', relativo: 'hace 3 meses' },
  { autor: 'Yusleidy M.', comuna: 'Estación Central', calificacion: 5, texto: 'Me habían rechazado el trámite dos veces. Revisó el expediente, encontró el error y lo resolvimos.', relativo: 'hace 5 meses' },
  { autor: 'Patricio S.', comuna: 'Ñuñoa', calificacion: 4, texto: 'Me acompañó a la audiencia y salimos con acuerdo el mismo día. Muy directa para explicar los pasos.', relativo: 'hace 6 meses' },
  { autor: 'Daniela C.', comuna: 'Puente Alto', calificacion: 5, texto: 'Llamé un domingo por una urgencia familiar. Contestó ella misma y estuvo en el tribunal al día siguiente.', relativo: 'hace 8 meses' }
];

const RESPALDO_PROMEDIO = 4.9;

export type ResumenResenas = { promedio: number; total: number; resenas: Resena[]; enVivo: boolean };

/**
 * Trae las reseñas reales desde Google (Places API - New) si GOOGLE_PLACE_ID y
 * GOOGLE_PLACES_API_KEY están configuradas en Vercel. Si no, muestra las de
 * referencia de arriba. Instrucciones completas de conexión: ver README.
 */
export async function obtenerResenas(): Promise<ResumenResenas> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return { promedio: RESPALDO_PROMEDIO, total: RESPALDO.length, resenas: RESPALDO, enVivo: false };
  }

  try {
    const r = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
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

    if (resenas.length === 0) throw new Error('Sin reseñas en la respuesta');

    return { promedio: datos.rating ?? RESPALDO_PROMEDIO, total: datos.userRatingCount ?? resenas.length, resenas, enVivo: true };
  } catch {
    // Si la API falla o las credenciales aún no están listas, no se rompe el sitio.
    return { promedio: RESPALDO_PROMEDIO, total: RESPALDO.length, resenas: RESPALDO, enVivo: false };
  }
}

export const enlaceEscribirResena = site.googlePlaceId
  ? `https://search.google.com/local/writereview?placeid=${site.googlePlaceId}`
  : undefined;
