import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Materias from '@/components/sections/Materias';
import QuienesSomos from '@/components/sections/QuienesSomos';
import SobreAbogada from '@/components/sections/SobreAbogada';
import Metodo from '@/components/sections/Metodo';
import Manifiesto from '@/components/sections/Manifiesto';
import Resenas from '@/components/sections/Resenas';
import Publicaciones from '@/components/sections/Publicaciones';
import ComoTrabajamos from '@/components/sections/ComoTrabajamos';
import Faq from '@/components/sections/Faq';
import Agendar from '@/components/sections/Agendar';
import Contacto from '@/components/sections/Contacto';
import Footer from '@/components/sections/Footer';
import BotonWhatsapp from '@/components/ui/BotonWhatsapp';
import { obtenerResenas, enlaceEscribirResena } from '@/lib/reviews';
import { faq } from '@/lib/faq';
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

  // Mismas preguntas y respuestas que la sección visible de preguntas frecuentes.
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.pregunta, acceptedAnswer: { '@type': 'Answer', text: f.respuesta } }))
  };

  // Recorrido: entender el problema (Hero) → qué hacemos (Materias) → por qué confiar (Quiénes somos, fundadora,
  // método) → cómo es el proceso y resolver dudas → actuar (Agendar, único destino de conversión) → contacto.
  return (
    <>
      {jsonLdResenas && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdResenas) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <Navbar />
      <main>
        <Hero />
        <Materias />
        <QuienesSomos />
        <SobreAbogada />
        <Metodo />
        <Manifiesto />
        {/* Las reseñas solo se muestran cuando son reales (Perfil de Negocio de Google conectado). */}
        {resumen.enVivo && <Resenas resumen={resumen} enlaceEscribirResena={enlaceEscribirResena} />}
        <Publicaciones />
        <ComoTrabajamos />
        <Faq />
        <Agendar />
        <Contacto />
      </main>
      <Footer />
      <BotonWhatsapp />
    </>
  );
}
