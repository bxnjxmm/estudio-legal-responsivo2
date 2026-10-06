'use client';
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { cta, whatsapp } from '@/lib/site';

// El botón fijo existe solo donde no hay barra de navegación con el botón de agendar (móvil y tablet).
// Se oculta mientras haya a la vista un elemento marcado con `data-oculta-fijo` (otro botón de agendar,
// el bloque de contacto o el pie), para no duplicar el botón ni tapar contenido.
export default function BotonWhatsapp() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const zonas = document.querySelectorAll('[data-oculta-fijo]');
    if (!zonas.length || !('IntersectionObserver' in window)) return;
    const enVista = new Set<Element>();
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => (e.isIntersecting ? enVista.add(e.target) : enVista.delete(e.target)));
      setVisible(enVista.size === 0);
    });
    zonas.forEach((z) => observador.observe(z));
    return () => observador.disconnect();
  }, []);

  return (
    <a
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cta.etiqueta} por WhatsApp`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-electrico px-4 py-3 text-[13px] font-medium text-noche shadow-[0_10px_40px_-10px_rgba(76,141,255,.9)] transition duration-300 hover:bg-white lg:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <MessageCircle className="h-4 w-4" />
      {cta.etiqueta}
    </a>
  );
}
