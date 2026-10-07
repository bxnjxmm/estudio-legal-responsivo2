'use client';
import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';
import { cta } from '@/lib/site';
import { useCtaEnVista } from '@/lib/useCtaEnVista';

// Atajo flotante (móvil y tablet) que lleva al bloque #agendar, el único lugar donde se agenda.
// Se oculta (con fade) mientras haya a la vista otro botón principal: la tarjeta de la portada, el de la
// fundadora, el final de un artículo o el propio bloque #agendar. En escritorio el CTA persistente es el del encabezado.
export default function BotonAgendar() {
  const ctaEnVista = useCtaEnVista();

  return (
    <Link
      href={cta.ancla}
      aria-label={cta.etiqueta}
      aria-hidden={ctaEnVista}
      tabIndex={ctaEnVista ? -1 : 0}
      className={`fixed bottom-4 right-4 z-50 flex h-12 items-center justify-center gap-2 rounded-full bg-electrico text-sm font-medium text-noche shadow-[0_10px_40px_-10px_rgba(76,141,255,.9)] transition duration-300 hover:bg-white max-sm:w-12 sm:px-5 lg:hidden ${
        ctaEnVista ? 'pointer-events-none translate-y-3 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <CalendarCheck className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline">{cta.etiqueta}</span>
    </Link>
  );
}
