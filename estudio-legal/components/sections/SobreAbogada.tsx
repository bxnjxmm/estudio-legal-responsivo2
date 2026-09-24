import { GraduationCap, ShieldCheck, BadgeCheck } from 'lucide-react';
import { site, credenciales } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';

export default function SobreAbogada() {
  return (
    <section id="sobre-mi" className="bg-marina py-24 lg:py-32 trama">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-plata/12 bg-pizarra/40 lg:mx-0">
            {/* Placeholder de fotografía — ver recomendaciones de fotos en el README */}
            <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(76,141,255,.20),transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-6xl text-plata/15">{site.inicial}</span>
            </div>
            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-electrico/50 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-sm text-plata/50">Quién lleva tu causa</p>
          <h2 className="mt-3 font-display h-seccion font-light text-white">
            {site.abogada}
          </h2>

          <div className="mt-6 space-y-4 max-w-contenido text-plata/65">
            {credenciales.bio.map((p, i) => <p key={i} className="leading-relaxed">{p}</p>)}
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            <li className="flex items-start gap-3 text-sm text-plata/70">
              <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-electrico" />
              {credenciales.universidad}, {credenciales.anioTitulo}
            </li>
            <li className="flex items-start gap-3 text-sm text-plata/70">
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-electrico" />
              {credenciales.posgrado}
            </li>
            <li className="flex items-start gap-3 text-sm text-plata/70">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-electrico" />
              Miembro del {credenciales.colegiatura}
            </li>
            <li className="flex items-start gap-3 text-sm text-plata/70">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-electrico" />
              {credenciales.anosEjercicio} años de ejercicio · {credenciales.causasTramitadas} causas tramitadas
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
