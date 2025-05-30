const { Schema, model } = require("mongoose");

const paisSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  ficha_general_pais: {
    capital: { type: String, required: true },
    idiomas_oficiales: [{ type: String }],
    region: { type: String },
    poblacion_total: { type: String },
  },
  costo_vida_mensual_usd: {
    moneda: { type: String },
    tipo_cambio_usd: { type: String },
    residencia_universitaria_usd: { type: String },
    supermercado_mensual_usd: { type: String },
    transporte_publico_usd: { type: String },
    seguro_medico_obligatorio: { type: String },
  },
  sistema_educacion: {
    descripcion_general: { type: String },
    idiomas_instruccion: [{ type: String }],
    calendario_academico: { type: String },
  },
  universidades_mejor_rankeadas: [
    {
      nombreRanking: {
        type: String,
        required: true,
        trim: true,
      },
      universidades: [
        {
          nombre: {
            type: String,
            required: true,
            trim: true,
          },
          posicion: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
  comunidad_estudiantil_internacional: {
    porcentaje_estudiantes_internacionales: { type: String },
  },
  visa_y_requisitos_migratorios: {
    tipo_visa_estudiante: { type: String },
    documentacion_necesaria: [{ type: String }],
    trabajo_con_visa_estudiante: { type: String },
  },
  clima_y_estilo_vida: {
    clima_promedio_ciudades: { type: String },
    nivel_seguridad: { type: String },
    oferta_cultural_recreativa: { type: String },
    enchufes_y_voltaje: { type: String },
  },
});

module.exports = model("Pais", paisSchema);
