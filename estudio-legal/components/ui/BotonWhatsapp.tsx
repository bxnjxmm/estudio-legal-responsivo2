'use client';
import { MessageCircle } from 'lucide-react';
import { cta, whatsapp } from '@/lib/site';

// El botón fijo existe solo donde no hay barra de navegación con el botón de agendar (móvil y tablet).
export default function BotonWhatsapp() {
  return (
    <a
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cta.etiqueta} por WhatsApp`}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-electrico px-5 py-3 text-sm font-medium text-noche shadow-[0_10px_40px_-10px_rgba(76,141,255,.9)] transition hover:bg-white lg:hidden"
    >
      <MessageCircle className="h-4 w-4" />
      {cta.etiqueta}
    </a>
  );
}
