import mongoose from 'mongoose';
import {STANDARDS_REF} from './standards.js';

const id = mongoose.Types.ObjectId;

export const BADGES_REF = {
  funcional: id('623fb1b764fd56550e229ed6'),
  disponible: id('623fb1b764fd56550e229ed7'),
  reutilizable: id('623fb1b764fd56550e229ed8'),
  reproducido: id('623fb1b764fd56550e229ed9'),
  replicado: id('623fb1b764fd56550e229eda')
};

export default [
  {
    _id: BADGES_REF.funcional,
    name: 'Funcional',
    translation_key: 'badge_functional',
    standards: [
      STANDARDS_REF.inventario_artefacto,
      STANDARDS_REF.archivo_readme,
      STANDARDS_REF.guia_instrucciones_descarga,
      STANDARDS_REF.guia_instrucciones_ejecutar,
      STANDARDS_REF.articulo_cientifico,
      STANDARDS_REF.registro_software_resultados,
      STANDARDS_REF.accesibilidad_archivos_datos,
      STANDARDS_REF.ejecucion_software_resultados,
      STANDARDS_REF.manipulacion_datos,
      STANDARDS_REF.tiempos_ejecucion_completa,
      STANDARDS_REF.tiempo_ejecucion_corta,
      STANDARDS_REF.relevancia_artefacto
    ],
    image: 'https://firebasestorage.googleapis.com/v0/b/replication-package.appspot.com/o/Badges%2Ffuncional.png?alt=media&token=55101a6e-2a9c-4ee0-9f8f-ce1e5116cbc1'
  },
  {
    _id: BADGES_REF.disponible,
    name: 'Disponible',
    translation_key: 'badge_available',
    standards: [
      STANDARDS_REF.doi,
      STANDARDS_REF.repositorio_archivos_public,
      STANDARDS_REF.registro_confidencial,
      STANDARDS_REF.archivo_citation,
      STANDARDS_REF.archivo_authors
    ],
    image: 'https://firebasestorage.googleapis.com/v0/b/replication-package.appspot.com/o/Badges%2Fdisponible.png?alt=media&token=820d24e3-0340-41c4-b251-64d82424b573'
  },
  {
    _id: BADGES_REF.reutilizable,
    name: 'Reutilizable',
    translation_key: 'badge_reusable',
    standards: [
      STANDARDS_REF.artefactos_bien_estructurados,
      STANDARDS_REF.respeto_normas_estandares,
      STANDARDS_REF.archivo_readme,
      STANDARDS_REF.inventario_artefacto,
      STANDARDS_REF.archivo_contact,
      STANDARDS_REF.archivo_requirements,
      STANDARDS_REF.archivo_status,
      STANDARDS_REF.archivo_license,
      STANDARDS_REF.guia_instrucciones_descarga,
      STANDARDS_REF.guia_instrucciones_ejecutar,
      STANDARDS_REF.articulo_cientifico,
      STANDARDS_REF.relevancia_artefacto
    ],
    image: 'https://firebasestorage.googleapis.com/v0/b/replication-package.appspot.com/o/Badges%2Freutilizable.png?alt=media&token=2bb42c02-efcf-4bc4-ae1f-c10ddc9c7514'
  },
  {
    _id: BADGES_REF.reproducido,
    name: 'Reproducido',
    translation_key: 'badge_reproduced',
    standards: [],
    image: 'https://firebasestorage.googleapis.com/v0/b/replication-package.appspot.com/o/Badges%2Freproducido.png?alt=media&token=99c23331-dba5-4b6f-8ffb-cc679c483c83'
  },
  {
    _id: BADGES_REF.replicado,
    name: 'Replicado',
    translation_key: 'badge_replicated',
    replicado: 'badge_replicated',
    standards: [],
    image: 'https://firebasestorage.googleapis.com/v0/b/replication-package.appspot.com/o/Badges%2Freplicado.png?alt=media&token=f3ac63c2-8844-4aac-903c-6bade2635eef'
  }
];
