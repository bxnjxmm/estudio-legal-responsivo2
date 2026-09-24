import Link from 'next/link';
import { site } from '@/lib/site';

export default function Marca() {
  return (
    <Link href="/" className="group flex items-baseline gap-3">
      <span className="font-display text-xl tracking-tight text-white">{site.abogada.split(' ')[0]} {site.abogada.split(' ')[1]}</span>
      <span className="hidden h-3 w-px bg-plata/25 sm:block" />
      <span className="hidden text-[11px] uppercase tracking-[0.22em] text-plata/45 sm:block">Abogada</span>
    </Link>
  );
}
