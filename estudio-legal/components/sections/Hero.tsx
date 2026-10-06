'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { cta, site } from '@/lib/site';

const secuencia = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } } };
const linea = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const pasos = [
  { titulo: 'Cuéntanos tu caso', texto: 'Escríbenos por WhatsApp y cuéntanos qué ocurrió.' },
  { titulo: 'Lo evaluamos', texto: 'Revisamos tu caso en detalle y te explicamos tus posibilidades reales, sin falsas expectativas.' },
  { titulo: 'Tú decides', texto: 'Te decimos con franqueza cuáles son los próximos pasos, en un lenguaje sencillo.' }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-marina pt-[112px] trama">
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-electrico/15 blur-[130px] animate-deriva" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-pizarra/70 blur-[120px]" />

      <motion.div variants={secuencia} initial="hidden" animate="show" className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:pb-28">
        <div>
          <motion.p variants={linea} className="mb-7 flex items-center gap-2 text-sm text-plata/55">
            <ShieldCheck className="h-4 w-4 text-electrico" />
            {site.rol} — {site.ciudad}
          </motion.p>

          <h1 className="font-display h-hero font-light tracking-tight text-white">
            <motion.span variants={linea} className="block">Tu problema legal</motion.span>
            <motion.span variants={linea} className="block text-plata/55">no se resuelve</motion.span>
            <motion.span variants={linea} className="block">esperando.</motion.span>
          </h1>

          <motion.p variants={linea} className="mt-8 max-w-contenido text-[17px] leading-relaxed text-plata/70">
            Representamos a personas ante tribunales de todo Chile: penal, civil, laboral, familia, migración, Policía Local,
            copropiedad e inmobiliario.
          </motion.p>

          <motion.div variants={linea} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={cta.ancla} data-oculta-fijo className="group inline-flex items-center gap-2 rounded-full bg-electrico px-7 py-3.5 text-sm font-medium text-noche transition hover:bg-white">
              {cta.etiqueta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#materias" className="text-sm text-plata/70 underline-offset-4 transition hover:text-white hover:underline">
              Ver materias que atendemos
            </a>
          </motion.div>
        </div>

        <motion.aside variants={linea} className="vidrio relative rounded-2xl p-7 lg:sticky lg:top-28">
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-electrico/60 to-transparent" />
          <h2 className="font-display text-xl text-white">Así empezamos</h2>
          <ol className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
            {pasos.map((p, i) => (
              <li key={p.titulo} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-electrico/30 bg-electrico/10 text-sm text-electrico">{i + 1}</span>
                <div>
                  <p className="text-[15px] text-white">{p.titulo}</p>
                  <p className="mt-1 text-sm leading-relaxed text-plata/60">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-plata/10 pt-4 text-[11px] text-plata/40">Lo que nos cuentes queda amparado por el secreto profesional.</p>
        </motion.aside>
      </motion.div>
    </section>
  );
}
