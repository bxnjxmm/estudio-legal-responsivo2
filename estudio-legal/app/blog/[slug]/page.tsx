import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import { posts, getPost, minutosLectura, relacionados } from '@/lib/posts';
import { cta, mensajesWhatsapp, site, whatsapp } from '@/lib/site';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import BotonWhatsapp from '@/components/ui/BotonWhatsapp';
import TarjetaPost from '@/components/ui/TarjetaPost';
import { iconosMateria } from '@/components/ui/iconosMateria';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: 'Publicación no encontrada' };
  return {
    title: post.titulo,
    description: post.bajada,
    openGraph: { title: post.titulo, description: post.bajada, type: 'article', publishedTime: post.fechaISO, authors: [site.marca] }
  };
}

export default function Articulo({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const Icono = iconosMateria[post.materia ?? 'general'];
  const frase = post.materia
    ? `${mensajesWhatsapp.materias[post.materia]} Leí el artículo "${post.titulo}".`
    : `Leí el artículo "${post.titulo}" y tengo una consulta.`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titulo,
    description: post.bajada,
    datePublished: post.fechaISO,
    author: { '@type': 'Organization', name: site.marca },
    publisher: { '@type': 'Organization', name: site.marca }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-noche pt-[112px]">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-plata/50 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Volver a publicaciones
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.18em] text-electrico/80">{post.categoria}</p>
          <h1 className="mt-3 font-display h-seccion font-light text-white">{post.titulo}</h1>
          <p className="mt-4 text-sm text-plata/40">
            Por el equipo de {site.marca} · {post.fecha} · {minutosLectura(post)} min de lectura
          </p>

          <div className="relative mt-10 flex h-40 items-center justify-between overflow-hidden rounded-2xl bg-pizarra/40 px-8 sm:h-52 sm:px-12">
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(76,141,255,.2),transparent_60%)]" />
            <Icono aria-hidden className="absolute -bottom-10 -right-6 h-56 w-56 text-plata/[0.05]" strokeWidth={1} />
            <Icono aria-hidden className="relative h-12 w-12 text-electrico sm:h-14 sm:w-14" strokeWidth={1.2} />
          </div>

          <p className="mt-10 font-display text-xl font-light leading-relaxed text-plata/85 sm:text-2xl">{post.bajada}</p>

          <aside className="vidrio mt-10 rounded-2xl p-7">
            <h2 className="text-xs uppercase tracking-[0.18em] text-plata/45">Lo esencial</h2>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-plata/80">
              {post.claves.map((c) => (
                <li key={c} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-electrico" />
                  {c}
                </li>
              ))}
            </ul>
          </aside>

          <div className="mt-12 space-y-6 font-display text-[19px] leading-[1.8] text-plata/80">
            {post.cuerpo.map((b, i) =>
              typeof b === 'string' ? (
                <p key={i}>{b}</p>
              ) : (
                <h2 key={i} className="!mt-12 text-2xl font-normal leading-snug text-white">{b.subtitulo}</h2>
              )
            )}
          </div>

          <p className="mt-10 border-t border-plata/10 pt-6 text-xs leading-relaxed text-plata/40">
            Este artículo es informativo y no reemplaza la asesoría de un abogado: los plazos y las soluciones dependen de
            los antecedentes de cada caso.
          </p>

          <aside data-oculta-fijo className="vidrio mt-10 rounded-2xl p-7">
            <h2 className="font-display text-xl text-white">¿Tu caso se parece a esto?</h2>
            <p className="mt-2 text-sm text-plata/60">Cada situación tiene matices. Escríbenos y lo revisamos con nombre y apellido.</p>
            <a
              href={whatsapp(mensajesWhatsapp.plantilla(frase))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-electrico px-6 py-3 text-sm font-medium text-noche transition hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" />
              {cta.etiqueta}
            </a>
          </aside>
        </article>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-display text-2xl font-light text-white">Sigue leyendo</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relacionados(post.slug).map((p) => (
              <TarjetaPost key={p.slug} post={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BotonWhatsapp />
    </>
  );
}
