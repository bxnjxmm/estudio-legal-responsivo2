'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Marca from '@/components/ui/Marca';
import { cta } from '@/lib/site';
import { useCtaEnVista } from '@/lib/useCtaEnVista';

const enlaces = [
  { href: '/#materias', label: 'Materias' },
  { href: '/#quienes-somos', label: 'Quiénes somos' },
  { href: '/blog', label: 'Publicaciones' },
  { href: '/#contacto', label: 'Contacto' }
];

export default function Navbar() {
  const [fijo, setFijo] = useState(false);
  const [abierto, setAbierto] = useState(false);
  // Mientras haya otro botón principal de agendar a la vista, el del encabezado se oculta.
  const ctaEnVista = useCtaEnVista();
  // Barra fina de progreso de lectura en el borde inferior del encabezado.
  const { scrollYProgress } = useScroll();
  const progreso = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setFijo(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${fijo ? 'border-b border-plata/10 bg-noche/80 backdrop-blur-xl' : ''}`}>
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Marca />
        <div className="hidden items-center gap-7 lg:flex">
          {enlaces.map((e) => (
            <Link key={e.href} href={e.href} className="text-sm text-plata/70 transition hover:text-white">
              {e.label}
            </Link>
          ))}
          <Link
            href={cta.ancla}
            aria-hidden={ctaEnVista}
            tabIndex={ctaEnVista ? -1 : 0}
            className={`rounded-full bg-electrico px-5 py-2 text-sm font-medium text-noche transition duration-300 hover:bg-white ${
              ctaEnVista ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            {cta.etiqueta}
          </Link>
        </div>
        <button
          onClick={() => setAbierto(!abierto)}
          className="-mr-2.5 p-2.5 text-plata lg:hidden"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
        >
          {abierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-plata/10 bg-noche/95 lg:hidden"
          >
            <div className="flex flex-col px-6 py-3">
              {enlaces.map((e) => (
                <Link key={e.href} href={e.href} onClick={() => setAbierto(false)} className="py-3 text-plata/80">
                  {e.label}
                </Link>
              ))}
              <Link
                href={cta.ancla}
                onClick={() => setAbierto(false)}
                className="mb-2 mt-2 rounded-full bg-electrico px-5 py-3 text-center text-sm font-medium text-noche"
              >
                {cta.etiqueta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        aria-hidden
        style={{ scaleX: progreso }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-electrico via-[#9CC0FF] to-electrico"
      />
    </header>
  );
}
