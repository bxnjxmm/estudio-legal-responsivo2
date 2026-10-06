export type Post = { slug: string; titulo: string; bajada: string; categoria: string; fecha: string; lectura: string; cuerpo: string[] };

export const posts: Post[] = [
  {
    slug: 'como-elegir-abogado-para-tu-caso',
    titulo: 'Cómo elegir al abogado correcto para tu caso: 5 preguntas antes de contratar',
    bajada: 'No todos los estudios trabajan igual. Estas son las preguntas que separan a un abogado comprometido de uno que solo toma el caso.',
    categoria: 'Cómo trabajamos', fecha: '12 de agosto de 2026', lectura: '6 min',
    cuerpo: [
      '¿Quién va a llevar realmente mi causa? En estudios grandes, quien firma el mandato casi nunca es quien asiste a la audiencia. Pregunta desde el inicio si tendrás una sola persona de contacto durante todo el proceso o si te irán derivando entre distintos abogados.',
      '¿Cómo me vas a mantener informado? Un buen abogado no espera a que preguntes para contarte cómo va tu causa. Pide que te digan, por escrito, cada cuánto vas a recibir novedades.',
      '¿Qué pasa si el caso se complica? Pregunta cómo se maneja un imprevisto: una audiencia que se reagenda, una prueba que hay que reunir con urgencia, una contraparte que no coopera. La respuesta te dice si tienes a alguien con experiencia real en litigio o solo en papeleo.',
      '¿Puedo hablar con la persona que va a tribunal, no solo con quien vende el servicio? Si la primera reunión es con una persona y el juicio lo lleva otra que nunca conociste, ya perdiste continuidad en tu propio caso.',
      'Al final, la pregunta que más importa es simple: después de esta conversación, ¿entiendes mejor tu situación que antes de entrar? Si la respuesta es no, esa ya es información valiosa.'
    ]
  },
  {
    slug: 'despido-injustificado-plazos',
    titulo: 'Te despidieron: los plazos que no puedes dejar pasar',
    bajada: 'Sesenta días hábiles para demandar. Qué hacer durante la primera semana y qué documentos guardar.',
    categoria: 'Laboral', fecha: '3 de julio de 2026', lectura: '5 min',
    cuerpo: [
      'El artículo 168 del Código del Trabajo da 60 días hábiles desde la separación para demandar por despido injustificado. Ese plazo se suspende si reclamas ante la Inspección del Trabajo, pero nunca se extiende más allá de 90 días hábiles.',
      'La primera semana importa más que el resto del juicio. Guarda la carta de despido, el finiquito sin firmar, las liquidaciones de los últimos seis meses y cualquier mensaje donde se te den instrucciones de trabajo.',
      'Firmar el finiquito ante ministro de fe no siempre cierra la puerta: si dejas constancia de reserva de derechos, puedes demandar igual por las prestaciones mal calculadas.'
    ]
  },
  {
    slug: 'pension-de-alimentos-registro-deudores',
    titulo: 'Pensión de alimentos: cómo opera hoy el Registro de Deudores',
    bajada: 'Retención de la devolución de impuestos, bloqueo de licencia y pasaporte. Qué se puede exigir y cómo se pide.',
    categoria: 'Familia', fecha: '21 de mayo de 2026', lectura: '7 min',
    cuerpo: [
      'La Ley 21.389 creó el Registro Nacional de Deudores de Pensiones de Alimentos. Bastan tres cuotas consecutivas o cinco discontinuas impagas para que el tribunal ordene la inscripción.',
      'Estar inscrito tiene consecuencias concretas: retención de la devolución de impuestos, bloqueo de la renovación de licencia de conducir y del pasaporte, y limitaciones para acceder a créditos y a ciertos cargos públicos.',
      'El procedimiento se pide ante el mismo Juzgado de Familia que fijó los alimentos y no requiere iniciar una causa nueva. Lo que sí requiere es tener la liquidación de la deuda al día.'
    ]
  }
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
