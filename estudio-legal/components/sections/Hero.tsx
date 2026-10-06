import { ArrowDown, ShieldCheck } from 'lucide-react';
import { site } from '@/lib/site';
import HeroAgenda from '@/components/sections/HeroAgenda';
import FocoCursor from '@/components/ui/FocoCursor';
import CintaMaterias from '@/components/ui/CintaMaterias';

// La entrada del texto es una animación CSS (clase `aparece`, ver globals.css): el contenido ya está en el
// HTML del servidor y se muestra aunque el JavaScript tarde en cargar; con "reducir movimiento" no se anima.
const retraso = (i: number) => ({ ['--d' as string]: `${0.06 + i * 0.09}s` });

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-marina pt-[112px] trama">
      <FocoCursor />
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-electrico/15 blur-[130px] animate-deriva" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-pizarra/70 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-14 lg:pb-28">
        <div>
          <p style={retraso(0)} className="aparece mb-7 flex items-center gap-2 text-sm text-plata/55">
            <ShieldCheck className="h-4 w-4 text-electrico" />
            {site.rol} — {site.ciudad}
          </p>

          <h1 className="font-display h-hero font-light tracking-tight text-white">
            <span style={retraso(1)} className="aparece block">Tu problema legal</span>
            <span style={retraso(2)} className="aparece block text-plata/55">no se resuelve</span>
            <span style={retraso(3)} className="aparece block">
              <span className="subraya bg-gradient-to-r from-white via-white to-[#9CC0FF] bg-clip-text text-transparent">esperando.</span>
            </span>
          </h1>

          <p style={retraso(4)} className="aparece mt-8 max-w-contenido text-[17px] leading-relaxed text-plata/70">
            Representamos a personas ante tribunales de todo Chile en materias penales, civiles, laborales, de familia,
            migración, Policía Local, copropiedad e inmobiliarias.
          </p>

          <a
            href="#materias"
            style={retraso(5)}
            className="aparece group mt-6 inline-flex items-center gap-2 py-3 text-sm text-plata/70 underline-offset-4 transition hover:text-white hover:underline"
          >
            Ver materias que atendemos
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        <div style={retraso(5)} className="aparece">
          <div className="lg:animate-deriva">
            <HeroAgenda />
          </div>
        </div>
      </div>

      <CintaMaterias />
    </section>
  );
}
