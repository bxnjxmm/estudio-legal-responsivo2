import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import ListaPublicaciones from '@/components/ui/ListaPublicaciones';

export default function Publicaciones() {
  return (
    <section id="publicaciones" className="scroll-mt-20 bg-marina py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="max-w-xl font-display h-seccion font-light text-white">
                Publicaciones para entender la ley chilena sin estudiar derecho
              </h2>
              <p className="mt-5 max-w-contenido text-plata/60">
                Una guía por cada materia que atendemos, escrita por nuestro equipo en lenguaje sencillo: qué esperar, qué
                plazos importan y cuándo conviene pedir ayuda.
              </p>
            </div>
            <Link href="/blog" className="py-3 text-sm text-electrico transition hover:text-white">Ver todas</Link>
          </div>
        </Reveal>

        <div className="mt-12">
          <ListaPublicaciones />
        </div>
      </div>
    </section>
  );
}
