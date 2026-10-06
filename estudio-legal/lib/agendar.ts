// Preselección de materia en el bloque #agendar desde cualquier parte del sitio, sin librerías:
// - en la misma página se avisa con un CustomEvent;
// - desde otra página se usa el enlace `/?materia=<slug>#agendar`.
export const EVENTO_MATERIA = 'agendar:materia';

export const preseleccionarMateria = (slug: string) => {
  window.dispatchEvent(new CustomEvent<string>(EVENTO_MATERIA, { detail: slug }));
};

export const enlaceAgendar = (slug?: string) => (slug ? `/?materia=${slug}#agendar` : '/#agendar');
