import { areas } from '@/lib/site';

// Cinta decorativa con las materias: la lista va duplicada para que el desplazamiento (-50%) sea continuo.
// Es solo adorno (aria-hidden): las materias están completas en su sección.
export default function CintaMaterias() {
  const items = [...areas, ...areas];
  return (
    <div
      aria-hidden
      className="cinta-pausa relative overflow-hidden border-y border-plata/10 bg-noche/40 py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      <div className="cinta flex w-max items-center whitespace-nowrap">
        {items.map((a, i) => (
          <span key={`${a.slug}-${i}`} className="flex items-center pr-10 font-display text-lg text-plata/50">
            {a.nombre}
            <span className="ml-10 h-1 w-1 rounded-full bg-electrico/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
