
const { Schema, model } = require("mongoose");

const AsignaturaSchema = new Schema({
    nombre: { 
        type: String,
        required: true 
    },
    descripcion: {
        type: String 
    },
    dificultad: {
        type: String 
    },
    estadoAsignatura: {
        type: String 
    },
    semestreId: {
        type: Schema.Types.ObjectId, // Cambiado a ObjectId
        ref: 'Semestre' // Referencia al modelo Semestre
    },
    
});


module.exports = model("Asignatura", AsignaturaSchema);