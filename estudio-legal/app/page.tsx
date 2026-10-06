import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Materias from '@/components/sections/Materias';
import QuienesSomos from '@/components/sections/QuienesSomos';
import SobreAbogada from '@/components/sections/SobreAbogada';
import Agendar from '@/components/sections/Agendar';
import Resenas from '@/components/sections/Resenas';
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

  // Recorrido de la página: entender el problema (Hero) → qué hacemos (Materias) → por qué confiar
  // (Quiénes somos y fundadora) → actuar (Agendar, único llamado a la acción) → seguir informándose.
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
        <Agendar />
        {/* Las reseñas solo se muestran cuando son reales (Perfil de Negocio de Google conectado). */}
        {resumen.enVivo && <Resenas resumen={resumen} enlaceEscribirResena={enlaceEscribirResena} />}
        <Publicaciones />
        <Contacto />
      </main>
      <Footer />
      <BotonWhatsapp />
    </>
  );
}
