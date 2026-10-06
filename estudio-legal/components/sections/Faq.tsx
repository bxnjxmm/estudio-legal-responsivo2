'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faq } from '@/lib/faq';
import { cta } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';

export default function Faq() {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <section id="preguntas" className="scroll-mt-20 bg-noche py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="font-display h-seccion font-light text-white">Preguntas frecuentes</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 divide-y divide-plata/10 border-y border-plata/10">
            {faq.map((f, i) => {
              const abierto = abierta === i;
              return (
                <div key={f.pregunta}>
                  <h3>
                    <button
                      onClick={() => setAbierta(abierto ? null : i)}
                      aria-expanded={abierto}
                      aria-controls={`faq-${i}`}
                      id={`faq-btn-${i}`}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className={`font-display text-lg leading-snug transition-colors ${abierto ? 'text-white' : 'text-plata/85'}`}>{f.pregunta}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${abierto ? 'rotate-180 text-electrico' : 'text-plata/40'}`} />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {abierto && (
                      <motion.div
                        id={`faq-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-contenido pb-6 leading-relaxed text-plata/65">{f.respuesta}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Enlace de texto (secundario) hacia el único CTA del sitio */}
          <a href={cta.ancla} className="group mt-8 inline-flex items-center gap-1.5 py-3 text-sm text-electrico transition hover:text-white">
            ¿Tienes otra duda? <span className="underline underline-offset-4">Escríbenos</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
