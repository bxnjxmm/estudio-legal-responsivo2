'use client';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { areas, cta, whatsapp, whatsappMateria } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';

// Único bloque de conversión del sitio: la persona elige su materia (opcional) y sigue por WhatsApp.
export default function Agendar() {
  const [materia, setMateria] = useState<string | null>(null);

  return (
    <section id="agendar" className="relative overflow-hidden bg-noche py-16 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electrico/10 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="vidrio relative rounded-3xl p-8 text-center sm:p-12">
            <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-electrico/60 to-transparent" />
            <h2 className="font-display h-seccion font-light text-white">Agenda tu asesoría</h2>
            <p className="mx-auto mt-5 max-w-contenido text-plata/60">
              Cuéntanos qué materia necesitas y escríbenos por WhatsApp. Evaluamos tu caso y te explicamos con claridad tus
              posibilidades reales.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Materia de tu caso">
              {areas.map((a) => (
                <button
                  key={a.slug}
                  onClick={() => setMateria(materia === a.slug ? null : a.slug)}
                  aria-pressed={materia === a.slug}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    materia === a.slug ? 'border-electrico bg-electrico/15 text-white' : 'border-plata/15 text-plata/60 hover:border-plata/35 hover:text-white'
                  }`}
                >
                  {a.chip}
                </button>
              ))}
            </div>

            <a
              href={materia ? whatsappMateria(materia) : whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-electrico px-8 py-4 text-sm font-medium text-noche transition hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" />
              {cta.etiqueta}
            </a>
            <p className="mt-5 text-xs text-plata/40">
              Respondemos dentro de 24 horas hábiles. Lo que nos cuentes queda amparado por el secreto profesional.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
