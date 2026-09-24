'use client';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { site, mapa } from '@/lib/site';

declare global {
  interface Window {
    google?: any;
  }
}

// Estilo oscuro del mapa, a juego con la paleta del sitio (azules #0A1128/#1C2541
// y acento eléctrico #4C8DFF). Solo se aplica si hay una API key configurada.
const estiloOscuro = [
  { elementType: 'geometry', stylers: [{ color: '#0f1626' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#0b0c10' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#c9d6e3' }] },
  { featureType: 'administrative', elementType: 'geometry', stylers: [{ color: '#3a506b' }] },
  { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#c9d6e3' }] },
  { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#1c2541' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#8fa3bf' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#14251f' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#1c2541' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#0b0c10' }] },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#8fa3bf' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#2c3e60' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#0a1128' }] },
  { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#c9d6e3' }] },
  { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#1c2541' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#060a14' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#3a506b' }] }
];

export default function Ubicacion() {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const [cargado, setCargado] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey) return;

    const iniciar = () => {
      if (!window.google?.maps || !contenedorRef.current) return;
      const mapaGoogle = new window.google.maps.Map(contenedorRef.current, {
        center: mapa,
        zoom: 15,
        styles: estiloOscuro,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'cooperative'
      });
      new window.google.maps.Marker({ position: mapa, map: mapaGoogle, title: site.estudio });
      setCargado(true);
    };

    if (window.google?.maps) {
      iniciar();
      return;
    }

    const id = 'script-google-maps';
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener('load', iniciar);
    return () => script?.removeEventListener('load', iniciar);
  }, [apiKey]);

  const enlaceRuta = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${site.direccion}, ${site.ciudad}`)}`;

  return (
    <div className="mt-16 grid gap-6 border-t border-plata/10 pt-16 lg:grid-cols-[1fr_1.3fr]">
      <div className="vidrio flex h-full flex-col justify-between rounded-2xl p-8">
        <div>
          <MapPin className="h-5 w-5 text-electrico" />
          <p className="mt-4 font-display text-xl text-white">{site.estudio}</p>
          <p className="mt-2 text-sm leading-relaxed text-plata/60">
            {site.direccion}
            <br />
            {site.ciudad}
          </p>
          <p className="mt-4 text-sm text-plata/45">Atención presencial con hora agendada, de lunes a viernes.</p>
        </div>
        <a
          href={enlaceRuta}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-electrico px-6 py-3.5 text-sm font-medium text-noche transition hover:bg-white"
        >
          <Navigation className="h-4 w-4" />
          Cómo llegar
        </a>
      </div>

      <div className="relative h-72 overflow-hidden rounded-2xl border border-plata/10 lg:h-auto lg:min-h-[320px]">
        {apiKey ? (
          <div ref={contenedorRef} className={`h-full w-full transition-opacity duration-500 ${cargado ? 'opacity-100' : 'opacity-0'}`} />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-pizarra/40 trama">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(76,141,255,.16),transparent_65%)]" />
            <div className="relative text-center">
              <MapPin className="mx-auto h-8 w-8 text-electrico" />
              <p className="mt-3 max-w-[220px] text-sm text-plata/50">Mapa interactivo — se activa al conectar Google Maps (ver README)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
