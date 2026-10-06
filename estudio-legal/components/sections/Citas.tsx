'use client';
import { useEffect, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { CalendarClock, MessageCircle } from 'lucide-react';
import { areas, site, whatsappMateria } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';

export default function Citas() {
  const [materia, setMateria] = useState(areas[0]);
  const conectado = Boolean(site.calUsername);

  useEffect(() => {
    if (!conectado) return;
    (async () => {
      const cal = await getCalApi({ namespace: materia.calSlug });
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#4C8DFF' } },
        hideEventTypeDetails: false
      });
    })();
  }, [conectado, materia.calSlug]);

  return (
    <section id="citas" className="bg-marina py-24 lg:py-32 trama">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display h-seccion font-light text-white">Agenda tu hora</h2>
          <p className="mt-5 max-w-contenido text-plata/60">
            {conectado
              ? 'Elige la materia de tu caso y reserva directo en el calendario. Las horas que ves acá son las que están realmente disponibles — sin ida y vuelta de mensajes para cuadrar un horario.'
              : 'Elige la materia de tu caso y escríbenos por WhatsApp. Te confirmamos un horario dentro de 24 horas hábiles.'}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-2">
            {areas.map((a) => (
              <button
                key={a.slug}
                onClick={() => setMateria(a)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  materia.slug === a.slug ? 'border-electrico bg-electrico/15 text-white' : 'border-plata/15 text-plata/60 hover:border-plata/35 hover:text-white'
                }`}
              >
                {a.nombre}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="vidrio mt-8 overflow-hidden rounded-2xl">
            {conectado ? (
              <div className="h-[520px] sm:h-[600px] lg:h-[700px]">
                <Cal
                  key={materia.calSlug}
                  namespace={materia.calSlug}
                  calLink={`${site.calUsername}/${materia.calSlug}`}
                  style={{ width: '100%', height: '100%', overflow: 'auto' }}
                  config={{ layout: 'month_view', theme: 'dark' }}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 px-8 py-16 text-center">
                <CalendarClock className="h-8 w-8 text-electrico" />
                <p className="max-w-sm text-sm leading-relaxed text-plata/55">
                  Agenda tu asesoría de <span className="text-white">{materia.nombre}</span>: escríbenos por WhatsApp y
                  coordinamos el día y la hora que mejor te acomode.
                </p>
                <a
                  href={whatsappMateria(materia.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-electrico px-6 py-3 text-sm font-medium text-noche transition hover:bg-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Agendar por WhatsApp
                </a>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
