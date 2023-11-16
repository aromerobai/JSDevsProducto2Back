const { Schema, model } = require("mongoose");

const subjectSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
  dificultad: {
    type: String,
  },
  idSemestre:{
    type: String,
  }

});

module.exports = model("Subject", subjectSchema);