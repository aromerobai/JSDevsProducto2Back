const { gql } = require("apollo-server-express");
const Semestre = require("../models/Subject");


const SubjecttypeDefs = gql`
  type Subject {
    id: ID
    nombre:String,
    descripcion:String,
    dificultad:  String,
    idSemestre: String,
  }

  input SemestreInput {
    nombre:String,
    descripcion:String,
    dificultad:  String,
    idSemestre: String,
  }   

  type Query {
    helloSubject: String

  }
`; 

const Subjectresolvers = {
    Query: {
        helloSubject: () => "Hello world",
    },
  };

  module.exports = {
    SubjecttypeDefs,
    Subjectresolvers,
  };