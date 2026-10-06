import { PhoneCall, Target, FileSearch, Radar } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const ventajas = [
  { icono: PhoneCall, titulo: 'Hablas con abogados, no con un asistente', texto: 'Evaluamos tu caso en detalle y te explicamos con claridad tus posibilidades reales, sin falsas expectativas.' },
  { icono: FileSearch, titulo: 'Sabes en qué etapa está tu causa', texto: 'Reporte del avance procesal en cada hito importante, no solo cuando preguntas. Nada de esperar semanas para saber si algo se movió.' },
  { icono: Target, titulo: 'Estrategia hecha para tu caso, no la plantilla de siempre', texto: 'Antes de litigar revisamos si conviene negociar, mediar o ir a juicio. El objetivo es tu mejor resultado, no el proceso más largo.' },
  { icono: Radar, titulo: 'Formación que se puede verificar', texto: 'Nuestro equipo está liderado por una abogada con posgrados en derecho penal y garantías constitucionales, en Chile y en España.' }
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-marina py-24 lg:py-32 trama">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display h-seccion font-light text-white">
              Por qué una persona elige este estudio y no el de al lado
            </h2>
            <p className="mt-5 text-plata/60">
              La mayoría de los malos recuerdos con abogados no son por perder un juicio: son por no saber qué
              estaba pasando con su propia causa. Eso es lo primero que resolvemos.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl bg-plata/10 sm:grid-cols-2">
            {ventajas.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 0.07} className="bg-marina">
                <div className="h-full p-7 transition-colors duration-500 hover:bg-pizarra/40">
                  <v.icono className="h-5 w-5 text-electrico" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg leading-snug text-white">{v.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-plata/60">{v.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
