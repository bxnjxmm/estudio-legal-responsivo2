'use client';
import { cta, whatsapp } from '@/lib/site';
import { useCtaEnVista } from '@/lib/useCtaEnVista';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';

// Atajo para quien ya está decidido: abre WhatsApp directo con el mensaje genérico.
// Se oculta (con fade) mientras haya a la vista el botón principal de la portada, el de la fundadora
// o el bloque #agendar, para no duplicar el CTA. En escritorio el CTA persistente es el del encabezado.
export default function BotonWhatsapp() {
  const ctaEnVista = useCtaEnVista();

  return (
    <a
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cta.etiqueta} por WhatsApp`}
      aria-hidden={ctaEnVista}
      tabIndex={ctaEnVista ? -1 : 0}
      className={`fixed bottom-4 right-4 z-50 flex h-12 items-center justify-center gap-2 rounded-full bg-electrico text-sm font-medium text-noche shadow-[0_10px_40px_-10px_rgba(76,141,255,.9)] transition duration-300 hover:bg-white max-sm:w-12 sm:px-5 lg:hidden ${
        ctaEnVista ? 'pointer-events-none translate-y-3 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <IconoWhatsapp className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline">{cta.etiqueta}</span>
    </a>
  );
}
