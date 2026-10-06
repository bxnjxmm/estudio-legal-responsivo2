'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Marca from '@/components/ui/Marca';
import { cta } from '@/lib/site';

const enlaces = [
  { href: '/#materias', label: 'Materias' },
  { href: '/#quienes-somos', label: 'Quiénes somos' },
  { href: '/blog', label: 'Publicaciones' },
  { href: '/#contacto', label: 'Contacto' }
];

export default function Navbar() {
  const [fijo, setFijo] = useState(false);
  const [abierto, setAbierto] = useState(false);

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
          <Link href={cta.ancla} className="rounded-full bg-electrico px-5 py-2 text-sm font-medium text-noche transition hover:bg-white">
            {cta.etiqueta}
          </Link>
        </div>
        <button onClick={() => setAbierto(!abierto)} className="text-plata lg:hidden" aria-label="Abrir menú">
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
            <div className="flex flex-col gap-4 px-6 py-5">
              {enlaces.map((e) => (
                <Link key={e.href} href={e.href} onClick={() => setAbierto(false)} className="text-plata/80">
                  {e.label}
                </Link>
              ))}
              <Link href={cta.ancla} onClick={() => setAbierto(false)} className="rounded-full bg-electrico px-5 py-2 text-center text-sm font-medium text-noche">
                {cta.etiqueta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
