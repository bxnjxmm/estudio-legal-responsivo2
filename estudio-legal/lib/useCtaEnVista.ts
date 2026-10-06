'use client';
import { useEffect, useState } from 'react';

// Los botones principales de agendar y el bloque #agendar se marcan con `data-cta-zona`.
// Mientras alguno esté a la vista, los CTA persistentes (encabezado y botón flotante) se ocultan,
// para que nunca haya dos botones principales visibles a la vez.
// Parte oculto (true) para que al cargar no asome un instante junto al botón de la portada;
// si la página no tiene zonas marcadas, aparece de inmediato con su fade.
export function useCtaEnVista() {
  const [enVista, setEnVista] = useState(true);

  useEffect(() => {
    const zonas = document.querySelectorAll('[data-cta-zona]');
    if (!zonas.length || !('IntersectionObserver' in window)) {
      setEnVista(false);
      return;
    }
    const visibles = new Set<Element>();
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => (e.isIntersecting ? visibles.add(e.target) : visibles.delete(e.target)));
      setEnVista(visibles.size > 0);
    });
    zonas.forEach((z) => observador.observe(z));
    return () => observador.disconnect();
  }, []);

  return enVista;
}
