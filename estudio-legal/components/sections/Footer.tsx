import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-plata/10 bg-marina py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl text-white">{site.marca}</p>
          <p className="mt-2 max-w-md text-sm text-plata/50">{site.direccion} · {site.ciudad}</p>
          <p className="mt-1 flex flex-wrap gap-x-4 text-sm text-plata/50">
            <a href={`tel:${site.telefono}`} className="inline-block py-3 transition hover:text-white">{site.telefonoVisible}</a>
            <a href={`mailto:${site.email}`} className="inline-block break-all py-3 transition hover:text-white">{site.email}</a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 py-3 transition hover:text-white">
              <Instagram className="h-4 w-4" aria-hidden />
              @{site.instagram}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-plata/50 sm:items-end">
          <div className="flex gap-6">
            <Link href="/#materias" className="py-3 transition hover:text-white">Materias</Link>
            <Link href="/blog" className="py-3 transition hover:text-white">Publicaciones</Link>
            <Link href="/#contacto" className="py-3 transition hover:text-white">Contacto</Link>
          </div>
          <p className="text-xs leading-relaxed text-plata/55">© {new Date().getFullYear()} {site.marca}. Este sitio informa, no constituye asesoría legal.</p>
        </div>
      </div>
    </footer>
  );
}
