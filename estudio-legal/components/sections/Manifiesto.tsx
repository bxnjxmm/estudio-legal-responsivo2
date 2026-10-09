import Reveal from '@/components/ui/Reveal';

export default function Manifiesto() {
  return (
    <section className="relative overflow-hidden bg-noche py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-plata/15 to-transparent" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-display h-declaracion font-light text-plata/85">
            Un estudio grande te asigna a un abogado junior y te cobra como si fuera el socio.
            <span className="text-white"> Aquí, evaluamos tu caso en detalle y te explicamos con claridad tus posibilidades reales.</span>
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 text-plata/50">Sin falsas expectativas. Sin tecnicismos innecesarios. Con lenguaje sencillo.</p>
        </Reveal>
      </div>
    </section>
  );
}
