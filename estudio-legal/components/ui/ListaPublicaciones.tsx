'use client';
import { useState } from 'react';
import { areas } from '@/lib/site';
import { posts, filtrosPublicaciones } from '@/lib/posts';
import TarjetaPost from '@/components/ui/TarjetaPost';

// Además de la destacada, cuántas tarjetas se ven al inicio en celular.
const PRIMERAS_EN_CELULAR = 3;

const filtros = [{ id: 'todas', categoria: 'Todas' }, ...filtrosPublicaciones(areas)];

// Reparte las tarjetas en filas de 3 (grilla de 6 columnas); si sobran 2 o 1, ocupan la fila completa.
const columnas = (i: number, n: number) => {
  const sobran = n % 3;
  if (sobran === 2 && i >= n - 2) return 'lg:col-span-3';
  if (sobran === 1 && i === n - 1) return 'lg:col-span-6';
  return 'lg:col-span-2';
};

export default function ListaPublicaciones() {
  const [filtro, setFiltro] = useState('todas');
  // Solo en celular (<640 px): se muestran las primeras publicaciones y el resto queda tras "Ver más".
  const [verMas, setVerMas] = useState(false);
  const visibles = filtro === 'todas' ? posts : posts.filter((p) => (p.materia ?? 'general') === filtro);
  const principal = visibles.find((p) => p.destacado) ?? visibles[0];
  const resto = visibles.filter((p) => p !== principal);
  const categoriaFiltro = filtros.find((f) => f.id === filtro)?.categoria;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar publicaciones por materia">
        {filtros.map((f) => (
          <button
            key={f.id}
            onClick={() => setFiltro(f.id)}
            aria-pressed={filtro === f.id}
            className={`rounded-full border px-4 py-2.5 text-sm transition ${
              filtro === f.id ? 'border-electrico bg-electrico/15 text-white' : 'border-plata/15 text-plata/60 hover:border-plata/35 hover:text-white'
            }`}
          >
            {f.categoria}
          </button>
        ))}
      </div>

      {principal && (
        <div className="mt-8" key={`principal-${filtro}`}>
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
              className={`${columnas(i, resto.length)} ${!verMas && i >= PRIMERAS_EN_CELULAR ? 'max-sm:hidden' : ''}`}
            />
          ))}
        </div>
      )}

      {!verMas && resto.length > PRIMERAS_EN_CELULAR && (
        <button
          type="button"
          onClick={() => setVerMas(true)}
          className="mt-6 w-full rounded-full border border-plata/20 px-6 py-3.5 text-sm text-white transition hover:border-electrico/60 hover:bg-electrico/10 sm:hidden"
        >
          Ver más publicaciones
        </button>
      )}
    </div>
  );
}
