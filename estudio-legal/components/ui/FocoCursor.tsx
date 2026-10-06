'use client';
import { useEffect, useRef } from 'react';

// Resplandor que sigue al cursor sobre la sección que lo contiene (debe ser `relative`).
// Solo en pantallas con mouse y sin "reducir movimiento"; en touch no se dibuja.
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
      const r = seccion.getBoundingClientRect();
      cancelAnimationFrame(cuadro);
      cuadro = requestAnimationFrame(() => {
        foco.style.setProperty('--mx', `${e.clientX - r.left}px`);
        foco.style.setProperty('--my', `${e.clientY - r.top}px`);
        foco.style.opacity = '1';
      });
    };
    const salir = () => {
      foco.style.opacity = '0';
    };
    seccion.addEventListener('pointermove', mover);
    seccion.addEventListener('pointerleave', salir);
    return () => {
      cancelAnimationFrame(cuadro);
      seccion.removeEventListener('pointermove', mover);
      seccion.removeEventListener('pointerleave', salir);
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
