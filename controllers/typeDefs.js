const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Semestre {
    id: ID
    nombre:String,
    descripcion:String,
    anno:  String,
    inicio: String,
    final: String,
    color:String,
  }

  input SemestreInput {
    nombre: String
    descripcion: String
    anno: String
    inicio: String
    final: String
    color: String
  }   

  type Query {
    hello: String
    getAllSemestre: [Semestre]
    getSemestre(id: ID): Semestre
  }

  type Mutation {
    createSemestre(SemestreInput: SemestreInput): Semestre
    deleteSemestre(id: ID): String
    deleteSemestreByIndex(index: Int): String
  }

`; 


module.exports = {
  typeDefs,
};