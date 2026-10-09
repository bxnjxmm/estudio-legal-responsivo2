'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import type { ResumenResenas } from '@/lib/reviews';
import Reveal from '@/components/ui/Reveal';

function Estrellas({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i < Math.round(n) ? 'fill-electrico text-electrico' : 'text-plata/20'}`} />
      ))}
    </div>
  );
}

export default function Resenas({ resumen, enlaceEscribirResena }: { resumen: ResumenResenas; enlaceEscribirResena?: string }) {
  const [i, setI] = useState(0);
  const { promedio, total, resenas } = resumen;
  const mover = (d: number) => setI((p) => (p + d + resenas.length) % resenas.length);
  const r = resenas[i];

  return (
    <section id="resenas" className="bg-noche py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="font-display h-seccion font-light text-white">Lo que dicen quienes ya pasaron por esto</h2>
              <div className="mt-5 flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                  <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82Z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A12 12 0 0 0 12 24Z"/>
                  <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.27A12 12 0 0 0 0 12c0 1.94.46 3.77 1.27 5.39l4-3.11Z"/>
                  <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.61 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.27 6.61l4 3.11C6.22 6.88 8.87 4.77 12 4.77Z"/>
                </svg>
                <span className="font-display text-lg text-white">{promedio.toFixed(1)}</span>
                <Estrellas n={promedio} />
                <span className="text-sm text-plata/45">{total} reseñas en Google</span>
              </div>
            </div>
            <div className="hidden shrink-0 gap-2 sm:flex">
              <button onClick={() => mover(-1)} aria-label="Reseña anterior" className="rounded-full border border-plata/15 p-2.5 text-plata/70 transition hover:border-electrico hover:text-white">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button onClick={() => mover(1)} aria-label="Reseña siguiente" className="rounded-full border border-plata/15 p-2.5 text-plata/70 transition hover:border-electrico hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-12 min-h-[260px] sm:min-h-[210px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="vidrio rounded-2xl p-8 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-electrico/70" />
                <Estrellas n={r.calificacion} />
              </div>
              <blockquote className="mt-5 font-display text-xl font-light leading-relaxed text-white sm:text-2xl">{r.texto}</blockquote>
              <figcaption className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-plata/55">
                <span className="text-white">{r.autor}</span>
                {r.comuna && <><span className="h-1 w-1 rounded-full bg-plata/30" /><span>{r.comuna}</span></>}
                <span className="h-1 w-1 rounded-full bg-plata/30" />
                <span>{r.relativo}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex gap-2">
            {resenas.map((_, n) => (
              <button key={n} onClick={() => setI(n)} aria-label={`Ir a la reseña ${n + 1}`} className={`h-1 rounded-full transition-all ${n === i ? 'w-8 bg-electrico' : 'w-3 bg-plata/25'}`} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 sm:hidden">
              <button onClick={() => mover(-1)} aria-label="Anterior" className="rounded-full border border-plata/15 p-2.5 text-plata/70"><ArrowLeft className="h-4 w-4" /></button>
              <button onClick={() => mover(1)} aria-label="Siguiente" className="rounded-full border border-plata/15 p-2.5 text-plata/70"><ArrowRight className="h-4 w-4" /></button>
            </div>
            {enlaceEscribirResena && (
              <a href={enlaceEscribirResena} target="_blank" rel="noopener noreferrer" className="text-sm text-electrico transition hover:text-white">
                Danos tu opinión en Google →
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
