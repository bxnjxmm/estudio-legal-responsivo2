import Reveal from '@/components/ui/Reveal';
import Ubicacion from '@/components/sections/Ubicacion';

export default function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-noche py-24 trama lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display h-seccion font-light text-white">Contacto y ubicación</h2>
          <p className="mt-5 max-w-contenido text-plata/60">
            Atendemos en el centro de Santiago, con hora agendada. También puedes escribirnos por WhatsApp o por correo.
          </p>
        </Reveal>
        <Ubicacion />
      </div>
    </section>
  );
}
