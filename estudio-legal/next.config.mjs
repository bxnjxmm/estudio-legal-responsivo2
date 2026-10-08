/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' }
    ]
  },
  // La dirección temporal de Vercel redirige al dominio propio (301/308 permanente, conserva ruta y parámetros).
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
