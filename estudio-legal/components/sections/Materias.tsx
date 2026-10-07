'use client';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { areas } from '@/lib/site';
import { preseleccionarMateria } from '@/lib/agendar';
import Reveal from '@/components/ui/Reveal';
import { iconosMateria } from '@/components/ui/iconosMateria';

function Tarjeta({ area, Icono, i, className }: { area: (typeof areas)[number]; Icono: any; i: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // Solo en celular (<640 px): el detalle empieza plegado para que la lista de materias no sea tan larga.
  const [abierto, setAbierto] = useState(false);
  const seguir = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    ref.current!.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current!.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={i * 0.06} className={className}>
      <div
        ref={ref}
        onMouseMove={seguir}
        className="halo group relative h-full overflow-hidden rounded-2xl border border-plata/10 bg-pizarra/25 p-7 transition-colors duration-500 hover:border-electrico/35"
      >
        <div className="relative z-10">
          <Icono className="h-6 w-6 text-electrico" strokeWidth={1.4} />
          <h3 className="mt-6 font-display text-xl text-white">{area.nombre}</h3>
          <p className="mt-3 text-sm leading-relaxed text-plata/60">{area.resumen}</p>

          <button
            type="button"
            onClick={() => setAbierto(!abierto)}
            aria-expanded={abierto}
            aria-controls={`detalle-${area.slug}`}
            className="-mb-1 mt-2 flex items-center gap-1.5 py-2.5 text-sm text-electrico transition hover:text-white sm:hidden"
          >
            {abierto ? 'Ocultar detalle' : 'Ver qué incluye'}
            <ChevronDown className={`h-4 w-4 transition-transform ${abierto ? 'rotate-180' : ''}`} />
          </button>

          <ul id={`detalle-${area.slug}`} className={`detalle-tarjeta mt-3 text-sm text-plata/70 sm:mt-5 ${abierto ? 'max-sm:!max-h-72 max-sm:!opacity-100' : 'max-sm:hidden'}`}>
            {area.detalle.map((d) => (
              <li key={d} className="flex gap-2.5 py-1">
                <span className="mt-[9px] h-px w-3 shrink-0 bg-electrico/70" />
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-plata/10 pt-4">
            <span className="text-xs leading-snug text-plata/55">{area.tribunal}</span>
            {/* Link secundario: preselecciona la materia en #agendar y baja hasta ahí. */}
            <a
              href="#agendar"
              onClick={() => preseleccionarMateria(area.slug)}
              aria-label={`Consultar por ${area.nombre}`}
              className="-my-3 shrink-0 py-3 pl-2 text-xs text-electrico transition hover:text-white"
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
    <section id="materias" className="relative scroll-mt-20 bg-noche py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-display h-seccion font-light text-white">
            Ocho materias, un criterio: que entiendas tu propio caso.
          </h2>
          <p className="mt-5 max-w-contenido text-plata/60">
            Cada área tiene sus plazos, su tribunal y sus riesgos. Pasa el cursor sobre una materia para ver qué tipo de
            causas tramitamos dentro de ella.
          </p>
        </Reveal>

        {/* 1 columna en móvil, 2 en tablet y 6 en escritorio (3 tarjetas por fila; si sobran 2, ocupan media fila cada una). */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {areas.map((a, i) => (
            <Tarjeta
              key={a.slug}
              area={a}
              Icono={iconosMateria[a.slug]}
              i={i}
              className={areas.length % 3 === 2 && i >= areas.length - 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
