'use client';
import { useState } from 'react';
import { areas } from '@/lib/site';
import { posts, filtrosPublicaciones } from '@/lib/posts';
import TarjetaPost from '@/components/ui/TarjetaPost';

const filtros = [{ id: 'todas', categoria: 'Todas' }, ...filtrosPublicaciones(areas)];

// Reparte las tarjetas en filas de 3 (grilla de 6 columnas); si sobran 2 o 1, ocupan la fila completa.
const columnas = (i: number, n: number) => {
  const sobran = n % 3;
  if (sobran === 2 && i >= n - 2) return 'lg:col-span-3';
  if (sobran === 1 && i === n - 1) return 'lg:col-span-6';
  return 'lg:col-span-2';
};

// limite: muestra solo las primeras N publicaciones y oculta los filtros (versión resumida de la portada).
export default function ListaPublicaciones({ limite }: { limite?: number }) {
  const [filtro, setFiltro] = useState('todas');
  const base = limite ? posts.slice(0, limite) : posts;
  const visibles = filtro === 'todas' ? base : base.filter((p) => (p.materia ?? 'general') === filtro);
  const principal = visibles.find((p) => p.destacado) ?? visibles[0];
  const resto = visibles.filter((p) => p !== principal);
  const categoriaFiltro = filtros.find((f) => f.id === filtro)?.categoria;

  return (
    <div>
      {!limite && (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar publicaciones por materia">
          {filtros.map((f) => (
            <button
              key={f.id}
              onClick={() => setFiltro(f.id)}
              aria-pressed={filtro === f.id}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filtro === f.id ? 'border-electrico bg-electrico/15 text-white' : 'border-plata/15 text-plata/60 hover:border-plata/35 hover:text-white'
              }`}
            >
              {f.categoria}
            </button>
          ))}
        </div>
      )}

      {principal && (
        <div className={limite ? '' : 'mt-8'} key={`principal-${filtro}`}>
          <TarjetaPost post={principal} destacada etiqueta={filtro === 'todas' ? 'Publicación destacada' : categoriaFiltro} />
        </div>
      )}

      {resto.length > 0 && (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-6" key={`resto-${filtro}`}>
          {resto.map((p, i) => (
            <TarjetaPost
              key={p.slug}
              post={p}
              delay={i * 0.05}
              // En la portada y en celular solo se muestra la destacada y una más: el resto está en /blog.
              className={`${columnas(i, resto.length)}${limite && i >= 1 ? ' hidden sm:block' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
