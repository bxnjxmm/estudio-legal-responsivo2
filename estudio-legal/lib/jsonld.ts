// Serializa datos estructurados (JSON-LD) para incrustarlos en un <script>. Se escapa "<" (y los dos separadores de
// línea de Unicode, códigos 8232 y 8233) para que ningún texto pueda cerrar la etiqueta con "</script>" ni abrir otra.
const SEPARADOR_LINEA = String.fromCharCode(8232);
const SEPARADOR_PARRAFO = String.fromCharCode(8233);

export const jsonLdSeguro = (datos: unknown) =>
  JSON.stringify(datos)
    .replace(/</g, '\\u003c')
    .split(SEPARADOR_LINEA).join('\\u2028')
    .split(SEPARADOR_PARRAFO).join('\\u2029');
