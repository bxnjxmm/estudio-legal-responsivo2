import { ArrowRight, ShieldCheck } from 'lucide-react';
import { cta, site } from '@/lib/site';

// La entrada del texto es una animación CSS (clase `aparece`, ver globals.css): el contenido ya está en el
// HTML del servidor y se muestra aunque el JavaScript tarde en cargar; con "reducir movimiento" no se anima.
const retraso = (i: number) => ({ ['--d' as string]: `${0.06 + i * 0.09}s` });

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-marina pt-[112px] trama">
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-electrico/15 blur-[130px] animate-deriva" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-pizarra/70 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-10 text-center lg:pb-32">
        <p style={retraso(0)} className="aparece mb-7 flex items-center justify-center gap-2 text-sm text-plata/55">
          <ShieldCheck className="h-4 w-4 text-electrico" />
          {site.rol} — {site.ciudad}
        </p>

        <h1 className="font-display h-hero font-light tracking-tight text-white">
          <span style={retraso(1)} className="aparece block">Tu problema legal</span>
          <span style={retraso(2)} className="aparece block text-plata/55">no se resuelve</span>
          <span style={retraso(3)} className="aparece block">esperando.</span>
        </h1>

        <p style={retraso(4)} className="aparece mx-auto mt-8 max-w-contenido text-[17px] leading-relaxed text-plata/70">
          Representamos a personas ante tribunales de todo Chile en materias penales, civiles, laborales, de familia,
          migración, Policía Local, copropiedad e inmobiliarias.
        </p>

        <div style={retraso(5)} className="aparece mt-10 flex flex-col items-center gap-2">
          <a
            href={cta.ancla}
            data-cta-zona
            className="group inline-flex items-center gap-2 rounded-full bg-electrico px-8 py-4 text-sm font-medium text-noche transition hover:bg-white"
          >
            {cta.etiqueta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#materias" className="inline-block py-3 text-sm text-plata/70 underline-offset-4 transition hover:text-white hover:underline">
            Ver materias
          </a>
        </div>
      </div>
    </section>
  );
}
