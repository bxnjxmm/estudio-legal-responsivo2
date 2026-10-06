import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { posts, getPost } from '@/lib/posts';
import { whatsapp } from '@/lib/site';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import BotonWhatsapp from '@/components/ui/BotonWhatsapp';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: 'Publicación no encontrada' };
  return { title: post.titulo, description: post.bajada, openGraph: { title: post.titulo, description: post.bajada, type: 'article' } };
}

export default function Articulo({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-noche pt-[112px]">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-plata/50 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Volver a publicaciones
          </Link>

          <p className="mt-10 text-xs text-electrico/80">{post.categoria}</p>
          <h1 className="mt-3 font-display h-seccion font-light text-white">{post.titulo}</h1>
          <p className="mt-4 text-sm text-plata/40">{post.fecha} · {post.lectura} de lectura</p>

          {/* Placeholder de imagen destacada: reemplazar por <Image src="..." /> */}
          <div className="relative mt-10 h-56 overflow-hidden rounded-2xl bg-pizarra/40 sm:h-72">
            <div className="absolute inset-0 animate-pulse bg-[linear-gradient(115deg,rgba(76,141,255,.16),transparent_60%)]" />
          </div>

          <div className="mt-10 space-y-6 font-display text-[19px] leading-[1.8] text-plata/80">
            {post.cuerpo.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <aside className="vidrio mt-14 rounded-2xl p-7">
            <h2 className="font-display text-xl text-white">¿Tu caso se parece a esto?</h2>
            <p className="mt-2 text-sm text-plata/60">Cada situación tiene matices. Escríbenos y lo revisamos con nombre y apellido.</p>
            <a href={whatsapp(`Hola, leí el artículo "${post.titulo}" y tengo una consulta.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-full bg-electrico px-6 py-3 text-sm font-medium text-noche transition hover:bg-white">
              Consultar por WhatsApp
            </a>
          </aside>
        </article>
      </main>
      <Footer />
      <BotonWhatsapp />
    </>
  );
}
