import { MessageCircle, FileSearch, Handshake } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const pasos = [
  { icono: MessageCircle, titulo: 'Nos escribes', texto: 'Elige la materia y cuéntanos tu caso por WhatsApp.' },
  { icono: FileSearch, titulo: 'Evaluamos tu caso', texto: 'Revisamos tus antecedentes y te explicamos con claridad tus posibilidades reales.' },
  { icono: Handshake, titulo: 'Te representamos', texto: 'Si decides avanzar, asumimos tu defensa y te mantenemos informado en cada etapa.' }
];

export default function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="scroll-mt-20 bg-marina py-24 trama lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-2xl font-display h-seccion font-light text-white">Cómo trabajamos</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pasos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-plata/10 bg-pizarra/25 p-7 transition-colors duration-500 hover:border-electrico/35">
                <span className="absolute right-6 top-4 font-display text-6xl font-light text-plata/[0.07]" aria-hidden>
                  {i + 1}
                </span>
                <p.icono className="relative h-6 w-6 text-electrico" strokeWidth={1.4} />
                <h3 className="relative mt-6 font-display text-xl text-white">
                  <span className="sr-only">Paso {i + 1}: </span>
                  {p.titulo}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-plata/60">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
