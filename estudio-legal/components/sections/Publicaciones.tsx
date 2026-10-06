import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { posts } from '@/lib/posts';
import Reveal from '@/components/ui/Reveal';
import ListaPublicaciones from '@/components/ui/ListaPublicaciones';

export default function Publicaciones() {
  return (
    <section id="publicaciones" className="bg-marina py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-xl font-display h-seccion font-light text-white">
            Publicaciones para entender la ley chilena sin estudiar derecho
          </h2>
          <p className="mt-5 max-w-contenido text-plata/60">
            Guías escritas por nuestro equipo en lenguaje sencillo: qué esperar, qué plazos importan y cuándo conviene pedir
            ayuda.
          </p>
        </Reveal>

        <div className="mt-10">
          <ListaPublicaciones limite={3} />
        </div>

        <Link href="/blog" className="group mt-5 inline-flex items-center gap-2 py-3 text-sm text-electrico transition hover:text-white">
          Ver las {posts.length} publicaciones, una por materia
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
