const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Semestre {
    id: ID
    nombre: String
    descripcion: String
    anno: String
    inicio: String
    final: String
    color: String
  }

  input SemestreInput {
    nombre: String
    descripcion: String
    anno: String
    inicio: String
    final: String
    color: String
  }

  type Asignatura {
    id: ID
    nombre: String
    descripcion: String
    dificultad: String
    estadoAsignatura: String
    semestreId: ID
  }

  input AsignaturaInput {
    nombre: String
    descripcion: String
    dificultad: String
    estadoAsignatura: String
    semestreId: ID
  }

  type Query {
    hello: String
    getAllSemestre: [Semestre]
    getSemestre(id: ID): Semestre
    getAllAsignatura: [Asignatura]
    getAsignatura(id: ID): Asignatura
    getAsignaturasBySemestre(semestreId: ID): [Asignatura]
  }

  type Mutation {
    createSemestre(SemestreInput: SemestreInput): Semestre
    deleteSemestre(id: ID): String
    deleteSemestreByIndex(index: Int): String
    createAsignatura(AsignaturaInput: AsignaturaInput): Asignatura
    updateAsignatura(id: ID, AsignaturaInput: AsignaturaInput): Asignatura
    deleteAsignatura(id: ID): String
  }
`;
  


module.exports = {
  typeDefs,
};