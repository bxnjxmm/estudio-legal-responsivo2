'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { areas, cta, whatsapp, whatsappMateria } from '@/lib/site';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';

// Tarjeta para agendar de la portada: la persona elige su materia (opcional) y el botón abre WhatsApp directo,
// con el mensaje de esa materia ya escrito. Es el botón principal de la portada (`data-cta-zona`: mientras está
// a la vista, el CTA del encabezado y el botón flotante se ocultan).
export default function HeroAgenda() {
  const [materia, setMateria] = useState<string | null>(null);

  return (
    <div data-cta-zona className="relative overflow-hidden rounded-[1.15rem] bg-plata/10 p-px">
      <span aria-hidden className="borde-giratorio" />
      <div className="vidrio-solido relative rounded-2xl p-7 sm:p-8">
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-electrico/70 to-transparent" />

        <p className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-electrico/90">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-electrico opacity-70 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-electrico" />
          </span>
          Agenda tu asesoría
        </p>
        <h2 className="mt-4 text-balance font-display text-2xl font-light text-white sm:text-[1.75rem] sm:leading-snug">
          Partamos por entender tu caso
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-plata/65">
          Elige tu materia y cuéntanos qué te pasó. Te decimos con franqueza si tiene camino.
        </p>

        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-plata/55">Materia</p>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Materia de tu caso">
          {areas.map((a) => {
            const activa = materia === a.slug;
            return (
              <button
                key={a.slug}
                onClick={() => setMateria(activa ? null : a.slug)}
                aria-pressed={activa}
                className={`rounded-full border px-4 py-2.5 text-sm transition-colors ${
                  activa ? 'border-electrico bg-electrico/15 text-white' : 'border-plata/15 text-plata/60 hover:border-plata/35 hover:text-white'
                }`}
              >
                {a.chip}
              </button>
            );
          })}
        </div>

        <a
          href={materia ? whatsappMateria(materia) : whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          className="aura brillo group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-electrico px-7 py-4 text-base font-medium text-noche shadow-[0_18px_50px_-18px_rgba(76,141,255,.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
        >
          <IconoWhatsapp className="h-5 w-5 shrink-0" />
          {cta.etiqueta}
          <span className="sr-only"> por WhatsApp</span>
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </a>
        <p className="mt-4 text-center text-xs leading-relaxed text-plata/55">
          Se abre WhatsApp con tu mensaje ya escrito. Lo que nos cuentes queda amparado por el secreto profesional.
        </p>
      </div>
    </div>
  );
}
