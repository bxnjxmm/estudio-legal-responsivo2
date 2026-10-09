import type { Metadata, Viewport } from 'next';
import { Spectral, Inter } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { jsonLdSeguro } from '@/lib/jsonld';

const display = Spectral({ subsets: ['latin'], weight: ['300', '400', '600'], variable: '--font-display', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0C10'
};

export const metadata: Metadata = {
  metadataBase: new URL(site.dominio),
  // Título (≤ 60 caracteres) y descripción (≤ 160) cortos para que Google no los corte en los resultados.
  title: `${site.marca} | Estudio jurídico en Santiago`,
  description:
    'Estudio jurídico en Santiago: defensa penal, familia, laboral, civil, migración y más. Te explicamos con claridad tus posibilidades reales.',
  keywords: ['estudio jurídico Chile', 'abogados Santiago', 'pensión de alimentos', 'despido injustificado', 'visa Chile', 'defensa penal', 'ley de copropiedad'],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${site.marca} | Estudio jurídico en Chile`,
    description: 'Asesoría legal directa y estrategia clara desde la primera reunión, en penal, civil, familia, laboral, migración, copropiedad e inmobiliario.',
    url: site.dominio,
    siteName: site.marca,
    locale: 'es_CL',
    type: 'website'
  },
  // La imagen para compartir es app/opengraph-image.jpg; los íconos, app/icon.png y app/apple-icon.png.
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true }
};

// Datos estructurados base (sin calificación: la calificación agregada solo se
// agrega cuando hay reseñas reales de Google conectadas — ver components/sections/Resenas
// y app/page.tsx). Publicar una calificación inventada en el schema puede penalizar el SEO.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: site.marca,
  founder: { '@type': 'Person', name: site.fundadora, jobTitle: 'Abogada fundadora' },
  image: `${site.dominio}/opengraph-image.jpg`,
  url: site.dominio,
  telephone: site.telefono,
  email: site.email,
  address: { '@type': 'PostalAddress', streetAddress: site.direccion, addressLocality: 'Santiago', addressCountry: 'CL' },
  areaServed: 'CL',
  sameAs: [site.instagramUrl]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSeguro(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
