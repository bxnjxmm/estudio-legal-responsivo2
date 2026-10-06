import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { minutosLectura, type Post } from '@/lib/posts';
import Reveal from '@/components/ui/Reveal';
import { iconosMateria } from '@/components/ui/iconosMateria';

const marco = 'group relative overflow-hidden rounded-2xl border border-plata/10 bg-pizarra/25 transition-colors duration-500 hover:border-electrico/35';

type Props = { post: Post; destacada?: boolean; etiqueta?: string; delay?: number; className?: string };

export default function TarjetaPost({ post, destacada = false, etiqueta, delay = 0, className = '' }: Props) {
  const Icono = iconosMateria[post.materia ?? 'general'];
  const pie = (
    <div className="mt-6 flex items-center justify-between text-xs text-plata/40">
      <span>{post.fecha} · {minutosLectura(post)} min de lectura</span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </div>
  );

  if (destacada) {
    return (
      <Reveal delay={delay} className={className}>
        <Link href={`/blog/${post.slug}`} className={`${marco} grid lg:grid-cols-[.75fr_1.25fr]`}>
          <div className="relative flex min-h-[96px] items-center justify-center overflow-hidden bg-pizarra/50 lg:min-h-[320px]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(76,141,255,.22),transparent_62%)] transition-transform duration-700 group-hover:scale-110" />
            <Icono aria-hidden className="absolute -bottom-8 -right-6 h-48 w-48 text-plata/[0.05]" strokeWidth={1} />
            <Icono aria-hidden className="relative h-14 w-14 text-electrico" strokeWidth={1.2} />
          </div>
          <div className="flex flex-col p-7 sm:p-10">
            <span className="text-xs uppercase tracking-[0.18em] text-electrico/80">{etiqueta ?? post.categoria}</span>
            <h3 className="mt-4 font-display text-2xl leading-snug text-white transition group-hover:text-electrico sm:text-3xl">{post.titulo}</h3>
            <p className="mt-4 max-w-contenido leading-relaxed text-plata/60">{post.bajada}</p>
            <ul className="mt-6 hidden space-y-2.5 text-sm text-plata/70 md:block">
              {post.claves.slice(0, 3).map((c) => (
                <li key={c} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-electrico" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-auto">{pie}</div>
          </div>
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} className={className}>
      <Link href={`/blog/${post.slug}`} className={`${marco} flex h-full flex-col`}>
        <div className="relative flex h-24 items-center justify-between overflow-hidden bg-pizarra/50 px-7 sm:h-28">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(76,141,255,.18),transparent_60%)] transition-transform duration-700 group-hover:scale-110" />
          <Icono aria-hidden className="absolute -bottom-6 -right-3 h-28 w-28 text-plata/[0.05]" strokeWidth={1} />
          <Icono aria-hidden className="relative h-7 w-7 text-electrico" strokeWidth={1.4} />
          <span className="relative text-xs uppercase tracking-[0.18em] text-electrico/80">{post.categoria}</span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-display text-lg leading-snug text-white transition group-hover:text-electrico">{post.titulo}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-plata/55">{post.bajada}</p>
          {pie}
        </div>
      </Link>
    </Reveal>
  );
}
