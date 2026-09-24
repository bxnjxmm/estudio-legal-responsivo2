'use client';
import { useRef } from 'react';
import { Scale, Gavel, Plane, Briefcase, Heart, Car } from 'lucide-react';
import { areas, whatsapp } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';

const iconos = [Gavel, Scale, Plane, Briefcase, Heart, Car];

function Tarjeta({ area, Icono, i }: { area: (typeof areas)[number]; Icono: any; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const seguir = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    ref.current!.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current!.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={i * 0.06}>
      <div
        ref={ref}
        onMouseMove={seguir}
        className="halo group relative h-full overflow-hidden rounded-2xl border border-plata/10 bg-pizarra/25 p-7 transition-colors duration-500 hover:border-electrico/35"
      >
        <div className="relative z-10">
          <Icono className="h-6 w-6 text-electrico" strokeWidth={1.4} />
          <h3 className="mt-6 font-display text-xl text-white">{area.nombre}</h3>
          <p className="mt-3 text-sm leading-relaxed text-plata/60">{area.resumen}</p>

          <ul className="detalle-tarjeta mt-5 text-sm text-plata/70">
            {area.detalle.map((d) => (
              <li key={d} className="flex gap-2.5 py-1">
                <span className="mt-[9px] h-px w-3 shrink-0 bg-electrico/70" />
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-plata/10 pt-4">
            <span className="text-[11px] leading-tight text-plata/40">{area.tribunal}</span>
            <a
              href={whatsapp(`Hola, necesito asesoría en ${area.nombre}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs text-electrico transition hover:text-white"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Materias() {
  return (
    <section id="materias" className="relative bg-noche py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-display h-seccion font-light text-white">
            Seis materias, un criterio: que entiendas tu propio caso.
          </h2>
          <p className="mt-5 max-w-contenido text-plata/60">
            Cada área tiene sus plazos, su tribunal y sus riesgos. Pasa el cursor sobre una materia para ver qué tipo de
            causas tramito dentro de ella.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Tarjeta key={a.slug} area={a} Icono={iconos[i]} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
