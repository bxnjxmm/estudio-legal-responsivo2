'use client';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { areas, cta, whatsapp, whatsappMateria } from '@/lib/site';
import { EVENTO_MATERIA } from '@/lib/agendar';
import Reveal from '@/components/ui/Reveal';

// Único destino de conversión del sitio: la persona elige su materia (opcional) y sale a WhatsApp.
// La materia puede llegar preseleccionada desde una tarjeta de Materias (evento) o desde otra página (?materia=).
export default function Agendar() {
  const [materia, setMateria] = useState<string | null>(null);
  const reducir = useReducedMotion();

  useEffect(() => {
    const seleccionar = (slug: string | null) => {
      if (!slug || !areas.some((a) => a.slug === slug)) return;
      // Pequeña espera para que el chip se active cuando la página ya llegó a esta sección.
      window.setTimeout(() => setMateria(slug), reducir ? 0 : 450);
    };
    seleccionar(new URLSearchParams(window.location.search).get('materia'));
    // Al llegar desde otra página con #agendar, asegura que la sección quede a la vista (respeta el margen del encabezado).
    if (window.location.hash === '#agendar') {
      window.setTimeout(() => document.getElementById('agendar')?.scrollIntoView({ behavior: reducir ? 'auto' : 'smooth', block: 'start' }), 150);
    }
    const alEvento = (e: Event) => seleccionar((e as CustomEvent<string>).detail);
    window.addEventListener(EVENTO_MATERIA, alEvento);
    return () => window.removeEventListener(EVENTO_MATERIA, alEvento);
  }, [reducir]);

  return (
    <section id="agendar" data-cta-zona className="relative scroll-mt-24 overflow-hidden bg-noche py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electrico/12 blur-[130px]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="vidrio relative rounded-3xl p-8 text-center sm:p-14">
            <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-electrico/70 to-transparent" />
            <p className="text-xs uppercase tracking-[0.2em] text-electrico/80">Agenda tu asesoría</p>
            <h2 className="mt-4 font-display h-seccion font-light text-white">Partamos por entender tu caso</h2>
            <p className="mx-auto mt-5 max-w-contenido leading-relaxed text-plata/65">
              Cuéntanos qué te pasó. Te decimos con franqueza si tiene camino y cuáles serían los próximos pasos, antes de que
              decidas nada.
            </p>

            <p className="mt-9 text-xs uppercase tracking-[0.18em] text-plata/55">Materia</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2" role="group" aria-label="Materia de tu caso">
              {areas.map((a) => {
                const activa = materia === a.slug;
                return (
                  <motion.button
                    key={activa ? `${a.slug}-activa` : a.slug}
                    onClick={() => setMateria(activa ? null : a.slug)}
                    aria-pressed={activa}
                    initial={activa && !reducir ? { scale: 1.16 } : false}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                    className={`rounded-full border px-4 py-2.5 text-sm transition-colors ${
                      activa ? 'border-electrico bg-electrico/15 text-white' : 'border-plata/15 text-plata/60 hover:border-plata/35 hover:text-white'
                    }`}
                  >
                    {a.chip}
                  </motion.button>
                );
              })}
            </div>

            <a
              href={materia ? whatsappMateria(materia) : whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-electrico px-8 py-4 text-[15px] font-medium text-noche shadow-[0_18px_50px_-18px_rgba(76,141,255,.9)] transition hover:bg-white sm:w-auto sm:px-12"
            >
              {cta.etiqueta} por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-5 text-xs leading-relaxed text-plata/55">
              Respondemos dentro de 24 horas hábiles. Lo que nos cuentes queda amparado por el secreto profesional.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
