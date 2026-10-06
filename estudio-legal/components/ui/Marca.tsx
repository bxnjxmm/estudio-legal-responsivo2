import Link from 'next/link';
import { site } from '@/lib/site';

export default function Marca() {
  return (
    <Link href="/" className="group flex min-w-0 flex-col leading-none">
      <span className="text-[10px] uppercase tracking-[0.22em] text-plata/45 sm:text-[11px]">Estudio jurídico</span>
      <span className="mt-1.5 font-display text-[19px] tracking-tight text-white sm:text-xl">{site.marca}</span>
    </Link>
  );
}
