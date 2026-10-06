'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Clock, Landmark, MessageCircle, ShieldCheck } from 'lucide-react';
import { areas, cta, whatsapp, whatsappMateria } from '@/lib/site';
import { EVENTO_MATERIA } from '@/lib/agendar';
import { iconosMateria } from '@/components/ui/iconosMateria';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';
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

  const area = areas.find((a) => a.slug === materia) ?? null;
  const Icono = area ? iconosMateria[area.slug] : MessageCircle;

  return (
    <section id="agendar" data-cta-zona className="relative scroll-mt-24 overflow-hidden bg-marina py-24 trama lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[380px] w-[780px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-electrico/10 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-electrico/80">Agenda tu asesoría</p>
          <h2 className="mt-4 max-w-2xl text-balance font-display h-seccion font-light text-white">Tu caso merece una respuesta clara</h2>
          <p className="mt-5 max-w-contenido leading-relaxed text-plata/65">
            Cuéntanos qué te pasó. Te decimos con franqueza si tiene camino y cuáles serían los próximos pasos, antes de que
            decidas nada.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-10 text-xs uppercase tracking-[0.18em] text-plata/55">Materia de tu caso</p>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Materia de tu caso">
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
        </Reveal>

        <Reveal delay={0.14}>
          <div className="vidrio relative mt-8 overflow-hidden rounded-3xl">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-electrico/70 to-transparent" />
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              <div className="p-7 sm:p-10 lg:min-h-[19rem] lg:p-12" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={area?.slug ?? 'general'}
                    initial={reducir ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducir ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -6, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electrico/10 ring-1 ring-inset ring-electrico/25">
                      <Icono className="h-5 w-5 text-electrico" />
                    </span>
                    <p className="mt-6 text-xs uppercase tracking-[0.18em] text-plata/55">{area ? 'Tu asesoría de' : 'Primera conversación'}</p>
                    <h3 className="mt-2 text-balance font-display text-2xl font-light text-white sm:text-[1.75rem] sm:leading-snug">
                      {area ? area.nombre : 'Cuéntanos qué te pasó'}
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-plata/65">
                      {area ? area.resumen : 'Elige tu materia para que tu mensaje llegue con contexto, o escríbenos directo y te orientamos con franqueza.'}
                    </p>
                    {area && (
                      <p className="mt-5 flex items-start gap-2.5 text-sm leading-relaxed text-plata/55">
                        <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-electrico/80" />
                        {area.tribunal}
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col justify-center border-t border-plata/10 bg-noche/35 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <a
                  href={materia ? whatsappMateria(materia) : whatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aura brillo group inline-flex w-full items-center justify-center gap-3 rounded-full bg-electrico px-7 py-4 text-base font-medium text-noche shadow-[0_18px_50px_-18px_rgba(76,141,255,.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  <IconoWhatsapp className="h-5 w-5 shrink-0" />
                  {cta.etiqueta}
                  <span className="sr-only"> por WhatsApp</span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="mt-3 text-center text-xs text-plata/55">Se abre WhatsApp con tu mensaje ya escrito.</p>

                <ul className="mt-8 space-y-4 border-t border-plata/10 pt-7 text-sm leading-relaxed text-plata/65">
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-electrico" />
                    Respondemos dentro de 24 horas hábiles.
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-electrico" />
                    Lo que nos cuentes queda amparado por el secreto profesional.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
