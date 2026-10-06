'use client';
import { useState } from 'react';
import { Mail, Phone, Instagram, Loader2, Check } from 'lucide-react';
import { areas, site, whatsapp } from '@/lib/site';
import Reveal from '@/components/ui/Reveal';
import Ubicacion from '@/components/sections/Ubicacion';

type Estado = 'listo' | 'enviando' | 'ok' | 'error';

export default function Contacto() {
  const [estado, setEstado] = useState<Estado>('listo');
  const [mensajeError, setMensajeError] = useState('');

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado('enviando');
    const datos = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      });
      if (!r.ok) throw new Error((await r.json()).error ?? 'No se pudo enviar');
      setEstado('ok');
    } catch (err) {
      setMensajeError(err instanceof Error ? err.message : 'No se pudo enviar');
      setEstado('error');
    }
  };

  const campo = 'w-full rounded-xl border border-plata/12 bg-noche/60 px-4 py-3 text-sm text-white placeholder:text-plata/35 transition focus:border-electrico focus:outline-none';

  return (
    <section id="contacto" className="bg-noche py-24 lg:py-32 trama">
      <div className="mx-auto max-w-6xl px-6">
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <h2 className="font-display h-seccion font-light text-white">Cuéntanos qué pasó</h2>
          <p className="mt-5 text-plata/60">
            Escríbenos por el canal que te acomode. Respondemos dentro de 24 horas hábiles y te decimos con franqueza si tu caso
            tiene o no tiene camino.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            <li>
              <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-plata/75 transition hover:text-white">
                <Phone className="h-4 w-4 text-electrico" />
                <span>{site.telefonoVisible}<span className="ml-2 text-xs text-plata/40 group-hover:text-electrico">WhatsApp</span></span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 text-plata/75 transition hover:text-white">
                <Mail className="h-4 w-4 text-electrico" />{site.email}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-plata/75 transition hover:text-white">
                <Instagram className="h-4 w-4 text-electrico" />@{site.instagram}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="vidrio rounded-2xl p-7 sm:p-9">
            {estado === 'ok' ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="rounded-full border border-electrico/40 bg-electrico/10 p-4"><Check className="h-6 w-6 text-electrico" /></div>
                <h3 className="mt-6 font-display text-2xl text-white">Recibimos tu mensaje</h3>
                <p className="mt-3 max-w-sm text-sm text-plata/60">Te respondemos dentro de 24 horas hábiles. Si es urgente, escríbenos directo por WhatsApp.</p>
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="mt-7 rounded-full bg-electrico px-6 py-3 text-sm font-medium text-noche transition hover:bg-white">Abrir WhatsApp</a>
              </div>
            ) : (
              <form onSubmit={enviar} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="nombre" required placeholder="Nombre y apellido" className={campo} />
                  <input name="telefono" required placeholder="Teléfono" inputMode="tel" className={campo} />
                </div>
                <input name="email" type="email" required placeholder="Correo electrónico" className={campo} />
                <select name="materia" required defaultValue="" className={campo}>
                  <option value="" disabled>Materia de tu caso</option>
                  {areas.map((a) => <option key={a.slug} value={a.nombre} className="bg-noche">{a.nombre}</option>)}
                  <option value="Otra" className="bg-noche">Otra / no estoy seguro</option>
                </select>
                <textarea name="mensaje" required rows={5} placeholder="Cuéntanos brevemente qué ocurrió y desde cuándo" className={`${campo} resize-none`} />
                <label className="flex items-start gap-3 text-xs text-plata/50">
                  <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#4C8DFF]" />
                  Autorizo el uso de mis datos para responder esta consulta.
                </label>
                <button type="submit" disabled={estado === 'enviando'} className="flex w-full items-center justify-center gap-2 rounded-xl bg-electrico py-3.5 text-sm font-medium text-noche transition hover:bg-white disabled:opacity-60">
                  {estado === 'enviando' ? <><Loader2 className="h-4 w-4 animate-spin" />Enviando</> : 'Enviar consulta'}
                </button>
                {estado === 'error' && <p className="text-sm text-red-300">{mensajeError}. Intenta de nuevo o escríbenos por WhatsApp.</p>}
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <Ubicacion />
      </div>
    </section>
  );
}
