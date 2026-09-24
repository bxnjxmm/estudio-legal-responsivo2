import type { Metadata, Viewport } from 'next';
import { Spectral, Inter } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';

const display = Spectral({ subsets: ['latin'], weight: ['300', '400', '600'], variable: '--font-display', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0C10'
};

export const metadata: Metadata = {
  metadataBase: new URL(site.dominio),
  title: `${site.abogada} | Abogada en Chile — Penal, Civil, Familia, Laboral y Migración`,
  description:
    'Estudio jurídico en Santiago. Defensa penal, familia, laboral, civil, migración y Policía Local. La misma abogada que revisa tu caso es la que va al tribunal.',
  keywords: ['abogada Chile', 'abogado Santiago', 'pensión de alimentos', 'despido injustificado', 'visa Chile', 'defensa penal'],
  openGraph: {
    title: `${site.abogada} | Abogada en Chile`,
    description: 'Asesoría legal directa y estrategia clara desde la primera reunión, en penal, civil, familia, laboral y migración.',
    url: site.dominio,
    siteName: site.estudio,
    locale: 'es_CL',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

// Datos estructurados base (sin calificación: la calificación agregada solo se
// agrega cuando hay reseñas reales de Google conectadas — ver components/sections/Resenas
// y app/page.tsx). Publicar una calificación inventada en el schema puede penalizar el SEO.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: site.abogada,
  image: `${site.dominio}/og.jpg`,
  url: site.dominio,
  telephone: site.telefono,
  email: site.email,
  address: { '@type': 'PostalAddress', streetAddress: site.direccion, addressLocality: 'Santiago', addressCountry: 'CL' },
  areaServed: 'CL'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
