'use client';
import { useEffect, useRef } from 'react';

// Resplandor que sigue al cursor sobre la sección que lo contiene (debe ser `relative`).
// Escucha en toda la ventana —no solo en la sección— para que también siga al cursor cuando pasa por el
// encabezado fijo (logo y menú), que va por encima de la portada. Solo en pantallas con mouse y sin
// "reducir movimiento"; en touch no se dibuja.
export default function FocoCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const foco = ref.current;
    const seccion = foco?.parentElement;
    if (!foco || !seccion) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cuadro = 0;
    const mover = (e: PointerEvent) => {
      cancelAnimationFrame(cuadro);
      cuadro = requestAnimationFrame(() => {
        const r = seccion.getBoundingClientRect();
        const dentro = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        if (dentro) {
          foco.style.setProperty('--mx', `${e.clientX - r.left}px`);
          foco.style.setProperty('--my', `${e.clientY - r.top}px`);
        }
        foco.style.opacity = dentro ? '1' : '0';
      });
    };
    const salir = () => {
      cancelAnimationFrame(cuadro);
      foco.style.opacity = '0';
    };
    window.addEventListener('pointermove', mover, { passive: true });
    document.documentElement.addEventListener('pointerleave', salir);
    return () => {
      cancelAnimationFrame(cuadro);
      window.removeEventListener('pointermove', mover);
      document.documentElement.removeEventListener('pointerleave', salir);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
      style={{ background: 'radial-gradient(520px circle at var(--mx, 50%) var(--my, 30%), rgba(76,141,255,.16), transparent 62%)' }}
    />
  );
}
