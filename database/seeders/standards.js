/* eslint-disable max-lines */
import mongoose from 'mongoose';
import {STANDARD_TYPES_REF} from './standard_types.js';
import {STANDARD_PROPERTIES_REF} from './standard_properties.js';
const id = mongoose.Types.ObjectId;

export const STANDARDS_REF = {
  inventario_artefacto: id('623fb1b764fd56550e229ed4'),
  archivo_readme: id('623fb1b764fd56550e229ed2'),
  guia_instrucciones_descarga: id('623fb1b764fd56550e229ed5'),
  guia_instrucciones_ejecutar: id('623fb1b764fd56550e229ed6'),
  articulo_cientifico: id('623fb1b764fd56550e229ed7'),
  registro_software_resultados: id('623fb1b764fd56550e229ed8'),
  accesibilidad_archivos_datos: id('623fb1b764fd56550e229ed9'),
  ejecucion_software_resultados: id('623fb1b764fd56550e229eda'),
  manipulacion_datos: id('623fb1b764fd56550e229edb'),
  tiempos_ejecucion_completa: id('623fb1b764fd56550e229edc'),
  tiempo_ejecucion_corta: id('623fb1b764fd56550e229edd'),
  doi: id('623fb1b764fd56550e229ede'),
  repositorio_archivos_public: id('623fb1b764fd56550e229edf'),
  registro_confidencial: id('623fb1b764fd56550e229ee0'),
  archivo_citation: id('623fb1b764fd56550e229ee1'),
  archivo_authors: id('623fb1b764fd56550e229ee2'),
  artefactos_bien_estructurados: id('623fb1b764fd56550e229ee3'),
  respeto_normas_estandares: id('623fb1b764fd56550e229ee4'),
  archivo_contact: id('623fb1b764fd56550e229ee5'),
  archivo_requirements: id('623fb1b764fd56550e229ee6'),
  archivo_status: id('623fb1b764fd56550e229ee7'),
  archivo_license: id('623fb1b764fd56550e229ee8'),
  relevancia_artefacto: id('623fb1b764fd56550e229ee9'),
  registro_tipo_paquete: id('623fb1b764fd56550e229eea'),
  '30_min_duracion_config_install': id('623fb1b764fd56550e229eeb'),
  registro_entorno_virtual: id('623fb1b764fd56550e229eec'),
  guia_instalacion: id('623fb1b764fd56550e229eed'),
  artefactos_comprimidos: id('623fb1b764fd56550e229eee'),
  archivo_install: id('623fb1b764fd56550e229eef'),
  archivo_authors_reproducido: id('623fb1b764fd56550e229ef0'),
  archivo_abstract: id('623fb1b764fd56550e229ef1'),
  archivo_abstract_reproducido: id('623fb1b764fd56550e229ef2'),
  pruebas_sustanciales_reproducido: id('623fb1b764fd56550e229ef3'),
  respetos_trabajos_relacionados_reproducido: id('623fb1b764fd56550e229ef4'),
  resumen_critico_reproducido: id('623fb1b764fd56550e229ef5'),
  reflexiones_criticas_reproducido: id('623fb1b764fd56550e229ef6'),
  solicitud_insignia_reproducido: id('623fb1b764fd56550e229ef7'),
  tolerancia_resultados_reproducido: id('623fb1b764fd56550e229ef8'),
  narrativa_acontecimientos_reproducido: id('623fb1b764fd56550e229ef9'),
  articulo_cientifico_replicado: id('623fb1b764fd56550e229efa'),
  articulo_authors_replicado: id('623fb1b764fd56550e229efb'),
  articulo_abstract_replicado: id('623fb1b764fd56550e229efc'),
  pruebas_sustanciales_replicado: id('623fb1b764fd56550e229efd'),
  respeto_trabajos_relacionados_replicado: id('623fb1b764fd56550e229efe'),
  resumen_critico_replicado: id('623fb1b764fd56550e229eff'),
  reflexiones_critica_replicado: id('623fb1b764fd56550e229f00'),
  solicitud_insignia_replicado: id('623fb1b764fd56550e229f01'),
  narrativa_acontecimientos_replicado: id('623fb1b764fd56550e229f02'),
  tolerancia_resultados_replicado: id('623fb1b764fd56550e229f03')
};

export default [
  {
    _id: STANDARDS_REF.inventario_artefacto,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'inventario_artefacto',
    translation_key: 'standard_inventario_artefacto',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.archivo_readme,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'archivo_readme',
    translation_key: 'standard_archivo_readme',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.guia_instrucciones_descarga,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'guia_instrucciones_descarga',
    translation_key: 'standard_guia_instrucciones_descarga',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.guia_instrucciones_ejecutar,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'guia_instrucciones_ejecutar',
    translation_key: 'standard_guia_instrucciones_ejecutar',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.articulo_cientifico,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'articulo_cientifico',
    translation_key: 'standard_articulo_cientifico',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.registro_software_resultados,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'registro_software_resultados',
    translation_key: 'standard_registro_software_resultados',
    property: STANDARD_PROPERTIES_REF.coherent
  },
  {
    _id: STANDARDS_REF.accesibilidad_archivos_datos,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'accesibilidad_archivos_datos',
    translation_key: 'standard_accesibilidad_archivos_datos',
    property: STANDARD_PROPERTIES_REF.exercisable
  },
  {
    _id: STANDARDS_REF.ejecucion_software_resultados,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'ejecucion_software_resultados',
    translation_key: 'standard_ejecucion_software_resultados',
    property: STANDARD_PROPERTIES_REF.exercisable
  },
  {
    _id: STANDARDS_REF.manipulacion_datos,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'manipulacion_datos',
    translation_key: 'standard_manipulacion_datos',
    property: STANDARD_PROPERTIES_REF.exercisable
  },
  {
    _id: STANDARDS_REF.tiempos_ejecucion_completa,
    standard_type: STANDARD_TYPES_REF.optional,
    name: 'tiempos_ejecucion_completa',
    translation_key: 'standard_tiempos_ejecucion_completa',
    property: STANDARD_PROPERTIES_REF.exercisable
  },
  {
    _id: STANDARDS_REF.tiempo_ejecucion_corta,
    standard_type: STANDARD_TYPES_REF.optional,
    name: 'tiempo_ejecucion_corta',
    translation_key: 'standard_tiempo_ejecucion_corta',
    property: STANDARD_PROPERTIES_REF.exercisable
  },
  {
    _id: STANDARDS_REF.doi,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'doi',
    translation_key: 'standard_doi',
    property: STANDARD_PROPERTIES_REF.available
  },
  {
    _id: STANDARDS_REF.repositorio_archivos_public,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'repositorio_archivos_public',
    translation_key: 'standard_repositorio_archivos_public',
    property: STANDARD_PROPERTIES_REF.accessible
  },
  {
    _id: STANDARDS_REF.registro_confidencial,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'registro_confidencial',
    translation_key: 'standard_registro_confidencial',
    property: STANDARD_PROPERTIES_REF.accessible
  },
  {
    _id: STANDARDS_REF.archivo_citation,
    standard_type: STANDARD_TYPES_REF.optional,
    name: 'archivo_citation',
    translation_key: 'standard_archivo_citation',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.archivo_authors,
    standard_type: STANDARD_TYPES_REF.optional,
    name: 'archivo_authors',
    translation_key: 'standard_archivo_authors',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.artefactos_bien_estructurados,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'artefactos_bien_estructurados',
    translation_key: 'standard_artefactos_bien_estructurados',
    property: STANDARD_PROPERTIES_REF.good_structured
  },
  {
    _id: STANDARDS_REF.respeto_normas_estandares,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'respeto_normas_estandares',
    translation_key: 'standard_respeto_normas_estandares',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.archivo_contact,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'archivo_contact',
    translation_key: 'standard_archivo_contact',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.archivo_requirements,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'archivo_requirements',
    translation_key: 'standard_archivo_requirements',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.archivo_status,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'archivo_status',
    translation_key: 'standard_archivo_status',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.archivo_license,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'archivo_license',
    translation_key: 'standard_archivo_license',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.relevancia_artefacto,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'relevancia_artefacto',
    translation_key: 'standard_relevancia_artefacto',
    property: STANDARD_PROPERTIES_REF.coherent
  },
  {
    _id: STANDARDS_REF.registro_tipo_paquete,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'registro_tipo_paquete',
    translation_key: 'standard_registro_tipo_paquete',
    property: STANDARD_PROPERTIES_REF.coherent
  },
  {
    _id: STANDARDS_REF['30_min_duracion_config_install'],
    standard_type: STANDARD_TYPES_REF.required,
    name: '30_min_duracion_config_install',
    translation_key: 'standard_30_min_duracion_config_install',
    property: STANDARD_PROPERTIES_REF.exercisable
  },
  {
    _id: STANDARDS_REF.registro_entorno_virtual,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'registro_entorno_virtual',
    translation_key: 'standard_registro_entorno_virtual',
    property: STANDARD_PROPERTIES_REF.exercisable
  },
  {
    _id: STANDARDS_REF.guia_instalacion,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'guia_instalacion',
    translation_key: 'standard_guia_instalacion',
    property: STANDARD_PROPERTIES_REF.exercisable
  },
  {
    _id: STANDARDS_REF.artefactos_comprimidos,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'artefactos_comprimidos',
    translation_key: 'standard_artefactos_comprimidos',
    property: STANDARD_PROPERTIES_REF.exercisable
  },
  {
    _id: STANDARDS_REF.archivo_install,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'archivo_install',
    translation_key: 'standard_archivo_install',
    property: STANDARD_PROPERTIES_REF.exercisable
  },
  {
    _id: STANDARDS_REF.archivo_authors_reproducido,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'archivo_authors_reproducido',
    translation_key: 'standard_archivo_authors_reproducido',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.archivo_abstract,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'archivo_abstract',
    translation_key: 'standard_archivo_abstract',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.archivo_abstract_reproducido,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'archivo_abstract_reproducido',
    translation_key: 'standard_archivo_abstract_reproducido',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.pruebas_sustanciales_reproducido,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'pruebas_sustanciales_reproducido',
    translation_key: 'standard_pruebas_sustanciales_reproducido',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.respetos_trabajos_relacionados_reproducido,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'respetos_trabajos_relacionados_reproducido',
    translation_key: 'standard_respetos_trabajos_relacionados_reproducido',
    property: STANDARD_PROPERTIES_REF.ethical
  },
  {
    _id: STANDARDS_REF.resumen_critico_reproducido,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'resumen_critico_reproducido',
    translation_key: 'standard_resumen_critico_reproducido',
    property: STANDARD_PROPERTIES_REF.ethical
  },
  {
    _id: STANDARDS_REF.reflexiones_criticas_reproducido,
    standard_type: STANDARD_TYPES_REF.optional,
    name: 'reflexiones_criticas_reproducido',
    translation_key: 'standard_reflexiones_criticas_reproducido',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.solicitud_insignia_reproducido,
    standard_type: STANDARD_TYPES_REF.optional,
    name: 'solicitud_insignia_reproducido',
    translation_key: 'standard_solicitud_insignia_reproducido',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.tolerancia_resultados_reproducido,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'tolerancia_resultados_reproducido',
    translation_key: 'standard_tolerancia_resultados_reproducido',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.narrativa_acontecimientos_reproducido,
    standard_type: STANDARD_TYPES_REF.optional,
    name: 'narrativa_acontecimientos_reproducido',
    translation_key: 'standard_narrativa_acontecimientos_reproducido',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.articulo_cientifico_replicado,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'articulo_cientifico_replicado',
    translation_key: 'standard_articulo_cientifico_replicado',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.articulo_authors_replicado,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'articulo_authors_replicado',
    translation_key: 'standard_articulo_authors_replicado',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.articulo_abstract_replicado,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'articulo_abstract_replicado',
    translation_key: 'standard_articulo_abstract_replicado',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.pruebas_sustanciales_replicado,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'pruebas_sustanciales_replicado',
    translation_key: 'standard_pruebas_sustanciales_replicado',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.respeto_trabajos_relacionados_replicado,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'respeto_trabajos_relacionados_replicado',
    translation_key: 'standard_respeto_trabajos_relacionados_replicado',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.resumen_critico_replicado,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'resumen_critico_replicado',
    translation_key: 'standard_resumen_critico_replicado',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.reflexiones_critica_replicado,
    standard_type: STANDARD_TYPES_REF.required,
    name: 'reflexiones_critica_replicado',
    translation_key: 'standard_reflexiones_critica_replicado',
    property: STANDARD_PROPERTIES_REF.complete
  },
  {
    _id: STANDARDS_REF.solicitud_insignia_replicado,
    standard_type: STANDARD_TYPES_REF.optional,
    name: 'solicitud_insignia_replicado',
    translation_key: 'standard_solicitud_insignia_replicado',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.narrativa_acontecimientos_replicado,
    standard_type: STANDARD_TYPES_REF.optional,
    name: 'narrativa_acontecimientos_replicado',
    translation_key: 'standard_narrativa_acontecimientos_replicado',
    property: STANDARD_PROPERTIES_REF.documented
  },
  {
    _id: STANDARDS_REF.tolerancia_resultados_replicado,
    standard_type: STANDARD_TYPES_REF.optional,
    name: 'tolerancia_resultados_replicado',
    translation_key: 'standard_tolerancia_resultados_replicado',
    property: STANDARD_PROPERTIES_REF.documented
  }
];
