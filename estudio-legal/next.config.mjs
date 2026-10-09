// Política de seguridad del contenido (CSP). El sitio solo carga sus propios archivos; la única excepción es el mapa
// de Google (iframe). Next.js inserta scripts y estilos en línea, por eso se permite 'unsafe-inline' en ambos.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'"
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // El sitio no usa imágenes de otros dominios: solo las de /public (optimizadas por Next).
  images: {},

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  },

  // La dirección temporal de Vercel redirige al dominio propio (308 permanente, conserva ruta y parámetros).
  // Solo aplica a ese dominio: las vistas previas y el desarrollo local no se tocan.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'estudio-legal-responsivo2.vercel.app' }],
        destination: 'https://www.defensaspavez.com/:path*',
        permanent: true
      }
    ];
  }
};
export default nextConfig;
