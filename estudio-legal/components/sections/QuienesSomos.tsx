import { HeartHandshake, ShieldCheck, Gavel } from 'lucide-react';
import { site } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';

const pilares = [
  { icono: HeartHandshake, titulo: 'Trato cercano' },
  { icono: ShieldCheck, titulo: 'Honestidad absoluta' },
  { icono: Gavel, titulo: 'Defensa comprometida' }
];

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="bg-marina pt-16 trama lg:pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <p className="text-sm text-plata/50">{site.marca}</p>
            <h2 className="mt-3 font-display h-seccion font-light text-white">Quiénes somos</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="max-w-contenido text-lg leading-relaxed text-plata/75">
              En Defensas Pavez Abogados sabemos que detrás de cada causa hay una persona o una familia que busca
              tranquilidad. Por eso trabajamos con un enfoque cercano y honesto: evaluamos tu caso en detalle y te
              explicamos con claridad tus posibilidades reales, sin falsas expectativas. Contamos con un equipo
              multidisciplinario, liderado por una abogada con formación internacional, comprometido con agotar cada
              instancia legal para proteger tus derechos.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <ul className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-plata/10 sm:mt-12">
            {pilares.map((p) => (
              <li key={p.titulo} className="flex flex-col items-center gap-2.5 bg-marina px-2 py-5 text-center transition-colors duration-500 hover:bg-pizarra/40 sm:flex-row sm:gap-4 sm:p-6 sm:text-left">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-electrico/25 bg-electrico/10">
                  <p.icono className="h-[18px] w-[18px] text-electrico" strokeWidth={1.5} />
                </span>
                <span className="font-display text-[15px] leading-snug text-white sm:text-lg">{p.titulo}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
