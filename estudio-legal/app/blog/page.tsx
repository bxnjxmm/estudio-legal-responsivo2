import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import BotonWhatsapp from '@/components/ui/BotonWhatsapp';
import ListaPublicaciones from '@/components/ui/ListaPublicaciones';

export const metadata: Metadata = {
  title: 'Publicaciones | Derecho chileno explicado en simple',
  alternates: { canonical: '/blog' },
  description: 'Guías sobre plazos, derechos y procedimientos en materias penales, civiles, migratorias, laborales, de familia, Policía Local, copropiedad e inmobiliarias en Chile.'
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="bg-noche pt-[112px] trama">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="max-w-3xl font-display h-pagina font-light text-white">
            Publicaciones
          </h1>
          <p className="mt-5 max-w-contenido text-plata/60">
            Una guía por cada materia que atendemos, con lo que explicamos una y otra vez en reuniones, escrita para que
            puedas leerla antes de contratar a nadie.
          </p>

          <div className="mt-12">
            <ListaPublicaciones />
          </div>
        </section>
      </main>
      <Footer />
      <BotonWhatsapp />
    </>
  );
}
