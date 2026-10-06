export const site = {
  marca: 'Defensas Pavez Abogados',
  fundadora: 'Baitiare Scarleth Pavez',
  rol: 'Estudio jurídico',
  ciudad: 'Santiago, Chile',
  direccion: 'Paseo Ahumada 370, oficina 633, piso 6, Santiago Centro',
  telefono: '+56939501924',
  telefonoVisible: '+56 9 3950 1924',
  email: 'defensaspavezabogados@gmail.com',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? 'tu_usuario_ig',
  dominio: 'https://tudominio.cl',
  // Datos de Google Business Profile — se completan al conectar reseñas reales.
  googlePlaceId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? '',
  // Usuario de Cal.com para el sistema de citas (ver README, "Sistema de citas").
  calUsername: process.env.NEXT_PUBLIC_CAL_USERNAME ?? ''
};

// Mapa de la oficina: embed oscuro por dirección (sin API key) y enlace de ruta.
export const mapa = {
  embed: 'https://www.google.com/maps?q=Paseo+Ahumada+370,+Santiago,+Chile&output=embed',
  ruta: 'https://www.google.com/maps/dir/?api=1&destination=Paseo+Ahumada+370+Santiago+Chile'
};

export const formacion = [
  { titulo: 'Abogada', institucion: 'Universidad Central de Chile, con distinción máxima' },
  { titulo: 'Diplomado en Derecho Penal, Derecho Procesal Penal e Intervención Criminal', institucion: 'Universidad de los Andes' },
  { titulo: 'Máster en Derecho Penal y Garantías Constitucionales', institucion: 'Universidad de Jaén (España)' },
  { titulo: 'Curso Iberoamericano de Derecho Penal y Derecho Constitucional', institucion: 'Universidad de Jaén y Universidad de Cádiz (España)' }
];

// Todos los textos de WhatsApp viven acá: el mensaje genérico, la plantilla y una frase por materia (clave = slug).
export const mensajesWhatsapp = {
  generico: `Hola, vengo del sitio web de ${site.marca} y quiero hacer una consulta.`,
  plantilla: (frase: string) => `Hola, vengo del sitio web de ${site.marca}. ${frase} ¿Podemos agendar una asesoría?`,
  materias: {
    penal: 'Necesito asesoría en una causa penal (denuncia, formalización o defensa).',
    civil: 'Tengo un tema civil (contratos, cobros, indemnizaciones o herencias).',
    migracion: 'Necesito ayuda con un trámite migratorio (visa, permanencia definitiva o regularización).',
    laboral: 'Tengo un problema laboral (despido, autodespido o cobro de prestaciones).',
    familia: 'Necesito asesoría en derecho de familia (pensión de alimentos, cuidado personal, relación directa o divorcio).',
    'policia-local': 'Tengo una causa en el Juzgado de Policía Local (tránsito, accidente, Ley del Consumidor o multa).',
    copropiedad: 'Tengo un problema de copropiedad (gastos comunes, administración o conflicto con la comunidad).',
    inmobiliaria: 'Necesito asesoría inmobiliaria (compraventa, promesa, arriendo o revisión de títulos).'
  } as Record<string, string>
};

export const whatsapp = (texto: string = mensajesWhatsapp.generico) =>
  `https://wa.me/${site.telefono.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(texto)}`;

export const whatsappMateria = (slug: string) => whatsapp(mensajesWhatsapp.plantilla(mensajesWhatsapp.materias[slug]));

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
  { slug: 'policia-local', calSlug: 'consulta-policia-local', nombre: 'Juzgado de Policía Local', resumen: 'Infracciones de tránsito, accidentes, Ley del Consumidor y multas municipales.', detalle: ['Accidentes de tránsito e indemnizaciones', 'Reclamos por Ley del Consumidor', 'Infracciones y licencias'], tribunal: 'Juzgados de Policía Local' },
  { slug: 'copropiedad', calSlug: 'consulta-copropiedad', nombre: 'Ley de Copropiedad', chip: 'Copropiedad', resumen: 'Gastos comunes, administración, reglamentos de copropiedad y conflictos entre vecinos y comunidad.', detalle: ['Cobro y reclamo de gastos comunes', 'Conflictos con la administración o el comité', 'Infracciones al reglamento de copropiedad'], tribunal: 'Juzgados de Policía Local y tribunales civiles' },
  { slug: 'inmobiliaria', calSlug: 'consulta-inmobiliaria', nombre: 'Asesoría Inmobiliaria', chip: 'Inmobiliaria', resumen: 'Compraventas, promesas, arriendos, estudio de títulos y trámites ante el Conservador.', detalle: ['Compraventas y promesas de compraventa', 'Contratos de arriendo y su término', 'Estudio de títulos e inscripciones'], tribunal: 'Notarías y Conservador de Bienes Raíces' }
];
