import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { posts } from '@/lib/posts';
import Reveal from '@/components/ui/Reveal';

export default function Publicaciones() {
  return (
    <section id="publicaciones" className="bg-marina py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 className="max-w-xl font-display h-seccion font-light text-white">
              Publicaciones para entender la ley chilena sin estudiar derecho
            </h2>
            <Link href="/blog" className="text-sm text-electrico transition hover:text-white">Ver todas</Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-plata/10 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07} className="bg-marina">
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col">
                {/* Placeholder estilizado: reemplazar por <Image> cuando haya fotografía */}
                <div className="relative h-40 overflow-hidden bg-pizarra/50">
                  <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(76,141,255,.18),transparent_55%)] transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_30%_20%,rgba(201,214,227,.07),transparent_60%)]" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-electrico/80">{p.categoria}</span>
                  <h3 className="mt-4 font-display text-lg leading-snug text-white transition group-hover:text-electrico">{p.titulo}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-plata/55">{p.bajada}</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-plata/40">
                    <span>{p.fecha} · {p.lectura}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
