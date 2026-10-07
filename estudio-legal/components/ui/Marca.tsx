import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

// Logo de la clienta (monograma DP, ver public/images/logo-dp.png) a la izquierda de las dos líneas de texto.
// Con el cursor encima, el logo crece, se ilumina y la balanza se mece una vez (ver .logo-balanza en globals.css).
export default function Marca() {
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-3 py-2 leading-none">
      <Image
        src="/images/logo-dp.png"
        alt=""
        width={230}
        height={160}
        priority
        className="logo-balanza h-10 w-auto shrink-0 transition duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_rgba(76,141,255,.75)] sm:h-11"
      />
      <span className="flex min-w-0 flex-col">
        <span className="text-[11px] uppercase tracking-[0.22em] text-plata/45">Estudio jurídico</span>
        <span className="mt-1.5 font-display text-[19px] tracking-tight text-white sm:text-xl">{site.marca}</span>
      </span>
    </Link>
  );
}
