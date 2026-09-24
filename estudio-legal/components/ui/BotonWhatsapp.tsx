'use client';
import { MessageCircle } from 'lucide-react';
import { whatsapp } from '@/lib/site';

export default function BotonWhatsapp() {
  return (
    <a
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-electrico px-4 py-3 text-sm font-medium text-noche shadow-[0_10px_40px_-10px_rgba(76,141,255,.9)] transition hover:bg-white"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Escríbeme</span>
    </a>
  );
}
