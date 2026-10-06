import { Scale, Gavel, Plane, Briefcase, Heart, Car, Building2, Home, BookOpen, type LucideIcon } from 'lucide-react';

// Un ícono por materia (clave = slug en lib/site.ts → areas). "general" es para artículos sin materia.
export const iconosMateria: Record<string, LucideIcon> = {
  penal: Gavel,
  civil: Scale,
  migracion: Plane,
  laboral: Briefcase,
  familia: Heart,
  'policia-local': Car,
  copropiedad: Building2,
  inmobiliaria: Home,
  general: BookOpen
};
