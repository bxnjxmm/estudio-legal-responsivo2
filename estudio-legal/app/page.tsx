import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Materias from '@/components/sections/Materias';
import QuienesSomos from '@/components/sections/QuienesSomos';
import SobreAbogada from '@/components/sections/SobreAbogada';
import Metodo from '@/components/sections/Metodo';
import Manifiesto from '@/components/sections/Manifiesto';
import Resenas from '@/components/sections/Resenas';
import Citas from '@/components/sections/Citas';
import Publicaciones from '@/components/sections/Publicaciones';
import Contacto from '@/components/sections/Contacto';
import Footer from '@/components/sections/Footer';
import BotonWhatsapp from '@/components/ui/BotonWhatsapp';
import { obtenerResenas, enlaceEscribirResena } from '@/lib/reviews';
import { site } from '@/lib/site';

export default async function Home() {
  const resumen = await obtenerResenas();

  // La calificación agregada solo se publica en el schema cuando es real:
  // evita declarar ante buscadores una calificación de referencia como si fuera dato real.
  const jsonLdResenas = resumen.enVivo
    ? {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: site.marca,
        aggregateRating: { '@type': 'AggregateRating', ratingValue: resumen.promedio, reviewCount: resumen.total }
      }
    : null;

  return (
    <>
      {jsonLdResenas && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdResenas) }} />
      )}
      <Navbar />
      <main>
        <Hero />
        <Materias />
        <QuienesSomos />
        <SobreAbogada />
        <Metodo />
        <Manifiesto />
        <Resenas resumen={resumen} enlaceEscribirResena={enlaceEscribirResena} />
        <Citas />
        <Publicaciones />
        <Contacto />
      </main>
      <Footer />
      <BotonWhatsapp />
    </>
  );
}
