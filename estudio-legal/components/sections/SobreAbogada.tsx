import Image from 'next/image';
import { ArrowRight, GraduationCap, ScrollText, Award, Globe } from 'lucide-react';
import { cta, site, formacion } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';

const iconos = [GraduationCap, ScrollText, Award, Globe];

export default function SobreAbogada() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 bg-marina py-24 lg:py-32 trama">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            {/* Resplandor suave detrás de la foto, en el azul del sitio */}
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-electrico/10 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-pizarra/40 shadow-[0_30px_80px_-30px_rgba(0,0,0,.85)] ring-1 ring-inset ring-plata/15">
              <Image
                src="/images/baitiare-pavez.jpg"
                alt={`${site.fundadora}, abogada fundadora de ${site.marca}`}
                fill
                sizes="(max-width: 384px) 100vw, 384px"
                className="object-cover object-[42%_30%]"
              />
              {/* Viraje azul y degradado inferior para que la foto se funda con el fondo de la sección */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,rgba(76,141,255,.16),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-marina/90 via-marina/40 to-transparent" />
              <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-electrico/50 to-transparent" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display h-seccion font-light text-white">Sobre la fundadora</h2>
          <p className="mt-5 font-display text-2xl text-white">{site.fundadora}</p>
          <p className="mt-1 text-sm text-electrico">Abogada fundadora</p>

          <p className="mt-9 text-xs uppercase tracking-[0.18em] text-plata/45">Formación</p>
          <ul className="mt-3 divide-y divide-plata/10 border-y border-plata/10">
            {formacion.map((f, i) => {
              const Icono = iconos[i];
              return (
                <li key={f.titulo} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-electrico/25 bg-electrico/10">
                    <Icono className="h-4 w-4 text-electrico" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[15px] leading-snug text-white">{f.titulo}</p>
                    <p className="mt-1 text-sm text-plata/55">{f.institucion}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <blockquote className="mt-10 border-l-2 border-electrico/60 pl-5 font-display text-xl font-light leading-relaxed text-white sm:text-2xl">
            “Buscamos explicarte tu causa con un lenguaje sencillo. Agenda una asesoría con nuestro estudio jurídico y te
            ayudamos a resolverlo.”
          </blockquote>
          <a
            href="#agendar"
            data-cta-zona
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-electrico px-7 py-3.5 text-sm font-medium text-noche transition hover:bg-white"
          >
            {cta.etiqueta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
