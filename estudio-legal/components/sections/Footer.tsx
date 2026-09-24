import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-plata/10 bg-marina py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl text-white">{site.estudio}</p>
          <p className="mt-2 max-w-md text-sm text-plata/50">{site.direccion} · {site.ciudad}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-plata/50 sm:items-end">
          <div className="flex gap-6">
            <Link href="/#materias" className="transition hover:text-white">Materias</Link>
            <Link href="/blog" className="transition hover:text-white">Publicaciones</Link>
            <Link href="/#contacto" className="transition hover:text-white">Contacto</Link>
          </div>
          <p className="text-xs text-plata/35">© {new Date().getFullYear()} {site.abogada}. Este sitio informa, no constituye asesoría legal.</p>
        </div>
      </div>
    </footer>
  );
}
