'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { areas } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';
import { iconosMateria } from '@/components/ui/iconosMateria';

export default function Materias() {
  const [abierta, setAbierta] = useState<string | null>(areas[0].slug);

  return (
    <section id="materias" className="relative bg-noche py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-display h-seccion font-light text-white">
            Ocho materias, un criterio: que entiendas tu propio caso.
          </h2>
          <p className="mt-5 max-w-contenido text-plata/60">
            Cada área tiene sus plazos, su tribunal y sus riesgos. Toca una materia para ver qué tipo de causas
            tramitamos dentro de ella.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-3 lg:grid-cols-2">
          {areas.map((a, i) => {
            const Icono = iconosMateria[a.slug];
            const abierto = abierta === a.slug;
            return (
              <Reveal key={a.slug} delay={(i % 2) * 0.05}>
                <div className={`overflow-hidden rounded-2xl border bg-pizarra/25 transition-colors duration-300 ${abierto ? 'border-electrico/35' : 'border-plata/10 hover:border-plata/25'}`}>
                  <button
                    onClick={() => setAbierta(abierto ? null : a.slug)}
                    aria-expanded={abierto}
                    aria-controls={`materia-${a.slug}`}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-electrico/25 bg-electrico/10">
                      <Icono className="h-5 w-5 text-electrico" strokeWidth={1.4} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg text-white">{a.nombre}</span>
                      <span className="mt-1 hidden text-sm leading-snug text-plata/55 sm:block">{a.resumen}</span>
                    </span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-plata/40 transition-transform duration-300 ${abierto ? 'rotate-180 text-electrico' : ''}`} />
                  </button>

                  <div id={`materia-${a.slug}`} className={`grid transition-all duration-300 ${abierto ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="border-t border-plata/10 px-5 pb-5 pt-4">
                        <p className="mb-3 text-sm leading-relaxed text-plata/60 sm:hidden">{a.resumen}</p>
                        <ul className="space-y-1 text-sm text-plata/70">
                          {a.detalle.map((d) => (
                            <li key={d} className="flex gap-2.5 py-1">
                              <span className="mt-[9px] h-px w-3 shrink-0 bg-electrico/70" />
                              {d}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-3 text-[11px] leading-tight text-plata/40">{a.tribunal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
