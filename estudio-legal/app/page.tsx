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
import BotonAgendar from '@/components/ui/BotonAgendar';
import { obtenerResenas, enlaceEscribirResena } from '@/lib/reviews';
import { faq } from '@/lib/faq';
import { site } from '@/lib/site';

export default async function Home() {
  const resumen = await obtenerResenas();

  // La calificaciÃ³n agregada solo se publica en el schema cuando es real:
  // evita declarar ante buscadores una calificaciÃ³n de referencia como si fuera dato real.
  const jsonLdResenas = resumen.enVivo
    ? {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: site.marca,
        aggregateRating: { '@type': 'AggregateRating', ratingValue: resumen.promedio, reviewCount: resumen.total }
      }
    : null;

  // Mismas preguntas y respuestas que la secciÃ³n visible de preguntas frecuentes.
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.pregunta, acceptedAnswer: { '@type': 'Answer', text: f.respuesta } }))
  };

  // Recorrido: entender el problema (Hero) â†’ quÃ© hacemos (Materias) â†’ por quÃ© confiar (QuiÃ©nes somos, fundadora,
  // mÃ©todo) â†’ cÃ³mo es el proceso y resolver dudas â†’ actuar (Agendar, Ãºnico destino de conversiÃ³n) â†’ contacto.
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
        {/* Las reseÃ±as solo se muestran cuando son reales (Perfil de Negocio de Google conectado). */}
        {resumen.enVivo && <Resenas resumen={resumen} enlaceEscribirResena={enlaceEscribirResena} />}
        <Publicaciones />
        <ComoTrabajamos />
        <Faq />
        <Agendar />
        <Contacto />
      </main>
      <Footer />
      <BotonAgendar />
    </>
  );
}
