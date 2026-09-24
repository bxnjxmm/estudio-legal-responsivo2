import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { posts } from '@/lib/posts';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import BotonWhatsapp from '@/components/ui/BotonWhatsapp';

export const metadata: Metadata = {
  title: 'Publicaciones | Derecho chileno explicado en simple',
  description: 'Artículos sobre plazos, costos y procedimientos en materias penales, laborales, de familia, civiles y migratorias en Chile.'
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="bg-noche pt-[112px] trama">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h1 className="max-w-3xl font-display h-pagina font-light text-white">
            Publicaciones
          </h1>
          <p className="mt-5 max-w-contenido text-plata/60">
            Lo que explico una y otra vez en reuniones, escrito para que puedas leerlo antes de contratar a nadie.
          </p>

          <div className="mt-14 divide-y divide-plata/10 border-y border-plata/10">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group grid gap-3 py-8 transition-colors hover:bg-pizarra/20 sm:grid-cols-[150px_1fr_auto] sm:items-start sm:gap-8 sm:px-4">
                <span className="text-xs text-plata/40">{p.fecha}<br /><span className="text-electrico/80">{p.categoria}</span></span>
                <div>
                  <h2 className="font-display text-xl leading-snug text-white transition group-hover:text-electrico">{p.titulo}</h2>
                  <p className="mt-2 max-w-contenido text-sm leading-relaxed text-plata/55">{p.bajada}</p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 text-plata/40 transition group-hover:text-electrico sm:block" />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BotonWhatsapp />
    </>
  );
}
