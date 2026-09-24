export const site = {
  abogada: 'Baitiare Pavez',
  inicial: 'B.P.',
  rol: 'Abogada',
  estudio: 'Pavez · Estudio Jurídico',
  ciudad: 'Santiago, Chile',
  direccion: 'Av. Meridiano 1450, oficina 704, Providencia',
  telefono: process.env.NEXT_PUBLIC_TELEFONO ?? '+56912345678',
  telefonoVisible: '+56 9 1234 5678',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'contacto@tudominio.cl',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? 'tu_usuario_ig',
  dominio: 'https://tudominio.cl',
  // Datos de Google Business Profile — se completan al conectar reseñas reales.
  googlePlaceId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? '',
  // Usuario de Cal.com para el sistema de citas (ver README, "Sistema de citas").
  calUsername: process.env.NEXT_PUBLIC_CAL_USERNAME ?? ''
};

// Coordenadas de referencia para el mapa — corresponden a Providencia, Santiago
// en general, no a la oficina exacta. Reemplazar por las reales una vez
// confirmada la dirección definitiva (ver README, "Mapa de la oficina").
export const mapa = { lat: -33.4298, lng: -70.6198 };

// Credenciales de referencia para esta maqueta. Reemplazar con los datos reales
// que entregue la clienta (universidad, año de titulación, colegiatura, etc.).
export const credenciales = {
  universidad: 'Universidad Meridiano',
  anioTitulo: '2013',
  posgrado: 'Diplomado en Litigación Oral, Universidad Meridiano',
  colegiatura: 'Colegio de Abogados de Chile A.G.',
  anosEjercicio: '12',
  causasTramitadas: '+400',
  bio: [
    'Ejerzo hace 12 años representando a personas comunes frente a instituciones que no siempre están pensadas para ser entendidas: tribunales, empleadores, aseguradoras, el Estado.',
    'No trabajo con plantillas. Cada causa empieza con una conversación honesta sobre qué es realmente posible, cuánto puede demorar y qué se necesita de ti para lograrlo.'
  ]
};

export const whatsapp = (texto = 'Hola, necesito asesoría legal.') =>
  `https://wa.me/${site.telefono.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(texto)}`;

export const enlaceResenaGoogle = site.googlePlaceId
  ? `https://search.google.com/local/writereview?placeid=${site.googlePlaceId}`
  : undefined;

// calSlug: nombre del tipo de evento en Cal.com para cada materia — se usa para
// armar el enlace de agendamiento site.calUsername + '/' + calSlug.
// Ver README, "Sistema de citas", para cómo crear estos tipos de evento.
export const areas = [
  { slug: 'penal', calSlug: 'consulta-penal', nombre: 'Derecho Penal', resumen: 'Defensa en control de detención, formalización, juicio oral y querellas.', detalle: ['Control de detención y medidas cautelares', 'Querellas por estafa, lesiones y delitos sexuales', 'Salidas alternativas y procedimiento abreviado'], tribunal: 'Juzgados de Garantía y Tribunal Oral en lo Penal' },
  { slug: 'civil', calSlug: 'consulta-civil', nombre: 'Derecho Civil', resumen: 'Contratos, cobros, arriendos, posesión efectiva y responsabilidad civil.', detalle: ['Juicios de arrendamiento y precario', 'Cobro de pagarés y facturas', 'Posesión efectiva y particiones'], tribunal: 'Juzgados Civiles' },
  { slug: 'migracion', calSlug: 'consulta-migracion', nombre: 'Migración', resumen: 'Visas, permanencia definitiva, recursos y regularización ante el SERMIG.', detalle: ['Visa temporal y por vínculo', 'Permanencia definitiva y nacionalización', 'Recursos contra expulsión'], tribunal: 'Servicio Nacional de Migraciones y Cortes de Apelaciones' },
  { slug: 'laboral', calSlug: 'consulta-laboral', nombre: 'Derecho Laboral', resumen: 'Despido injustificado, autodespido, tutela de derechos y cobro de prestaciones.', detalle: ['Demanda por despido injustificado', 'Autodespido y tutela laboral', 'Accidentes del trabajo'], tribunal: 'Juzgados de Letras del Trabajo' },
  { slug: 'familia', calSlug: 'consulta-familia', nombre: 'Derecho de Familia', resumen: 'Pensión de alimentos, cuidado personal, relación directa y regular, y divorcios.', detalle: ['Alimentos, rebaja y cumplimiento', 'Cuidado personal y visitas', 'Divorcio de mutuo acuerdo o unilateral'], tribunal: 'Juzgados de Familia' },
  { slug: 'policia-local', calSlug: 'consulta-policia-local', nombre: 'Juzgado de Policía Local', resumen: 'Infracciones de tránsito, accidentes, Ley del Consumidor y multas municipales.', detalle: ['Accidentes de tránsito e indemnizaciones', 'Reclamos por Ley del Consumidor', 'Infracciones y licencias'], tribunal: 'Juzgados de Policía Local' }
];
