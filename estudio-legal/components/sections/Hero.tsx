'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { areas, site, whatsapp } from '@/lib/site';

const secuencia = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } } };
const linea = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

export default function Hero() {
  const [materia, setMateria] = useState(areas[0].nombre);

  return (
    <section className="relative overflow-hidden bg-marina pt-[112px] trama">
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-electrico/15 blur-[130px] animate-deriva" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-pizarra/70 blur-[120px]" />

      <motion.div variants={secuencia} initial="hidden" animate="show" className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:pb-32">
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
            Represento a personas ante tribunales de todo Chile en materias penales, civiles, laborales, de familia,
            migración y Policía Local. Sin mesa de entrada ni traspasos: la abogada que revisa tu caso es la misma
            que se para frente al juez.
          </motion.p>

          <motion.div variants={linea} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#citas" className="group inline-flex items-center gap-2 rounded-full bg-electrico px-7 py-3.5 text-sm font-medium text-noche transition hover:bg-white">
              Agendar mi hora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#materias" className="text-sm text-plata/70 underline-offset-4 transition hover:text-white hover:underline">
              Ver materias que atiendo
            </a>
          </motion.div>

          <motion.dl variants={linea} className="mt-14 grid max-w-lg grid-cols-3 gap-3 filo pt-7 sm:gap-6">
            {[['12 años', 'de ejercicio'], ['+400', 'causas tramitadas'], ['24 h', 'para responderte']].map(([n, t]) => (
              <div key={t}>
                <dt className="font-display text-xl text-white sm:text-2xl">{n}</dt>
                <dd className="mt-1 text-xs text-plata/50">{t}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.aside variants={linea} className="vidrio relative rounded-2xl p-7 lg:sticky lg:top-28">
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-electrico/60 to-transparent" />
          <h2 className="font-display text-xl text-white">Partamos por entender tu caso</h2>
          <p className="mt-2 text-sm leading-relaxed text-plata/60">
            Cuéntame qué te pasó. Te digo con franqueza si tiene camino y cuáles serían los próximos pasos, antes de que decidas nada.
          </p>

          <label className="mt-7 block text-xs uppercase tracking-[0.18em] text-plata/45">Materia</label>
          <div className="mt-3 flex flex-wrap gap-2">
            {areas.map((a) => (
              <button
                key={a.slug}
                onClick={() => setMateria(a.nombre)}
                className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                  materia === a.nombre ? 'border-electrico bg-electrico/15 text-white' : 'border-plata/15 text-plata/60 hover:border-plata/35 hover:text-white'
                }`}
              >
                {a.nombre.replace('Derecho ', '')}
              </button>
            ))}
          </div>

          <a
            href={whatsapp(`Hola, necesito asesoría en ${materia}. Mi caso es:`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-electrico/40 bg-electrico/10 py-3.5 text-sm text-white transition hover:bg-electrico hover:text-noche"
          >
            Escribir por WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-center text-[11px] text-plata/40">Respondo personalmente. Lo que me cuentes queda amparado por el secreto profesional.</p>
        </motion.aside>
      </motion.div>
    </section>
  );
}
