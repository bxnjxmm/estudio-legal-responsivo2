import { MapPin, Navigation } from 'lucide-react';
import { site, mapa } from '@/lib/site';

// Estilo oscuro del embed, a juego con la paleta del sitio: se invierte el mapa claro
// de Google y se rota el tono para conservar el azul del agua y las calles.
const filtroOscuro = 'invert(92%) hue-rotate(180deg) saturate(0.7) brightness(0.92) contrast(0.95)';

export default function Ubicacion() {
  return (
    <div className="mt-16 grid gap-6 border-t border-plata/10 pt-16 lg:grid-cols-[1fr_1.3fr]">
      <div className="vidrio flex h-full flex-col justify-between rounded-2xl p-8">
        <div>
          <MapPin className="h-5 w-5 text-electrico" />
          <p className="mt-4 font-display text-xl text-white">{site.marca}</p>
          <p className="mt-2 text-sm leading-relaxed text-plata/60">
            {site.direccion}
            <br />
            {site.ciudad}
          </p>
          <p className="mt-4 text-sm text-plata/45">Atención presencial con hora agendada, de lunes a viernes.</p>
        </div>
        <a
          href={mapa.ruta}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-electrico px-6 py-3.5 text-sm font-medium text-noche transition hover:bg-white"
        >
          <Navigation className="h-4 w-4" />
          Cómo llegar
        </a>
      </div>

      <div className="relative h-72 overflow-hidden rounded-2xl border border-plata/10 bg-pizarra/40 lg:h-auto lg:min-h-[320px]">
        <iframe
          src={mapa.embed}
          title={`Mapa de ${site.marca}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
          style={{ filter: filtroOscuro }}
        />
      </div>
    </div>
  );
}
