export type Bloque = string | { subtitulo: string };

export type Post = {
  slug: string;
  titulo: string;
  bajada: string;
  categoria: string;
  // slug de la materia en `areas` (lib/site.ts). Sin materia = tema general del estudio.
  materia?: string;
  fecha: string;
  fechaISO: string;
  destacado?: boolean;
  claves: string[];
  cuerpo: Bloque[];
};

// Una publicación por materia, de la más reciente a la más antigua.
// Los artículos son informativos: conviene que la abogada los revise antes de publicar cambios.
export const posts: Post[] = [
  {
    slug: 'control-de-detencion-formalizacion-primeras-24-horas',
    titulo: 'Control de detención y formalización: qué ocurre en las primeras 24 horas',
    bajada: 'Si tú o alguien de tu familia fue detenido, estos son los derechos que se pueden ejercer desde el primer minuto y las decisiones que se toman en la primera audiencia.',
    categoria: 'Penal', materia: 'penal', fecha: '5 de octubre de 2026', fechaISO: '2026-10-05', destacado: true,
    claves: [
      'Quien es detenido debe ser puesto a disposición de un juez de garantía dentro de 24 horas.',
      'Tienes derecho a guardar silencio y a ser asistido por un abogado desde los primeros actos de la investigación.',
      'Formalizar no es condenar: es comunicar formalmente que existe una investigación.',
      'En la primera audiencia también se decide si corresponde alguna medida cautelar.'
    ],
    cuerpo: [
      { subtitulo: 'Primero: qué es el control de detención' },
      'Cuando una persona es detenida, ya sea porque la sorprendieron en un presunto delito (flagrancia) o por una orden judicial, la ley exige que sea puesta a disposición de un juez de garantía en un plazo máximo de 24 horas. En esa audiencia, llamada control de detención, el juez revisa si la detención fue legal y si se respetaron los derechos de la persona.',
      'Antes de llegar ahí, la policía debe informarle con claridad el motivo de su detención y sus derechos. Es un momento delicado: conviene no declarar sin haber conversado antes con un abogado.',
      { subtitulo: 'Tus derechos desde el primer momento' },
      'El Código Procesal Penal reconoce al imputado, entre otros, el derecho a guardar silencio, a no declarar bajo juramento, a ser asistido por un abogado desde los primeros actos de la investigación y a que se le informe con claridad de qué se le acusa. Guardar silencio es un derecho, no un indicio de culpabilidad.',
      { subtitulo: 'Qué viene después: la formalización' },
      'Si el fiscal decide continuar, puede pedir la formalización de la investigación: una audiencia en la que comunica al imputado, ante el juez, que se desarrolla una investigación en su contra por uno o más delitos. Formalizar no significa que la persona sea culpable; significa que el proceso entra en una etapa en que se fijan plazos y se discuten medidas.',
      'En esa misma instancia el fiscal puede solicitar medidas cautelares, desde obligaciones menores, como firmar periódicamente o no salir del país, hasta la prisión preventiva. Esta última debe ser la excepción: solo procede cuando las otras medidas no bastan para asegurar los fines del procedimiento.',
      { subtitulo: 'Por qué importa tener defensa desde el inicio' },
      'Muchas decisiones que pesan en todo el proceso se toman en esas primeras horas: si la detención fue legal, qué medida cautelar se impone, qué se declara y qué no. Una defensa informada puede cuestionar la legalidad de la detención, discutir si realmente es necesaria una medida cautelar y cuidar que el proceso respete las garantías constitucionales desde el comienzo.',
      'Nuestra fundadora se formó en derecho penal, derecho procesal penal y garantías constitucionales en Chile y en España, y ese enfoque guía la forma en que preparamos cada defensa.'
    ]
  },
  {
    slug: 'posesion-efectiva-que-hacer-cuando-fallece-un-familiar',
    titulo: 'Posesión efectiva: qué hacer cuando fallece un familiar y hay bienes',
    bajada: 'Qué es, dónde se tramita y por qué es indispensable si la herencia incluye una propiedad.',
    categoria: 'Civil', materia: 'civil', fecha: '5 de octubre de 2026', fechaISO: '2026-10-05',
    claves: [
      'La posesión efectiva es el trámite que reconoce oficialmente quiénes son los herederos.',
      'Sin testamento se tramita ante el Registro Civil; con testamento, normalmente ante un tribunal civil.',
      'Sin ella no se pueden vender ni hipotecar los inmuebles de la herencia.',
      'Después vienen las inscripciones en el Conservador de Bienes Raíces y, según el caso, el impuesto a las herencias.'
    ],
    cuerpo: [
      { subtitulo: 'Qué es la posesión efectiva' },
      'Cuando alguien fallece, sus herederos adquieren la herencia por el solo hecho de la muerte, pero esa calidad todavía debe acreditarse. La posesión efectiva es el trámite que lo hace: reconoce oficialmente a los herederos y permite ordenar los bienes del fallecido.',
      { subtitulo: 'Dónde se tramita' },
      'Si la persona falleció sin dejar testamento (sucesión intestada), el trámite se realiza ante el Servicio de Registro Civil e Identificación y puede iniciarse en línea. Si dejó testamento, normalmente la posesión efectiva se solicita ante el tribunal civil del último domicilio del fallecido.',
      { subtitulo: 'Por qué no conviene dejarla para después' },
      'Mientras no se tramite, los herederos no pueden vender, hipotecar ni transferir los inmuebles de la herencia: el Código Civil exige primero inscribir en el Conservador de Bienes Raíces la resolución de posesión efectiva y hacer las inscripciones especiales de herencia. Postergarlo complica trámites con bancos, ventas y particiones, y la situación se enreda más a medida que pasan los años.',
      { subtitulo: 'Qué viene después' },
      'Con la posesión efectiva se pueden inscribir los inmuebles a nombre de los herederos y realizar los trámites con bancos y otras instituciones. Según el valor de lo heredado y el parentesco, también puede corresponder declarar y pagar el impuesto a las herencias ante el Servicio de Impuestos Internos. Si hay varios herederos, es frecuente que además se necesite una partición para repartir los bienes, ya sea de común acuerdo o por la vía judicial.',
      'Cada herencia es distinta: hay deudas, bienes en el extranjero, testamentos discutidos o herederos que no se ponen de acuerdo. Revisar el caso desde el inicio evita errores que después cuestan tiempo y dinero.'
    ]
  },
  {
    slug: 'situacion-migratoria-papeles-al-dia-y-que-hacer-si-te-rechazan',
    titulo: 'Situación migratoria en Chile: cómo mantener tus papeles al día y qué hacer si te rechazan',
    bajada: 'Vencimientos, solicitudes ante el Servicio Nacional de Migraciones y los recursos disponibles cuando una resolución te perjudica.',
    categoria: 'Migración', materia: 'migracion', fecha: '5 de octubre de 2026', fechaISO: '2026-10-05',
    claves: [
      'La migración se rige por la Ley 21.325 y los trámites los gestiona el Servicio Nacional de Migraciones (SERMIG).',
      'Conviene pedir prórrogas o cambios de categoría con anticipación, antes de que venza tu documento.',
      'Una resolución desfavorable, como un rechazo o una expulsión, se puede reclamar, pero los plazos son breves.',
      'Reunir bien los antecedentes desde el inicio es la mejor forma de evitar rechazos.'
    ],
    cuerpo: [
      { subtitulo: 'Quién ve tu situación y con qué ley' },
      'La Ley 21.325 de Migración y Extranjería regula el ingreso, la residencia y la salida de personas extranjeras en Chile. El organismo que tramita las solicitudes es el Servicio Nacional de Migraciones (SERMIG), y la mayoría de los trámites se realiza en línea.',
      { subtitulo: 'Cuida los vencimientos' },
      'El error más común es dejar que el documento venza antes de pedir su renovación o un cambio de categoría. Permanecer en el país con un permiso vencido o en situación irregular puede traer multas y complicar futuras solicitudes. Por eso conviene revisar la fecha de vencimiento con varios meses de anticipación y empezar a reunir los antecedentes que se exigen.',
      'Esos antecedentes suelen incluir documentos del país de origen, que a menudo deben legalizarse o apostillarse, y comprobantes de tu situación laboral, familiar o de estudios en Chile, según el tipo de permiso. Un documento mal presentado o fuera de plazo es una de las causas de rechazo más evitables.',
      { subtitulo: 'Qué hacer si la respuesta es negativa' },
      'Un rechazo no siempre es el final del camino. Las resoluciones del Servicio pueden impugnarse mediante recursos administrativos y, en ciertos casos, mediante una reclamación ante la Corte de Apelaciones, sobre todo cuando se trata de medidas graves como una expulsión. Esos plazos son breves y corren desde que recibes la notificación, así que el tiempo importa.',
      { subtitulo: 'Cómo podemos ayudarte' },
      'Revisamos tu documentación antes de presentarla, evaluamos qué categoría de permiso te conviene y, si ya hubo un rechazo, analizamos si hay base para reclamar. Cuanto antes lo consultes, más opciones tienes.'
    ]
  },
  {
    slug: 'juzgado-de-policia-local-accidentes-multas-y-consumidor',
    titulo: 'Juzgado de Policía Local: accidentes, multas y reclamos como consumidor',
    bajada: 'Qué casos ve este tribunal, qué plazos conviene tener presentes y cómo prepararte antes de comparecer.',
    categoria: 'Policía Local', materia: 'policia-local', fecha: '5 de octubre de 2026', fechaISO: '2026-10-05',
    claves: [
      'Este tribunal conoce infracciones de tránsito, accidentes con daños, reclamos por la Ley del Consumidor y multas municipales, entre otras materias.',
      'Las acciones por infracciones a la Ley del Consumidor prescriben, por regla general, a los seis meses desde la infracción.',
      'La demanda de indemnización por un accidente tiene un plazo mayor, por regla general de cuatro años, pero conviene reunir pruebas de inmediato.',
      'Llegar con documentos, fotografías y testigos ordenados cambia el resultado.'
    ],
    cuerpo: [
      { subtitulo: 'Un tribunal cercano, pero con reglas propias' },
      'Los Juzgados de Policía Local son tribunales que resuelven asuntos de la vida cotidiana: infracciones a la Ley de Tránsito, accidentes con daños, infracciones a la Ley del Consumidor, multas por incumplir ordenanzas municipales y conflictos de copropiedad inmobiliaria, entre otros. Su procedimiento es más breve que el de un tribunal civil, pero no por eso es informal: hay plazos, formalidades y pruebas que presentar.',
      { subtitulo: 'Accidentes de tránsito' },
      'Si sufriste daños en un accidente, el juzgado puede conocer tanto la infracción, es decir, quién incumplió la norma de tránsito, como la demanda civil para exigir indemnización por los perjuicios: daños al vehículo, gastos médicos y otros. Reúne desde el primer día el parte policial, las fotografías, los presupuestos de reparación y los datos de los testigos, y revisa si tus seguros cubren parte del daño.',
      { subtitulo: 'Reclamos por la Ley del Consumidor' },
      'Cuando una empresa incumple lo ofrecido, entrega un producto defectuoso o cobra de más, puedes reclamar ante el SERNAC y, si no hay solución, denunciar o demandar ante el Juzgado de Policía Local. Un dato que muchos desconocen: por regla general, la acción prescribe a los seis meses desde que se cometió la infracción, aunque ese plazo puede suspenderse en determinados casos. No esperes para reunir boletas, contratos, correos y capturas de pantalla.',
      { subtitulo: 'Multas y comparecencia' },
      'Si recibiste una citación o una multa y no estás de acuerdo, puedes comparecer a defenderte con tus pruebas. Una multa impaga puede traer consecuencias adicionales, como la inscripción en el registro de multas de tránsito no pagadas y trabas para renovar la licencia o el permiso de circulación. Antes de pagar o de ignorar la citación, revisa tus opciones.'
    ]
  },
  {
    slug: 'gastos-comunes-y-conflictos-entre-vecinos-ley-de-copropiedad',
    titulo: 'Gastos comunes, ruidos y administración: qué dice la Ley de Copropiedad',
    bajada: 'Derechos y obligaciones de quienes viven en edificios y condominios, y qué puedes hacer cuando hay deudas o conflictos con la comunidad.',
    categoria: 'Copropiedad', materia: 'copropiedad', fecha: '5 de octubre de 2026', fechaISO: '2026-10-05',
    claves: [
      'La copropiedad inmobiliaria se rige por la Ley 21.442, que reemplazó a la antigua Ley 19.537.',
      'Los gastos comunes son obligatorios y su impago puede cobrarse judicialmente, con intereses y multas.',
      'Las infracciones al reglamento de copropiedad suelen reclamarse ante el Juzgado de Policía Local.',
      'Las decisiones se toman en asamblea, y tienes derecho a conocer las cuentas y las actas.'
    ],
    cuerpo: [
      { subtitulo: 'Una ley nueva para vivir en comunidad' },
      'La Ley 21.442 de Copropiedad Inmobiliaria regula los edificios, condominios y loteos con áreas comunes. Define cómo se administran los bienes comunes, qué obligaciones tiene cada copropietario y cómo se toman las decisiones de la comunidad. Reemplazó a la antigua Ley 19.537 e incorporó nuevas exigencias en materia de administración.',
      { subtitulo: 'Gastos comunes: obligación y cobro' },
      'Los gastos comunes permiten mantener ascensores, limpieza, seguridad, consumos de las áreas comunes y el fondo de reserva. Pagarlos es una obligación de cada copropietario. Si hay mora, la comunidad puede cobrar la deuda con intereses y multas y acudir a la vía judicial. Por eso, si un cobro no te cuadra, conviene pedir el detalle por escrito y reclamarlo a tiempo.',
      { subtitulo: 'Conflictos entre vecinos' },
      'Ruidos molestos, mascotas, uso de estacionamientos o modificaciones en las áreas comunes suelen estar regulados por el reglamento de copropiedad. Las infracciones se pueden denunciar ante el Juzgado de Policía Local, que puede aplicar multas. Antes de llegar ahí, conviene dejar registro: fotos, videos, mensajes y reclamos dirigidos al administrador o al comité.',
      { subtitulo: 'Asamblea, comité y administrador' },
      'Las decisiones más importantes se votan en la asamblea de copropietarios, que debe reunirse al menos una vez al año. El comité de administración supervisa al administrador, quien ejecuta los acuerdos y maneja las cuentas. Como copropietario puedes pedir información sobre los gastos, revisar las actas y participar con voz y voto, dentro de las reglas del reglamento.',
      'Cada comunidad tiene su propio reglamento, y ahí está gran parte de la respuesta a tu caso. Revisarlo con asesoría te ayuda a saber si tienes razón y cuál es la vía más eficaz para resolverlo.'
    ]
  },
  {
    slug: 'comprar-una-propiedad-estudio-de-titulos-y-promesa-de-compraventa',
    titulo: 'Antes de comprar una propiedad: estudio de títulos, promesa y escritura',
    bajada: 'Los pasos y verificaciones que protegen tu inversión cuando compras, vendes o arriendas un inmueble en Chile.',
    categoria: 'Inmobiliaria', materia: 'inmobiliaria', fecha: '5 de octubre de 2026', fechaISO: '2026-10-05',
    claves: [
      'La compraventa de una propiedad se otorga por escritura pública y se completa con la inscripción en el Conservador de Bienes Raíces.',
      'El estudio de títulos revisa la historia legal del inmueble para detectar hipotecas, prohibiciones u otros problemas antes de pagar.',
      'La promesa de compraventa debe cumplir requisitos legales para obligar a las partes.',
      'Revisar antes de firmar es mucho más barato que corregir después.'
    ],
    cuerpo: [
      { subtitulo: 'Primero, conocer la propiedad' },
      'Antes de comprometer dinero, se revisa el estado legal del inmueble. Se solicitan en el Conservador de Bienes Raíces la copia de la inscripción de dominio con vigencia y los certificados de hipotecas, gravámenes, interdicciones y prohibiciones. También se verifica que las contribuciones estén al día, que no existan deudas de gastos comunes y que el vendedor sea efectivamente quien figura como dueño.',
      { subtitulo: 'El estudio de títulos' },
      'El estudio de títulos analiza la cadena de inscripciones anteriores del inmueble, habitualmente de los últimos diez años, para confirmar que cada traspaso fue válido y que no hay vicios que afecten tu dominio. Es lo que detecta, por ejemplo, una hipoteca que nunca se alzó, una prohibición de enajenar o una herencia sin inscribir. El análisis que hace tu banco suele proteger la garantía del banco; una revisión independiente te protege a ti.',
      { subtitulo: 'La promesa de compraventa' },
      'Muchas operaciones parten con una promesa de compraventa, un contrato que obliga a las partes a celebrar después la compraventa definitiva. Para que sea válida debe constar por escrito, fijar un plazo o condición que determine cuándo se firmará el contrato prometido y describirlo de tal manera que solo falte cumplir las formalidades legales. Las arras, las multas y las causales de término deben quedar claras desde el comienzo para evitar disputas.',
      { subtitulo: 'Escritura, inscripción y arriendos' },
      'La compraventa de un inmueble debe otorgarse por escritura pública ante notario, y el dominio solo se transfiere cuando se inscribe en el Conservador de Bienes Raíces. Los arriendos también merecen un contrato bien redactado: plazo, renta, reajustes, garantía y condiciones de restitución, para prevenir conflictos posteriores.'
    ]
  },
  {
    slug: 'como-elegir-abogado-para-tu-caso',
    titulo: 'Cómo elegir al abogado correcto para tu caso: 5 preguntas antes de contratar',
    bajada: 'No todos los estudios trabajan igual. Estas son las preguntas que separan a un abogado comprometido de uno que solo toma el caso.',
    categoria: 'Cómo trabajamos', fecha: '12 de agosto de 2026', fechaISO: '2026-08-12',
    claves: [
      'Pregunta desde el inicio quién va a llevar realmente tu causa.',
      'Pide que te digan, por escrito, cada cuánto recibirás novedades.',
      'Averigua cómo se maneja un imprevisto: una audiencia que se reagenda o una prueba urgente.',
      'Después de la primera reunión deberías entender mejor tu situación que antes de entrar.'
    ],
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
    categoria: 'Laboral', materia: 'laboral', fecha: '3 de julio de 2026', fechaISO: '2026-07-03',
    claves: [
      'Tienes 60 días hábiles desde la separación para demandar por despido injustificado.',
      'Reclamar ante la Inspección del Trabajo suspende el plazo, pero nunca se extiende más allá de 90 días hábiles.',
      'En la primera semana guarda la carta de despido, el finiquito sin firmar y las liquidaciones de los últimos seis meses.',
      'Firmar el finiquito con reserva de derechos permite demandar igual por prestaciones mal calculadas.'
    ],
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
    categoria: 'Familia', materia: 'familia', fecha: '21 de mayo de 2026', fechaISO: '2026-05-21',
    claves: [
      'La Ley 21.389 creó el Registro Nacional de Deudores de Pensiones de Alimentos.',
      'Bastan tres cuotas consecutivas o cinco discontinuas impagas para que el tribunal ordene la inscripción.',
      'Estar inscrito implica retención de la devolución de impuestos y bloqueo de licencia y pasaporte.',
      'Se pide ante el mismo Juzgado de Familia que fijó los alimentos, sin iniciar una causa nueva.'
    ],
    cuerpo: [
      'La Ley 21.389 creó el Registro Nacional de Deudores de Pensiones de Alimentos. Bastan tres cuotas consecutivas o cinco discontinuas impagas para que el tribunal ordene la inscripción.',
      'Estar inscrito tiene consecuencias concretas: retención de la devolución de impuestos, bloqueo de la renovación de licencia de conducir y del pasaporte, y limitaciones para acceder a créditos y a ciertos cargos públicos.',
      'El procedimiento se pide ante el mismo Juzgado de Familia que fijó los alimentos y no requiere iniciar una causa nueva. Lo que sí requiere es tener la liquidación de la deuda al día.'
    ]
  }
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

// Minutos de lectura estimados (200 palabras por minuto).
export const minutosLectura = (p: Post) => {
  const texto = [...p.claves, ...p.cuerpo.map((b) => (typeof b === 'string' ? b : b.subtitulo))].join(' ');
  return Math.max(2, Math.round(texto.split(/\s+/).length / 200));
};

// Otras publicaciones para sugerir al final de un artículo.
export const relacionados = (slug: string, n = 3) => {
  const i = posts.findIndex((p) => p.slug === slug);
  return Array.from({ length: Math.min(n, posts.length - 1) }, (_, k) => posts[(i + 1 + k) % posts.length]);
};

// Filtros de la lista: materias con publicación, en el orden de las tarjetas de materias, y el tema general.
export const filtrosPublicaciones = (areas: { slug: string }[]) => {
  const orden = [...areas.map((a) => a.slug), 'general'];
  return orden
    .map((id) => ({ id, categoria: posts.find((p) => (p.materia ?? 'general') === id)?.categoria }))
    .filter((f): f is { id: string; categoria: string } => Boolean(f.categoria));
};
