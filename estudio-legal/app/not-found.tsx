import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function NoEncontrada() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center bg-noche pt-[112px] trama">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-sm text-electrico">Error 404</p>
          <h1 className="mt-3 font-display h-pagina font-light text-white">No encontramos esta página</h1>
          <p className="mx-auto mt-5 max-w-contenido text-plata/60">
            Puede que el enlace esté desactualizado o que la página ya no exista. Vuelve al inicio o revisa nuestras publicaciones.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/"
              className="rounded-full border border-electrico/40 bg-electrico/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-electrico hover:text-noche"
            >
              Volver al inicio
            </Link>
            <Link href="/blog" className="inline-block py-3 text-sm text-plata/70 underline-offset-4 transition hover:text-white hover:underline">
              Ver publicaciones
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
