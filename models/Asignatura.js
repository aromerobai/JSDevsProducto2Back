
const { Schema, model } = require("mongoose");

const AsignaturaSchema = new Schema({
    Nombre: { 
        type: String,
        required: true 
    },
    Descripcion: {
        type: String 
    },
    Dificultad: {
        type: String 
    },
    EstadoAsignatura: {
        type: String 
    },
    
});


module.exports = model("Asignatura", AsignaturaSchema);